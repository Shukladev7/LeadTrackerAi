
import { getQuotations, getLeads } from "@/lib/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function QuotationsPage() {
  const quotations = await getQuotations();
  const leads = await getLeads();

  const populatedQuotations = quotations.map(q => {
    const lead = leads.find(l => l.id === q.leadId);
    return { ...q, leadName: lead?.name || 'N/A', leadCompany: lead?.company || 'N/A' };
  });

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Quotations</h2>
      </div>
      <DataTable columns={columns} data={populatedQuotations} />
    </>
  );
}
