
import { 
  employeeService, 
  leadService, 
  productService, 
  productCategoryService,
  quotationService,
  departmentsService,
  employeeRolesService,
  leadSourcesService,
  productCategoriesService,
  quotationTemplatesService,
  quotationStatusesService,
  unitsOfMeasurementService,
  manufacturingCompaniesService,
  taskService,
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
  ProductCategory,
  LeadActivity,
  QuotationStatusConfig,
  UnitOfMeasurement,
  ManufacturingCompany,
  Task,
} from './business-types';
import { Timestamp, doc, getDoc, runTransaction, collection, query, where, orderBy, limit as fsLimit, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

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

// Build a unified lowercase search index string for quotations.
// Scope is intentionally narrow and token-based search will be applied on:
// - quotation number
// - quotation prefix
// - customer/lead name
// - company name
function buildQuotationSearchIndex(q: any): string {
  try {
    const parts: string[] = [];

    if (q.quotationNumber) parts.push(String(q.quotationNumber));
    if (q.prefix) parts.push(String(q.prefix));
    if (q.leadName) parts.push(String(q.leadName));
    if (q.companyName) parts.push(String(q.companyName));
    if (q.leadCompany) parts.push(String(q.leadCompany));

    return parts
      .join(' ')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  } catch {
    return '';
  }
}

function buildQuotationSearchTokens(q: any): string[] {
  try {
    const rawTokens: string[] = [];

    // Always include the full quotation number as a token if available
    if (q.quotationNumber) {
      rawTokens.push(String(q.quotationNumber).toLowerCase());
    }

    const text = buildQuotationSearchIndex(q);
    if (text) {
      rawTokens.push(
        ...text
          .toLowerCase()
          .split(/[^a-z0-9]+/i)
          .filter(Boolean),
      );
    }

    const unique = Array.from(new Set(rawTokens));
    return unique;
  } catch {
    return [];
  }
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
  price: number;
  gstRate: number;
  categoryId?: string;
  description?: string;
  uom?: string;
  skus?: string[];
  catalogueUrl?: string;
  cataloguePdf?: {
    url: string;
    fileName: string;
    filePath: string;
    uploadedAt: string;
  };
  productImage?: {
    url: string;
    fileName: string;
    filePath: string;
    uploadedAt: string;
  };
  thumbnailImage?: {
    url: string;
    fileName: string;
    filePath: string;
    uploadedAt: string;
  };
  manufacturingCompany?: string;
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
  manufacturingCompany?: string;
}

export interface NewTask {
  title: string;
  description?: string;
  assignedTo: string;
  assignedBy?: string;
  dueDate?: string;
  priority: Task['priority'];
  status: Task['status'];
  category?: string;
  tags?: string[];
  relatedTo?: Task['relatedTo'];
  estimatedHours?: number;
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
export const getLeads = async (query?: string, status?: string, source?: string, product?: string): Promise<Lead[]> => {
  let leads: Lead[] = [];
  
  if (status) {
    leads = await leadService.getLeadsByStatus(status as Lead['status']);
  } else {
    leads = await leadService.getAll();
  }
  
  // Convert to plain objects
  leads = leads.map(lead => convertFirestoreDocToPlain(lead));
  
  // Apply text search filter
  if (query) {
    const lowercasedQuery = query.toLowerCase();
    leads = leads.filter(
      lead =>
        lead.name.toLowerCase().includes(lowercasedQuery) ||
        lead.company.toLowerCase().includes(lowercasedQuery)
    );
  }
  
  // Apply source filter
  if (source) {
    leads = leads.filter(lead => lead.source === source);
  }
  
  // Apply product filter
  if (product) {
    leads = leads.filter(lead => 
      lead.products && lead.products.some(p => p.productId === product)
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

// Dashboard helpers
type DashboardStatsDoc = {
  totalLeads?: number;
  totalQuotations?: number;
  totalProducts?: number;
  statusBreakdown?: { name: string; value: number }[];
  quotationsByMonth?: { month: string; value: number }[];
  sourceDistribution?: { name: string; value: number }[];
  productDemand?: { name: string; value: number }[];
  averageConversionTime?: number;
  totalConversionDays?: number;
  conversionSamples?: number;
  // Number of Closed - Won leads per source. Used to derive source-wise conversion rates.
  sourceWon?: { name: string; value: number }[];
};

const dashboardStatsRef = doc(db, 'stats', 'dashboard');

function ensureNumber(n: unknown, fallback = 0): number {
  return typeof n === 'number' && !isNaN(n) ? n : fallback;
}

function adjustNamedValue(
  list: { name: string; value: number }[] | undefined,
  name: string,
  delta: number,
): { name: string; value: number }[] {
  const result = [...(list || [])];
  const idx = result.findIndex((item) => item.name === name);
  if (idx === -1) {
    if (delta !== 0) {
      result.push({ name, value: delta });
    }
  } else {
    const next = ensureNumber(result[idx].value) + delta;
    result[idx] = { name, value: Math.max(next, 0) };
  }
  return result;
}

function adjustMonthValue(
  list: { month: string; value: number }[] | undefined,
  month: string,
  delta: number,
): { month: string; value: number }[] {
  const result = [...(list || [])];
  const idx = result.findIndex((item) => item.month === month);
  if (idx === -1) {
    if (delta !== 0) {
      result.push({ month, value: delta });
    }
  } else {
    const next = ensureNumber(result[idx].value) + delta;
    result[idx] = { month, value: Math.max(next, 0) };
  }
  return result;
}

async function updateDashboardStats(
  updater: (current: DashboardStatsDoc) => void,
): Promise<void> {
  await runTransaction(db, async (tx) => {
    const snap = await tx.get(dashboardStatsRef);
    const base: DashboardStatsDoc = snap.exists() ? { ...(snap.data() as any) } : {};

    const current: DashboardStatsDoc = {
      totalLeads: ensureNumber(base.totalLeads),
      totalQuotations: ensureNumber(base.totalQuotations),
      totalProducts: ensureNumber(base.totalProducts),
      statusBreakdown: base.statusBreakdown || [],
      quotationsByMonth: base.quotationsByMonth || [],
      sourceDistribution: base.sourceDistribution || [],
      productDemand: base.productDemand || [],
      averageConversionTime: ensureNumber(base.averageConversionTime),
      totalConversionDays: ensureNumber(base.totalConversionDays),
      conversionSamples: ensureNumber(base.conversionSamples),
      sourceWon: base.sourceWon || [],
    };

    updater(current);

    tx.set(dashboardStatsRef, current, { merge: true });
  });
}

function mapLeadStatusToBucket(status: Lead['status']): string | null {
  switch (status) {
    case 'New':
      return 'New';
    case 'In Discussion':
      return 'Discussion';
    case 'Negotiation':
      return 'Negotiation';
    case 'Closed - Won':
      return 'Won';
    case 'Closed - Lost':
      return 'Lost';
    default:
      return null;
  }
}

async function incrementLeadStatsOnCreate(lead: Lead): Promise<void> {
  const bucket = mapLeadStatusToBucket(lead.status as Lead['status']);
  const sourceName = lead.source || 'Unknown';

  await updateDashboardStats((stats) => {
    stats.totalLeads = ensureNumber(stats.totalLeads) + 1;
    if (bucket) {
      stats.statusBreakdown = adjustNamedValue(stats.statusBreakdown, bucket, 1);
    }
    stats.sourceDistribution = adjustNamedValue(
      stats.sourceDistribution,
      sourceName,
      1,
    );

    if (lead.status === 'Closed - Won') {
      stats.sourceWon = adjustNamedValue(stats.sourceWon, sourceName, 1);
    }
  });
}

async function updateLeadStatsOnStatusChange(
  previousStatus: Lead['status'],
  nextStatus: Lead['status'],
  lead: Lead,
): Promise<void> {
  const prevBucket = mapLeadStatusToBucket(previousStatus);
  const nextBucket = mapLeadStatusToBucket(nextStatus);
  const sourceName = lead.source || 'Unknown';

  await updateDashboardStats((stats) => {
    if (prevBucket) {
      stats.statusBreakdown = adjustNamedValue(
        stats.statusBreakdown,
        prevBucket,
        -1,
      );
    }
    if (nextBucket) {
      stats.statusBreakdown = adjustNamedValue(
        stats.statusBreakdown,
        nextBucket,
        1,
      );
    }

    // Maintain per-source won counts for source-wise conversion.
    if (previousStatus === 'Closed - Won') {
      stats.sourceWon = adjustNamedValue(stats.sourceWon, sourceName, -1);
    }
    if (nextStatus === 'Closed - Won') {
      stats.sourceWon = adjustNamedValue(stats.sourceWon, sourceName, 1);
    }

    if (nextStatus === 'Closed - Won' && lead.createdAt) {
      try {
        const createdAtDate = new Date(lead.createdAt as any);
        const now = new Date();
        const diffMs = now.getTime() - createdAtDate.getTime();
        const days = Math.max(Math.round(diffMs / (1000 * 60 * 60 * 24)), 0);
        const totalDays = ensureNumber(stats.totalConversionDays) + days;
        const samples = ensureNumber(stats.conversionSamples) + 1;
        stats.totalConversionDays = totalDays;
        stats.conversionSamples = samples;
        stats.averageConversionTime =
          samples > 0 ? Math.round(totalDays / samples) : 0;
      } catch (e) {
        console.error('Failed to update averageConversionTime:', e);
      }
    }
  });
}

async function incrementQuotationStatsOnCreate(quotation: Quotation): Promise<void> {
  const createdAtValue: any = (quotation as any).createdAt || quotation.date;
  let monthLabel: string | null = null;
  try {
    if (createdAtValue) {
      const d = new Date(createdAtValue as any);
      if (!isNaN(d.getTime())) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const key = `${year}-${String(month).padStart(2, '0')}`;
        monthLabel = key;
      }
    }
  } catch {
    monthLabel = null;
  }

  await updateDashboardStats((stats) => {
    stats.totalQuotations = ensureNumber(stats.totalQuotations) + 1;
    if (monthLabel) {
      stats.quotationsByMonth = adjustMonthValue(
        stats.quotationsByMonth,
        monthLabel,
        1,
      );
    }
  });
}

async function incrementProductStatsOnCreate(): Promise<void> {
  await updateDashboardStats((stats) => {
    stats.totalProducts = ensureNumber(stats.totalProducts) + 1;
  });
}

async function logLeadActivityDocument(lead: Lead, activity: Activity): Promise<void> {
  try {
    const activitiesRef = collection(db, 'activities');
    await addDoc(activitiesRef, {
      type: activity.type,
      date: new Date(activity.date as any),
      lead: {
        id: (lead.id || '') as string,
        name: lead.name,
        company: lead.company,
      },
      notes: (activity as any).notes,
    });
  } catch (e) {
    console.error('Failed to log activity document:', e);
  }
}

export const getRecentActivities = async (limitCount: number): Promise<{ lead: Lead; activity: Activity }[]> => {
  const activitiesRef = collection(db, 'activities');
  const q = query(activitiesRef, orderBy('date', 'desc'), fsLimit(limitCount));
  const snapshot = await getDocs(q);

  const results: { lead: Lead; activity: Activity }[] = [];

  snapshot.forEach((docSnap) => {
    const raw = convertTimestampToPlain(docSnap.data());
    const lead = raw.lead as Lead;
    const activity: Activity = {
      id: raw.id || docSnap.id,
      date: raw.date,
      type: raw.type,
      notes: raw.notes,
    };
    results.push({ lead, activity });
  });

  return results;
};

// Task functions
export const getTasks = async (): Promise<Task[]> => {
  const tasks = await taskService.getAll();
  return tasks.map(task => convertFirestoreDocToPlain(task));
};

export const getTasksByAssignee = async (assignedTo: string): Promise<Task[]> => {
  const tasks = await taskService.getTasksByAssignee(assignedTo);
  return tasks.map(task => convertFirestoreDocToPlain(task));
};

export const addTask = async (taskData: NewTask): Promise<Task> => {
  const id = await taskService.create(taskData as any);
  const created = await taskService.getById(id);
  if (!created) {
    throw new Error('Failed to create task');
  }
  return convertFirestoreDocToPlain(created);
};

export const updateTask = async (id: string, data: Partial<Omit<Task, 'id'>>): Promise<void> => {
  await taskService.update(id, data as any);
};

export const deleteTask = async (id: string): Promise<{ success: boolean }> => {
  await taskService.delete(id);
  return { success: true };
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

  const estimatedValue = leadData.products?.reduce(
    (sum, product) => sum + (product.quantity * product.rate),
    0,
  ) || 0;

  const id = await leadService.create({
    ...restOfLeadData,
    activities: initialActivity,
    priority: 'Medium',
    estimatedValue,
  });

  // Avoid an extra Firestore read by constructing the newly created lead
  // from the data we already have, using the generated id.
  const newLead: Lead = {
    ...(restOfLeadData as any),
    id: id as string,
    activities: initialActivity,
    priority: 'Medium',
    estimatedValue,
  } as any;

  try {
    await incrementLeadStatsOnCreate(newLead as any);
  } catch (e) {
    console.error('Failed to increment lead stats on create:', e);
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

  try {
    await logLeadActivityDocument(lead as any, newActivity as any);
  } catch (e) {
    console.error('Failed to log recent activity document:', e);
  }

  return convertFirestoreDocToPlain(newActivity);
};

export const updateLeadStatus = async (leadId: string, status: Lead['status']): Promise<Lead> => {
  const existingLead = await leadService.getById(leadId);
  if (!existingLead) {
    throw new Error('Lead not found');
  }

  const previousStatus = existingLead.status as Lead['status'];

  await leadService.updateStatus(leadId, status);
  const updatedLead = await leadService.getById(leadId);
  if (!updatedLead) {
    throw new Error('Lead not found after update');
  }

  try {
    await updateLeadStatsOnStatusChange(previousStatus, status, convertFirestoreDocToPlain(updatedLead));
  } catch (e) {
    console.error('Failed to update stats on lead status change:', e);
  }
  return convertFirestoreDocToPlain(updatedLead);
};

export const updateLead = async (leadId: string, leadData: UpdatableLeadData): Promise<Lead> => {
  await leadService.update(leadId, leadData);
  const updatedLead = await leadService.getById(leadId);
  if (!updatedLead) {
    throw new Error('Lead not found after update');
  }

  // Optional but recommended: keep denormalized lead fields on quotations in sync
  try {
    const quotationsForLead = await quotationService.getWithQuery({
      where: [{ field: 'leadId', operator: '==', value: leadId }],
    });

    await Promise.all(
      quotationsForLead.map((q: any) => {
        const payload: any = {
          leadName: updatedLead.name,
          leadCompany: updatedLead.company,
        };

        const next = {
          ...q,
          ...payload,
        };
        const searchIndex = buildQuotationSearchIndex(next);
        if (searchIndex) {
          payload.searchIndex = searchIndex;
        }
        const searchTokens = buildQuotationSearchTokens(next);
        if (searchTokens.length) {
          payload.searchTokens = searchTokens;
        }

        return quotationService.update(q.id as string, payload);
      })
    );
  } catch (e) {
    console.error('Failed to sync quotations after lead update:', e);
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
  
  try {
    await incrementProductStatsOnCreate();
  } catch (e) {
    console.error('Failed to increment product stats on create:', e);
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

export const updateLeadSource = async (id: string, name: string): Promise<LeadSource> => {
  await leadSourcesService.update(id, { name });
  const updated = await leadSourcesService.getById(id);
  if (!updated) {
    throw new Error('Lead source not found after update');
  }
  return convertFirestoreDocToPlain(updated);
};

export const deleteLeadSource = async (id: string): Promise<{ success: boolean }> => {
  await leadSourcesService.delete(id);
  return { success: true };
};

// Quotation Status functions
export const getQuotationStatuses = async (): Promise<QuotationStatusConfig[]> => {
  const statuses = await quotationStatusesService.getAll();
  return statuses.map(status => convertFirestoreDocToPlain(status));
};

export const addQuotationStatus = async (name: string): Promise<QuotationStatusConfig> => {
  const id = await quotationStatusesService.create({
    name,
    isActive: true,
  });

  const newStatus = await quotationStatusesService.getById(id);
  if (!newStatus) {
    throw new Error('Failed to create quotation status');
  }

  return convertFirestoreDocToPlain(newStatus);
};

export const updateQuotationStatus = async (id: string, name: string): Promise<QuotationStatusConfig> => {
  await quotationStatusesService.update(id, { name });
  const updated = await quotationStatusesService.getById(id);
  if (!updated) {
    throw new Error('Quotation status not found after update');
  }
  return convertFirestoreDocToPlain(updated);
};

export const deleteQuotationStatus = async (id: string): Promise<{ success: boolean }> => {
  await quotationStatusesService.delete(id);
  return { success: true };
};

// Product Category functions
export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const categories = await productCategoriesService.getAll();
  return categories.map(cat => convertFirestoreDocToPlain(cat));
};

export const getProductCategoryById = async (id: string): Promise<ProductCategory | undefined> => {
  const category = await productCategoriesService.getById(id);
  return category ? convertFirestoreDocToPlain(category) : undefined;
};

export const addProductCategory = async (name: string, description: string): Promise<ProductCategory> => {
  const id = await productCategoriesService.create({
    name,
    description,
    isActive: true
  });
  
  const newCategory = await productCategoriesService.getById(id);
  if (!newCategory) {
    throw new Error('Failed to create product category');
  }
  
  return convertFirestoreDocToPlain(newCategory);
};

export const updateProductCategory = async (id: string, name: string, description: string): Promise<ProductCategory> => {
  await productCategoriesService.update(id, { name, description });
  const updatedCategory = await productCategoriesService.getById(id);
  if (!updatedCategory) {
    throw new Error('Product category not found after update');
  }
  return convertFirestoreDocToPlain(updatedCategory);
};

export const deleteProductCategory = async (id: string): Promise<{ success: boolean }> => {
  await productCategoriesService.delete(id);
  return { success: true };
};

// Quotation functions
export const getQuotations = async (): Promise<Quotation[]> => {
  // Fetch only the most recent quotations to keep dashboards and listings fast.
  const quotations = await quotationService.getWithQuery({
    orderBy: { field: 'createdAt', direction: 'desc' },
    limit: 100,
  });
  return quotations.map(q => convertFirestoreDocToPlain(q));
};

export const getQuotationsByLeadId = async (leadId: string): Promise<Quotation[]> => {
  const quotations = await quotationService.getWithQuery({
    where: [{ field: 'leadId', operator: '==', value: leadId }],
    orderBy: { field: 'createdAt', direction: 'desc' },
  });
  return quotations.map(q => convertFirestoreDocToPlain(q));
};

export const getQuotationById = async (id: string): Promise<Quotation | undefined> => {
  const quotation = await quotationService.getById(id);
  return quotation ? convertFirestoreDocToPlain(quotation) : undefined;
};

// Remove any undefined values from a plain object so Firestore accepts it.
function sanitizeForFirestore<T extends Record<string, any>>(obj: T): T {
  const cleaned: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      cleaned[key] = value;
    }
  }
  return cleaned as T;
}

export const addQuotation = async (
  quotationData: Omit<Quotation, 'id' | 'createdAt' | 'quotationNumber'>,
  quotationPrefix: string,
): Promise<Quotation> => {
  console.log('Data service received prefix:', quotationPrefix);
  const prefix = quotationPrefix?.trim() || 'QUO';
  console.log('Final prefix being used:', prefix);
  // Fetch lead (for denormalized fields) before the transaction. Numbering
  // itself will be computed and the quotation created inside a transaction.
  const leadForDenorm = quotationData.leadId
    ? await leadService.getById(quotationData.leadId)
    : null;

  // Ensure denormalized lead fields are populated even if the caller
  // does not provide them (e.g. from the client-side dialog).
  const payload: any = sanitizeForFirestore({ ...quotationData });
  try {
    if (leadForDenorm) {
      payload.leadName = (leadForDenorm as any).name ?? payload.leadName;
      payload.leadCompany = (leadForDenorm as any).company ?? payload.leadCompany;
    }
  } catch (e) {
    console.error('Failed to denormalize lead fields when adding quotation:', e);
  }
  const quotationsRef = collection(db, 'quotations');

  // Query once for the current highest number for this prefix.
  const highestQuery = query(
    quotationsRef,
    where('prefix', '==', prefix),
    orderBy('number', 'desc'),
    fsLimit(1),
  );

  const highestSnapshot = await getDocs(highestQuery);

  let highestNumber = 0;
  let highestDocRef: any = null;
  if (!highestSnapshot.empty) {
    const snap = highestSnapshot.docs[0];
    highestDocRef = snap.ref;
    highestNumber = (snap.data().number as number) || 0;
  }

  let newId: string | null = null;
  let attempts = 0;

  while (!newId && attempts < 5) {
    attempts += 1;

    try {
      await runTransaction(db, async (tx) => {
        // Re-read the highest doc inside the transaction to guard against races.
        let baseHighest = highestNumber;
        if (highestDocRef) {
          const latestSnap = await tx.get(highestDocRef);
          if (latestSnap.exists()) {
            const latestData: any = latestSnap.data();
            baseHighest = (latestData?.number as number) || 0;
          }
        }

        const nextNumber = baseHighest + 1;
        const quotationNumber = `${prefix}-${String(nextNumber).padStart(4, '0')}`;

        const baseForIndex = { ...payload, quotationNumber } as any;
        const searchIndex = buildQuotationSearchIndex(baseForIndex);
        const searchTokens = buildQuotationSearchTokens(baseForIndex);

        const docRef = doc(quotationsRef);
        newId = docRef.id;

        const docData: any = sanitizeForFirestore({
          ...payload,
          quotationNumber,
          prefix,
          number: nextNumber,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        if (searchIndex) {
          docData.searchIndex = searchIndex;
        }
        if (searchTokens.length) {
          docData.searchTokens = searchTokens;
        }

        tx.set(docRef, docData);
      });
    } catch (e: any) {
      console.error('Transaction conflict while creating quotation, retrying...', e);
      newId = null;
      continue;
    }
  }

  if (!newId) {
    throw new Error('Failed to create quotation after multiple attempts');
  }

  const newQuotation = await quotationService.getById(newId);
  if (!newQuotation) {
    throw new Error('Failed to read created quotation');
  }
  try {
    await incrementQuotationStatsOnCreate(convertFirestoreDocToPlain(newQuotation));
  } catch (e) {
    console.error('Failed to increment quotation stats on create:', e);
  }

  return convertFirestoreDocToPlain(newQuotation);
};

export const updateQuotation = async (id: string, quotationData: Partial<Quotation>): Promise<Quotation> => {
  await quotationService.update(id, quotationData);
  const updatedQuotation = await quotationService.getById(id);
  if (!updatedQuotation) {
    throw new Error('Quotation not found after update');
  }

  try {
    const searchIndex = buildQuotationSearchIndex(updatedQuotation as any);
    const searchTokens = buildQuotationSearchTokens(updatedQuotation as any);
    const payload: any = {};
    if (searchIndex && (updatedQuotation as any).searchIndex !== searchIndex) {
      payload.searchIndex = searchIndex;
      (updatedQuotation as any).searchIndex = searchIndex;
    }
    if (searchTokens.length && JSON.stringify((updatedQuotation as any).searchTokens || []) !== JSON.stringify(searchTokens)) {
      payload.searchTokens = searchTokens;
      (updatedQuotation as any).searchTokens = searchTokens;
    }
    if (Object.keys(payload).length > 0) {
      await quotationService.update(id, payload);
    }
  } catch (e) {
    console.error('Failed to rebuild searchIndex on quotation update:', e);
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

export const updateEmployeeRole = async (id: string, name: string): Promise<EmployeeRole> => {
  await employeeRolesService.update(id, { name });
  const updated = await employeeRolesService.getById(id);
  if (!updated) {
    throw new Error('Employee role not found after update');
  }
  return convertFirestoreDocToPlain(updated);
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

export const updateDepartment = async (id: string, name: string): Promise<Department> => {
  await departmentsService.update(id, { name });
  const updated = await departmentsService.getById(id);
  if (!updated) {
    throw new Error('Department not found after update');
  }
  return convertFirestoreDocToPlain(updated);
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
  try {
    const statsRef = doc(db, 'stats', 'quotations');
    const snap = await getDoc(statsRef);
    const data = snap.data() as any;
    if (data && typeof data.total === 'number') {
      return data.total;
    }
  } catch (e) {
    console.error('Failed to read stats/quotations.total, falling back to count():', e);
  }

  // Fallback: direct count (more expensive, but safe as a backup)
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

// Units of Measurement functions
export const getUnitsOfMeasurement = async (): Promise<UnitOfMeasurement[]> => {
  const units = await unitsOfMeasurementService.getAll();
  return units.map(unit => convertFirestoreDocToPlain(unit));
};

export const addUnitOfMeasurement = async (name: string): Promise<UnitOfMeasurement> => {
  const id = await unitsOfMeasurementService.create({
    name,
    isActive: true,
  });

  const newUnit = await unitsOfMeasurementService.getById(id);
  if (!newUnit) {
    throw new Error('Failed to create unit of measurement');
  }

  return convertFirestoreDocToPlain(newUnit);
};

export const updateUnitOfMeasurement = async (id: string, name: string): Promise<UnitOfMeasurement> => {
  await unitsOfMeasurementService.update(id, { name });
  const updated = await unitsOfMeasurementService.getById(id);
  if (!updated) {
    throw new Error('Unit of measurement not found after update');
  }
  return convertFirestoreDocToPlain(updated);
};

export const deleteUnitOfMeasurement = async (id: string): Promise<{ success: boolean }> => {
  await unitsOfMeasurementService.delete(id);
  return { success: true };
};

// Manufacturing Company functions
export const getManufacturingCompanies = async (): Promise<ManufacturingCompany[]> => {
  const companies = await manufacturingCompaniesService.getAll();
  return companies.map(company => convertFirestoreDocToPlain(company));
};

export const addManufacturingCompany = async (name: string): Promise<ManufacturingCompany> => {
  const id = await manufacturingCompaniesService.create({
    name,
    isActive: true,
  });

  const newCompany = await manufacturingCompaniesService.getById(id);
  if (!newCompany) {
    throw new Error('Failed to create manufacturing company');
  }

  return convertFirestoreDocToPlain(newCompany);
};

export const updateManufacturingCompany = async (id: string, name: string): Promise<ManufacturingCompany> => {
  await manufacturingCompaniesService.update(id, { name });
  const updatedCompany = await manufacturingCompaniesService.getById(id);
  if (!updatedCompany) {
    throw new Error('Manufacturing company not found after update');
  }
  return convertFirestoreDocToPlain(updatedCompany);
};

export const deleteManufacturingCompany = async (id: string): Promise<{ success: boolean }> => {
  await manufacturingCompaniesService.delete(id);
  return { success: true };
};
