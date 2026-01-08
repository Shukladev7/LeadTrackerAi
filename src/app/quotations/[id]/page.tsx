
"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import {
  getQuotationById,
  getLeadById,
  getProducts,
  getProductCategories,
} from '@/lib/data';
import { Button } from '@/components/ui/button';
import { QuotationPreview } from './quotation-preview';
import { EditQuotationDialog } from '../edit-quotation-dialog';

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type QuotationDetailPageParams = {
  id: string;
};

export default function QuotationDetailPage() {
  const params = useParams<QuotationDetailPageParams>();
  const id = params?.id;

  const [quotation, setQuotation] = useState<any | null>(null);
  const [lead, setLead] = useState<any | null>(null);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (!id || typeof id !== 'string') {
        if (!isMounted) return;
        setError('Missing quotation ID');
        setLoading(false);
        return;
      }

      try {
        const quotationData = await getQuotationById(id);

        if (!isMounted) return;

        if (!quotationData || !quotationData.id) {
          setError('Quotation not found');
          setLoading(false);
          return;
        }

        setQuotation(quotationData as any);

        const [leadData, productsData, categoriesData] = await Promise.all([
          getLeadById(quotationData.leadId),
          getProducts(),
          getProductCategories(),
        ]);

        if (!isMounted) return;

        if (!leadData || !leadData.id) {
          setError('Lead for this quotation was not found');
          setLoading(false);
          return;
        }

        setLead(leadData as any);
        setAllProducts(productsData || []);
        setAllCategories(categoriesData || []);
      } catch (err) {
        console.error('Error loading quotation details', err);
        if (!isMounted) return;
        setError('Failed to load quotation details. Please try again.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const populatedProducts = useMemo(() => {
    if (!quotation) return [];

    return (quotation.products || [])
      .map((p: any) => {
        const product = allProducts.find((ap: any) => ap.id === p.productId);
        if (!product || !product.id) {
          console.warn(`Product details not found for ID: ${p.productId}`);
          return null;
        }
        const amount = p.quantity * p.rate;
        const gstAmount = amount * (p.gstRate / 100);
        return { ...p, product, amount, gstAmount };
      })
      .filter((p: any | null): p is any => p !== null);
  }, [quotation, allProducts]);

  if (loading) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/quotations">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Loading quotation...</h2>
      </div>
    );
  }

  if (error || !quotation || !lead) {
    return (
      <>
        <div className="flex items-center gap-4">
          <Link href="/quotations">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Quotation Details</h2>
        </div>
        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            {error || 'The requested quotation could not be found.'}
          </p>
        </div>
      </>
    );
  }

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
