"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts, getProductCategories } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { AddProductSheet } from "./add-product-sheet";
import { ImportProductsDialog } from "./import-products-dialog";
import { ProductsFilters } from "./products-filters";
import { ProductActions } from "./product-actions";
import { PDFViewer } from "@/components/pdf-viewer";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [products, setProducts] = useState<any[]>([]);
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredProducts = categoryParam
    ? products.filter((product) => product.categoryId === categoryParam)
    : products;

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [prodData, categories] = await Promise.all([
          getProducts(),
          getProductCategories(),
        ]);

        if (!cancelled) {
          setProducts(prodData);
          setAllCategories(categories);
        }
      } catch (e) {
        if (!cancelled) {
          setError("Failed to load products.");
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
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="text-center text-muted-foreground py-10">
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="text-center text-muted-foreground py-10">
          {error}
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Products {filteredProducts.length}
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          <ProductsFilters categories={allCategories} />
          <ImportProductsDialog />
          <AddProductSheet />
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Products</CardTitle>
          <CardDescription>
            A list of all the products and services you offer.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>SKUs</TableHead>
                <TableHead>Catalogue</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">GST</TableHead>
                <TableHead className="w-[50px]">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.productImage ? (
                      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={product.productImage.url}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">
                          No image
                        </span>
                      </div>
                    )}
                  </TableCell>

                  <TableCell className="font-medium">
                    {product.name}
                  </TableCell>

                  <TableCell>
                    {product.categoryId ? (
                      (() => {
                        const category = allCategories.find(
                          (c) => c.id === product.categoryId
                        );
                        return category ? (
                          <Badge variant="secondary">
                            {category.name}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        );
                      })()
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {product.skus?.map((sku: string) => (
                        <Badge key={sku} variant="outline">
                          {sku}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>

                  <TableCell>
                    {product.cataloguePdf ? (
                      <PDFViewer
                        pdfData={product.cataloguePdf}
                        trigger={
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-4 w-4" />
                            View PDF
                          </Button>
                        }
                      />
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>

                  <TableCell className="text-right">
                    {formatCurrency(product.price)}
                  </TableCell>

                  <TableCell className="text-right">
                    {product.gstRate}%
                  </TableCell>

                  <TableCell>
                    <ProductActions product={product} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredProducts.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              {products.length === 0
                ? "You haven't added any products yet."
                : "No products found for the selected category."}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
