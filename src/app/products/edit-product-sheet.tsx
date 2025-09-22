'use client';

import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { updateProduct } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/business-types';
import { PDFUpload } from '@/components/pdf-upload';
import { UploadResult, deletePDF } from '@/lib/storage-utils';

const productSchema = z.object({
  name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
  gstRate: z.coerce.number().min(0, { message: 'GST rate must be a positive number.' }).max(100, { message: 'GST rate cannot exceed 100.' }),
  skus: z.array(z.object({ value: z.string().min(1, "SKU cannot be empty.") })).optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

type EditProductSheetProps = {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EditProductSheet({ product, open, onOpenChange }: EditProductSheetProps) {
  const [currentSku, setCurrentSku] = useState('');
  const [catalogPdf, setCatalogPdf] = useState<UploadResult | null>(null);
  const [pdfError, setPdfError] = useState<string>('');
  const { toast } = useToast();
  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skus"
  });

  useEffect(() => {
    if (open) {
      reset({
        ...product,
        skus: product.skus?.map(sku => ({ value: sku })) || [],
      });
    }
  }, [product, open, reset]);

  const handleAddSku = () => {
    if (currentSku.trim() !== '') {
      append({ value: currentSku.trim() });
      setCurrentSku('');
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'skus') {
        formData.append(key, JSON.stringify((value as {value: string}[]).map(s => s.value)));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    // Add catalog PDF data if available
    if (catalogPdf) {
      formData.append('catalogPdf', JSON.stringify({
        url: catalogPdf.url,
        fileName: catalogPdf.fileName,
        filePath: catalogPdf.path,
        uploadedAt: new Date().toISOString(),
        base64Data: catalogPdf.base64Data
      }));
    }

    if (!product.id) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Product ID is missing',
      });
      return;
    }

    const result = await updateProduct(product.id, formData);

    if (result.message === 'Successfully updated product.') {
      toast({
        title: 'Product Updated',
        description: `"${data.name}" has been successfully updated.`,
      });
      onOpenChange(false);
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message,
        });
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Edit Product</SheetTitle>
          <SheetDescription>
            Update the details for this product or service.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-6 max-h-[90vh] overflow-y-auto pr-6">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" {...register('name')} className={errors.name ? 'border-destructive' : ''} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...register('description')} className={errors.description ? 'border-destructive' : ''} />
            {errors.description && <p className="text-xs text-destructive mt-1">{errors.description.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <Label htmlFor="price">Price (₹)</Label>
                <Input id="price" type="number" step="0.01" {...register('price')} className={errors.price ? 'border-destructive' : ''} />
                {errors.price && <p className="text-xs text-destructive mt-1">{errors.price.message}</p>}
            </div>
            <div>
                <Label htmlFor="gstRate">GST Rate (%)</Label>
                <Input id="gstRate" type="number" step="0.01" {...register('gstRate')} className={errors.gstRate ? 'border-destructive' : ''} />
                {errors.gstRate && <p className="text-xs text-destructive mt-1">{errors.gstRate.message}</p>}
            </div>
          </div>
          
          <div>
            <PDFUpload
              onUploadComplete={(result) => {
                setCatalogPdf(result);
                setPdfError('');
              }}
              onUploadError={(error) => {
                setPdfError(error);
                setCatalogPdf(null);
              }}
              currentPdf={catalogPdf || (product.cataloguePdf ? {
                url: product.cataloguePdf.url,
                fileName: product.cataloguePdf.fileName,
                filePath: product.cataloguePdf.filePath,
                base64Data: product.cataloguePdf.base64Data
              } : null)}
              onRemove={() => {
                setCatalogPdf(null);
                setPdfError('');
              }}
              label="Catalog PDF"
              description="Upload a PDF catalog file (max 5MB)"
            />
            {pdfError && <p className="text-xs text-destructive mt-1">{pdfError}</p>}
          </div>
          <div className="space-y-2">
            <Label>SKUs</Label>
            <div className="flex items-center gap-2">
              <Input
                value={currentSku}
                onChange={(e) => setCurrentSku(e.target.value)}
                placeholder="Enter SKU and press Add"
              />
              <Button type="button" variant="outline" onClick={handleAddSku}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {fields.map((field, index) => (
                <Badge key={field.id} variant="secondary">
                  {field.value}
                  <button
                    type="button"
                    className="ml-2 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => remove(index)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))}
            </div>
            {errors.skus && <p className="text-xs text-destructive mt-1">{errors.skus.message}</p>}
          </div>
          <SheetFooter className="pt-4 sticky bottom-0 bg-background">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
