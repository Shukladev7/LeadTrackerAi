/* eslint-disable max-len */
/* eslint-disable no-undef */
const {onRequest} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require("firebase-functions/v2");
const {
  onDocumentCreated,
  onDocumentUpdated,
  onDocumentDeleted,
} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");
const {PDFDocument, StandardFonts, rgb, degrees} = require("pdf-lib");

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
const bucket = admin.storage().bucket();
/**
 * Escapes HTML special characters to prevent HTML injection.
 *
 * @param {string|null|undefined} str Input string
 * @return {string} Escaped string safe for HTML
 */
function escapeHtml(str) {
  if (str === undefined || str === null) {
    return "";
  }

  return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
}

setGlobalOptions({
  region: "us-central1",
  memory: "1GiB",
  timeoutSeconds: 120,
});

let browserPromise = null;

// Increment/decrement quotations total counter in stats/quotations
async function incrementQuotationTotal(delta) {
  try {
    const ref = db.collection("stats").doc("quotations");
    await ref.set(
      { total: admin.firestore.FieldValue.increment(delta) },
      { merge: true },
    );
  } catch (e) {
    console.error("Failed to update stats/quotations.total:", e);
  }
}

/**
 * Adds a centered watermark (company logo if available, otherwise text)
 * to each page of a PDF buffer. If anything fails, returns the original
 * buffer unchanged.
 *
 * @param {Buffer} pdfBuffer Input PDF buffer
 * @param {{ text?: string, logoUrl?: string }} options Watermark options
 * @return {Promise<Buffer>} Modified PDF buffer
 */
async function addWatermarkToPdf(pdfBuffer, options) {
  try {
    const {text, logoUrl} = options || {};

    if (!text && !logoUrl) {
      return pdfBuffer;
    }

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pages = pdfDoc.getPages();

    // Try to embed logo image if a URL is provided.
    let logoImage = null;
    if (logoUrl) {
      try {
        const res = await fetch(logoUrl);
        if (res && res.ok) {
          const arrayBuffer = await res.arrayBuffer();
          const bytes = new Uint8Array(arrayBuffer);
          try {
            logoImage = await pdfDoc.embedPng(bytes);
          } catch (e) {
            // If PNG embedding fails, try JPEG.
            try {
              logoImage = await pdfDoc.embedJpg(bytes);
            } catch (e2) {
              console.error("Watermark logo embed error:", e2);
            }
          }
        } else {
          console.warn("Watermark logo fetch failed with status:", res && res.status);
        }
      } catch (e) {
        console.error("Watermark logo fetch error:", e);
      }
    }

    // If logo is available, use it as the watermark; otherwise fall back to text.
    if (logoImage) {
      const opacity = 0.1;

      pages.forEach((page) => {
        const {width, height} = page.getSize();

        // Scale logo to occupy ~70% of page width, preserving aspect ratio.
        const targetWidth = width * 0.7;
        const scale = targetWidth / logoImage.width;
        const targetHeight = logoImage.height * scale;

        const x = (width - targetWidth) / 2;
        const y = (height - targetHeight) / 2;

        page.drawImage(logoImage, {
          x,
          y,
          width: targetWidth,
          height: targetHeight,
          opacity,
        });
      });
    } else if (text) {
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontSize = 60;
      const opacity = 0.12;

      pages.forEach((page) => {
        const {width, height} = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const x = (width - textWidth) / 2;
        const y = height / 2;

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.8, 0.8, 0.8),
          opacity,
          rotate: degrees(45),
        });
      });
    }

    const modified = await pdfDoc.save();
    return Buffer.from(modified);
  } catch (e) {
    console.error("Watermark error:", e);
    return pdfBuffer;
  }
}

/**
 * Returns a singleton Puppeteer browser instance.
 * Reuses the browser across requests to avoid cold-start overhead.
 *
 * @return {Promise<Object>} Puppeteer browser instance
 */
async function getBrowser() {
  if (browserPromise) {
    return browserPromise;
  }

  chromium.setHeadlessMode = true;
  chromium.setGraphicsMode = false;

  const executablePath = await chromium.executablePath();

  browserPromise = puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: chromium.headless,
  });

  try {
    const browser = await browserPromise;
    return browser;
  } catch (e) {
    browserPromise = null;
    throw e;
  }
}

/**
 * Generates a quotation PDF using Puppeteer.
 *
 * @param {import("firebase-functions/v2/https").Request} req
 * @param {import("firebase-functions/v2/https").Response} res
 */
exports.generateQuotationPdf = onRequest(async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
      return;
    }

    const id = req.method === "GET" ?
      req.query.id :
      req.body && req.body.id;

    if (!id) {
      res.status(400).json({error: "Missing quotation id"});
      return;
    }

    const quotationSnap = await db
        .collection("quotations")
        .doc(String(id))
        .get();

    if (!quotationSnap.exists) {
      res.status(404).json({error: "Quotation not found"});
      return;
    }

    const quotation = quotationSnap.data() || {};

    const rawQuotationNumber = quotation.quotationNumber || String(id);
    const safeQuotationNumber = String(rawQuotationNumber)
        .replace(/[^A-Za-z0-9_\-]/g, "_");
    const downloadFileName = `Quotation-${safeQuotationNumber}.pdf`;
    const watermarkText = `Quotation ${rawQuotationNumber}`;

    const cachePath = `quotation-pdfs/${id}.pdf`;
    const cacheFile = bucket.file(cachePath);

    const [exists] = await cacheFile.exists();
    if (exists) {
      const [cachedBuffer] = await cacheFile.download();
      const watermarked = await addWatermarkToPdf(cachedBuffer, {
        text: watermarkText,
        logoUrl: quotation.logoUrl || "",
      });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
          "Content-Disposition",
          `attachment; filename="${downloadFileName}"`,
      );
      res.setHeader("Content-Length", String(watermarked.length));
      res.end(watermarked);
      return;
    }

    const browser = await getBrowser();
    const page = await browser.newPage();
    const baseUrl = "https://studio-5063047183-aa053.web.app";
    const printUrl =
      `${baseUrl}/quotations/${id}/print`;

    const response = await page.goto(printUrl, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    if (!response || !response.ok()) {
      const status = response ? response.status() : "NO_RESPONSE";
      throw new Error(`Failed to load print page: HTTP ${status}`);
    }

    try {
      await page.waitForFunction(
          "document.fonts && document.fonts.ready",
          {timeout: 15000},
      );
    } catch (e) {
      console.warn(
          "PDF warning: fonts.ready wait timed out or unsupported",
          e,
      );
    }

    try {
      await page.waitForSelector("[data-quotation-body=\"true\"]", {
        timeout: 10000,
      });
    } catch (e) {
      console.warn(
          "PDF warning: quotation body selector not found in time",
          e,
      );
    }

    try {
      await page.setJavaScriptEnabled(false);
    } catch (e) {
      console.warn("PDF warning: failed to disable JavaScript", e);
    }

    const companyName = escapeHtml(quotation.companyName || "");
    const companyAddress = escapeHtml(quotation.companyAddress || "");
    const companyGst = escapeHtml(quotation.companyGst || "");
    const quotationNumber = escapeHtml(quotation.quotationNumber || "");
    const currencyCode = escapeHtml(quotation.currencyCode || "");
    const currencySymbol = escapeHtml(quotation.currencySymbol || "");
    const logoUrl = escapeHtml(quotation.logoUrl || "");

    const showCurrency = currencyCode && currencyCode !== "INR";

    let headerTemplate = "";
    headerTemplate += "<div style='width:100%;height:24mm;";
    headerTemplate += "padding:12px 32px;box-sizing:border-box;";
    headerTemplate += "display:flex;justify-content:space-between;";
    headerTemplate += "align-items:flex-start;";
    headerTemplate += "font-family:Arial,Helvetica,sans-serif;";
    headerTemplate += "font-size:11px;";
    headerTemplate += "border-bottom:1px solid #e5e7eb;'>";

    headerTemplate +=
    "<div style='display:flex;align-items:center;gap:16px;'>";
    if (logoUrl) {
      headerTemplate += "<img src='" + logoUrl;
      headerTemplate += "' style='height:64px;max-width:160px;";
      headerTemplate += "object-fit:contain;' />";
    }

    headerTemplate += "<div>";
    if (companyName) {
      headerTemplate += "<div style='font-weight:700;font-size:22px;'>";
      headerTemplate += companyName + "</div>";
    }

    if (companyAddress) {
      headerTemplate += "<div style='font-size:11px;color:#4b5563;";
      headerTemplate += "white-space:pre-line;'>" + companyAddress;
      headerTemplate += "</div>";
    }

    if (companyGst) {
      headerTemplate += "<div style='font-size:11px;color:#4b5563;'>";
      headerTemplate += "GSTIN: " + companyGst + "</div>";
    }

    headerTemplate += "</div></div>";
    headerTemplate += "<div style='text-align:right;'>";
    headerTemplate += "<div style='font-weight:800;font-size:26px;";
    headerTemplate += "text-transform:uppercase;'>Quotation</div>";

    if (quotationNumber) {
      headerTemplate += "<div style='font-size:14px;color:#4b5563;";
      headerTemplate += "margin-top:6px;'># " + quotationNumber;
      headerTemplate += "</div>";
    }

    if (showCurrency) {
      headerTemplate += "<div style='font-size:11px;color:#6b7280;";
      headerTemplate += "margin-top:4px;'>Currency: ";
      headerTemplate += currencySymbol + " " + currencyCode + "</div>";
    }

    headerTemplate += "</div></div>";

    // No footer: keep footerTemplate empty so only the header is rendered.
    let footerTemplate = "";

    // Measure content height to decide if everything fits comfortably on a single page.
    const singlePageContentHeight = await page.evaluate(() => {
      const el = document.querySelector('[data-quotation-body="true"]');
      if (el && el instanceof HTMLElement) {
        const rect = el.getBoundingClientRect();
        return rect.bottom;
      }
      return document.body.scrollHeight || document.documentElement.scrollHeight || 0;
    });

    const singlePagePdfOptions = {
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      scale: 0.98,
      margin: {
        top: "55mm",
        right: "8mm",
        bottom: "10mm",
        left: "8mm",
      },
      headerTemplate,
      footerTemplate: "<div></div>",
    };

    // Rough threshold: ~970 px of usable content height for A4 after margins at 96 DPI.
    // If content is shorter than this, force a single page to avoid an empty header-only page 2.
    if (singlePageContentHeight > 0 && singlePageContentHeight <= 970) {
      singlePagePdfOptions.pageRanges = "1";
    }

    const basePdfBuffer = await page.pdf(singlePagePdfOptions);

    await cacheFile.save(basePdfBuffer, {
      contentType: "application/pdf",
      metadata: {
        cacheControl: "public, max-age=86400",
      },
    });

    const watermarkedBuffer = await addWatermarkToPdf(basePdfBuffer, {
      text: watermarkText,
      logoUrl: quotation.logoUrl || "",
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
        "Content-Disposition",
        `attachment; filename="${downloadFileName}"`,
    );
    res.setHeader("Content-Length", String(watermarkedBuffer.length));
    res.end(watermarkedBuffer);
  } catch (err) {
    console.error("PDF error:", err);
    res.status(500).json({
      error: "Failed to generate quotation PDF",
      details: String(err),
    });
  }
});

/**
 * Background trigger: when a quotation document is created,
 * generate its PDF and cache it in Firebase Storage so that
 * later downloads are instant.
 */
exports.generateQuotationPdfOnCreate = onDocumentCreated(
    "quotations/{quotationId}",
    async (event) => {
      const id = event.params.quotationId;

      if (!id) {
        console.warn("PDF trigger: missing quotationId param");
        return;
      }

      // Match the same versioned cache path used in the HTTPS function.
      const cachePath = `quotation-pdfs-v2/${id}.pdf`;
      const cacheFile = bucket.file(cachePath);

      const [exists] = await cacheFile.exists();
      if (exists) {
        console.log(
            `PDF trigger: cache already exists for quotation ${id}, skipping`,
        );
        return;
      }

      const snapshot = event.data;
      if (!snapshot) {
        console.warn(
            `PDF trigger: no snapshot data for quotation ${id}, skipping`,
        );
        return;
      }

      const quotation = snapshot.data() || {};

      try {
        const browser = await getBrowser();
        const page = await browser.newPage();
        const baseUrl = "https://studio-5063047183-aa053.web.app";
        const printUrl = `${baseUrl}/quotations/${id}/print`;

        const response = await page.goto(printUrl, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        if (!response || !response.ok()) {
          const status = response ? response.status() : "NO_RESPONSE";
          throw new Error(`Failed to load print page: HTTP ${status}`);
        }

        try {
          await page.waitForFunction(
              "document.fonts && document.fonts.ready",
              {timeout: 15000},
          );
        } catch (e) {
          console.warn(
              "PDF trigger warning: fonts.ready wait timed out or unsupported",
              e,
          );
        }

        try {
          await page.waitForSelector("[data-quotation-body=\"true\"]", {
            timeout: 10000,
          });
        } catch (e) {
          console.warn(
              "PDF trigger warning: quotation body selector not found in time",
              e,
          );
        }

        try {
          await page.setJavaScriptEnabled(false);
        } catch (e) {
          console.warn(
              "PDF trigger warning: failed to disable JavaScript",
              e,
          );
        }

        const companyName = escapeHtml(quotation.companyName || "");
        const companyAddress = escapeHtml(quotation.companyAddress || "");
        const companyGst = escapeHtml(quotation.companyGst || "");
        const quotationNumber = escapeHtml(quotation.quotationNumber || "");
        const currencyCode = escapeHtml(quotation.currencyCode || "");
        const currencySymbol = escapeHtml(quotation.currencySymbol || "");
        const logoUrl = escapeHtml(quotation.logoUrl || "");

        const showCurrency = currencyCode && currencyCode !== "INR";

        let headerTemplate = "";
        headerTemplate += "<div style='width:100%;height:24mm;";
        headerTemplate += "padding:12px 32px;box-sizing:border-box;";
        headerTemplate += "display:flex;justify-content:space-between;";
        headerTemplate += "align-items:flex-start;";
        headerTemplate += "font-family:Arial,Helvetica,sans-serif;";
        headerTemplate += "font-size:11px;";
        headerTemplate += "border-bottom:1px solid #e5e7eb;'>";

        headerTemplate +=
        "<div style='display:flex;align-items:center;gap:16px;'>";
        if (logoUrl) {
          headerTemplate += "<img src='" + logoUrl;
          headerTemplate += "' style='height:64px;max-width:160px;";
          headerTemplate += "object-fit:contain;' />";
        }

        headerTemplate += "<div>";
        if (companyName) {
          headerTemplate += "<div style='font-weight:700;font-size:22px;'>";
          headerTemplate += companyName + "</div>";
        }

        if (companyAddress) {
          headerTemplate += "<div style='font-size:11px;color:#4b5563;";
          headerTemplate += "white-space:pre-line;'>" + companyAddress;
          headerTemplate += "</div>";
        }

        if (companyGst) {
          headerTemplate += "<div style='font-size:11px;color:#4b5563;'>";
          headerTemplate += "GSTIN: " + companyGst + "</div>";
        }

        headerTemplate += "</div></div>";
        headerTemplate += "<div style='text-align:right;'>";
        headerTemplate += "<div style='font-weight:800;font-size:26px;";
        headerTemplate += "text-transform:uppercase;'>Quotation</div>";

        if (quotationNumber) {
          headerTemplate += "<div style='font-size:14px;color:#4b5563;";
          headerTemplate += "margin-top:6px;'># " + quotationNumber;
          headerTemplate += "</div>";
        }

        if (showCurrency) {
          headerTemplate += "<div style='font-size:11px;color:#6b7280;";
          headerTemplate += "margin-top:4px;'>Currency: ";
          headerTemplate += currencySymbol + " " + currencyCode + "</div>";
        }

        headerTemplate += "</div></div>";

        // No footer: keep footerTemplate empty so only the header is rendered.
        let footerTemplate = "";

        const singlePageContentHeight = await page.evaluate(() => {
          const el = document.querySelector('[data-quotation-body="true"]');
          if (el && el instanceof HTMLElement) {
            const rect = el.getBoundingClientRect();
            return rect.bottom;
          }
          return document.body.scrollHeight || document.documentElement.scrollHeight || 0;
        });

        const singlePagePdfOptions = {
          format: "A4",
          printBackground: true,
          preferCSSPageSize: true,
          displayHeaderFooter: true,
          scale: 0.98,
          margin: {
            top: "55mm",
            right: "8mm",
            bottom: "10mm",
            left: "8mm",
          },
          headerTemplate,
          footerTemplate: "<div></div>",
        };

        if (singlePageContentHeight > 0 && singlePageContentHeight <= 970) {
          singlePagePdfOptions.pageRanges = "1";
        }

        const pdfBuffer = await page.pdf(singlePagePdfOptions);

        await cacheFile.save(pdfBuffer, {
          contentType: "application/pdf",
          metadata: {
            cacheControl: "public, max-age=86400",
          },
        });

        console.log(
            `PDF trigger: generated and cached PDF for quotation ${id}`,
        );
      } catch (err) {
        console.error(
            `PDF trigger: failed to generate PDF for quotation ${id}`,
            err,
        );
      }
    },
);

// Maintain stats/quotations.total counter
exports.updateQuotationStatsOnCreate = onDocumentCreated(
  "quotations/{quotationId}",
  async (event) => {
    await incrementQuotationTotal(1);
  },
);

exports.updateQuotationStatsOnDelete = onDocumentDeleted(
  "quotations/{quotationId}",
  async (event) => {
    await incrementQuotationTotal(-1);
  },
);

exports.generateQuotationPdfOnUpdate = onDocumentUpdated(
    "quotations/{quotationId}",
    async (event) => {
      const id = event.params.quotationId;

      if (!id) {
        console.warn("PDF update trigger: missing quotationId param");
        return;
      }

      const snapshot = event.data && event.data.after;
      if (!snapshot) {
        console.warn(
            `PDF update trigger: no after snapshot for 
            quotation ${id}, skipping`,
        );
        return;
      }

      const quotation = snapshot.data() || {};
      const cachePath = `quotation-pdfs/${id}.pdf`;
      const cacheFile = bucket.file(cachePath);

      try {
        const browser = await getBrowser();
        const page = await browser.newPage();
        const baseUrl = "https://studio-5063047183-aa053.web.app";
        const printUrl = `${baseUrl}/quotations/${id}/print`;

        const response = await page.goto(printUrl, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        if (!response || !response.ok()) {
          const status = response ? response.status() : "NO_RESPONSE";
          throw new Error(`Failed to load print page: HTTP ${status}`);
        }

        try {
          await page.waitForFunction(
              "document.fonts && document.fonts.ready",
              {timeout: 15000},
          );
        } catch (e) {
          console.warn(
              "PDF update trigger warning: fonts.ready wait timed out",
              e,
          );
        }

        try {
          await page.waitForSelector("[data-quotation-body=\"true\"]", {
            timeout: 10000,
          });
        } catch (e) {
          console.warn(
              "PDF update trigger warning: body selector not found in time",
              e,
          );
        }

        try {
          await page.setJavaScriptEnabled(false);
        } catch (e) {
          console.warn(
              "PDF update trigger warning: failed to disable JavaScript",
              e,
          );
        }

        const companyName = escapeHtml(quotation.companyName || "");
        const companyAddress = escapeHtml(quotation.companyAddress || "");
        const companyGst = escapeHtml(quotation.companyGst || "");
        const quotationNumber = escapeHtml(quotation.quotationNumber || "");
        const currencyCode = escapeHtml(quotation.currencyCode || "");
        const currencySymbol = escapeHtml(quotation.currencySymbol || "");
        const logoUrl = escapeHtml(quotation.logoUrl || "");

        const showCurrency = currencyCode && currencyCode !== "INR";

        let headerTemplate = "";
        headerTemplate += "<div style='width:100%;height:40mm;";
        headerTemplate += "padding:18px 32px;box-sizing:border-box;";
        headerTemplate += "display:flex;justify-content:space-between;";
        headerTemplate += "align-items:flex-start;";
        headerTemplate += "font-family:Arial,Helvetica,sans-serif;";
        headerTemplate += "font-size:11px;'>";

        headerTemplate +=
        "<div style='display:flex;align-items:center;gap:16px;'>";
        if (logoUrl) {
          headerTemplate += "<img src='" + logoUrl;
          headerTemplate += "' style='height:64px;max-width:160px;";
          headerTemplate += "object-fit:contain;' />";
        }

        headerTemplate += "<div>";
        if (companyName) {
          headerTemplate += "<div style='font-weight:700;font-size:22px;'>";
          headerTemplate += companyName + "</div>";
        }

        if (companyAddress) {
          headerTemplate += "<div style='font-size:11px;color:#4b5563;";
          headerTemplate += "white-space:pre-line;'>" + companyAddress;
          headerTemplate += "</div>";
        }

        if (companyGst) {
          headerTemplate += "<div style='font-size:11px;color:#4b5563;'>";
          headerTemplate += "GSTIN: " + companyGst + "</div>";
        }

        headerTemplate += "</div></div>";
        headerTemplate += "<div style='text-align:right;'>";
        headerTemplate += "<div style='font-weight:800;font-size:26px;";
        headerTemplate += "text-transform:uppercase;'>Quotation</div>";

        if (quotationNumber) {
          headerTemplate += "<div style='font-size:14px;color:#4b5563;";
          headerTemplate += "margin-top:6px;'># " + quotationNumber;
          headerTemplate += "</div>";
        }

        if (showCurrency) {
          headerTemplate += "<div style='font-size:11px;color:#6b7280;";
          headerTemplate += "margin-top:4px;'>Currency: ";
          headerTemplate += currencySymbol + " " + currencyCode + "</div>";
        }

        headerTemplate += "</div></div>";

        let footerTemplate = "";
        footerTemplate += "<div style='width:100%;font-size:8px;";
        footerTemplate += "color:#6b7280;padding:4px 24px;";
        footerTemplate += "box-sizing:border-box;text-align:right;";
        footerTemplate += "font-family:Arial,Helvetica,sans-serif;'>";
        footerTemplate += "Page <span class='pageNumber'></span> of ";
        footerTemplate += "<span class='totalPages'></span></div>";

        const singlePageContentHeight = await page.evaluate(() => {
          const el = document.querySelector('[data-quotation-body="true"]');
          if (el && el instanceof HTMLElement) {
            const rect = el.getBoundingClientRect();
            return rect.bottom;
          }
          return document.body.scrollHeight || document.documentElement.scrollHeight || 0;
        });

        const singlePagePdfOptions = {
          format: "A4",
          printBackground: true,
          preferCSSPageSize: true,
          displayHeaderFooter: true,
          scale: 0.98,
          margin: {
            top: "40mm",
            right: "8mm",
            bottom: "10mm",
            left: "8mm",
          },
          headerTemplate,
          // footerTemplate omitted so no footer is rendered.
        };

        if (singlePageContentHeight > 0 && singlePageContentHeight <= 970) {
          singlePagePdfOptions.pageRanges = "1";
        }

        const pdfBuffer = await page.pdf(singlePagePdfOptions);

        await cacheFile.save(pdfBuffer, {
          contentType: "application/pdf",
          metadata: {
            cacheControl: "public, max-age=86400",
          },
        });

        console.log(
            `PDF update trigger: regenerated and cached 
             PDF for quotation ${id}`,
        );
      } catch (err) {
        console.error(
            `PDF update trigger: failed to regenerate PDF for quotation ${id}`,
            err,
        );
      }
    },
);

/**
 * Generates a merged PDF containing the quotation PDF + associated catalog PDFs.
 * Quotation PDF is cached in Storage at quotation-pdfs/{id}.pdf (generated via Puppeteer if needed).
 * Catalog PDFs are loaded from Storage using each product's cataloguePdf.filePath.
 */
exports.generateMergedQuotationPdf = onRequest(async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
      return;
    }

    const id = req.method === "GET" ? req.query.id : req.body && req.body.id;

    if (!id) {
      res.status(400).json({error: "Missing quotation id"});
      return;
    }

    const quotationRef = db.collection("quotations").doc(String(id));
    const quotationSnap = await quotationRef.get();

    if (!quotationSnap.exists) {
      res.status(404).json({error: "Quotation not found"});
      return;
    }

    const quotation = quotationSnap.data() || {};

    // 1) Ensure base quotation PDF exists in Storage (generate via Puppeteer if missing)
    const cachePath = `quotation-pdfs/${id}.pdf`;
    const cacheFile = bucket.file(cachePath);

    let quotationPdfBuffer;
    const [quotationExists] = await cacheFile.exists();
    if (quotationExists) {
      const downloaded = await cacheFile.download();
      quotationPdfBuffer = downloaded[0];
    } else {
      const browser = await getBrowser();
      const page = await browser.newPage();
      const baseUrl = "https://studio-5063047183-aa053.web.app";
      const printUrl = `${baseUrl}/quotations/${id}/print`;

      const response = await page.goto(printUrl, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      if (!response || !response.ok()) {
        const status = response ? response.status() : "NO_RESPONSE";
        throw new Error(`Failed to load print page for merge: HTTP ${status}`);
      }

      try {
        await page.waitForFunction(
            "document.fonts && document.fonts.ready",
            {timeout: 15000},
        );
      } catch (e) {
        console.warn(
            "Merged PDF warning: fonts.ready wait timed out or unsupported",
            e,
        );
      }

      try {
        await page.waitForSelector("[data-quotation-body=\"true\"]", {
          timeout: 10000,
        });
      } catch (e) {
        console.warn(
            "Merged PDF warning: quotation body selector not found in time",
            e,
        );
      }

      try {
        await page.setJavaScriptEnabled(false);
      } catch (e) {
        console.warn(
            "Merged PDF warning: failed to disable JavaScript",
            e,
        );
      }

      const companyName = escapeHtml(quotation.companyName || "");
      const companyAddress = escapeHtml(quotation.companyAddress || "");
      const companyGst = escapeHtml(quotation.companyGst || "");
      const quotationNumber = escapeHtml(quotation.quotationNumber || "");
      const currencyCode = escapeHtml(quotation.currencyCode || "");
      const currencySymbol = escapeHtml(quotation.currencySymbol || "");
      const logoUrl = escapeHtml(quotation.logoUrl || "");

      const showCurrency = currencyCode && currencyCode !== "INR";

      let headerTemplate = "";
      headerTemplate += "<div style='width:100%;height:30mm;";
      headerTemplate += "padding:12px 32px;box-sizing:border-box;";
      headerTemplate += "display:flex;justify-content:space-between;";
      headerTemplate += "align-items:flex-start;";
      headerTemplate += "font-family:Arial,Helvetica,sans-serif;";
      headerTemplate += "font-size:11px;'>";

      headerTemplate +=
      "<div style='display:flex;align-items:center;gap:16px;'>";
      if (logoUrl) {
        headerTemplate += "<img src='" + logoUrl;
        headerTemplate += "' style='height:64px;max-width:160px;";
        headerTemplate += "object-fit:contain;' />";
      }

      headerTemplate += "<div>";
      if (companyName) {
        headerTemplate += "<div style='font-weight:700;font-size:22px;'>";
        headerTemplate += companyName + "</div>";
      }

      if (companyAddress) {
        headerTemplate += "<div style='font-size:11px;color:#4b5563;";
        headerTemplate += "white-space:pre-line;'>" + companyAddress;
        headerTemplate += "</div>";
      }

      if (companyGst) {
        headerTemplate += "<div style='font-size:11px;color:#4b5563;'>";
        headerTemplate += "GSTIN: " + companyGst + "</div>";
      }

      headerTemplate += "</div></div>";
      headerTemplate += "<div style='text-align:right;'>";
      headerTemplate += "<div style='font-weight:800;font-size:26px;";
      headerTemplate += "text-transform:uppercase;'>Quotation</div>";

      if (quotationNumber) {
        headerTemplate += "<div style='font-size:14px;color:#4b5563;";
        headerTemplate += "margin-top:6px;'># " + quotationNumber;
        headerTemplate += "</div>";
      }

      if (showCurrency) {
        headerTemplate += "<div style='font-size:11px;color:#6b7280;";
        headerTemplate += "margin-top:4px;'>Currency: ";
        headerTemplate += currencySymbol + " " + currencyCode + "</div>";
      }

      headerTemplate += "</div></div>";

      const singlePageContentHeight = await page.evaluate(() => {
        const el = document.querySelector('[data-quotation-body="true"]');
        if (el && el instanceof HTMLElement) {
          const rect = el.getBoundingClientRect();
          return rect.bottom;
        }
        return document.body.scrollHeight ||
          document.documentElement.scrollHeight || 0;
      });

      const singlePagePdfOptions = {
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        scale: 0.98,
        margin: {
          top: "38mm",
          right: "8mm",
          bottom: "10mm",
          left: "8mm",
        },
        headerTemplate,
      };

      if (singlePageContentHeight > 0 && singlePageContentHeight <= 970) {
        singlePagePdfOptions.pageRanges = "1";
      }

      quotationPdfBuffer = await page.pdf(singlePagePdfOptions);

      await cacheFile.save(quotationPdfBuffer, {
        contentType: "application/pdf",
        metadata: {
          cacheControl: "public, max-age=86400",
        },
      });
    }

    // 2) Load catalog PDFs from Storage based on products referenced in the quotation
    const products = Array.isArray(quotation.products) ? quotation.products : [];
    const productIds = Array.from(new Set(
        products
            .map((p) => p && p.productId)
            .filter((pid) => typeof pid === "string" && pid),
    ));

    const catalogBuffers = [];
    if (productIds.length > 0) {
      const productSnaps = await Promise.all(
          productIds.map((pid) =>
            db.collection("products").doc(String(pid)).get(),
          ),
      );

      for (const snap of productSnaps) {
        if (!snap.exists) continue;
        const data = snap.data() || {};
        const cataloguePdf = data.cataloguePdf;
        if (!cataloguePdf || !cataloguePdf.filePath) continue;

        const filePath = String(cataloguePdf.filePath);
        const catalogFile = bucket.file(filePath);
        try {
          const [existsCatalog] = await catalogFile.exists();
          if (!existsCatalog) continue;
          const downloaded = await catalogFile.download();
          catalogBuffers.push(downloaded[0]);
        } catch (e) {
          console.warn(
              `Merged PDF warning: failed to load catalog PDF at ${filePath}`,
              e,
          );
        }
      }
    }

    // 3) Merge base quotation PDF + catalog PDFs in memory using pdf-lib
    const mergedPdf = await PDFDocument.create();

    const quotationPdfDoc = await PDFDocument.load(quotationPdfBuffer);
    const quotationPages = await mergedPdf.copyPages(
        quotationPdfDoc,
        quotationPdfDoc.getPageIndices(),
    );
    quotationPages.forEach((page) => mergedPdf.addPage(page));

    for (const catalogBuffer of catalogBuffers) {
      try {
        const catalogPdfDoc = await PDFDocument.load(catalogBuffer);
        const catalogPages = await mergedPdf.copyPages(
            catalogPdfDoc,
            catalogPdfDoc.getPageIndices(),
        );
        catalogPages.forEach((page) => mergedPdf.addPage(page));
      } catch (e) {
        console.warn("Merged PDF warning: failed to merge catalog PDF", e);
      }
    }

    // Optional: add a semi-transparent logo watermark to all pages
    const logoUrlForWatermark = quotation.logoUrl;
    if (logoUrlForWatermark) {
      try {
        const response = await fetch(logoUrlForWatermark);
        if (!response.ok) {
          throw new Error(`Failed to fetch logo for watermark: HTTP ${response.status}`);
        }

        const logoArrayBuffer = await response.arrayBuffer();
        const logoBytes = new Uint8Array(logoArrayBuffer);

        // Try PNG first, then JPEG as a fallback
        let logoImage;
        const lowerUrl = logoUrlForWatermark.toLowerCase();
        if (lowerUrl.endsWith(".png")) {
          logoImage = await mergedPdf.embedPng(logoBytes);
        } else if (lowerUrl.endsWith(".jpg") || lowerUrl.endsWith(".jpeg")) {
          logoImage = await mergedPdf.embedJpg(logoBytes);
        } else {
          // Unknown extension, try PNG then JPEG
          try {
            logoImage = await mergedPdf.embedPng(logoBytes);
          } catch (pngErr) {
            console.warn("Watermark: PNG embed failed, trying JPEG", pngErr);
            logoImage = await mergedPdf.embedJpg(logoBytes);
          }
        }

        const pages = mergedPdf.getPages();
        for (const page of pages) {
          const {width, height} = page.getSize();

          // Scale watermark to cover ~60% of page width
          const watermarkWidth = width * 0.6;
          const aspectRatio = logoImage.height / logoImage.width;
          const watermarkHeight = watermarkWidth * aspectRatio;

          const x = (width - watermarkWidth) / 2;
          const y = (height - watermarkHeight) / 2;

          page.drawImage(logoImage, {
            x,
            y,
            width: watermarkWidth,
            height: watermarkHeight,
            opacity: 0.12,
          });
        }
      } catch (e) {
        console.warn("Merged PDF warning: failed to apply watermark", e);
      }
    }

    const mergedBytes = await mergedPdf.save();
    const mergedBuffer = Buffer.from(mergedBytes);

    // 4) Stream merged PDF back to client
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
        "Content-Disposition",
        `attachment; filename="Quotation-${id}-with-catalogs.pdf"`,
    );
    res.setHeader("Content-Length", String(mergedBuffer.length));
    res.end(mergedBuffer);
  } catch (err) {
    console.error("Merged PDF error:", err);
    res.status(500).json({
      error: "Failed to generate merged quotation PDF",
      details: String(err),
    });
  }
});

// ------------------------
// Dashboard rebuild (stats/dashboard)
// ------------------------

function ensureNumber(n, fallback) {
  const value = typeof n === "number" && !isNaN(n) ? n : undefined;
  return value !== undefined ? value : (fallback !== undefined ? fallback : 0);
}

function toJsDate(value) {
  if (!value) return null;

  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }

  if (typeof value.toDate === "function") {
    const d = value.toDate();
    return d instanceof Date && !isNaN(d.getTime()) ? d : null;
  }

  if (typeof value === "string" || typeof value === "number") {
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  return null;
}

function adjustNamedValue(list, name, delta) {
  const result = Array.isArray(list) ? list.slice() : [];
  const idx = result.findIndex((item) => item && item.name === name);
  if (idx === -1) {
    if (delta !== 0) {
      result.push({name, value: delta});
    }
  } else {
    const prev = ensureNumber(result[idx].value, 0);
    const next = prev + delta;
    result[idx] = {name, value: Math.max(next, 0)};
  }
  return result;
}

function adjustMonthValue(list, month, delta) {
  const result = Array.isArray(list) ? list.slice() : [];
  const idx = result.findIndex((item) => item && item.month === month);
  if (idx === -1) {
    if (delta !== 0) {
      result.push({month, value: delta});
    }
  } else {
    const prev = ensureNumber(result[idx].value, 0);
    const next = prev + delta;
    result[idx] = {month, value: Math.max(next, 0)};
  }
  return result;
}

function mapLeadStatusToBucket(status) {
  switch (status) {
  case "New":
    return "New";
  case "In Discussion":
    return "Discussion";
  case "Negotiation":
    return "Negotiation";
  case "Closed - Won":
    return "Won";
  case "Closed - Lost":
    return "Lost";
  default:
    return null;
  }
}

async function recomputeDashboardSnapshotCf() {
  const leadsSnap = await db.collection("leads").get();
  const quotationsSnap = await db.collection("quotations").get();
  const productsSnap = await db.collection("products").get();

  let totalLeads = 0;
  let totalQuotations = 0;
  let totalProducts = 0;

  let statusBreakdown = [];
  let quotationsByMonth = [];
  let sourceDistribution = [];
  let productDemand = [];
  let sourceWon = [];

  let totalConversionDays = 0;
  let conversionSamples = 0;

  const productNameById = new Map();

  // Products aggregation
  productsSnap.forEach((doc) => {
    const raw = doc.data() || {};
    totalProducts += 1;
    if (raw && raw.name) {
      productNameById.set(String(doc.id), String(raw.name));
    }
  });

  // Leads aggregation
  leadsSnap.forEach((doc) => {
    const raw = doc.data() || {};

    const status = raw.status;
    const source = raw.source || "Unknown";
    const createdAtDate = toJsDate(raw.createdAt);

    totalLeads += 1;

    const bucket = mapLeadStatusToBucket(status);
    if (bucket) {
      statusBreakdown = adjustNamedValue(statusBreakdown, bucket, 1);
    }

    const sourceName = source || "Unknown";
    sourceDistribution = adjustNamedValue(sourceDistribution, sourceName, 1);

    if (status === "Closed - Won") {
      sourceWon = adjustNamedValue(sourceWon, sourceName, 1);

      const effectiveDate = toJsDate(raw.createdAt || createdAtDate);
      if (effectiveDate && !isNaN(effectiveDate.getTime())) {
        const now = new Date();
        const diffMs = now.getTime() - effectiveDate.getTime();
        const days = Math.max(Math.round(diffMs / (1000 * 60 * 60 * 24)), 0);
        totalConversionDays += days;
        conversionSamples += 1;
      }
    }
  });

  // Quotations aggregation
  quotationsSnap.forEach((doc) => {
    const raw = doc.data() || {};
    totalQuotations += 1;

    const createdAtValue =
      raw.createdAt ||
      raw.date ||
      (raw && raw.createdAt) ||
      raw.date;

    try {
      const d = toJsDate(createdAtValue);
      if (d) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const key = `${year}-${String(month).padStart(2, "0")}`;
        quotationsByMonth = adjustMonthValue(quotationsByMonth, key, 1);
      }
    } catch (e) {
      // ignore invalid dates
    }

    const products = Array.isArray(raw.products) ? raw.products : [];
    products.forEach((p) => {
      if (!p) return;
      const productId = String(p.productId || "");
      const productName =
        productNameById.get(productId) || "Unknown Product";
      const quantity = ensureNumber(p.quantity, 0);
      if (quantity > 0) {
        productDemand = adjustNamedValue(
            productDemand,
            productName,
            quantity,
        );
      }
    });
  });

  const averageConversionTime =
    conversionSamples > 0 ?
      Math.round(totalConversionDays / conversionSamples) :
      0;

  return {
    totalLeads,
    totalQuotations,
    totalProducts,
    statusBreakdown,
    quotationsByMonth,
    sourceDistribution,
    productDemand,
    averageConversionTime,
    totalConversionDays,
    conversionSamples,
    sourceWon,
  };
}

async function requireAdminFromRequestCf(req) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) {
    throw new Error("UNAUTHENTICATED");
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer" || !parts[1]) {
    throw new Error("UNAUTHENTICATED");
  }

  const token = parts[1];
  const decoded = await admin.auth().verifyIdToken(token);

  const email = decoded.email;
  const role = decoded.role;

  // Custom claim takes precedence
  if (role === "Admin") {
    return decoded;
  }

  if (!email) {
    throw new Error("FORBIDDEN");
  }

  const employeesRef = db.collection("employees");
  const snap = await employeesRef.where("email", "==", email).limit(1).get();

  if (snap.empty) {
    throw new Error("FORBIDDEN");
  }

  const data = snap.docs[0].data() || {};
  if (!data.role || data.role !== "Admin") {
    throw new Error("FORBIDDEN");
  }

  return decoded;
}

exports.rebuildDashboardStats = onRequest(async (req, res) => {
  try {
    // CORS
    const origin = req.headers.origin || "*";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        req.headers["access-control-request-headers"] ||
        "Content-Type, Authorization",
    );

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
      return;
    }

    await requireAdminFromRequestCf(req);

    const snapshot = await recomputeDashboardSnapshotCf();

    await db.collection("stats").doc("dashboard").set(snapshot, {
      merge: false,
    });

    res.json({success: true, stats: snapshot});
  } catch (err) {
    console.error("rebuildDashboardStats error:", err);

    const message =
      err && (err.message === "UNAUTHENTICATED" || err.message === "FORBIDDEN") ?
        err.message :
        "INTERNAL_ERROR";

    const status =
      message === "UNAUTHENTICATED" ? 401 :
      message === "FORBIDDEN" ? 403 :
      500;

    res.status(status).json({error: message});
  }
});
