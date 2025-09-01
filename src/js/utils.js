export const isFiniteSafe = (number) => (
  number !== Infinity && number !== -Infinity
);
export const abs = (number) => (number < 0 ? -number : number);

export const trimTrailingZeros = (numberString) => numberString
  .replace(/(\.\d*?[1-9])0+$/u, '$1')
  .replace(/\.0+$/u, '')
  .replace(/\.$/u, '');

export const toFixedSafe = (number, digits) => {
  const isNegative = number < 0;
  const absoluteNumber = isNegative ? -number : number;
  const numberString = String(absoluteNumber);
  const [integerPart, fractionalPart = ''] = numberString.split('.');

  if (digits <= 0) return (isNegative ? '-' : '') + integerPart;

  const fractionalDigits = (`${fractionalPart}000000000000`).slice(0, digits);
  return (
    (isNegative ? '-' : '')
    + integerPart
    + (digits > 0 ? `.${fractionalDigits}` : '')
  );
};

export const formatNumber = (number) => {
  if (!isFiniteSafe(number)) return 'Error';

  if (abs(number) > 10000000000) {
    let tempNumber = number;
    let exponent = 0;
    const isNegative = tempNumber < 0;
    if (isNegative) tempNumber = -tempNumber;

    if (tempNumber >= 10) {
      while (tempNumber >= 10) {
        tempNumber /= 10;
        exponent += 1;
      }
    } else if (tempNumber < 1) {
      while (tempNumber < 1) {
        tempNumber *= 10;
        exponent -= 1;
      }
    }

    let formattedMantissa = toFixedSafe(tempNumber, 7);
    formattedMantissa = trimTrailingZeros(formattedMantissa);
    return (
      `${(isNegative ? '-' : '')
      + formattedMantissa
      }e${
        exponent >= 0 ? '+' : ''
      }${exponent}`
    );
  }

  const formattedNumber = toFixedSafe(number, 7);
  return trimTrailingZeros(formattedNumber);
};

export const normalizeUnaryMinus = (expressionString) => expressionString.replace(/(^|[+\-*/(])-(?=\d)/g, '$10-');
