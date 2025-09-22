'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { logActivity, getSummaryForNotes } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { ActivityType } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const activitySchema = z.object({
  type: z.enum(['Meeting', 'Call', 'Email', 'Revision Request', 'Proposal Sent']),
  notes: z.string().min(10, { message: 'Notes must be at least 10 characters.' }),
  summary: z.string().optional(),
});

type ActivityFormData = z.infer<typeof activitySchema>;

const activityTypes: ActivityType[] = ['Meeting', 'Call', 'Email', 'Revision Request', 'Proposal Sent'];

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

  const handleSummarize = async () => {
    setIsSummarizing(true);
    const result = await getSummaryForNotes(notes);
    if (result.summary) {
      setValue('summary', result.summary);
      toast({
        title: 'Summary Generated',
        description: 'AI-powered summary has been added to the activity.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Summarization Failed',
        description: result.error || 'An unknown error occurred.',
      });
    }
    setIsSummarizing(false);
  };

  const onSubmit = async (data: ActivityFormData) => {
    const formData = new FormData();
    formData.append('leadId', leadId);
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value as string);
      }
    });

    const result = await logActivity(formData);
    if (result.message === 'Successfully logged activity.') {
      toast({
        title: 'Activity Logged',
        description: `Your ${data.type} activity has been saved.`,
      });
      reset({ notes: '', summary: '', type: 'Meeting' });
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message,
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Select onValueChange={(value: ActivityType) => setValue('type', value)} defaultValue="Meeting">
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
          placeholder="Log notes from your meeting, call, or email..."
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
          disabled={isSummarizing || !notes || notes.length < 50}
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
