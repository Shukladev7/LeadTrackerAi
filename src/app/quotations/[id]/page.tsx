
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  getQuotationById,
  getLeadById,
  getProducts,
  getProductCategories,
} from '@/lib/data';
import { Button } from '@/components/ui/button';
import { QuotationPreview } from './quotation-preview';
import { EditQuotationDialog } from '../edit-quotation-dialog';

export default async function QuotationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quotation = await getQuotationById(id);
  if (!quotation || !quotation.id) {
    notFound();
  }

const [lead, allProducts, allCategories] = await Promise.all([
    getLeadById(quotation.leadId),
    getProducts(),
    getProductCategories(),
  ]);

  if (!lead || !lead.id) {
    notFound();
  }

  const populatedProducts = quotation.products.map((p) => {
    const product = allProducts.find((ap) => ap.id === p.productId);
    if (!product || !product.id) {
      throw new Error(`Product details not found for ID: ${p.productId}`);
    }
    const amount = p.quantity * p.rate;
    const gstAmount = amount * (p.gstRate / 100);
    return { ...p, product, amount, gstAmount };
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/quotations">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">
            Quotation Details
          </h2>
        </div>
        <EditQuotationDialog quotation={quotation} />
      </div>
      <QuotationPreview
        quotation={quotation}
        lead={lead}
        products={populatedProducts}
        categories={allCategories}
      />
    </>
  );
}
