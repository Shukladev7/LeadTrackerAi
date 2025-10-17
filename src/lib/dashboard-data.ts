import { Lead, Activity, Product, Quotation } from '@/lib/types';
import { 
  getLeads,
  getQuotations,
  getProducts
} from './firestore-data-service';
import { parseISO, format, subMonths, differenceInDays } from 'date-fns';

// Optimized types for dashboard
export type DashboardMetrics = {
  totalLeads: number;
  totalQuotations: number;
  totalProducts: number;
  statusBreakdown: { name: string; value: number }[];
  sourceDistribution: { name: string; count: number }[];
  averageConversionTime: number;
  productDemand: { name: string; count: number }[];
  quotationsByMonth: { month: string; count: number }[];
  recentActivities: { lead: Pick<Lead, 'id' | 'name' | 'company'>; activity: Activity }[];
};

// Single optimized function to get all dashboard data
export async function getDashboardData(): Promise<DashboardMetrics> {
  try {
    // Fetch only the essential data in parallel
    const [leads, quotations, products] = await Promise.all([
      getLeads(),
      getQuotations(), 
      getProducts()
    ]);

    // Data is already converted to plain objects by the service functions
    // Calculate metrics efficiently
    const metrics = calculateDashboardMetrics(leads, quotations, products);
    
    return metrics;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    // Return empty state on error
    return {
      totalLeads: 0,
      totalQuotations: 0,
      totalProducts: 0,
      statusBreakdown: [],
      sourceDistribution: [],
      averageConversionTime: 0,
      productDemand: [],
      quotationsByMonth: [],
      recentActivities: []
    };
  }
}

function calculateDashboardMetrics(
  leads: Lead[], 
  quotations: Quotation[], 
  products: Product[]
): DashboardMetrics {
  
  // Basic counts
  const totalLeads = leads.length;
  const totalQuotations = quotations.length;
  const totalProducts = products.length;

  // Status breakdown
  const statusCounts = new Map<string, number>();
  const sourceCounts = new Map<string, number>();
  const productCounts = new Map<string, number>();
  
  let totalConversionDays = 0;
  let convertedCount = 0;

  // Single pass through leads for multiple calculations
  leads.forEach(lead => {
    // Status breakdown
    const status = lead.status;
    statusCounts.set(status, (statusCounts.get(status) || 0) + 1);
    
    // Source distribution
    const source = lead.source || 'Unknown';
    sourceCounts.set(source, (sourceCounts.get(source) || 0) + 1);
    
    // Product demand
    if (lead.products) {
      lead.products.forEach(p => {
        productCounts.set(p.productId, (productCounts.get(p.productId) || 0) + 1);
      });
    }

    // Conversion time calculation
    if (lead.status === 'Closed - Won') {
      const creationDate = parseISO(lead.createdAt);
      const conversionDate = getConversionDate(lead);
      
      if (conversionDate) {
        totalConversionDays += differenceInDays(conversionDate, creationDate);
        convertedCount++;
      }
    }
  });

  // Format status breakdown
  const statusBreakdown = [
    { name: "New", value: statusCounts.get("New") || 0 },
    { name: "Discussion", value: statusCounts.get("In Discussion") || 0 },
    { name: "Negotiation", value: statusCounts.get("Negotiation") || 0 },
    { name: "Won", value: statusCounts.get("Closed - Won") || 0 },
    { name: "Lost", value: statusCounts.get("Closed - Lost") || 0 },
  ];

  // Source distribution
  const sourceDistribution = Array.from(sourceCounts.entries())
    .map(([source, count]) => ({ name: source, count }))
    .sort((a, b) => b.count - a.count);

  // Product demand with names
  const productDemand = Array.from(productCounts.entries())
    .map(([productId, count]) => {
      const product = products.find(p => p.id === productId);
      return {
        name: product ? product.name : 'Unknown Product',
        count: count
      };
    })
    .sort((a, b) => b.count - a.count);

  // Average conversion time
  const averageConversionTime = convertedCount > 0 
    ? Math.round(totalConversionDays / convertedCount) 
    : 0;

  // Quotations by month (last 12 months)
  const twelveMonthsAgo = subMonths(new Date(), 11);
  const monthlyCounts: { [key: string]: number } = {};
  
  // Initialize last 12 months
  for (let i = 0; i < 12; i++) {
    const monthKey = format(subMonths(new Date(), i), 'MMM yyyy');
    monthlyCounts[monthKey] = 0;
  }

  quotations.forEach(q => {
    const qDate = parseISO(q.createdAt);
    if (qDate >= twelveMonthsAgo) {
      const monthKey = format(qDate, 'MMM yyyy');
      if (monthlyCounts.hasOwnProperty(monthKey)) {
        monthlyCounts[monthKey]++;
      }
    }
  });

  const quotationsByMonth = Object.entries(monthlyCounts)
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => parseISO(format(new Date(a.month), 'yyyy-MM-dd')).getTime() - parseISO(format(new Date(b.month), 'yyyy-MM-dd')).getTime());

  // Recent activities (limit to 5 and only include essential lead data)
  const allActivities = leads.flatMap(lead => 
    lead.activities.map(activity => ({ 
      lead: { 
        id: lead.id, 
        name: lead.name, 
        company: lead.company 
      }, 
      activity 
    }))
  );
  
  const recentActivities = allActivities
    .sort((a, b) => {
      const aDate = new Date(a.activity.date.toString()).getTime();
      const bDate = new Date(b.activity.date.toString()).getTime();
      return bDate - aDate;
    })
    .slice(0, 5);

  return {
    totalLeads,
    totalQuotations,
    totalProducts,
    statusBreakdown,
    sourceDistribution,
    averageConversionTime,
    productDemand,
    quotationsByMonth,
    recentActivities
  };
}

function getConversionDate(lead: Lead): Date | null {
  if (lead.status !== 'Closed - Won') return null;
  
  // Find the activity where status was changed to 'Closed - Won'
  const statusChangeActivity = lead.activities.find(a => 
    a.notes && a.notes.includes("Status changed from") && a.notes.includes(`to "${'Closed - Won'}"`)
  );

  if (statusChangeActivity) {
    return parseISO(statusChangeActivity.date);
  }
  
  // Fallback: use the date of the last activity if no explicit status change is found
  if (lead.activities.length > 0) {
    // Activities are sorted by date descending, so the first one is the latest
    return parseISO(lead.activities[0].date);
  }
  
  return null;
}