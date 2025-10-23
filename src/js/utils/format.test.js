import { trimZeros, toFixedSafe, formatNumber } from './format';

describe('trimZeros', () => {
  test('removes trailing zeros from decimal part', () => {
    expect(trimZeros('1.500')).toBe('1.5');
    expect(trimZeros('2.000')).toBe('2');
    expect(trimZeros('3.14000')).toBe('3.14');
  });

  test('handles numbers without decimal part', () => {
    expect(trimZeros('123')).toBe('123');
    expect(trimZeros('0')).toBe('0');
  });

  test('handles decimal point without fractional digits', () => {
    expect(trimZeros('5.')).toBe('5');
  });

  test('preserves significant zeros', () => {
    expect(trimZeros('1.05')).toBe('1.05');
    expect(trimZeros('0.00100')).toBe('0.001');
  });
});

describe('toFixedSafe', () => {
  test('formats positive numbers with specified digits', () => {
    expect(toFixedSafe(123.456, 2)).toBe('123.45');
    expect(toFixedSafe(123.456, 0)).toBe('123');
    expect(toFixedSafe(123.456, 5)).toBe('123.45600');
  });

  test('formats negative numbers with specified digits', () => {
    expect(toFixedSafe(-123.456, 2)).toBe('-123.45');
    expect(toFixedSafe(-123.456, 0)).toBe('-123');
  });

  test('handles zero digits', () => {
    expect(toFixedSafe(123.456, 0)).toBe('123');
    expect(toFixedSafe(123.999, 0)).toBe('123');
  });

  test('returns Error for non-finite numbers', () => {
    expect(toFixedSafe(Infinity, 2)).toBe('Error');
    expect(toFixedSafe(-Infinity, 2)).toBe('Error');
    expect(toFixedSafe(NaN, 2)).toBe('Error');
  });

  test('pads with zeros when needed', () => {
    expect(toFixedSafe(123.4, 3)).toBe('123.400');
    expect(toFixedSafe(123, 2)).toBe('123.00');
  });

  test('handles exact decimal numbers', () => {
    expect(toFixedSafe(123.45, 2)).toBe('123.45');
    expect(toFixedSafe(123.45, 3)).toBe('123.450');
  });
});

describe('formatNumber', () => {
  test('formats regular numbers', () => {
    expect(formatNumber(123.456)).toBe('123.456');
    expect(formatNumber(-123.456)).toBe('-123.456');
    expect(formatNumber(0)).toBe('0');
  });

  test('formats very large numbers in exponential notation', () => {
    expect(formatNumber(1e16)).toBe('1e16');
    expect(formatNumber(1234567890123456)).toBe('1.234567e15');
    expect(formatNumber(-1e20)).toBe('-1e20');
  });

  test('formats very small numbers in exponential notation', () => {
    expect(formatNumber(0.0000001)).toBe('1e-7');
    expect(formatNumber(0.000000123456)).toBe('1.234559e-7');
    expect(formatNumber(-0.0000009)).toBe('-9e-7');
  });

  test('handles edge cases', () => {
    expect(formatNumber(Infinity)).toBe('Error');
    expect(formatNumber(-Infinity)).toBe('Error');
    expect(formatNumber(NaN)).toBe('Error');
    expect(formatNumber('not a number')).toBe('Error');
  });

  test('trims unnecessary zeros', () => {
    expect(formatNumber(123.45)).toBe('123.45');
    expect(formatNumber(0.00001)).toBe('0.00001');
    expect(formatNumber(100.0)).toBe('100');
  });

  test('formats numbers in normal range without exponential notation', () => {
    expect(formatNumber(999999999999999)).toBe('999999999999999');
    expect(formatNumber(0.00001)).toBe('0.00001');
    expect(formatNumber(1234.5678)).toBe('1234.5678');
  });

  test('formats numbers at exponential notation boundaries', () => {
    expect(formatNumber(1e15 - 1)).toBe('999999999999999');
    expect(formatNumber(1e15)).toBe('1e15');

    expect(formatNumber(0.000001)).toBe('0.000001');
    expect(formatNumber(0.000000999999)).toBe('9.999989e-7');
  });

  test('handles negative numbers correctly', () => {
    expect(formatNumber(-123.456)).toBe('-123.456');
    expect(formatNumber(-0.000000123)).toBe('-1.23e-7');
    expect(formatNumber(-999999999999999)).toBe('-999999999999999');
  });

  test('formats numbers with exact decimal representation', () => {
    expect(formatNumber(0.5)).toBe('0.5');
    expect(formatNumber(0.25)).toBe('0.25');
    expect(formatNumber(0.125)).toBe('0.125');
  });

  test('formats numbers that trigger exponential notation correctly', () => {
    expect(formatNumber(0.0000005)).toBe('5e-7');
    expect(formatNumber(0.00000005)).toBe('5e-8');
    expect(formatNumber(5000000000000000)).toBe('5e15');
  });
});
