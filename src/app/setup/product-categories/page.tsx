"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Box, Trash2, Pencil, PlusCircle } from "lucide-react";
import { getProductCategories, addProductCategory, updateProductCategory, deleteProductCategory } from "@/lib/data";

export default function ProductCategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [editingDescription, setEditingDescription] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProductCategories();
        if (!cancelled) {
          setCategories(data || []);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load product categories.");
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
      const created = await addProductCategory(newName.trim(), newDescription.trim());
      setCategories(prev => [...prev, created]);
      setNewName("");
      setNewDescription("");
    } catch (e) {
      setError("Failed to add product category.");
    }
  }

  function startEdit(category: any) {
    setEditingId(category.id || null);
    setEditingName(category.name || "");
    setEditingDescription(category.description || "");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingName("");
    setEditingDescription("");
  }

  async function handleSaveEdit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId) return;
    const name = editingName.trim();
    const description = editingDescription.trim();
    if (!name) return;
    try {
      const updated = await updateProductCategory(editingId, name, description);
      setCategories(prev => prev.map(c => (c.id === updated.id ? updated : c)));
      setEditingId(null);
      setEditingName("");
      setEditingDescription("");
    } catch (e) {
      setError("Failed to update product category.");
    }
  }

  function confirmDelete(id: string) {
    setDeleteId(id);
  }

  async function handleConfirmDelete() {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await deleteProductCategory(deleteId);
      setCategories(prev => prev.filter(c => c.id !== deleteId));
      setDeleteId(null);
    } catch (e) {
      setError("Failed to delete product category.");
    } finally {
      setIsDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Product Categories</h2>
          </div>
        </div>
        <div className="text-center text-muted-foreground py-10">Loading product categories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Product Categories</h2>
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
          <h2 className="text-3xl font-bold tracking-tight">Product Categories</h2>
          <p className="text-muted-foreground mt-1">
            Manage product categories for your inventory.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="h-5 w-5" />
            Product Categories
          </CardTitle>
          <CardDescription>These categories can be assigned to products.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {categories.length === 0 ? (
              <p className="text-sm text-muted-foreground">No product categories defined yet. Add your first category below.</p>
            ) : (
              categories.map(category => (
                <div key={category.id} className="p-3 rounded-md bg-secondary">
                  {editingId === category.id ? (
                    <form onSubmit={handleSaveEdit} className="space-y-2">
                      <Input
                        value={editingName}
                        onChange={e => setEditingName(e.target.value)}
                        placeholder="Category name"
                        autoFocus
                      />
                      <Input
                        value={editingDescription}
                        onChange={e => setEditingDescription(e.target.value)}
                        placeholder="Description (optional)"
                      />
                      <div className="flex items-center gap-2">
                        <Button type="submit" size="sm">Save</Button>
                        <Button type="button" variant="outline" size="sm" onClick={cancelEdit}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <span className="text-sm font-medium flex items-center gap-2">
                          <Box className="h-4 w-4 text-muted-foreground" />
                          {category.name}
                        </span>
                        {category.description && (
                          <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => startEdit(category)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => confirmDelete(category.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <form
            onSubmit={handleAdd}
            className="flex w-full flex-col gap-2 pt-4 border-t mt-4"
          >
            <div className="flex w-full flex-col sm:flex-row items-center gap-2">
              <Input
                name="name"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Add new category"
              />
            </div>
            <Input
              name="description"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              placeholder="Description (optional)"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={open => !open && !isDeleting && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete product category?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected category.
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
