'use client';

import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Search, Download } from 'lucide-react';
import { format } from 'date-fns';

import { CreateLeadDialog } from './create-lead-dialog';
import { ALL_STATUSES, Lead } from '@/lib/types';
import { getProducts, getLeadSources } from '@/lib/data';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onLeadCreated: () => void; // ⬅ parent refresh callback
  initialStatusFilter?: string;
  initialSourceFilter?: string;
}

export function DataTable<TData extends Lead, TValue>({
  columns,
  data,
  onLeadCreated,
  initialStatusFilter,
  initialSourceFilter,
}: DataTableProps<TData, TValue>) {

  // local table state (used for filtering, UI only)
  const [tableData, setTableData] = React.useState<TData[]>(data);

  // sync when parent updates data
  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleLocalInsert = (newLead: Lead) => {
    // Optional: add lead instantly to UI before parent refresh
    setTableData((prev) => [newLead, ...prev]);

    // 🔥 Trigger parent page to re-fetch from Firestore
    onLeadCreated();
  };

  // filters controlled by URL searchParams
  const [sorting, setSorting] = React.useState<SortingState[]>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [columnFilters, setColumnFilters] = React.useState<
    { id: string; value: string }[]
  >([]);

  // Ensure we only apply the initial status filter once
  const [hasAppliedInitialStatus, setHasAppliedInitialStatus] = React.useState(false);

  // Ensure we only apply the initial source filter once
  const [hasAppliedInitialSource, setHasAppliedInitialSource] = React.useState(false);

  const [sources, setSources] = React.useState<any[]>([]);
  const [products, setProducts] = React.useState<any[]>([]);

  React.useEffect(() => {
    const load = async () => {
      const [s, p] = await Promise.all([getLeadSources(), getProducts()]);
      setSources(s);
      setProducts(p);
    };
    load();
  }, []);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,

    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
  });

  // Apply initial status filter (e.g. when coming from dashboard chart)
  React.useEffect(() => {
    if (!initialStatusFilter || hasAppliedInitialStatus) return;

    setColumnFilters((prev) => [
      ...prev.filter((f) => f.id !== 'status'),
      { id: 'status', value: initialStatusFilter },
    ]);
    setHasAppliedInitialStatus(true);
  }, [initialStatusFilter, hasAppliedInitialStatus]);

   // Apply initial source filter (e.g. when coming from source-wise chart)
   React.useEffect(() => {
    if (!initialSourceFilter || hasAppliedInitialSource) return;

    setColumnFilters((prev) => [
      ...prev.filter((f) => f.id !== 'source'),
      { id: 'source', value: initialSourceFilter },
    ]);
    setHasAppliedInitialSource(true);
  }, [initialSourceFilter, hasAppliedInitialSource]);

  const handleExport = () => {
    const headers = [
      'ID',
      'Name',
      'Company',
      'Email',
      'Phone',
      'WhatsApp',
      'Status',
      'Source',
      'Created At',
      'Interested Products',
    ];

    const escapeCell = (cell: string) => {
      if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
        return `"${cell.replace(/"/g, '""')}"`;
      }
      return cell;
    };

    const rows = tableData.map((lead) => {
      const productsString = (lead.products || [])
        .map(
          (p) =>
            `${p.productId} (Qty: ${p.quantity}, SKU: ${p.selectedSku || 'N/A'})`
        )
        .join('; ');

      return [
        lead.id,
        lead.name,
        lead.company,
        lead.email,
        lead.phone,
        lead.whatsappNumber || '',
        lead.status,
        lead.source,
        format(new Date(lead.createdAt), 'yyyy-MM-dd HH:mm:ss'),
        productsString,
      ]
        .map(escapeCell)
        .join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'leads.csv';
    link.click();
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">

          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search leads..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-10 max-w-sm w-full"
            />
          </div>

          <Select
            onValueChange={(value) =>
              setColumnFilters((prev) => [
                ...prev.filter((f) => f.id !== 'status'),
                ...(value === 'all' ? [] : [{ id: 'status', value }]),
              ])
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {ALL_STATUSES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) =>
              setColumnFilters((prev) => [
                ...prev.filter((f) => f.id !== 'source'),
                ...(value === 'all' ? [] : [{ id: 'source', value }]),
              ])
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {sources.map((s) => (
                <SelectItem key={s.id} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) =>
              setColumnFilters((prev) => [
                ...prev.filter((f) => f.id !== 'product'),
                ...(value === 'all' ? [] : [{ id: 'product', value }]),
              ])
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {products.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-end gap-2 w-full">
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          {/* 🔥 Create lead and trigger parent refresh */}
          <CreateLeadDialog onLeadCreated={handleLocalInsert} />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
