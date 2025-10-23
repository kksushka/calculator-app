import {
  abs,
  isFiniteSafe,
  factorial,
  ln,
  pow,
  nthRoot,
  normalizeUnaryMinus,
} from '../utils/helpers.js';

import { calculate } from './core.js';

describe('abs', () => {
  test('returns a positive number', () => {
    expect(abs(5)).toBe(5);
  });
  test('returns a positive value for a negative number', () => {
    expect(abs(-7)).toBe(7);
  });
  test('returns 0 for 0', () => {
    expect(abs(0)).toBe(0);
  });
});

describe('isFiniteSafe', () => {
  test('recognizes finite numbers', () => {
    expect(isFiniteSafe(123)).toBe(true);
  });
  test('returns false for Infinity', () => {
    expect(isFiniteSafe(Infinity)).toBe(false);
  });
  test('returns false for NaN', () => {
    expect(isFiniteSafe(NaN)).toBe(false);
  });
  test('returns false for string', () => {
    expect(isFiniteSafe('10')).toBe(false);
  });
});

describe('factorial', () => {
  test('factorial 0 is 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test('factorial 5 is 120', () => {
    expect(factorial(5)).toBe(120);
  });
  test('returns NaN for negative numbers', () => {
    expect(factorial(-3)).toBeNaN();
  });
  test('returns NaN for non-integers', () => {
    expect(factorial(3.5)).toBeNaN();
  });
});

describe('ln', () => {
  test('ln(1) ≈ 0', () => {
    expect(ln(1)).toBeCloseTo(0, 5);
  });
  test('ln(e) ≈ 1', () => {
    const e = 2.718281828;
    expect(ln(e)).toBeCloseTo(1, 3);
  });
  test('ln(0) → NaN', () => {
    expect(ln(0)).toBeNaN();
  });
  test('ln(-1) → NaN', () => {
    expect(ln(-1)).toBeNaN();
  });
});

describe('pow', () => {
  test('2^3 = 8', () => {
    expect(pow(2, 3)).toBeCloseTo(8, 8);
  });
  test('(-2)^3 = -8', () => {
    expect(pow(-2, 3)).toBeCloseTo(-8, 8);
  });
  test('2^-2 = 0.25', () => {
    expect(pow(2, -2)).toBeCloseTo(0.25, 8);
  });
  test('0^3 = 0', () => {
    expect(pow(0, 3)).toBe(0);
  });
  test('0^-2 = NaN', () => {
    expect(pow(0, -2)).toBeNaN();
  });
  test('2^0 = 1', () => {
    expect(pow(2, 0)).toBe(1);
  });
});

describe('nthRoot', () => {
  test('the cubic root of 8 = 2', () => {
    expect(nthRoot(8, 3)).toBeCloseTo(2, 10);
  });
  test('the cubic root of 9 = 3', () => {
    expect(nthRoot(9, 2)).toBeCloseTo(3, 10);
  });
  test(' the root of a negative number with an even degree → NaN', () => {
    expect(nthRoot(-8, 2)).toBeNaN();
  });
  test('cubic root of a negative number = negative result', () => {
    expect(nthRoot(-8, 3)).toBeCloseTo(-2, 10);
  });
});

describe('normalizeUnaryMinus', () => {
  test('replaces the unary minus sign at the beginning of the expression', () => {
    expect(normalizeUnaryMinus('-5+3')).toBe('0-5+3');
  });
  test('replaces the unary minus sign after the operator', () => {
    expect(normalizeUnaryMinus('3*-5')).toBe('3*0-5');
  });
  test('does not change the usual subtractions', () => {
    expect(normalizeUnaryMinus('5-3')).toBe('5-3');
  });
});

describe('calculate', () => {
  test('simple sum', () => {
    expect(calculate(['2', '+', '3'])).toBe(5);
  });
  test('multiplication and sum with priority', () => {
    expect(calculate(['2', '+', '3', '*', '4'])).toBe(14);
  });
  test('dividing by 0 returns NaN', () => {
    expect(calculate(['5', '/', '0'])).toBeNaN();
  });
  test('exponentiation 2 ^ 3', () => {
    expect(calculate(['2', '^', '3'])).toBeCloseTo(8, 8);
  });
  test('subtraction with a negative result', () => {
    expect(calculate(['2', '-', '5'])).toBe(-3);
  });
  test('division with a fractional result', () => {
    expect(calculate(['5', '/', '2'])).toBe(2.5);
  });
});
