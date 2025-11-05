'use client';

import { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2, CalendarIcon, Edit } from 'lucide-react';
import { format } from 'date-fns';

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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { Lead, Product, QuotationTemplate, Quotation, ProductCategory, Currency } from '@/lib/business-types';
import { ALL_QUOTATION_STATUSES } from '@/lib/types';
import { getLeads, getProducts, getQuotationTemplates, getProductCategories } from '@/lib/data';
import { getActiveCurrencies } from '@/lib/firestore-service';
import { updateQuotation } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const quotationProductSchema = z.object({
    productId: z.string().min(1, 'Product must be selected'),
    quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
    rate: z.coerce.number().min(0, 'Rate must be a positive number'),
    gstRate: z.coerce.number().min(0),
    discount: z.coerce.number().min(0).max(100).optional(),
});

const quotationSchema = z.object({
  leadId: z.string().min(1, 'A lead must be selected'),
  templateId: z.string().min(1, 'A template must be selected'),
  date: z.date(),
  validUntil: z.date(),
  status: z.enum(['Draft', 'Sent', 'Accepted', 'Rejected', 'Expired'] as const),
  products: z.array(quotationProductSchema).min(1, 'At least one product is required'),
  companyName: z.string().min(1, 'Company name is required.'),
  companyAddress: z.string().min(1, 'Company address is required.'),
  companyGst: z.string().optional().or(z.literal('')),
  client_address: z.string().optional().or(z.literal('')),
  client_gst_no: z.string().optional().or(z.literal('')),
  termsAndConditions: z.string(),
  logoUrl: z.string().optional(),
  // Additional charges (numeric or empty)
  freightCharges: z.coerce.number().min(0).optional().or(z.literal('')),
  courierCharges: z.coerce.number().min(0).optional().or(z.literal('')),
  // Currency fields
  currencyCode: z.string().optional(),
  currencySymbol: z.string().optional(),
  conversionRate: z.coerce.number().optional(),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
};

interface EditQuotationDialogProps {
  quotation: Quotation;
  onQuotationUpdated?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export function EditQuotationDialog({ 
  quotation, 
  onQuotationUpdated, 
  open: externalOpen, 
  onOpenChange: externalOnOpenChange,
  trigger 
}: EditQuotationDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use external control if provided, otherwise use internal state
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalOnOpenChange || setInternalOpen;
  const [leads, setLeads] = useState<Lead[]>([]);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [templates, setTemplates] = useState<QuotationTemplate[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [rowCategoryFilters, setRowCategoryFilters] = useState<(string | 'ALL')[]>([]);
  const { toast } = useToast();

  const { register, handleSubmit, reset, control, setValue, watch, formState: { errors, isSubmitting } } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      leadId: quotation.leadId,
      templateId: quotation.templateId,
      date: new Date(quotation.date),
      validUntil: new Date(quotation.validUntil),
      status: quotation.status,
      products: quotation.products,
      companyName: quotation.companyName || '',
      companyAddress: quotation.companyAddress || '',
      companyGst: quotation.companyGst || '',
      client_address: quotation.client_address || '',
      client_gst_no: quotation.client_gst_no || '',
      termsAndConditions: quotation.termsAndConditions || '',
      logoUrl: quotation.logoUrl || '',
      freightCharges: quotation.freightCharges && !isNaN(Number(quotation.freightCharges)) ? Number(quotation.freightCharges) : '',
      courierCharges: quotation.courierCharges && !isNaN(Number(quotation.courierCharges)) ? Number(quotation.courierCharges) : '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const watchedTemplateId = watch('templateId');
  const watchedProducts = watch('products');
  const watchedFreightCharges = watch('freightCharges');
  const watchedCourierCharges = watch('courierCharges');

  const productTotals = watchedProducts?.map(p => {
    const baseAmount = p.quantity * p.rate;
    const discountAmount = baseAmount * ((p.discount || 0) / 100);
    const amount = baseAmount - discountAmount;
    const gstAmount = amount * (p.gstRate / 100);
    return { 
      baseAmount, 
      discountAmount, 
      amount, 
      gstAmount, 
      total: amount + gstAmount 
    };
  }) || [];
  
  const totalBaseAmount = productTotals.reduce((acc, curr) => acc + curr.baseAmount, 0);
  const totalDiscountAmount = productTotals.reduce((acc, curr) => acc + curr.discountAmount, 0);
  const subTotal = productTotals.reduce((acc, curr) => acc + curr.amount, 0);
  const totalGst = productTotals.reduce((acc, curr) => acc + curr.gstAmount, 0);
  
  // Add freight and courier charges to grand total
  const freightAmount = watchedFreightCharges && !isNaN(Number(watchedFreightCharges)) ? Number(watchedFreightCharges) : 0;
  const courierAmount = watchedCourierCharges && !isNaN(Number(watchedCourierCharges)) ? Number(watchedCourierCharges) : 0;
  const grandTotal = subTotal + totalGst + freightAmount + courierAmount;

  useEffect(() => {
    async function fetchData() {
        if (open) {
            try {
                const [fetchedLeads, fetchedProducts, fetchedTemplates, fetchedCategories] = await Promise.all([
                    getLeads(),
                    getProducts(),
                    getQuotationTemplates(),
                    getProductCategories(),
                ]);
                setLeads(fetchedLeads);
                setAvailableProducts(fetchedProducts);
                setTemplates(fetchedTemplates);
                setCategories(fetchedCategories);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Failed to load form data',
                });
            }
        }
    }
    fetchData();
  }, [open, toast]);

  // Sync per-row filters with number of rows
  useEffect(() => {
    setRowCategoryFilters((prev) => {
      const next = [...prev];
      while (next.length < fields.length) next.push('ALL');
      if (next.length > fields.length) next.length = fields.length;
      return next;
    });
  }, [fields.length]);

  useEffect(() => {
    async function populateFromTemplate() {
        if (watchedTemplateId && templates.length > 0) {
            const template = templates.find(t => t.id === watchedTemplateId);
            if (template) {
                setValue('companyName', template.companyName);
                setValue('companyAddress', template.companyAddress);
                setValue('companyGst', template.companyGst);
                setValue('termsAndConditions', template.termsAndConditions);
                setValue('logoUrl', template.logoUrl || '');
            }
        }
    }
    if(open) {
      populateFromTemplate();
    }
  }, [watchedTemplateId, open, templates, setValue]);

  const onSubmit = async (data: QuotationFormData) => {
    if (!quotation.id) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Quotation ID is missing',
      });
      return;
    }

    try {
      const formData = new FormData();
      const payload = {
          ...data,
          date: format(data.date, 'yyyy-MM-dd'),
          validUntil: format(data.validUntil, 'yyyy-MM-dd'),
          subTotal,
          totalGst,
          grandTotal,
      };
      
      Object.entries(payload).forEach(([key, value]) => {
          if (key === 'products') {
              formData.append(key, JSON.stringify(value));
          } else if (value !== undefined && value !== null) {
              formData.append(key, String(value));
          }
      });

      const result = await updateQuotation(quotation.id, formData);

      if (result.message === 'Successfully updated quotation.') {
        toast({
          title: 'Quotation Updated',
          description: `The quotation has been successfully updated.`,
        });
        setOpen(false);
        if (onQuotationUpdated) {
          onQuotationUpdated();
        }
      } else {
          toast({
              variant: 'destructive',
              title: 'Error updating quotation',
              description: result.message,
          });
      }
    } catch (error) {
      console.error('Error in onSubmit:', error);
      toast({
          variant: 'destructive',
          title: 'Error updating quotation',
          description: 'An unexpected error occurred',
      });
    }
  };

  const handleProductChange = async (productId: string, index: number) => {
    const product = availableProducts.find(p => p.id === productId);
    if (product) {
      setValue(`products.${index}.rate`, product.price, { shouldValidate: true });
      setValue(`products.${index}.gstRate`, product.gstRate, { shouldValidate: true });
    }
  };

  const getFilteredProductsForRow = (rowIndex: number) => {
    const filterValue = rowCategoryFilters[rowIndex] || 'ALL';
    if (filterValue === 'ALL') return availableProducts;
    return availableProducts.filter(p => p.categoryId === filterValue);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      )}
      {!trigger && externalOpen === undefined && (
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Quotation
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Edit Quotation #{quotation.quotationNumber}</DialogTitle>
          <DialogDescription>
            Update the quotation details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 py-4 max-h-[70vh] overflow-y-auto pr-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="leadId">Lead</Label>
                        <Controller
                            control={control}
                            name="leadId"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger><SelectValue placeholder="Select a lead" /></SelectTrigger>
                                    <SelectContent>
                                        {leads.filter(lead => lead.id).map(lead => (
                                            <SelectItem key={lead.id} value={lead.id!}>
                                                {lead.name} - {lead.company}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.leadId && <p className="text-xs text-destructive mt-1">{errors.leadId.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="templateId">Quotation Template</Label>
                        <Controller
                            control={control}
                            name="templateId"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger><SelectValue placeholder="Select a template" /></SelectTrigger>
                                    <SelectContent>
                                        {templates.filter(template => template.id).map(template => (
                                            <SelectItem key={template.id} value={template.id!}>
                                                {template.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                         {errors.templateId && <p className="text-xs text-destructive mt-1">{errors.templateId.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="date">Quotation Date</Label>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="validUntil">Valid Until</Label>
                        <Controller
                            control={control}
                            name="validUntil"
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Controller
                            control={control}
                            name="status"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger><SelectValue placeholder="Set status" /></SelectTrigger>
                                    <SelectContent>
                                        {ALL_QUOTATION_STATUSES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                </div>
                
                <Separator />
                <h3 className="text-lg font-medium">Company & Terms</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" {...register('companyName')} />
                        {errors.companyName && <p className="text-xs text-destructive mt-1">{errors.companyName.message}</p>}
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="companyGst">Company GSTIN</Label>
                        <Input id="companyGst" {...register('companyGst')} />
                        {errors.companyGst && <p className="text-xs text-destructive mt-1">{errors.companyGst.message}</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="companyAddress">Company Address</Label>
                    <Textarea id="companyAddress" {...register('companyAddress')} />
                    {errors.companyAddress && <p className="text-xs text-destructive mt-1">{errors.companyAddress.message}</p>}
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="termsAndConditions">Terms & Conditions</Label>
                    <Textarea id="termsAndConditions" {...register('termsAndConditions')} rows={5} />
                </div>
                
                <Separator />
                <h3 className="text-lg font-medium">Client Billing Information</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="client_address">Client Address</Label>
                        <Textarea 
                            id="client_address" 
                            {...register('client_address')} 
                            placeholder="Client's billing address"
                            rows={3}
                        />
                        <p className="text-xs text-muted-foreground">This can be manually edited</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="client_gst_no">Client GST No</Label>
                        <Input 
                            id="client_gst_no" 
                            {...register('client_gst_no')} 
                            placeholder="Client's GST number"
                        />
                        <p className="text-xs text-muted-foreground">Leave empty if client doesn't have GST registration</p>
                    </div>
                </div>
                
                <Separator />
                <h3 className="text-lg font-medium">Additional Charges</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="freightCharges">Freight Charges</Label>
                        <Input 
                            id="freightCharges" 
                            type="number"
                            step="0.01"
                            min="0"
                            {...register('freightCharges')} 
                            placeholder="EXTRA"
                        />
                        <p className="text-xs text-muted-foreground">Enter amount in INR or leave empty to show "EXTRA"</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="courierCharges">Courier Charges</Label>
                        <Input 
                            id="courierCharges" 
                            type="number"
                            step="0.01"
                            min="0"
                            {...register('courierCharges')} 
                            placeholder="EXTRA"
                        />
                        <p className="text-xs text-muted-foreground">Enter amount in INR or leave empty to show "EXTRA"</p>
                    </div>
                </div>
                <Separator />
                
                <div className="space-y-2">
                    <Label>Products</Label>
                    <div className="border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[18%]">Category</TableHead>
                                    <TableHead className="w-[20%]">Product Name</TableHead>
                                    <TableHead>Qty</TableHead>
                                    <TableHead>Rate</TableHead>
                                    <TableHead>Discount %</TableHead>
                                    <TableHead>GST</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {fields.map((field, index) => {
                                    const { total } = productTotals[index] || { total: 0 };
                                    return (
                                    <TableRow key={field.id}>
                                        <TableCell>
                                            <Select
                                              value={rowCategoryFilters[index] || 'ALL'}
                                              onValueChange={(v) => {
                                                setRowCategoryFilters((prev) => {
                                                  const next = [...prev];
                                                  next[index] = v as any;
                                                  return next;
                                                });
                                              }}
                                            >
                                              <SelectTrigger>
                                                <SelectValue placeholder="All" />
                                              </SelectTrigger>
                                              <SelectContent>
                                                <SelectItem value="ALL">All</SelectItem>
                                                {categories.map(c => (
                                                  <SelectItem key={c.id} value={c.id!}>{c.name}</SelectItem>
                                                ))}
                                              </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Controller
                                                control={control}
                                                name={`products.${index}.productId`}
                                                render={({ field }) => (
                                                    <Select onValueChange={(value) => { field.onChange(value); handleProductChange(value, index); }} value={field.value}>
                                                        <SelectTrigger><SelectValue placeholder="Select product" /></SelectTrigger>
                                                        <SelectContent>
                                                            {getFilteredProductsForRow(index).filter(p => p.id).map(p => {
                                                              const catName = categories.find(c => c.id === p.categoryId)?.name;
                                                              return (
                                                                <SelectItem key={p.id} value={p.id!}>
                                                                  {p.name}{catName ? ` — ${catName}` : ''}
                                                                </SelectItem>
                                                              );
                                                            })}
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </TableCell>
                                        <TableCell><Input type="number" {...register(`products.${index}.quantity`)} min="1" className="w-20" /></TableCell>
                                        <TableCell><Input type="number" {...register(`products.${index}.rate`)} min="0" className="w-24" /></TableCell>
                                        <TableCell><Input type="number" {...register(`products.${index}.discount`)} min="0" max="100" step="0.01" className="w-20" placeholder="0" /></TableCell>
                                        <TableCell>{watchedProducts?.[index]?.gstRate || 0}%</TableCell>
                                        <TableCell className="text-right font-medium">{formatCurrency(total)}</TableCell>
                                        <TableCell>
                                            <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )})}
                                {fields.length === 0 && (
                                    <TableRow><TableCell colSpan={8} className="text-center h-24">No products added.</TableCell></TableRow>
                                )}
                            </TableBody>
                            <UiTableFooter>
                                <TableRow><TableCell colSpan={7} className="text-right">Base Amount</TableCell><TableCell className="text-right">{formatCurrency(totalBaseAmount)}</TableCell><TableCell></TableCell></TableRow>
                                {totalDiscountAmount > 0 && (
                                    <TableRow><TableCell colSpan={7} className="text-right text-green-600">Total Discount</TableCell><TableCell className="text-right text-green-600">-{formatCurrency(totalDiscountAmount)}</TableCell><TableCell></TableCell></TableRow>
                                )}
                                <TableRow><TableCell colSpan={7} className="text-right">Sub-total</TableCell><TableCell className="text-right">{formatCurrency(subTotal)}</TableCell><TableCell></TableCell></TableRow>
                                <TableRow><TableCell colSpan={7} className="text-right">Total GST</TableCell><TableCell className="text-right">{formatCurrency(totalGst)}</TableCell><TableCell></TableCell></TableRow>
                                <TableRow><TableCell colSpan={7} className="text-right font-bold text-lg">Grand Total</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(grandTotal)}</TableCell><TableCell></TableCell></TableRow>
                            </UiTableFooter>
                        </Table>
                    </div>
                     {errors.products && <p className="text-xs text-destructive mt-1">{errors.products.message || errors.products.root?.message}</p>}
<Button type="button" variant="outline" size="sm" onClick={() => append({ productId: '', quantity: 1, rate: 0, gstRate: 0, discount: 0 })}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Product
                    </Button>
                </div>
            </div>
            <DialogFooter className="pt-4 border-t">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Quotation'}
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
