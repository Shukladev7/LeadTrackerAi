'use client';
import { getQuotationsCount } from "@/lib/data";
import { useState, useEffect } from "react";
import * as React from 'react';
import dynamic from 'next/dynamic';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DashboardMetrics } from '@/lib/dashboard-data';
import {
  Users,
  Briefcase,
  Handshake,
  User,
  Package,
  FileText,
  ShoppingCart,
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { useUserRole } from '@/hooks/use-user-role';
import { useAuth } from '@/lib/auth-context';

const DashboardChart = dynamic(() => import('./dashboard-chart'), {
  ssr: false,
  loading: () => <div className="h-[350px] w-full animate-pulse rounded-md bg-muted" />,
});

const ProductDemandChart = dynamic(() => import('./product-demand-chart'), {
  ssr: false,
  loading: () => <div className="h-[350px] w-full animate-pulse rounded-md bg-muted" />,
});

const AverageConversionTimeChart = dynamic(
  () => import('./average-conversion-time-chart'),
  {
    ssr: false,
    loading: () => <div className="h-[150px] w-full animate-pulse rounded-md bg-muted" />,
  },
);

const QuotationsByMonthChart = dynamic(
  () => import('./quotations-by-month-chart'),
  {
    ssr: false,
    loading: () => <div className="h-[350px] w-full animate-pulse rounded-md bg-muted" />,
  },
);

const SourceDistributionChart = dynamic(
  () => import('./source-distribution-chart'),
  {
    ssr: false,
    loading: () => <div className="h-[350px] w-full animate-pulse rounded-md bg-muted" />,
  },
);

const SourceConversionChart = dynamic(
  () => import('./source-conversion-chart'),
  {
    ssr: false,
    loading: () => <div className="h-[350px] w-full animate-pulse rounded-md bg-muted" />,
  },
);

function ClientTime({ date }: { date: string }) {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    setTime(format(parseISO(date), 'p'));
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

export default function DashboardClient({ data }: { data: DashboardMetrics }) {
  const [totalCount, setTotalCount] = useState(0);
  const { user } = useAuth();
  const { isAdmin } = useUserRole();
  const [rebuildLoading, setRebuildLoading] = useState(false);
  const [rebuildError, setRebuildError] = useState<string | null>(null);
  const [rebuildSuccess, setRebuildSuccess] = useState<string | null>(null);
  const {
    totalLeads,
    totalQuotations,
    totalProducts,
    statusBreakdown,
    sourceDistribution,
    averageConversionTime,
    productDemand,
    quotationsByMonth,
    sourceConversion,
    recentActivities,
  } = data;

  const inDiscussion =
    statusBreakdown.find((s) => s.name === 'Discussion')?.value || 0;
  const negotiation =
    statusBreakdown.find((s) => s.name === 'Negotiation')?.value || 0;
  const closedWon =
    statusBreakdown.find((s) => s.name === 'Won')?.value || 0;

  const sourceChartData = sourceDistribution.map((item) => ({
    name: item.name,
    count: item.value,
  }));

  const quotationsByMonthChartData = quotationsByMonth.map((item) => ({
    month: item.month,
    count: item.value,
  }));

  const productDemandChartData = productDemand.map((item) => ({
    name: item.name,
    count: item.value,
  }));

  const sourceConversionChartData = sourceConversion.map((item) => ({
    name: item.name,
    value: item.value,
  }));

  useEffect(() => {
    getQuotationsCount().then(setTotalCount).catch(console.error);
  }, []);

  const handleRebuildDashboard = async () => {
    if (!user) {
      setRebuildError('You must be logged in to rebuild the dashboard.');
      return;
    }

    setRebuildLoading(true);
    setRebuildError(null);
    setRebuildSuccess(null);

    try {
      const token = await user.getIdToken();
      const functionUrl =
        'https://us-central1-studio-5063047183-aa053.cloudfunctions.net/rebuildDashboardStats';

      const res = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        let message = 'Failed to rebuild dashboard.';
        try {
          const body = await res.json();
          if (body?.error) {
            message = body.error;
          }
        } catch {
        }
        setRebuildError(message);
        return;
      }

      setRebuildSuccess('Dashboard rebuilt successfully.');
    } catch {
      setRebuildError('Failed to rebuild dashboard.');
    } finally {
      setRebuildLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        {isAdmin && (
          <div className="flex items-center gap-2">
            {rebuildSuccess && (
              <span className="text-xs text-green-600">
                {rebuildSuccess}
              </span>
            )}
            {rebuildError && (
              <span className="text-xs text-red-600">
                {rebuildError}
              </span>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={handleRebuildDashboard}
              disabled={rebuildLoading}
            >
              {rebuildLoading ? 'Rebuilding…' : 'Rebuild Dashboard'}
            </Button>
          </div>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
            <p className="text-xs text-muted-foreground">All leads in the system</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quotations</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCount}</div>
            <p className="text-xs text-muted-foreground">All quotations created</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts}</div>
            <p className="text-xs text-muted-foreground">Products in catalog</p>
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
            <CardDescription>
              A summary of leads by current status. Click on bars to filter
              leads by status.
            </CardDescription>
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
                        <span className="font-normal text-muted-foreground">
                          {' '}
                          from {lead.company}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{activity.type}</p>
                      <p className="text-xs text-muted-foreground">
                        {format(parseISO(activity.date), 'PPP')}
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
            <QuotationsByMonthChart data={quotationsByMonthChartData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Source-wise Leads Distribution</CardTitle>
            <CardDescription>
              Number of leads by source. Click on bars to filter leads by
              source.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <SourceDistributionChart data={sourceChartData} />
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
            <ProductDemandChart data={productDemandChartData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Source-wise Conversion Rate</CardTitle>
            <CardDescription>
              Percentage of leads converted (Closed Won) for each source.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <SourceConversionChart data={sourceConversionChartData} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
