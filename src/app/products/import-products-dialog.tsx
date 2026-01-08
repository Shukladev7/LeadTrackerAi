'use client';

import { Button } from '@/components/ui/button';
import { CSVImportDialog } from '@/components/csv-import-dialog';
import { Upload } from 'lucide-react';
import { z } from 'zod';
import { addProduct, getProductCategories, NewProduct } from '@/lib/data';

const EXPECTED_COLUMNS = ['name', 'price', 'gstRate', 'skus', 'category'];
const REQUIRED_COLUMNS = ['name', 'price', 'gstRate'];
const OPTIONAL_COLUMNS = ['skus', 'category'];

const SAMPLE_DATA = {
  name: 'Premium Widget',
  price: '1500.00',
  gstRate: '18',
  skus: 'WID-001,WID-002,WID-003',
  category: 'Widgets'
};

const importProductSchema = z.object({
  name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
  price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
  gstRate: z.coerce.number().min(0).max(100),
  skus: z.array(z.string()).optional(),
  catalogueUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

export function ImportProductsDialog() {
  const handleImport = async (csvData: any[]) => {
    try {
      const results = {
        success: 0,
        failed: 0,
        errors: [] as string[],
      };

      const allCategories = await getProductCategories();

      for (let i = 0; i < csvData.length; i++) {
        const row = csvData[i];

        try {
          const skus = row.skus
            ? row.skus
                .split(',')
                .map((sku: string) => sku.trim())
                .filter(Boolean)
            : [];

          let categoryId: string | undefined = undefined;
          const categoryName = (row.category || row.categories || '').toString().trim();
          if (categoryName) {
            const existingCategory = allCategories.find((c) => c.name === categoryName);
            if (existingCategory) {
              categoryId = existingCategory.id;
            } else {
              results.errors.push(
                `Row ${i + 1}: Category not found: ${categoryName}. Please create this category first.`,
              );
            }
          }

          const dataForValidation = {
            name: row.name,
            price: row.price,
            gstRate: row.gstRate,
            ...(skus.length > 0 && { skus }),
            ...(row.catalogueUrl && row.catalogueUrl.trim() && { catalogueUrl: row.catalogueUrl }),
          };

          const validatedData = importProductSchema.parse(dataForValidation);

          const productData: NewProduct = {
            name: validatedData.name,
            price: validatedData.price,
            gstRate: validatedData.gstRate,
            categoryId,
            skus: validatedData.skus,
            catalogueUrl: validatedData.catalogueUrl || undefined,
          };

          await addProduct(productData);
          results.success++;
        } catch (error) {
          results.failed++;
          if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map(
              (e) => `Row ${i + 1}: ${e.path.join('.')} - ${e.message}`,
            );
            results.errors.push(...errorMessages);
          } else {
            results.errors.push(
              `Row ${i + 1}: Failed to import product - ${
                error instanceof Error ? error.message : 'Unknown error'
              }`,
            );
          }
        }
      }

      return {
        success: results.failed === 0,
        message: `Import completed. ${results.success} products imported successfully${
          results.failed > 0 ? `, ${results.failed} failed` : ''
        }.`,
        errors: results.errors.length > 0 ? results.errors : undefined,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Import failed due to an unexpected error',
        errors: [error instanceof Error ? error.message : 'Unknown error'],
      };
    }
  };

  return (
    <CSVImportDialog
      title="Import Products from CSV"
description="Upload a CSV file to import multiple products at once. Make sure your CSV follows the expected format. Category should reference an existing category name."
      expectedColumns={EXPECTED_COLUMNS}
      requiredColumns={REQUIRED_COLUMNS}
      sampleData={SAMPLE_DATA}
      onImport={handleImport}
    >
      <Button variant="outline" className="flex items-center gap-2">
        <Upload className="h-4 w-4" />
        Import CSV
      </Button>
    </CSVImportDialog>
  );
}
