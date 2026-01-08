"use client";

import { SetupCard } from "./setupCard";
import {
  DollarSign,
  Ruler,
  FileText,
  Building2,
  Box,
  Users,
  Layers,
  ClipboardList,
} from "lucide-react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function SetupPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Setup</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SetupCard
          title="Currencies"
          description="Manage currencies for quotations. INR is the base currency."
          href="/setup/currencies"
          buttonText="Manage Currencies"
          Icon={DollarSign}
        />

        <SetupCard
          title="Units of Measurement"
          description="Define units like pcs, kg, meter and use them in products."
          href="/setup/units"
          buttonText="Manage Units"
          Icon={Ruler}
        />

        <SetupCard
          title="Lead Statuses"
          description="View the fixed statuses that can be assigned to a lead."
          href="/setup/lead-statuses"
          buttonText="View Lead Statuses"
          Icon={ClipboardList}
        />

        <SetupCard
          title="Quotation Statuses"
          description="Manage the statuses available for quotations."
          href="/setup/quotation-statuses"
          buttonText="Manage Quotation Statuses"
          Icon={FileText}
        />

        <SetupCard
          title="Lead Sources"
          description="Manage the sources from where your leads originate."
          href="/setup/lead-sources"
          buttonText="Manage Lead Sources"
          Icon={Users}
        />

        <SetupCard
          title="Quotation Templates"
          description="Create and manage reusable quotation templates."
          href="/setup/quotation-templates"
          buttonText="Manage Templates"
          Icon={FileText}
        />

        <SetupCard
          title="Employee Roles"
          description="Define roles that can be assigned to employees."
          href="/setup/employee-roles"
          buttonText="Manage Employee Roles"
          Icon={Layers}
        />

        <SetupCard
          title="Departments"
          description="Manage departments within your organization."
          href="/setup/departments"
          buttonText="Manage Departments"
          Icon={Building2}
        />

        <SetupCard
          title="Product Categories"
          description="Organize products using categories."
          href="/setup/product-categories"
          buttonText="Manage Product Categories"
          Icon={Box}
        />

        <SetupCard
          title="Manufacturing Companies"
          description="Manage manufacturing companies linked to products."
          href="/setup/manufacturing-companies"
          buttonText="Manage Manufacturing Companies"
          Icon={Building2}
        />
      </div>
    </>
  );
}
