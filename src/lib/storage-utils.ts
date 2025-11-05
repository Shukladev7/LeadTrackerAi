// Firebase Storage utilities for PDF file management
// Generate UUID without external dependency
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export interface UploadResult {
  url: string; // Firebase Storage download URL
  path: string; // Storage path
  fileName: string;
}

/**
 * Legacy function - now redirects to Firebase Storage upload
 * @deprecated Use uploadPDFToStorage instead
 */
export async function uploadPDF(file: File, folder: string = 'catalogs'): Promise<UploadResult> {
  console.warn('uploadPDF is deprecated, use uploadPDFToStorage instead');
  return uploadPDFToStorage(file, folder);
}

// Firebase Storage upload (preferred to avoid large Server Actions bodies)
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/lib/firebase';

export async function uploadPDFToStorage(
  file: File,
  folder: string = 'catalogs',
  onProgress?: (percent: number) => void
): Promise<UploadResult> {
  if (!isPdfFile(file)) {
    throw new Error('Only PDF files are allowed');
  }
  // Allow up to 10MB for Storage uploads
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error('File size must be less than 10MB');
  }

  const uniqueId = generateUUID();
  const filePath = `${folder}/${uniqueId}-${encodeURIComponent(file.name)}`;
  const storageRef = ref(storage, filePath);
  const task = uploadBytesResumable(storageRef, file, { contentType: 'application/pdf' });

  const url = await new Promise<string>((resolve, reject) => {
    task.on('state_changed', (snapshot) => {
      if (onProgress) {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        onProgress(percent);
      }
    }, (error) => reject(error), async () => {
      const downloadUrl = await getDownloadURL(task.snapshot.ref);
      resolve(downloadUrl);
    });
  });

  return {
    url,
    path: filePath,
    fileName: file.name,
  };
}

/**
 * Delete a PDF file from Firebase Storage
 * @param filePath - The storage path of the file to delete
 */
export async function deletePDFFromStorage(filePath: string): Promise<void> {
  try {
    const storageRef = ref(storage, filePath);
    await deleteObject(storageRef);
    console.log(`Successfully deleted file: ${filePath}`);
  } catch (error) {
    console.error('Error deleting file from storage:', error);
    throw new Error(`Failed to delete file: ${filePath}`);
  }
}

/**
 * Legacy function - now redirects to Firebase Storage delete
 * @deprecated Use deletePDFFromStorage instead
 */
export async function deletePDF(filePath: string): Promise<void> {
  console.warn('deletePDF is deprecated, use deletePDFFromStorage instead');
  return deletePDFFromStorage(filePath);
}

/**
 * Validate PDF file before upload
 * @param file - The file to validate
 * @returns boolean indicating if file is valid
 */
export function validatePDFFile(file: File): { isValid: boolean; error?: string } {
  // Check file type (support cases where MIME may be generic but name ends with .pdf)
  if (!isPdfFile(file)) {
    return { isValid: false, error: 'Only PDF files are allowed' };
  }

  // Check file size (10MB limit for Firebase Storage)
  const maxSize = 10 * 1024 * 1024; // 10MB in bytes
  if (file.size > maxSize) {
    return { isValid: false, error: 'File size must be less than 10MB' };
  }

  // Check file name length
  if (file.name.length > 100) {
    return { isValid: false, error: 'File name is too long' };
  }

  return { isValid: true };
}

// Heuristic to identify PDFs when the MIME type can be unreliable
function isPdfFile(file: File): boolean {
  const type = (file.type || '').toLowerCase();
  const name = (file.name || '').toLowerCase();
  if (type === 'application/pdf' || type === 'application/x-pdf') return true;
  // Some environments provide a generic type for downloads/uploads
  if ((type === '' || type === 'application/octet-stream') && name.endsWith('.pdf')) return true;
  return false;
}

/**
 * Format file size for display
 * @param bytes - File size in bytes
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Upload an image to Firebase Storage
 * @param file - The image file to upload
 * @param folder - The folder in Firebase Storage (default: 'products')
 * @param onProgress - Optional callback for upload progress
 * @returns Upload result with URL and metadata
 */
export async function uploadImageToStorage(
  file: File,
  folder: string = 'products',
  onProgress?: (percent: number) => void
): Promise<UploadResult> {
  if (!isImageFile(file)) {
    throw new Error('Only image files are allowed');
  }
  // Allow up to 10MB for image uploads
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error('Image size must be less than 10MB');
  }

  const uniqueId = generateUUID();
  const filePath = `${folder}/${uniqueId}-${encodeURIComponent(file.name)}`;
  const storageRef = ref(storage, filePath);
  const task = uploadBytesResumable(storageRef, file, { contentType: file.type });

  const url = await new Promise<string>((resolve, reject) => {
    task.on('state_changed', (snapshot) => {
      if (onProgress) {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        onProgress(percent);
      }
    }, (error) => reject(error), async () => {
      const downloadUrl = await getDownloadURL(task.snapshot.ref);
      resolve(downloadUrl);
    });
  });

  return {
    url,
    path: filePath,
    fileName: file.name,
  };
}

/**
 * Delete an image file from Firebase Storage
 * @param filePath - The storage path of the file to delete
 */
export async function deleteImageFromStorage(filePath: string): Promise<void> {
  try {
    const storageRef = ref(storage, filePath);
    await deleteObject(storageRef);
    console.log(`Successfully deleted image: ${filePath}`);
  } catch (error) {
    console.error('Error deleting image from storage:', error);
    throw new Error(`Failed to delete image: ${filePath}`);
  }
}

/**
 * Validate image file before upload
 * @param file - The file to validate
 * @returns validation result
 */
export function validateImageFile(file: File): { isValid: boolean; error?: string } {
  if (!isImageFile(file)) {
    return { isValid: false, error: 'Only image files (JPG, PNG, GIF, WebP) are allowed' };
  }

  // Check file size (10MB limit)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return { isValid: false, error: 'Image size must be less than 10MB' };
  }

  // Check file name length
  if (file.name.length > 100) {
    return { isValid: false, error: 'File name is too long' };
  }

  return { isValid: true };
}

// Helper to identify image files
function isImageFile(file: File): boolean {
  const type = (file.type || '').toLowerCase();
  const name = (file.name || '').toLowerCase();
  
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  if (validTypes.includes(type)) return true;
  
  // Fallback to extension check
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  if ((type === '' || type === 'application/octet-stream') && 
      validExtensions.some(ext => name.endsWith(ext))) {
    return true;
  }
  
  return false;
}
