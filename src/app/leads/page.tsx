import { getLeads } from "@/lib/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

type LeadsPageProps = {
  searchParams: {
    q?: string;
    status?: string;
  };
};

export default async function LeadsPage({ searchParams }: LeadsPageProps) {
  const leads = await getLeads(searchParams.q, searchParams.status);
  
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Leads {leads.length}</h2>
      </div>
      <DataTable columns={columns} data={leads} />
    </>
  );
}
