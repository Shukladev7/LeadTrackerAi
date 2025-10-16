
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
  } from "@/components/ui/select"
import { CreateLeadDialog } from './create-lead-dialog';
import { ALL_STATUSES, Lead } from '@/lib/types';
import { Search, Download } from 'lucide-react';
import { format } from 'date-fns';
import { getProducts, getLeadSources } from '@/lib/data';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends Lead, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState(searchParams.get('q') || '');
  const [columnFilters, setColumnFilters] = React.useState<any[]>([
    {
        id: 'status',
        value: searchParams.get('status') || '',
    }
  ]);

  // State for filter options
  const [sources, setSources] = React.useState<any[]>([]);
  const [products, setProducts] = React.useState<any[]>([]);

  // Load filter options
  React.useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        const [sourcesData, productsData] = await Promise.all([
          getLeadSources(),
          getProducts()
        ]);
        setSources(sourcesData);
        setProducts(productsData);
      } catch (error) {
        console.error('Failed to load filter options:', error);
      }
    };
    loadFilterOptions();
  }, []);


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      globalFilter,
      columnFilters,
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

  const handleStatusFilter = (status: string) => {
    const value = status === 'all' ? '' : status;
    table.getColumn('status')?.setFilterValue(value);

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('status', value);
    } else {
      params.delete('status');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSourceFilter = (source: string) => {
    const value = source === 'all' ? '' : source;
    
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('source', value);
    } else {
      params.delete('source');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleProductFilter = (product: string) => {
    const value = product === 'all' ? '' : product;
    
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('product', value);
    } else {
      params.delete('product');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleExport = () => {
    const headers = [
      'ID', 'Name', 'Company', 'Email', 'Phone', 'WhatsApp',
      'Status', 'Source', 'Created At', 'Interested Products'
    ];

    const escapeCsvCell = (cell: string) => {
        if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
            return `"${cell.replace(/"/g, '""')}"`;
        }
        return cell;
    };

    const rows = data.map(lead => {
        const productsString = (lead.products || [])
            .map(p => `${p.productId} (Qty: ${p.quantity}, SKU: ${p.selectedSku || 'N/A'})`)
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
        ].map(escapeCsvCell).join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'leads.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                        onChange={handleSearch}
                        className="pl-10 max-w-sm w-full"
                    />
                </div>
                <Select onValueChange={handleStatusFilter} value={searchParams.get('status') || 'all'}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        {ALL_STATUSES.map(status => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select onValueChange={handleSourceFilter} value={searchParams.get('source') || 'all'}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by source" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Sources</SelectItem>
                        {sources.map(source => (
                            <SelectItem key={source.id || source.name} value={source.name}>{source.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select onValueChange={handleProductFilter} value={searchParams.get('product') || 'all'}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by product" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Products</SelectItem>
                        {products.map(product => (
                            <SelectItem key={product.id || product.name} value={product.id || product.name}>{product.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center justify-end gap-2 w-full">
                <Button variant="outline" onClick={handleExport} className="w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                </Button>
                <CreateLeadDialog />
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
