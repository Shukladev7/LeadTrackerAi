
'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';
import { sendPasswordResetEmail } from 'firebase/auth';

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
import { useToast } from '@/hooks/use-toast';
import { EmployeeRole, Department } from '@/lib/business-types';
import { getEmployeeRoles, getDepartments } from '@/lib/data';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/lib/auth-context';
import { auth } from '@/lib/firebase';

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

interface AddEmployeeDialogProps {
  onEmployeeAdded?: () => void;
}

export function AddEmployeeDialog({ onEmployeeAdded }: AddEmployeeDialogProps) {
  const [open, setOpen] = useState(false);
  const [employeeRoles, setEmployeeRoles] = useState<EmployeeRole[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

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
    try {
      if (!user) {
        throw new Error('You must be signed in to create employees.');
      }

      const idToken = await user.getIdToken();

      const res = await fetch('/api/admin/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          role: data.role,
          phone: data.phone,
          department: data.department,
          address: data.address,
        }),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = payload?.error || 'Failed to create employee. Please try again.';
        throw new Error(message);
      }

      // Trigger Firebase's built-in password reset email so the new user can set a password.
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
      await sendPasswordResetEmail(auth, data.email, {
        url: `${appUrl}/auth/reset-complete`,
        handleCodeInApp: false,
      });

      toast({
        title: 'Employee Created',
        description: 'Employee created. A password setup email has been sent.',
      });

      reset();
      setOpen(false);
      if (onEmployeeAdded) {
        onEmployeeAdded();
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to add employee. Please try again.';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
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
