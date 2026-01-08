"use client";

import React, { useEffect, useState, useMemo } from "react";
import { DataTable } from "./data-table";
import { createQuotationColumns } from "./columns";
import { usePaginatedCollection } from "@/hooks/use-firestore";
import { quotationService } from "@/lib/business-services";
import { getQuotationsCount } from "@/lib/data";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Search } from "lucide-react";
import { CreateQuotationDialog } from "./create-quotation-dialog";

export default function QuotationsPage() {
  /* ------------------ Total Count ------------------ */
  const [totalCount, setTotalCount] = useState(0);

  /* ------------------ Filters ------------------ */
  const [searchInput, setSearchInput] = useState("");
  const [searchToken, setSearchToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("ALL");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  /* ------------------ Pagination ------------------ */
  const [page, setPage] = useState(1);

  /* ------------------ Debounced Search Token ------------------ */
  useEffect(() => {
    const handle = setTimeout(() => {
      const trimmed = searchInput.trim().toLowerCase();
      if (!trimmed) {
        setSearchToken(null);
        return;
      }

      const parts = trimmed.split(/\s+/).filter(Boolean);
      const lastToken = parts.length ? parts[parts.length - 1] : null;
      setSearchToken(lastToken || null);
    }, 300);

    return () => clearTimeout(handle);
  }, [searchInput]);

  /* ------------------ Firestore Query Options ------------------ */
  const options = useMemo(() => {
    const where: any[] = [];

    if (searchToken) {
      where.push({ field: "searchTokens", operator: "array-contains", value: searchToken });
    }

    if (status !== "ALL") {
      where.push({ field: "status", operator: "==", value: status });
    }

    if (fromDate) {
      where.push({
        field: "createdAt",
        operator: ">=",
        value: new Date(fromDate),
      });
    }

    if (toDate) {
      const end = new Date(toDate);
      end.setHours(23, 59, 59, 999);
      where.push({
        field: "createdAt",
        operator: "<=",
        value: end,
      });
    }

    return {
      orderBy: { field: "createdAt", direction: "desc" },
      where: where.length ? where : undefined,
    };
  }, [searchToken, status, fromDate, toDate]);

  /* ------------------ Pagination Hook ------------------ */
  const {
    data,
    loading,
    hasMore,
    loadPage,
    reset,
    error,
  } = usePaginatedCollection(quotationService, 20, options);

  /* ------------------ Fetch Total Count (once, using stats helper) ------------------ */
  useEffect(() => {
    getQuotationsCount().then(setTotalCount).catch(console.error);
  }, []);

  /* ------------------ Reset on Filter Change ------------------ */
  useEffect(() => {
    setPage(1);
    reset();
    loadPage(1);
  }, [options]); // eslint-disable-line

  const rows = useMemo(() => {
    return data.map((q: any) => ({
      ...q,
      leadName: q.leadName || "—",
      leadCompany: q.leadCompany || "",
    }));
  }, [data]);

  const handleTableChange = React.useCallback(() => {
    reset();
    loadPage(1);
  }, [reset, loadPage]);

  /* ------------------ Pagination Controls ------------------ */
  const goNext = () => {
    if (!hasMore || loading) return;
    setPage((p) => p + 1);
    loadPage(page + 1);
  };

  const goPrev = () => {
    if (page === 1 || loading) return;
    setPage((p) => p - 1);
    loadPage(page - 1);
  };

  /* ------------------ Export ALL Quotations ------------------ */
  const handleExport = async () => {
    // Fetch all quotations from Firestore using paginated queries so that
    // large collections (hundreds of documents) are fully exported.
    const pageSize = 100;
    let all: any[] = [];
    let cursor: any = undefined;

    // Simple loop over pages until there is no more data
    // We intentionally ignore current UI filters here and export the
    // entire quotations collection.
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { data: pageData, hasMore, lastDoc } = await quotationService.getPaginated({
        pageSize,
        orderBy: { field: "createdAt", direction: "desc" },
        startAfter: cursor,
      } as any);

      all = all.concat(pageData);

      if (!hasMore) break;
      cursor = lastDoc;
    }

    if (!all.length) return;

    const headers = [
      "Quotation Number",
      "Status",
      "Lead ID",
      "Company Name",
      "Date",
      "Valid Until",
      "Currency",
      "Sub Total",
      "Total GST",
      "Grand Total",
      "Created At",
    ];

    const escape = (v: unknown) => {
      const s = v == null ? "" : String(v);
      return s.includes(",") || s.includes('"') || s.includes("\n")
        ? `"${s.replace(/"/g, '""')}"`
        : s;
    };

    const rows = all.map((q: any) =>
      [
        q.quotationNumber,
        q.status,
        q.leadId,
        q.companyName,
        q.date,
        q.validUntil,
        `${q.currencySymbol || "₹"} ${q.currencyCode || "INR"}`,
        q.subTotal ?? 0,
        q.totalGst ?? 0,
        q.grandTotal ?? 0,
        q.createdAt?.seconds
          ? format(new Date(q.createdAt.seconds * 1000), "yyyy-MM-dd HH:mm:ss")
          : "",
      ]
        .map(escape)
        .join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotations.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (error) {
    return <div className="p-6 text-red-500">Failed to load quotations</div>;
  }

  return (
    <div className="space-y-4 p-6">
      {/* ------------------ Header ------------------ */}
      <h2 className="text-3xl font-bold tracking-tight">
        Quotations{" "}
        <span className="text-muted-foreground font-normal text-xl">
          {totalCount}
        </span>
      </h2>

      {/* ------------------ Filters ------------------ */}
      <div className="flex items-center gap-3 overflow-x-auto">
        <div className="relative min-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search quotations..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All statuses</SelectItem>
            <SelectItem value="Draft">Draft</SelectItem>
            <SelectItem value="Sent">Sent</SelectItem>
            <SelectItem value="Accepted">Accepted</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>

        <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-40" />
        <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-40" />
      </div>

      {/* ------------------ Table ------------------ */}
      <DataTable
        columns={createQuotationColumns(handleTableChange)}
        data={rows}
        loading={loading}
        onExport={handleExport}
        createButton={
          <CreateQuotationDialog
            onQuotationCreated={() => {
              reset();
              loadPage(1);
            }}
          />
        }
      />

      {/* ------------------ Pagination ------------------ */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-sm text-muted-foreground">Page {page}</span>
        <div className="flex gap-2">
          <Button variant="outline" onClick={goPrev} disabled={page === 1 || loading}>
            Previous
          </Button>
          <Button variant="outline" onClick={goNext} disabled={!hasMore || loading}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
