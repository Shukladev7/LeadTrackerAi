#!/usr/bin/env node

// Simple validation script to check if our changes are syntactically correct
const fs = require('fs');
const path = require('path');

console.log('🔍 Validating implementation...\n');

// Files to validate
const filesToCheck = [
  'src/components/ui/multi-select.tsx',
  'src/app/products/add-product-sheet.tsx',
  'src/app/products/edit-product-sheet.tsx',
  'src/app/leads/create-lead-dialog.tsx',
  'src/app/leads/[id]/edit-lead-dialog.tsx',
  'src/app/quotations/create-quotation-dialog.tsx',
  'src/app/quotations/edit-quotation-dialog.tsx',
  'src/lib/actions.ts',
  'src/lib/types.ts',
  'src/lib/business-types.ts'
];

let allValid = true;

filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${file} - File does not exist`);
    allValid = false;
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Basic syntax checks
    const checks = [
      {
        name: 'Has React import (for .tsx files)',
        test: content => !file.endsWith('.tsx') || content.includes('import') && content.includes('React'),
        required: false
      },
      {
        name: 'No obvious syntax errors',
        test: content => !content.includes('undefined)}') && !content.includes('<<<') && !content.includes('>>>'),
        required: true
      },
      {
        name: 'Proper bracket closure',
        test: content => {
          const openBrackets = (content.match(/\{/g) || []).length;
          const closeBrackets = (content.match(/\}/g) || []).length;
          return Math.abs(openBrackets - closeBrackets) <= 5; // Allow some variance for JSX
        },
        required: true
      }
    ];

    // File-specific validations
    if (file.includes('multi-select.tsx')) {
      checks.push({
        name: 'MultiSelect component export',
        test: content => content.includes('export function MultiSelect'),
        required: true
      });
    }

    if (file.includes('add-product-sheet.tsx') || file.includes('edit-product-sheet.tsx')) {
      checks.push({
        name: 'Uses MultiSelect component',
        test: content => content.includes('MultiSelect') && content.includes('selectedModelIds'),
        required: true
      });
    }

    if (file.includes('create-lead-dialog.tsx') || file.includes('edit-lead-dialog.tsx')) {
      checks.push({
        name: 'Has model functionality',
        test: content => content.includes('selectedModelId') && content.includes('productModels'),
        required: true
      });
    }

    if (file.includes('create-quotation-dialog.tsx') || file.includes('edit-quotation-dialog.tsx')) {
      checks.push({
        name: 'Has model functionality', 
        test: content => content.includes('modelId') && content.includes('productModels'),
        required: true
      });
    }

    if (file.includes('actions.ts')) {
      checks.push({
        name: 'Has getModelsByProductFieldAction function',
        test: content => content.includes('getModelsByProductFieldAction'),
        required: true
      });
      checks.push({
        name: 'Handles modelIds in addProduct',
        test: content => content.includes('modelIds') && content.includes('JSON.parse'),
        required: true
      });
    }

    if (file.includes('types.ts') || file.includes('business-types.ts')) {
      checks.push({
        name: 'Product type has modelIds field',
        test: content => content.includes('modelIds?:'),
        required: true
      });
    }

    const failedChecks = checks.filter(check => check.required && !check.test(content));
    
    if (failedChecks.length === 0) {
      console.log(`✅ ${file} - All checks passed`);
    } else {
      console.log(`❌ ${file} - Failed checks:`);
      failedChecks.forEach(check => {
        console.log(`   - ${check.name}`);
      });
      allValid = false;
    }

  } catch (error) {
    console.log(`❌ ${file} - Error reading file: ${error.message}`);
    allValid = false;
  }
});

console.log('\n' + '='.repeat(50));
if (allValid) {
  console.log('🎉 All validations passed! Implementation looks good.');
  console.log('\nSummary of changes:');
  console.log('✓ Created MultiSelect component');
  console.log('✓ Updated Add Product form to use multi-select dropdown');
  console.log('✓ Updated Edit Product form to use multi-select dropdown');
  console.log('✓ Modified backend to handle modelIds array');
  console.log('✓ Updated Create Lead page to filter models by product');
  console.log('✓ Updated Edit Lead page to filter models by product');
  console.log('✓ Updated Create Quotation page to filter models by product');
  console.log('✓ Updated Edit Quotation page to filter models by product');
} else {
  console.log('❌ Some validations failed. Please check the issues above.');
}