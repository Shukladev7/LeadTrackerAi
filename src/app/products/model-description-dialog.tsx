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
import { ProductCategory } from '@/lib/types';

type CategoryDescriptionDialogProps = {
  category: ProductCategory;
  children: React.ReactNode;
};

export function CategoryDescriptionDialog({ category, children }: CategoryDescriptionDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{category.name}</DialogTitle>
          <DialogDescription>Category Description</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {category.description || 'No description available.'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
