
export type LeadStatus = 'New' | 'In Discussion' | 'Negotiation' | 'Closed - Won' | 'Closed - Lost';

export const ALL_STATUSES: LeadStatus[] = ['New', 'In Discussion', 'Negotiation', 'Closed - Won', 'Closed - Lost'];

export type ActivityType = 'Meeting' | 'Call' | 'Email' | 'WhatsApp' | 'Revision Request' | 'Proposal Sent' | 'Status Change';

export type LeadSource = {
  id: string;
  name: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  isActive?: boolean;
};

export type Activity = {
  id: string;
  date: string; // ISO 8601 format
  type: ActivityType;
  notes?: string;
  summary?: string;
};

export type Product = {
  id: string;
  name:string;
  price: number;
  gstRate: number;
  categoryId?: string;
  description?: string;
  uom?: string;
  skus?: string[];
  catalogueUrl?: string; // Legacy field - will be deprecated
  cataloguePdf?: {
    url: string; // Firebase Storage download URL
    fileName: string;
    filePath: string;
    uploadedAt: string;
  };
  productImage?: {
    url: string; // Firebase Storage download URL
    fileName: string;
    filePath: string;
    uploadedAt: string;
  };
};

export type NewProduct = Omit<Product, 'id'>;

export type LeadProduct = {
  productId: string;
  quantity: number;
  rate: number;
  selectedSku?: string;
};

export type PopulatedLeadProduct = LeadProduct & {
  product: Product;
  amount: number;
};

export type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  client_address?: string;
  client_gst_no?: string;
  status: LeadStatus;
  source: string;
  createdAt: string; // ISO 8601 format
  activities: Activity[];
  products: LeadProduct[];
  createdBy?: string; // Name or email of the user who created the lead
};

export type UpdatableLeadData = Omit<Lead, 'id' | 'createdAt' | 'activities'>;

export type QuotationStatus = 'Draft' | 'Sent' | 'Accepted' | 'Rejected';
export const ALL_QUOTATION_STATUSES: QuotationStatus[] = ['Draft', 'Sent', 'Accepted', 'Rejected'];

export type QuotationProduct = {
  productId: string;
  quantity: number;
  rate: number;
  gstRate: number;
  discount?: number;
  description?: string;
};

export type PopulatedQuotationProduct = QuotationProduct & {
    product: Product;
    amount: number;
    gstAmount: number;
};

export type Quotation = {
  id: string;
  quotationNumber: string;
  leadId: string;
  date: string;
  validUntil: string;
  products: QuotationProduct[];
  subTotal: number;
  totalGst: number;
  grandTotal: number;
  status: QuotationStatus;
  templateId: string;
  createdAt: string;
  // Template fields that can be overridden
  logoUrl?: string;
  companyName: string;
  companyAddress: string;
  companyGst?: string;
  // Client billing fields
  client_address?: string;
  client_gst_no?: string;
  termsAndConditions: string;
  // Additional charges
  freightCharges?: string;
  courierCharges?: string;
  // GST visibility control
  showGst?: boolean;
  // Currency fields
  currencyCode?: string; // Selected currency code (default: INR)
  currencySymbol?: string; // Currency symbol for display
  conversionRate?: number; // Conversion rate at time of quotation creation
};

export type QuotationTemplate = {
    id: string;
    name: string;
    prefix: string; // e.g., QUO, SALES
    logoUrl?: string;
    companyName: string;
    companyAddress: string;
    companyGst?: string;
    termsAndConditions: string;
};

export type NewQuotationTemplate = Omit<QuotationTemplate, 'id'>;

export type Currency = {
    id: string;
    code: string; // e.g., USD, EUR, GBP
    name: string; // e.g., US Dollar, Euro, British Pound
    symbol: string; // e.g., $, €, £
    conversionRate: number; // How many INR = 1 unit of this currency
    createdAt: string;
};

export type NewCurrency = Omit<Currency, 'id' | 'createdAt'>;

export type EmployeeRoleData = {
    id: string;
    name: string;
};

export type EmployeeRole = EmployeeRoleData['name'];

export type Department = {
    id: string;
    name: string;
};

export type Employee = {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: EmployeeRole;
    department: string;
    address: string;
    createdAt: string;
};

export type NewEmployee = Omit<Employee, 'id' | 'createdAt'>;
