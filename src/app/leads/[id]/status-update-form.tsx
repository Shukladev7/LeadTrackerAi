'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ALL_STATUSES } from '@/lib/types';
import { updateLeadStatusAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth-context';
import { Loader2 } from 'lucide-react';

interface StatusUpdateFormProps {
    leadId: string;
    currentStatus: string;
    leadName: string;
}

export function StatusUpdateForm({ leadId, currentStatus, leadName }: StatusUpdateFormProps) {
    const [selectedStatus, setSelectedStatus] = useState(currentStatus);
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const { user } = useAuth();

    const handleStatusUpdate = () => {
        if (selectedStatus === currentStatus) {
            toast({
                title: "No Change",
                description: "Status is already set to this value.",
                variant: "default",
            });
            return;
        }

        startTransition(async () => {
            try {
                const userId = user?.uid;
                const userName = user?.displayName || user?.email || undefined;
                const result = await updateLeadStatusAction(leadId, selectedStatus as any, userId, userName);
                
                if (result?.message) {
                    // Check if it's an error message
                    if (result.message.includes('Error') || result.message.includes('Failed')) {
                        toast({
                            title: "Update Failed",
                            description: result.message,
                            variant: "destructive",
                        });
                    } else {
                        toast({
                            title: "Status Updated",
                            description: `${leadName}'s status has been updated to "${selectedStatus}".`,
                            variant: "default",
                        });
                    }
                } else {
                    toast({
                        title: "Status Updated",
                        description: `${leadName}'s status has been updated to "${selectedStatus}".`,
                        variant: "default",
                    });
                }
            } catch (error) {
                toast({
                    title: "Update Failed",
                    description: "An error occurred while updating the status. Please try again.",
                    variant: "destructive",
                });
                console.error('Status update error:', error);
            }
        });
    };

    return (
        <div className="flex items-center gap-2">
            <Select 
                value={selectedStatus} 
                onValueChange={setSelectedStatus}
                disabled={isPending}
            >
                <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    {ALL_STATUSES.map(status => (
                        <SelectItem key={status} value={status}>
                            {status}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button 
                onClick={handleStatusUpdate} 
                size="sm" 
                disabled={isPending || selectedStatus === currentStatus}
            >
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                    </>
                ) : (
                    'Update'
                )}
            </Button>
        </div>
    );
}
