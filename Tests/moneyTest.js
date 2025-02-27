import { formatCurrency } from "../Scripts/utils/money.js";

console.log('Converts cents into dollars');
if (formatCurrency (2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('Checks working with 0');
if (formatCurrency (0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('checks if it rounds up to nearest cent');
if (formatCurrency (2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}