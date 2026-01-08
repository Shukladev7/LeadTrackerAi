'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
import { Combobox } from '@/components/ui/combobox';
import { useToast } from '@/hooks/use-toast';
import type { Employee, Task, Lead } from '@/lib/business-types';
import { addTask, getLeads } from '@/lib/firestore-data-service';

const NONE_VALUE = '__none__';

const taskSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  description: z.string().optional(),
  priority: z.enum(['Low', 'Medium', 'High', 'Urgent']),
  status: z.enum(['Todo', 'In Progress', 'Review', 'Done', 'Cancelled']),
  dueDate: z.string().optional(),
  assignedTo: z.string().optional(),
  relatedLeadId: z.string().optional(),
});

export type TaskFormData = z.infer<typeof taskSchema>;

interface CreateTaskDialogProps {
  employees: Employee[];
  currentEmployee: Employee | null;
  isAdmin: boolean;
  onTaskCreated?: () => void;
  defaultLeadId?: string;
  trigger?: ReactNode;
  autoOpen?: boolean;
}

export function CreateTaskDialog({
  employees,
  currentEmployee,
  isAdmin,
  onTaskCreated,
  defaultLeadId,
  trigger,
  autoOpen,
}: CreateTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: 'Medium',
      status: 'Todo',
      dueDate: '',
      assignedTo: isAdmin ? undefined : currentEmployee?.id,
      relatedLeadId: defaultLeadId,
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
        console.error('Failed to load leads', error);
      }
    })();
  }, [open]);

  const onSubmit = async (data: TaskFormData) => {
    try {
      const effectiveAssignee = isAdmin
        ? data.assignedTo
        : currentEmployee?.id;

      if (!effectiveAssignee) {
        toast({
          variant: 'destructive',
          title: 'Cannot create task',
          description: 'Assignee is required to create a task.',
        });
        return;
      }

      const relatedTo: Task['relatedTo'] | undefined = data.relatedLeadId
        ? { type: 'lead', id: data.relatedLeadId }
        : undefined;

      await addTask({
        title: data.title,
        description: data.description || undefined,
        assignedTo: effectiveAssignee,
        assignedBy: currentEmployee?.id,
        dueDate: data.dueDate || undefined,
        priority: data.priority,
        status: data.status,
        relatedTo,
      });

      toast({
        title: 'Task Created',
        description: `Task "${data.title}" has been created successfully.`,
      });

      reset();
      setOpen(false);
      onTaskCreated?.();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          error instanceof Error
            ? error.message
            : 'Failed to create task.',
      });
    }
  };

  const canCreate = isAdmin || !!currentEmployee;

  const safeEmployees = employees.filter(
    (e) => typeof e.id === 'string' && e.id.trim() !== ''
  );

  useEffect(() => {
    if (autoOpen && canCreate && !open && !hasAutoOpened) {
      setOpen(true);
      setHasAutoOpened(true);
    }
  }, [autoOpen, canCreate, open, hasAutoOpened]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button size="sm" disabled={!canCreate}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Task
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Admins can assign tasks to anyone. Others can create tasks for
            themselves.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register('title')} />
            {errors.title && (
              <p className="text-xs text-destructive">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={3} {...register('description')} />
          </div>

          {/* Priority & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Priority</Label>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
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

            <div>
              <Label>Status</Label>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todo">To Do</SelectItem>
                      <SelectItem value="In Progress">
                        In Progress
                      </SelectItem>
                      <SelectItem value="Review">Review</SelectItem>
                      <SelectItem value="Done">Done</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Due Date & Assignee */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Reminder Date</Label>
              <Input type="date" {...register('dueDate')} />
            </div>

            {isAdmin && (
              <div>
                <Label>Assignee</Label>
                <Controller
                  control={control}
                  name="assignedTo"
                  render={({ field }) => (
                    <Select
                      value={field.value ?? NONE_VALUE}
                      onValueChange={(v) =>
                        field.onChange(v === NONE_VALUE ? undefined : v)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select user" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={NONE_VALUE}>
                          None
                        </SelectItem>
                        {safeEmployees.map((emp) => (
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

          {/* Linked Lead */}
          <div>
            <Label>Linked Lead (optional)</Label>
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Task'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
