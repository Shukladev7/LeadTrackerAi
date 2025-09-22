'use client';

import { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2 } from 'lucide-react';

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter as UiTableFooter,
  } from '@/components/ui/table';
import { createLead } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { ALL_STATUSES, Product, LeadSource } from '@/lib/types';
import { getProducts, getLeadSources } from '@/lib/data';

const leadProductSchema = z.object({
    productId: z.string().min(1, 'Product must be selected'),
    quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
    rate: z.coerce.number().min(0, 'Rate must be a positive number'),
    selectedSku: z.string().optional(),
});

const leadSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().min(2, { message: 'Company must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  whatsappNumber: z.string().optional(),
  status: z.enum(ALL_STATUSES),
  source: z.string().min(1, { message: 'Please select a lead source.' }),
  notes: z.string().optional(),
  products: z.array(leadProductSchema).optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export function CreateLeadDialog() {
  const [open, setOpen] = useState(false);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [leadSources, setLeadSources] = useState<LeadSource[]>([]);
  const { toast } = useToast();

  const { register, handleSubmit, reset, control, setValue, watch, formState: { errors, isSubmitting } } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
        status: 'New',
        products: [],
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
        if (open) {
            const [fetchedProducts, fetchedLeadSources] = await Promise.all([
                getProducts(),
                getLeadSources(),
            ]);
            setAvailableProducts(fetchedProducts);
            setLeadSources(fetchedLeadSources);
        }
    }
    fetchData();
  }, [open]);


  const onSubmit = async (data: LeadFormData) => {
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
        if (key === 'products') {
            formData.append('products', JSON.stringify(value));
        } else if (value) {
            formData.append(key, value as string);
        }
    });

    const result = await createLead(formData);

    if (result.message === 'Successfully created lead.') {
      toast({
        title: 'Lead Created',
        description: `Lead "${data.name}" has been successfully created.`,
      });
      reset();
      setOpen(false);
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message,
        });
    }
  };

  const handleProductChange = (productId: string, index: number) => {
    const product = availableProducts.find(p => p.id === productId);
    if (product) {
      setValue(`products.${index}.rate`, product.price, { shouldValidate: true });
      setValue(`products.${index}.selectedSku`, undefined); // Reset SKU
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
            reset();
        }
    }}>
      <DialogTrigger asChild>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Lead
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Create New Lead</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new lead to your pipeline.
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
                    <div className="space-y-2">
                        <Label htmlFor="source">Lead Source</Label>
                        <Controller
                            control={control}
                            name="source"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                    <TableHead className="w-[25%]">Product</TableHead>
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
                                                    }} defaultValue={field.value}>
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
                                        <TableCell colSpan={7} className="text-center text-muted-foreground h-24">
                                            No products added.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <UiTableFooter>
                                <TableRow>
                                    <TableCell colSpan={5} className="text-right font-bold">Grand Total (₹)</TableCell>
                                    <TableCell className="text-right font-bold">{grandTotal.toFixed(2)}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </UiTableFooter>
                        </Table>
                    </div>
                    <Button type="button" variant="outline" size="sm" onClick={() => append({ productId: '', quantity: 1, rate: 0, selectedSku: '' })}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Product
                    </Button>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="notes">Initial Notes</Label>
                    <Textarea id="notes" placeholder="Initial notes about the lead..." {...register('notes')} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="status">Initial Status</Label>
                     <Controller
                        control={control}
                        name="status"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Set initial status" />
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
                    {isSubmitting ? 'Creating...' : 'Create Lead'}
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
