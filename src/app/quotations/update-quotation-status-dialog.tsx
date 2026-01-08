'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { Quotation } from '@/lib/types';
import { ALL_QUOTATION_STATUSES } from '@/lib/types';
import { updateQuotation } from '@/lib/data';

interface UpdateQuotationStatusDialogProps {
  quotation: Quotation;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStatusUpdated?: () => void;
}

export function UpdateQuotationStatusDialog({
  quotation,
  open,
  onOpenChange,
  onStatusUpdated,
}: UpdateQuotationStatusDialogProps) {
  const { toast } = useToast();
  const [status, setStatus] = useState<string>(quotation.status);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableStatuses = ALL_QUOTATION_STATUSES.includes(quotation.status as any)
    ? ALL_QUOTATION_STATUSES
    : [
        quotation.status,
        ...ALL_QUOTATION_STATUSES.filter((s: string) => s !== quotation.status),
      ];

  const handleSave = async () => {
    if (!quotation.id) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Quotation ID is missing.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await updateQuotation(quotation.id, { status } as any);
      toast({
        title: 'Status Updated',
        description: `Quotation status changed to "${status}".`,
      });
      onOpenChange(false);
      if (onStatusUpdated) {
        onStatusUpdated();
      }
    } catch (error) {
      console.error('Error updating quotation status:', error);
      toast({
        variant: 'destructive',
        title: 'Error updating status',
        description: 'An unexpected error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Update Status</DialogTitle>
          <DialogDescription>
            Change the status of quotation #{quotation.quotationNumber}.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div className="space-y-1.5">
            <Label>Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {availableStatuses.map((s: string) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
