import { PDFDocument, PDFPage, RGB, grayscale } from 'pdf-lib';

// Watermark configuration
const WATERMARK_CONFIG = {
  opacity: 0.12, // Semi-transparent (between 0.1-0.15 as requested)
  scaleFactor: 0.6, // Logo will cover 60% of page width
  logoPath: '/images/nirmala-logo.jpg'
};

/**
 * Loads logo image and returns it as bytes for PDF embedding
 */
async function loadLogoBytes(): Promise<ArrayBuffer> {
  try {
    const response = await fetch(WATERMARK_CONFIG.logoPath);
    if (!response.ok) {
      throw new Error(`Failed to load logo: ${response.status}`);
    }
    return await response.arrayBuffer();
  } catch (error) {
    console.error('Error loading logo for watermark:', error);
    throw error;
  }
}

/**
 * Adds a semi-transparent company logo watermark to a PDF page
 * The watermark is positioned behind all content (as background)
 */
export async function addWatermarkToPage(
  pdfDoc: PDFDocument, 
  page: PDFPage
): Promise<void> {
  try {
    // Load the company logo
    const logoBytes = await loadLogoBytes();
    const logoImage = await pdfDoc.embedJpg(logoBytes);
    
    // Get page dimensions
    const { width: pageWidth, height: pageHeight } = page.getSize();
    
    // Calculate watermark dimensions (maintain aspect ratio)
    const logoAspectRatio = logoImage.width / logoImage.height;
    const maxWatermarkWidth = pageWidth * WATERMARK_CONFIG.scaleFactor;
    const watermarkWidth = maxWatermarkWidth;
    const watermarkHeight = watermarkWidth / logoAspectRatio;
    
    // Center the watermark on the page
    const x = (pageWidth - watermarkWidth) / 2;
    const y = (pageHeight - watermarkHeight) / 2;
    
    // Draw the watermark behind all existing content
    page.drawImage(logoImage, {
      x,
      y,
      width: watermarkWidth,
      height: watermarkHeight,
      opacity: WATERMARK_CONFIG.opacity,
    });
    
  } catch (error) {
    console.error('Error adding watermark to page:', error);
    // Don't throw the error to avoid breaking PDF generation
    // Just log it and continue without watermark
  }
}

/**
 * Adds watermark to all pages in a PDF document
 */
export async function addWatermarkToAllPages(pdfDoc: PDFDocument): Promise<void> {
  const pages = pdfDoc.getPages();
  
  for (const page of pages) {
    await addWatermarkToPage(pdfDoc, page);
  }
}

/**
 * Converts jsPDF to pdf-lib format, adds watermark, and returns as blob
 * This is used for jsPDF-generated PDFs that need watermark
 */
export async function addWatermarkToJsPDF(jsPdfInstance: any): Promise<Blob> {
  try {
    // Get jsPDF as array buffer
    const jsPdfBytes = jsPdfInstance.output('arraybuffer');
    
    // Load with pdf-lib
    const pdfDoc = await PDFDocument.load(jsPdfBytes);
    
    // Add watermark to all pages
    await addWatermarkToAllPages(pdfDoc);
    
    // Return as blob
    const watermarkedBytes = await pdfDoc.save();
    return new Blob([watermarkedBytes], { type: 'application/pdf' });
  } catch (error) {
    console.error('Error adding watermark to jsPDF:', error);
    // Fallback: return original PDF without watermark
    const originalBytes = jsPdfInstance.output('arraybuffer');
    return new Blob([originalBytes], { type: 'application/pdf' });
  }
}

/**
 * Downloads a PDF blob with given filename
 */
export function downloadPdfBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}