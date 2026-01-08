"use client";

import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Combobox } from '@/components/ui/combobox';
import { useToast } from '@/hooks/use-toast';
import type { Employee, Task, Lead } from '@/lib/business-types';
import { updateTask, getLeads } from '@/lib/firestore-data-service';

const NONE_VALUE = '__none__';

const editTaskSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  description: z.string().optional(),
  priority: z.enum(['Low', 'Medium', 'High', 'Urgent']),
  status: z.enum(['Todo', 'In Progress', 'Review', 'Done', 'Cancelled']),
  dueDate: z.string().optional(),
  assignedTo: z.string().optional(),
  // Optional lead linkage. When provided, the task will be linked to this lead.
  relatedLeadId: z.string().optional(),
});

export type EditTaskFormData = z.infer<typeof editTaskSchema>;

interface EditTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task: Task;
  employees: Employee[];
  currentEmployee: Employee | null;
  isAdmin: boolean;
  onTaskUpdated?: () => void;
}

export function EditTaskDialog({
  open,
  onOpenChange,
  task,
  employees,
  currentEmployee,
  isAdmin,
  onTaskUpdated,
}: EditTaskDialogProps) {
  const { toast } = useToast();
  const [leads, setLeads] = useState<Lead[]>([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditTaskFormData>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description || '',
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate
        ? format(new Date(task.dueDate as any), 'yyyy-MM-dd')
        : '',
      assignedTo: task.assignedTo,
      relatedLeadId:
        task.relatedTo?.type === 'lead'
          ? task.relatedTo.id
          : '',
    },
  });

  useEffect(() => {
    if (!open) return;

    (async () => {
      try {
        const data = await getLeads();
        setLeads(
          (data as Lead[]).filter(
            (l) => typeof l.id === 'string' && l.id.trim() !== ''
          )
        );
      } catch (error) {
        console.error('Failed to load leads for task linking', error);
      }
    })();
  }, [open]);

  useEffect(() => {
    reset({
      title: task.title,
      description: task.description || '',
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate
        ? format(new Date(task.dueDate as any), 'yyyy-MM-dd')
        : '',
      assignedTo: task.assignedTo,
      relatedLeadId:
        task.relatedTo?.type === 'lead'
          ? task.relatedTo.id
          : '',
    });
  }, [task, reset]);

  const onSubmit = async (data: EditTaskFormData) => {
    try {
      const relatedTo: Task['relatedTo'] | undefined = data.relatedLeadId
        ? { type: 'lead', id: data.relatedLeadId }
        : undefined;

      const updatePayload: Partial<Omit<Task, 'id'>> = {
        title: data.title,
        description: data.description || undefined,
        priority: data.priority,
        status: data.status,
        dueDate: data.dueDate || undefined,
        relatedTo,
      };

      if (isAdmin) {
        updatePayload.assignedTo = data.assignedTo || task.assignedTo;
      }

      await updateTask(task.id!, updatePayload);

      toast({
        title: 'Task Updated',
        description: `Task "${data.title}" has been updated successfully.`,
      });

      onOpenChange(false);
      if (onTaskUpdated) {
        onTaskUpdated();
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to update task. Please try again.';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
      });
    }
  };

  const canChangeAssignee = isAdmin;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register('title')} className={errors.title ? 'border-destructive' : ''} />
            {errors.title && (
              <p className="text-xs text-destructive mt-1">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={3} {...register('description')} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todo">To Do</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Review">Review</SelectItem>
                      <SelectItem value="Done">Done</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dueDate">Reminder Date</Label>
              <Input id="dueDate" type="date" {...register('dueDate')} />
            </div>
            {canChangeAssignee && (
              <div className="space-y-2">
                <Label htmlFor="assignedTo">Assignee</Label>
                <Controller
                  control={control}
                  name="assignedTo"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value || ''}>
                      <SelectTrigger id="assignedTo">
                        <SelectValue placeholder="Select user" />
                      </SelectTrigger>
                      <SelectContent>
                        {employees.map((emp) => (
                          <SelectItem key={emp.id} value={emp.id!}>
                            {emp.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="relatedLeadId">Linked Lead (optional)</Label>
            <Controller
              control={control}
              name="relatedLeadId"
              render={({ field }) => (
                <Combobox
                  options={[
                    { value: NONE_VALUE, label: 'None' },
                    ...leads.map((lead) => ({
                      value: lead.id!,
                      label: `${lead.name}${lead.company ? ` - ${lead.company}` : ''}`,
                    })),
                  ]}
                  value={field.value ?? NONE_VALUE}
                  onValueChange={(v) =>
                    field.onChange(v === NONE_VALUE ? undefined : v)
                  }
                  placeholder="None"
                  searchPlaceholder="Search leads..."
                  emptyText="No leads found."
                />
              )}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
