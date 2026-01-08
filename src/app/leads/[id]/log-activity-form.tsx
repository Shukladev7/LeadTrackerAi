'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addActivityToLead } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const activitySchema = z.object({
  type: z.enum(['Meeting', 'Call', 'Email', 'Revision Request', 'Proposal Sent']),
  notes: z.string().optional(),
  summary: z.string().optional(),
});

type ActivityFormData = z.infer<typeof activitySchema>;
type LogActivityType = 'Meeting' | 'Call' | 'Email' | 'Revision Request' | 'Proposal Sent';

const activityTypes: LogActivityType[] = ['Meeting', 'Call', 'Email', 'Revision Request', 'Proposal Sent'];

export default function LogActivityForm({ leadId }: { leadId: string }) {
  const { toast } = useToast();
  const [isSummarizing, setIsSummarizing] = useState(false);
  const { register, handleSubmit, reset, control, setValue, watch, formState: { errors, isSubmitting } } = useForm<ActivityFormData>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      type: 'Meeting',
    },
  });

  const notes = watch('notes');
  const summary = watch('summary');

  const handleSummarize = () => {
    if (!notes) return;
    setIsSummarizing(true);
    try {
      const trimmed = notes.length > 300 ? `${notes.slice(0, 300)}...` : notes;
      setValue('summary', trimmed);
      toast({
        title: 'Summary Added',
        description: 'A short summary has been added based on your notes.',
      });
    } finally {
      setIsSummarizing(false);
    }
  };

  const onSubmit = async (data: ActivityFormData) => {
    try {
      const notesToSave = data.summary || data.notes || '';
      await addActivityToLead(leadId, {
        type: data.type,
        notes: notesToSave,
      } as any);

      toast({
        title: 'Activity Logged',
        description: `Your ${data.type} activity has been saved.`,
      });
      reset({ notes: '', summary: '', type: 'Meeting' });
    } catch (error: any) {
      console.error('Error logging activity', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error?.message || 'Failed to log activity. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Select onValueChange={(value: LogActivityType) => setValue('type', value)} defaultValue="Meeting">
          <SelectTrigger>
            <SelectValue placeholder="Select activity type" />
          </SelectTrigger>
          <SelectContent>
            {activityTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Textarea
          placeholder="Add notes from your meeting, call, or email (optional)..."
          rows={6}
          {...register('notes')}
          className={errors.notes ? 'border-destructive' : ''}
        />
        {errors.notes && <p className="text-xs text-destructive mt-1">{errors.notes.message}</p>}
      </div>
      
      {summary && (
        <Card className="bg-secondary/50">
            <CardHeader className="p-4">
                <CardTitle className="text-sm">AI Generated Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-sm text-secondary-foreground">{summary}</p>
            </CardContent>
        </Card>
      )}

      <div className="flex justify-between items-center">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleSummarize}
          disabled={isSummarizing || !notes || notes.length < 10}
        >
          {isSummarizing ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Summarize with AI
        </Button>
        <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging...' : 'Log Activity'}
        </Button>
      </div>
    </form>
  );
}
