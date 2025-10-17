
'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, User, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Employee, EmployeeRole } from '@/lib/types';
import { format, parseISO } from 'date-fns';
import { deleteEmployeeAction } from '@/lib/actions';
import { EditEmployeeDialog } from './edit-employee-dialog';

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

const roleStyles: Record<EmployeeRole, string> = {
    'Admin': 'bg-red-100 text-red-800 border-red-200',
    'Manager': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Sales': 'bg-blue-100 text-blue-800 border-blue-200',
    'CEO': 'bg-purple-100 text-purple-800 border-purple-200',
  };

function EmployeeActions({ employee }: { employee: Employee }) {
  const [editOpen, setEditOpen] = useState(false);
  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete employee "${employee.name}"? This action cannot be undone.`)) {
      await deleteEmployeeAction(employee.id);
    }
  };

  return (
    <div className="text-right">
      <EditEmployeeDialog open={editOpen} onOpenChange={setEditOpen} employee={employee} />
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
          <DropdownMenuItem onSelect={() => setEditOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Employee
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className="text-destructive focus:bg-destructive/10 focus:text-destructive"
            onSelect={handleDelete}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Employee
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <User className="h-5 w-5" />
          </div>
          <div className="grid gap-0.5">
            <span className="font-medium">{employee.name}</span>
            <span className="text-xs text-muted-foreground">{employee.email}</span>
            <span className="text-xs text-muted-foreground">{employee.department} Department</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => <Badge variant="outline" className={roleStyles[row.original.role] || ''}>{row.original.role}</Badge>,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Joined At
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
    cell: ({ row }) => <EmployeeActions employee={row.original} />,
  },
];
