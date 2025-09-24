'use client';

import { useState, useRef } from 'react';

function PdfPreviewModal({ pdfUrl, onClose }: { pdfUrl: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2">
      <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">PDF Preview</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-grow">
          <iframe src={pdfUrl} className="w-full h-full" title="PDF Preview" />
        </div>
      </div>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';
import { uploadPDF, validatePDFFile, formatFileSize, UploadResult } from '@/lib/storage-utils';

interface PDFUploadProps {
  onUploadComplete: (result: UploadResult) => void;
  onUploadError: (error: string) => void;
  currentPdf?: {
    url: string;
    fileName: string;
    filePath?: string;
    path?: string;
    base64Data?: string;
  } | null;
  onRemove?: () => void;
  disabled?: boolean;
  label?: string;
  description?: string;
}

export function PDFUpload({
  onUploadComplete,
  onUploadError,
  currentPdf,
  onRemove,
  disabled = false,
  label = "Catalog PDF",
  description = "Upload a PDF file (max 5MB)"
}: PDFUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    // Validate file
    const validation = validatePDFFile(file);
    if (!validation.isValid) {
      onUploadError(validation.error || 'Invalid file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 200);

      const result = await uploadPDF(file, 'catalogs');
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      setTimeout(() => {
        onUploadComplete(result);
        setIsUploading(false);
        setUploadProgress(0);
      }, 500);

    } catch (error) {
      setIsUploading(false);
      setUploadProgress(0);
      onUploadError(error instanceof Error ? error.message : 'Upload failed');
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className="space-y-2">
      {isModalOpen && currentPdf && (
        <PdfPreviewModal pdfUrl={currentPdf.url} onClose={() => setIsModalOpen(false)} />
      )}
      <Label>{label}</Label>
      
      {currentPdf ? (
        // Show current PDF
        <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <File className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">{currentPdf.fileName}</p>
              <p className="text-xs text-gray-500">PDF uploaded successfully</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsModalOpen(true)}
              disabled={disabled}
            >
              View
            </Button>
            {onRemove && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleRemove}
                disabled={disabled}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      ) : (
        // Show upload area
        <>
          <div
            className={`
              relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
              ${dragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-gray-400'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={!disabled ? openFileDialog : undefined}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileInputChange}
              className="hidden"
              disabled={disabled}
            />
            
            {isUploading ? (
              <div className="space-y-2">
                <Upload className="h-8 w-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm font-medium">Uploading PDF...</p>
                <Progress value={uploadProgress} className="w-full max-w-xs mx-auto" />
                <p className="text-xs text-gray-500">{uploadProgress}% complete</p>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
