'use client';

import {
  Briefcase,
  Mails,
  Phone,
  FileText,
  MessageSquare,
  Sparkles,
  ArrowRightLeft,
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
  WhatsApp: MessageSquare,
  'Revision Request': FileText,
  'Proposal Sent': MessageSquare,
  'Status Change': ArrowRightLeft,
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


// Helper function to parse status change information from notes
function parseStatusChange(notes?: string) {
  if (!notes) return null;
  const match = notes.match(/Status changed from "([^"]+)" to "([^"]+)" by (.+)/);
  if (match) {
    return {
      previousStatus: match[1],
      newStatus: match[2],
      changedBy: match[3]
    };
  }
  // Fallback for older format without user info
  const simpleMatch = notes.match(/Status changed from "([^"]+)" to "([^"]+)"/);
  if (simpleMatch) {
    return {
      previousStatus: simpleMatch[1],
      newStatus: simpleMatch[2],
      changedBy: 'Unknown User'
    };
  }
  return null;
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
        const isStatusChange = activity.type === 'Status Change';
        const isWhatsApp = activity.type === 'WhatsApp';
        const isEmail = activity.type === 'Email';
        const statusChange = isStatusChange ? parseStatusChange(activity.notes) : null;

        return (
          <div key={activity.id} className="relative flex items-start space-x-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full z-10 ${
              isStatusChange ? 'bg-blue-100 text-blue-600' : 
              isWhatsApp ? 'bg-green-100 text-green-600' :
              isEmail ? 'bg-purple-100 text-purple-600' :
              'bg-secondary text-secondary-foreground'
            }`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 pt-1.5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground">{activity.type}</p>
                <time className="text-xs text-muted-foreground">
                  <FormattedDate dateString={activity.date} />
                </time>
              </div>
              <div className="mt-2 text-sm text-muted-foreground space-y-2">
                {isStatusChange && statusChange ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {statusChange.previousStatus}
                      </Badge>
                      <ArrowRightLeft className="h-3 w-3" />
                      <Badge variant="default" className="text-xs">
                        {statusChange.newStatus}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Changed by <span className="font-medium">{statusChange.changedBy}</span>
                    </p>
                  </div>
                ) : (
                  activity.notes ? (
                    <p className="whitespace-pre-wrap">{activity.notes}</p>
                  ) : (
                    <p className="text-muted-foreground italic">No notes provided</p>
                  )
                )}
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
