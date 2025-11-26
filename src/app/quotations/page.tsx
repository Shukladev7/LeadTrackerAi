
import { getQuotations, getLeads, getQuotationStatuses } from "@/lib/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ALL_QUOTATION_STATUSES } from "@/lib/types";

export default async function QuotationsPage() {
  const quotations = await getQuotations();
  const leads = await getLeads();
  const quotationStatuses = await getQuotationStatuses();

  const populatedQuotations = quotations.map(q => {
    const lead = leads.find(l => l.id === q.leadId);
    return { ...q, leadName: lead?.name || 'N/A', leadCompany: lead?.company || 'N/A' };
  });

  const statusNames = quotationStatuses.length
    ? quotationStatuses
        .filter((s) => s.isActive !== false)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
        .map((s) => s.name)
    : ALL_QUOTATION_STATUSES;

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Quotations {populatedQuotations.length}</h2>
      </div>
      <DataTable columns={columns} data={populatedQuotations} quotationStatuses={statusNames} />
    </>
  );
}
