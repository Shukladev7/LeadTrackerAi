'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProductModel } from '@/lib/types';

type ModelDescriptionDialogProps = {
  model: ProductModel;
  children: React.ReactNode;
};

export function ModelDescriptionDialog({ model, children }: ModelDescriptionDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{model.name}</DialogTitle>
          <DialogDescription>Model Description</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {model.description || 'No description available.'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
