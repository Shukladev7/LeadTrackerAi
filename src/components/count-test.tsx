'use client';

import React from 'react';
import { getLeadsCountAction, getQuotationsCountAction, getProductsCountAction } from '@/lib/actions';

export function CountTest() {
  const [counts, setCounts] = React.useState({
    leads: 0,
    quotations: 0,
    products: 0,
    loading: true,
    error: null as string | null
  });

  React.useEffect(() => {
    async function fetchCounts() {
      try {
        const [leadsCount, quotationsCount, productsCount] = await Promise.all([
          getLeadsCountAction(),
          getQuotationsCountAction(),
          getProductsCountAction(),
        ]);

        setCounts({
          leads: leadsCount,
          quotations: quotationsCount,
          products: productsCount,
          loading: false,
          error: null
        });
      } catch (error) {
        setCounts(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }));
      }
    }

    fetchCounts();
  }, []);

  if (counts.loading) {
    return <div>Loading counts...</div>;
  }

  if (counts.error) {
    return <div>Error loading counts: {counts.error}</div>;
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Count Test Results</h3>
      <div className="space-y-2">
        <div>Leads: {counts.leads}</div>
        <div>Quotations: {counts.quotations}</div>
        <div>Products: {counts.products}</div>
      </div>
    </div>
  );
}
