
export type LeadStatus = 'New' | 'In Discussion' | 'Negotiation' | 'Closed - Won' | 'Closed - Lost';

export const ALL_STATUSES: LeadStatus[] = ['New', 'In Discussion', 'Negotiation', 'Closed - Won', 'Closed - Lost'];

export type ActivityType = 'Meeting' | 'Call' | 'Email' | 'WhatsApp' | 'Revision Request' | 'Proposal Sent' | 'Status Change';

export type LeadSource = {
  id: string;
  name: string;
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
  companyGst: string;
  termsAndConditions: string;
};

export type QuotationTemplate = {
    id: string;
    name: string;
    logoUrl?: string;
    companyName: string;
    companyAddress: string;
    companyGst: string;
    termsAndConditions: string;
};

export type NewQuotationTemplate = Omit<QuotationTemplate, 'id'>;

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
