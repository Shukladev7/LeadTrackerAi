import { getEmployees } from "@/lib/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function EmployeesPage() {
  const employees = await getEmployees();
  
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Employees</h2>
      </div>
      <DataTable columns={columns} data={employees} />
    </>
  );
}
