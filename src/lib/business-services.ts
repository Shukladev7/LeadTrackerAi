import { FirestoreService } from './firestore-service';
import {
  Employee,
  Department,
  EmployeeRole,
  LeadSource,
  Product,
  Lead,
  Quotation,
  QuotationTemplate,
  Customer,
  Order,
  Invoice,
  Payment,
  Task,
  CompanySettings,
  Notification,
  ActivityLog,
  COLLECTIONS
} from './business-types';

// Create service instances for all business collections
export const employeesService = new FirestoreService<Employee>(COLLECTIONS.EMPLOYEES);
export const departmentsService = new FirestoreService<Department>(COLLECTIONS.DEPARTMENTS);
export const employeeRolesService = new FirestoreService<EmployeeRole>(COLLECTIONS.EMPLOYEE_ROLES);
export const leadSourcesService = new FirestoreService<LeadSource>(COLLECTIONS.LEAD_SOURCES);
export const productsService = new FirestoreService<Product>(COLLECTIONS.PRODUCTS);
export const leadsService = new FirestoreService<Lead>(COLLECTIONS.LEADS);
export const quotationsService = new FirestoreService<Quotation>(COLLECTIONS.QUOTATIONS);
export const quotationTemplatesService = new FirestoreService<QuotationTemplate>(COLLECTIONS.QUOTATION_TEMPLATES);
export const customersService = new FirestoreService<Customer>(COLLECTIONS.CUSTOMERS);
export const ordersService = new FirestoreService<Order>(COLLECTIONS.ORDERS);
export const invoicesService = new FirestoreService<Invoice>(COLLECTIONS.INVOICES);
export const paymentsService = new FirestoreService<Payment>(COLLECTIONS.PAYMENTS);
export const tasksService = new FirestoreService<Task>(COLLECTIONS.TASKS);
export const companySettingsService = new FirestoreService<CompanySettings>(COLLECTIONS.COMPANY_SETTINGS);
export const notificationsService = new FirestoreService<Notification>(COLLECTIONS.NOTIFICATIONS);
export const activityLogsService = new FirestoreService<ActivityLog>(COLLECTIONS.ACTIVITY_LOGS);

// Extended service classes with business logic
export class EmployeeService extends FirestoreService<Employee> {
  constructor() {
    super(COLLECTIONS.EMPLOYEES);
  }

  async getEmployeeByEmail(email: string): Promise<Employee | null> {
    const employees = await this.getWithQuery({
      where: [{ field: 'email', operator: '==', value: email }],
      limit: 1
    });
    return employees.length > 0 ? employees[0] : null;
  }

  async getEmployeesByDepartment(department: string): Promise<Employee[]> {
    return this.getWithQuery({
      where: [{ field: 'department', operator: '==', value: department }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async getEmployeesByRole(role: string): Promise<Employee[]> {
    return this.getWithQuery({
      where: [{ field: 'role', operator: '==', value: role }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async getActiveEmployees(): Promise<Employee[]> {
    return this.getWithQuery({
      where: [{ field: 'isActive', operator: '==', value: true }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }
}

export class LeadService extends FirestoreService<Lead> {
  constructor() {
    super(COLLECTIONS.LEADS);
  }

  async getLeadsByStatus(status: Lead['status']): Promise<Lead[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: status }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async getLeadsBySource(source: string): Promise<Lead[]> {
    return this.getWithQuery({
      where: [{ field: 'source', operator: '==', value: source }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async getLeadsByAssignee(assignedTo: string): Promise<Lead[]> {
    return this.getWithQuery({
      where: [{ field: 'assignedTo', operator: '==', value: assignedTo }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async getRecentLeads(limit: number = 10): Promise<Lead[]> {
    return this.getWithQuery({
      orderBy: { field: 'createdAt', direction: 'desc' },
      limit
    });
  }

  async addActivity(leadId: string, activity: Omit<Lead['activities'][0], 'id'>): Promise<void> {
    const lead = await this.getById(leadId);
    if (lead) {
      // Remove undefined values before persisting
      const sanitized = Object.fromEntries(
        Object.entries(activity as Record<string, unknown>).filter(([, v]) => v !== undefined)
      ) as Omit<Lead['activities'][0], 'id'>;
      const newActivity = {
        ...sanitized,
        id: `act-${leadId}-${Date.now()}`
      };
      
      const updatedActivities = [...(lead.activities || []), newActivity];
      await this.update(leadId, { activities: updatedActivities });
    }
  }

  async updateStatus(leadId: string, status: Lead['status'], notes?: string): Promise<void> {
    await this.update(leadId, { status });
    
    if (notes) {
      await this.addActivity(leadId, {
        date: new Date().toISOString(),
        type: 'Other',
        notes: `Status changed to ${status}. ${notes}`
      });
    }
  }
}

export class ProductService extends FirestoreService<Product> {
  constructor() {
    super(COLLECTIONS.PRODUCTS);
  }

  async getActiveProducts(): Promise<Product[]> {
    return this.getWithQuery({
      where: [{ field: 'isActive', operator: '==', value: true }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.getWithQuery({
      where: [{ field: 'category', operator: '==', value: category }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async getLowStockProducts(): Promise<Product[]> {
    const products = await this.getAll();
    return products.filter(product => 
      product.stockQuantity !== undefined && 
      product.minStockLevel !== undefined && 
      product.stockQuantity <= product.minStockLevel
    );
  }

  async updateStock(productId: string, quantity: number): Promise<void> {
    await this.update(productId, { stockQuantity: quantity });
  }

  async searchProducts(searchTerm: string): Promise<Product[]> {
    const products = await this.getActiveProducts();
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }
}

export class QuotationService extends FirestoreService<Quotation> {
  constructor() {
    super(COLLECTIONS.QUOTATIONS);
  }

  async getQuotationsByLead(leadId: string): Promise<Quotation[]> {
    return this.getWithQuery({
      where: [{ field: 'leadId', operator: '==', value: leadId }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async getQuotationsByStatus(status: Quotation['status']): Promise<Quotation[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: status }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async getRecentQuotations(limit: number = 10): Promise<Quotation[]> {
    return this.getWithQuery({
      orderBy: { field: 'createdAt', direction: 'desc' },
      limit
    });
  }

  async generateQuotationNumber(prefix: string): Promise<string> {
    const quotations = await this.getAll();
    const regex = new RegExp(`^${prefix}-\\d{4}$`);
    const numberRegex = new RegExp(`^${prefix}-(\\d+)$`);
    const maxNumber = quotations.reduce((max, quotation) => {
      if (!quotation.quotationNumber) return max;
      if (!regex.test(quotation.quotationNumber)) return max;
      const match = quotation.quotationNumber.match(numberRegex);
      if (match) {
        const num = parseInt(match[1], 10);
        return num > max ? num : max;
      }
      return max;
    }, 0);
    return `${prefix}-${String(maxNumber + 1).padStart(4, '0')}`;
  }

  async markAsSent(quotationId: string): Promise<void> {
    await this.update(quotationId, {
      status: 'Sent',
      sentAt: new Date().toISOString()
    });
  }

  async markAsAccepted(quotationId: string): Promise<void> {
    await this.update(quotationId, {
      status: 'Accepted',
      acceptedAt: new Date().toISOString()
    });
  }
}

export class CustomerService extends FirestoreService<Customer> {
  constructor() {
    super(COLLECTIONS.CUSTOMERS);
  }

  async getCustomerByEmail(email: string): Promise<Customer | null> {
    const customers = await this.getWithQuery({
      where: [{ field: 'email', operator: '==', value: email }],
      limit: 1
    });
    return customers.length > 0 ? customers[0] : null;
  }

  async getActiveCustomers(): Promise<Customer[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: 'Active' }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async getTopCustomers(limit: number = 10): Promise<Customer[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: 'Active' }],
      orderBy: { field: 'totalValue', direction: 'desc' },
      limit
    });
  }

  async createFromLead(lead: Lead): Promise<string> {
    const customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'> = {
      name: lead.name,
      company: lead.company,
      email: lead.email,
      phone: lead.phone,
      whatsappNumber: lead.whatsappNumber,
      leadId: lead.id,
      status: 'Active',
      totalValue: 0
    };
    
    return this.create(customer);
  }
}

export class OrderService extends FirestoreService<Order> {
  constructor() {
    super(COLLECTIONS.ORDERS);
  }

  async getOrdersByCustomer(customerId: string): Promise<Order[]> {
    return this.getWithQuery({
      where: [{ field: 'customerId', operator: '==', value: customerId }],
      orderBy: { field: 'orderDate', direction: 'desc' }
    });
  }

  async getOrdersByStatus(status: Order['status']): Promise<Order[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: status }],
      orderBy: { field: 'orderDate', direction: 'desc' }
    });
  }

  async getRecentOrders(limit: number = 10): Promise<Order[]> {
    return this.getWithQuery({
      orderBy: { field: 'orderDate', direction: 'desc' },
      limit
    });
  }

  async generateOrderNumber(): Promise<string> {
    const orders = await this.getAll();
    const maxNumber = orders.reduce((max, order) => {
      const match = order.orderNumber.match(/ORD-(\d+)/);
      if (match) {
        const num = parseInt(match[1]);
        return num > max ? num : max;
      }
      return max;
    }, 0);
    
    return `ORD-${String(maxNumber + 1).padStart(4, '0')}`;
  }

  async updateStatus(orderId: string, status: Order['status']): Promise<void> {
    const updateData: Partial<Order> = { status };
    
    if (status === 'Delivered') {
      updateData.actualDeliveryDate = new Date().toISOString();
    }
    
    await this.update(orderId, updateData);
  }
}

export class TaskService extends FirestoreService<Task> {
  constructor() {
    super(COLLECTIONS.TASKS);
  }

  async getTasksByAssignee(assignedTo: string): Promise<Task[]> {
    return this.getWithQuery({
      where: [{ field: 'assignedTo', operator: '==', value: assignedTo }],
      orderBy: { field: 'dueDate', direction: 'asc' }
    });
  }

  async getTasksByStatus(status: Task['status']): Promise<Task[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: status }],
      orderBy: { field: 'dueDate', direction: 'asc' }
    });
  }

  async getOverdueTasks(): Promise<Task[]> {
    const now = new Date().toISOString();
    const tasks = await this.getWithQuery({
      where: [
        { field: 'status', operator: '!=', value: 'Done' },
        { field: 'status', operator: '!=', value: 'Cancelled' }
      ]
    });
    
    return tasks.filter(task => 
      task.dueDate && task.dueDate < now
    );
  }

  async markAsCompleted(taskId: string): Promise<void> {
    await this.update(taskId, {
      status: 'Done',
      completedAt: new Date().toISOString()
    });
  }
}

// Create instances of extended services
export const employeeService = new EmployeeService();
export const leadService = new LeadService();
export const productService = new ProductService();
export const quotationService = new QuotationService();
export const customerService = new CustomerService();
export const orderService = new OrderService();
export const taskService = new TaskService();
