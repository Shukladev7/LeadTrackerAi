import { getLeadById, getProductCategories, getProducts, getQuotationById } from "@/lib/data";
import { QuotationPrintTemplate } from "../QuotationPrintTemplate";
import { Quotation, Lead, PopulatedQuotationProduct } from "@/lib/business-types";
import { ProductCategory } from "@/lib/types";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface QuotationPrintPageParams {
  params: Promise<{
    id: string;
  }>;
}

export default async function QuotationPrintPage({ params }: QuotationPrintPageParams) {
  const { id } = await params;

  const quotation = (await getQuotationById(id)) as Quotation | undefined;

  if (!quotation || !quotation.id) {
    return (
      <div className="quotation-print-root flex items-center justify-center min-h-screen">
        <p>Quotation not found.</p>
      </div>
    );
  }

  const [lead, allProducts, categories] = await Promise.all([
    getLeadById(quotation.leadId) as Promise<Lead | undefined>,
    getProducts(),
    getProductCategories(),
  ]);

  if (!lead || !lead.id) {
    return (
      <div className="quotation-print-root flex items-center justify-center min-h-screen">
        <p>Lead not found for this quotation.</p>
      </div>
    );
  }

  const populatedProducts: PopulatedQuotationProduct[] = (quotation.products || [])
    .map((p) => {
      const product = allProducts.find((ap: any) => ap.id === p.productId);
      if (!product || !product.id) return null;
      const amount = p.quantity * p.rate;
      const gstAmount = amount * (p.gstRate / 100);
      return { ...p, product, amount, gstAmount } as PopulatedQuotationProduct;
    })
    .filter((p): p is PopulatedQuotationProduct => p !== null);

  return (
    <div className="quotation-print-root">
      <QuotationPrintTemplate
        quotation={quotation}
        lead={lead}
        products={populatedProducts}
        categories={categories as ProductCategory[]}
      />
    </div>
  );
}
