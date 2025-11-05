
'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDashboardData, DashboardMetrics } from '@/lib/dashboard-data';
import {
  Users,
  Briefcase,
  Handshake,
  User,
  Package,
  FileText,
  ShoppingCart,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import DashboardChart from "./dashboard-chart";
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
function Dashboard({ data }: { data: DashboardMetrics }) {
    const { 
      totalLeads, 
      totalQuotations, 
      totalProducts, 
      statusBreakdown, 
      sourceDistribution, 
      averageConversionTime, 
      productDemand, 
      quotationsByMonth, 
      recentActivities 
    } = data;
    
    // Calculate individual status counts for display cards
    const inDiscussion = statusBreakdown.find(s => s.name === "Discussion")?.value || 0;
    const negotiation = statusBreakdown.find(s => s.name === "Negotiation")?.value || 0;
    const closedWon = statusBreakdown.find(s => s.name === "Won")?.value || 0;
    
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
            <div className="text-2xl font-bold">{totalLeads}</div>
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
            <div className="text-2xl font-bold">{totalQuotations}</div>
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
            <div className="text-2xl font-bold">{totalProducts}</div>
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
            <div className="text-2xl font-bold">{inDiscussion}</div>
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
            <div className="text-2xl font-bold">{negotiation}</div>
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
            <div className="text-2xl font-bold">{closedWon}</div>
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
            <DashboardChart data={statusBreakdown} />
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
    const [data, setData] = React.useState<DashboardMetrics | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
      async function fetchData() {
        try {
          setIsLoading(true);
          setError(null);
          const dashboardData = await getDashboardData();
          setData(dashboardData);
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
          setError('Failed to load dashboard data. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
      
      fetchData();
    }, []);

    if (isLoading) {
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

    if (error || !data) {
        return (
            <div className="flex-1 space-y-4 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                </div>
                <div className="text-center text-muted-foreground py-10">
                    {error || 'Failed to load dashboard data'}
                </div>
            </div>
        );
    }
  
    return <Dashboard data={data} />;
}
