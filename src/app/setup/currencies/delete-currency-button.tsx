'use client';

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { deleteCurrencyAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

type DeleteCurrencyButtonProps = {
  currencyId: string;
};

export function DeleteCurrencyButton({ currencyId }: DeleteCurrencyButtonProps) {
  const { toast } = useToast();

  async function handleDelete() {
    const result = await deleteCurrencyAction(currencyId);
    
    if (result.message.includes('Successfully')) {
      toast({
        title: 'Currency Deleted',
        description: result.message,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.message,
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
