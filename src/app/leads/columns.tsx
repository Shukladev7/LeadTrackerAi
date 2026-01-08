'use client';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { ArrowUpDown, MoreHorizontal, User, Edit, Eye, Trash2, PlusCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { StatusBadge } from '@/components/status-badge';
import type { Lead, LeadStatus } from '@/lib/types';
import { format, parseISO } from 'date-fns';
import { EditLeadDialog } from './[id]/edit-lead-dialog';
import { ALL_STATUSES } from '@/lib/types';
import { deleteLead, updateLeadStatus } from '@/lib/data';

// Enhanced lead type with product names
type EnhancedLead = Lead & {
  productsWithNames?: Array<{
    productId: string;
    quantity: number;
    rate: number;
    selectedSku?: string;
    productName: string;
  }>;
};

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


function LeadActions({ lead, onChange }: { lead: EnhancedLead; onChange?: () => void }) {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
    const handleStatusUpdate = async (status: LeadStatus) => {
      try {
        await updateLeadStatus(lead.id, status as any);
        onChange?.();
      } catch (error) {
        console.error('Error updating lead status', error);
      }
    };

    const handleDelete = async () => {
      if (confirm(`Are you sure you want to delete lead "${lead.name}"? This action cannot be undone.`)) {
        try {
          await deleteLead(lead.id);
          onChange?.();
        } catch (error) {
          console.error('Error deleting lead', error);
        }
      }
    };
  
    return (
      <div className="text-right">
        <EditLeadDialog lead={lead} open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} />
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
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={`/leads/${lead.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setIsEditDialogOpen(true)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Lead
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/tasks?leadId=${lead.id}`}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Task
                  </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Update Status</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {ALL_STATUSES.map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => handleStatusUpdate(status)}
                    disabled={lead.status === status}
                  >
                    {status}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onSelect={handleDelete}
            >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Lead
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  
export function createLeadColumns(onChange?: () => void): ColumnDef<EnhancedLead>[] {
  return [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        const lead = row.original;
        return (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <User className="h-5 w-5" />
            </div>
            <div className="grid gap-0.5">
              <Link href={`/leads/${lead.id}`} className="font-medium hover:underline">{lead.name}</Link>
              <span className="text-xs text-muted-foreground">{lead.email}</span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: 'company',
      header: 'Company',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusBadge status={row.original.status} />, 
    },
    {
      accessorKey: 'source',
      header: 'Source',
      cell: ({ row }) => (
        <div className="text-sm text-muted-foreground">
          {row.original.source || '-'}
        </div>
      ),
    },
    {
      accessorKey: 'products',
      header: 'Products',
      cell: ({ row }) => {
        const lead = row.original as EnhancedLead;
        const productsWithNames = lead.productsWithNames || [];
        
        if (productsWithNames.length === 0) {
          return <div className="text-sm text-muted-foreground">-</div>;
        }
        
        return (
          <div className="max-w-[200px]">
            {productsWithNames.length === 1 ? (
              <div className="text-sm">
                <div className="truncate font-medium" title={productsWithNames[0].productName}>
                  {productsWithNames[0].productName}
                </div>
                <div className="text-xs text-muted-foreground">Qty: {productsWithNames[0].quantity}</div>
              </div>
            ) : (
              <div className="text-sm">
                <div className="font-medium">{productsWithNames.length} products</div>
                <div className="text-xs text-muted-foreground truncate" title={productsWithNames.slice(0, 2).map(p => p.productName).join(', ')}>
                  {productsWithNames.slice(0, 2).map(p => p.productName).join(', ')
                  }{productsWithNames.length > 2 && '...'}
                </div>
              </div>
            )}
          </div>
        );
      },
      filterFn: (row, id, value) => {
        if (!value || value === 'all') return true;
        const lead = row.original as EnhancedLead;
        const products = lead.products || [];
        return products.some((p: any) => p.productId === value);
      },
    },
    {
      accessorKey: 'createdAt',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Created At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
          const date = row.getValue('createdAt') as string;
          return <FormattedDate dateString={date} />
      }
    },
    {
      id: 'actions',
      cell: ({ row }) => <LeadActions lead={row.original} onChange={onChange} />, 
    },
  ];
}
