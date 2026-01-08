"use client";

import React, { useEffect, useState } from "react";
import { getLeads, getProducts } from "@/lib/firestore-data-service";
import { createLeadColumns } from "./columns";
import { DataTable } from "./data-table";

type LeadsPageProps = {
  searchParams?: {
    q?: string;
    status?: string;
    source?: string;
    product?: string;
  };
};

export default function LeadsPage({ searchParams }: LeadsPageProps) {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔥 Add this refresh trigger
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = React.useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  // Optional initial status filter coming from dashboard chart (sessionStorage)
  const [initialStatusFilter, setInitialStatusFilter] = useState<string | undefined>(
    undefined
  );

  // Optional initial source filter coming from Source-wise chart (sessionStorage)
  const [initialSourceFilter, setInitialSourceFilter] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const params = searchParams || {};
        const [rawLeads, products] = await Promise.all([
          getLeads(params.q, params.status, params.source, params.product),
          getProducts(),
        ]);

        const productLookup = new Map(products.map((p: any) => [p.id, p.name]));

        const enhancedLeads = rawLeads.map((lead: any) => ({
          ...lead,
          productsWithNames: lead.products?.map((p: any) => ({
            ...p,
            productName: productLookup.get(p.productId) || "Unknown Product",
          })),
        }));

        if (!cancelled) {
          setLeads(enhancedLeads);
        }
      } catch (e) {
        if (!cancelled) setError("Failed to load leads.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [
    searchParams?.q,
    searchParams?.status,
    searchParams?.source,
    searchParams?.product,
    refreshKey,   // 🔥 Add this
  ]);

  // Read any status/source filters passed via sessionStorage from the dashboard charts
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const storedStatus = window.sessionStorage.getItem('leadsStatusFilter');
      if (storedStatus) {
        setInitialStatusFilter(storedStatus);
        window.sessionStorage.removeItem('leadsStatusFilter');
      }

      const storedSource = window.sessionStorage.getItem('leadsSourceFilter');
      if (storedSource) {
        setInitialSourceFilter(storedSource);
        window.sessionStorage.removeItem('leadsSourceFilter');
      }
    } catch {
      // Ignore storage errors; just skip pre-filtering
    }
  }, []);

  if (loading) {
    return <div className="py-10 text-center text-muted-foreground">Loading leads...</div>;
  }

  if (error) {
    return <div className="py-10 text-center text-muted-foreground">{error}</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Leads {leads.length}</h2>
      </div>

      {/* 🔥 Pass refresh trigger to DataTable */}
      <DataTable
        columns={createLeadColumns(handleRefresh)}
        data={leads}
        onLeadCreated={handleRefresh}
        initialStatusFilter={initialStatusFilter}
        initialSourceFilter={initialSourceFilter}
      />
    </>
  );
}
