
'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { ArrowUpDown, MoreHorizontal, Edit, Eye, Trash2, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import type { Quotation } from '@/lib/types';
import { format, parseISO } from 'date-fns';
import { deleteQuotationAction } from '@/lib/actions';
import { EditQuotationDialog } from './edit-quotation-dialog';
import { UpdateQuotationStatusDialog } from './update-quotation-status-dialog';

type PopulatedQuotation = Quotation & { leadName: string; leadCompany: string };

function FormattedDate({ dateString }: { dateString: string }) {
    const [formattedDate, setFormattedDate] = useState('');
  
    useEffect(() => {
        if (dateString) {
            setFormattedDate(format(parseISO(dateString), 'PPP'));
        }
    }, [dateString]);
  
    if (!formattedDate) {
      return <div className="pl-4">-</div>;
    }
  
    return <div className="pl-4">{formattedDate}</div>;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
};

const statusStyles: Record<string, string> = {
    'Draft': 'bg-gray-100 text-gray-800 border-gray-200',
    'Sent': 'bg-blue-100 text-blue-800 border-blue-200',
    'Accepted': 'bg-green-100 text-green-800 border-green-200',
    'Rejected': 'bg-red-100 text-red-800 border-red-200',
  };

function QuotationActions({ quotation }: { quotation: PopulatedQuotation }) {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);

    const handleDelete = async () => {
      if (confirm(`Are you sure you want to delete quotation "${quotation.quotationNumber}"? This action cannot be undone.`)) {
        await deleteQuotationAction(quotation.id);
      }
    };
  
    return (
      <div className="text-right">
        <EditQuotationDialog 
          quotation={quotation}
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          onQuotationUpdated={() => {
            setIsEditDialogOpen(false);
            // Optionally refresh the page or update the data
            window.location.reload();
          }} 
        />
        <UpdateQuotationStatusDialog
          quotation={quotation}
          open={isStatusDialogOpen}
          onOpenChange={setIsStatusDialogOpen}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/quotations/${quotation.id}`}>
                <Eye className="mr-2 h-4 w-4" />
                View/Download
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsStatusDialogOpen(true)}>
              <FileText className="mr-2 h-4 w-4" />
              Update Status
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsEditDialogOpen(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Quotation
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onSelect={handleDelete}
            >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Quotation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
}

export const columns: ColumnDef<PopulatedQuotation>[] = [
  {
    accessorKey: 'quotationNumber',
    header: 'Number',
    cell: ({ row }) => (
        <Link href={`/quotations/${row.original.id}`} className="font-medium hover:underline">
            {row.original.quotationNumber}
        </Link>
    ),
  },
  {
    accessorKey: 'leadName',
    header: 'Lead',
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.leadName}</div>
        <div className="text-xs text-muted-foreground">{row.original.leadCompany}</div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const cls = statusStyles[row.original.status] || 'bg-gray-100 text-gray-800 border-gray-200';
      return (
        <Badge variant="outline" className={cls}>{row.original.status}</Badge>
      );
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <FormattedDate dateString={row.original.date} />,
  },
  {
    accessorKey: 'currencyCode',
    header: () => <div className="text-center">Currency</div>,
    cell: ({ row }) => {
      const currencyCode = row.original.currencyCode || 'INR';
      const currencySymbol = row.original.currencySymbol || '₹';
      return (
        <div className="text-center">
          <span className="font-medium">{currencySymbol} {currencyCode}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'grandTotal',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const grandTotal = row.original.grandTotal;
      const conversionRate = row.original.conversionRate || 1.0;
      const currencySymbol = row.original.currencySymbol || '₹';
      
      // Convert from INR to selected currency
      const convertedAmount = grandTotal / conversionRate;
      
      const formatted = new Intl.NumberFormat('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(convertedAmount);
      
      return (
        <div className="text-right font-medium">
          {currencySymbol}{formatted}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <QuotationActions quotation={row.original} />,
  },
];
