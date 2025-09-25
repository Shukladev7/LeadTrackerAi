'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail } from 'lucide-react';
import { CommunicationDialog } from './communication-dialog';

interface CommunicationButtonsProps {
  leadId: string;
  leadName: string;
  email: string;
  whatsappNumber?: string;
}

export function CommunicationButtons({ leadId, leadName, email, whatsappNumber }: CommunicationButtonsProps) {
  const [whatsappDialogOpen, setWhatsappDialogOpen] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);

  return (
    <div className="flex gap-2">
      {/* Email Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setEmailDialogOpen(true)}
        className="flex items-center gap-2"
      >
        <Mail className="h-4 w-4" />
        Email
      </Button>

      {/* WhatsApp Button - only show if WhatsApp number exists */}
      {whatsappNumber && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setWhatsappDialogOpen(true)}
          className="flex items-center gap-2 text-green-600 border-green-200 hover:bg-green-50"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp
        </Button>
      )}

      {/* Email Dialog */}
      <CommunicationDialog
        open={emailDialogOpen}
        onOpenChange={setEmailDialogOpen}
        type="email"
        leadId={leadId}
        leadName={leadName}
        contact={email}
      />

      {/* WhatsApp Dialog */}
      {whatsappNumber && (
        <CommunicationDialog
          open={whatsappDialogOpen}
          onOpenChange={setWhatsappDialogOpen}
          type="whatsapp"
          leadId={leadId}
          leadName={leadName}
          contact={whatsappNumber}
        />
      )}
    </div>
  );
}
