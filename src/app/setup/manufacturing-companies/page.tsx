"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Building2, Trash2, Pencil, PlusCircle } from "lucide-react";
import { getManufacturingCompanies, addManufacturingCompany, updateManufacturingCompany, deleteManufacturingCompany } from "@/lib/data";

export default function ManufacturingCompaniesPage() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getManufacturingCompanies();
        if (!cancelled) {
          setCompanies(data || []);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load manufacturing companies.");
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

  async function handleAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newName.trim()) return;
    try {
      const created = await addManufacturingCompany(newName.trim());
      setCompanies(prev => [...prev, created]);
      setNewName("");
    } catch (e) {
      setError("Failed to add manufacturing company.");
    }
  }

  function startEdit(company: any) {
    setEditingId(company.id || null);
    setEditingName(company.name || "");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingName("");
  }

  async function handleSaveEdit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId) return;
    const name = editingName.trim();
    if (!name) return;
    try {
      const updated = await updateManufacturingCompany(editingId, name);
      setCompanies(prev => prev.map(c => (c.id === updated.id ? updated : c)));
      setEditingId(null);
      setEditingName("");
    } catch (e) {
      setError("Failed to update manufacturing company.");
    }
  }

  function confirmDelete(id: string) {
    setDeleteId(id);
  }

  async function handleConfirmDelete() {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await deleteManufacturingCompany(deleteId);
      setCompanies(prev => prev.filter(c => c.id !== deleteId));
      setDeleteId(null);
    } catch (e) {
      setError("Failed to delete manufacturing company.");
    } finally {
      setIsDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manufacturing Companies</h2>
          </div>
        </div>
        <div className="text-center text-muted-foreground py-10">Loading manufacturing companies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manufacturing Companies</h2>
          </div>
        </div>
        <div className="text-center text-muted-foreground py-10">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Manufacturing Companies</h2>
          <p className="text-muted-foreground mt-1">
            Manage manufacturing companies for your products.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Manufacturing Companies
          </CardTitle>
          <CardDescription>These appear when associating products and leads with a manufacturer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {companies.length === 0 ? (
              <p className="text-sm text-muted-foreground">No manufacturing companies defined yet. Add your first company below.</p>
            ) : (
              companies.map(company => (
                <div key={company.id} className="p-3 rounded-md bg-secondary flex items-center justify-between gap-2">
                  {editingId === company.id ? (
                    <form onSubmit={handleSaveEdit} className="flex flex-1 items-center gap-2">
                      <Input
                        value={editingName}
                        onChange={e => setEditingName(e.target.value)}
                        autoFocus
                      />
                      <Button type="submit" size="sm">Save</Button>
                      <Button type="button" variant="outline" size="sm" onClick={cancelEdit}>
                        Cancel
                      </Button>
                    </form>
                  ) : (
                    <>
                      <span className="text-sm font-medium flex-1 flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        {company.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => startEdit(company)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => confirmDelete(company.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          <form
            onSubmit={handleAdd}
            className="flex w-full flex-col sm:flex-row items-center gap-2 pt-4 border-t mt-4"
          >
            <Input
              name="name"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              placeholder="Add new manufacturing company"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Company
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={open => !open && !isDeleting && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete manufacturing company?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected company.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="destructive"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
