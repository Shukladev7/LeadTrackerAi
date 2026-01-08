"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ALL_STATUSES } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";

export default function LeadStatusesPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Lead Statuses</h2>
          <p className="text-muted-foreground mt-1">
            View the fixed lead statuses used throughout the system.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lead Statuses</CardTitle>
          <CardDescription>
            These statuses are hard-coded and cannot be edited from the UI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {ALL_STATUSES.map((status) => (
            <div
              key={status}
              className="flex items-center justify-between p-2 rounded-md bg-secondary"
            >
              <StatusBadge status={status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
