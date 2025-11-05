'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { Pencil } from 'lucide-react';
import { updateCurrencyAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Currency } from '@/lib/business-types';

type EditCurrencySheetProps = {
  currency: Currency;
};

export function EditCurrencySheet({ currency }: EditCurrencySheetProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await updateCurrencyAction(currency.id!, formData);
    setIsSubmitting(false);

    if (result.message.includes('Successfully')) {
      toast({
        title: 'Currency Updated',
        description: result.message,
      });
      setOpen(false);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.message,
      });
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Pencil className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Currency</SheetTitle>
          <SheetDescription>
            Update currency details and conversion rate.
          </SheetDescription>
        </SheetHeader>
        <form action={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="code">Currency Code *</Label>
            <Input
              id="code"
              name="code"
              defaultValue={currency.code}
              placeholder="USD, EUR, GBP"
              required
              maxLength={5}
              className="uppercase"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Currency Name *</Label>
            <Input
              id="name"
              name="name"
              defaultValue={currency.name}
              placeholder="US Dollar, Euro, British Pound"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="symbol">Currency Symbol *</Label>
            <Input
              id="symbol"
              name="symbol"
              defaultValue={currency.symbol}
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
              defaultValue={currency.conversionRate}
              placeholder="83.00"
              required
            />
            <p className="text-xs text-muted-foreground">
              How many INR = 1 unit of this currency
            </p>
          </div>

          <SheetFooter className="pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Updating...' : 'Update Currency'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
