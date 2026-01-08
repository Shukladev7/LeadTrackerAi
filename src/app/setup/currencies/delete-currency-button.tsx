"use client";

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { deleteCurrency } from '@/lib/firestore-service';
import { useToast } from '@/hooks/use-toast';

type DeleteCurrencyButtonProps = {
  currencyId: string;
  onCurrencyDeleted?: () => void;
};

export function DeleteCurrencyButton({ currencyId, onCurrencyDeleted }: DeleteCurrencyButtonProps) {
  const { toast } = useToast();

  async function handleDelete() {
    try {
      await deleteCurrency(currencyId);
      toast({
        title: 'Currency Deleted',
        description: 'Successfully deleted currency.',
      });

      if (onCurrencyDeleted) {
        await onCurrencyDeleted();
      }
    } catch (error) {
      console.error('Error deleting currency', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete currency. Please try again.',
      });
    }
  }

  return (
    <Button
      onClick={handleDelete}
      variant="ghost"
      size="icon"
      className="h-9 w-9 text-muted-foreground hover:text-destructive"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
