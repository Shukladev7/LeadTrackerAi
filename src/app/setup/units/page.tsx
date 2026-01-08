"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Ruler, Pencil, Trash2, PlusCircle } from "lucide-react";
import { getUnitsOfMeasurement, addUnitOfMeasurement, updateUnitOfMeasurement, deleteUnitOfMeasurement } from "@/lib/firestore-data-service";

export default function UnitsPage() {
  const [units, setUnits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newUnitName, setNewUnitName] = useState("");
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
        const data = await getUnitsOfMeasurement();
        if (!cancelled) {
          setUnits(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load units.");
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

  async function handleAddUnit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newUnitName.trim()) return;
    try {
      const created = await addUnitOfMeasurement(newUnitName.trim());
      setUnits(prev => [...prev, created]);
      setNewUnitName("");
    } catch (e) {
      setError("Failed to add unit.");
    }
  }

  function startEdit(unit: any) {
    setEditingId(unit.id || null);
    setEditingName(unit.name || "");
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
      const updated = await updateUnitOfMeasurement(editingId, name);
      setUnits(prev => prev.map(u => (u.id === updated.id ? updated : u)));
      setEditingId(null);
      setEditingName("");
    } catch (e) {
      setError("Failed to update unit.");
    }
  }

  function confirmDelete(id: string) {
    setDeleteId(id);
  }

  async function handleConfirmDelete() {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await deleteUnitOfMeasurement(deleteId);
      setUnits(prev => prev.filter(u => u.id !== deleteId));
      setDeleteId(null);
    } catch (e) {
      setError("Failed to delete unit.");
    } finally {
      setIsDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Units of Measurement</h2>
          </div>
        </div>
        <div className="text-center text-muted-foreground py-10">Loading units...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Units of Measurement</h2>
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
          <h2 className="text-3xl font-bold tracking-tight">Units of Measurement</h2>
          <p className="text-muted-foreground mt-1">
            Define and manage the units of measurement used for your products (e.g. pcs, kg, meter).
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="h-5 w-5" />
            Units of Measurement
          </CardTitle>
          <CardDescription>
            These units are available when creating and editing products.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {units.length === 0 ? (
              <p className="text-sm text-muted-foreground">No units defined yet. Add your first unit below.</p>
            ) : (
              units.map((unit) => (
                <div
                  key={unit.id}
                  className="flex items-center justify-between p-2 rounded-md bg-secondary"
                >
                  {editingId === unit.id ? (
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
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{unit.name}</Badge>
                      </div>
                      {unit.id && (
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => startEdit(unit)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => confirmDelete(unit.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleAddUnit} className="flex w-full flex-col sm:flex-row items-center gap-2 pt-4 border-t mt-4">
            <Input
              name="name"
              value={newUnitName}
              onChange={e => setNewUnitName(e.target.value)}
              placeholder="Add new unit (e.g. pcs, kg, meter)"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Unit
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={open => !open && !isDeleting && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete unit of measurement?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected unit.
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
