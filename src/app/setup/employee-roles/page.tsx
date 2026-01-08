"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { UserCheck, Trash2, Pencil, PlusCircle } from "lucide-react";
import { getEmployeeRoles, addEmployeeRole, updateEmployeeRole, deleteEmployeeRole } from "@/lib/data";

export default function EmployeeRolesPage() {
  const [roles, setRoles] = useState<any[]>([]);
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
        const data = await getEmployeeRoles();
        if (!cancelled) {
          setRoles(data || []);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load employee roles.");
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
      const created = await addEmployeeRole(newName.trim());
      setRoles(prev => [...prev, created]);
      setNewName("");
    } catch (e) {
      setError("Failed to add employee role.");
    }
  }

  function startEdit(role: any) {
    setEditingId(role.id || null);
    setEditingName(role.name || "");
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
      const updated = await updateEmployeeRole(editingId, name);
      setRoles(prev => prev.map(r => (r.id === updated.id ? updated : r)));
      setEditingId(null);
      setEditingName("");
    } catch (e) {
      setError("Failed to update employee role.");
    }
  }

  function confirmDelete(id: string) {
    setDeleteId(id);
  }

  async function handleConfirmDelete() {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await deleteEmployeeRole(deleteId);
      setRoles(prev => prev.filter(r => r.id !== deleteId));
      setDeleteId(null);
    } catch (e) {
      setError("Failed to delete employee role.");
    } finally {
      setIsDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Employee Roles</h2>
          </div>
        </div>
        <div className="text-center text-muted-foreground py-10">Loading employee roles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Employee Roles</h2>
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
          <h2 className="text-3xl font-bold tracking-tight">Employee Roles</h2>
          <p className="text-muted-foreground mt-1">
            Manage the available roles that can be assigned to an employee.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Employee Roles
          </CardTitle>
          <CardDescription>These appear when assigning roles to employees.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {roles.length === 0 ? (
              <p className="text-sm text-muted-foreground">No roles defined yet. Add your first role below.</p>
            ) : (
              roles.map(role => (
                <div key={role.id} className="flex items-center justify-between p-2 rounded-md bg-secondary">
                  {editingId === role.id ? (
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
                      <span className="text-sm font-medium flex items-center gap-2">
                        <Badge variant="secondary">{role.name}</Badge>
                      </span>
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => startEdit(role)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => confirmDelete(role.id)}
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
              placeholder="Add new role"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Role
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={open => !open && !isDeleting && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete employee role?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected role.
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
