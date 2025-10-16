
'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getLeads, getRecentActivities, getProducts, getQuotations } from "@/lib/data";
import { getLeadsCountAction, getQuotationsCountAction, getProductsCountAction } from "@/lib/actions";
import {
  Users,
  Briefcase,
  Handshake,
  User,
  Package,
  FileText,
  ShoppingCart,
} from "lucide-react";
import { format, parseISO, differenceInDays, subMonths } from "date-fns";
import DashboardChart from "./dashboard-chart";
import { Lead, Activity, Product, LeadStatus } from '@/lib/types';
import ProductDemandChart from './product-demand-chart';
import AverageConversionTimeChart from './average-conversion-time-chart';
import QuotationsByMonthChart from './quotations-by-month-chart';
import SourceDistributionChart from './source-distribution-chart';


// We can't render the time on the server, as it may be in a different timezone than the client.
// Instead, we can render it on the client after the initial render.
function ClientTime({ date }: { date: string }) {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    setTime(format(parseISO(date), "p"));
  }, [date]);

  if (!time) {
    return null;
  }
  return (
    <Badge variant="outline" className="ml-auto shrink-0">
      {time}
    </Badge>
  );
}

type ProductDemandData = {
    name: string;
    count: number;
}

type QuotationsByMonthData = {
    month: string;
    count: number;
}

type SourceDistributionData = {
    name: string;
    count: number;
}

type DashboardData = {
    leads: Lead[];
    recentActivities: { lead: Lead; activity: Activity }[];
    productDemand: ProductDemandData[];
    sourceDistribution: SourceDistributionData[];
    averageConversionTime: number;
    quotationsByMonth: QuotationsByMonthData[];
    counts: {
        leads: number;
        quotations: number;
        products: number;
    };
};
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

function Dashboard({ data }: { data: DashboardData }) {
    const { leads, recentActivities, productDemand, sourceDistribution, averageConversionTime, quotationsByMonth, counts } = data;
    const stats = {
        total: leads.length,
        new: leads.filter((l) => l.status === "New").length,
        inDiscussion: leads.filter((l) => l.status === "In Discussion").length,
        negotiation: leads.filter((l) => l.status === "Negotiation").length,
        closedWon: leads.filter((l) => l.status === "Closed - Won").length,
        closedLost: leads.filter((l) => l.status === "Closed - Lost").length,
    };
    
    const chartData = [
        { name: "New", value: stats.new },
        { name: "Discussion", value: stats.inDiscussion },
        { name: "Negotiation", value: stats.negotiation },
        { name: "Won", value: stats.closedWon },
        { name: "Lost", value: stats.closedLost },
    ];
    
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.leads}</div>
            <p className="text-xs text-muted-foreground">
              All leads in the system
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quotations</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.quotations}</div>
            <p className="text-xs text-muted-foreground">
              All quotations created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.products}</div>
            <p className="text-xs text-muted-foreground">
              Products in catalog
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Discussion</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inDiscussion}</div>
            <p className="text-xs text-muted-foreground">
              Leads currently in discussion
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Negotiation</CardTitle>
            <Handshake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.negotiation}</div>
            <p className="text-xs text-muted-foreground">
              Leads in negotiation phase
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Closed Won</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.closedWon}</div>
            <p className="text-xs text-muted-foreground">
              Successfully closed deals
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-7">
        <Card className="xl:col-span-4">
          <CardHeader>
            <CardTitle>Leads Overview</CardTitle>
            <CardDescription>A summary of leads by current status. Click on bars to filter leads by status.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardChart data={chartData} />
          </CardContent>
        </Card>
        <div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            <Card className="sm:col-span-1 xl:col-span-1">
                <CardHeader>
                    <CardTitle>Average Conversion Time</CardTitle>
                    <CardDescription>
                    Average time from lead creation to closing a deal.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                   <AverageConversionTimeChart timeInDays={averageConversionTime} />
                </CardContent>
            </Card>
            <Card className="sm:col-span-2 xl:col-span-1">
            <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>
                A log of the most recent interactions with leads.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                {recentActivities.map(({ lead, activity }) => (
                    <div key={activity.id} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground border shrink-0">
                        <User className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1 text-sm">
                        <div className="font-medium">
                        {lead.name}
                        <span className="font-normal text-muted-foreground"> from {lead.company}</span>
                        </div>
                        <p className="text-muted-foreground">{activity.type}</p>
                        <p className="text-xs text-muted-foreground">
                        {format(parseISO(activity.date), "PPP")}
                        </p>
                    </div>
                    <ClientTime date={activity.date} />
                    </div>
                ))}
                </div>
            </CardContent>
            </Card>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
            <CardHeader>
              <CardTitle>Quotations Sent by Month</CardTitle>
              <CardDescription>
                Number of quotations created over the last 12 months.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuotationsByMonthChart data={quotationsByMonth} />
            </CardContent>
          </Card>
        <Card>
            <CardHeader>
              <CardTitle>Source-wise Leads Distribution</CardTitle>
              <CardDescription>
                Number of leads by source. Click on bars to filter leads by source.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <SourceDistributionChart data={sourceDistribution} />
            </CardContent>
          </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
            <CardHeader>
              <CardTitle>Product Demand</CardTitle>
              <CardDescription>
                Number of leads interested in each product.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProductDemandChart data={productDemand} />
            </CardContent>
          </Card>
      </div>
    </>
  );
}


export default function DashboardPage() {
    const [data, setData] = React.useState<DashboardData | null>(null);

    React.useEffect(() => {
      async function fetchData() {
        const [leads, recentActivities, allProducts, quotations, leadsCount, quotationsCount, productsCount] = await Promise.all([
          getLeads(),
          getRecentActivities(5),
          getProducts(),
          getQuotations(),
          getLeadsCountAction(),
          getQuotationsCountAction(),
          getProductsCountAction(),
        ]);
        
        let productDemand: ProductDemandData[] = [];
        if (leads.length > 0 && allProducts.length > 0) {
            const productCounts = new Map<string, number>();
            leads.forEach(lead => {
                if(lead.products) {
                    lead.products.forEach(p => {
                        productCounts.set(p.productId, (productCounts.get(p.productId) || 0) + 1);
                    });
                }
            });

            productDemand = Array.from(productCounts.entries()).map(([productId, count]) => {
                const product = allProducts.find(p => p.id === productId);
                return {
                    name: product ? product.name : 'Unknown Product',
                    count: count
                };
            }).sort((a, b) => b.count - a.count);
        }

        // Calculate source distribution
        let sourceDistribution: SourceDistributionData[] = [];
        if (leads.length > 0) {
            const sourceCounts = new Map<string, number>();
            leads.forEach(lead => {
                const source = lead.source || 'Unknown';
                sourceCounts.set(source, (sourceCounts.get(source) || 0) + 1);
            });

            sourceDistribution = Array.from(sourceCounts.entries()).map(([source, count]) => ({
                name: source,
                count: count
            })).sort((a, b) => b.count - a.count);
        }

        const wonLeads = leads.filter(lead => lead.status === 'Closed - Won');
        let totalConversionDays = 0;
        let convertedCount = 0;

        wonLeads.forEach(lead => {
            const creationDate = parseISO(lead.createdAt);
            const conversionDate = getConversionDate(lead);

            if(conversionDate) {
                totalConversionDays += differenceInDays(conversionDate, creationDate);
                convertedCount++;
            }
        });
        
        const averageConversionTime = convertedCount > 0 ? Math.round(totalConversionDays / convertedCount) : 0;

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

        
        setData({ 
          leads, 
          recentActivities, 
          productDemand, 
          sourceDistribution,
          averageConversionTime, 
          quotationsByMonth,
          counts: {
            leads: leadsCount,
            quotations: quotationsCount,
            products: productsCount,
          }
        });
      }
      fetchData();
    }, []);

    if (!data) {
        return (
            <div className="flex-1 space-y-4 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                </div>
                <div className="text-center text-muted-foreground py-10">
                    Loading dashboard...
                </div>
            </div>
        );
    }
  
    return <Dashboard data={data} />;
}
