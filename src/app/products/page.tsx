import { getProducts } from "@/lib/data";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Link2, FileText } from 'lucide-react';
import { ProductActions } from "./product-actions";
import { PDFViewer } from "@/components/pdf-viewer";
import Image from 'next/image';
import { getProductCategoriesAction } from "@/lib/actions";
import { ProductsFilters } from "./products-filters";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [products, allCategories] = await Promise.all([
    getProducts(),
    getProductCategoriesAction(),
  ]);

  const categoryParam =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : Array.isArray(searchParams?.category)
      ? searchParams?.category[0]
      : undefined;

  const filteredProducts = categoryParam
    ? products.filter((product) => product.categoryId === categoryParam)
    : products;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Products {filteredProducts.length}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-end">
          <ProductsFilters categories={allCategories} />
          <ImportProductsDialog />
          <AddProductSheet />
        </div>
      </div>
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
                        <span className="text-xs text-muted-foreground">No image</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
{product.categoryId ? (
                        (() => {
                          const category = allCategories.find(c => c.id === product.categoryId);
                          return category ? (
                            <Badge variant="secondary">{category.name}</Badge>
                          ) : (
                            <span className="text-muted-foreground text-sm">-</span>
                          );
                        })()
                      ) : (
                        <span className="text-muted-foreground text-sm">-</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {product.skus?.map(sku => <Badge key={sku} variant="outline">{sku}</Badge>)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {product.cataloguePdf ? (
                        <PDFViewer 
                          pdfData={product.cataloguePdf}
                          trigger={
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              View PDF
                            </Button>
                          }
                        />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(product.price)}</TableCell>
                  <TableCell className="text-right">{product.gstRate}%</TableCell>
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
