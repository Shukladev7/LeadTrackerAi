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
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { PDFUpload } from '@/components/pdf-upload';
import { ImageUpload } from '@/components/image-upload';
import { UploadResult, deletePDF, deleteImageFromStorage } from '@/lib/storage-utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addProduct, getProductCategories, getUnitsOfMeasurement, getManufacturingCompanies, NewProduct } from '@/lib/data';
import type { ProductCategory, UnitOfMeasurement, ManufacturingCompany } from '@/lib/business-types';

const productSchema = z.object({
  name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
  price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
  gstRate: z.coerce.number().min(0, { message: 'GST rate must be a positive number.' }).max(100, { message: 'GST rate cannot exceed 100.' }),
  categoryId: z.string().optional(),
  description: z.string().optional(),
  uom: z.string().optional(),
  skus: z.array(z.object({ value: z.string().min(1, "SKU cannot be empty.") })).optional(),
  manufacturingCompany: z.string().min(1, { message: 'Manufacturing company is required.' }),
});

type ProductFormData = z.infer<typeof productSchema>;

export function AddProductSheet() {
  const [open, setOpen] = useState(false);
  const [currentSku, setCurrentSku] = useState('');
  const [availableCategories, setAvailableCategories] = useState<ProductCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [availableUnits, setAvailableUnits] = useState<UnitOfMeasurement[]>([]);
  const [manufacturingCompanies, setManufacturingCompanies] = useState<ManufacturingCompany[]>([]);
  const [catalogPdf, setCatalogPdf] = useState<UploadResult | null>(null);
  const [pdfError, setPdfError] = useState<string>('');
  const [productImage, setProductImage] = useState<UploadResult | null>(null);
  const [productThumbnail, setProductThumbnail] = useState<UploadResult | null>(null);
  const [imageError, setImageError] = useState<string>('');
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, control, setValue, formState: { errors, isSubmitting } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      skus: [],
      categoryId: undefined,
      description: '',
      uom: 'units',
      manufacturingCompany: '',
    },
  });
  
  const { fields: skuFields, append: appendSku, remove: removeSku } = useFieldArray({
    control,
    name: "skus"
  });

// Fetch available categories and units when component opens
useEffect(() => {
  if (open) {
    const fetchMasterData = async () => {
      try {
        const [categories, units, companies] = await Promise.all([
          getProductCategories(),
          getUnitsOfMeasurement(),
          getManufacturingCompanies(),
        ]);
        setAvailableCategories(categories);
        setAvailableUnits(units);
        setManufacturingCompanies(companies);
      } catch (error) {
        console.error('Error fetching product setup data:', error);
      }
    };
    fetchMasterData();
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

    const skus = (data.skus || []).map((s) => s.value);

    const productPayload: NewProduct = {
      name: data.name,
      price: data.price,
      gstRate: data.gstRate,
      categoryId: selectedCategoryId,
      description: data.description || undefined,
      uom: data.uom || undefined,
      skus: skus.length > 0 ? skus : undefined,
      manufacturingCompany: data.manufacturingCompany,
    };

    if (catalogPdf) {
      productPayload.cataloguePdf = {
        url: catalogPdf.url,
        fileName: catalogPdf.fileName,
        filePath: catalogPdf.path,
        uploadedAt: new Date().toISOString(),
      };
    }

    if (productImage) {
      productPayload.productImage = {
        url: productImage.url,
        fileName: productImage.fileName,
        filePath: productImage.path,
        uploadedAt: new Date().toISOString(),
      };
    }

    if (productThumbnail) {
      (productPayload as any).thumbnailImage = {
        url: productThumbnail.url,
        fileName: productThumbnail.fileName,
        filePath: productThumbnail.path,
        uploadedAt: new Date().toISOString(),
      };
    }

    try {
      await addProduct(productPayload);

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
      setProductThumbnail(null);
      setImageError('');
      setOpen(false);
    } catch (error) {
      if (catalogPdf) {
        try {
          await deletePDF(catalogPdf.path);
        } catch (cleanupError) {
          console.error('Failed to cleanup uploaded PDF:', cleanupError);
        }
      }
      if (productImage) {
        try {
          await deleteImageFromStorage(productImage.path);
        } catch (cleanupError) {
          console.error('Failed to cleanup uploaded image:', cleanupError);
        }
      }
      if (productThumbnail) {
        try {
          await deleteImageFromStorage(productThumbnail.path);
        } catch (cleanupError) {
          console.error('Failed to cleanup uploaded thumbnail image:', cleanupError);
        }
      }

      const message =
        error instanceof Error ? error.message : 'Failed to add product. Please try again.';

      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
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
            {availableUnits.length > 0 ? (
              <Controller
                control={control}
                name="uom"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value || ''}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableUnits.map(unit => (
                        <SelectItem key={unit.id} value={unit.name}>
                          {unit.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            ) : (
              <Input id="uom" placeholder="e.g. pcs, kg, meter" {...register('uom')} />
            )}
          </div>
          <div className="space-y-2">
            <Label>Product Category</Label>
            <Controller
              control={control}
              name="categoryId"
              render={({ field }) => (
                <Select onValueChange={(val) => { field.onChange(val); setSelectedCategoryId(val); }} value={field.value || ''}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCategories.map(cat => (
                      <SelectItem key={cat.id ?? cat.name} value={cat.id ?? cat.name}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.categoryId && <p className="text-xs text-destructive mt-1">{errors.categoryId.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Manufacturing Company</Label>
            <Controller
              control={control}
              name="manufacturingCompany"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a manufacturing company" />
                  </SelectTrigger>
                  <SelectContent>
                    {manufacturingCompanies.map((company) => (
                      <SelectItem key={company.id} value={company.name}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.manufacturingCompany && (
              <p className="text-xs text-destructive mt-1">{errors.manufacturingCompany.message}</p>
            )}
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
              onUploadComplete={(original, thumbnail) => {
                console.log('ImageUpload onUploadComplete called with:', { original, thumbnail });
                setProductImage(original);
                setProductThumbnail(thumbnail || null);
                setIsImageUploading(false);
                console.log('productImage state should now be:', original);
                setImageError('');
              }}
              onUploadError={(error) => {
                console.log('ImageUpload onUploadError called with:', error);
                setImageError(error);
                setProductImage(null);
                setProductThumbnail(null);
                setIsImageUploading(false);
              }}
              onFileSelect={(_file) => {
                console.log('Image upload started');
                setIsImageUploading(true);
              }}
              currentImage={productThumbnail
                ? {
                    url: productThumbnail.url,
                    fileName: productThumbnail.fileName,
                    filePath: productThumbnail.path,
                  }
                : productImage
                ? {
                    url: productImage.url,
                    fileName: productImage.fileName,
                    filePath: productImage.path,
                  }
                : null}
              onRemove={async () => {
                try {
                  if (productImage) {
                    await deleteImageFromStorage(productImage.path);
                  }
                  if (productThumbnail) {
                    await deleteImageFromStorage(productThumbnail.path);
                  }
                  setProductImage(null);
                  setProductThumbnail(null);
                  setImageError('');
                } catch (error) {
                  setImageError('Failed to remove image');
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
