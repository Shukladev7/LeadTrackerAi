/**
 * Converts a number to words in English
 * Supports numbers up to 999,999,999,999 (hundreds of billions)
 */

const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function convertLessThanOneThousand(num: number): string {
  if (num === 0) return '';
  
  let result = '';
  
  if (num >= 100) {
    result += ones[Math.floor(num / 100)] + ' Hundred ';
    num %= 100;
  }
  
  if (num >= 10 && num < 20) {
    result += teens[num - 10] + ' ';
  } else {
    if (num >= 20) {
      result += tens[Math.floor(num / 10)] + ' ';
      num %= 10;
    }
    if (num > 0) {
      result += ones[num] + ' ';
    }
  }
  
  return result.trim();
}

/**
 * Converts a number to words using Indian numbering system (lakhs, crores)
 * @param num - The number to convert
 * @returns The number in words using Indian system
 */
export function numberToWordsIndian(num: number): string {
  if (num === 0) return 'Zero';
  
  // Handle negative numbers
  if (num < 0) {
    return 'Minus ' + numberToWordsIndian(Math.abs(num));
  }
  
  // Round to 2 decimal places
  num = Math.round(num * 100) / 100;
  
  // Split into integer and decimal parts
  const parts = num.toString().split('.');
  const integerPart = parseInt(parts[0]);
  const decimalPart = parts[1] ? parseInt(parts[1]) : 0;
  
  let result = '';
  
  // Handle crores (10,000,000)
  if (integerPart >= 10000000) {
    const crores = Math.floor(integerPart / 10000000);
    result += convertLessThanOneThousand(crores) + ' Crore ';
  }
  
  // Handle lakhs (100,000)
  const lakhs = Math.floor((integerPart % 10000000) / 100000);
  if (lakhs > 0) {
    result += convertLessThanOneThousand(lakhs) + ' Lakh ';
  }
  
  // Handle thousands
  const thousands = Math.floor((integerPart % 100000) / 1000);
  if (thousands > 0) {
    result += convertLessThanOneThousand(thousands) + ' Thousand ';
  }
  
  // Handle hundreds
  const hundreds = integerPart % 1000;
  if (hundreds > 0) {
    result += convertLessThanOneThousand(hundreds);
  }
  
  result = result.trim();
  
  // Add decimal part if exists
  if (decimalPart > 0) {
    result += ' and ' + convertLessThanOneThousand(decimalPart) + ' Paise';
  }
  
  return result;
}

/**
 * Converts a number to words (International system - kept for backward compatibility)
 * @param num - The number to convert
 * @returns The number in words
 */
export function numberToWords(num: number): string {
  if (num === 0) return 'Zero';
  
  // Handle negative numbers
  if (num < 0) {
    return 'Minus ' + numberToWords(Math.abs(num));
  }
  
  // Round to 2 decimal places
  num = Math.round(num * 100) / 100;
  
  // Split into integer and decimal parts
  const parts = num.toString().split('.');
  const integerPart = parseInt(parts[0]);
  const decimalPart = parts[1] ? parseInt(parts[1]) : 0;
  
  let result = '';
  
  // Handle billions
  if (integerPart >= 1000000000) {
    result += convertLessThanOneThousand(Math.floor(integerPart / 1000000000)) + ' Billion ';
  }
  
  // Handle millions
  const millions = Math.floor((integerPart % 1000000000) / 1000000);
  if (millions > 0) {
    result += convertLessThanOneThousand(millions) + ' Million ';
  }
  
  // Handle thousands
  const thousands = Math.floor((integerPart % 1000000) / 1000);
  if (thousands > 0) {
    result += convertLessThanOneThousand(thousands) + ' Thousand ';
  }
  
  // Handle hundreds
  const hundreds = integerPart % 1000;
  if (hundreds > 0) {
    result += convertLessThanOneThousand(hundreds);
  }
  
  result = result.trim();
  
  // Add decimal part if exists
  if (decimalPart > 0) {
    result += ' and ' + convertLessThanOneThousand(decimalPart) + ' Paise';
  }
  
  return result;
}

/**
 * Converts a number to words with currency
 * @param amount - The amount to convert
 * @param currencyCode - The currency code (e.g., 'INR', 'USD', 'EUR')
 * @returns The amount in words with currency
 */
export function amountToWords(amount: number, currencyCode: string = 'INR'): string {
  if (amount === 0) return 'Zero';
  
  // Round to 2 decimal places
  amount = Math.round(amount * 100) / 100;
  
  // Split into integer and decimal parts
  const parts = amount.toString().split('.');
  const integerPart = parseInt(parts[0]);
  const decimalPart = parts[1] ? parseInt(parts[1]) : 0;
  
  // Use Indian numbering system for INR, international system for others
  let result = currencyCode === 'INR' ? numberToWordsIndian(integerPart) : numberToWords(integerPart);
  
  // Add currency name
  const currencyNames: Record<string, { major: string; minor: string }> = {
    'INR': { major: 'Rupees', minor: 'Paise' },
    'USD': { major: 'Dollars', minor: 'Cents' },
    'EUR': { major: 'Euros', minor: 'Cents' },
    'GBP': { major: 'Pounds', minor: 'Pence' },
    'AED': { major: 'Dirhams', minor: 'Fils' },
    'SAR': { major: 'Riyals', minor: 'Halalas' },
    'JPY': { major: 'Yen', minor: 'Sen' },
    'CNY': { major: 'Yuan', minor: 'Fen' },
    'AUD': { major: 'Dollars', minor: 'Cents' },
    'CAD': { major: 'Dollars', minor: 'Cents' },
    'SGD': { major: 'Dollars', minor: 'Cents' },
  };
  
  const currency = currencyNames[currencyCode] || { major: currencyCode, minor: 'Cents' };
  
  result += ' ' + currency.major;
  
  // Add decimal part if exists
  if (decimalPart > 0) {
    const decimalWords = currencyCode === 'INR' ? numberToWordsIndian(decimalPart) : numberToWords(decimalPart);
    result += ' and ' + decimalWords + ' ' + currency.minor;
  }
  
  return result + ' Only';
}
