export function generateSampleCSV(headers: string[], sampleData: Record<string, string>): string {
  const headerRow = headers.join(',');
  const dataRow = headers.map(header => {
    const value = sampleData[header] || '';
    // Escape commas and quotes in CSV values
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }).join(',');
  
  return `${headerRow}\n${dataRow}`;
}

export function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;

  while (i < line.length) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        current += '"';
        i += 2;
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
        i++;
      }
    } else if (char === ',' && !inQuotes) {
      // End of field
      result.push(current.trim());
      current = '';
      i++;
    } else {
      current += char;
      i++;
    }
  }
  
  // Add the last field
  result.push(current.trim());
  
  return result;
}

export function parseCSV(text: string): Record<string, string>[] {
  const lines = text.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row: Record<string, string> = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    rows.push(row);
  }

  return rows;
}

export function downloadCSV(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export function validateCSVStructure(
  data: Record<string, string>[], 
  requiredColumns: string[]
): { isValid: boolean; missingColumns: string[]; errors: string[] } {
  const errors: string[] = [];
  const missingColumns: string[] = [];
  
  if (data.length === 0) {
    errors.push('CSV file is empty or has no data rows');
    return { isValid: false, missingColumns, errors };
  }
  
  // Check for required columns
  const firstRow = data[0];
  const availableColumns = Object.keys(firstRow);
  
  requiredColumns.forEach(column => {
    if (!availableColumns.includes(column)) {
      missingColumns.push(column);
    }
  });
  
  if (missingColumns.length > 0) {
    errors.push(`Missing required columns: ${missingColumns.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    missingColumns,
    errors
  };
}
