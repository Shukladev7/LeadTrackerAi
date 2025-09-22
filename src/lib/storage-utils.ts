// Base64 PDF storage utilities for Firebase Spark plan compatibility
// Generate UUID without external dependency
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export interface UploadResult {
  url: string; // Base64 data URL
  path: string; // Unique identifier
  fileName: string;
  base64Data: string; // The actual base64 string
}

/**
 * Convert PDF file to Base64 for storage in Firestore
 * @param file - The PDF file to convert
 * @param folder - The folder identifier (e.g., 'catalogs')
 * @returns Promise with upload result containing Base64 data
 */
export async function uploadPDF(file: File, folder: string = 'catalogs'): Promise<UploadResult> {
  // Validate file type
  if (file.type !== 'application/pdf') {
    throw new Error('Only PDF files are allowed');
  }

  // Validate file size (5MB limit for Base64 storage)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes (reduced for Base64 efficiency)
  if (file.size > maxSize) {
    throw new Error('File size must be less than 5MB for Base64 storage');
  }

  // Generate unique identifier
  const uniqueId = generateUUID();
  const filePath = `${folder}/${uniqueId}`;

  try {
    // Convert file to Base64
    const base64Data = await fileToBase64(file);
    const dataUrl = `data:application/pdf;base64,${base64Data}`;

    return {
      url: dataUrl,
      path: filePath,
      fileName: file.name,
      base64Data: base64Data
    };
  } catch (error) {
    console.error('Error converting PDF to Base64:', error);
    throw new Error('Failed to process PDF file');
  }
}

/**
 * Convert file to Base64 string
 * @param file - The file to convert
 * @returns Promise with Base64 string
 */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix to get just the Base64 string
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Delete a PDF (no-op for Base64 storage as it's stored in Firestore)
 * @param filePath - The path identifier of the file
 */
export async function deletePDF(filePath: string): Promise<void> {
  // For Base64 storage, deletion is handled at the document level
  // This function is kept for API compatibility
  console.log(`PDF with path ${filePath} will be deleted when the document is updated`);
}

/**
 * Validate PDF file before upload
 * @param file - The file to validate
 * @returns boolean indicating if file is valid
 */
export function validatePDFFile(file: File): { isValid: boolean; error?: string } {
  // Check file type
  if (file.type !== 'application/pdf') {
    return { isValid: false, error: 'Only PDF files are allowed' };
  }

  // Check file size (5MB limit for Base64 storage)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    return { isValid: false, error: 'File size must be less than 5MB for Base64 storage' };
  }

  // Check file name length
  if (file.name.length > 100) {
    return { isValid: false, error: 'File name is too long' };
  }

  return { isValid: true };
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
