"use client";

import React, { useEffect, useState } from "react";
import { getQuotationTemplates } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddQuotationTemplateSheet } from "./add-quotation-template-sheet";
import { QuotationTemplateActions } from "./quotation-template-actions";
import { FileText } from "lucide-react";

export default function QuotationTemplatesPage() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getQuotationTemplates();
        if (!cancelled) {
          setTemplates(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load quotation templates.");
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
  }, []);

  if (loading) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Quotation Templates</h2>
        </div>
        <div className="text-center text-muted-foreground py-10">Loading templates...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Quotation Templates</h2>
        </div>
        <div className="text-center text-muted-foreground py-10">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Quotation Templates</h2>
        <AddQuotationTemplateSheet />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {template.name}
                </CardTitle>
                <CardDescription className="pt-1">{template.companyName}</CardDescription>
              </div>
              <QuotationTemplateActions template={template} />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">{template.termsAndConditions}</p>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">GSTIN: {template.companyGst}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      {templates.length === 0 && (
        <div className="text-center py-20 text-muted-foreground border-2 border-dashed rounded-lg">
          <h3 className="text-lg font-semibold">No Templates Found</h3>
          <p className="mt-1">You haven't created any quotation templates yet.</p>
        </div>
      )}
    </>
  );
}
