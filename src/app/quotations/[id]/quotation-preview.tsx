
'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { format } from 'date-fns';
import { 
  addWatermarkToJsPDF, 
  addWatermarkToAllPages, 
  downloadPdfBlob,
  LinkInfo 
} from '@/lib/pdf-watermark';
import { 
  Quotation,
  Lead,
  PopulatedQuotationProduct,
} from '@/lib/business-types';
import { ProductCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import dynamic from 'next/dynamic';
import { QuotationCommunicationButtons } from './quotation-communication-buttons';
import Image from 'next/image';
import { amountToWords } from '@/lib/number-to-words';

type QuotationPreviewProps = {
  quotation: Quotation;
  lead: Lead;
  products: PopulatedQuotationProduct[];
  categories?: ProductCategory[];
};

// Defer loading of the PDF viewer until actually used
const PDFViewer = dynamic(() => import('@/components/pdf-viewer').then(m => m.PDFViewer), {
  ssr: false,
});

export function QuotationPreview({
  quotation,
  lead,
  products,
  categories = [],
}: QuotationPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  
  // Currency conversion helper
  const convertAmount = (amountInINR: number): number => {
    const conversionRate = quotation.conversionRate || 1.0;
    return amountInINR / conversionRate;
  };
  
  // Format currency with the selected currency symbol
  const formatCurrency = (amountInINR: number): string => {
    const convertedAmount = convertAmount(amountInINR);
    const symbol = quotation.currencySymbol || '₹';
    const code = quotation.currencyCode || 'INR';
    
    // Format with proper decimal places
    const formatted = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedAmount);
    
    return `${symbol}${formatted}`;
  };
  const completePreviewRef = useRef<HTMLDivElement>(null);
  const [isGeneratingMerged, setIsGeneratingMerged] = useState(false);
  const [showCatalogs, setShowCatalogs] = useState(false);
  const { toast } = useToast();

  // Helper function to collect product image link information
  const collectProductImageLinks = (quotationElement: HTMLElement, canvas: HTMLCanvasElement, pdfWidth: number, pdfHeight: number): LinkInfo[] => {
    const links: LinkInfo[] = [];
    
    try {
      // Find all product image links in the DOM using data attribute
      const imageLinks = quotationElement.querySelectorAll('a[data-product-image-link="true"]');
      
      if (imageLinks.length === 0) {
        console.log('No product image links found');
        return links;
      }
      
      console.log(`Found ${imageLinks.length} product image links`);
      
      // Get the actual rendered dimensions
      const containerWidth = quotationElement.offsetWidth;
      const containerHeight = quotationElement.offsetHeight;
      
      // Calculate the scale factor used by html2canvas
      const canvasScale = canvas.width / containerWidth;
      
      console.log(`Container: ${containerWidth}x${containerHeight}px, Canvas: ${canvas.width}x${canvas.height}px, Scale: ${canvasScale}`);
      
      imageLinks.forEach((link, index) => {
        const anchor = link as HTMLAnchorElement;
        
        // Use getBoundingClientRect for positioning
        const anchorRect = anchor.getBoundingClientRect();
        const containerRect = quotationElement.getBoundingClientRect();
        
        // Calculate position relative to container (in pixels)
        const offsetX = anchorRect.left - containerRect.left;
        const offsetY = anchorRect.top - containerRect.top;
        
        // Get dimensions (in pixels)
        const width = anchorRect.width;
        const height = anchorRect.height;
        
        // Convert from container pixels to PDF mm
        // The PDF dimensions are based on the canvas, so we need to account for that
        const pdfX = (offsetX / containerWidth) * pdfWidth;
        const pdfY = (offsetY / containerHeight) * pdfHeight;
        const pdfLinkWidth = (width / containerWidth) * pdfWidth;
        const pdfLinkHeight = (height / containerHeight) * pdfHeight;
        
        console.log(`Link ${index}:`);
        console.log(`  URL: ${anchor.href}`);
        console.log(`  DOM position: x=${offsetX.toFixed(2)}px, y=${offsetY.toFixed(2)}px`);
        console.log(`  DOM size: ${width.toFixed(2)}px x ${height.toFixed(2)}px`);
        console.log(`  PDF position: (${pdfX.toFixed(2)}, ${pdfY.toFixed(2)}) mm`);
        console.log(`  PDF size: ${pdfLinkWidth.toFixed(2)} x ${pdfLinkHeight.toFixed(2)} mm`);
        
        links.push({
          x: pdfX,
          y: pdfY,
          width: pdfLinkWidth,
          height: pdfLinkHeight,
          url: anchor.href,
        });
      });
      
      console.log(`Collected ${links.length} link info objects`);
    } catch (error) {
      console.error('Error collecting product image links:', error);
    }
    
    return links;
  };

  const handleDownload = async () => {
    // This function now only downloads the quotation part (without catalogs)
    const quotationElement = previewRef.current;
    if (!quotationElement) return;

    try {
      const { default: jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      
      const canvas = await html2canvas(quotationElement, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
      });
      const data = canvas.toDataURL('image/png');

      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Collect link information AFTER rendering canvas for accurate positions
      const links = collectProductImageLinks(quotationElement, canvas, pdfWidth, pdfHeight);

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Add watermark and links (use template/company logo if available) and download
      const watermarkedBlob = await addWatermarkToJsPDF(pdf, quotation.logoUrl, links);
      downloadPdfBlob(watermarkedBlob, `Quotation-${quotation.quotationNumber}.pdf`);
    } catch (error) {
      console.error('Error generating quotation PDF with watermark:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate quotation PDF with watermark',
      });
    }
  };

  const handleDownloadCompletePreview = async () => {
    // This function downloads the complete preview (quotation + catalogs) as HTML-to-PDF
    const completeElement = completePreviewRef.current;
    if (!completeElement) return;

    setIsGeneratingMerged(true);
    
    try {
      const { default: jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      
      const canvas = await html2canvas(completeElement, {
        scale: 1.5, // Slightly lower scale for large content
        useCORS: true,
        height: completeElement.scrollHeight,
        windowHeight: completeElement.scrollHeight,
      });
      const data = canvas.toDataURL('image/png');

      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Collect link information AFTER rendering canvas
      const links = collectProductImageLinks(completeElement, canvas, pdfWidth, imgHeight);

      let heightLeft = imgHeight;
      let position = 0;
      
      // Add first page
      pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
      
      heightLeft -= pdfHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // Add watermark and links (use template/company logo if available) and download
      const watermarkedBlob = await addWatermarkToJsPDF(pdf, quotation.logoUrl, links);
      downloadPdfBlob(watermarkedBlob, `Quotation-${quotation.quotationNumber}-complete.pdf`);
      
      toast({
        title: 'Success',
        description: 'Complete quotation with catalogs downloaded successfully!',
      });
    } catch (error) {
      console.error('Error generating complete preview PDF:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate complete preview PDF',
      });
    } finally {
      setIsGeneratingMerged(false);
    }
  };

  const handleDownloadWithCatalogs = async () => {
    setIsGeneratingMerged(true);
    
    try {
      const { default: jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      const { PDFDocument } = await import('pdf-lib');
      // Generate the quotation PDF first
      const element = previewRef.current;
      if (!element) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not generate quotation PDF',
        });
        return;
      }

      const quotationPdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = quotationPdf.internal.pageSize.getWidth();

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
      });
      const data = canvas.toDataURL('image/png');

      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Collect link information AFTER rendering canvas
      const links = collectProductImageLinks(element, canvas, pdfWidth, pdfHeight);
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
      
      if (productsWithCatalogs.length === 0) {
        toast({
          variant: 'destructive',
          title: 'No Catalog PDFs',
          description: 'None of the products in this quotation have catalog PDFs to merge.',
        });
        setIsGeneratingMerged(false);
        return;
      }

      // Add catalog PDFs
      for (const productItem of productsWithCatalogs) {
        const catalogPdf = productItem.product.cataloguePdf;
        if (catalogPdf?.url) {
          try {
            // Fetch PDF from Firebase Storage URL
            const response = await fetch(catalogPdf.url);
            const arrayBuffer = await response.arrayBuffer();

            // Load the catalog PDF
            const catalogPdfDoc = await PDFDocument.load(arrayBuffer);
            // Copy and add catalog pages
            const catalogPages = await mergedPdf.copyPages(catalogPdfDoc, catalogPdfDoc.getPageIndices());
            catalogPages.forEach((page) => {
              mergedPdf.addPage(page);
            });
          } catch (error) {
            console.error(`Error processing catalog for ${productItem.product.name}:`, error);
            console.error('Error details:', error);
            toast({
              variant: 'destructive',
              title: 'PDF Processing Error',
              description: `Could not process catalog for ${productItem.product.name}: ${error instanceof Error ? error.message : 'Unknown error'}`,
            });
          }
        }
      }

      // Add watermark to all pages before saving (use template/company logo if available)
      await addWatermarkToAllPages(mergedPdf, quotation.logoUrl);
      
      // Add clickable links to the first page (quotation page)
      if (links && links.length > 0) {
        const pages = mergedPdf.getPages();
        if (pages.length > 0) {
          const { addLinksToPage } = await import('@/lib/pdf-watermark');
          addLinksToPage(pages[0], links);
          console.log(`Added ${links.length} clickable links to merged PDF`);
        }
      }
      
      // Save the merged PDF with watermark
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      downloadPdfBlob(blob, `Quotation-${quotation.quotationNumber}-with-catalogs.pdf`);

      toast({
        title: 'Success',
        description: `Merged PDF with ${productsWithCatalogs.length} catalog(s) downloaded successfully!`,
      });

    } catch (error) {
      console.error('Error generating merged PDF:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate merged PDF with catalogs',
      });
    } finally {
      setIsGeneratingMerged(false);
    }
  };

  // Check products with catalog PDFs for button state
  const catalogPdfCount = products.filter(p => p.product.cataloguePdf?.url).length;

  const categoryNameById = useMemo(() => Object.fromEntries((categories || []).map(c => [c.id, c.name])), [categories]);
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      const aName = categoryNameById[a.product.categoryId || ''] || '';
      const bName = categoryNameById[b.product.categoryId || ''] || '';
      return aName.localeCompare(bName);
    });
  }, [products, categoryNameById]);

  return (
    <div ref={completePreviewRef}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex gap-2">
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Quotation Only
          </Button>
          {catalogPdfCount > 0 && (
            <Button 
              onClick={handleDownloadWithCatalogs} 
              disabled={isGeneratingMerged}
            >
              <FileText className="mr-2 h-4 w-4" />
              {isGeneratingMerged ? 'Generating...' : `Download Merged`}
            </Button>
          )}
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">Send to Customer:</span>
          <QuotationCommunicationButtons
            quotation={quotation}
            lead={lead}
            products={products}
            quotationRef={previewRef}
          />
        </div>
      </div>
      <div
        ref={previewRef}
        className="relative bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-4xl mx-auto border text-gray-900"
      >
        {/* CSS Watermark overlay for on-screen preview */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 rounded-lg"
          style={{
            backgroundImage: `url('${quotation.logoUrl || '/images/nirmala-logo.jpg'}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '60% auto',
            opacity: 0.12,
          }}
        />
        
        {/* Content with higher z-index to appear above watermark */}
        <div className="relative z-10">
        <header className="flex flex-col sm:flex-row justify-between items-start pb-6 border-b-2 border-gray-800 gap-4">
          <div className="flex items-center gap-4">
            {quotation.logoUrl && (
              <img
                src={quotation.logoUrl}
                alt={`${quotation.companyName} Logo`}
                className="h-16 sm:h-20 w-auto object-contain"
                crossOrigin="anonymous"
              />
            )}
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                {quotation.companyName}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">
                {quotation.companyAddress}
              </p>
              {quotation.companyGst && (
                <p className="text-xs sm:text-sm text-gray-600">GSTIN: {quotation.companyGst}</p>
              )}
            </div>
          </div>
          <div className="text-left sm:text-right w-full sm:w-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 uppercase tracking-wider">
              Quotation
            </h2>
            <p className="text-md sm:text-lg text-gray-600 mt-2">
              # {quotation.quotationNumber}
            </p>
            {quotation.currencyCode && quotation.currencyCode !== 'INR' && (
              <p className="text-xs text-gray-500 mt-1">
                Currency: {quotation.currencySymbol} {quotation.currencyCode}
              </p>
            )}
          </div>
        </header>

        <section className="grid sm:grid-cols-2 gap-8 my-6 text-sm">
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">
            To
            </h3>
            <p className="font-bold text-base text-gray-800">{lead.name}</p>
            <p className="text-gray-600">{lead.company}</p>
            <p className="text-gray-600 break-all">{lead.email}</p>
            <p className="text-gray-600">{lead.phone}</p>
            {quotation.client_address && (
              <div className="mt-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Address:</p>
                <p className="text-gray-600 text-sm whitespace-pre-line">
                  {quotation.client_address}
                </p>
              </div>
            )}
            {quotation.client_gst_no && (
              <div className="mt-1">
                <p className="text-xs font-semibold text-gray-500">GSTIN: <span className="font-normal text-gray-600">{quotation.client_gst_no}</span></p>
              </div>
            )}
          </div>
          <div className="sm:text-right">
            <div className="grid grid-cols-2 sm:grid-cols-2">
              <p className="font-semibold text-gray-600">Date:</p>
              <p className="text-gray-800">
                {format(new Date(quotation.date), 'PPP')}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 mt-1">
              <p className="font-semibold text-gray-600">Valid Until:</p>
              <p className="text-gray-800">
                {format(new Date(quotation.validUntil), 'PPP')}
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-xs font-semibold uppercase tracking-wider">
                  Product / Service
                </th>
                <th className="p-3 text-xs font-semibold uppercase tracking-wider text-center">
                  Qty
                </th>
                <th className="p-3 text-xs font-semibold uppercase tracking-wider text-right">
                  Rate
                </th>
                <th className="p-3 text-xs font-semibold uppercase tracking-wider text-center">
                  Discount
                </th>
                <th className="p-3 text-xs font-semibold uppercase tracking-wider text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const rows: React.ReactNode[] = [];
                for (const p of sortedProducts) {
                  const catId = p.product.categoryId || '';
                  const catName = categoryNameById[catId];
                  rows.push(
                    <tr key={p.productId} className="border-b">
                  <td className="p-3">
                    <div className="flex items-start gap-3">
                      {p.product.productImage && (
                        <a 
                          href={p.product.productImage.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                          data-product-image-link="true"
                        >
                          <Image
                            src={p.product.productImage.url}
                            alt={p.product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </a>
                      )}
                      <div className="flex-1">
                        {(() => {
                          const lines: string[] = [];
                          const nameLine = (p.product.name || '').toString().trim();
                          if (catName) lines.push(catName);
                          if (nameLine) lines.push(`MODEL : ${nameLine.toUpperCase()}`);
                          // Use description from quotation item (p.description) if available, otherwise fall back to product description
                          const desc = ((p as any).description || p.product.description) as string | undefined;
                          if (desc) {
                            const extra = desc
                              .split(/\r?\n/)
                              .map(s => s.trim())
                              .filter(Boolean);
                            lines.push(...extra);
                          }
                          return (
                            <div className="leading-5">
                              {lines.map((text, idx) => (
                                <p key={`${p.productId}-l-${idx}`} className={idx === 0 ? 'font-semibold tracking-wide' : ''}>
                                  {text}
                                </p>
                              ))}
                            </div>
                          );
                        })()}
                        <div className="flex items-center gap-2 mt-1">
                          {p.product.cataloguePdf?.url && (
                            <span className="text-xs text-green-600 flex items-center gap-1">
                              <FileText className="h-3 w-3" />
                              Catalog PDF Available
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center text-gray-700">
                    {p.quantity}
                  </td>
                  <td className="p-3 text-right text-gray-700">
                    {formatCurrency(p.rate)}
                  </td>
                  <td className="p-3 text-center text-gray-700">
                    {p.discount ? `${p.discount}%` : '-'}
                  </td>
                  <td className="p-3 text-right text-gray-800 font-semibold">
                    {formatCurrency(p.amount)}
                  </td>
                </tr>
                  );
                }
                return rows;
              })()}
            </tbody>
          </table>
        </section>

        <section className="flex justify-end mt-6">
          <div className="w-full max-w-xs space-y-2 text-sm">
            {(() => {
              // Calculate totals including discount breakdown
              const totalBaseAmount = products.reduce((acc, p) => acc + (p.quantity * p.rate), 0);
              const totalDiscountAmount = products.reduce((acc, p) => {
                const baseAmount = p.quantity * p.rate;
                return acc + (baseAmount * ((p.discount || 0) / 100));
              }, 0);
              const hasDiscounts = totalDiscountAmount > 0;
              
              return (
                <>
                  <div className="flex justify-between text-gray-700">
                    <span>Base Amount</span>
                    <span>{formatCurrency(totalBaseAmount)}</span>
                  </div>
                  {hasDiscounts && (
                    <div className="flex justify-between text-green-600">
                      <span>Total Discount</span>
                      <span>-{formatCurrency(totalDiscountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-700">
                    <span>Sub-total</span>
                    <span>{formatCurrency(quotation.subTotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Total GST</span>
                    <span>{formatCurrency(quotation.totalGst)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Freight Charges</span>
                    <span>
                      {quotation.freightCharges && !isNaN(Number(quotation.freightCharges)) 
                        ? formatCurrency(Number(quotation.freightCharges))
                        : <span className="text-blue-600 font-medium">EXTRA</span>
                      }
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Courier Charges</span>
                    <span>
                      {quotation.courierCharges && !isNaN(Number(quotation.courierCharges))
                        ? formatCurrency(Number(quotation.courierCharges))
                        : <span className="text-blue-600 font-medium">EXTRA</span>
                      }
                    </span>
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Grand Total</span>
                    <span>{formatCurrency(quotation.grandTotal)}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-300">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Amount in Words:
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      {amountToWords(convertAmount(quotation.grandTotal), quotation.currencyCode || 'INR')}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        </section>
        
        <footer className="mt-8 pt-6 border-t">
          <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-2">
            Terms & Conditions
          </h4>
          <p className="text-xs text-gray-600 whitespace-pre-wrap">
            {quotation.termsAndConditions}
          </p>
        </footer>
        </div> {/* Close content div */}
      </div>

      {/* Product Catalogs Section - gated by toggle to reduce initial render cost */}
      {products.filter(p => p.product.cataloguePdf?.url).length > 0 && (
        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-center">
            <Button variant="outline" size="sm" onClick={() => setShowCatalogs(v => !v)}>
              <FileText className="mr-2 h-4 w-4" />
              {showCatalogs ? 'Hide Catalogs' : 'Show Catalogs'}
            </Button>
          </div>
          {showCatalogs && (
            <>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Catalogs</h2>
                <p className="text-gray-600">Detailed specifications for the products in this quotation</p>
              </div>
              {products
                .filter(p => p.product.cataloguePdf?.url)
                .map((productItem) => (
                  <div key={productItem.productId} className="bg-white rounded-lg shadow-lg border max-w-4xl mx-auto">
                    <div className="bg-gray-50 px-6 py-4 border-b">
                      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        {productItem.product.name} - Catalog
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span>Quantity: {productItem.quantity}</span>
                        <span>Rate: {formatCurrency(productItem.rate)}</span>
                        <span>Total: {formatCurrency(productItem.amount)}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-gray-700">Catalog Preview</p>
                        <PDFViewer 
                          pdfData={productItem.product.cataloguePdf!}
                          trigger={
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              View Full PDF
                            </Button>
                          }
                        />
                      </div>
                      <div className="w-full h-96 border rounded">
                        <iframe
                          src={productItem.product.cataloguePdf!.url}
                          className="w-full h-full rounded"
                          title={`${productItem.product.name} Catalog`}
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-xs text-gray-500">
                          {productItem.product.cataloguePdf!.fileName}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
