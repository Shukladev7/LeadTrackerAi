

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLeadById, getProducts } from '@/lib/data';
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
import { PopulatedLeadProduct } from '@/lib/types';
import { CreateQuotationDialog } from '@/app/quotations/create-quotation-dialog';
import { Badge } from '@/components/ui/badge';
import { StatusUpdateForm } from './status-update-form';
import { CommunicationButtons } from './communication-buttons';


export default async function LeadDetailPage({ params }: { params: { id:string } }) {
  const lead = await getLeadById(params.id);
  const allProducts = await getProducts();

  if (!lead) {
    notFound();
  }

  const populatedProducts: PopulatedLeadProduct[] = (lead.products || []).map(p => {
    const product = allProducts.find(ap => ap.id === p.productId);
    if (!product) {
      // This should ideally not happen if data integrity is maintained
      throw new Error(`Product with ID ${p.productId} not found for lead ${lead.id}`);
    }
    const amount = p.quantity * p.rate;
    const gst = amount * (product.gstRate / 100);
    const total = amount + gst;
    return {
      ...p,
      product,
      amount: total,
    };
  });
  
  const totalAmount = populatedProducts.reduce((sum, p) => sum + p.amount, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };


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
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    Activity History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <ActivityTimeline activities={lead.activities} />
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}
