'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PDFViewerProps {
  pdfData: {
    url: string; // Base64 data URL
    fileName: string;
    filePath: string;
    uploadedAt: string;
    base64Data: string;
  };
  trigger?: React.ReactNode;
}

export function PDFViewer({ pdfData, trigger }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfData.url;
    link.download = pdfData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>${pdfData.fileName}</title>
            <style>
              body { margin: 0; padding: 0; }
              iframe { width: 100vw; height: 100vh; border: none; }
            </style>
          </head>
          <body>
            <iframe src="${pdfData.url}" type="application/pdf"></iframe>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatFileSize = (base64String: string) => {
    // Approximate file size from base64 string (base64 is ~33% larger than original)
    const sizeInBytes = (base64String.length * 3) / 4;
    if (sizeInBytes < 1024) return `${Math.round(sizeInBytes)} B`;
    if (sizeInBytes < 1024 * 1024) return `${Math.round(sizeInBytes / 1024)} KB`;
    return `${Math.round(sizeInBytes / (1024 * 1024))} MB`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            View PDF
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {pdfData.fileName}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-4">
            <span>Uploaded: {formatDate(pdfData.uploadedAt)}</span>
            <Badge variant="secondary">{formatFileSize(pdfData.base64Data)}</Badge>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex gap-2 mb-4">
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button onClick={handleOpenInNewTab} variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Open in New Tab
          </Button>
        </div>

        <div className="flex-1 min-h-0">
          <iframe
            src={pdfData.url}
            className="w-full h-full border rounded-md"
            title={pdfData.fileName}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
