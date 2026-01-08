
'use client';

import { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle, Trash2, CalendarIcon, FilePlus } from 'lucide-react';
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
import { Lead, Product, QuotationTemplate, ProductCategory, Currency } from '@/lib/business-types';
import { ALL_QUOTATION_STATUSES } from '@/lib/types';
import { getLeads, getProducts, getQuotationTemplates, getLeadById, getProductCategories, addQuotation, addActivityToLead, getManufacturingCompanies } from '@/lib/data';
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
  // Overridable template fields
  companyName: z.string().min(1, 'Company name is required.'),
  companyAddress: z.string().min(1, 'Company address is required.'),
  companyGst: z.string().optional().or(z.literal('')),
  // Client billing fields
  client_address: z.string().optional().or(z.literal('')),
  client_gst_no: z.string().optional().or(z.literal('')),
  termsAndConditions: z.string(),
  logoUrl: z.string().optional(),
  quotationPrefix: z.string().optional(),
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

interface CreateQuotationDialogProps {
  leadId?: string;
  quotationStatuses?: string[];
  onQuotationCreated?: () => void;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
};

export function CreateQuotationDialog({ leadId: initialLeadId, quotationStatuses, onQuotationCreated }: CreateQuotationDialogProps) {
  const [open, setOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [templates, setTemplates] = useState<QuotationTemplate[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [rowCategoryFilters, setRowCategoryFilters] = useState<(string | 'ALL')[]>([]);
  const [manufacturingCompanies, setManufacturingCompanies] = useState<any[]>([]);
  const { toast } = useToast();

  const availableStatuses = (quotationStatuses && quotationStatuses.length ? quotationStatuses : ALL_QUOTATION_STATUSES);

  const { register, handleSubmit, reset, control, setValue, watch, formState: { errors, isSubmitting } } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      leadId: initialLeadId || undefined,
      date: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 15)), // Default validity: 15 days
      status: availableStatuses[0] || 'Draft',
      products: [],
      companyName: '',
      companyAddress: '',
      companyGst: '',
      client_address: '',
      client_gst_no: '',
      termsAndConditions: '',
      logoUrl: '',
      freightCharges: '',
      courierCharges: '',
      showFreight: false,
      showCourier: false,
      showGst: true,
      currencyCode: 'INR',
      currencySymbol: '₹',
      conversionRate: 1.0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const watchedLeadId = watch('leadId');
  const watchedTemplateId = watch('templateId');
  const watchedProducts = watch('products');
  const watchedCurrency = watch('currencyCode');
  const watchedFreightCharges = watch('freightCharges');
  const watchedCourierCharges = watch('courierCharges');
  const watchedShowFreight = watch('showFreight');
  const watchedShowCourier = watch('showCourier');
  const watchedShowGst = watch('showGst');
  const watchedManufacturingCompany = watch('manufacturingCompany');

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
        }
    }
    fetchData();
  }, [open]);

  // Keep per-row category filter state in sync with number of product rows
  useEffect(() => {
    setRowCategoryFilters((prev) => {
      // If this quotation is based on a selected lead and filters are not yet initialized,
      // let the lead-based mapping (populateFromLead) set them instead of defaulting to 'ALL'.
      if (prev.length === 0 && fields.length > 0 && watchedLeadId) {
        return prev;
      }

      const next = [...prev];
      while (next.length < fields.length) next.push('ALL');
      if (next.length > fields.length) next.length = fields.length;
      return next;
    });
  }, [fields.length, watchedLeadId]);

  // Reset products when manufacturing company changes
  useEffect(() => {
    if (!open) return;
    if (fields.length > 0) {
      for (let i = fields.length - 1; i >= 0; i--) {
        remove(i);
      }
    }
    setRowCategoryFilters([]);
  }, [watchedManufacturingCompany, open]);

  useEffect(() => {
    async function populateFromTemplate() {
        if (watchedTemplateId) {
            const template = templates.find(t => t.id === watchedTemplateId);
            if (template) {
                setValue('companyName', template.companyName);
                setValue('companyAddress', template.companyAddress);
                setValue('companyGst', template.companyGst);
                setValue('termsAndConditions', template.termsAndConditions);
                setValue('logoUrl', template.logoUrl || '');
                // Also set hidden prefix field for server processing
                setValue('quotationPrefix', template.prefix as any);
                if (template.manufacturingCompany) {
                  setValue('manufacturingCompany', template.manufacturingCompany as any);
                }
            }
        }
    }
    if(open) {
      populateFromTemplate();
    }
  }, [watchedTemplateId, open, templates, setValue]);

  useEffect(() => {
    async function populateFromLead() {
        if (watchedLeadId && availableProducts.length > 0) {
            const lead = await getLeadById(watchedLeadId);
            if (lead) {
                // Populate client billing fields from lead
                setValue('client_address', lead.client_address || '', { shouldValidate: true });
                setValue('client_gst_no', lead.client_gst_no || '', { shouldValidate: true });
                
                // Populate products if available
                if (lead.products && lead.products.length > 0) {
                    const quotationProducts = lead.products.map(lp => {
                        const productDetails = availableProducts.find(ap => ap.id === lp.productId);
                        return {
                            productId: lp.productId,
                            quantity: lp.quantity,
                            rate: lp.rate,
                            gstRate: productDetails?.gstRate || 0,
                            discount: 0,
                            description: productDetails?.description || '',
                        };
                    });
                    setValue('products', quotationProducts, { shouldValidate: true });

                    const mappedCategoryFilters = lead.products.map(lp => {
                        const productDetails = availableProducts.find(ap => ap.id === lp.productId);
                        if (!productDetails) return 'ALL';

                        // Prefer explicit categoryId on the product
                        if (productDetails.categoryId) return productDetails.categoryId;

                        // Fallback: try to resolve by category name (e.g., AOD, XYZ)
                        if (productDetails.category) {
                            const matchedCategory = categories.find(c => c.name === productDetails.category);
                            if (matchedCategory?.id) return matchedCategory.id;
                        }

                        return 'ALL';
                    });
                    setRowCategoryFilters(mappedCategoryFilters);
                } else {
                    setValue('products', [], { shouldValidate: true });
                    setRowCategoryFilters([]);
                }
            }
        }
    }
    if (open) {
        populateFromLead();
    }
  }, [watchedLeadId, open, availableProducts, categories, setValue]);


  const onSubmit = async (data: QuotationFormData) => {
    try {
      const prefixValue = (data as any).quotationPrefix?.toString().toUpperCase() || '';

      const quotationData: any = {
        leadId: data.leadId,
        templateId: data.templateId,
        date: format(data.date, 'yyyy-MM-dd'),
        validUntil: format(data.validUntil, 'yyyy-MM-dd'),
        status: data.status,
        products: data.products,
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
        showGst: data.showGst ?? true,
        currencyCode: data.currencyCode || 'INR',
        currencySymbol: data.currencySymbol || '₹',
        conversionRate: data.conversionRate ?? 1.0,
        manufacturingCompany: data.manufacturingCompany || undefined,
      };

      const newQuotation = await addQuotation(quotationData, prefixValue);

      // Log activity on the lead in the background so the UI
      // does not wait for this secondary write to complete.
      addActivityToLead(data.leadId, {
        type: 'Proposal Sent',
        notes: `A quotation was created and sent.`,
      } as any).catch((activityError) => {
        console.error('Failed to log quotation activity on lead:', activityError);
      });

      toast({
        title: 'Quotation Created',
        description: `A new quotation has been successfully created.`,
      });
      reset();
      setOpen(false);
      if (onQuotationCreated) {
        onQuotationCreated();
      }
    } catch (error) {
      console.error('Error creating quotation:', error);
      const message =
        error instanceof Error ? error.message : 'Failed to create quotation. Please try again.';
      toast({
        variant: 'destructive',
        title: 'Error creating quotation',
        description: message,
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
    <Dialog open={open} onOpenChange={(isOpen) => { setOpen(isOpen); if (!isOpen) reset(); }}>
      <DialogTrigger asChild>
        {initialLeadId ? (
            <Button variant="outline">
                <FilePlus className="mr-2 h-4 w-4" />
                Create Quotation
            </Button>
        ) : (
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Quotation
            </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] w-[90vw] max-h-[90vh] flex flex-col">

        <DialogHeader>
          <DialogTitle>Create New Quotation</DialogTitle>
          <DialogDescription>
            Fill in the details to generate a new quotation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-0">
            <div className="grid gap-6 py-4 flex-1 overflow-y-auto pr-6 min-h-0">
                <div className="grid grid-cols-3 gap-4">
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
                                        {templates.filter(template => template.id).map(template => <SelectItem key={template.id} value={template.id!}>{template.name}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                         {errors.templateId && <p className="text-xs text-destructive mt-1">{errors.templateId.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="quotationPrefix">Quotation Prefix</Label>
                        <Input 
                            id="quotationPrefix" 
                            readOnly
                            placeholder="Auto from template" 
                            {...register('quotationPrefix', {
                                setValueAs: (value) => value?.toUpperCase() || ''
                            })}
                        />
                    </div>
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
                                        {(availableStatuses || ALL_QUOTATION_STATUSES).map((s) => (
                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
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
                                    <SelectTrigger><SelectValue placeholder="Select currency" /></SelectTrigger>
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
                        <Label htmlFor="client_address">Client Address <span className="text-muted-foreground">(Auto-filled from Lead)</span></Label>
                        <Textarea 
                            id="client_address" 
                            {...register('client_address')} 
                            placeholder="Client's billing address will be auto-populated from selected lead"
                            rows={3}
                        />
                        <p className="text-xs text-muted-foreground">This can be manually edited if needed</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="client_gst_no">Client GST No <span className="text-muted-foreground">(Auto-filled from Lead)</span></Label>
                        <Input 
                            id="client_gst_no" 
                            {...register('client_gst_no')} 
                            placeholder="Client's GST number from lead"
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
                                    {watchedShowGst && <TableHead>GST</TableHead>}
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

        {/* Description */}
        <TableCell>
                    <Textarea
            {...register(`products.${index}.description`)}
            placeholder="Product description"
            className="min-h-[150px] min-w-[250px] text-sm"
            rows={4}
          />

        </TableCell>

        {/* Quantity */}
        <TableCell>
          <div className="flex items-center gap-1">
            <Input
              type="number"
              {...register(`products.${index}.quantity`, { valueAsNumber: true })}
              min="1"
              className="w-20"
            />
            <span className="text-xs text-muted-foreground">
              {productDetails?.uom || 'units'}
            </span>
          </div>
        </TableCell>

        {/* RATE (was missing) */}
        <TableCell>
          <Input
            type="number"
            {...register(`products.${index}.rate`, { valueAsNumber: true })}
            min="0"
            className="w-28"
            placeholder="Rate"
          />
        </TableCell>

        {/* Discount */}
        <TableCell>
          <Input
            type="number"
            {...register(`products.${index}.discount`, { valueAsNumber: true })}
            min="0"
            max="100"
            step="0.01"
            className="w-20"
            placeholder="0"
          />
        </TableCell>

        {/* GST (read-only display) */}
        {watchedShowGst && (
          <TableCell>
            {watchedProducts?.[index]?.gstRate ?? 0}%
          </TableCell>
        )}

        {/* Amount */}
        <TableCell className="text-right font-medium">{formatCurrency(total)}</TableCell>

        {/* Delete */}
        <TableCell>
          <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </TableCell>
      </TableRow>
    );
  })}

  {fields.length === 0 && (
    <TableRow>
      <TableCell colSpan={watchedShowGst ? 9 : 8} className="text-center h-24">No products added.</TableCell>
    </TableRow>
  )}
</TableBody>

<UiTableFooter>
  <TableRow>
    <TableCell colSpan={watchedShowGst ? 8 : 7} className="text-right">Base Amount</TableCell>
    <TableCell className="text-right">{formatCurrency(totalBaseAmount)}</TableCell>
    <TableCell></TableCell>
  </TableRow>

  {totalDiscountAmount > 0 && (
    <TableRow>
      <TableCell colSpan={watchedShowGst ? 8 : 7} className="text-right text-green-600">Total Discount</TableCell>
      <TableCell className="text-right text-green-600">-{formatCurrency(totalDiscountAmount)}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  )}

  <TableRow>
    <TableCell colSpan={watchedShowGst ? 8 : 7} className="text-right">Sub-total</TableCell>
    <TableCell className="text-right">{formatCurrency(subTotal)}</TableCell>
    <TableCell></TableCell>
  </TableRow>

  {watchedShowGst && (
    <TableRow>
      <TableCell colSpan={8} className="text-right">Total GST</TableCell>
      <TableCell className="text-right">{formatCurrency(totalGst)}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  )}

  <TableRow>
    <TableCell colSpan={watchedShowGst ? 8 : 7} className="text-right font-bold text-lg">Grand Total</TableCell>
    <TableCell className="text-right font-bold text-lg">{formatCurrency(grandTotal)}</TableCell>
    <TableCell></TableCell>
  </TableRow>
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
                    {isSubmitting ? 'Creating...' : 'Create Quotation'}
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
