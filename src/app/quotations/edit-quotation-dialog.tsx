'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2, CalendarIcon, Edit } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
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
import { getLeads, getProducts, getQuotationTemplates, getProductCategories, updateQuotation, getManufacturingCompanies } from '@/lib/data';
import { getActiveCurrencies } from '@/lib/firestore-service';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Combobox } from '@/components/ui/combobox';

const quotationProductSchema = z.object({
    productId: z.string().min(1, 'Product must be selected'),
    quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
    rate: z.coerce.number().min(0, 'Rate must be a positive number'),
    gstRate: z.coerce.number().min(0),
    discount: z.coerce.number().min(0).max(100).optional(),
    description: z.string().optional(),
});

const quotationSchema = z.object({
  leadId: z.string().min(1, 'A lead must be selected'),
  templateId: z.string().min(1, 'A template must be selected'),
  date: z.date(),
  validUntil: z.date(),
  // Allow custom statuses; UI will constrain to configured list
  status: z.string().min(1, 'Status is required'),
  products: z.array(quotationProductSchema).min(1, 'At least one product is required'),
  companyName: z.string().min(1, 'Company name is required.'),
  companyAddress: z.string().min(1, 'Company address is required.'),
  companyGst: z.string().optional().or(z.literal('')),
  client_address: z.string().optional().or(z.literal('')),
  client_gst_no: z.string().optional().or(z.literal('')),
  termsAndConditions: z.string(),
  logoUrl: z.string().optional(),
  // Additional charges (numeric or empty)
  freightCharges: z.union([z.coerce.number().min(0), z.literal('')]).optional(),
  courierCharges: z.union([z.coerce.number().min(0), z.literal('')]).optional(),
  // Flags to show/hide charges in PDF
  showFreight: z.boolean().optional(),
  showCourier: z.boolean().optional(),
  // GST visibility control
  showGst: z.boolean().optional(),
  // Currency fields
  currencyCode: z.string().nullish(),
  currencySymbol: z.string().nullish(),
  conversionRate: z.coerce.number().nullish(),
  manufacturingCompany: z.string().optional(),
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
  quotationStatuses?: string[];
}

export function EditQuotationDialog({ 
  quotation, 
  onQuotationUpdated, 
  open: externalOpen, 
  onOpenChange: externalOnOpenChange,
  trigger,
  quotationStatuses,
}: EditQuotationDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use external control if provided, otherwise use internal state
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalOnOpenChange || setInternalOpen;
  const [leads, setLeads] = useState<Lead[]>([]);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [templates, setTemplates] = useState<QuotationTemplate[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [rowCategoryFilters, setRowCategoryFilters] = useState<(string | 'ALL')[]>([]);
  const { toast } = useToast();
  const [manufacturingCompanies, setManufacturingCompanies] = useState<any[]>([]);

  const availableStatuses = (quotationStatuses && quotationStatuses.length ? quotationStatuses : ALL_QUOTATION_STATUSES);

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
      showFreight: quotation.showFreight === true,
      showCourier: quotation.showCourier === true,
      // Preserve GST visibility exactly as stored; default to true only if never set
      showGst: quotation.showGst === false ? false : true,
      currencyCode: quotation.currencyCode || undefined,
      currencySymbol: quotation.currencySymbol || undefined,
      conversionRate: quotation.conversionRate || undefined,
      manufacturingCompany: quotation.manufacturingCompany || '',
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
  const watchedShowFreight = watch('showFreight');
  const watchedShowCourier = watch('showCourier');
  const watchedShowGst = watch('showGst');
   const watchedManufacturingCompany = watch('manufacturingCompany');
   const prevManufacturingCompanyRef = useRef(watchedManufacturingCompany);

  const productTotals = watchedProducts?.map(p => {
    const baseAmount = p.quantity * p.rate;
    const discountAmount = baseAmount * ((p.discount || 0) / 100);
    const amount = baseAmount - discountAmount;
    const gstAmount = watchedShowGst ? amount * (p.gstRate / 100) : 0;
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
                const [fetchedLeads, fetchedProducts, fetchedTemplates, fetchedCategories, fetchedCurrencies, fetchedCompanies] = await Promise.all([
                    getLeads(),
                    getProducts(),
                    getQuotationTemplates(),
                    getProductCategories(),
                    getActiveCurrencies(),
                    getManufacturingCompanies(),
                ]);
                setLeads(fetchedLeads);
                setAvailableProducts(fetchedProducts);
                setTemplates(fetchedTemplates);
                setCategories(fetchedCategories);
                setCurrencies(fetchedCurrencies);
                setManufacturingCompanies(fetchedCompanies as any);
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

  // Reset products when manufacturing company changes
  useEffect(() => {
    if (!open) return;

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
  }, [watchedManufacturingCompany, open]);

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
      // Deep-clean products to strip out any undefined fields from nested
      // objects before sending to Firestore.
      const sanitizedProducts = (data.products || []).map((p) => {
        const clean: any = {};
        Object.entries(p).forEach(([key, value]) => {
          if (value !== undefined) {
            clean[key] = value;
          }
        });
        return clean;
      });

      const payload: Partial<Quotation> = {
        leadId: data.leadId,
        templateId: data.templateId,
        date: format(data.date, 'yyyy-MM-dd'),
        validUntil: format(data.validUntil, 'yyyy-MM-dd'),
        status: data.status,
        products: sanitizedProducts,
        subTotal,
        totalGst,
        grandTotal,
        companyName: data.companyName,
        companyAddress: data.companyAddress,
        companyGst: data.companyGst || undefined,
        client_address: data.client_address || undefined,
        client_gst_no: data.client_gst_no || undefined,
        termsAndConditions: data.termsAndConditions,
        logoUrl: data.logoUrl || undefined,
        freightCharges: data.freightCharges === '' ? undefined : data.freightCharges,
        courierCharges: data.courierCharges === '' ? undefined : data.courierCharges,
        showFreight: data.showFreight ?? false,
        showCourier: data.showCourier ?? false,
        // Persist GST flag exactly as user set it in the form
        showGst: data.showGst,
        currencyCode: data.currencyCode || quotation.currencyCode,
        currencySymbol: data.currencySymbol || quotation.currencySymbol,
        conversionRate: data.conversionRate ?? quotation.conversionRate,
        manufacturingCompany: data.manufacturingCompany || undefined,
      };

      await updateQuotation(quotation.id, payload as any);

      toast({
        title: 'Quotation Updated',
        description: `The quotation has been successfully updated.`,
      });
      setOpen(false);
      if (onQuotationUpdated) {
        onQuotationUpdated();
      }
    } catch (error) {
      console.error('Error updating quotation:', error);
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
      setValue(`products.${index}.description`, product.description || '', { shouldValidate: true });
    }
  };

  const getFilteredProductsForRow = (rowIndex: number) => {
    const filterValue = rowCategoryFilters[rowIndex] || 'ALL';
    let filtered = availableProducts as Product[];

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
      <DialogContent className="max-w-[90vw] w-[90vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Quotation #{quotation.quotationNumber}</DialogTitle>
          <DialogDescription>
            Update the quotation details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-0">
            <div className="grid gap-6 py-4 flex-1 overflow-y-auto pr-6 min-h-0">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="leadId">Lead</Label>
                        <Controller
                            control={control}
                            name="leadId"
                            render={({ field }) => (
                                <Combobox
                                    options={leads.filter(lead => lead.id).map(lead => ({
                                        value: lead.id!,
                                        label: `${lead.name} - ${lead.company}`
                                    }))}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    placeholder="Select a lead"
                                    searchPlaceholder="Search leads..."
                                    emptyText="No leads found."
                                />
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
                                        {availableStatuses.map((s) => (
                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
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
                                  <SelectTrigger>
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

                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="currencyCode">Currency</Label>
                        <Controller
                            control={control}
                            name="currencyCode"
                            render={({ field }) => (
                                <Select
                                    onValueChange={(value) => {
                                        field.onChange(value);
                                        if (value === 'INR') {
                                            setValue('currencySymbol', '₹' as any);
                                            setValue('conversionRate', 1 as any);
                                            return;
                                        }
                                        const selectedCurrency = currencies.find(c => c.code === value);
                                        if (selectedCurrency) {
                                            setValue('currencySymbol', selectedCurrency.symbol as any);
                                            setValue('conversionRate', selectedCurrency.conversionRate as any);
                                        }
                                    }}
                                    value={field.value ?? undefined}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select currency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="INR">
                                            ₹ INR - Indian Rupee
                                        </SelectItem>
                                        {currencies
                                            .filter(currency => currency.code !== 'INR')
                                            .map(currency => (
                                                <SelectItem key={currency.id!} value={currency.code}>
                                                    {currency.symbol} {currency.code} - {currency.name}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <p className="text-xs text-muted-foreground">
                            Enter all amounts in INR. Preview will show converted amounts in selected currency.
                        </p>
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
                <h3 className="text-lg font-medium">Additional Charges & GST</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Controller
                            control={control}
                            name="showGst"
                            render={({ field }) => (
                                <Checkbox
                                    id="showGst"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />
                        <Label htmlFor="showGst" className="cursor-pointer font-medium">Include GST in Quotation</Label>
                        <p className="text-xs text-muted-foreground ml-2">Uncheck to hide GST fields and calculations from form and PDF</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                            <Controller
                                control={control}
                                name="showFreight"
                                render={({ field }) => (
                                    <Checkbox
                                        id="showFreight"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <Label htmlFor="showFreight" className="cursor-pointer">Show Freight Charges in Quotation</Label>
                        </div>
                        <Label htmlFor="freightCharges">Freight Charges</Label>
                        <Input 
                            id="freightCharges" 
                            type="number"
                            step="0.01"
                            min="0"
                            {...register('freightCharges')} 
                            placeholder="EXTRA"
                            disabled={!watchedShowFreight}
                        />
                        <p className="text-xs text-muted-foreground">Enter amount in INR or leave empty to show "EXTRA"</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                            <Controller
                                control={control}
                                name="showCourier"
                                render={({ field }) => (
                                    <Checkbox
                                        id="showCourier"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <Label htmlFor="showCourier" className="cursor-pointer">Show Courier Charges in Quotation</Label>
                        </div>
                        <Label htmlFor="courierCharges">Courier Charges</Label>
                        <Input 
                            id="courierCharges" 
                            type="number"
                            step="0.01"
                            min="0"
                            {...register('courierCharges')} 
                            placeholder="EXTRA"
                            disabled={!watchedShowCourier}
                        />
                        <p className="text-xs text-muted-foreground">Enter amount in INR or leave empty to show "EXTRA"</p>
                    </div>
                </div>
                <Separator />
                
                <div className="space-y-2">
                    <Label>Products</Label>
                    <div className="border rounded-lg">
                        <Table className="table-fixed">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[12%]">Category</TableHead>
                                    <TableHead className="w-[14%]">Product Name</TableHead>
                                    <TableHead className="w-[25%]">Description</TableHead>
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
                                    const currentProductId = watchedProducts?.[index]?.productId;
                                    const productDetails = currentProductId
                                      ? availableProducts.find(p => p.id === currentProductId)
                                      : undefined;
                                    return (
                                    <TableRow key={field.id}>
                                        <TableCell className="w-[12%] overflow-hidden">
                                            <div className="w-full max-w-full">
                                                <Combobox
                                                  options={[
                                                    { value: 'ALL', label: 'All categories' },
                                                    ...categories
                                                      .filter((c) => c.id)
                                                      .map((c) => ({ value: c.id as string, label: c.name })),
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
                                                          options={getFilteredProductsForRow(index)
                                                            .filter((p) => p.id)
                                                            .map((p) => {
                                                              const catName = categories.find((c) => c.id === p.categoryId)?.name;
                                                              return {
                                                                value: p.id as string,
                                                                label: catName ? `${p.name} — ${catName}` : p.name,
                                                              };
                                                            })}
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
                                            <Textarea
                                                {...register(`products.${index}.description`)}
                                                placeholder="Product description"
                                                className="min-h-[60px] text-sm"
                                                rows={2}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1">
                                                <Input type="number" {...register(`products.${index}.quantity`)} min="1" className="w-20" />
                                                <span className="text-xs text-muted-foreground">
                                                    {productDetails?.uom || 'units'}
                                                </span>
                                            </div>
                                        </TableCell>
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
                                    <TableRow><TableCell colSpan={9} className="text-center h-24">No products added.</TableCell></TableRow>
                                )}
                            </TableBody>
                            <UiTableFooter>
                                <TableRow><TableCell colSpan={8} className="text-right">Base Amount</TableCell><TableCell className="text-right">{formatCurrency(totalBaseAmount)}</TableCell><TableCell></TableCell></TableRow>
                                {totalDiscountAmount > 0 && (
                                    <TableRow><TableCell colSpan={8} className="text-right text-green-600">Total Discount</TableCell><TableCell className="text-right text-green-600">-{formatCurrency(totalDiscountAmount)}</TableCell><TableCell></TableCell></TableRow>
                                )}
                                <TableRow><TableCell colSpan={8} className="text-right">Sub-total</TableCell><TableCell className="text-right">{formatCurrency(subTotal)}</TableCell><TableCell></TableCell></TableRow>
                                <TableRow><TableCell colSpan={8} className="text-right">Total GST</TableCell><TableCell className="text-right">{formatCurrency(totalGst)}</TableCell><TableCell></TableCell></TableRow>
                                <TableRow><TableCell colSpan={8} className="text-right font-bold text-lg">Grand Total</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(grandTotal)}</TableCell><TableCell></TableCell></TableRow>
                            </UiTableFooter>
                        </Table>
                    </div>
                     {errors.products && <p className="text-xs text-destructive mt-1">{errors.products.message || errors.products.root?.message}</p>}
<Button type="button" variant="outline" size="sm" onClick={() => append({ productId: '', quantity: 1, rate: 0, gstRate: 0, discount: 0, description: '' })}>
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
