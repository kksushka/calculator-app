import { pow } from '../utils/helpers.js';

const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };

const operate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? NaN : a / b;
    case '^': {
      if (b === 0) return 1;
      if (a === 0 && b < 0) return NaN;
      return pow(a, b);
    }
    default:
      return NaN;
  }
};

export const calculate = (tokens) => {
  const output = [];
  const stack = [];

  tokens.forEach((t) => {
    if (/^\d/.test(t)) {
      output.push(parseFloat(t));
    } else if (t in precedence) {
      while (
        stack.length &&
        precedence[stack[stack.length - 1]] >= precedence[t]
      ) {
        output.push(stack.pop());
      }
      stack.push(t);
    }
  });

  while (stack.length) output.push(stack.pop());

  const calcStack = [];
  for (const token of output) {
    if (typeof token === 'number') {
      calcStack.push(token);
    } else {
      const b = calcStack.pop();
      const a = calcStack.pop();
      if (a === undefined || b === undefined) return NaN;
      const result = operate(a, b, token);
      if (isNaN(result)) return NaN;
      calcStack.push(result);
    }
  }

  return calcStack.length === 1 ? calcStack[0] : NaN;
};
