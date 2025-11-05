'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Download,
  Loader2 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { parseCSV, generateSampleCSV, downloadCSV } from '@/lib/csv-utils';

interface CSVRow {
  [key: string]: string;
}

interface ValidationError {
  row: number;
  field: string;
  message: string;
}

interface CSVImportDialogProps {
  title: string;
  description: string;
  expectedColumns: string[];
  requiredColumns?: string[];
  sampleData: Record<string, string>;
  onImport: (data: CSVRow[]) => Promise<{ success: boolean; message: string; errors?: string[] }>;
  children: React.ReactNode;
}

export function CSVImportDialog({
  title,
  description,
  expectedColumns,
  requiredColumns = expectedColumns,
  sampleData,
  onImport,
  children
}: CSVImportDialogProps) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<CSVRow[]>([]);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const [importing, setImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [importResult, setImportResult] = useState<{ success: boolean; message: string; errors?: string[] } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use the improved CSV parsing from utils

  const validateData = (data: CSVRow[]): ValidationError[] => {
    const errors: ValidationError[] = [];

    data.forEach((row, index) => {
      requiredColumns.forEach(column => {
        if (!row[column] || row[column].trim() === '') {
          errors.push({
            row: index + 1,
            field: column,
            message: `${column} is required`
          });
        }
      });

      // Additional validation for specific fields
      if (row.price && isNaN(Number(row.price))) {
        errors.push({
          row: index + 1,
          field: 'price',
          message: 'Price must be a valid number'
        });
      }

      if (row.gstRate && (isNaN(Number(row.gstRate)) || Number(row.gstRate) < 0 || Number(row.gstRate) > 100)) {
        errors.push({
          row: index + 1,
          field: 'gstRate',
          message: 'GST Rate must be a number between 0 and 100'
        });
      }
    });

    return errors;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.name.endsWith('.csv')) {
      alert('Please select a CSV file');
      return;
    }

    setFile(selectedFile);
    setImportResult(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const parsed = parseCSV(text);
      setCsvData(parsed);
      
      const errors = validateData(parsed);
      setValidationErrors(errors);
    };
    reader.readAsText(selectedFile);
  };

  const handleImport = async () => {
    if (validationErrors.length > 0) {
      alert('Please fix validation errors before importing');
      return;
    }

    setImporting(true);
    setImportProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setImportProgress(prev => Math.min(prev + 10, 90));
      }, 100);

      const result = await onImport(csvData);
      
      clearInterval(progressInterval);
      setImportProgress(100);
      setImportResult(result);

      if (result.success) {
        setTimeout(() => {
          setOpen(false);
          resetState();
        }, 2000);
      }
    } catch (error) {
      setImportResult({
        success: false,
        message: 'Import failed due to an unexpected error'
      });
    } finally {
      setImporting(false);
    }
  };

  const resetState = () => {
    setFile(null);
    setCsvData([]);
    setValidationErrors([]);
    setImporting(false);
    setImportProgress(0);
    setImportResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadSample = () => {
    const csvContent = generateSampleCSV(expectedColumns, sampleData);
    downloadCSV('sample_products_import.csv', csvContent);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* File Upload Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="csv-file">Select CSV File</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadSample}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Sample
              </Button>
            </div>
            
            <Input
              id="csv-file"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              ref={fileInputRef}
              disabled={importing}
            />

            {file && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                {file.name} ({csvData.length} rows)
              </div>
            )}
          </div>

          {/* Expected Format */}
          <div className="space-y-2">
            <Label>Expected CSV Format</Label>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>
                <strong>Required columns:</strong> {requiredColumns.join(', ')}
              </div>
              {expectedColumns.filter(col => !requiredColumns.includes(col)).length > 0 && (
                <div>
                  <strong>Optional columns:</strong> {expectedColumns.filter(col => !requiredColumns.includes(col)).join(', ')}
                </div>
              )}
            </div>
          </div>

          {/* Validation Errors */}
          {validationErrors.length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-1">
                  <div className="font-medium">Validation Errors ({validationErrors.length}):</div>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {validationErrors.slice(0, 10).map((error, index) => (
                      <div key={index} className="text-xs">
                        Row {error.row}: {error.field} - {error.message}
                      </div>
                    ))}
                    {validationErrors.length > 10 && (
                      <div className="text-xs">... and {validationErrors.length - 10} more errors</div>
                    )}
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Import Progress */}
          {importing && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Importing data...</span>
              </div>
              <Progress value={importProgress} className="w-full" />
            </div>
          )}

          {/* Import Result */}
          {importResult && (
            <Alert variant={importResult.success ? "default" : "destructive"}>
              {importResult.success ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertDescription>
                <div className="space-y-1">
                  <div>{importResult.message}</div>
                  {importResult.errors && importResult.errors.length > 0 && (
                    <div className="text-xs space-y-1">
                      {importResult.errors.map((error, index) => (
                        <div key={index}>• {error}</div>
                      ))}
                    </div>
                  )}
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Data Preview */}
          {csvData.length > 0 && (
            <div className="space-y-2">
              <Label>Data Preview ({csvData.length} rows)</Label>
              <div className="border rounded-md max-h-64 overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {expectedColumns.map(column => (
                        <TableHead key={column}>{column}</TableHead>
                      ))}
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {csvData.slice(0, 10).map((row, index) => {
                      const rowErrors = validationErrors.filter(e => e.row === index + 1);
                      return (
                        <TableRow key={index}>
                          {expectedColumns.map(column => (
                            <TableCell key={column} className="max-w-32 truncate">
                              {row[column]}
                            </TableCell>
                          ))}
                          <TableCell>
                            {rowErrors.length > 0 ? (
                              <Badge variant="destructive">
                                {rowErrors.length} error{rowErrors.length > 1 ? 's' : ''}
                              </Badge>
                            ) : (
                              <Badge variant="secondary">Valid</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {csvData.length > 10 && (
                  <div className="p-2 text-center text-sm text-muted-foreground border-t">
                    ... and {csvData.length - 10} more rows
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={importing}>
            Cancel
          </Button>
          <Button 
            onClick={handleImport} 
            disabled={!file || csvData.length === 0 || validationErrors.length > 0 || importing}
          >
            {importing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Importing...
              </>
            ) : (
              `Import ${csvData.length} Products`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
