import { applyFunction } from './functions';

describe('applyFunction', () => {
  describe('square', () => {
    test('squares positive number', () => {
      expect(applyFunction('square', 5)).toBe(25);
    });
    test('squares negative number', () => {
      expect(applyFunction('square', -4)).toBe(16);
    });
    test('squares zero', () => {
      expect(applyFunction('square', 0)).toBe(0);
    });
    test('squares decimal number', () => {
      expect(applyFunction('square', 2.5)).toBeCloseTo(6.25, 8);
    });
  });

  describe('cube', () => {
    test('cubes positive number', () => {
      expect(applyFunction('cube', 3)).toBe(27);
    });
    test('cubes negative number', () => {
      expect(applyFunction('cube', -2)).toBe(-8);
    });
    test('cubes zero', () => {
      expect(applyFunction('cube', 0)).toBe(0);
    });
  });

  describe('reciprocal', () => {
    test('calculates reciprocal of positive number', () => {
      expect(applyFunction('reciprocal', 4)).toBe(0.25);
    });
    test('calculates reciprocal of negative number', () => {
      expect(applyFunction('reciprocal', -5)).toBe(-0.2);
    });
    test('returns NaN for zero', () => {
      expect(applyFunction('reciprocal', 0)).toBeNaN();
    });
    test('calculates reciprocal of decimal number', () => {
      expect(applyFunction('reciprocal', 0.5)).toBe(2);
    });
  });

  describe('sqrt', () => {
    test('calculates square root of positive number', () => {
      expect(applyFunction('sqrt', 9)).toBeCloseTo(3, 8);
    });
    test('calculates square root of zero', () => {
      expect(applyFunction('sqrt', 0)).toBe(0);
    });
    test('calculates square root of decimal number', () => {
      expect(applyFunction('sqrt', 2.25)).toBeCloseTo(1.5, 8);
    });
    test('returns NaN for negative number', () => {
      expect(applyFunction('sqrt', -4)).toBeNaN();
    });
  });

  describe('cbrt', () => {
    test('calculates cube root of positive number', () => {
      expect(applyFunction('cbrt', 8)).toBeCloseTo(2, 8);
    });
    test('calculates cube root of negative number', () => {
      expect(applyFunction('cbrt', -27)).toBeCloseTo(-3, 8);
    });
    test('calculates cube root of zero', () => {
      expect(applyFunction('cbrt', 0)).toBe(0);
    });
  });

  describe('tenPower', () => {
    test('calculates 10 to the power of positive number', () => {
      expect(applyFunction('tenPower', 2)).toBe(100);
    });
    test('calculates 10 to the power of negative number', () => {
      expect(applyFunction('tenPower', -1)).toBe(0.1);
    });
    test('calculates 10 to the power of zero', () => {
      expect(applyFunction('tenPower', 0)).toBe(1);
    });
    test('calculates 10 to the power of decimal number', () => {
      expect(applyFunction('tenPower', 0.5)).toBeCloseTo(3.16227766, 8);
    });
  });

  describe('factorial', () => {
    test('calculates factorial of zero', () => {
      expect(applyFunction('factorial', 0)).toBe(1);
    });
    test('calculates factorial of positive integer', () => {
      expect(applyFunction('factorial', 5)).toBe(120);
    });
    test('returns NaN for negative number', () => {
      expect(applyFunction('factorial', -3)).toBeNaN();
    });
    test('returns NaN for decimal number', () => {
      expect(applyFunction('factorial', 3.5)).toBeNaN();
    });
    test('returns NaN for large number', () => {
      expect(applyFunction('factorial', 200)).toBeNaN();
    });
  });

  describe('invalid inputs', () => {
    test('returns NaN for non-number value', () => {
      expect(applyFunction('square', '5')).toBeNaN();
    });
    test('returns NaN for NaN input', () => {
      expect(applyFunction('square', NaN)).toBeNaN();
    });
    test('returns original value for unknown function', () => {
      expect(applyFunction('unknown', 5)).toBe(5);
    });
  });
});
