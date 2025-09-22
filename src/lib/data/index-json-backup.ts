
'use server';

import fs from 'fs/promises';
import path from 'path';
import { Lead, Activity, Product, LeadSource, UpdatableLeadData, Quotation, QuotationTemplate, NewProduct, Employee, NewEmployee, EmployeeRoleData, Department } from '../types';

const dataPath = path.join(process.cwd(), 'src', 'lib', 'data');

async function readData<T>(filename: string): Promise<T[]> {
  try {
    const filePath = path.join(dataPath, filename);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    if (isNodeError(error) && error.code === 'ENOENT') {
      // If the file doesn't exist, create it with an empty array
      await writeData(filename, []);
      return [];
    }
    console.error(`Error reading ${filename}:`, error);
    throw new Error(`Could not read ${filename}`);
  }
}

async function writeData<T>(filename: string, data: T[]): Promise<void> {
  try {
    const filePath = path.join(dataPath, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error)
{
    console.error(`Error writing ${filename}:`, error);
    throw new Error(`Could not write to ${filename}`);
  }
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
    return error instanceof Error;
}

export const getLeads = async (query?: string, status?: string): Promise<Lead[]> => {
  let leads = await readData<Lead>('leads.json');
  
  if (query) {
    const lowercasedQuery = query.toLowerCase();
    leads = leads.filter(
      lead =>
        lead.name.toLowerCase().includes(lowercasedQuery) ||
        lead.company.toLowerCase().includes(lowercasedQuery)
    );
  }

  if (status) {
    leads = leads.filter(lead => lead.status === status);
  }
  
  return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getLeadById = async (id: string): Promise<Lead | undefined> => {
    const leads = await getLeads();
    const lead = leads.find(lead => lead.id === id);
    if (!lead) return undefined;
    
    return {
      ...lead,
      activities: lead.activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    };
};

export const getRecentActivities = async (limit: number): Promise<{ lead: Lead; activity: Activity }[]> => {
    const leads = await getLeads();
    const allActivities = leads.flatMap(lead => 
        lead.activities.map(activity => ({ lead, activity }))
    );
    return allActivities
        .sort((a, b) => new Date(b.activity.date).getTime() - new Date(a.activity.date).getTime())
        .slice(0, limit);
}

export const getProducts = async (): Promise<Product[]> => {
  return await readData<Product>('products.json');
}

export const getLeadSources = async (): Promise<LeadSource[]> => {
    return await readData<LeadSource>('lead-sources.json');
}

export const addProduct = async (productData: NewProduct): Promise<Product> => {
  const products = await getProducts();
  const newProduct: Product = {
    ...productData,
    id: `prod-${Date.now()}`,
  };
  products.unshift(newProduct);
  await writeData<Product>('products.json', products);
  return newProduct;
};

export const updateProduct = async (id: string, productData: NewProduct): Promise<Product> => {
    const products = await getProducts();
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        throw new Error('Product not found');
    }
    const updatedProduct = { ...products[productIndex], ...productData };
    products[productIndex] = updatedProduct;
    await writeData<Product>('products.json', products);
    return updatedProduct;
};

export const deleteProduct = async (id: string): Promise<{ success: boolean }> => {
    let products = await getProducts();
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    if (products.length === initialLength) {
        throw new Error('Product not found for deletion');
    }
    await writeData<Product>('products.json', products);
    return { success: true };
};


export const addLeadSource = async (name: string): Promise<LeadSource> => {
    const leadSources = await getLeadSources();
    const newSource: LeadSource = {
        id: `source-${Date.now()}`,
        name,
    };
    leadSources.unshift(newSource);
    await writeData<LeadSource>('lead-sources.json', leadSources);
    return newSource;
};

export const deleteLeadSource = async (id: string): Promise<{ success: boolean }> => {
    let leadSources = await getLeadSources();
    const initialLength = leadSources.length;
    leadSources = leadSources.filter(source => source.id !== id);
    await writeData<LeadSource>('lead-sources.json', leadSources);
    return { success: leadSources.length < initialLength };
};

export const addLead = async (leadData: Omit<Lead, 'id' | 'createdAt' | 'activities'> & { notes?: string }): Promise<Lead> => {
  const leads = await getLeads();
  const newId = `lead-${Date.now()}`;
  
  const initialActivity: Activity[] = [];
  if (leadData.notes) {
    initialActivity.push({
      id: `act-${newId}-1`,
      date: new Date().toISOString(),
      type: 'Email', 
      notes: `Lead created in the system. Initial notes: ${leadData.notes}`,
    });
  }

  const { notes, ...restOfLeadData } = leadData;

  const newLead: Lead = {
    ...restOfLeadData,
    id: newId,
    createdAt: new Date().toISOString(),
    activities: initialActivity,
  };
  leads.unshift(newLead);
  await writeData<Lead>('leads.json', leads);
  return newLead;
};

export const addActivityToLead = async (leadId: string, activityData: Omit<Activity, 'id' | 'date'>): Promise<Activity> => {
  const leads = await getLeads();
  const leadIndex = leads.findIndex(l => l.id === leadId);
  if (leadIndex === -1) {
    throw new Error('Lead not found');
  }

  const lead = leads[leadIndex];
  const newActivity: Activity = {
    ...activityData,
    id: `act-${leadId}-${lead.activities.length + 1}`,
    date: new Date().toISOString(),
  };
  lead.activities.unshift(newActivity);
  
  await writeData<Lead>('leads.json', leads);
  return newActivity;
};

export const updateLeadStatus = async (leadId: string, status: Lead['status']): Promise<Lead> => {
  const leads = await getLeads();
  const leadIndex = leads.findIndex(l => l.id === leadId);
  if (leadIndex === -1) {
    throw new Error('Lead not found');
  }

  leads[leadIndex].status = status;
  await writeData<Lead>('leads.json', leads);
  return leads[leadIndex];
};

export const updateLead = async (leadId: string, leadData: UpdatableLeadData): Promise<Lead> => {
    const leads = await getLeads();
    const leadIndex = leads.findIndex(l => l.id === leadId);
    if (leadIndex === -1) {
      throw new Error('Lead not found');
    }
  
    const originalLead = leads[leadIndex];
    const updatedLead: Lead = {
      ...originalLead,
      ...leadData,
    };
  
    leads[leadIndex] = updatedLead;
    await writeData<Lead>('leads.json', leads);
    return updatedLead;
};

// Quotation specific functions
export const getQuotations = async (): Promise<Quotation[]> => {
    const quotations = await readData<Quotation>('quotations.json');
    return quotations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getQuotationById = async (id: string): Promise<Quotation | undefined> => {
    const quotations = await getQuotations();
    return quotations.find(q => q.id === id);
};

export const addQuotation = async (quotationData: Omit<Quotation, 'id' | 'createdAt' | 'quotationNumber'>): Promise<Quotation> => {
    const quotations = await getQuotations();
    const newQuotationNumber = `QUO-${String(quotations.length + 1).padStart(4, '0')}`;
    const newQuotation: Quotation = {
        ...quotationData,
        id: `quo-${Date.now()}`,
        quotationNumber: newQuotationNumber,
        createdAt: new Date().toISOString(),
    };
    quotations.unshift(newQuotation);
    await writeData<Quotation>('quotations.json', quotations);
    return newQuotation;
};

export const getQuotationTemplates = async (): Promise<QuotationTemplate[]> => {
    return await readData<QuotationTemplate>('quotation-templates.json');
};

export const getQuotationTemplateById = async (id: string): Promise<QuotationTemplate | undefined> => {
    const templates = await getQuotationTemplates();
    return templates.find(t => t.id === id);
};

export const addQuotationTemplate = async (templateData: Omit<QuotationTemplate, 'id'>): Promise<QuotationTemplate> => {
    const templates = await getQuotationTemplates();
    const newTemplate: QuotationTemplate = {
        ...templateData,
        id: `template-${Date.now()}`,
    };
    templates.unshift(newTemplate);
    await writeData<QuotationTemplate>('quotation-templates.json', templates);
    return newTemplate;
};

export const updateQuotationTemplate = async (id: string, templateData: QuotationTemplate): Promise<QuotationTemplate> => {
    const templates = await getQuotationTemplates();
    const templateIndex = templates.findIndex(t => t.id === id);
    if (templateIndex === -1) {
        throw new Error('Template not found');
    }
    templates[templateIndex] = { ...templates[templateIndex], ...templateData };
    await writeData<QuotationTemplate>('quotation-templates.json', templates);
    return templates[templateIndex];
}

export const deleteQuotationTemplate = async (id: string): Promise<{ success: boolean }> => {
    let templates = await getQuotationTemplates();
    const initialLength = templates.length;
    templates = templates.filter(t => t.id !== id);
    if (templates.length === initialLength) {
        throw new Error('Template not found for deletion');
    }
    await writeData<QuotationTemplate>('quotation-templates.json', templates);
    return { success: true };
}


// Employee specific functions
export const getEmployees = async (): Promise<Employee[]> => {
    const employees = await readData<Employee>('employees.json');
    return employees.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getEmployeeById = async (id: string): Promise<Employee | undefined> => {
    const employees = await getEmployees();
    return employees.find(employee => employee.id === id);
};

export const addEmployee = async (employeeData: NewEmployee): Promise<Employee> => {
    const employees = await getEmployees();
    const newEmployee: Employee = {
        ...employeeData,
        id: `emp-${Date.now()}`,
        createdAt: new Date().toISOString(),
    };
    employees.unshift(newEmployee);
    await writeData<Employee>('employees.json', employees);
    return newEmployee;
};

export const getEmployeeRoles = async (): Promise<EmployeeRoleData[]> => {
    return await readData<EmployeeRoleData>('employee-roles.json');
}

export const addEmployeeRole = async (name: string): Promise<EmployeeRoleData> => {
    const roles = await getEmployeeRoles();
    const newRole: EmployeeRoleData = {
        id: `role-${Date.now()}`,
        name,
    };
    roles.push(newRole);
    await writeData<EmployeeRoleData>('employee-roles.json', roles);
    return newRole;
}

export const deleteEmployeeRole = async (id: string): Promise<{ success: boolean }> => {
    let roles = await getEmployeeRoles();
    const initialLength = roles.length;
    roles = roles.filter(role => role.id !== id);
    await writeData<EmployeeRoleData>('employee-roles.json', roles);
    return { success: roles.length < initialLength };
}

export const getDepartments = async (): Promise<Department[]> => {
    return await readData<Department>('departments.json');
}

export const addDepartment = async (name: string): Promise<Department> => {
    const departments = await getDepartments();
    const newDepartment: Department = {
        id: `dept-${Date.now()}`,
        name,
    };
    departments.push(newDepartment);
    await writeData<Department>('departments.json', departments);
    return newDepartment;
}

export const deleteDepartment = async (id: string): Promise<{ success: boolean }> => {
    let departments = await getDepartments();
    const initialLength = departments.length;
    departments = departments.filter(dept => dept.id !== id);
    await writeData<Department>('departments.json', departments);
    return { success: departments.length < initialLength };
}
