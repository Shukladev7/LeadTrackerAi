import { adminDb } from '@/lib/firebase-admin';
import { Lead, Quotation, Product } from '@/lib/types';

export type DashboardStatsSnapshot = {
  totalLeads: number;
  totalQuotations: number;
  totalProducts: number;
  statusBreakdown: { name: string; value: number }[];
  quotationsByMonth: { month: string; value: number }[];
  sourceDistribution: { name: string; value: number }[];
  productDemand: { name: string; value: number }[];
  averageConversionTime: number;
  totalConversionDays: number;
  conversionSamples: number;
  // Number of Closed - Won leads per source. Used to derive source-wise conversion.
  sourceWon: { name: string; value: number }[];
};

function ensureNumber(n: unknown, fallback = 0): number {
  return typeof n === 'number' && !isNaN(n) ? n : fallback;
}

function toJsDate(value: any): Date | null {
  if (!value) return null;

  // Already a JS Date
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }

  // Firestore Timestamp (Admin or client) exposes a toDate() method
  if (typeof value.toDate === 'function') {
    const d = value.toDate();
    return d instanceof Date && !isNaN(d.getTime()) ? d : null;
  }

  // String or number that Date can parse
  if (typeof value === 'string' || typeof value === 'number') {
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  return null;
}

function adjustNamedValue(
  list: { name: string; value: number }[],
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
  list: { month: string; value: number }[],
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

export async function recomputeDashboardSnapshot(): Promise<DashboardStatsSnapshot> {
  const leadsSnap = await adminDb.collection('leads').get();
  const quotationsSnap = await adminDb.collection('quotations').get();
  const productsSnap = await adminDb.collection('products').get();

  let totalLeads = 0;
  let totalQuotations = 0;
  let totalProducts = 0;

  let statusBreakdown: { name: string; value: number }[] = [];
  let quotationsByMonth: { month: string; value: number }[] = [];
  let sourceDistribution: { name: string; value: number }[] = [];
  let productDemand: { name: string; value: number }[] = [];
  let sourceWon: { name: string; value: number }[] = [];

  let totalConversionDays = 0;
  let conversionSamples = 0;

  // Build a map of productId -> productName so productDemand can use
  // human-readable names instead of internal IDs.
  const productNameById = new Map<string, string>();

  // Products aggregation (count and name map; demand is derived from quotations)
  productsSnap.forEach((doc) => {
    const raw = doc.data() as any;
    const product: Product = {
      ...(raw as any),
      id: doc.id,
    };

    if (product) {
      totalProducts += 1;
      if (product.name) {
        productNameById.set(String(product.id), String(product.name));
      }
    }
  });

  // Leads aggregation
  leadsSnap.forEach((doc) => {
    const raw = doc.data() as any;
    const createdAtDate = toJsDate(raw.createdAt);
    const lead: Lead = {
      id: doc.id,
      name: raw.name ?? '',
      company: raw.company ?? '',
      email: raw.email ?? '',
      phone: raw.phone ?? '',
      whatsappNumber: raw.whatsappNumber,
      client_address: raw.client_address,
      client_gst_no: raw.client_gst_no,
      status: raw.status,
      source: raw.source ?? 'Unknown',
      createdAt: createdAtDate
        ? createdAtDate.toISOString()
        : new Date().toISOString(),
      activities: Array.isArray(raw.activities) ? raw.activities : [],
      products: Array.isArray(raw.products) ? raw.products : [],
      createdBy: raw.createdBy,
      manufacturingCompany: raw.manufacturingCompany,
    };

    totalLeads += 1;

    const bucket = mapLeadStatusToBucket(lead.status as Lead['status']);
    if (bucket) {
      statusBreakdown = adjustNamedValue(statusBreakdown, bucket, 1);
    }

    const sourceName = lead.source || 'Unknown';
    sourceDistribution = adjustNamedValue(sourceDistribution, sourceName, 1);

    if (lead.status === 'Closed - Won') {
      sourceWon = adjustNamedValue(sourceWon, sourceName, 1);
    }

    if (lead.status === 'Closed - Won' && (raw.createdAt || lead.createdAt)) {
      try {
        const effectiveDate = toJsDate(raw.createdAt || lead.createdAt);
        const now = new Date();
        if (effectiveDate && !isNaN(effectiveDate.getTime())) {
          const diffMs = now.getTime() - effectiveDate.getTime();
          const days = Math.max(Math.round(diffMs / (1000 * 60 * 60 * 24)), 0);
          totalConversionDays += days;
          conversionSamples += 1;
        }
      } catch (_) {
        // Ignore invalid dates during recompute
      }
    }
  });

  // Quotations aggregation
  quotationsSnap.forEach((doc) => {
    const raw = doc.data() as any;
    const quotation: Quotation = {
      ...(raw as any),
      id: doc.id,
    };

    totalQuotations += 1;

    const createdAtValue: any = raw.createdAt ?? raw.date ?? (quotation as any).createdAt ?? quotation.date;
    try {
      const d = toJsDate(createdAtValue);
      if (d) {
          const year = d.getFullYear();
          const month = d.getMonth() + 1;
          const key = `${year}-${String(month).padStart(2, '0')}`;
          quotationsByMonth = adjustMonthValue(quotationsByMonth, key, 1);
      }
    } catch (_) {
      // Ignore invalid dates during recompute
    }

    if (Array.isArray(quotation.products)) {
      quotation.products.forEach((p) => {
        const productId = String(p.productId || '');
        const productName = productNameById.get(productId) || 'Unknown Product';
        productDemand = adjustNamedValue(productDemand, productName, p.quantity || 0);
      });
    }
  });

  const averageConversionTime =
    conversionSamples > 0 ? Math.round(totalConversionDays / conversionSamples) : 0;

  const snapshot: DashboardStatsSnapshot = {
    totalLeads,
    totalQuotations,
    totalProducts,
    statusBreakdown,
    quotationsByMonth,
    sourceDistribution,
    productDemand,
    averageConversionTime,
    totalConversionDays,
    conversionSamples,
    sourceWon,
  };

  return snapshot;
}
