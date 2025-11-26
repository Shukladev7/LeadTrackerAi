'use client';

import { useState, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
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
import { ImageUpload } from '@/components/image-upload';
import { UploadResult, deletePDF, deleteImageFromStorage } from '@/lib/storage-utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getProductCategoriesAction } from '@/lib/actions';
import { ProductCategory } from '@/lib/types';

const productSchema = z.object({
  name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
  price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
  gstRate: z.coerce.number().min(0, { message: 'GST rate must be a positive number.' }).max(100, { message: 'GST rate cannot exceed 100.' }),
  categoryId: z.string().optional(),
  description: z.string().optional(),
  uom: z.string().optional(),
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
  const [availableCategories, setAvailableCategories] = useState<ProductCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [catalogPdf, setCatalogPdf] = useState<UploadResult | null>(null);
  // Track if user explicitly removed the existing PDF (when editing an item that already had a catalogue)
  const [removedExistingPdf, setRemovedExistingPdf] = useState(false);
  const [pdfError, setPdfError] = useState<string>('');
  const [productImage, setProductImage] = useState<UploadResult | null>(null);
  const [productImageFile, setProductImageFile] = useState<File | null>(null);
  const [removedExistingImage, setRemovedExistingImage] = useState(false);
  const [imageError, setImageError] = useState<string>('');
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, control, setValue, formState: { errors, isSubmitting } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });
  
  const { fields: skuFields, append: appendSku, remove: removeSku } = useFieldArray({
    control,
    name: "skus"
  });

  useEffect(() => {
    if (open) {
      reset({
        ...product,
        skus: product.skus?.map(sku => ({ value: sku })) || [],
        categoryId: product.categoryId,
        description: (product as any).description || '',
      });
      setSelectedCategoryId(product.categoryId);
      // Reset local PDF and image state flags whenever the sheet is (re)opened
      setCatalogPdf(null);
      setRemovedExistingPdf(false);
      setPdfError('');
      setProductImage(null);
      setProductImageFile(null);
      setRemovedExistingImage(false);
      setImageError('');
      setIsImageUploading(false);
      
      // Fetch available categories
      const fetchCategories = async () => {
        try {
          const categories = await getProductCategoriesAction();
          setAvailableCategories(categories);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchCategories();
    }
  }, [product, open, reset]);

  const handleAddSku = () => {
    if (currentSku.trim() !== '') {
      appendSku({ value: currentSku.trim() });
      setCurrentSku('');
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'skus') {
        formData.append(key, JSON.stringify((value as {value: string}[]).map(s => s.value)));
      } else if (key === 'categoryId') {
        if (selectedCategoryId) formData.append('categoryId', selectedCategoryId);
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    // Add catalog PDF data if available (only send URL + metadata)
    if (catalogPdf) {
      formData.append('catalogPdf', JSON.stringify({
        url: catalogPdf.url,
        fileName: catalogPdf.fileName,
        filePath: catalogPdf.path,
        uploadedAt: new Date().toISOString()
      }));
    }

    // If user removed the existing PDF and did not upload a new one, inform backend to clear it
    if (!catalogPdf && removedExistingPdf) {
      formData.append('removeCatalogPdf', 'true');
    }

    // Add new image file if user uploaded one
    if (productImageFile) {
      formData.append('productImage', productImageFile);
    } else if (!removedExistingImage && product.productImage) {
      // Keep existing image metadata (send as JSON for backend to preserve)
      formData.append('existingProductImage', JSON.stringify({
        url: product.productImage.url,
        fileName: product.productImage.fileName,
        filePath: product.productImage.filePath,
        uploadedAt: product.productImage.uploadedAt || new Date().toISOString(),
      }));
    }

    // If user removed the existing image and did not upload a new one, inform backend to clear it
    if (!productImageFile && removedExistingImage) {
      formData.append('removeProductImage', 'true');
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

    if (result?.message === 'Successfully updated product.') {
      toast({
        title: 'Product Updated',
        description: `"${data.name}" has been successfully updated.`,
      });
      onOpenChange(false);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result?.message || 'An error occurred while updating the product.',
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
          <div className="space-y-2">
            <Label>Product Category</Label>
            <Controller
              control={control}
              name="categoryId"
              render={({ field }) => (
                <Select onValueChange={(val) => { field.onChange(val); setSelectedCategoryId(val); }} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCategories.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.categoryId && <p className="text-xs text-destructive mt-1">{errors.categoryId.message}</p>}
          </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" rows={3} placeholder="Optional product description" {...register('description')} />
        </div>
        <div>
          <Label htmlFor="uom">Unit of Measurement (UOM)</Label>
          <Input id="uom" placeholder="e.g. pcs, kg, meter" {...register('uom')} />
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
                setRemovedExistingPdf(false); // A new upload supersedes any prior removal
              }}
              onUploadError={(error) => {
                setPdfError(error);
                setCatalogPdf(null);
              }}
              currentPdf={
                // If user removed existing PDF, don't show it. Otherwise prefer newly uploaded, else show existing.
                removedExistingPdf
                  ? null
                  : (catalogPdf || (product.cataloguePdf ? {
                      url: product.cataloguePdf.url,
                      fileName: product.cataloguePdf.fileName,
                      filePath: product.cataloguePdf.filePath
                    } : null))
              }
              onRemove={() => {
                setCatalogPdf(null);
                setPdfError('');
                // Mark the existing PDF as removed so UI hides it and backend clears it if no new upload
                if (product.cataloguePdf) {
                  setRemovedExistingPdf(true);
                }
              }}
              label="Catalog PDF"
              description="Upload a PDF catalog file (max 10MB)"
            />
            {pdfError && <p className="text-xs text-destructive mt-1">{pdfError}</p>}
          </div>
          
          <div>
            <ImageUpload
              onUploadComplete={(result) => {
                setProductImage(result);
                setImageError('');
                setRemovedExistingImage(false);
                setIsImageUploading(false);
              }}
              onUploadError={(error) => {
                setImageError(error);
                setProductImage(null);
                setProductImageFile(null);
                setIsImageUploading(false);
              }}
              onFileSelect={(file) => {
                setProductImageFile(file);
                setIsImageUploading(true);
              }}
              currentImage={
                removedExistingImage
                  ? null
                  : (productImage || (product.productImage ? {
                      url: product.productImage.url,
                      fileName: product.productImage.fileName,
                      filePath: product.productImage.filePath
                    } : null))
              }
              onRemove={() => {
                setProductImage(null);
                setProductImageFile(null);
                setImageError('');
                if (product.productImage) {
                  setRemovedExistingImage(true);
                }
              }}
              label="Product Image"
              description="Upload a product image (max 10MB)"
            />
            {imageError && <p className="text-xs text-destructive mt-1">{imageError}</p>}
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
              {skuFields.map((field, index) => (
                <Badge key={field.id} variant="secondary">
                  {field.value}
                  <button
                    type="button"
                    className="ml-2 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => removeSku(index)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))}
            </div>
            {errors.skus && <p className="text-xs text-destructive mt-1">{errors.skus.message}</p>}
          </div>
          <SheetFooter className="pt-4 sticky bottom-0 bg-background">
            <Button type="submit" disabled={isSubmitting || isImageUploading} className="w-full">
              {isImageUploading ? 'Uploading Image...' : isSubmitting ? 'Saving Changes...' : 'Save Changes'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

