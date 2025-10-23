import { evaluateExpression } from './evaluator';

describe('evaluateExpression', () => {
  test('calculates a simple addition', () => {
    expect(evaluateExpression('2+3')).toBe(5);
  });

  test('calculates the subtraction', () => {
    expect(evaluateExpression('5-3')).toBe(2);
  });

  test('calculates the multiplication', () => {
    expect(evaluateExpression('2*3')).toBe(6);
  });

  test('calculates the division', () => {
    expect(evaluateExpression('6/2')).toBe(3);
  });

  test('replaces ÷ with /', () => {
    expect(evaluateExpression('6÷2')).toBe(3);
  });

  test('replaces × with *', () => {
    expect(evaluateExpression('2×3')).toBe(6);
  });

  test('replaces − with -', () => {
    expect(evaluateExpression('5−2')).toBe(3);
  });

  test('handles exponentiation ^', () => {
    expect(evaluateExpression('2^3')).toBeCloseTo(8, 8);
  });

  test('handles percent', () => {
    expect(evaluateExpression('50%')).toBe(0.5);
  });

  test('processes percentages in expressions', () => {
    expect(evaluateExpression('50% + 50%')).toBe(1);
  });

  test('processes 100%', () => {
    expect(evaluateExpression('100%')).toBe(1);
  });

  test('processes 200%', () => {
    expect(evaluateExpression('200%')).toBe(2);
  });

  test('processes the unary minus sign at the beginning', () => {
    expect(evaluateExpression('-5')).toBe(-5);
  });

  test('processes the unary minus sign at the beginning of the expression', () => {
    expect(evaluateExpression('-5+3')).toBe(-2);
  });

  test('follow the priority of multiplication over addition', () => {
    expect(evaluateExpression('2+3*4')).toBe(14);
  });

  test('follow priority in complex expressions.', () => {
    expect(evaluateExpression('2*3+4*5')).toBe(26);
  });

  test('processes decimal numbers', () => {
    expect(evaluateExpression('2.5 + 3.5')).toBe(6);
  });

  test('processes floating-point expressions', () => {
    expect(evaluateExpression('0.1 + 0.2')).toBeCloseTo(0.3, 10);
  });

  test('returns NaN when divided by zero', () => {
    expect(evaluateExpression('5/0')).toBeNaN();
  });

  test('returns NaN for an empty string', () => {
    expect(evaluateExpression('')).toBeNaN();
  });

  test('returns NaN with an invalid expression.', () => {
    expect(evaluateExpression('abc')).toBeNaN();
  });

  test('returns NaN in case of syntax error', () => {
    expect(evaluateExpression('2++3')).toBeNaN();
  });

  test('computes a complex expression with all operations', () => {
    expect(evaluateExpression('2+3*4-10/2')).toBe(9);
  });

  test('processes an expression with percentages and operations', () => {
    expect(evaluateExpression('50% * 100')).toBe(50);
  });

  test('handles negative percentages', () => {
    expect(evaluateExpression('-50%')).toBeNaN();
  });

  test('handles expressions with spaces', () => {
    expect(evaluateExpression('2 + 3 * 4')).toBe(14);
  });

  test('handles unary minus in complex expressions', () => {
    expect(evaluateExpression('3*-2')).toBe(-2);
  });

  test('handles multiple operations with unary minus', () => {
    expect(evaluateExpression('-2*-3')).toBe(-3);
  });

  test('handles expressions with exponentiation and other operations', () => {
    expect(evaluateExpression('2^3+1')).toBeCloseTo(9, 8);
  });

  test('handles decimal percentages', () => {
    expect(evaluateExpression('25.5%')).toBe(0.255);
  });

  test('handles percentage at the end of complex expressions', () => {
    expect(evaluateExpression('100+50%')).toBe(100.5);
  });

  test('handles simple percentage calculations', () => {
    expect(evaluateExpression('10%')).toBe(0.1);
    expect(evaluateExpression('150%')).toBe(1.5);
  });

  test('handles basic arithmetic with percentages', () => {
    expect(evaluateExpression('20% * 50')).toBe(10);
    expect(evaluateExpression('25% + 25%')).toBe(0.5);
  });
});
