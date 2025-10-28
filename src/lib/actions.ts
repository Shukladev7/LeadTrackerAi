
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { summarizeMeetingNotes } from '@/ai/flows/summarize-meeting-notes';
import { addLead as dbAddLead, addActivityToLead, updateLeadStatus as updateStatus, addProduct as dbAddProduct, addLeadSource as dbAddLeadSource, deleteLeadSource as dbDeleteLeadSource, addProductModel as dbAddProductModel, deleteProductModel as dbDeleteProductModel, getProductModels, updateLead as dbUpdateLead, getLeadById as dbGetLeadById, deleteLead as dbDeleteLead, addQuotation as dbAddQuotation, updateQuotation as dbUpdateQuotation, deleteQuotation as dbDeleteQuotation, addQuotationTemplate as dbAddQuotationTemplate, updateProduct as dbUpdateProduct, deleteProduct as dbDeleteProduct, addEmployee as dbAddEmployee, deleteEmployee as dbDeleteEmployee, updateEmployee as dbUpdateEmployee, getEmployeeByEmail, getEmployeeRoles, addEmployeeRole as dbAddEmployeeRole, deleteEmployeeRole as dbDeleteEmployeeRole, getDepartments, addDepartment as dbAddDepartment, deleteDepartment as dbDeleteDepartment, updateQuotationTemplate as dbUpdateQuotationTemplate, deleteQuotationTemplate as dbDeleteQuotationTemplate, getLeadsCount, getQuotationsCount, getProductsCount, getEmployeesCount, getLeadsCountByStatus, getQuotationsCountByStatus, getActiveProductsCount, getActiveEmployeesCount, updateProductModel as dbUpdateProductModel } from './data';
import { addModelForProduct as dbAddModelForProduct, getModelsByProduct as dbGetModelsByProduct, getActiveModelsByProduct as dbGetActiveModelsByProduct } from './firestore-data-service';
import { deletePDFFromStorage, deleteImageFromStorage, uploadImageToStorage } from './storage-utils';
import type { Lead, LeadStatus, LeadProduct, UpdatableLeadData, Product, NewQuotationTemplate, Quotation, NewEmployee, QuotationTemplate } from './types';
import type { Employee } from './business-types';
import { getProducts } from './data';

// Initialize Firebase Admin SDK
function initializeFirebaseAdmin() {
  if (getApps().length === 0) {
    // Check if all required environment variables are present
    const requiredEnvVars = [
      'FIREBASE_PROJECT_ID',
      'FIREBASE_PRIVATE_KEY',
      'FIREBASE_CLIENT_EMAIL'
    ];
    
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      throw new Error(`Missing required Firebase environment variables: ${missingVars.join(', ')}`);
    }

    const serviceAccount = {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID!,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL!,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`
    };

    initializeApp({
      credential: cert(serviceAccount as any),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
}

const LeadProductSchema = z.object({
    productId: z.string().min(1, 'Product must be selected'),
    quantity: z.coerce.number().min(1),
    rate: z.coerce.number().min(0),
    selectedSku: z.string().optional(),
    selectedModelId: z.string().optional(),
});

const CreateLeadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number seems too short'),
  whatsappNumber: z.string().optional(),
  client_address: z.string().optional(),
  client_gst_no: z.string().optional(),
  status: z.enum(['New', 'In Discussion', 'Negotiation', 'Closed - Won', 'Closed - Lost']),
  source: z.string().min(1, 'Please select a lead source'),
  notes: z.string().optional(),
  products: z.array(LeadProductSchema).optional(),
  createdBy: z.string().min(1, 'Created by field is required'),
});

export async function createLead(formData: FormData) {
  const productsJSON = formData.get('products');
  const products = productsJSON ? JSON.parse(productsJSON as string) : [];

  const validatedFields = CreateLeadSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    whatsappNumber: formData.get('whatsappNumber'),
    client_address: formData.get('client_address'),
    client_gst_no: formData.get('client_gst_no'),
    status: formData.get('status'),
    source: formData.get('source'),
    notes: formData.get('notes'),
    products: products,
    createdBy: formData.get('createdBy'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to create lead.',
    };
  }
  
  let newLeadId: string | undefined;
  try {
    const leadData = {
      ...validatedFields.data,
      products: validatedFields.data.products || []
    };
    const newLead = await dbAddLead(leadData);
    newLeadId = newLead.id;
  } catch (error) {
    return { message: 'Database Error: Failed to Create Lead.' };
  }

  revalidatePath('/leads');
  revalidatePath('/');
  if (newLeadId) {
    revalidatePath(`/leads/${newLeadId}`);
  }
  return { message: 'Successfully created lead.' };
}

const UpdateLeadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number seems too short'),
  whatsappNumber: z.string().optional(),
  client_address: z.string().optional(),
  client_gst_no: z.string().optional(),
  status: z.enum(['New', 'In Discussion', 'Negotiation', 'Closed - Won', 'Closed - Lost']),
  source: z.string().min(1, 'Please select a lead source'),
  products: z.array(LeadProductSchema).optional(),
});

function generateChangeNotes(oldLead: Lead, newLeadData: UpdatableLeadData, allProducts: Product[]): string {
    const changes: string[] = [];

    if (oldLead.name !== newLeadData.name) {
        changes.push(`Name changed from "${oldLead.name}" to "${newLeadData.name}".`);
    }
    if (oldLead.company !== newLeadData.company) {
        changes.push(`Company changed from "${oldLead.company}" to "${newLeadData.company}".`);
    }
    if (oldLead.email !== newLeadData.email) {
        changes.push(`Email changed from "${oldLead.email}" to "${newLeadData.email}".`);
    }
    if (oldLead.phone !== newLeadData.phone) {
        changes.push(`Phone changed from "${oldLead.phone}" to "${newLeadData.phone}".`);
    }
    if (oldLead.whatsappNumber !== newLeadData.whatsappNumber) {
        changes.push(`WhatsApp Number changed from "${oldLead.whatsappNumber || 'N/A'}" to "${newLeadData.whatsappNumber || 'N/A'}".`);
    }
    if (oldLead.client_address !== newLeadData.client_address) {
        changes.push(`Client Address changed from "${oldLead.client_address || 'N/A'}" to "${newLeadData.client_address || 'N/A'}".`);
    }
    if (oldLead.client_gst_no !== newLeadData.client_gst_no) {
        changes.push(`Client GST Number changed from "${oldLead.client_gst_no || 'N/A'}" to "${newLeadData.client_gst_no || 'N/A'}".`);
    }
    if (oldLead.status !== newLeadData.status) {
        changes.push(`Status changed from "${oldLead.status}" to "${newLeadData.status}".`);
    }
    if (oldLead.source !== newLeadData.source) {
        changes.push(`Source changed from "${oldLead.source}" to "${newLeadData.source}".`);
    }

    const oldProducts = oldLead.products || [];
    const newProducts = newLeadData.products || [];
    if (JSON.stringify(oldProducts) !== JSON.stringify(newProducts)) {
        const getProductName = (productId: string) => allProducts.find(p => p.id === productId)?.name || productId;
        
        const formatProduct = (p: LeadProduct) => `${getProductName(p.productId)} (Qty: ${p.quantity}, Rate: ${p.rate}, SKU: ${p.selectedSku || 'N/A'}, Model: ${p.selectedModelId || 'N/A'})`;

        const oldProductStr = oldProducts.map(formatProduct).join(', ') || 'None';
        const newProductStr = newProducts.map(formatProduct).join(', ') || 'None';

        changes.push(`Interested products updated.\n- Old: ${oldProductStr}\n- New: ${newProductStr}`);
    }

    if (changes.length === 0) {
        return 'No changes were made to the lead details.';
    }

    return 'Lead details were updated:\n' + changes.map(c => `- ${c}`).join('\n');
}

export async function updateLead(leadId: string, formData: FormData) {
    const [oldLead, allProducts] = await Promise.all([
        dbGetLeadById(leadId),
        getProducts()
    ]);

    if (!oldLead) {
        return { message: 'Error: Lead not found.' };
    }

    const productsJSON = formData.get('products');
    const products = productsJSON ? JSON.parse(productsJSON as string) : [];
  
    const validatedFields = UpdateLeadSchema.safeParse({
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      whatsappNumber: formData.get('whatsappNumber'),
      client_address: formData.get('client_address'),
      client_gst_no: formData.get('client_gst_no'),
      status: formData.get('status'),
      source: formData.get('source'),
      products: products,
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Failed to update lead.',
      };
    }

    const newLeadData = validatedFields.data as UpdatableLeadData;
    const changeNotes = generateChangeNotes(oldLead, newLeadData, allProducts);
  
    try {
        await dbUpdateLead(leadId, newLeadData);
        if (changeNotes !== 'No changes were made to the lead details.') {
            await addActivityToLead(leadId, {
                type: 'Revision Request',
                notes: changeNotes
            });
        }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred';
      return { message: `Database Error: Failed to Update Lead. ${message}` };
    }
  
    revalidatePath('/leads');
    revalidatePath('/');
    revalidatePath(`/leads/${leadId}`);
    return { message: 'Successfully updated lead.' };
}

const ProductSchema = z.object({
    name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
    price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
    gstRate: z.coerce.number().min(0).max(100),
    modelIds: z.array(z.string()).optional(),
    skus: z.array(z.string()).optional(),
    catalogueUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
    cataloguePdf: z.object({
        url: z.string(),
        fileName: z.string(),
        filePath: z.string(),
        uploadedAt: z.string(),
    }).optional(),
    productImage: z.object({
        url: z.string(),
        fileName: z.string(),
        filePath: z.string(),
        uploadedAt: z.string(),
    }).optional(),
});

export async function addProduct(formData: FormData) {
  const skusJSON = formData.get('skus');
  const skus = skusJSON ? JSON.parse(skusJSON as string) : [];
  
  const modelIdsJSON = formData.get('modelIds');
  const modelIds = modelIdsJSON ? JSON.parse(modelIdsJSON as string) : [];
  
  const catalogPdfJSON = formData.get('catalogPdf');
  const catalogPdf = catalogPdfJSON ? JSON.parse(catalogPdfJSON as string) : undefined;
  
  const productImageJSON = formData.get('productImage');
  const productImage = productImageJSON ? JSON.parse(productImageJSON as string) : undefined;
  
  const validatedFields = ProductSchema.safeParse({
    name: formData.get('name'),
    price: formData.get('price'),
    gstRate: formData.get('gstRate'),
    modelIds: modelIds,
    skus: skus,
    catalogueUrl: formData.get('catalogueUrl') || '',
    cataloguePdf: catalogPdf,
    productImage: productImage,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to add product.',
    };
  }

  try {
    const data = validatedFields.data;
    // Remove undefined values before sending to Firestore
    const { modelIds: productModelIds, ...productData } = data;
    const cleanData = Object.fromEntries(
      Object.entries(productData).filter(([_, v]) => v !== undefined)
    );
    
    // Add the selected model IDs to the product data
    if (productModelIds && productModelIds.length > 0) {
      cleanData.modelIds = productModelIds;
    }
    
    // Create the product
    const newProduct = await dbAddProduct(cleanData as any);
    
  } catch (error) {
    return { message: 'Database Error: Failed to add product.' };
  }

  revalidatePath('/products');
  revalidatePath('/leads'); // Revalidate leads in case product info is needed
  return { message: 'Successfully added product.' };
}

export async function updateProduct(id: string, formData: FormData) {
    const skusJSON = formData.get('skus');
    const skus = skusJSON ? JSON.parse(skusJSON as string) : [];
    
    const modelIdsJSON = formData.get('modelIds');
    const modelIds = modelIdsJSON ? JSON.parse(modelIdsJSON as string) : [];

    const catalogPdfJSON = formData.get('catalogPdf');
    const catalogPdf = catalogPdfJSON ? JSON.parse(catalogPdfJSON as string) : undefined;
    const removeCatalogPdf = String(formData.get('removeCatalogPdf') || '').toLowerCase() === 'true';

    // Handle product image - can be File object (new upload) or JSON string (existing metadata)
    const productImageData = formData.get('productImage');
    const existingProductImageJSON = formData.get('existingProductImage');
    const removeProductImage = String(formData.get('removeProductImage') || '').toLowerCase() === 'true';
    
    let productImage: any = undefined;
    
    // If there's a new file upload, handle it
    if (productImageData instanceof File) {
      try {
        const uploadResult = await uploadImageToStorage(productImageData, 'products');
        productImage = {
          url: uploadResult.url,
          fileName: uploadResult.fileName,
          filePath: uploadResult.path,
          uploadedAt: new Date().toISOString(),
        };
      } catch (error) {
        console.error('Failed to upload product image:', error);
        return { message: 'Failed to upload product image.' };
      }
    } else if (existingProductImageJSON && !removeProductImage) {
      // Keep existing image metadata
      productImage = JSON.parse(existingProductImageJSON as string);
    }

    // Debug logs removed
    
    const validatedFields = ProductSchema.safeParse({
      name: formData.get('name'),
      price: formData.get('price'),
      gstRate: formData.get('gstRate'),
      modelIds: modelIds,
      skus: skus,
      catalogueUrl: formData.get('catalogueUrl') || '',
      cataloguePdf: catalogPdf,
      productImage: productImage,
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Failed to update product.',
      };
    }

    try {
      // Get the current product to check for existing PDF
      const currentProduct = await getProducts().then(products => 
        products.find(p => p.id === id)
      );
      
      const data = validatedFields.data as any;
      const { modelIds: productModelIds, ...productData } = data;
      const updateData: any = { ...productData };
      
      // Add the selected model IDs to the update data
      if (productModelIds && productModelIds.length > 0) {
        updateData.modelIds = productModelIds;
      } else {
        // If no models selected, remove the field
        updateData.modelIds = [];
      }
      
      // If user explicitly removed the existing PDF and didn't upload a new one, clear the field
      if (removeCatalogPdf && !catalogPdf) {
        // Delete the old PDF from Firebase Storage if it exists
        if (currentProduct?.cataloguePdf?.filePath) {
          try {
            await deletePDFFromStorage(currentProduct.cataloguePdf.filePath);
          } catch (error) {
            console.error('Failed to delete PDF from storage:', error);
            // Continue with the update even if PDF deletion fails
          }
        }
        updateData.cataloguePdf = null; // This will clear the field in Firestore
      } else if (catalogPdf && currentProduct?.cataloguePdf?.filePath && 
                 currentProduct.cataloguePdf.filePath !== catalogPdf.filePath) {
        // If a new PDF was uploaded, delete the old one from storage
        try {
          await deletePDFFromStorage(currentProduct.cataloguePdf.filePath);
        } catch (error) {
          console.error('Failed to delete old PDF from storage:', error);
          // Continue with the update even if old PDF deletion fails
        }
      }
      
      // Handle product image storage cleanup if new image was uploaded
      if (productImageData instanceof File && currentProduct?.productImage?.filePath) {
        // Delete the old image from storage since we have a new one
        try {
          await deleteImageFromStorage(currentProduct.productImage.filePath);
        } catch (error) {
          console.error('Failed to delete old product image from storage:', error);
          // Continue with the update even if old image deletion fails
        }
      }
      
      // Handle product image removal
      if (removeProductImage && !productImageData) {
        // Delete the existing image from storage
        if (currentProduct?.productImage?.filePath) {
          try {
            await deleteImageFromStorage(currentProduct.productImage.filePath);
          } catch (error) {
            console.error('Failed to delete product image from storage:', error);
          }
        }
        updateData.productImage = null; // This will clear the field in Firestore
      }
      
      // Ensure new uploads are persisted
      if (catalogPdf) {
        updateData.cataloguePdf = catalogPdf;
      }
      if (productImage) {
        updateData.productImage = productImage;
      }
      
      // Remove undefined values from updateData as Firestore doesn't accept them
      const cleanedUpdateData: any = {};
      for (const [key, value] of Object.entries(updateData)) {
        if (value !== undefined) {
          cleanedUpdateData[key] = value;
        }
      }
      
      console.log('[updateProduct] cleanedUpdateData keys:', Object.keys(cleanedUpdateData));
      console.log('[updateProduct] cleanedUpdateData.productImage:', cleanedUpdateData.productImage);
      
      await dbUpdateProduct(id, cleanedUpdateData);
    } catch (error) {
      return { message: 'Database Error: Failed to update product.' };
    }

    revalidatePath('/products');
    revalidatePath('/leads');
    return { message: 'Successfully updated product.' };
  }
  
  export async function deleteProduct(id: string) {
    try {
      // Get the current product to check for PDF before deletion
      const currentProduct = await getProducts().then(products => 
        products.find(p => p.id === id)
      );
      
      // Delete the PDF from Firebase Storage if it exists
      if (currentProduct?.cataloguePdf?.filePath) {
        try {
          await deletePDFFromStorage(currentProduct.cataloguePdf.filePath);
        } catch (error) {
          console.error('Failed to delete PDF from storage:', error);
          // Continue with product deletion even if PDF deletion fails
        }
      }
      
      await dbDeleteProduct(id);
    } catch (error) {
      return { message: 'Database Error: Failed to delete product.' };
    }

    revalidatePath('/products');
    revalidatePath('/leads');
    return { message: 'Successfully deleted product.' };
  }


const LogActivitySchema = z.object({
    leadId: z.string(),
    type: z.enum(['Meeting', 'Call', 'Email', 'Revision Request', 'Proposal Sent']),
    notes: z.string().optional(),
    summary: z.string().optional(),
});

export async function logActivity(formData: FormData) {
    const validatedFields = LogActivitySchema.safeParse({
        leadId: formData.get('leadId'),
        type: formData.get('type'),
        notes: formData.get('notes'),
        summary: formData.get('summary') || undefined,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to log activity.',
        };
    }

    try {
        const { leadId, ...activityData } = validatedFields.data;
        await addActivityToLead(leadId, activityData);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('LogActivity Error:', message);
        if (message.includes('Lead not found')) {
            return { message: 'Lead not found. Please refresh the page and try again.' };
        }
        return { message: 'Database Error: Failed to log activity.' };
    }

    revalidatePath(`/leads/${validatedFields.data.leadId}`);
    revalidatePath('/');
    return { message: 'Successfully logged activity.' };
}

export async function getSummaryForNotes(notes: string): Promise<{ summary?: string; error?: string }> {
  if (!notes || notes.trim().length < 50) {
    return { error: 'Please provide at least 50 characters of notes to summarize.' };
  }
  try {
    const result = await summarizeMeetingNotes({ notes });
    return result;
  } catch (e) {
    console.error('AI Summarization Error:', e);
    return { error: 'Failed to generate summary due to an internal error.' };
  }
}


export async function updateLeadStatusAction(leadId: string, status: LeadStatus, userId?: string, userName?: string) {
  try {
    // Get the current lead to capture the previous status
    const currentLead = await dbGetLeadById(leadId);
    if (!currentLead) {
      return { message: 'Lead not found.' };
    }
    
    const previousStatus = currentLead.status;
    
    // Only update if status is actually changing
    if (previousStatus === status) {
      return { message: 'Status is already set to this value.' };
    }
    
    // Update the status
    await updateStatus(leadId, status);
    
    // Add a status change activity
    const changedBy = userName || userId || 'Unknown User';
    const statusChangeNotes = `Status changed from "${previousStatus}" to "${status}" by ${changedBy}`;
    
    await addActivityToLead(leadId, {
      type: 'Status Change',
      notes: statusChangeNotes
    });
    
  } catch (error) {
    return { message: 'Database Error: Failed to update status.' };
  }
  revalidatePath(`/leads/${leadId}`);
  revalidatePath('/leads');
  revalidatePath('/');
  return { message: 'Status updated successfully.' };
}

export async function deleteLeadAction(leadId: string) {
  try {
    await dbDeleteLead(leadId);
  } catch (error) {
    return { message: 'Database Error: Failed to delete lead.' };
  }
  revalidatePath('/leads');
  revalidatePath('/');
  return { message: 'Successfully deleted lead.' };
}

const AddLeadSourceSchema = z.object({
    name: z.string().min(2, 'Source name must be at least 2 characters'),
});

export async function addLeadSourceAction(formData: FormData) {
    const validatedFields = AddLeadSourceSchema.safeParse({
        name: formData.get('name'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name',
        };
    }

    try {
        await dbAddLeadSource(validatedFields.data.name);
    } catch (error) {
        return { message: 'Database Error: Failed to add lead source.' };
    }

    revalidatePath('/setup');
    revalidatePath('/leads');
    return { message: `Successfully added '${validatedFields.data.name}'.` };
}

export async function deleteLeadSourceAction(id: string) {
    try {
        await dbDeleteLeadSource(id);
    } catch (error) {
        return { message: 'Database Error: Failed to delete lead source.' };
    }

    revalidatePath('/setup');
    revalidatePath('/leads');
    return { message: 'Successfully deleted lead source.' };
}

const AddProductModelSchema = z.object({
    name: z.string().min(2, 'Model name must be at least 2 characters'),
    description: z.string().optional().nullable(),
    productId: z.string().optional().nullable(), // Optional for backward compatibility
});

export async function addProductModelAction(formData: FormData) {
    const validatedFields = AddProductModelSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
        productId: formData.get('productId'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name',
        };
    }

    try {
        // Convert null to undefined for optional description
        const description = validatedFields.data.description || undefined;
        const productId = validatedFields.data.productId;
        
        if (productId) {
            // Create model for specific product
            await dbAddModelForProduct(productId, validatedFields.data.name, description);
        } else {
            // Create general product model (legacy behavior)
            await dbAddProductModel(validatedFields.data.name, description);
        }
    } catch (error) {
        return { message: 'Database Error: Failed to add product model.' };
    }

    revalidatePath('/setup');
    revalidatePath('/products');
    revalidatePath('/leads');
    return { message: `Successfully added '${validatedFields.data.name}'.` };
}

export async function deleteProductModelAction(id: string) {
    try {
        await dbDeleteProductModel(id);
    } catch (error) {
        return { message: 'Database Error: Failed to delete product model.' };
    }

    revalidatePath('/setup');
    revalidatePath('/products');
    return { message: 'Successfully deleted product model.' };
}

// Update an existing product model's name/description
export async function updateProductModelAction(id: string, name: string, description?: string) {
    try {
        await dbUpdateProductModel(id, name, description || '');
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return { message: `Database Error: Failed to update product model. ${message}` };
    }
    revalidatePath('/setup');
    revalidatePath('/products');
    revalidatePath('/leads');
    return { message: 'Successfully updated product model.' };
}

export async function getProductModelsAction() {
    try {
        const models = await getProductModels();
        return models;
    } catch (error) {
        console.error('Error fetching product models:', error);
        return [];
    }
}

export async function getModelsByProductAction(productId: string) {
    try {
        const models = await dbGetModelsByProduct(productId);
        return models;
    } catch (error) {
        console.error('Error fetching models for product:', error);
        return [];
    }
}

export async function getActiveModelsByProductAction(productId: string) {
    try {
        const models = await dbGetActiveModelsByProduct(productId);
        return models;
    } catch (error) {
        console.error('Error fetching active models for product:', error);
        return [];
    }
}

// New function to get models based on product's modelIds field
export async function getModelsByProductFieldAction(productId: string) {
    try {
        // First get the product to see which models it references
        const products = await getProducts();
        const product = products.find(p => p.id === productId);
        
        if (!product || !product.modelIds || product.modelIds.length === 0) {
            return [];
        }
        
        // Get all models and filter by the product's modelIds
        const allModels = await getProductModelsAction();
        return allModels.filter(model => product.modelIds!.includes(model.id));
    } catch (error) {
        console.error('Error fetching models for product by modelIds:', error);
        return [];
    }
}

const CreateQuotationSchema = z.object({
  leadId: z.string().min(1),
  templateId: z.string().min(1),
  date: z.string(),
  validUntil: z.string(),
  status: z.enum(['Draft', 'Sent', 'Accepted', 'Rejected']),
  products: z.string(), // JSON string
  subTotal: z.coerce.number(),
  totalGst: z.coerce.number(),
  grandTotal: z.coerce.number(),
  quotationPrefix: z.string().optional(),
  // Overridable template fields
  companyName: z.string().min(1),
  companyAddress: z.string().min(1),
  companyGst: z.string().min(1),
  // Client billing fields
  client_address: z.string().optional(),
  client_gst_no: z.string().optional(),
  termsAndConditions: z.string(),
  logoUrl: z.string().optional(),
});


export async function addQuotation(formData: FormData) {
    console.log('Server received quotationPrefix:', formData.get('quotationPrefix'));
    const validatedFields = CreateQuotationSchema.safeParse({
        leadId: formData.get('leadId'),
        templateId: formData.get('templateId'),
        date: formData.get('date'),
        validUntil: formData.get('validUntil'),
        status: formData.get('status'),
        products: formData.get('products'),
        subTotal: formData.get('subTotal'),
        totalGst: formData.get('totalGst'),
        grandTotal: formData.get('grandTotal'),
        quotationPrefix: formData.get('quotationPrefix') || '',
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        client_address: formData.get('client_address'),
        client_gst_no: formData.get('client_gst_no'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl'),
      });
    
      if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Validation Error: Failed to create quotation.',
        };
      }
      
      let newQuotation: Quotation | undefined;
      try {
        const data = validatedFields.data;
        const parsedProducts = JSON.parse(data.products);
        const prefix = (data.quotationPrefix?.trim() || 'QUO');
        console.log('Using prefix:', prefix);
        const { quotationPrefix: _omitPrefix, logoUrl, ...rest } = data as any;
        const payload: any = {
          ...rest,
          products: parsedProducts,
        };
        if (logoUrl) payload.logoUrl = logoUrl;
        newQuotation = await dbAddQuotation(payload, prefix);

        // Log activity on the lead
        await addActivityToLead(data.leadId, {
            type: 'Proposal Sent',
            notes: `Quotation ${newQuotation.quotationNumber} was created and sent.`
        });

      } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return { message: `Database Error: Failed to Create Quotation. ${message}` };
      }

    revalidatePath('/quotations');
    revalidatePath(`/leads/${validatedFields.data.leadId}`);
    return { message: 'Successfully created quotation.' };
}

export async function updateQuotation(id: string, formData: FormData) {
    const validatedFields = CreateQuotationSchema.safeParse({
        leadId: formData.get('leadId'),
        templateId: formData.get('templateId'),
        date: formData.get('date'),
        validUntil: formData.get('validUntil'),
        status: formData.get('status'),
        products: formData.get('products'),
        subTotal: formData.get('subTotal'),
        totalGst: formData.get('totalGst'),
        grandTotal: formData.get('grandTotal'),
        quotationPrefix: formData.get('quotationPrefix') || '',
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        client_address: formData.get('client_address'),
        client_gst_no: formData.get('client_gst_no'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl'),
      });
    
      if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Validation Error: Failed to update quotation.',
        };
      }
      
      try {
        const data = validatedFields.data;
        const parsedProducts = JSON.parse(data.products);
        await dbUpdateQuotation(id, {
            ...data,
            logoUrl: data.logoUrl || undefined,
            products: parsedProducts,
        });

        // Log activity on the lead
        await addActivityToLead(data.leadId, {
            type: 'Revision Request',
            notes: `Quotation was updated.`
        });

      } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return { message: `Database Error: Failed to Update Quotation. ${message}` };
      }

    revalidatePath('/quotations');
    revalidatePath(`/quotations/${id}`);
    revalidatePath(`/leads/${validatedFields.data.leadId}`);
    return { message: 'Successfully updated quotation.' };
}

export async function deleteQuotationAction(quotationId: string) {
  try {
    await dbDeleteQuotation(quotationId);
  } catch (error) {
    return { message: 'Database Error: Failed to delete quotation.' };
  }
  revalidatePath('/quotations');
  revalidatePath('/');
  return { message: 'Successfully deleted quotation.' };
}


const QuotationTemplateSchema = z.object({
    name: z.string().min(3, 'Template name must be at least 3 characters.'),
    prefix: z.string().min(1, 'Prefix is required.'),
    companyName: z.string().min(3, 'Company name is required.'),
    companyAddress: z.string().min(10, 'Full company address is required.'),
    companyGst: z.string().min(15, 'A valid GSTIN is required.').max(15),
    termsAndConditions: z.string().min(20, 'Terms and conditions are required.'),
    logoUrl: z.string().url('Please enter a valid URL for the logo.').optional().or(z.literal('')),
});

export async function addQuotationTemplateAction(formData: FormData) {
    const validatedFields = QuotationTemplateSchema.safeParse({
        name: formData.get('name'),
        prefix: formData.get('prefix'),
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to create template. Please check the fields.',
        };
    }

    try {
        await dbAddQuotationTemplate(validatedFields.data as NewQuotationTemplate);
    } catch (error) {
        return { message: 'Database Error: Failed to create template.' };
    }

    revalidatePath('/setup/quotation-templates');
    return { message: 'Successfully created quotation template.' };
}

export async function updateQuotationTemplateAction(id: string, formData: FormData) {
    const validatedFields = QuotationTemplateSchema.safeParse({
        name: formData.get('name'),
        prefix: formData.get('prefix'),
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to update template. Please check the fields.',
        };
    }

    try {
        await dbUpdateQuotationTemplate(id, validatedFields.data as QuotationTemplate);
    } catch (error) {
        return { message: 'Database Error: Failed to update template.' };
    }

    revalidatePath('/setup/quotation-templates');
    return { message: 'Successfully updated quotation template.' };
}

export async function deleteQuotationTemplateAction(id: string) {
    try {
        await dbDeleteQuotationTemplate(id);
    } catch (error) {
        return { message: 'Database Error: Failed to delete template.' };
    }

    revalidatePath('/setup/quotation-templates');
    return { message: 'Successfully deleted quotation template.' };
}


const AddEmployeeSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email.'),
    phone: z.string().min(10, 'Please enter a valid phone number.'),
    role: z.string({
      required_error: "You need to select a role.",
    }),
    department: z.string({
        required_error: "You need to select a department.",
    }),
    address: z.string().min(10, 'Address is required.'),
});

export async function addEmployeeAction(formData: FormData) {
    const validatedFields = AddEmployeeSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        role: formData.get('role'),
        department: formData.get('department'),
        address: formData.get('address'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to add employee.',
        };
    }

    const [employeeRoles, departments] = await Promise.all([
        getEmployeeRoles(),
        getDepartments(),
    ]);

    const roleExists = employeeRoles.some(r => r.name === validatedFields.data.role);
    if (!roleExists) {
        return { message: 'Invalid role selected.' };
    }
    const departmentExists = departments.some(d => d.name === validatedFields.data.department);
    if (!departmentExists) {
        return { message: 'Invalid department selected.' };
    }

    try {
        // Check if Firebase Admin environment variables are configured
        const requiredEnvVars = ['FIREBASE_PROJECT_ID', 'FIREBASE_PRIVATE_KEY', 'FIREBASE_CLIENT_EMAIL'];
        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
        
        if (missingVars.length > 0) {
            console.warn(`Firebase Admin not configured. Missing: ${missingVars.join(', ')}`);
            // Just add to database without Firebase Auth integration
            await dbAddEmployee(validatedFields.data as NewEmployee);
            revalidatePath('/employees');
            return { 
                message: 'Employee added to database. Note: Firebase Auth integration requires environment variables to be configured for automatic account creation and email sending.'
            };
        }

        // Initialize Firebase Admin
        initializeFirebaseAdmin();
        const auth = getAuth();

        // Create user in Firebase Auth
        const userRecord = await auth.createUser({
            email: validatedFields.data.email,
            displayName: validatedFields.data.name,
            emailVerified: false,
        });

        // Add employee to database first
        await dbAddEmployee(validatedFields.data as NewEmployee);

        // Set a temporary password for the user
        const tempPassword = Math.random().toString(36).slice(-12) + 'A1!'; // Ensure it meets Firebase requirements
        
        // Update the user with the temporary password
        await auth.updateUser(userRecord.uid, {
            password: tempPassword,
        });

        // Send password reset email using Firebase Auth's REST API
        try {
            const webApiKey = process.env.FIREBASE_WEB_API_KEY;
            
            if (!webApiKey) {
                throw new Error('FIREBASE_WEB_API_KEY not configured');
            }

            // Use Firebase Auth REST API to send password reset email
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${webApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    requestType: 'PASSWORD_RESET',
                    email: validatedFields.data.email,
                    continueUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/auth/login`,
                }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('='.repeat(80));
                console.log(`✅ EMPLOYEE CREATED: ${validatedFields.data.name}`);
                console.log(`📧 Email: ${validatedFields.data.email}`);
                console.log(`📨 Password reset email sent successfully!`);
                console.log(`📬 Email will be delivered by Firebase Auth`);
                console.log('='.repeat(80));

                revalidatePath('/employees');
                return { 
                    message: `Successfully added employee ${validatedFields.data.name}. Password reset email has been sent to ${validatedFields.data.email}.`,
                };
            } else {
                const errorData = await response.json();
                console.error('Failed to send password reset email:', errorData);
                throw new Error(`Email sending failed: ${errorData.error?.message || 'Unknown error'}`);
            }
        } catch (emailError) {
            console.error('Error sending password reset email:', emailError);
            
            // Fallback: generate link for manual sharing
            const resetLink = await auth.generatePasswordResetLink(validatedFields.data.email, {
                url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/auth/login`,
                handleCodeInApp: false,
            });

            console.log('='.repeat(80));
            console.log(`✅ EMPLOYEE CREATED: ${validatedFields.data.name}`);
            console.log(`📧 Email: ${validatedFields.data.email}`);
            console.log(`❌ Email sending failed: ${emailError.message}`);
            console.log(`🔗 Manual Reset Link: ${resetLink}`);
            console.log(`📝 Please share this link with the employee`);
            console.log('='.repeat(80));

            revalidatePath('/employees');
            return { 
                message: `Successfully added employee ${validatedFields.data.name}. Email sending failed - please share the reset link manually (check console).`,
                resetLink: resetLink
            };
        }
    } catch (error: any) {
        console.error('Error adding employee:', error);
        
        // Handle specific Firebase errors
        if (error.code === 'auth/email-already-exists') {
            return { message: 'An account with this email already exists.' };
        }
        
        if (error.message?.includes('Missing required Firebase environment variables')) {
            // Fallback: add to database only
            try {
                await dbAddEmployee(validatedFields.data as NewEmployee);
                revalidatePath('/employees');
                return { 
                    message: 'Employee added to database. Firebase Auth integration requires proper environment configuration for automatic account creation.'
                };
            } catch (dbError) {
                return { message: 'Failed to add employee to database.' };
            }
        }
        
        return { message: 'Failed to add employee. Please check Firebase configuration and try again.' };
    }
}

export async function deleteEmployeeAction(employeeId: string) {
  try {
    await dbDeleteEmployee(employeeId);
  } catch (error) {
    return { message: 'Database Error: Failed to delete employee.' };
  }
  revalidatePath('/employees');
  revalidatePath('/');
  return { message: 'Successfully deleted employee.' };
}

const UpdateEmployeeSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email.'),
    phone: z.string().min(10, 'Please enter a valid phone number.'),
    role: z.string(),
    department: z.string(),
    address: z.string().min(10, 'Address is required.'),
});

export async function updateEmployeeAction(id: string, formData: FormData) {
    const validatedFields = UpdateEmployeeSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        role: formData.get('role'),
        department: formData.get('department'),
        address: formData.get('address'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to update employee.',
        };
    }

    try {
        await dbUpdateEmployee(id, validatedFields.data as NewEmployee);
    } catch (error) {
        return { message: 'Database Error: Failed to update employee.' };
    }

    revalidatePath('/employees');
    revalidatePath('/');
    return { message: 'Successfully updated employee.' };
}


const AddEmployeeRoleSchema = z.object({
    name: z.string().min(2, 'Role name must be at least 2 characters'),
});

export async function addEmployeeRoleAction(formData: FormData) {
    const validatedFields = AddEmployeeRoleSchema.safeParse({
        name: formData.get('name'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name',
        };
    }

    try {
        await dbAddEmployeeRole(validatedFields.data.name);
    } catch (error) {
        return { message: 'Database Error: Failed to add role.' };
    }

    revalidatePath('/setup');
    return { message: `Successfully added role '${validatedFields.data.name}'.` };
}

export async function deleteEmployeeRoleAction(id: string) {
    try {
        await dbDeleteEmployeeRole(id);
    } catch (error) {
        return { message: 'Database Error: Failed to delete role.' };
    }

    revalidatePath('/setup');
    return { message: 'Successfully deleted role.' };
}

const AddDepartmentSchema = z.object({
    name: z.string().min(2, 'Department name must be at least 2 characters'),
});

export async function addDepartmentAction(formData: FormData) {
    const validatedFields = AddDepartmentSchema.safeParse({
        name: formData.get('name'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name',
        };
    }

    try {
        await dbAddDepartment(validatedFields.data.name);
    } catch (error) {
        return { message: 'Database Error: Failed to add department.' };
    }

    revalidatePath('/setup');
    return { message: `Successfully added department '${validatedFields.data.name}'.` };
}

export async function deleteDepartmentAction(id: string) {
    try {
        await dbDeleteDepartment(id);
    } catch (error) {
        return { message: 'Database Error: Failed to delete department.' };
    }

    revalidatePath('/setup');
    return { message: 'Successfully deleted department.' };
}

// CSV Import Actions
const ImportProductSchema = z.object({
    name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
    price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
    gstRate: z.coerce.number().min(0).max(100),
    skus: z.array(z.string()).optional(),
    catalogueUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

export async function importProductsFromCSV(csvData: any[]) {
    const results = {
        success: 0,
        failed: 0,
        errors: [] as string[]
    };

    for (let i = 0; i < csvData.length; i++) {
        const row = csvData[i];
        
        try {
            // Parse SKUs from comma-separated string
            const skus = row.skus ? row.skus.split(',').map((sku: string) => sku.trim()).filter(Boolean) : [];
            
            // Prepare data for validation, including optional fields
            const dataForValidation = {
                name: row.name,
                price: row.price,
                gstRate: row.gstRate,
                ...(skus.length > 0 && { skus }),
                ...(row.catalogueUrl && row.catalogueUrl.trim() && { catalogueUrl: row.catalogueUrl }),
            };

            const validatedData = ImportProductSchema.parse(dataForValidation);

            // Prepare data for database - only include defined fields
            const productData = {
                name: validatedData.name,
                price: validatedData.price,
                gstRate: validatedData.gstRate,
                ...(validatedData.skus && { skus: validatedData.skus }),
                ...(validatedData.catalogueUrl && { catalogueUrl: validatedData.catalogueUrl }),
            };

            await dbAddProduct(productData);
            
            results.success++;
        } catch (error) {
            results.failed++;
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map(e => `Row ${i + 1}: ${e.path.join('.')} - ${e.message}`);
                results.errors.push(...errorMessages);
            } else {
                results.errors.push(`Row ${i + 1}: Failed to import product - ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
        }
    }

    // Revalidate pages after import
    revalidatePath('/products');
    revalidatePath('/leads');

    return {
        success: results.failed === 0,
        message: `Import completed. ${results.success} products imported successfully${results.failed > 0 ? `, ${results.failed} failed` : ''}.`,
        errors: results.errors.length > 0 ? results.errors : undefined
    };
}

// Count Actions
export async function getLeadsCountAction(): Promise<number> {
    try {
        return await getLeadsCount();
    } catch (error) {
        console.error('Error getting leads count:', error);
        return 0;
    }
}

export async function getQuotationsCountAction(): Promise<number> {
    try {
        return await getQuotationsCount();
    } catch (error) {
        console.error('Error getting quotations count:', error);
        return 0;
    }
}

export async function getProductsCountAction(): Promise<number> {
    try {
        return await getProductsCount();
    } catch (error) {
        console.error('Error getting products count:', error);
        return 0;
    }
}

export async function getEmployeesCountAction(): Promise<number> {
    try {
        return await getEmployeesCount();
    } catch (error) {
        console.error('Error getting employees count:', error);
        return 0;
    }
}

export async function getLeadsCountByStatusAction(status: LeadStatus): Promise<number> {
    try {
        return await getLeadsCountByStatus(status);
    } catch (error) {
        console.error(`Error getting leads count for status ${status}:`, error);
        return 0;
    }
}

export async function getQuotationsCountByStatusAction(status: 'Draft' | 'Sent' | 'Accepted' | 'Rejected'): Promise<number> {
    try {
        return await getQuotationsCountByStatus(status);
    } catch (error) {
        console.error(`Error getting quotations count for status ${status}:`, error);
        return 0;
    }
}

export async function getActiveProductsCountAction(): Promise<number> {
    try {
        return await getActiveProductsCount();
    } catch (error) {
        console.error('Error getting active products count:', error);
        return 0;
    }
}

export async function getActiveEmployeesCountAction(): Promise<number> {
    try {
        return await getActiveEmployeesCount();
    } catch (error) {
        console.error('Error getting active employees count:', error);
        return 0;
    }
}

// Communication Activity Actions
const CommunicationActivitySchema = z.object({
  leadId: z.string().min(1, 'Lead ID is required'),
  type: z.enum(['WhatsApp', 'Email']),
  message: z.string().min(1, 'Message is required'),
  contact: z.string().min(1, 'Contact is required'),
  sentBy: z.string().min(1, 'Sent by is required'),
});

export async function logCommunicationActivityAction(formData: FormData) {
  const validatedFields = CommunicationActivitySchema.safeParse({
    leadId: formData.get('leadId'),
    type: formData.get('type'),
    message: formData.get('message'),
    contact: formData.get('contact'),
    sentBy: formData.get('sentBy'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to log communication activity.',
    };
  }

  const { leadId, type, message, contact, sentBy } = validatedFields.data;

  try {
    const activityNotes = `${type} message sent to ${contact} by ${sentBy}:\n\n"${message}"`;
    
    await addActivityToLead(leadId, {
      type: type as 'WhatsApp' | 'Email',
      notes: activityNotes
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('LogCommunicationActivity Error:', errMsg);
    if (errMsg.includes('Lead not found')) {
      return { message: 'Lead not found. Please refresh the page and try again.' };
    }
    return { message: 'Database Error: Failed to log communication activity.' };
  }

  return { message: `Successfully logged ${type} communication.` };
}

export async function getCurrentUserEmployeeAction(email: string): Promise<Employee | null> {
    try {
        return await getEmployeeByEmail(email);
    } catch (error) {
        console.error('Error getting current user employee:', error);
        return null;
    }
}

