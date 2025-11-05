import { getLeads, getProducts } from "@/lib/firestore-data-service";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Lead, Product } from "@/lib/types";

type LeadsPageProps = {
  searchParams?: Promise<{
    q?: string;
    status?: string;
    source?: string;
    product?: string;
  }>;
};

// Enhanced lead type with product names
type EnhancedLead = Lead & {
  productsWithNames?: Array<{
    productId: string;
    quantity: number;
    rate: number;
    selectedSku?: string;
    productName: string;
  }>;
};

export default async function LeadsPage({ searchParams }: LeadsPageProps) {
  const params = await searchParams || {};
  
  const [leads, products] = await Promise.all([
    getLeads(params.q, params.status, params.source, params.product),
    getProducts()
  ]);
  
  // Create a product lookup map for performance
  const productLookup = new Map(products.map(p => [p.id, p.name]));
  
  // Enhance leads with product names
  const enhancedLeads: EnhancedLead[] = leads.map(lead => ({
    ...lead,
    productsWithNames: lead.products?.map(p => ({
      ...p,
      productName: productLookup.get(p.productId) || 'Unknown Product'
    }))
  }));
  
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Leads {enhancedLeads.length}</h2>
      </div>
      <DataTable columns={columns} data={enhancedLeads} />
    </>
  );
}
