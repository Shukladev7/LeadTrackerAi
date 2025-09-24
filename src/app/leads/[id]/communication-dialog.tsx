'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Mail, Send } from 'lucide-react';

interface CommunicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'whatsapp' | 'email';
  leadName: string;
  contact: string; // WhatsApp number or email address
  defaultMessage?: string;
}

export function CommunicationDialog({
  open,
  onOpenChange,
  type,
  leadName,
  contact,
  defaultMessage = "Thank you for contacting us. We appreciate your interest and will get back to you soon."
}: CommunicationDialogProps) {
  const [message, setMessage] = useState(defaultMessage);
  const { toast } = useToast();

  const handleSend = () => {
    if (!message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    if (type === 'whatsapp') {
      openWhatsApp();
    } else {
      openEmail();
    }

    onOpenChange(false);
    setMessage(defaultMessage); // Reset message for next time
  };

  const openWhatsApp = () => {
    // Clean the phone number (remove any non-digit characters except +)
    const cleanNumber = contact.replace(/[^\d+]/g, '');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "WhatsApp Opened",
      description: `Opening WhatsApp to send message to ${leadName}`,
      variant: "default",
    });
  };

  const openEmail = () => {
    // Create email subject
    const subject = encodeURIComponent(`Follow-up from LeadTracker`);
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create mailto URL
    const emailUrl = `mailto:${contact}?subject=${subject}&body=${encodedMessage}`;
    
    // Open email client
    window.location.href = emailUrl;
    
    toast({
      title: "Email Client Opened",
      description: `Opening email client to send message to ${leadName}`,
      variant: "default",
    });
  };

  const Icon = type === 'whatsapp' ? MessageSquare : Mail;
  const title = type === 'whatsapp' ? 'Send WhatsApp Message' : 'Send Email';
  const description = type === 'whatsapp' 
    ? `Send a WhatsApp message to ${leadName} (${contact})`
    : `Send an email to ${leadName} (${contact})`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              You can customize this message before sending.
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSend} className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Send {type === 'whatsapp' ? 'WhatsApp' : 'Email'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
