
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
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { format } from 'date-fns';

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
import { Search, Download } from 'lucide-react';
import { CreateQuotationDialog } from './create-quotation-dialog';
import type { Quotation } from '@/lib/types';

type PopulatedQuotation = Quotation & { leadName: string; leadCompany: string };

interface DataTableProps<TData extends PopulatedQuotation, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends PopulatedQuotation, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState(searchParams.get('q') || '');
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGlobalFilter(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleExport = () => {
    const headers = [
      'Quotation Number', 'Lead Name', 'Lead Company', 'Status', 'Date', 'Valid Until',
      'Currency', 'Sub-Total', 'Total GST', 'Grand Total', 'Created At'
    ];

    const escapeCsvCell = (cell: string | number) => {
        const cellStr = String(cell);
        if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
            return `"${cellStr.replace(/"/g, '""')}"`;
        }
        return cellStr;
    };

    const rows = table.getFilteredRowModel().rows.map(row => {
        const q = row.original;
        const currencyCode = q.currencyCode || 'INR';
        const conversionRate = q.conversionRate || 1.0;
        const convertedSubTotal = q.subTotal / conversionRate;
        const convertedTotalGst = q.totalGst / conversionRate;
        const convertedGrandTotal = q.grandTotal / conversionRate;
        
        return [
            q.quotationNumber,
            q.leadName,
            q.leadCompany,
            q.status,
            format(new Date(q.date), 'yyyy-MM-dd'),
            format(new Date(q.validUntil), 'yyyy-MM-dd'),
            currencyCode,
            convertedSubTotal.toFixed(2),
            convertedTotalGst.toFixed(2),
            convertedGrandTotal.toFixed(2),
            format(new Date(q.createdAt), 'yyyy-MM-dd HH:mm:ss'),
        ].map(escapeCsvCell).join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'quotations.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            <div className="relative w-full sm:w-auto sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search quotations..."
                    value={globalFilter}
                    onChange={handleSearch}
                    className="pl-10 w-full"
                />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="outline" onClick={handleExport} className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                </Button>
                <CreateQuotationDialog />
            </div>
        </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No quotations found.
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
