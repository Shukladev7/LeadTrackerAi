
'use client';

import { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';
import { format } from 'date-fns';
import { 
  addWatermarkToJsPDF, 
  addWatermarkToAllPages, 
  downloadPdfBlob 
} from '@/lib/pdf-watermark';
import {
  Quotation,
  Lead,
  PopulatedQuotationProduct,
  ProductModel,
} from '@/lib/business-types';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { PDFViewer } from '@/components/pdf-viewer';
import { QuotationCommunicationButtons } from './quotation-communication-buttons';
import Image from 'next/image';

type QuotationPreviewProps = {
  quotation: Quotation;
  lead: Lead;
  products: (PopulatedQuotationProduct & { model?: ProductModel })[];
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export function QuotationPreview({
  quotation,
  lead,
  products,
}: QuotationPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const completePreviewRef = useRef<HTMLDivElement>(null);
  const [isGeneratingMerged, setIsGeneratingMerged] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    // This function now only downloads the quotation part (without catalogs)
    const quotationElement = previewRef.current;
    if (!quotationElement) return;

    try {
      const canvas = await html2canvas(quotationElement, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
      });
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Add watermark and download
      const watermarkedBlob = await addWatermarkToJsPDF(pdf);
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
      const canvas = await html2canvas(completeElement, {
        scale: 1.5, // Slightly lower scale for large content
        useCORS: true,
        height: completeElement.scrollHeight,
        windowHeight: completeElement.scrollHeight,
      });
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

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

      // Add watermark and download
      const watermarkedBlob = await addWatermarkToJsPDF(pdf);
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
            separatorPage.drawText(`Description: ${productItem.product.description}`, {
              x: 50,
              y: separatorPage.getHeight() - 140,
              size: 12,
            });
            
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

      // Add watermark to all pages before saving
      await addWatermarkToAllPages(mergedPdf);
      
      // Save the merged PDF with watermark
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
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
            backgroundImage: `url('/images/nirmala-logo.jpg')`,
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
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            )}
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                {quotation.companyName}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">
                {quotation.companyAddress}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">GSTIN: {quotation.companyGst}</p>
            </div>
          </div>
          <div className="text-left sm:text-right w-full sm:w-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 uppercase tracking-wider">
              Quotation
            </h2>
            <p className="text-md sm:text-lg text-gray-600 mt-2">
              # {quotation.quotationNumber}
            </p>
          </div>
        </header>

        <section className="grid sm:grid-cols-2 gap-8 my-6 text-sm">
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">
              Billed To
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
            <div className="grid grid-cols-2 sm:grid-cols-2 mt-1">
              <p className="font-semibold text-gray-600">Status:</p>
              <p className="font-bold text-gray-800">{quotation.status}</p>
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
              {products.map((p) => (
                <tr key={p.productId} className="border-b">
                  <td className="p-3">
                    <div className="flex items-start gap-3">
                      {p.product.productImage && (
                        <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={p.product.productImage.url}
                            alt={p.product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          {p.product.name}
                          {p.model && (
                            <span className="ml-2 text-sm font-normal text-gray-600">
                              ({p.model.name})
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-600 max-w-[25ch] break-words">
                          {p.product.description}
                        </p>
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
              ))}
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
                  <Separator className="bg-gray-800" />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Grand Total</span>
                    <span>{formatCurrency(quotation.grandTotal)}</span>
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

      {/* Product Catalogs Section */}
      {products.filter(p => p.product.cataloguePdf?.url).length > 0 && (
        <div className="mt-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Catalogs</h2>
            <p className="text-gray-600">Detailed specifications for the products in this quotation</p>
          </div>
          
          {products
            .filter(p => p.product.cataloguePdf?.url)
            .map((productItem, index) => (
              <div key={productItem.productId} className="bg-white rounded-lg shadow-lg border max-w-4xl mx-auto">
                {/* Product Header */}
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    {productItem.product.name}
                    {productItem.model && (
                      <span className="text-base font-normal text-gray-600">
                        ({productItem.model.name})
                      </span>
                    )}
                    {' '}- Catalog
                  </h3>



                  <p className="text-gray-600 mt-1 break-words w-[30ch]">
  {productItem.product.description}
</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>Quantity: {productItem.quantity}</span>
                    <span>Rate: {formatCurrency(productItem.rate)}</span>
                    <span>Total: {formatCurrency(productItem.amount)}</span>
                  </div>
                </div>
                
                {/* PDF Viewer */}
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
        </div>
      )}
    </div>
  );
}
