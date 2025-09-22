# CSV Import Feature for Products

This document outlines the CSV import functionality implemented for the Products page in LeadTracker.ai.

## Features

### 🔄 **CSV Import Capabilities**
- **Bulk Product Import**: Import multiple products at once from CSV files
- **Data Validation**: Real-time validation of CSV data with error reporting
- **Progress Tracking**: Visual progress indicator during import process
- **Error Handling**: Detailed error messages for failed imports
- **Sample CSV Generation**: Download sample CSV template

### 📊 **Data Processing**
- **Smart CSV Parsing**: Handles quoted fields, commas, and special characters
- **Field Validation**: Validates required fields and data types
- **SKU Processing**: Parses comma-separated SKU lists
- **URL Validation**: Validates catalogue URLs
- **Price & GST Validation**: Ensures numeric values are valid

## File Structure

```
src/
├── components/
│   └── csv-import-dialog.tsx         # Generic CSV import dialog component
├── app/products/
│   └── import-products-dialog.tsx    # Product-specific import dialog
├── lib/
│   ├── csv-utils.ts                  # CSV parsing and utility functions
│   └── actions.ts                    # Server action for CSV import
└── CSV_IMPORT_README.md              # This documentation
```

## CSV Format

### Required Columns
Your CSV file must contain the following columns:

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `name` | String | Yes | Product name (min 3 characters) |
| `description` | String | Yes | Product description (min 10 characters) |
| `price` | Number | Yes | Product price (positive number) |
| `gstRate` | Number | Yes | GST rate (0-100) |
| `skus` | String | No | Comma-separated SKU list |
| `catalogueUrl` | String | No | Product catalogue URL |

### Sample CSV Content
```csv
name,description,price,gstRate,skus,catalogueUrl
Premium Widget,High-quality widget for professional use with advanced features,1500.00,18,"WID-001,WID-002,WID-003",https://example.com/widget-catalog
Basic Tool,Essential tool for everyday tasks and general purpose use,750.50,12,"TOOL-001,TOOL-002",https://example.com/tool-catalog
Professional Service,Expert consultation and implementation services,2500.00,18,,https://example.com/service-info
```

## Usage Instructions

### 1. Access Import Feature
1. Navigate to the Products page
2. Click the "Import CSV" button next to "Add Product"

### 2. Download Sample Template
1. In the import dialog, click "Download Sample"
2. Use the downloaded CSV as a template
3. Replace sample data with your actual product information

### 3. Prepare Your CSV File
- Ensure all required columns are present
- Use proper formatting for numbers (no currency symbols)
- Separate multiple SKUs with commas
- Include full URLs for catalogue links
- Save file with `.csv` extension

### 4. Import Process
1. Click "Select CSV File" and choose your file
2. Review the data preview and validation results
3. Fix any validation errors if present
4. Click "Import X Products" to start the import
5. Monitor the progress bar during import
6. Review the import results

## Validation Rules

### Field Validation
- **Name**: Minimum 3 characters, required
- **Description**: Minimum 10 characters, required
- **Price**: Must be a positive number, required
- **GST Rate**: Must be between 0 and 100, required
- **SKUs**: Optional, comma-separated values
- **Catalogue URL**: Optional, must be valid URL format

### Data Processing
- Empty fields are handled gracefully
- Whitespace is trimmed from all fields
- SKUs are split by commas and filtered for empty values
- URLs are validated for proper format

## Error Handling

### Common Errors
1. **Missing Required Fields**: "Row X: name - name is required"
2. **Invalid Price**: "Row X: price - Price must be a positive number"
3. **Invalid GST Rate**: "Row X: gstRate - GST Rate must be between 0 and 100"
4. **Invalid URL**: "Row X: catalogueUrl - Please enter a valid URL"

### Import Results
- **Success Message**: Shows number of successfully imported products
- **Partial Success**: Shows both successful and failed imports
- **Complete Failure**: Shows detailed error messages
- **Error List**: Up to 10 detailed error messages displayed

## Technical Implementation

### Components
- **CSVImportDialog**: Generic reusable component for CSV imports
- **ImportProductsDialog**: Product-specific implementation
- **CSV Utilities**: Helper functions for parsing and validation

### Server Actions
- **importProductsFromCSV**: Processes CSV data and creates products
- **Validation**: Uses Zod schema for data validation
- **Error Handling**: Comprehensive error collection and reporting

### Features
- **Real-time Validation**: Validates data as soon as CSV is loaded
- **Progress Tracking**: Visual feedback during import process
- **Batch Processing**: Handles large CSV files efficiently
- **Transaction Safety**: Each product import is handled individually

## Best Practices

### CSV Preparation
1. **Use UTF-8 Encoding**: Ensure proper character encoding
2. **Validate Data**: Check data quality before import
3. **Test with Small Files**: Start with a few products to test
4. **Backup Data**: Keep original data backed up

### Import Process
1. **Review Preview**: Always check the data preview
2. **Fix Errors**: Address all validation errors before importing
3. **Monitor Progress**: Watch for any error messages during import
4. **Verify Results**: Check imported products in the products list

### Performance Considerations
- **File Size**: Large files may take longer to process
- **Network**: Ensure stable internet connection during import
- **Browser**: Use modern browsers for best performance

## Troubleshooting

### Common Issues

1. **"File format not supported"**
   - Ensure file has `.csv` extension
   - Check file is properly formatted CSV

2. **"Validation errors found"**
   - Review error messages in the dialog
   - Fix data in your CSV file
   - Re-upload the corrected file

3. **"Import failed"**
   - Check internet connection
   - Verify user authentication
   - Try with a smaller file first

4. **"Some products failed to import"**
   - Review the error list
   - Check for duplicate product names
   - Verify data format compliance

### Support
- Check browser console for detailed error messages
- Ensure Firebase authentication is working
- Verify Firestore security rules allow write operations

## Future Enhancements

### Planned Features
1. **Duplicate Detection**: Check for existing products before import
2. **Update Mode**: Option to update existing products
3. **Category Support**: Add product categories to import
4. **Image URLs**: Support for product image imports
5. **Bulk Edit**: Edit multiple imported products at once

### Performance Improvements
1. **Chunked Processing**: Process large files in chunks
2. **Background Jobs**: Move import to background processing
3. **Progress Persistence**: Save progress across page refreshes
4. **Resume Capability**: Resume failed imports

This CSV import feature significantly improves the efficiency of product data management in LeadTracker.ai, allowing users to quickly populate their product catalog from existing data sources.
