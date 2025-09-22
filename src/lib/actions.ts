
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { summarizeMeetingNotes } from '@/ai/flows/summarize-meeting-notes';
import { addLead as dbAddLead, addActivityToLead, updateLeadStatus as updateStatus, addProduct as dbAddProduct, addLeadSource as dbAddLeadSource, deleteLeadSource as dbDeleteLeadSource, updateLead as dbUpdateLead, getLeadById as dbGetLeadById, deleteLead as dbDeleteLead, addQuotation as dbAddQuotation, deleteQuotation as dbDeleteQuotation, addQuotationTemplate as dbAddQuotationTemplate, updateProduct as dbUpdateProduct, deleteProduct as dbDeleteProduct, addEmployee as dbAddEmployee, deleteEmployee as dbDeleteEmployee, getEmployeeRoles, addEmployeeRole as dbAddEmployeeRole, deleteEmployeeRole as dbDeleteEmployeeRole, getDepartments, addDepartment as dbAddDepartment, deleteDepartment as dbDeleteDepartment, updateQuotationTemplate as dbUpdateQuotationTemplate, deleteQuotationTemplate as dbDeleteQuotationTemplate } from './data';
import type { Lead, LeadStatus, LeadProduct, UpdatableLeadData, Product, NewQuotationTemplate, Quotation, NewEmployee, Employee, QuotationTemplate } from './types';
import { getProducts } from './data';

const LeadProductSchema = z.object({
    productId: z.string().min(1, 'Product must be selected'),
    quantity: z.coerce.number().min(1),
    rate: z.coerce.number().min(0),
    selectedSku: z.string().optional(),
});

const CreateLeadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number seems too short'),
  whatsappNumber: z.string().optional(),
  status: z.enum(['New', 'In Discussion', 'Negotiation', 'Closed - Won', 'Closed - Lost']),
  source: z.string().min(1, 'Please select a lead source'),
  notes: z.string().optional(),
  products: z.array(LeadProductSchema).optional(),
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
    status: formData.get('status'),
    source: formData.get('source'),
    notes: formData.get('notes'),
    products: products,
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
        
        const formatProduct = (p: LeadProduct) => `${getProductName(p.productId)} (Qty: ${p.quantity}, Rate: ${p.rate}, SKU: ${p.selectedSku || 'N/A'})`;

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
    description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
    price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
    gstRate: z.coerce.number().min(0).max(100),
    skus: z.array(z.string()).optional(),
    catalogueUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
    cataloguePdf: z.object({
        url: z.string(),
        fileName: z.string(),
        filePath: z.string(),
        uploadedAt: z.string(),
        base64Data: z.string(),
    }).optional(),
});

export async function addProduct(formData: FormData) {
  const skusJSON = formData.get('skus');
  const skus = skusJSON ? JSON.parse(skusJSON as string) : [];
  
  const catalogPdfJSON = formData.get('catalogPdf');
  const catalogPdf = catalogPdfJSON ? JSON.parse(catalogPdfJSON as string) : undefined;
  
  const validatedFields = ProductSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    gstRate: formData.get('gstRate'),
    skus: skus,
    catalogueUrl: formData.get('catalogueUrl'),
    cataloguePdf: catalogPdf,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to add product.',
    };
  }

  try {
    await dbAddProduct(validatedFields.data);
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
    
    const catalogPdfJSON = formData.get('catalogPdf');
    const catalogPdf = catalogPdfJSON ? JSON.parse(catalogPdfJSON as string) : undefined;
    
    const validatedFields = ProductSchema.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      gstRate: formData.get('gstRate'),
      skus: skus,
      catalogueUrl: formData.get('catalogueUrl'),
      cataloguePdf: catalogPdf,
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Failed to update product.',
      };
    }
  
    try {
      await dbUpdateProduct(id, validatedFields.data);
    } catch (error) {
      return { message: 'Database Error: Failed to update product.' };
    }
  
    revalidatePath('/products');
    revalidatePath('/leads'); 
    return { message: 'Successfully updated product.' };
  }
  
  export async function deleteProduct(id: string) {
    try {
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
    notes: z.string().min(10, 'Notes must be at least 10 characters long.'),
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


export async function updateLeadStatusAction(leadId: string, status: LeadStatus) {
  try {
    await updateStatus(leadId, status);
  } catch (error) {
    return { message: 'Database Error: Failed to update status.' };
  }
  revalidatePath(`/leads/${leadId}`);
  revalidatePath('/leads');
  revalidatePath('/');
  return { message: 'Status updated.' };
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
  // Overridable template fields
  companyName: z.string().min(1),
  companyAddress: z.string().min(1),
  companyGst: z.string().min(1),
  termsAndConditions: z.string(),
  logoUrl: z.string().optional(),
});


export async function addQuotation(formData: FormData) {
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
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
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
        newQuotation = await dbAddQuotation({
            ...data,
            logoUrl: data.logoUrl || undefined,
            products: parsedProducts,
        });

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
    companyName: z.string().min(3, 'Company name is required.'),
    companyAddress: z.string().min(10, 'Full company address is required.'),
    companyGst: z.string().min(15, 'A valid GSTIN is required.').max(15),
    termsAndConditions: z.string().min(20, 'Terms and conditions are required.'),
    logoUrl: z.string().url('Please enter a valid URL for the logo.').optional().or(z.literal('')),
});

export async function addQuotationTemplateAction(formData: FormData) {
    const validatedFields = QuotationTemplateSchema.safeParse({
        name: formData.get('name'),
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
        await dbAddEmployee(validatedFields.data as NewEmployee);
    } catch (error) {
        return { message: 'Database Error: Failed to add employee.' };
    }

    revalidatePath('/employees');
    return { message: 'Successfully added employee.' };
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
    description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
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
                description: row.description,
                price: row.price,
                gstRate: row.gstRate,
                ...(skus.length > 0 && { skus }),
                ...(row.catalogueUrl && row.catalogueUrl.trim() && { catalogueUrl: row.catalogueUrl }),
            };

            const validatedData = ImportProductSchema.parse(dataForValidation);

            // Prepare data for database - only include defined fields
            const productData = {
                name: validatedData.name,
                description: validatedData.description,
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
