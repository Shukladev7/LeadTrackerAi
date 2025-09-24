import { Timestamp } from "firebase/firestore";

// Base interface for all business documents
export interface BusinessDocument {
  id?: string;
  createdAt?: Timestamp | string;
  updatedAt?: Timestamp;
}

// Employee interface
export interface Employee extends BusinessDocument {
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  address: string;
  isActive?: boolean;
  hireDate?: Timestamp | string;
  salary?: number;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

// Department interface
export interface Department extends BusinessDocument {
  name: string;
  description?: string;
  managerId?: string;
  budget?: number;
  employeeCount?: number;
}

// Employee Role interface
export interface EmployeeRole extends BusinessDocument {
  name: string;
  description?: string;
  permissions?: string[];
  level?: number;
}

// Lead Source interface
export interface LeadSource extends BusinessDocument {
  name: string;
  description?: string;
  isActive?: boolean;
  cost?: number;
  conversionRate?: number;
}

// Product interface
export interface Product extends BusinessDocument {
  name: string;
  description: string;
  price: number;
  gstRate: number;
  skus?: string[];
  catalogueUrl?: string; // Legacy field - will be deprecated
  cataloguePdf?: {
    url: string; // Base64 data URL
    fileName: string;
    filePath: string;
    uploadedAt: string;
    base64Data: string; // The actual base64 string for storage
  };
  category?: string;
  isActive?: boolean;
  stockQuantity?: number;
  minStockLevel?: number;
  supplier?: string;
  tags?: string[];
}

// Lead Activity interface
export interface LeadActivity {
  id: string;
  date: Timestamp | string;
  type: 'Email' | 'Call' | 'Meeting' | 'Proposal Sent' | 'Revision Request' | 'Negotiation' | 'Follow-up' | 'Status Change' | 'Other';
  notes: string;
  userId?: string;
  attachments?: string[];
  // Additional fields for status change tracking
  previousStatus?: string;
  newStatus?: string;
  changedBy?: string;
}

// Lead Product interface
export interface LeadProduct {
  productId: string;
  quantity: number;
  rate: number;
  discount?: number;
  notes?: string;
}

// Lead interface
export interface Lead extends BusinessDocument {
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  status: 'New' | 'In Discussion' | 'Negotiation' | 'Closed - Won' | 'Closed - Lost' | 'On Hold';
  source: string;
  products: LeadProduct[];
  activities: LeadActivity[];
  assignedTo?: string;
  priority?: 'Low' | 'Medium' | 'High' | 'Urgent';
  expectedCloseDate?: Timestamp | string;
  estimatedValue?: number;
  tags?: string[];
  customFields?: Record<string, any>;
  createdBy?: string; // Name or email of the user who created the lead
}

// Quotation Product interface
export interface QuotationProduct {
  productId: string;
  quantity: number;
  rate: number;
  gstRate: number;
  discount?: number;
  total?: number;
}

// Populated Quotation Product interface (with product details)
export interface PopulatedQuotationProduct extends QuotationProduct {
  product: Product;
  amount: number;
  gstAmount: number;
}

// Quotation Template interface
export interface QuotationTemplate extends BusinessDocument {
  name: string;
  companyName: string;
  companyAddress: string;
  companyGst: string;
  termsAndConditions: string;
  logoUrl?: string;
  isDefault?: boolean;
  emailTemplate?: string;
  footerText?: string;
}

// Quotation interface
export interface Quotation extends BusinessDocument {
  leadId: string;
  templateId: string;
  quotationNumber: string;
  date: string;
  validUntil: string;
  status: 'Draft' | 'Sent' | 'Accepted' | 'Rejected' | 'Expired';
  products: QuotationProduct[];
  subTotal: number;
  totalGst: number;
  grandTotal: number;
  discount?: number;
  companyName?: string;
  companyAddress?: string;
  companyGst?: string;
  termsAndConditions?: string;
  logoUrl?: string;
  notes?: string;
  sentAt?: Timestamp | string;
  acceptedAt?: Timestamp | string;
  rejectedAt?: Timestamp | string;
}

// Customer interface (derived from successful leads)
export interface Customer extends BusinessDocument {
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  address?: string;
  gstNumber?: string;
  contactPerson?: string;
  leadId?: string; // Reference to original lead
  totalValue?: number;
  lastOrderDate?: Timestamp | string;
  status: 'Active' | 'Inactive' | 'Blocked';
  paymentTerms?: string;
  creditLimit?: number;
  tags?: string[];
}

// Order interface
export interface Order extends BusinessDocument {
  customerId: string;
  quotationId?: string;
  orderNumber: string;
  orderDate: Timestamp | string;
  expectedDeliveryDate?: Timestamp | string;
  actualDeliveryDate?: Timestamp | string;
  status: 'Pending' | 'Confirmed' | 'In Production' | 'Ready' | 'Shipped' | 'Delivered' | 'Cancelled';
  products: QuotationProduct[];
  subTotal: number;
  totalGst: number;
  grandTotal: number;
  discount?: number;
  shippingAddress?: string;
  billingAddress?: string;
  paymentStatus: 'Pending' | 'Partial' | 'Paid' | 'Overdue';
  paymentMethod?: string;
  notes?: string;
  assignedTo?: string;
}

// Invoice interface
export interface Invoice extends BusinessDocument {
  orderId: string;
  customerId: string;
  invoiceNumber: string;
  invoiceDate: Timestamp | string;
  dueDate: Timestamp | string;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue' | 'Cancelled';
  products: QuotationProduct[];
  subTotal: number;
  totalGst: number;
  grandTotal: number;
  amountPaid?: number;
  balanceAmount?: number;
  paymentTerms?: string;
  notes?: string;
}

// Payment interface
export interface Payment extends BusinessDocument {
  invoiceId: string;
  customerId: string;
  amount: number;
  paymentDate: Timestamp | string;
  paymentMethod: 'Cash' | 'Cheque' | 'Bank Transfer' | 'UPI' | 'Card' | 'Other';
  referenceNumber?: string;
  notes?: string;
  status: 'Pending' | 'Cleared' | 'Failed' | 'Cancelled';
}

// Task interface
export interface Task extends BusinessDocument {
  title: string;
  description?: string;
  assignedTo: string;
  assignedBy?: string;
  dueDate?: Timestamp | string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Todo' | 'In Progress' | 'Review' | 'Done' | 'Cancelled';
  category?: string;
  tags?: string[];
  relatedTo?: {
    type: 'lead' | 'customer' | 'order' | 'quotation';
    id: string;
  };
  completedAt?: Timestamp | string;
  estimatedHours?: number;
  actualHours?: number;
}

// Company Settings interface
export interface CompanySettings extends BusinessDocument {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyWebsite?: string;
  gstNumber: string;
  logoUrl?: string;
  currency: string;
  timezone: string;
  fiscalYearStart: string;
  defaultPaymentTerms: string;
  emailSignature?: string;
  bankDetails?: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
}

// Analytics/Dashboard data interfaces
export interface DashboardMetrics {
  totalLeads: number;
  activeLeads: number;
  convertedLeads: number;
  totalRevenue: number;
  monthlyRevenue: number;
  pendingQuotations: number;
  overdueInvoices: number;
  topProducts: Array<{
    productId: string;
    productName: string;
    totalSold: number;
    revenue: number;
  }>;
  leadsBySource: Array<{
    source: string;
    count: number;
    conversionRate: number;
  }>;
  salesByMonth: Array<{
    month: string;
    revenue: number;
    orders: number;
  }>;
}

// Notification interface
export interface Notification extends BusinessDocument {
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  actionUrl?: string;
  relatedTo?: {
    type: string;
    id: string;
  };
}

// User Activity Log interface
export interface ActivityLog extends BusinessDocument {
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  details?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

// Collection names constants
export const COLLECTIONS = {
  EMPLOYEES: 'employees',
  DEPARTMENTS: 'departments',
  EMPLOYEE_ROLES: 'employeeRoles',
  LEAD_SOURCES: 'leadSources',
  PRODUCTS: 'products',
  LEADS: 'leads',
  QUOTATIONS: 'quotations',
  QUOTATION_TEMPLATES: 'quotationTemplates',
  CUSTOMERS: 'customers',
  ORDERS: 'orders',
  INVOICES: 'invoices',
  PAYMENTS: 'payments',
  TASKS: 'tasks',
  COMPANY_SETTINGS: 'companySettings',
  NOTIFICATIONS: 'notifications',
  ACTIVITY_LOGS: 'activityLogs',
} as const;

// Type for collection names
export type CollectionName = typeof COLLECTIONS[keyof typeof COLLECTIONS];
