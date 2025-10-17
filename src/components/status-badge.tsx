import { Badge } from '@/components/ui/badge';
import type { LeadStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

type StatusBadgeProps = {
  status: LeadStatus;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusStyles: Record<LeadStatus, string> = {
    'New': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    'In Discussion': 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
    'Negotiation': 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
    'Closed - Won': 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    'Closed - Lost': 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  };

  return (
    <Badge
      variant="outline"
      className={cn('font-medium', statusStyles[status], className)}
    >
      {status}
    </Badge>
  );
}
