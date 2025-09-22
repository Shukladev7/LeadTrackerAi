'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

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
import { addQuotationTemplateAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

const templateSchema = z.object({
  name: z.string().min(3, 'Template name must be at least 3 characters.'),
  companyName: z.string().min(3, 'Company name is required.'),
  companyAddress: z.string().min(10, 'Full company address is required.'),
  companyGst: z.string().length(15, 'GSTIN must be 15 characters.'),
  termsAndConditions: z.string().min(20, 'Terms and conditions are required.'),
  logoUrl: z.string().url('Please enter a valid URL for the logo.').optional().or(z.literal('')),
});

type TemplateFormData = z.infer<typeof templateSchema>;

export function AddQuotationTemplateSheet() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, setValue, watch, formState: { errors, isSubmitting } } = useForm<TemplateFormData>({
    resolver: zodResolver(templateSchema),
  });

  const logoUrl = watch('logoUrl');

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue('logoUrl', reader.result as string, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: TemplateFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value || '');
    });

    const result = await addQuotationTemplateAction(formData);

    if (result.message === 'Successfully created quotation template.') {
      toast({
        title: 'Template Created',
        description: `"${data.name}" has been successfully created.`,
      });
      reset();
      setOpen(false);
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message,
            ...result.errors && {
                description: Object.values(result.errors).flat().join('\n'),
            }
        });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Template
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>Add a New Quotation Template</SheetTitle>
          <SheetDescription>
            This information will be pre-filled when you create a new quotation using this template.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-6 max-h-[90vh] overflow-y-auto pr-6">
          <div className="space-y-2">
            <Label htmlFor="name">Template Name</Label>
            <Input id="name" placeholder="e.g., Standard Web Services Template" {...register('name')} className={errors.name ? 'border-destructive' : ''} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="logoUrl">Company Logo</Label>
            <div className="flex items-center gap-4">
              {logoUrl && <img src={logoUrl} alt="Company Logo" className="h-16 w-16 object-contain rounded-md border" />}
              <Input id="logoUrl" type="file" onChange={handleLogoUpload} accept="image/*" className={`file:text-primary file:font-medium ${errors.logoUrl ? 'border-destructive' : ''}`} />
            </div>
            {errors.logoUrl && <p className="text-xs text-destructive mt-1">{errors.logoUrl.message}</p>}
          </div>
           <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" {...register('companyName')} className={errors.companyName ? 'border-destructive' : ''} />
            {errors.companyName && <p className="text-xs text-destructive mt-1">{errors.companyName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyAddress">Company Address</Label>
            <Textarea id="companyAddress" {...register('companyAddress')} className={errors.companyAddress ? 'border-destructive' : ''} />
            {errors.companyAddress && <p className="text-xs text-destructive mt-1">{errors.companyAddress.message}</p>}
          </div>
           <div className="space-y-2">
            <Label htmlFor="companyGst">Company GSTIN</Label>
            <Input id="companyGst" {...register('companyGst')} className={errors.companyGst ? 'border-destructive' : ''} />
            {errors.companyGst && <p className="text-xs text-destructive mt-1">{errors.companyGst.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="termsAndConditions">Terms & Conditions</Label>
            <Textarea id="termsAndConditions" rows={8} {...register('termsAndConditions')} className={errors.termsAndConditions ? 'border-destructive' : ''} />
            {errors.termsAndConditions && <p className="text-xs text-destructive mt-1">{errors.termsAndConditions.message}</p>}
          </div>
          <SheetFooter className="pt-4 sticky bottom-0 bg-background">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Creating Template...' : 'Create Template'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
