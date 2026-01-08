"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { MoreHorizontal, Eye, Edit, Trash2, FileText } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Quotation } from "@/lib/types";
import { deleteQuotation } from "@/lib/data";
import { EditQuotationDialog } from "./edit-quotation-dialog";
import { UpdateQuotationStatusDialog } from "./update-quotation-status-dialog";

/* ------------------ Types ------------------ */
export type PopulatedQuotation = Quotation & {
  leadName: string;
  leadCompany: string;
};

/* ------------------ Helpers ------------------ */
function toDate(value: any): Date | null {
  if (!value) return null;
  if (value instanceof Timestamp) return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === "string") {
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

const statusStyles: Record<string, string> = {
  Draft: "bg-gray-100 text-gray-800 border-gray-200",
  Sent: "bg-blue-100 text-blue-800 border-blue-200",
  Accepted: "bg-green-100 text-green-800 border-green-200",
  Rejected: "bg-red-100 text-red-800 border-red-200",
};

/* ------------------ Action Cell ------------------ */
function QuotationActions({
  quotation,
  onChange,
}: {
  quotation: PopulatedQuotation;
  onChange?: () => void;
}) {
  const [editOpen, setEditOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Delete quotation "${quotation.quotationNumber}"?`)) return;
    await deleteQuotation(quotation.id);
    onChange?.();
  };

  return (
    <div className="text-right">
      <EditQuotationDialog
        quotation={quotation}
        open={editOpen}
        onOpenChange={setEditOpen}
        onQuotationUpdated={onChange}
      />

      <UpdateQuotationStatusDialog
        quotation={quotation}
        open={statusOpen}
        onOpenChange={setStatusOpen}
        onStatusUpdated={onChange}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href={`/quotations/${quotation.id}`}>
              <Eye className="mr-2 h-4 w-4" />
              View / Download
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setStatusOpen(true)}>
            <FileText className="mr-2 h-4 w-4" />
            Update Status
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setEditOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Quotation
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={handleDelete}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/* ------------------ FINAL COLUMNS ------------------ */
export function createQuotationColumns(
  onChange?: () => void,
): ColumnDef<PopulatedQuotation>[] {
  return [
    {
      accessorKey: "quotationNumber",
      header: "Number",
      cell: ({ row }) => (
        <Link
          href={`/quotations/${row.original.id}`}
          className="font-medium hover:underline"
        >
          {row.original.quotationNumber}
        </Link>
      ),
    },
    {
      accessorKey: "leadName",
      header: "Lead",
      cell: ({ row }) => (
        <div>
          <div className="font-medium">{row.original.leadName}</div>
          <div className="text-xs text-muted-foreground">
            {row.original.leadCompany}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className={statusStyles[row.original.status] ?? ""}
        >
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: ({ row }) => {
        const d = toDate(row.original.createdAt);
        return d ? format(d, "PPP") : "-";
      },
    },
    {
      accessorKey: "currencyCode",
      header: () => <div className="text-center">Currency</div>,
      cell: ({ row }) => (
        <div className="text-center font-medium">
          {row.original.currencySymbol || "₹"}{" "}
          {row.original.currencyCode || "INR"}
        </div>
      ),
    },
    {
      accessorKey: "grandTotal",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const total = row.original.grandTotal || 0;
        const rate = row.original.conversionRate || 1;
        const symbol = row.original.currencySymbol || "₹";

        const converted = total / rate;

        return (
          <div className="text-right font-medium">
            {symbol}
            {converted.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <QuotationActions quotation={row.original} onChange={onChange} />
      ),
    },
  ];
}
