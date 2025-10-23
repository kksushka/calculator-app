import { calculate } from './core.js';
import { normalizeUnaryMinus } from '../utils/helpers.js';

export const evaluateExpression = (expr) => {
  try {
    let normalized = expr
      .replace(/÷/g, '/')
      .replace(/×/g, '*')
      .replace(/−/g, '-')
      .replace(/\^/g, '^')
      .replace(/([-−]?\d+(\.\d+)?)%/g, '($1/100)');

    normalized = normalizeUnaryMinus(normalized);

    const tokens = normalized.match(/(\d+(\.\d+)?|[+\-*/^])/g) || [];
    const result = calculate(tokens);
    return result;
  } catch (error) {
    return Number.NaN;
  }
};

