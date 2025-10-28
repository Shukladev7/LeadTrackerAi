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
import { logCommunicationActivityAction } from '@/lib/actions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';
import { Quotation, Lead, PopulatedQuotationProduct, ProductModel } from '@/lib/business-types';

interface QuotationCommunicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'whatsapp' | 'email';
  quotation: Quotation;
  lead: Lead;
  products: (PopulatedQuotationProduct & { model?: ProductModel })[];
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

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
      });
      const data = canvas.toDataURL('image/png');

      const quotationPdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = quotationPdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      quotationPdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);

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
      
      // Add catalog PDFs if available
      for (const productItem of productsWithCatalogs) {
        const catalogPdf = productItem.product.cataloguePdf;
        if (catalogPdf?.url) {
          try {
            // Fetch PDF from Firebase Storage URL
            const response = await fetch(catalogPdf.url);
            const arrayBuffer = await response.arrayBuffer();

            // Load the catalog PDF
            const catalogPdfDoc = await PDFDocument.load(arrayBuffer);
            
            // Add a separator page with product name
            const separatorPage = mergedPdf.addPage();
            const productTitle = productItem.model 
              ? `Product Catalog: ${productItem.product.name} (${productItem.model.name})`
              : `Product Catalog: ${productItem.product.name}`;
            separatorPage.drawText(productTitle, {
              x: 50,
              y: separatorPage.getHeight() - 100,
              size: 20,
            });
            if (productItem.model?.description) {
              separatorPage.drawText(`Description: ${productItem.model.description}`, {
                x: 50,
                y: separatorPage.getHeight() - 140,
                size: 12,
              });
            }
            
            // Copy and add catalog pages
            const catalogPages = await mergedPdf.copyPages(catalogPdfDoc, catalogPdfDoc.getPageIndices());
            catalogPages.forEach((page) => {
              mergedPdf.addPage(page);
            });
          } catch (error) {
            console.error(`Error processing catalog for ${productItem.product.name}:`, error);
          }
        }
      }

      // Generate the merged PDF blob
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      
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
      const formData = new FormData();
      formData.append('leadId', lead.id || '');
      formData.append('type', type === 'whatsapp' ? 'WhatsApp' : 'Email');
      formData.append('message', `${message}\n\n📎 Quotation ${quotation.quotationNumber} with product catalogs attached.`);
      formData.append('contact', type === 'whatsapp' ? (lead.whatsappNumber || lead.phone) : lead.email);
      formData.append('sentBy', user?.displayName || user?.email || 'Unknown User');
      
      await logCommunicationActivityAction(formData);
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
    const contact = lead.whatsappNumber || lead.phone;
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
