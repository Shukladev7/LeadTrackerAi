'use client';

import {
  Briefcase,
  Mails,
  Phone,
  FileText,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { Activity, ActivityType } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

const activityIcons: Record<ActivityType, React.ElementType> = {
  Meeting: Briefcase,
  Call: Phone,
  Email: Mails,
  'Revision Request': FileText,
  'Proposal Sent': MessageSquare,
};

function FormattedDate({ dateString }: { dateString: string }) {
    const [formattedDate, setFormattedDate] = useState('');
  
    useEffect(() => {
      setFormattedDate(format(parseISO(dateString), 'PPP p'));
    }, [dateString]);
  
    if (!formattedDate) {
      return null;
    }
  
    return <>{formattedDate}</>;
}


export default function ActivityTimeline({ activities }: { activities: Activity[] }) {
  if (activities.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-10">
        No activities logged for this lead yet.
      </div>
    );
  }

  return (
    <div className="relative space-y-6">
      <div className="absolute left-5 top-5 -bottom-5 w-0.5 bg-border" aria-hidden="true"></div>
      {activities.map((activity, index) => {
        const Icon = activityIcons[activity.type] || MessageSquare;
        const isLast = index === activities.length - 1;

        return (
          <div key={activity.id} className="relative flex items-start space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary z-10">
              <Icon className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div className="flex-1 pt-1.5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground">{activity.type}</p>
                <time className="text-xs text-muted-foreground">
                  <FormattedDate dateString={activity.date} />
                </time>
              </div>
              <div className="mt-2 text-sm text-muted-foreground space-y-2">
                <p className="whitespace-pre-wrap">{activity.notes}</p>
                {activity.summary && (
                   <Card className="bg-background">
                     <CardHeader className="p-4">
                       <CardTitle className="text-sm flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <Badge variant="secondary">AI Summary</Badge>
                       </CardTitle>
                     </CardHeader>
                     <CardContent className="p-4 pt-0 text-sm">
                       <p className="italic">{activity.summary}</p>
                     </CardContent>
                   </Card>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
