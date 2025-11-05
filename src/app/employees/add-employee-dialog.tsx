
'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

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
import { addEmployeeAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { EmployeeRole, Department } from '@/lib/business-types';
import { getEmployeeRoles, getDepartments } from '@/lib/data';
import { Textarea } from '@/components/ui/textarea';

const employeeSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  role: z.string({
    required_error: "You need to select a role.",
  }),
  department: z.string({
    required_error: "You need to select a department.",
  }),
  address: z.string().min(10, { message: 'Address is required.' }),
});

type EmployeeFormData = z.infer<typeof employeeSchema>;

export function AddEmployeeDialog() {
  const [open, setOpen] = useState(false);
  const [employeeRoles, setEmployeeRoles] = useState<EmployeeRole[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const { toast } = useToast();

  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
  });

  useEffect(() => {
    async function fetchRoles() {
      if (open) {
        const [roles, depts] = await Promise.all([
            getEmployeeRoles(),
            getDepartments(),
        ]);
        setEmployeeRoles(roles);
        setDepartments(depts);
      }
    }
    fetchRoles();
  }, [open]);

  const onSubmit = async (data: EmployeeFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
    });

    const result = await addEmployeeAction(formData);

    if (result.message.includes('Successfully added employee')) {
      toast({
        title: 'Employee Added',
        description: result.message,
        duration: 8000, // Show longer to read the message
      });
      
      // Show reset link in development
      if (result.resetLink) {
        console.log('🔗 Password reset link for', data.name, ':', result.resetLink);
        
        // Also show a follow-up toast with instructions
        setTimeout(() => {
          toast({
            title: 'Development Mode',
            description: `Password reset link for ${data.name} is available in the browser console. In production, this would be sent via email.`,
            duration: 10000,
          });
        }, 2000);
      }
      
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <DialogDescription>
            Fill in the details below to onboard a new employee. A Firebase Auth account will be created and a password reset email will be sent to the employee's email address.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register('name')} className={errors.name ? 'border-destructive' : ''} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
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
                        <Label htmlFor="role">Role (Designation)</Label>
                        <Controller
                            control={control}
                            name="role"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="role" className={errors.role ? 'border-destructive' : ''}>
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {employeeRoles.map(role => (
                                            <SelectItem key={role.id} value={role.name}>{role.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.role && <p className="text-xs text-destructive mt-1">{errors.role.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Controller
                            control={control}
                            name="department"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="department" className={errors.department ? 'border-destructive' : ''}>
                                        <SelectValue placeholder="Select a department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.map(dept => (
                                            <SelectItem key={dept.id} value={dept.name}>{dept.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.department && <p className="text-xs text-destructive mt-1">{errors.department.message}</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" {...register('address')} className={errors.address ? 'border-destructive' : ''} />
                    {errors.address && <p className="text-xs text-destructive mt-1">{errors.address.message}</p>}
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Employee'}
                </Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
