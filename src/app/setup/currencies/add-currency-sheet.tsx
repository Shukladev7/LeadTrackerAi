"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { PlusCircle } from 'lucide-react';
import { addCurrency } from '@/lib/firestore-service';
import { useToast } from '@/hooks/use-toast';

type AddCurrencySheetProps = {
  onCurrencyAdded?: () => void;
};

export function AddCurrencySheet({ onCurrencyAdded }: AddCurrencySheetProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const code = String(formData.get('code') || '').trim().toUpperCase();
      const name = String(formData.get('name') || '').trim();
      const symbol = String(formData.get('symbol') || '').trim();
      const conversionRateRaw = String(formData.get('conversionRate') || '').trim();
      const conversionRate = parseFloat(conversionRateRaw || '0');

      if (!code || !name || !symbol || !conversionRate || Number.isNaN(conversionRate)) {
        toast({
          variant: 'destructive',
          title: 'Invalid data',
          description: 'Please fill in all required fields with valid values.',
        });
        setIsSubmitting(false);
        return;
      }

      await addCurrency({ code, name, symbol, conversionRate });

      toast({
        title: 'Currency Added',
        description: `Successfully added '${code}'.`,
      });

      if (onCurrencyAdded) {
        await onCurrencyAdded();
      }

      event.currentTarget.reset();
      setOpen(false);
    } catch (error) {
      console.error('Error adding currency', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to add currency. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Currency
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Currency</SheetTitle>
          <SheetDescription>
            Add a new currency for use in quotations. INR is the base currency.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="code">Currency Code *</Label>
            <Input
              id="code"
              name="code"
              placeholder="USD, EUR, GBP"
              required
              maxLength={5}
              className="uppercase"
            />
            <p className="text-xs text-muted-foreground">
              2-5 character code (e.g., USD, EUR)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Currency Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="US Dollar, Euro, British Pound"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="symbol">Currency Symbol *</Label>
            <Input
              id="symbol"
              name="symbol"
              placeholder="$, €, £"
              required
              maxLength={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="conversionRate">Conversion Rate (to INR) *</Label>
            <Input
              id="conversionRate"
              name="conversionRate"
              type="number"
              step="0.01"
              min="0.01"
              placeholder="83.00"
              required
            />
            <p className="text-xs text-muted-foreground">
              How many INR = 1 unit of this currency
            </p>
          </div>

          <SheetFooter className="pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Currency'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
