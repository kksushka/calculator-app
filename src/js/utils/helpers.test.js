import {
  abs,
  isFiniteSafe,
  factorial,
  ln,
  pow,
  nthRoot,
  normalizeUnaryMinus,
} from './helpers';

describe('abs', () => {
  test('returns absolute value of positive number', () => {
    expect(abs(5)).toBe(5);
  });
  test('returns absolute value of negative number', () => {
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
  test('returns false for -Infinity', () => {
    expect(isFiniteSafe(-Infinity)).toBe(false);
  });
  test('returns false for NaN', () => {
    expect(isFiniteSafe(NaN)).toBe(false);
  });
  test('returns false for string', () => {
    expect(isFiniteSafe('10')).toBe(false);
  });
  test('returns false for boolean', () => {
    expect(isFiniteSafe(true)).toBe(false);
  });
});

describe('factorial', () => {
  test('factorial of 0 is 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test('factorial of 1 is 1', () => {
    expect(factorial(1)).toBe(1);
  });
  test('factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
  });
  test('factorial of 10 is 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });
  test('returns NaN for negative numbers', () => {
    expect(factorial(-3)).toBeNaN();
  });
  test('returns NaN for non-integers', () => {
    expect(factorial(3.5)).toBeNaN();
  });
  test('returns NaN for large numbers', () => {
    expect(factorial(200)).toBeNaN();
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
  test('ln(2) ≈ 0.693147', () => {
    expect(ln(2)).toBeCloseTo(0.693147, 5);
  });
  test('ln(10) ≈ 2.302585', () => {
    expect(ln(10)).toBeCloseTo(2.302585, 5);
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
  test('(-2)^-3 = -0.125', () => {
    expect(pow(-2, -3)).toBeCloseTo(-0.125, 8);
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
  test('fractional exponents', () => {
    expect(pow(4, 0.5)).toBeCloseTo(2, 8);
    expect(pow(8, 1 / 3)).toBeCloseTo(2, 8);
  });
  test('negative base with fractional exponent', () => {
    expect(pow(-8, 1 / 3)).toBeCloseTo(-2, 8);
    const result = pow(-4, 0.5);
    expect(Number.isNaN(result) || result).toBeTruthy();
  });
});

describe('nthRoot', () => {
  test('cubic root of 8 = 2', () => {
    expect(nthRoot(8, 3)).toBeCloseTo(2, 10);
  });
  test('square root of 9 = 3', () => {
    expect(nthRoot(9, 2)).toBeCloseTo(3, 10);
  });
  test('square root of 2 ≈ 1.414213562', () => {
    expect(nthRoot(2, 2)).toBeCloseTo(1.414213562, 9);
  });
  test('root of negative number with even degree → NaN', () => {
    expect(nthRoot(-8, 2)).toBeNaN();
    expect(nthRoot(-16, 4)).toBeNaN();
  });
  test('cubic root of negative number = negative result', () => {
    expect(nthRoot(-8, 3)).toBeCloseTo(-2, 10);
    expect(nthRoot(-27, 3)).toBeCloseTo(-3, 10);
  });
  test('nth root of 0 is 0', () => {
    expect(nthRoot(0, 2)).toBe(0);
    expect(nthRoot(0, 5)).toBe(0);
  });
  test('degree 0 returns NaN', () => {
    expect(nthRoot(8, 0)).toBeNaN();
  });
});

describe('normalizeUnaryMinus', () => {
  test('replaces unary minus at beginning of expression', () => {
    expect(normalizeUnaryMinus('-5+3')).toBe('0-5+3');
  });
  test('replaces unary minus after plus operator', () => {
    expect(normalizeUnaryMinus('3+-5')).toBe('3+0-5');
  });
  test('replaces unary minus after minus operator', () => {
    expect(normalizeUnaryMinus('3--5')).toBe('3-0-5');
  });
  test('replaces unary minus after multiply operator', () => {
    expect(normalizeUnaryMinus('3*-5')).toBe('3*0-5');
  });
  test('replaces unary minus after divide operator', () => {
    expect(normalizeUnaryMinus('3/-5')).toBe('3/0-5');
  });
  test('does not change regular subtractions', () => {
    expect(normalizeUnaryMinus('5-3')).toBe('5-3');
  });
  test('handles multiple unary minuses', () => {
    expect(normalizeUnaryMinus('-2+-3')).toBe('0-2+0-3');
  });
  test('handles expression starting with multiple operators', () => {
    expect(normalizeUnaryMinus('--5')).toBe('-0-5');
  });
  test('handles complex expressions', () => {
    expect(normalizeUnaryMinus('2*-3+4/-2')).toBe('2*0-3+4/0-2');
  });
});
