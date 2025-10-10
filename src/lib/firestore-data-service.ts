'use server';

import { 
  employeeService, 
  leadService, 
  productService, 
  quotationService,
  departmentsService,
  employeeRolesService,
  leadSourcesService,
  quotationTemplatesService
} from './business-services';
import { 
  Employee, 
  Lead, 
  Product, 
  Quotation, 
  QuotationTemplate,
  Department,
  EmployeeRole,
  LeadSource,
  LeadActivity
} from './business-types';
import { Timestamp } from 'firebase/firestore';

// Helper function to convert Firestore Timestamps to plain objects
function convertTimestampToPlain(obj: any): any {
  if (!obj) return obj;
  
  if (obj instanceof Timestamp) {
    return obj.toDate().toISOString();
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => convertTimestampToPlain(item));
  }
  
  if (typeof obj === 'object') {
    const converted: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        converted[key] = convertTimestampToPlain(obj[key]);
      }
    }
    return converted;
  }
  
  return obj;
}

// Helper function to convert Firestore documents to plain objects
function convertFirestoreDocToPlain<T>(doc: T): T {
  return convertTimestampToPlain(doc);
}

// Type definitions to match your existing types
export interface Activity extends LeadActivity {}

export interface NewEmployee {
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  address: string;
}

export interface NewProduct {
  name: string;
  description: string;
  price: number;
  gstRate: number;
  skus?: string[];
  catalogueUrl?: string;
  cataloguePdf?: {
    url: string;
    fileName: string;
    filePath: string;
    uploadedAt: string;
  };
}

export interface UpdatableLeadData {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  whatsappNumber?: string;
  status?: Lead['status'];
  source?: string;
  products?: Lead['products'];
}

// Employee functions
export const getEmployees = async (): Promise<Employee[]> => {
  const employees = await employeeService.getAll();
  return employees.map(emp => convertFirestoreDocToPlain(emp));
};

export const getEmployeeById = async (id: string): Promise<Employee | undefined> => {
  const employee = await employeeService.getById(id);
  return employee ? convertFirestoreDocToPlain(employee) : undefined;
};

export const getEmployeeByEmail = async (email: string): Promise<Employee | null> => {
  const employee = await employeeService.getEmployeeByEmail(email);
  return employee ? convertFirestoreDocToPlain(employee) : null;
};

export const addEmployee = async (employeeData: NewEmployee): Promise<Employee> => {
  const id = await employeeService.create({
    ...employeeData,
    isActive: true
  });
  
  const newEmployee = await employeeService.getById(id);
  if (!newEmployee) {
    throw new Error('Failed to create employee');
  }
  
  return convertFirestoreDocToPlain(newEmployee);
};

export const updateEmployee = async (id: string, employeeData: Partial<NewEmployee>): Promise<Employee> => {
  await employeeService.update(id, employeeData);
  const updatedEmployee = await employeeService.getById(id);
  if (!updatedEmployee) {
    throw new Error('Employee not found after update');
  }
  return convertFirestoreDocToPlain(updatedEmployee);
};

export const deleteEmployee = async (id: string): Promise<{ success: boolean }> => {
  await employeeService.delete(id);
  return { success: true };
};

// Lead functions
export const getLeads = async (query?: string, status?: string): Promise<Lead[]> => {
  let leads: Lead[] = [];
  
  if (status) {
    leads = await leadService.getLeadsByStatus(status as Lead['status']);
  } else {
    leads = await leadService.getAll();
  }
  
  // Convert to plain objects
  leads = leads.map(lead => convertFirestoreDocToPlain(lead));
  
  if (query) {
    const lowercasedQuery = query.toLowerCase();
    leads = leads.filter(
      lead =>
        lead.name.toLowerCase().includes(lowercasedQuery) ||
        lead.company.toLowerCase().includes(lowercasedQuery)
    );
  }
  
  return leads.sort((a, b) => {
    const aDate = a.createdAt ? new Date(a.createdAt.toString()).getTime() : 0;
    const bDate = b.createdAt ? new Date(b.createdAt.toString()).getTime() : 0;
    return bDate - aDate;
  });
};

export const getLeadById = async (id: string): Promise<Lead | undefined> => {
  const lead = await leadService.getById(id);
  if (!lead) return undefined;
  
  const plainLead = convertFirestoreDocToPlain(lead);
  return {
    ...plainLead,
    activities: plainLead.activities.sort((a: any, b: any) => {
      const aDate = new Date(a.date.toString()).getTime();
      const bDate = new Date(b.date.toString()).getTime();
      return bDate - aDate;
    })
  };
};

export const getRecentActivities = async (limit: number): Promise<{ lead: Lead; activity: Activity }[]> => {
  const leads = await leadService.getAll();
  const plainLeads = leads.map(lead => convertFirestoreDocToPlain(lead));
  
  const allActivities = plainLeads.flatMap(lead => 
    lead.activities.map(activity => ({ lead, activity }))
  );
  
  return allActivities
    .sort((a, b) => {
      const aDate = new Date(a.activity.date.toString()).getTime();
      const bDate = new Date(b.activity.date.toString()).getTime();
      return bDate - aDate;
    })
    .slice(0, limit);
};

export const addLead = async (leadData: Omit<Lead, 'id' | 'createdAt' | 'activities'> & { notes?: string }): Promise<Lead> => {
  const { notes, ...restOfLeadData } = leadData;
  
  const initialActivity: LeadActivity[] = [];
  if (notes) {
    initialActivity.push({
      id: `act-${Date.now()}-1`,
      date: new Date().toISOString(),
      type: 'Email',
      notes: `Lead created in the system. Initial notes: ${notes}`,
    });
  }

  const id = await leadService.create({
    ...restOfLeadData,
    activities: initialActivity,
    priority: 'Medium',
    estimatedValue: leadData.products?.reduce((sum, product) => 
      sum + (product.quantity * product.rate), 0) || 0
  });
  
  const newLead = await leadService.getById(id);
  if (!newLead) {
    throw new Error('Failed to create lead');
  }
  
  return convertFirestoreDocToPlain(newLead);
};

export const addActivityToLead = async (leadId: string, activityData: Omit<Activity, 'id' | 'date'>): Promise<Activity> => {
  const lead = await leadService.getById(leadId);
  if (!lead) {
    throw new Error('Lead not found');
  }

  // Remove any undefined values since Firestore does not allow them
  const sanitizedActivityData = Object.fromEntries(
    Object.entries(activityData as Record<string, unknown>).filter(([, value]) => value !== undefined)
  ) as Omit<Activity, 'id' | 'date'>;

  const newActivity: LeadActivity = {
    ...sanitizedActivityData,
    id: `act-${leadId}-${Date.now()}`,
    date: new Date().toISOString(),
  };
  
  await leadService.addActivity(leadId, newActivity);
  return convertFirestoreDocToPlain(newActivity);
};

export const updateLeadStatus = async (leadId: string, status: Lead['status']): Promise<Lead> => {
  await leadService.updateStatus(leadId, status);
  const updatedLead = await leadService.getById(leadId);
  if (!updatedLead) {
    throw new Error('Lead not found after update');
  }
  return convertFirestoreDocToPlain(updatedLead);
};

export const updateLead = async (leadId: string, leadData: UpdatableLeadData): Promise<Lead> => {
  await leadService.update(leadId, leadData);
  const updatedLead = await leadService.getById(leadId);
  if (!updatedLead) {
    throw new Error('Lead not found after update');
  }
  return convertFirestoreDocToPlain(updatedLead);
};

export const deleteLead = async (id: string): Promise<{ success: boolean }> => {
  await leadService.delete(id);
  return { success: true };
};

// Product functions
export const getProducts = async (): Promise<Product[]> => {
  const products = await productService.getAll();
  return products.map(product => convertFirestoreDocToPlain(product));
};

export const addProduct = async (productData: NewProduct): Promise<Product> => {
  const id = await productService.create({
    ...productData,
    isActive: true,
    stockQuantity: 100,
    minStockLevel: 10
  });
  
  const newProduct = await productService.getById(id);
  if (!newProduct) {
    throw new Error('Failed to create product');
  }
  
  return convertFirestoreDocToPlain(newProduct);
};

export const updateProduct = async (id: string, productData: NewProduct): Promise<Product> => {
  await productService.update(id, productData);
  const updatedProduct = await productService.getById(id);
  if (!updatedProduct) {
    throw new Error('Product not found after update');
  }
  return convertFirestoreDocToPlain(updatedProduct);
};

export const deleteProduct = async (id: string): Promise<{ success: boolean }> => {
  await productService.delete(id);
  return { success: true };
};

// Lead Source functions
export const getLeadSources = async (): Promise<LeadSource[]> => {
  const sources = await leadSourcesService.getAll();
  return sources.map(source => convertFirestoreDocToPlain(source));
};

export const addLeadSource = async (name: string): Promise<LeadSource> => {
  const id = await leadSourcesService.create({
    name,
    isActive: true
  });
  
  const newSource = await leadSourcesService.getById(id);
  if (!newSource) {
    throw new Error('Failed to create lead source');
  }
  
  return convertFirestoreDocToPlain(newSource);
};

export const deleteLeadSource = async (id: string): Promise<{ success: boolean }> => {
  await leadSourcesService.delete(id);
  return { success: true };
};

// Quotation functions
export const getQuotations = async (): Promise<Quotation[]> => {
  const quotations = await quotationService.getWithQuery({
    orderBy: { field: 'createdAt', direction: 'desc' }
  });
  return quotations.map(q => convertFirestoreDocToPlain(q));
};

export const getQuotationById = async (id: string): Promise<Quotation | undefined> => {
  const quotation = await quotationService.getById(id);
  return quotation ? convertFirestoreDocToPlain(quotation) : undefined;
};

export const addQuotation = async (quotationData: Omit<Quotation, 'id' | 'createdAt' | 'quotationNumber'>, quotationPrefix: string): Promise<Quotation> => {
  console.log('Data service received prefix:', quotationPrefix);
  const prefix = quotationPrefix?.trim() || 'QUO';
  console.log('Final prefix being used:', prefix);
  const quotationNumber = await quotationService.generateQuotationNumber(prefix);
  console.log('Generated quotation number:', quotationNumber);
  
  const id = await quotationService.create({
    ...quotationData,
    quotationNumber
  });
  
  const newQuotation = await quotationService.getById(id);
  if (!newQuotation) {
    throw new Error('Failed to create quotation');
  }
  
  return convertFirestoreDocToPlain(newQuotation);
};

export const updateQuotation = async (id: string, quotationData: Partial<Quotation>): Promise<Quotation> => {
  await quotationService.update(id, quotationData);
  const updatedQuotation = await quotationService.getById(id);
  if (!updatedQuotation) {
    throw new Error('Quotation not found after update');
  }
  return convertFirestoreDocToPlain(updatedQuotation);
};

export const deleteQuotation = async (id: string): Promise<{ success: boolean }> => {
  await quotationService.delete(id);
  return { success: true };
};

// Quotation Template functions
export const getQuotationTemplates = async (): Promise<QuotationTemplate[]> => {
  const templates = await quotationTemplatesService.getAll();
  return templates.map(template => convertFirestoreDocToPlain(template));
};

export const getQuotationTemplateById = async (id: string): Promise<QuotationTemplate | undefined> => {
  const template = await quotationTemplatesService.getById(id);
  return template ? convertFirestoreDocToPlain(template) : undefined;
};

export const addQuotationTemplate = async (templateData: Omit<QuotationTemplate, 'id'>): Promise<QuotationTemplate> => {
  const id = await quotationTemplatesService.create({
    ...templateData,
    isDefault: false
  });
  
  const newTemplate = await quotationTemplatesService.getById(id);
  if (!newTemplate) {
    throw new Error('Failed to create quotation template');
  }
  
  return convertFirestoreDocToPlain(newTemplate);
};

export const updateQuotationTemplate = async (id: string, templateData: QuotationTemplate): Promise<QuotationTemplate> => {
  await quotationTemplatesService.update(id, templateData);
  const updatedTemplate = await quotationTemplatesService.getById(id);
  if (!updatedTemplate) {
    throw new Error('Template not found after update');
  }
  return convertFirestoreDocToPlain(updatedTemplate);
};

export const deleteQuotationTemplate = async (id: string): Promise<{ success: boolean }> => {
  await quotationTemplatesService.delete(id);
  return { success: true };
};

// Employee Role functions
export const getEmployeeRoles = async (): Promise<EmployeeRole[]> => {
  const roles = await employeeRolesService.getAll();
  return roles.map(role => convertFirestoreDocToPlain(role));
};

export const addEmployeeRole = async (name: string): Promise<EmployeeRole> => {
  const id = await employeeRolesService.create({ name });
  
  const newRole = await employeeRolesService.getById(id);
  if (!newRole) {
    throw new Error('Failed to create employee role');
  }
  
  return convertFirestoreDocToPlain(newRole);
};

export const deleteEmployeeRole = async (id: string): Promise<{ success: boolean }> => {
  await employeeRolesService.delete(id);
  return { success: true };
};

// Department functions
export const getDepartments = async (): Promise<Department[]> => {
  const departments = await departmentsService.getAll();
  return departments.map(dept => convertFirestoreDocToPlain(dept));
};

export const addDepartment = async (name: string): Promise<Department> => {
  const id = await departmentsService.create({ name });
  
  const newDepartment = await departmentsService.getById(id);
  if (!newDepartment) {
    throw new Error('Failed to create department');
  }
  
  return convertFirestoreDocToPlain(newDepartment);
};

export const deleteDepartment = async (id: string): Promise<{ success: boolean }> => {
  await departmentsService.delete(id);
  return { success: true };
};

// Count functions
export const getLeadsCount = async (): Promise<number> => {
  return await leadService.count();
};

export const getQuotationsCount = async (): Promise<number> => {
  return await quotationService.count();
};

export const getProductsCount = async (): Promise<number> => {
  return await productService.count();
};

export const getEmployeesCount = async (): Promise<number> => {
  return await employeeService.count();
};

// Count by status functions
export const getLeadsCountByStatus = async (status: Lead['status']): Promise<number> => {
  return await leadService.count({
    where: [{ field: 'status', operator: '==', value: status }]
  });
};

export const getQuotationsCountByStatus = async (status: Quotation['status']): Promise<number> => {
  return await quotationService.count({
    where: [{ field: 'status', operator: '==', value: status }]
  });
};

export const getActiveProductsCount = async (): Promise<number> => {
  return await productService.count({
    where: [{ field: 'isActive', operator: '==', value: true }]
  });
};

export const getActiveEmployeesCount = async (): Promise<number> => {
  return await employeeService.count({
    where: [{ field: 'isActive', operator: '==', value: true }]
  });
};
