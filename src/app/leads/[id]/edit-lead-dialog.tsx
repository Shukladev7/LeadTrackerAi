'use client';

import { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2, Pencil } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter as UiTableFooter,
  } from '@/components/ui/table';
import { updateLead } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { ALL_STATUSES, Product, LeadSource, Lead, ProductModel } from '@/lib/types';
import { getProducts, getLeadSources } from '@/lib/data';
import { getActiveModelsByProductAction, getModelsByProductFieldAction } from '@/lib/actions';

const leadProductSchema = z.object({
    productId: z.string().min(1, 'Product must be selected'),
    quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
    rate: z.coerce.number().min(0, 'Rate must be a positive number'),
    selectedSku: z.string().optional(),
    selectedModelId: z.string().optional(),
});

const leadSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().min(2, { message: 'Company must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  whatsappNumber: z.string().optional(),
  client_address: z.string().optional(),
  client_gst_no: z.string().optional(),
  status: z.enum(ALL_STATUSES),
  source: z.string().min(1, { message: 'Please select a lead source.' }),
  products: z.array(leadProductSchema).optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

type EditLeadDialogProps = {
  lead: Lead;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function EditLeadDialog({ lead, open, onOpenChange }: EditLeadDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined && onOpenChange !== undefined;
  const currentOpen = isControlled ? open : internalOpen;
  const setCurrentOpen = isControlled ? onOpenChange : setInternalOpen;
  
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [leadSources, setLeadSources] = useState<LeadSource[]>([]);
  const [productModels, setProductModels] = useState<{ [productId: string]: ProductModel[] }>({});
  const { toast } = useToast();

  const { register, handleSubmit, reset, control, setValue, watch, formState: { errors, isSubmitting } } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      ...lead,
      products: lead.products || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const watchedProducts = watch('products');

  const productTotals = watchedProducts?.map(p => {
    const productDetails = availableProducts.find(ap => ap.id === p.productId);
    if (!productDetails) return { amount: 0, gst: 0, total: 0 };
    const amount = p.quantity * p.rate;
    const gst = amount * (productDetails.gstRate / 100);
    return { amount, gst, total: amount + gst };
  }) || [];
  
  const grandTotal = productTotals.reduce((acc, curr) => acc + curr.total, 0);

  useEffect(() => {
    async function fetchData() {
        if (currentOpen) {
            const [fetchedProducts, fetchedLeadSources] = await Promise.all([
                getProducts(),
                getLeadSources(),
            ]);
            setAvailableProducts(fetchedProducts);
            setLeadSources(fetchedLeadSources);
        }
    }
    fetchData();
  }, [currentOpen]);
  
  useEffect(() => {
    if (currentOpen) {
      reset({
        ...lead,
        products: lead.products || [],
      });
    }
  }, [currentOpen, lead, reset]);


  const onSubmit = async (data: LeadFormData) => {
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
        if (key === 'products') {
            formData.append('products', JSON.stringify(value));
        } else {
            // Always append the field, even if empty (for optional fields like notes)
            formData.append(key, value as string || '');
        }
    });

    const result = await updateLead(lead.id, formData);

    if (result.message === 'Successfully updated lead.') {
      toast({
        title: 'Lead Updated',
        description: `Lead "${data.name}" has been successfully updated.`,
      });
      setCurrentOpen(false);
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message,
        });
    }
  };

  const handleProductChange = async (productId: string, index: number) => {
    const product = availableProducts.find(p => p.id === productId);
    if (product) {
      setValue(`products.${index}.rate`, product.price, { shouldValidate: true });
      setValue(`products.${index}.selectedSku`, undefined);
      setValue(`products.${index}.selectedModelId`, undefined); // Reset Model
      
      // Load models for the selected product using the new function
      if (!productModels[productId]) {
        try {
          // First try the new method (using product's modelIds field)
          const models = await getModelsByProductFieldAction(productId);
          setProductModels(prev => ({ ...prev, [productId]: models }));
        } catch (error) {
          console.error('Error loading product models:', error);
          // Fallback to the old method if needed
          try {
            const fallbackModels = await getActiveModelsByProductAction(productId);
            setProductModels(prev => ({ ...prev, [productId]: fallbackModels }));
          } catch (fallbackError) {
            console.error('Error loading fallback product models:', fallbackError);
          }
        }
      }
    }
  };

  const dialog = (
    <Dialog open={currentOpen} onOpenChange={setCurrentOpen}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Edit Lead</DialogTitle>
          <DialogDescription>
            Update the details for this lead.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" {...register('name')} className={errors.name ? 'border-destructive' : ''} />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" {...register('company')} className={errors.company ? 'border-destructive' : ''} />
                        {errors.company && <p className="text-xs text-destructive mt-1">{errors.company.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...register('email')} className={errors.email ? 'border-destructive' : ''} />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" {...register('phone')} className={errors.phone ? 'border-destructive' : ''} />
                        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                        <Input id="whatsappNumber" {...register('whatsappNumber')} />
                    </div>
                    {lead.createdBy && (
                        <div className="space-y-2">
                            <Label htmlFor="createdBy">Created By</Label>
                            <Input 
                                id="createdBy" 
                                value={lead.createdBy} 
                                disabled 
                                className="bg-muted text-muted-foreground cursor-not-allowed"
                            />
                            <p className="text-xs text-muted-foreground">This field cannot be modified</p>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="client_address">Client Address <span className="text-muted-foreground">(Optional)</span></Label>
                        <Textarea 
                            id="client_address" 
                            {...register('client_address')} 
                            placeholder="Enter client's full address..."
                            rows={3}
                        />
                        <p className="text-xs text-muted-foreground">This will be used for billing in quotations</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="client_gst_no">Client GST No <span className="text-muted-foreground">(Optional)</span></Label>
                        <Input 
                            id="client_gst_no" 
                            {...register('client_gst_no')} 
                            placeholder="e.g., 07AAACB2745C1Z5"
                        />
                        <p className="text-xs text-muted-foreground">15-digit GST identification number (format: XXAAAAXXXX1X1XX)</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="source">Lead Source</Label>
                        <Controller
                            control={control}
                            name="source"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="source" className={errors.source ? 'border-destructive' : ''}>
                                        <SelectValue placeholder="Select a source" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {leadSources.map(source => (
                                            <SelectItem key={source.id} value={source.name}>{source.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.source && <p className="text-xs text-destructive mt-1">{errors.source.message}</p>}
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label>Products Interested</Label>
                    <div className="border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[20%]">Product</TableHead>
                                    <TableHead className="w-[15%]">Model</TableHead>
                                    <TableHead className="w-[15%]">SKU</TableHead>
                                    <TableHead>Qty</TableHead>
                                    <TableHead>Rate (₹)</TableHead>
                                    <TableHead>GST</TableHead>
                                    <TableHead className="text-right">Amount (₹)</TableHead>
                                    <TableHead className="w-[50px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {fields.map((field, index) => {
                                    const productDetails = availableProducts.find(p => p.id === watchedProducts?.[index]?.productId);
                                    const { total } = productTotals[index] || { total: 0 };
                                    
                                    return (
                                    <TableRow key={field.id}>
                                        <TableCell>
                                            <Controller
                                                control={control}
                                                name={`products.${index}.productId`}
                                                render={({ field }) => (
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value);
                                                        handleProductChange(value, index);
                                                    }} value={field.value}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select product" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {availableProducts.map(p => (
                                                                <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {watchedProducts?.[index]?.productId && productModels[watchedProducts[index].productId] && productModels[watchedProducts[index].productId].length > 0 ? (
                                                <Controller
                                                    control={control}
                                                    name={`products.${index}.selectedModelId`}
                                                    render={({ field }) => (
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Model" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {productModels[watchedProducts[index].productId]?.map(model => (
                                                                    <SelectItem key={model.id} value={model.id}>{model.name}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                            ) : (
                                                <div className="text-xs text-muted-foreground">No models</div>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {productDetails?.skus && productDetails.skus.length > 0 ? (
                                                <Controller
                                                    control={control}
                                                    name={`products.${index}.selectedSku`}
                                                    render={({ field }) => (
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="SKU" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {productDetails.skus?.map(sku => (
                                                                    <SelectItem key={sku} value={sku}>{sku}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                            ) : (
                                                <div className="text-xs text-muted-foreground">N/A</div>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Input type="number" {...register(`products.${index}.quantity`)} min="1" className="w-20" />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="number" {...register(`products.${index}.rate`)} min="0" className="w-24" />
                                        </TableCell>
                                        <TableCell>{productDetails ? `${productDetails.gstRate}%` : '-'}</TableCell>
                                        <TableCell className="text-right font-medium">{total.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )})}
                                {fields.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={8} className="text-center text-muted-foreground h-24">
                                            No products added.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <UiTableFooter>
                                <TableRow>
                                    <TableCell colSpan={6} className="text-right font-bold">Grand Total (₹)</TableCell>
                                    <TableCell className="text-right font-bold">{grandTotal.toFixed(2)}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </UiTableFooter>
                        </Table>
                    </div>
                    <Button type="button" variant="outline" size="sm" onClick={() => append({ productId: '', quantity: 1, rate: 0, selectedSku: '', selectedModelId: '' })}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Product
                    </Button>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Controller
                        control={control}
                        name="status"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Set status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {ALL_STATUSES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>
            </div>
            <DialogFooter className="pt-4 border-t">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
  
  // If the dialog is not controlled, we need a trigger.
  if (!isControlled) {
    return (
      <Dialog open={currentOpen} onOpenChange={setCurrentOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
              <Pencil className="mr-2 h-4 w-4" />
              Edit Lead
          </Button>
        </DialogTrigger>
        {dialog.props.children}
      </Dialog>
    );
  }

  // If controlled, just return the dialog itself without a trigger
  return dialog;
}
