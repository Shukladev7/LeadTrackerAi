'use client';

import { useEffect, useRef, useState } from 'react';
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
import { Combobox } from '@/components/ui/combobox';
import { useToast } from '@/hooks/use-toast';
import { ALL_STATUSES, Product, LeadSource, Lead, ProductCategory } from '@/lib/types';
import { getProducts, getLeadSources, getProductCategories, getManufacturingCompanies, updateLead } from '@/lib/data';

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
  whatsappNumber: z.string().optional().or(z.literal('')),
  client_address: z.string().optional().or(z.literal('')),
  client_gst_no: z.string().optional().or(z.literal('')),
  status: z.string().min(1, { message: 'Please select a status.' }),
  source: z.string().min(1, { message: 'Please select a lead source.' }),
  products: z.array(leadProductSchema).optional(),
  manufacturingCompany: z.string().optional(),
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
  
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);
  const [leadSources, setLeadSources] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [rowCategoryFilters, setRowCategoryFilters] = useState<(string | 'ALL')[]>([]);
  const [manufacturingCompanies, setManufacturingCompanies] = useState<any[]>([]);
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

  useEffect(() => {
    setRowCategoryFilters((prev) => {
      const next = [...prev];
      while (next.length < fields.length) next.push('ALL');
      if (next.length > fields.length) next.length = fields.length;
      return next;
    });
  }, [fields.length]);

  const watchedProducts = watch('products');
  const watchedManufacturingCompany = watch('manufacturingCompany');
  const prevManufacturingCompanyRef = useRef(watchedManufacturingCompany);

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
            const [fetchedProducts, fetchedLeadSources, fetchedCategories, fetchedCompanies] = await Promise.all([
                getProducts(),
                getLeadSources(),
                getProductCategories(),
                getManufacturingCompanies(),
            ]);
            setAvailableProducts(fetchedProducts);
            setLeadSources(fetchedLeadSources);
            setCategories(fetchedCategories);
            setManufacturingCompanies(fetchedCompanies);
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

  // When manufacturing company changes, reset selected products as per requirements
  useEffect(() => {
    if (!currentOpen) return;

    // Avoid clearing products on initial open; only react to actual changes
    if (prevManufacturingCompanyRef.current === watchedManufacturingCompany) {
      return;
    }

    prevManufacturingCompanyRef.current = watchedManufacturingCompany;

    if (fields.length > 0) {
      for (let i = fields.length - 1; i >= 0; i--) {
        remove(i);
      }
    }
    setRowCategoryFilters([]);
  }, [watchedManufacturingCompany, currentOpen]);


  const onSubmit = async (data: LeadFormData) => {
    try {
      // Deep-clean products to remove any undefined fields that Firestore
      // does not accept (including nested inside arrays of objects).
      const sanitizedProducts = (data.products || []).map((p) => {
        const clean: any = {};
        Object.entries(p).forEach(([key, value]) => {
          if (value !== undefined) {
            clean[key] = value;
          }
        });
        return clean;
      });

      const payload: any = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        whatsappNumber: data.whatsappNumber || undefined,
        client_address: data.client_address || undefined,
        client_gst_no: data.client_gst_no || undefined,
        status: data.status,
        source: data.source,
        products: sanitizedProducts,
        manufacturingCompany: data.manufacturingCompany || undefined,
      };

      await (updateLead as any)(lead.id, payload);

      toast({
        title: 'Lead Updated',
        description: `Lead "${data.name}" has been successfully updated.`,
      });
      setCurrentOpen(false);
    } catch (error: any) {
      console.error('Error updating lead', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error?.message || 'Failed to update lead. Please try again.',
      });
    }
  };

  const handleProductChange = async (productId: string, index: number) => {
    const product = availableProducts.find(p => p.id === productId);
    if (product) {
      setValue(`products.${index}.rate`, product.price, { shouldValidate: true });
      setValue(`products.${index}.selectedSku`, undefined);
    }
  };

  const getFilteredProductsForRow = (rowIndex: number) => {
    const filterValue = rowCategoryFilters[rowIndex] || 'ALL';
    let filtered = availableProducts as any[];

    if (watchedManufacturingCompany) {
      filtered = filtered.filter(
        (p) => p.manufacturingCompany === watchedManufacturingCompany
      );
    }

    if (filterValue !== 'ALL') {
      filtered = filtered.filter(p => p.categoryId === filterValue);
    }

    return filtered;
  };

  const dialog = (
    <Dialog open={currentOpen} onOpenChange={setCurrentOpen}>
      <DialogContent className="max-w-[90vw] w-[90vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Lead</DialogTitle>
          <DialogDescription>
            Update the details for this lead.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-0">
            <div className="grid gap-4 py-4 flex-1 overflow-y-auto pr-6 min-h-0">
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
                    <div className="space-y-2">
                        <Label htmlFor="manufacturingCompany">Manufacturing Company</Label>
                        <Controller
                          control={control}
                          name="manufacturingCompany"
                          render={({ field }) => (
                            (() => {
                              const ALL_COMPANIES_VALUE = '__ALL_COMPANIES__';
                              const currentValue = field.value ?? ALL_COMPANIES_VALUE;

                              return (
                                <Select
                                  onValueChange={(val) => {
                                    if (val === ALL_COMPANIES_VALUE) {
                                      field.onChange(undefined);
                                    } else {
                                      field.onChange(val);
                                    }
                                  }}
                                  value={currentValue}
                                >
                                  <SelectTrigger id="manufacturingCompany">
                                    <SelectValue placeholder="All companies" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value={ALL_COMPANIES_VALUE}>All companies</SelectItem>
                                    {manufacturingCompanies.map((company) => (
                                      <SelectItem key={company.id} value={company.name}>
                                        {company.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              );
                            })()
                          )}
                        />
                      </div>
                </div>
                
                <div className="space-y-2">
                    <Label>Products Interested</Label>
                    <div className="border rounded-lg">
                        <Table className="table-fixed">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[12%]">Category</TableHead>
                                    <TableHead className="w-[14%]">Product</TableHead>
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
                                        <TableCell className="w-[12%] overflow-hidden">
                                            <div className="w-full max-w-full">
                                                <Combobox
                                                    options={[
                                                        { value: 'ALL', label: 'All categories' },
                                                        ...categories.map((category) => ({
                                                            value: category.id as string,
                                                            label: category.name,
                                                        })),
                                                    ]}
                                                    value={rowCategoryFilters[index] || 'ALL'}
                                                    onValueChange={(v) => {
                                                        setRowCategoryFilters((prev) => {
                                                            const next = [...prev];
                                                            next[index] = v as any;
                                                            return next;
                                                        });
                                                    }}
                                                    placeholder="All categories"
                                                    searchPlaceholder="Search categories..."
                                                    emptyText="No categories found."
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell className="w-[14%] overflow-hidden">
                                            <div className="w-full max-w-full">
                                                <Controller
                                                    control={control}
                                                    name={`products.${index}.productId`}
                                                    render={({ field }) => (
                                                        <Combobox
                                                            options={getFilteredProductsForRow(index).map((p) => ({
                                                                value: p.id as string,
                                                                label: p.name,
                                                            }))}
                                                            value={field.value}
                                                            onValueChange={(value) => {
                                                                field.onChange(value);
                                                                handleProductChange(value, index);
                                                            }}
                                                            placeholder="Select product"
                                                            searchPlaceholder="Search products..."
                                                            emptyText="No products found."
                                                        />
                                                    )}
                                                />
                                            </div>
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
                                                                {productDetails.skus?.map((sku: string) => (
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
                                            <div className="flex items-center gap-1">
                                                <Input type="number" {...register(`products.${index}.quantity`)} min="1" className="w-20" />
                                                <span className="text-xs text-muted-foreground">
                                                    {productDetails?.uom || 'units'}
                                                </span>
                                            </div>
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
<Button type="button" variant="outline" size="sm" onClick={() => append({ productId: '', quantity: 1, rate: 0, selectedSku: '' })}>
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
