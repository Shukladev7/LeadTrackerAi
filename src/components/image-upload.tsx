'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Upload, X, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { uploadImageToStorage, validateImageFile, UploadResult } from '@/lib/storage-utils';
import Image from 'next/image';

interface ImageUploadProps {
  onUploadComplete: (result: UploadResult) => void;
  onUploadError: (error: string) => void;
  onFileSelect?: (file: File) => void;
  currentImage?: {
    url: string;
    fileName: string;
    filePath?: string;
    path?: string;
  } | null;
  onRemove?: () => void;
  disabled?: boolean;
  label?: string;
  description?: string;
}

export function ImageUpload({
  onUploadComplete,
  onUploadError,
  onFileSelect,
  currentImage,
  onRemove,
  disabled = false,
  label = "Product Image",
  description = "Upload an image (max 5MB, JPG/PNG/GIF/WebP)"
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    // Validate file
    const validation = validateImageFile(file);
    if (!validation.isValid) {
      onUploadError(validation.error || 'Invalid file');
      return;
    }

    // Call onFileSelect callback to store original file
    if (onFileSelect) {
      onFileSelect(file);
    }

    // Create local preview
    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const result = await uploadImageToStorage(file, 'products', (percent) => {
        setUploadProgress(percent);
      });
      
      setUploadProgress(100);
      
      console.log('Image upload successful, result:', result);
      
      setTimeout(() => {
        console.log('Calling onUploadComplete with result:', result);
        onUploadComplete(result);
        setIsUploading(false);
        setUploadProgress(0);
        URL.revokeObjectURL(localPreview);
      }, 500);

    } catch (error) {
      setIsUploading(false);
      setUploadProgress(0);
      setPreviewUrl(null);
      URL.revokeObjectURL(localPreview);
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
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (onRemove) {
      onRemove();
    }
  };

  const displayUrl = previewUrl || currentImage?.url;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {currentImage || previewUrl ? (
        // Show current/preview image
        <div className="space-y-2">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-gray-50">
            {displayUrl && (
              <Image
                src={displayUrl}
                alt={currentImage?.fileName || 'Product image'}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            )}
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50 border-green-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <ImageIcon className="h-4 w-4 text-gray-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {currentImage?.fileName || 'Image uploaded'}
                </p>
                <p className="text-xs text-gray-500">Image uploaded successfully</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
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
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              onChange={handleFileInputChange}
              className="hidden"
              disabled={disabled}
            />
            
            {isUploading ? (
              <div className="space-y-2">
                <Upload className="h-8 w-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm font-medium">Uploading image...</p>
                <Progress value={uploadProgress} className="w-full max-w-xs mx-auto" />
                <p className="text-xs text-gray-500">{uploadProgress}% complete</p>
              </div>
            ) : (
              <div className="space-y-2">
                <ImageIcon className="h-8 w-8 mx-auto text-gray-400" />
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
