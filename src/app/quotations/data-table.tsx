
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
import { ALL_QUOTATION_STATUSES } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type PopulatedQuotation = Quotation & { leadName: string; leadCompany: string };

interface DataTableProps<TData extends PopulatedQuotation, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  quotationStatuses?: string[];
}

export function DataTable<TData extends PopulatedQuotation, TValue>({
  columns,
  data,
  quotationStatuses,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState(searchParams.get('q') || '');
  const [statusFilter, setStatusFilter] = React.useState<string>(searchParams.get('status') || 'ALL');
  const [fromDate, setFromDate] = React.useState<string>(searchParams.get('from') || '');
  const [toDate, setToDate] = React.useState<string>(searchParams.get('to') || '');

  const availableStatuses = React.useMemo(
    () => (quotationStatuses && quotationStatuses.length ? quotationStatuses : ALL_QUOTATION_STATUSES),
    [quotationStatuses]
  );

  const filteredData = React.useMemo(() => {
    const search = globalFilter.trim().toLowerCase();

    return data.filter((q) => {
      if (statusFilter && statusFilter !== 'ALL' && q.status !== statusFilter) {
        return false;
      }

      if (fromDate || toDate) {
        const baseDateString = q.date || q.createdAt;
        if (baseDateString) {
          const quotationDate = new Date(baseDateString);
          if (fromDate) {
            const from = new Date(fromDate);
            from.setHours(0, 0, 0, 0);
            if (quotationDate < from) return false;
          }
          if (toDate) {
            const to = new Date(toDate);
            to.setHours(23, 59, 59, 999);
            if (quotationDate > to) return false;
          }
        }
      }

      if (search) {
        const inQuotationNumber = q.quotationNumber?.toLowerCase().includes(search);
        const inLeadName = q.leadName?.toLowerCase().includes(search);
        const inLeadCompany = q.leadCompany?.toLowerCase().includes(search);
        const inCompanyName = q.companyName?.toLowerCase().includes(search);
        const inProducts = Array.isArray(q.products)
          ? q.products.some((p) =>
              (p.description || '').toLowerCase().includes(search)
            )
          : false;

        if (!inQuotationNumber && !inLeadName && !inLeadCompany && !inCompanyName && !inProducts) {
          return false;
        }
      }

      return true;
    });
  }, [data, statusFilter, fromDate, toDate, globalFilter]);
  
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
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

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'ALL') {
      params.set('status', value);
    } else {
      params.delete('status');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleFromDateChange = (value: string) => {
    setFromDate(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('from', value);
    } else {
      params.delete('from');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleToDateChange = (value: string) => {
    setToDate(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('to', value);
    } else {
      params.delete('to');
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

    const rows = filteredData.map(q => {
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
        <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search quotations..."
                        value={globalFilter}
                        onChange={handleSearch}
                        className="pl-10 w-full"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Select value={statusFilter} onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-full sm:w-40">
                            <SelectValue placeholder="All statuses" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ALL">All statuses</SelectItem>
                            {availableStatuses.map((status) => (
                                <SelectItem key={status} value={status}>
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        type="date"
                        value={fromDate}
                        onChange={(e) => handleFromDateChange(e.target.value)}
                        className="w-full sm:w-40"
                    />
                    <Input
                        type="date"
                        value={toDate}
                        onChange={(e) => handleToDateChange(e.target.value)}
                        className="w-full sm:w-40"
                    />
                </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <Button variant="outline" onClick={handleExport} className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                </Button>
                <CreateQuotationDialog quotationStatuses={availableStatuses} />
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
