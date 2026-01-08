import React from "react";
import { format } from "date-fns";
import { Quotation, Lead, PopulatedQuotationProduct } from "@/lib/business-types";
import { ProductCategory } from "@/lib/types";
import { amountToWords } from "@/lib/number-to-words";

interface QuotationPrintTemplateProps {
  quotation: Quotation;
  lead: Lead;
  products: PopulatedQuotationProduct[];
  categories?: ProductCategory[];
}

function convertAmount(amountInINR: number, conversionRate?: number): number {
  const rate = conversionRate || 1.0;
  return amountInINR / rate;
}

function formatCurrency(
  amountInINR: number,
  quotation: Quotation
): string {
  const convertedAmount = convertAmount(amountInINR, quotation.conversionRate || 1.0);
  const symbol = quotation.currencySymbol || "₹";

  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedAmount);

  return `${symbol}${formatted}`;
}

export function QuotationPrintTemplate({
  quotation,
  lead,
  products,
  categories = [],
}: QuotationPrintTemplateProps) {
  const categoryNameById: Record<string, string> = Object.fromEntries(
    (categories || []).map((c) => [c.id, c.name])
  );

  const sortedProducts = [...products].sort((a, b) => {
    const aName = categoryNameById[a.product.categoryId || ""] || "";
    const bName = categoryNameById[b.product.categoryId || ""] || "";
    return aName.localeCompare(bName);
  });

  const totalBaseAmount = products.reduce(
    (acc, p) => acc + p.quantity * p.rate,
    0
  );
  const totalDiscountAmount = products.reduce((acc, p) => {
    const baseAmount = p.quantity * p.rate;
    return acc + baseAmount * ((p.discount || 0) / 100);
  }, 0);
  const hasDiscounts = totalDiscountAmount > 0;

  return (
    <div className="print-a4-page">
      <div
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          // Remove top padding so Puppeteer margin controls spacing
          padding: "0px 32px 16px 32px",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          {/* <header className="print-header print-avoid-break flex flex-col sm:flex-row justify-between items-start pb-4 border-b-2 border-gray-800 gap-3">
            <div className="flex items-center gap-4">
              {quotation.logoUrl && (
                <img
                  src={quotation.logoUrl}
                  alt={`${quotation.companyName} Logo`}
                  className="h-16 sm:h-20 w-auto object-contain"
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
                  <p className="text-xs sm:text-sm text-gray-600">
                    GSTIN: {quotation.companyGst}
                  </p>
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
              {quotation.currencyCode && quotation.currencyCode !== "INR" && (
                <p className="text-xs text-gray-500 mt-1">
                  Currency: {quotation.currencySymbol} {quotation.currencyCode}
                </p>
              )}
            </div>
          </header> */}

          {/* Body */}
          <main className="print-body" data-quotation-body="true">
            {/* To / Dates */}
            <section className="grid sm:grid-cols-2 gap-4 mt-4 mb-3 text-sm leading-snug">
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
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Address:
                    </p>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {quotation.client_address}
                    </p>
                  </div>
                )}
                {quotation.client_gst_no && (
                  <div className="mt-1">
                    <p className="text-xs font-semibold text-gray-500">
                      GSTIN: <span className="font-normal text-gray-600">{quotation.client_gst_no}</span>
                    </p>
                  </div>
                )}
              </div>
              <div className="sm:text-right">
                <div className="grid grid-cols-2 sm:grid-cols-2">
                  <p className="font-semibold text-gray-600">Date:</p>
                  <p className="text-gray-800">
                    {format(new Date(quotation.date), "PPP")}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 mt-1">
                  <p className="font-semibold text-gray-600">Valid Until:</p>
                  <p className="text-gray-800">
                    {format(new Date(quotation.validUntil), "PPP")}
                  </p>
                </div>
              </div>
            </section>

            {/* Products table - mirror on-screen preview layout */}
            <section className="overflow-x-auto mt-3">
              <table className="print-table w-full text-left text-sm leading-snug">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider">
                      Product / Service
                    </th>
                    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-center">
                      Qty
                    </th>
                    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-right">
                      Rate
                    </th>
                    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-center">
                      Discount
                    </th>
                    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProducts.map((p) => {
                    const catId = p.product.categoryId || "";
                    const catName = categoryNameById[catId];

                    const lines: string[] = [];
                    const nameLine = (p.product.name || "").toString().trim();
                    if (catName) lines.push(catName);
                    if (nameLine) lines.push(nameLine.toUpperCase());
                    const desc = (p as any).description || p.product.description;
                    if (desc) {
                      const extra = (desc as string)
                        .split(/\r?\n/)
                        .map((s) => s.trim())
                        .filter(Boolean);
                      lines.push(...extra);
                    }

                    return (
                      <tr key={p.productId} className="border-b align-top">
                        <td className="px-3 py-2">
                          <div className="flex items-start gap-2">
                            {/* Product image thumbnail, similar to preview */}
                            {(() => {
                              const thumbUrl = (p.product as any).thumbnailImage?.url as string | undefined;
                              if (!thumbUrl) return null;
                              const originalUrl = p.product.productImage?.url || thumbUrl;
                              return (
                                <a
                                  href={originalUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ textDecoration: "none" }}
                                >
                                  <span
                                    className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0"
                                    aria-hidden="true"
                                    style={{ display: "inline-block", width: "64px", height: "64px" }}
                                  >
                                    {/* Puppeteer will render this <img>; we avoid Next/Image here */}
                                    <img
                                      src={thumbUrl}
                                      alt={p.product.name}
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        maxWidth: "64px",
                                        maxHeight: "64px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </span>
                                </a>
                              );
                            })()}
                            <div className="flex-1">
                              <div className="leading-snug">
                                {lines.map((text, idx) => (
                                  <p
                                    key={`${p.productId}-l-${idx}`}
                                    className={idx === 0 ? "font-semibold tracking-wide" : ""}
                                  >
                                    {text}
                                  </p>
                                ))}
                              </div>
                              {/* Catalog PDF badge */}
                              {p.product.cataloguePdf?.url && (
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs text-green-600">
                                    Catalog PDF Available
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2 text-center text-gray-700">
                          {p.quantity} {p.product.uom || "units"}
                        </td>
                        <td className="px-3 py-2 text-right text-gray-700">
                          {formatCurrency(p.rate, quotation)}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-700">
                          {p.discount ? `${p.discount}%` : "-"}
                        </td>
                        <td className="px-3 py-2 text-right text-gray-800 font-semibold">
                          {formatCurrency(p.amount, quotation)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>

            {/* Totals (Amount Summary) - keep on a single page */}
            <section
              className="flex justify-between mt-4 gap-8 print-avoid-break-block"
              style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
            >
              <div className="w-full max-w-sm text-sm flex items-end">
                <div className="mt-2 pt-2">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Amount in Words:
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {amountToWords(
                      convertAmount(quotation.grandTotal, quotation.conversionRate || 1.0),
                      quotation.currencyCode || "INR"
                    )}
                  </p>
                </div>
              </div>

              <div className="w-full max-w-xs space-y-1.5 text-sm leading-snug">
                <div className="flex justify-between text-gray-700">
                  <span>Base Amount</span>
                  <span>{formatCurrency(totalBaseAmount, quotation)}</span>
                </div>
                {hasDiscounts && (
                  <div className="flex justify-between text-green-600">
                    <span>Total Discount</span>
                    <span>-{formatCurrency(totalDiscountAmount, quotation)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span>Sub-total</span>
                  <span>{formatCurrency(quotation.subTotal, quotation)}</span>
                </div>
                {quotation.showGst === true && (
                  <div className="flex justify-between text-gray-700">
                    <span>Total GST</span>
                    <span>{formatCurrency(quotation.totalGst, quotation)}</span>
                  </div>
                )}
                {quotation.showFreight === true && (
                  <div className="flex justify-between text-gray-700">
                    <span>Freight Charges</span>
                    <span>
                      {quotation.freightCharges && !isNaN(Number(quotation.freightCharges)) ? (
                        formatCurrency(Number(quotation.freightCharges), quotation)
                      ) : (
                        <span className="text-blue-600 font-medium">EXTRA</span>
                      )}
                    </span>
                  </div>
                )}
                {quotation.showCourier === true && (
                  <div className="flex justify-between text-gray-700">
                    <span>Courier Charges</span>
                    <span>
                      {quotation.courierCharges && !isNaN(Number(quotation.courierCharges)) ? (
                        formatCurrency(Number(quotation.courierCharges), quotation)
                      ) : (
                        <span className="text-blue-600 font-medium">EXTRA</span>
                      )}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-800 my-1" />
                <div className="flex justify-between text-base font-bold text-gray-900">
                  <span>Grand Total</span>
                  <span>{formatCurrency(quotation.grandTotal, quotation)}</span>
                </div>
              </div>
            </section>

            {/* Terms & Conditions - keep on a single page */}
            <section
              className="mt-2 p-2 border-t print-avoid-break-block"
              style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
            >
              <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-2">
                Terms & Conditions
              </h4>
              <p className="text-xs text-gray-600 whitespace-pre-wrap">
                {quotation.termsAndConditions}
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
