import { Lead } from '@/lib/types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { getRecentActivities } from './firestore-data-service';

// Optimized types for dashboard
export type DashboardMetrics = {
  totalLeads: number;
  totalQuotations: number;
  totalProducts: number;
  statusBreakdown: { name: string; value: number }[];
  quotationsByMonth: { month: string; value: number }[];
  sourceDistribution: { name: string; value: number }[];
  productDemand: { name: string; value: number }[];
  averageConversionTime: number;
  // Conversion rate (0-100) per lead source.
  sourceConversion: { name: string; value: number }[];
  recentActivities: {
    lead: Pick<Lead, 'id' | 'name' | 'company'>;
    activity: {
      id: string;
      date: string;
      type: string;
      notes?: string;
    };
  }[];
};

// Single optimized function to get all dashboard data
export async function getDashboardData(): Promise<DashboardMetrics> {
  try {
    const statsRef = doc(db, 'stats', 'dashboard');
    const snap = await getDoc(statsRef);
    const raw = snap.data() as any;

    const [rawRecentActivities] = await Promise.all([
      getRecentActivities(5),
    ]);

    const recentActivities = rawRecentActivities.map(({ lead, activity }) => {
      const rawDate: any = (activity as any).date;
      const dateString =
        typeof rawDate === 'string'
          ? rawDate
          : rawDate?.toISOString?.() ?? String(rawDate ?? '');

      return {
        lead: {
          id: String((lead as any).id ?? ''),
          name: (lead as any).name ?? '',
          company: (lead as any).company ?? '',
        },
        activity: {
          id: String((activity as any).id ?? ''),
          date: dateString,
          type: String((activity as any).type ?? ''),
          notes: (activity as any).notes,
        },
      };
    });

    if (!raw) {
      return {
        totalLeads: 0,
        totalQuotations: 0,
        totalProducts: 0,
        statusBreakdown: [],
        quotationsByMonth: [],
        sourceDistribution: [],
        productDemand: [],
        averageConversionTime: 0,
        sourceConversion: [],
        recentActivities,
      };
    }

    const rawSourceDistribution = Array.isArray(raw.sourceDistribution)
      ? raw.sourceDistribution
      : [];
    const rawSourceWon = Array.isArray(raw.sourceWon) ? raw.sourceWon : [];

    const sourceConversion = rawSourceDistribution.map((src: any) => {
      const name = String(src.name ?? 'Unknown');
      const total = typeof src.value === 'number' && !isNaN(src.value)
        ? src.value
        : 0;
      const wonEntry = rawSourceWon.find((w: any) => w && w.name === name);
      const won = wonEntry && typeof wonEntry.value === 'number' && !isNaN(wonEntry.value)
        ? wonEntry.value
        : 0;

      const rate = total > 0 ? Math.round((won / total) * 100) : 0;
      return { name, value: rate };
    });

    return {
      totalLeads: raw.totalLeads ?? 0,
      totalQuotations: raw.totalQuotations ?? 0,
      totalProducts: raw.totalProducts ?? 0,
      statusBreakdown: Array.isArray(raw.statusBreakdown)
        ? raw.statusBreakdown
        : [],
      quotationsByMonth: Array.isArray(raw.quotationsByMonth)
        ? raw.quotationsByMonth
        : [],
      sourceDistribution: Array.isArray(raw.sourceDistribution)
        ? raw.sourceDistribution
        : [],
      productDemand: Array.isArray(raw.productDemand)
        ? raw.productDemand
        : [],
      averageConversionTime: raw.averageConversionTime ?? 0,
      sourceConversion,
      recentActivities,
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      totalLeads: 0,
      totalQuotations: 0,
      totalProducts: 0,
      statusBreakdown: [],
      quotationsByMonth: [],
      sourceDistribution: [],
      productDemand: [],
      averageConversionTime: 0,
      sourceConversion: [],
      recentActivities: [],
    };
  }
}