'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail } from 'lucide-react';
import { QuotationCommunicationDialog } from './quotation-communication-dialog';
import { Quotation, Lead, PopulatedQuotationProduct } from '@/lib/business-types';

interface QuotationCommunicationButtonsProps {
  quotation: Quotation;
  lead: Lead;
  products: PopulatedQuotationProduct[];
  quotationRef: React.RefObject<HTMLDivElement>;
}

export function QuotationCommunicationButtons({ 
  quotation, 
  lead, 
  products, 
  quotationRef 
}: QuotationCommunicationButtonsProps) {
  const [whatsappDialogOpen, setWhatsappDialogOpen] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);

  const hasWhatsApp = !!(lead.whatsappNumber || lead.phone);

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
        Email PDF
      </Button>

      {/* WhatsApp Button - show if WhatsApp number or phone exists */}
      {hasWhatsApp && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setWhatsappDialogOpen(true)}
          className="flex items-center gap-2 text-green-600 border-green-200 hover:bg-green-50"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp PDF
        </Button>
      )}

      {/* Email Dialog */}
      <QuotationCommunicationDialog
        open={emailDialogOpen}
        onOpenChange={setEmailDialogOpen}
        type="email"
        quotation={quotation}
        lead={lead}
        products={products}
        quotationRef={quotationRef}
      />

      {/* WhatsApp Dialog */}
      {hasWhatsApp && (
        <QuotationCommunicationDialog
          open={whatsappDialogOpen}
          onOpenChange={setWhatsappDialogOpen}
          type="whatsapp"
          quotation={quotation}
          lead={lead}
          products={products}
          quotationRef={quotationRef}
        />
      )}
    </div>
  );
}
