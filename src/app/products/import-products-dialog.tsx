'use client';

import { Button } from '@/components/ui/button';
import { CSVImportDialog } from '@/components/csv-import-dialog';
import { importProductsFromCSV } from '@/lib/actions';
import { Upload } from 'lucide-react';

const EXPECTED_COLUMNS = ['name', 'price', 'gstRate', 'skus'];
const REQUIRED_COLUMNS = ['name', 'price', 'gstRate'];
const OPTIONAL_COLUMNS = ['skus'];

const SAMPLE_DATA = {
  name: 'Premium Widget',
  price: '1500.00',
  gstRate: '18',
  skus: 'WID-001,WID-002,WID-003'
};

export function ImportProductsDialog() {
  const handleImport = async (csvData: any[]) => {
    try {
      const result = await importProductsFromCSV(csvData);
      return result;
    } catch (error) {
      return {
        success: false,
        message: 'Import failed due to an unexpected error',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  };

  return (
    <CSVImportDialog
      title="Import Products from CSV"
      description="Upload a CSV file to import multiple products at once. Make sure your CSV follows the expected format."
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
