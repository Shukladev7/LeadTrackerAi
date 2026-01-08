"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { getEmployees } from "@/lib/data";
import { createColumns } from "./columns";
import { DataTable } from "./data-table";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getEmployees();
        if (!cancelled) {
          setEmployees(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load employees.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  const handleEmployeesChanged = useCallback(() => {
    setReloadToken((token) => token + 1);
  }, []);

  const columns = useMemo(() => createColumns(handleEmployeesChanged), [handleEmployeesChanged]);

  if (loading) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Employees</h2>
        </div>
        <div className="text-center text-muted-foreground py-10">Loading employees...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Employees</h2>
        </div>
        <div className="text-center text-muted-foreground py-10">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Employees {employees.length}</h2>
      </div>
      <DataTable columns={columns} data={employees} onChange={handleEmployeesChanged} />
    </>
  );
}
