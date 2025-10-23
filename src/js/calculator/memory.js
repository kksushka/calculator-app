import { evaluateExpression } from './evaluator.js';
import { isFiniteSafe } from '../utils/helpers.js';

let memory = 0;

export const memoryActions = {
  mc: () => {
    memory = 0;
    return memory;
  },

  mPlus: (expr) => {
    const val = evaluateExpression(expr);
    if (isFiniteSafe(val)) {
      memory += val;
    }
    return memory;
  },

  mMinus: (expr) => {
    const val = evaluateExpression(expr);
    if (isFiniteSafe(val)) {
      memory -= val;
    }
    return memory;
  },

  mr: () => memory,

  getMemory: () => memory,
};
