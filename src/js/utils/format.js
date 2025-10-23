import { abs, isFiniteSafe } from './helpers.js';

export const trimZeros = (s) =>
  s
    .replace(/(\.\d*?[1-9])0+$/u, '$1')
    .replace(/\.0+$/u, '')
    .replace(/\.$/u, '');

export const toFixedSafe = (n, digits) => {
  if (!isFiniteSafe(n)) return 'Error';

  const neg = n < 0;
  const absoluteValue = abs(n);

  const str = absoluteValue.toString();
  const [intPart, fracPart = ''] = str.split('.');

  if (digits === 0) return `${neg ? '-' : ''}${intPart}`;

  let frac = fracPart.slice(0, digits);
  if (frac.length < digits) frac = frac.padEnd(digits, '0');

  return `${neg ? '-' : ''}${intPart}${digits ? `.${frac}` : ''}`;
};

export const formatNumber = (n) => {
  if (typeof n !== 'number' || Number.isNaN(n)) return 'Error';
  if (!isFiniteSafe(n)) return 'Error';
  if (n === 0) return '0';

  const absN = abs(n);

  if (absN >= 1e15 || (absN < 1e-6 && absN > 0)) {
    let exp = 0;
    let val = absN;

    if (val >= 1) {
      while (val >= 10) {
        val /= 10;
        exp++;
      }
    } else {
      while (val < 1) {
        val *= 10;
        exp--;
      }
    }

    const sign = n < 0 ? '-' : '';
    const coefficient = trimZeros(toFixedSafe(val, 6));

    return `${sign}${coefficient}e${exp}`;
  }

  return trimZeros(toFixedSafe(n, 8));
};
