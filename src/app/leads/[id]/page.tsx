

"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getLeadById, getProducts, getQuotationsByLeadId } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Building, ArrowLeft, User, Package, Zap, MessageSquare, FilePlus, History } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from '@/components/ui/table';
import ActivityTimeline from './activity-timeline';
import LogActivityForm from './log-activity-form';
import { EditLeadDialog } from './edit-lead-dialog';
import { PopulatedLeadProduct, Quotation } from '@/lib/types';
import { CreateQuotationDialog } from '@/app/quotations/create-quotation-dialog';
import { Badge } from '@/components/ui/badge';
import { StatusUpdateForm } from './status-update-form';
import { CommunicationButtons } from './communication-buttons';
import { format, parseISO } from 'date-fns';

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type LeadDetailPageParams = {
  id: string;
};

function FormattedDate({ dateString }: { dateString: string }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (dateString) {
      setFormattedDate(format(parseISO(dateString), 'PPP'));
    }
  }, [dateString]);

  if (!formattedDate) {
    return <span>-</span>;
  }

  return <span>{formattedDate}</span>;
}

export default function LeadDetailPage() {
  const params = useParams<LeadDetailPageParams>();
  const id = params?.id;

  const [lead, setLead] = useState<any | null>(null);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (!id || typeof id !== 'string') {
        if (!isMounted) return;
        setError('Missing lead ID');
        setLoading(false);
        return;
      }

      try {
        const [leadData, productsData, quotationsData] = await Promise.all([
          getLeadById(id),
          getProducts(),
          getQuotationsByLeadId(id),
        ]);

        if (!isMounted) return;

        if (!leadData) {
          setError('Lead not found');
          setLoading(false);
          return;
        }
        setLead(leadData as any);
        setAllProducts(productsData || []);
        setQuotations(quotationsData || []);
      } catch (err) {
        console.error('Error loading lead details', err);
        if (!isMounted) return;
        setError('Failed to load lead details. Please try again.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const populatedProducts: PopulatedLeadProduct[] = useMemo(() => {
    if (!lead) return [];

    return (lead.products || [])
      .map((p: any) => {
        const product = allProducts.find((ap: any) => ap.id === p.productId);
        if (!product) {
          console.warn(
            `Product with ID ${p.productId} not found for lead ${lead.id}`,
          );
          return null;
        }
        const amount = p.quantity * p.rate;
        const gst = amount * (product.gstRate / 100);
        const total = amount + gst;
        return {
          ...p,
          product,
          amount: total,
        } as PopulatedLeadProduct;
      })
      .filter((p: PopulatedLeadProduct | null): p is PopulatedLeadProduct => p !== null);
  }, [lead, allProducts]);

  const totalAmount = useMemo(
    () => populatedProducts.reduce((sum, p) => sum + (p.amount || 0), 0),
    [populatedProducts],
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Link href="/leads">
            <Button variant="outline" size="icon" className="shrink-0">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Loading lead...</h2>
        </div>
      </div>
    );
  }

  if (error || !lead) {
    return (
      <>
        <div className="flex items-center gap-4">
          <Link href="/leads">
            <Button variant="outline" size="icon" className="shrink-0">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Lead Details</h2>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Unable to load lead</CardTitle>
            <CardDescription>
              {error || 'The requested lead could not be found.'}
            </CardDescription>
          </CardHeader>
        </Card>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
            <Link href="/leads">
            <Button variant="outline" size="icon" className="shrink-0">
                <ArrowLeft className="h-4 w-4" />
            </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Lead Details</h2>
        </div>
        <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <CreateQuotationDialog leadId={lead.id} />
            <EditLeadDialog lead={lead} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground border-2 border-primary shrink-0">
                <User className="h-10 w-10" />
              </div>
              <div>
                <CardTitle className="text-2xl">{lead.name}</CardTitle>
                <CardDescription>{lead.company}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{lead.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${lead.email}`} className="text-primary hover:underline break-all">{lead.email}</a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{lead.phone}</span>
                </div>
                {lead.whatsappNumber && (
                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span>{lead.whatsappNumber}</span>
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-muted-foreground" />
                    <span>Source: <strong>{lead.source}</strong></span>
                </div>
                {lead.createdBy && (
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>Created by: <strong>{lead.createdBy}</strong></span>
                    </div>
                )}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-sm font-medium">Status:</span>
                    <StatusUpdateForm 
                        leadId={lead.id!} 
                        currentStatus={lead.status} 
                        leadName={lead.name}
                    />
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t">
                    <span className="text-sm font-medium">Send Message:</span>
                    <CommunicationButtons 
                        leadId={lead.id}
                        leadName={lead.name}
                        email={lead.email}
                        whatsappNumber={lead.whatsappNumber}
                    />
                </div>
            </CardContent>
          </Card>
           <Card>
                <CardHeader>
                <CardTitle>Log New Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <LogActivityForm leadId={lead.id} />
                </CardContent>
            </Card>
        </div>
        
        <div className="lg:col-span-2 flex flex-col gap-6">
            {populatedProducts && populatedProducts.length > 0 && (
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                    <Package className="h-5 w-5" />
                    Interested Products
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>SKU</TableHead>
                                <TableHead className="text-center">Qty</TableHead>
                                <TableHead className="text-right">Rate</TableHead>
                                <TableHead className="text-right">GST</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {populatedProducts.map(p => (
                                <TableRow key={p.productId + (p.selectedSku || '')}>
                                    <TableCell>{p.product.name}</TableCell>
                                    <TableCell>{p.selectedSku ? <Badge variant="secondary">{p.selectedSku}</Badge> : '-'}</TableCell>
                                    <TableCell className="text-center">{p.quantity}</TableCell>
                                    <TableCell className="text-right">{formatCurrency(p.rate)}</TableCell>
                                    <TableCell className="text-right">{p.product.gstRate}%</TableCell>
                                    <TableCell className="text-right">{formatCurrency(p.amount)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5} className="text-right font-bold text-lg">Total Value</TableCell>
                                <TableCell className="text-right font-bold text-lg">{formatCurrency(totalAmount)}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </CardContent>
                </Card>
            )}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <FilePlus className="h-5 w-5" />
                        Quotations
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {quotations.length === 0 ? (
                        <div className="text-center text-muted-foreground py-6">
                            No quotations created for this lead yet.
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Quotation Number</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Total Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {quotations.map((q) => {
                                    const conversionRate = q.conversionRate || 1.0;
                                    const currencySymbol = q.currencySymbol || '₹';
                                    const convertedAmount = q.grandTotal / conversionRate;
                                    const formattedAmount = new Intl.NumberFormat('en-IN', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(convertedAmount);

                                    return (
                                        <TableRow key={q.id}>
                                            <TableCell>
                                                <Link href={`/quotations/${q.id}`} className="font-medium text-primary hover:underline">
                                                    {q.quotationNumber}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <FormattedDate dateString={q.date} />
                                            </TableCell>
                                            <TableCell>{q.status}</TableCell>
                                            <TableCell className="text-right font-medium">
                                                {currencySymbol}{formattedAmount}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    Activity History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <ActivityTimeline activities={lead.activities || []} />
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}
