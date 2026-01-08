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
import { Combobox } from '@/components/ui/combobox';
import { useToast } from '@/hooks/use-toast';
import { ALL_STATUSES } from '@/lib/types';
import {
  addLead,
  getProducts,
  getLeadSources,
  getProductCategories,
  getManufacturingCompanies,
} from '@/lib/data';
import { useAuth } from '@/lib/auth-context';

/* ------------------ SCHEMAS ------------------ */

const leadProductSchema = z.object({
  productId: z.string().min(1),
  quantity: z.coerce.number().min(1),
  rate: z.coerce.number().min(0),
  selectedSku: z.string().optional(),
  selectedModelId: z.string().optional(),
});

const leadSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  whatsappNumber: z.string().optional(),
  client_address: z.string().optional(),
  client_gst_no: z.string().optional(),
  status: z.enum([
    'New',
    'In Discussion',
    'Negotiation',
    'Closed - Won',
    'Closed - Lost',
  ]),
  source: z.string().min(1),
  notes: z.string().optional(),
  products: z.array(leadProductSchema).optional(),
  manufacturingCompany: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

/* ------------------ HELPER ------------------ */

function removeUndefined(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

/* ------------------ COMPONENT ------------------ */

/**
 * CreateLeadDialog
 * - onLeadCreated?: (newLead:any) => void
 *
 * IMPORTANT: parent should pass a callback that triggers re-fetch (or updates local UI),
 * e.g. onLeadCreated={() => setRefreshKey(k => k+1)} or onLeadCreated={(lead) => setLeads(l => [lead, ...l])}
 */
export function CreateLeadDialog({
  onLeadCreated,
}: {
  onLeadCreated?: (lead?: any) => void;
}) {
  const [open, setOpen] = useState(false);
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);
  const [leadSources, setLeadSources] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [rowCategoryFilters, setRowCategoryFilters] = useState<
    (string | 'ALL')[]
  >([]);
  const [manufacturingCompanies, setManufacturingCompanies] = useState<any[]>([]);

  const { toast } = useToast();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      status: 'New',
      products: [],
      manufacturingCompany: undefined,
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

  const productTotals =
    watchedProducts?.map((p) => {
      const productDetails = availableProducts.find((ap) => ap.id === p.productId);
      if (!productDetails) return { amount: 0, gst: 0, total: 0 };
      const amount = p.quantity * p.rate;
      const gst = amount * (productDetails.gstRate / 100);
      return { amount, gst, total: amount + gst };
    }) || [];

  const grandTotal = productTotals.reduce((acc, curr) => acc + curr.total, 0);

  // When manufacturing company changes, reset selected products as per requirements
  useEffect(() => {
    if (!open) return;
    // Clear all product rows
    if (fields.length > 0) {
      for (let i = fields.length - 1; i >= 0; i--) {
        remove(i);
      }
    }
    setRowCategoryFilters([]);
  }, [watchedManufacturingCompany, open]);

  useEffect(() => {
    async function fetchData() {
      if (open) {
        const [fetchedProducts, fetchedLeadSources, fetchedCategories, fetchedCompanies] =
          await Promise.all([
            getProducts(),
            getLeadSources(),
            getProductCategories(),
            getManufacturingCompanies(),
          ]);

        setAvailableProducts(fetchedProducts || []);
        setLeadSources(fetchedLeadSources || []);
        setCategories(fetchedCategories || []);
        setManufacturingCompanies(fetchedCompanies || []);
      }
    }
    fetchData();
  }, [open]);

  /* ------------------ SUBMIT ------------------ */

  const onSubmit = async (data: LeadFormData) => {
    try {
      const createdBy = user?.displayName || user?.email || 'Unknown User';

      const payload = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        whatsappNumber: data.whatsappNumber || '',
        client_address: data.client_address || '',
        client_gst_no: data.client_gst_no || '',
        status: data.status,
        source: data.source,
        notes: data.notes || '',
        createdBy,
        // add createdAt client-side as fallback (server may set its own timestamp)
        createdAt: new Date().toISOString(),
        products:
          data.products?.map((p) => ({
            productId: p.productId,
            quantity: p.quantity,
            rate: p.rate,
            selectedSku: p.selectedSku || '',
            selectedModelId: p.selectedModelId || '',
          })) || [],
        manufacturingCompany: data.manufacturingCompany || undefined,
      };

      const cleanPayload = removeUndefined(payload);

      // call addLead - handle multiple return shapes:
      // - might return new doc id (string)
      // - might return an object with id
      // - might return the created lead object
      const result = await addLead(cleanPayload);

      // Build newLead to pass to parent callback.
      // Prefer server/returned id if available.
      let newLead: any;
      if (!result) {
        // no useful return, fallback to payload (parent will re-fetch on callback)
        newLead = cleanPayload;
      } else if (typeof result === 'string') {
        newLead = { id: result, ...cleanPayload };
      } else if (typeof result === 'object' && (result.id || result._id || result.docId)) {
        newLead = {
          id: result.id || result._id || result.docId,
          ...(result.data || cleanPayload),
        };
      } else if (typeof result === 'object') {
        // If result looks like the lead object itself
        newLead = { ...cleanPayload, ...result };
      } else {
        newLead = cleanPayload;
      }

      toast({
        title: 'Lead Created',
        description: `Lead "${data.name}" has been successfully created.`,
      });

      // Reset and close BEFORE notifying parent (so UI state is clean)
      reset();
      setOpen(false);

      // Notify parent so it can re-fetch or optimistically insert.
      // We call with newLead when possible, otherwise call without args.
      if (onLeadCreated) {
        try {
          onLeadCreated(newLead);
        } catch (cbErr) {
          // swallowing errors from parent callback so they don't break UX
          console.warn('onLeadCreated callback threw error', cbErr);
        }
      }
    } catch (error: any) {
      console.error('Error creating lead', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error?.message || 'Failed to create lead. Please try again.',
      });
    }
  };

  /* ------------------ PRODUCT CHANGE ------------------ */

  const handleProductChange = async (productId: string, index: number) => {
    const product = availableProducts.find((p) => p.id === productId);
    if (product) {
      setValue(`products.${index}.rate`, product.price, { shouldValidate: true });
      setValue(`products.${index}.selectedSku`, '', { shouldValidate: false });
    }
  };

  const getFilteredProductsForRow = (rowIndex: number) => {
    const filterValue = rowCategoryFilters[rowIndex] || 'ALL';
    let filtered = availableProducts as any[];

    // If a manufacturing company is selected, restrict products to that company
    if (watchedManufacturingCompany) {
      filtered = filtered.filter(
        (p) => p.manufacturingCompany === watchedManufacturingCompany
      );
    }

    if (filterValue !== 'ALL') {
      filtered = filtered.filter((p) => p.categoryId === filterValue);
    }

    return filtered;
  };

  /* ------------------ UI ------------------ */

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Lead
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[90vw] w-[90vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Create New Lead</DialogTitle>
          <DialogDescription>Fill in the details below to add a new lead.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-0">
          <div className="grid gap-4 py-4 flex-1 overflow-y-auto pr-6 min-h-0">
            {/* TOP FIELDS */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input {...register('name')} className={errors.name ? 'border-destructive' : ''} />
              </div>
              <div>
                <Label>Company</Label>
                <Input {...register('company')} className={errors.company ? 'border-destructive' : ''} />
              </div>
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Email</Label>
                <Input type="email" {...register('email')} />
              </div>
              <div>
                <Label>Phone</Label>
                <Input {...register('phone')} />
              </div>
            </div>

            {/* WHATSAPP + CREATED BY */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>WhatsApp</Label>
                <Input {...register('whatsappNumber')} />
              </div>
              <div>
                <Label>Created By</Label>
                <Input value={user?.displayName || user?.email || 'Unknown User'} disabled />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Client Address</Label>
                <Textarea rows={3} {...register('client_address')} />
              </div>
              <div>
                <Label>Client GST No</Label>
                <Input {...register('client_gst_no')} />
              </div>
            </div>

            {/* SOURCE */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Lead Source</Label>
                <Controller
                  control={control}
                  name="source"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a source" />
                      </SelectTrigger>
                      <SelectContent>
                        {leadSources.map((source) => (
                          <SelectItem key={source.id} value={source.name}>
                            {source.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label>Manufacturing Company</Label>
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

            {/* PRODUCTS TABLE */}
            <div>
              <Label>Products Interested</Label>

              <div className="border rounded-lg">
                <Table className="table-fixed">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[12%]">Category</TableHead>
                      <TableHead className="w-[14%]">Product</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Rate</TableHead>
                      <TableHead>GST</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {fields.map((field, index) => {
                      const productDetails = availableProducts.find(
                        (p) => p.id === watchedProducts?.[index]?.productId
                      );
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
                                  const next = [...rowCategoryFilters];
                                  next[index] = v as any;
                                  setRowCategoryFilters(next);
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

                          {/* SKU */}
                          <TableCell>
                            {productDetails?.skus?.length > 0 ? (
                              <Controller
                                control={control}
                                name={`products.${index}.selectedSku`}
                                render={({ field }) => (
                                  <Select value={field.value || ''} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="SKU" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {productDetails.skus.map((sku: string) => (
                                        <SelectItem key={sku} value={sku}>
                                          {sku}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                            ) : (
                              <span className="text-xs text-muted-foreground">N/A</span>
                            )}
                          </TableCell>

                          <TableCell>
                            <Input
                              type="number"
                              className="w-20"
                              {...register(`products.${index}.quantity`)}
                            />
                          </TableCell>

                          <TableCell>
                            <Input
                              type="number"
                              className="w-24"
                              {...register(`products.${index}.rate`)}
                            />
                          </TableCell>

                          <TableCell>{productDetails ? `${productDetails.gstRate}%` : '-'}</TableCell>

                          <TableCell className="text-right">{total.toFixed(2)}</TableCell>

                          <TableCell>
                            <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}

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
                      <TableCell colSpan={6} className="text-right font-bold">
                        Grand Total
                      </TableCell>
                      <TableCell className="text-right font-bold">{grandTotal.toFixed(2)}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </UiTableFooter>
                </Table>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append({ productId: '', quantity: 1, rate: 0, selectedSku: '' })}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>

            {/* NOTES */}
            <div>
              <Label>Initial Notes</Label>
              <Textarea {...register('notes')} placeholder="Notes (optional)" />
            </div>

            {/* STATUS */}
            <div>
              <Label>Status</Label>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ALL_STATUSES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Lead'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
