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
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { addProduct } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
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

export function AddProductSheet() {
  const [open, setOpen] = useState(false);
  const [currentSku, setCurrentSku] = useState('');
  const [availableCategories, setAvailableCategories] = useState<ProductCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [catalogPdf, setCatalogPdf] = useState<UploadResult | null>(null);
  const [pdfError, setPdfError] = useState<string>('');
  const [productImage, setProductImage] = useState<UploadResult | null>(null);
  const [imageError, setImageError] = useState<string>('');
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, control, setValue, formState: { errors, isSubmitting } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      skus: [],
      categoryId: undefined,
      description: '',
      uom: '',
    },
  });
  
  const { fields: skuFields, append: appendSku, remove: removeSku } = useFieldArray({
    control,
    name: "skus"
  });

// Fetch available categories when component opens
useEffect(() => {
  if (open) {
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
}, [open]);


  const handleAddSku = () => {
    if (currentSku.trim() !== '') {
      appendSku({ value: currentSku.trim() });
      setCurrentSku('');
    }
  };


  const onSubmit = async (data: ProductFormData) => {
    console.log('Form submission - productImage state:', productImage);
    console.log('Form submission - catalogPdf state:', catalogPdf);
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'skus') {
        formData.append(key, JSON.stringify((value as {value: string}[]).map(s => s.value)));
      } else if (key === 'categoryId') {
        if (selectedCategoryId) formData.append('categoryId', selectedCategoryId);
      } else if (value) {
        formData.append(key, String(value));
      }
    });

    // Add catalog PDF data if available (only send URL + metadata)
    if (catalogPdf) {
      console.log('Adding catalogPdf to formData');
      formData.append('catalogPdf', JSON.stringify({
        url: catalogPdf.url,
        fileName: catalogPdf.fileName,
        filePath: catalogPdf.path,
        uploadedAt: new Date().toISOString()
      }));
    }

    // Add product image data if available
    if (productImage) {
      console.log('Adding productImage to formData');
      formData.append('productImage', JSON.stringify({
        url: productImage.url,
        fileName: productImage.fileName,
        filePath: productImage.path,
        uploadedAt: new Date().toISOString()
      }));
    } else {
      console.log('productImage is null/undefined, not adding to formData');
    }

    const result = await addProduct(formData);

    if (result.message === 'Successfully added product.') {
      toast({
        title: 'Product Added',
        description: `"${data.name}" has been successfully added.`,
      });
      reset();
      setCurrentSku('');
      setSelectedCategoryId(undefined);
      setCatalogPdf(null);
      setPdfError('');
      setProductImage(null);
      setImageError('');
      setOpen(false);
    } else {
        // If product creation failed and we uploaded files, clean them up
        if (catalogPdf) {
          try {
            await deletePDF(catalogPdf.path);
          } catch (error) {
            console.error('Failed to cleanup uploaded PDF:', error);
          }
        }
        if (productImage) {
          try {
            await deleteImageFromStorage(productImage.path);
          } catch (error) {
            console.error('Failed to cleanup uploaded image:', error);
          }
        }
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message,
        });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Add a New Product</SheetTitle>
          <SheetDescription>
            Fill in the details below to add a new product or service.
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
            <Textarea id="description" rows={3} placeholder="Optional product description" {...register('description')} />
          </div>
          <div>
            <Label htmlFor="uom">Unit of Measurement (UOM)</Label>
            <Input id="uom" placeholder="e.g. pcs, kg, meter" {...register('uom')} />
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
              currentPdf={catalogPdf ? {
                url: catalogPdf.url,
                fileName: catalogPdf.fileName,
                filePath: catalogPdf.path
              } : null}
              onRemove={async () => {
                if (catalogPdf) {
                  try {
                    await deletePDF(catalogPdf.path);
                    setCatalogPdf(null);
                    setPdfError('');
                  } catch (error) {
                    setPdfError('Failed to remove PDF');
                  }
                }
              }}
              label="Catalog PDF"
              description="Upload product catalog (max 10MB)"
            />
            {pdfError && <p className="text-xs text-destructive mt-1">{pdfError}</p>}
          </div>
          <div>
            <ImageUpload
              onUploadComplete={(result) => {
                console.log('ImageUpload onUploadComplete called with:', result);
                setProductImage(result);
                setIsImageUploading(false);
                console.log('productImage state should now be:', result);
                setImageError('');
              }}
              onUploadError={(error) => {
                console.log('ImageUpload onUploadError called with:', error);
                setImageError(error);
                setProductImage(null);
                setIsImageUploading(false);
              }}
              onFileSelect={() => {
                console.log('Image upload started');
                setIsImageUploading(true);
              }}
              currentImage={productImage ? {
                url: productImage.url,
                fileName: productImage.fileName,
                filePath: productImage.path
              } : null}
              onRemove={async () => {
                if (productImage) {
                  try {
                    await deleteImageFromStorage(productImage.path);
                    setProductImage(null);
                    setImageError('');
                  } catch (error) {
                    setImageError('Failed to remove image');
                  }
                }
              }}
              label="Product Image"
              description="Upload product image (max 10MB)"
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
              {isImageUploading ? 'Uploading Image...' : isSubmitting ? 'Adding Product...' : 'Add Product'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
