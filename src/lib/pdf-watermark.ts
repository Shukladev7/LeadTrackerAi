import { PDFDocument, PDFPage, PDFName, PDFString, PDFArray, PDFDict, PDFNumber } from 'pdf-lib';

// Watermark configuration
const WATERMARK_CONFIG = {
  opacity: 0.12, // Semi-transparent (between 0.1-0.15 as requested)
  scaleFactor: 0.6, // Logo will cover 60% of page width
  defaultLogoPath: '/images/nirmala-logo.jpg'
};

/**
 * Loads logo image and returns it as bytes for PDF embedding
 */
async function loadLogoBytes(logoUrl?: string): Promise<ArrayBuffer> {
  const path = logoUrl || WATERMARK_CONFIG.defaultLogoPath;
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load logo: ${response.status}`);
  }
  return await response.arrayBuffer();
}

/**
 * Adds a semi-transparent company logo watermark to a PDF page
 * The watermark is positioned behind all content (as background)
 */
export async function addWatermarkToPage(
  pdfDoc: PDFDocument,
  page: PDFPage,
  logoUrl?: string
): Promise<void> {
  try {
    // Load the company logo (from template/quotation if provided)
    const logoBytes = await loadLogoBytes(logoUrl);
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
    // Continue without watermark on failure
  }
}

/**
 * Adds watermark to all pages in a PDF document
 */
export async function addWatermarkToAllPages(pdfDoc: PDFDocument, logoUrl?: string): Promise<void> {
  const pages = pdfDoc.getPages();
  for (const page of pages) {
    await addWatermarkToPage(pdfDoc, page, logoUrl);
  }
}

/**
 * Link information for adding to PDF
 */
export interface LinkInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
}

/**
 * Adds clickable links to a PDF page using pdf-lib
 */
export function addLinksToPage(page: PDFPage, links: LinkInfo[]): void {
  const { width: pageWidth, height: pageHeight } = page.getSize();
  
  console.log(`[addLinksToPage] Page size: ${pageWidth.toFixed(2)} x ${pageHeight.toFixed(2)} points`);
  
  links.forEach((link, index) => {
    try {
      // Links come in mm from jsPDF, need to convert to points for pdf-lib
      // 1 mm = 2.83465 points
      const mmToPoints = 2.83465;
      
      // Convert coordinates from mm to points
      const xInPoints = link.x * mmToPoints;
      const yInPoints = link.y * mmToPoints;
      const widthInPoints = link.width * mmToPoints;
      const heightInPoints = link.height * mmToPoints;
      
      // pdf-lib uses bottom-left origin, we have top-left origin
      // So flip the Y coordinate
      const yFromBottom = pageHeight - yInPoints - heightInPoints;
      
      const x1 = xInPoints;
      const y1 = yFromBottom;
      const x2 = xInPoints + widthInPoints;
      const y2 = yFromBottom + heightInPoints;
      
      console.log(`[addLinksToPage] Link ${index}:`);
      console.log(`  Input (mm): x=${link.x.toFixed(2)}, y=${link.y.toFixed(2)}, w=${link.width.toFixed(2)}, h=${link.height.toFixed(2)}`);
      console.log(`  Rect (points): [${x1.toFixed(2)}, ${y1.toFixed(2)}, ${x2.toFixed(2)}, ${y2.toFixed(2)}]`);
      console.log(`  URL: ${link.url}`);
      
      // Create the link annotation using pdf-lib's proper types
      const context = page.doc.context;
      
      // Create the Rect array
      const rectArray = PDFArray.withContext(context);
      rectArray.push(PDFNumber.of(x1));
      rectArray.push(PDFNumber.of(y1));
      rectArray.push(PDFNumber.of(x2));
      rectArray.push(PDFNumber.of(y2));
      
      // Create the Border array
      const borderArray = PDFArray.withContext(context);
      borderArray.push(PDFNumber.of(0));
      borderArray.push(PDFNumber.of(0));
      borderArray.push(PDFNumber.of(0));
      
      // Create the Action dictionary
      const actionDict = context.obj({
        Type: 'Action',
        S: 'URI',
        URI: PDFString.of(link.url),
      });
      
      // Create the Link annotation dictionary
      const linkAnnotDict = context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: rectArray,
        Border: borderArray,
        A: actionDict,
      });
      
      const annotRef = context.register(linkAnnotDict);
      page.node.addAnnot(annotRef);
      
      console.log(`✓ [addLinksToPage] Successfully added clickable link ${index} to PDF`);
    } catch (error) {
      console.error(`[addLinksToPage] Error adding link ${index} to page:`, error);
    }
  });
}

/**
 * Converts jsPDF to pdf-lib format, adds watermark, and returns as blob
 * This is used for jsPDF-generated PDFs that need watermark
 */
export async function addWatermarkToJsPDF(
  jsPdfInstance: any, 
  logoUrl?: string, 
  links?: LinkInfo[]
): Promise<Blob> {
  try {
    // Get jsPDF as array buffer
    const jsPdfBytes = jsPdfInstance.output('arraybuffer');

    // Load with pdf-lib
    const pdfDoc = await PDFDocument.load(jsPdfBytes);

    // Add watermark to all pages
    await addWatermarkToAllPages(pdfDoc, logoUrl);

    // Add clickable links if provided
    if (links && links.length > 0) {
      console.log(`[addWatermarkToJsPDF] About to add ${links.length} links to PDF`);
      const pages = pdfDoc.getPages();
      console.log(`[addWatermarkToJsPDF] PDF has ${pages.length} pages`);
      if (pages.length > 0) {
        addLinksToPage(pages[0], links);
        console.log(`[addWatermarkToJsPDF] Finished adding ${links.length} clickable links to PDF`);
      }
    } else {
      console.log(`[addWatermarkToJsPDF] No links to add (links=${links?.length || 0})`);
    }

    // Save the PDF
    const watermarkedBytes = await pdfDoc.save();
    return new Blob([watermarkedBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
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
