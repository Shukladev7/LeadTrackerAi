'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { PlusCircle } from 'lucide-react';
import { addCurrencyAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

export function AddCurrencySheet() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await addCurrencyAction(formData);
    setIsSubmitting(false);

    if (result.message.includes('Successfully')) {
      toast({
        title: 'Currency Added',
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
        <form action={handleSubmit} className="space-y-4 mt-6">
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
