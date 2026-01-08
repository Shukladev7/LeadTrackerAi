'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth-context';
import { MessageSquare, Mail, Send, FileText, Loader2 } from 'lucide-react';
import { addActivityToLead } from '@/lib/data';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';
import { Quotation, Lead, PopulatedQuotationProduct } from '@/lib/business-types';

interface QuotationCommunicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'whatsapp' | 'email';
  quotation: Quotation;
  lead: Lead;
  products: PopulatedQuotationProduct[];
  quotationRef: React.RefObject<HTMLDivElement>;
  defaultMessage?: string;
}

export function QuotationCommunicationDialog({
  open,
  onOpenChange,
  type,
  quotation,
  lead,
  products,
  quotationRef,
  defaultMessage = "Please find the quotation and product catalog attached. Thank you for your interest in our products."
}: QuotationCommunicationDialogProps) {
  const [message, setMessage] = useState(defaultMessage);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const generateCombinedPDF = async (): Promise<Blob | null> => {
    try {
      setIsGeneratingPDF(true);
      
      // Generate the quotation PDF first
      const element = quotationRef.current;
      if (!element) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not generate quotation PDF',
        });
        return null;
      }

      element.classList.add('pdf-page-root');

      const quotationPdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = quotationPdf.internal.pageSize.getWidth();
      const pageHeight = quotationPdf.internal.pageSize.getHeight();

      const marginLeft = 5;
      const marginRight = 5;
      const marginTop = 5;
      const marginBottom = 5;

      const contentWidth = pageWidth - marginLeft - marginRight;

      // Separate header and body to allow repeating letterhead on each page
      const headerElement = element.querySelector('[data-quotation-header="true"]') as HTMLElement | null;
      const bodyElement = element.querySelector('[data-quotation-body="true"]') as HTMLElement | null || element;

      let headerHeightMm = 0;
      let headerDataUrl: string | null = null;

      if (headerElement) {
        const headerCanvas = await html2canvas(headerElement, {
          scale: 2,
          useCORS: true,
        });
        headerDataUrl = headerCanvas.toDataURL('image/png');
        headerHeightMm = (headerCanvas.height * contentWidth) / headerCanvas.width;
      }

      const extraHeightPx = 0;
      const bodyCanvas = await html2canvas(bodyElement, {
        scale: 2,
        useCORS: true,
        height: bodyElement.scrollHeight + extraHeightPx,
        windowHeight: bodyElement.scrollHeight + extraHeightPx,
      });

      // protective: if html2canvas failed to render height 0, bail early
      if (!bodyCanvas || bodyCanvas.height === 0 || bodyCanvas.width === 0) {
        throw new Error('html2canvas produced empty canvas for quotation body');
      }

      const bodyData = bodyCanvas.toDataURL('image/png');

      const bodyContentHeight = (bodyCanvas.height * contentWidth) / bodyCanvas.width;

      // Reserve a safe header area on each page (in mm) to ensure no overlap
      const minHeaderSafeAreaMm = 25;
      const effectiveHeaderMm = Math.max(headerHeightMm, minHeaderSafeAreaMm);

      // Extra vertical gap between header and body on each page (in mm)
      const extraTopGapMm = 3;

      // Convert between mm (PDF space) and pixels (canvas space)
      const pxPerMm = bodyContentHeight > 0 ? (bodyCanvas.height / bodyContentHeight) : 1;

      // Usable body height on the page after header and margins (mm)
      const maxUsableBodyMm = pageHeight - marginTop - marginBottom - effectiveHeaderMm - extraTopGapMm;

      // Keep roughly 5 products per page as a baseline estimate
      const rowsPerPageTarget = 5;
      const estimatedRowHeightMm = products.length > 0
        ? bodyContentHeight / (products.length + 2) // +2 to account for totals/other content
        : bodyContentHeight;
      const targetBodyHeightMm = rowsPerPageTarget * estimatedRowHeightMm;

      // Also constrain the bottom whitespace to be around 20mm on full pages
      const desiredBodyHeightMmByBottom = Math.max(0, maxUsableBodyMm - 16);

      // Final per-page body height (mm):
      const pageBodyHeightMm = Math.min(
        maxUsableBodyMm,
        Math.max(targetBodyHeightMm, desiredBodyHeightMmByBottom)
      );
      const pageBodyHeightPx = Math.max(1, pageBodyHeightMm * pxPerMm);

      // Add header + body content across multiple pages by slicing the body image
      const canvasWidth = bodyCanvas.width;
      const canvasHeight = bodyCanvas.height;

      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = canvasWidth;
      const sliceContext = sliceCanvas.getContext('2d');

      let usedPages = 0;

      if (!sliceContext) {
        // Fallback: single-page render if canvas context is unavailable
        if (headerDataUrl && headerHeightMm > 0) {
          quotationPdf.addImage(headerDataUrl, 'PNG', marginLeft, marginTop, contentWidth, headerHeightMm);
        }
        quotationPdf.addImage(
          bodyData,
          'PNG',
          marginLeft,
          marginTop + effectiveHeaderMm + extraTopGapMm,
          contentWidth,
          bodyContentHeight
        );
        usedPages = 1;
      } else {
        let currentYpx = 0;
        let firstSlice = true;
        const minRemainingSlicePx = 4;

        while (currentYpx < canvasHeight) {
          const remainingPx = canvasHeight - currentYpx;
          if (remainingPx <= minRemainingSlicePx) break;

          // For pages after first, create a new PDF page before drawing content
          if (!firstSlice) {
            quotationPdf.addPage();
            if (headerDataUrl && headerHeightMm > 0) {
              // draw header on each new page
              quotationPdf.addImage(headerDataUrl, 'PNG', marginLeft, marginTop, contentWidth, headerHeightMm);
            }
          } else {
            // first page: draw header (if available) on the already existing first page
            if (headerDataUrl && headerHeightMm > 0) {
              quotationPdf.addImage(headerDataUrl, 'PNG', marginLeft, marginTop, contentWidth, headerHeightMm);
            }
          }

          const sliceHeightPx = Math.min(pageBodyHeightPx, remainingPx);
// Skip extremely small trailing slices to avoid blank last page
if ((sliceHeightPx / pxPerMm) < 8) {
    break;
}
          if (sliceHeightPx <= 0) break;
          const sliceHeightMm = sliceHeightPx / pxPerMm;

          sliceCanvas.height = sliceHeightPx;
          sliceContext.clearRect(0, 0, canvasWidth, sliceHeightPx);
          sliceContext.drawImage(
            bodyCanvas,
            0,
            currentYpx,
            canvasWidth,
            sliceHeightPx,
            0,
            0,
            canvasWidth,
            sliceHeightPx
          );

          const sliceDataUrl = sliceCanvas.toDataURL('image/png');
          const yPos = marginTop + effectiveHeaderMm + extraTopGapMm;

          // Draw this slice at yPos
          quotationPdf.addImage(
            sliceDataUrl,
            'PNG',
            marginLeft,
            yPos,
            contentWidth,
            sliceHeightMm
          );

          // We placed content on a page — count it
          
          if (sliceHeightPx / pxPerMm < 8) {
    break;
}usedPages += 1;

          currentYpx += sliceHeightPx;
          firstSlice = false;
        }
      }

      // Ensure we don't keep extra empty pages at the end
      let totalPages = quotationPdf.getNumberOfPages();
      while (totalPages > usedPages && totalPages > 0) {
        quotationPdf.deletePage(totalPages);
        totalPages = quotationPdf.getNumberOfPages();
      }

      // Get the quotation PDF as array buffer
      const quotationPdfBytes = quotationPdf.output('arraybuffer');

      // Create a new PDF document using pdf-lib
      const mergedPdf = await PDFDocument.create();
      
      // Add the quotation PDF
      const quotationPdfDoc = await PDFDocument.load(quotationPdfBytes);
      const quotationPages = await mergedPdf.copyPages(quotationPdfDoc, quotationPdfDoc.getPageIndices());
      quotationPages.forEach((page) => mergedPdf.addPage(page));

      // Get products with catalog PDFs
      const productsWithCatalogs = products.filter(p => p.product.cataloguePdf?.url);

      // Add catalog PDFs if available (Option B — pre-existing PDF files)
      for (const productItem of productsWithCatalogs) {
        const catalogPdf = productItem.product.cataloguePdf;
        if (catalogPdf?.url) {
          try {
            const response = await fetch(catalogPdf.url);
            const arrayBuffer = await response.arrayBuffer();
            const catalogPdfDoc = await PDFDocument.load(arrayBuffer);
            const catalogPages = await mergedPdf.copyPages(catalogPdfDoc, catalogPdfDoc.getPageIndices());
            catalogPages.forEach((page) => mergedPdf.addPage(page));
          } catch (err) {
            console.error(`Error processing catalog for ${productItem.product.name}:`, err);
          }
        }
      }

      // Generate the merged PDF blob
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      
      return blob;
    } catch (error) {
      console.error('Error generating combined PDF:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate combined PDF',
      });
      return null;
    } finally {
      const element = quotationRef.current;
      if (element) {
        element.classList.remove('pdf-page-root');
      }
      setIsGeneratingPDF(false);
    }
  };

  const handleSend = async () => {
    if (!message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    // Generate the combined PDF
    const pdfBlob = await generateCombinedPDF();
    if (!pdfBlob) {
      return; // Error already shown in generateCombinedPDF
    }

    // Log the communication activity
    try {
      const contact = type === 'whatsapp' ? (lead.whatsappNumber || lead.phone) : lead.email;
      const sentBy = user?.displayName || user?.email || 'Unknown User';
      const channel = type === 'whatsapp' ? 'WhatsApp' : 'Email';
      const activityNotes = `${channel} message sent to ${contact} by ${sentBy}:\n\n"${message}\n\n📎 Quotation ${quotation.quotationNumber} with product catalogs attached."`;

      if (lead.id) {
        await addActivityToLead(lead.id, {
          type: channel as any,
          notes: activityNotes,
        } as any);
      }
    } catch (error) {
      console.error('Error logging communication activity:', error);
      // Continue with sending even if logging fails
    }

    if (type === 'whatsapp') {
      await openWhatsAppWithPDF(pdfBlob);
    } else {
      await openEmailWithPDF(pdfBlob);
    }

    onOpenChange(false);
    setMessage(defaultMessage); // Reset message for next time
  };

  const openWhatsAppWithPDF = async (pdfBlob: Blob) => {
    // Create a temporary download link for the PDF
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Quotation-${quotation.quotationNumber}-with-catalogs.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Clean the phone number (remove any non-digit characters except +)
    const contact = lead.whatsappNumber || lead.phone || '';
    const cleanNumber = contact.replace(/[^\d+]/g, '');
    
    // Create message with PDF reference
    const whatsappMessage = `${message}\n\n📎 Please find the quotation PDF downloaded to your device.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "WhatsApp Opened",
      description: `PDF downloaded and WhatsApp opened to send to ${lead.name}`,
      variant: "default",
    });
  };

  const openEmailWithPDF = async (pdfBlob: Blob) => {
    // Create a temporary download link for the PDF
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Quotation-${quotation.quotationNumber}-with-catalogs.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Create email subject and body for Gmail
    const subject = encodeURIComponent(`Quotation ${quotation.quotationNumber} - ${lead.company}`);
    const emailBody = encodeURIComponent(`${message}\n\n📎 Please find the quotation PDF downloaded to your device. You can attach it to this email.`);
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(lead.email)}&su=${subject}&body=${emailBody}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');
    
    toast({
      title: "Gmail Opened",
      description: `PDF downloaded and Gmail opened in browser to send to ${lead.name}`,
      variant: "default",
    });
  };

  const Icon = type === 'whatsapp' ? MessageSquare : Mail;
  const title = type === 'whatsapp' ? 'Send WhatsApp with PDF' : 'Send Email with PDF';
  const contact = type === 'whatsapp' ? (lead.whatsappNumber || lead.phone) : lead.email;
  const description = `Send quotation with catalog PDF to ${lead.name} (${contact})`;

  const catalogCount = products.filter(p => p.product.cataloguePdf?.url).length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">
              <p className="font-medium">Combined PDF will include:</p>
              <p className="text-muted-foreground">
                • Quotation {quotation.quotationNumber}
                {catalogCount > 0 && (
                  <span> • {catalogCount} Product catalog{catalogCount > 1 ? 's' : ''}</span>
                )}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              The PDF will be downloaded and you can attach it manually.
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isGeneratingPDF}>
            Cancel
          </Button>
          <Button onClick={handleSend} disabled={isGeneratingPDF} className="flex items-center gap-2">
            {isGeneratingPDF ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {isGeneratingPDF ? 'Generating PDF...' : `Send ${type === 'whatsapp' ? 'WhatsApp' : 'Email'}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
