'use client';

import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Employee } from '@/lib/types';
import type { Department } from '@/lib/business-types';
import { getDepartments, getEmployeeRoles, updateEmployee } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

const employeeSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  role: z.string(),
  department: z.string(),
  address: z.string().min(10, 'Address is required.'),
});

type EmployeeFormData = z.infer<typeof employeeSchema>;

interface EditEmployeeDialogProps {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  employee: Employee;
  onEmployeeUpdated?: () => void;
}

export function EditEmployeeDialog({ open, onOpenChange, employee, onEmployeeUpdated }: EditEmployeeDialogProps) {
  const { toast } = useToast();
  const [roles, setRoles] = useState<string[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);

  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
      department: employee.department,
      address: employee.address,
    }
  });

  useEffect(() => {
    if (!open) return;
    async function loadMeta() {
      const [r, d] = await Promise.all([getEmployeeRoles(), getDepartments()]);
      setRoles(r.map(x => x.name));
      setDepartments(d);
    }
    loadMeta();
  }, [open]);

  useEffect(() => {
    reset({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
      department: employee.department,
      address: employee.address,
    });
  }, [employee, reset]);

  const onSubmit = async (data: EmployeeFormData) => {
    try {
      await updateEmployee(employee.id, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        department: data.department,
        address: data.address,
      } as any);

      toast({
        title: 'Employee Updated',
        description: 'Employee details have been successfully updated.',
      });
      onOpenChange(false);
      if (onEmployeeUpdated) {
        onEmployeeUpdated();
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to update employee. Please try again.';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register('name')} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register('phone')} />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
            </div>
            <div>
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
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>}
            </div>
            <div>
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
                      {departments.map((d) => (
                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.department && <p className="text-sm text-red-500 mt-1">{errors.department.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" {...register('address')} />
              {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address.message}</p>}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}


