import { normalizeUnaryMinus } from "./utils.js";

const calculate = (expressionString) => {
  const outputQueue = [];
  const operatorStack = [];
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const tokens = expressionString.match(/(\d+(\.\d+)?|[+\-*/()])/g) || [];

  tokens.forEach((token) => {
    if (/^\d/.test(token)) {
      outputQueue.push(parseFloat(token));
    } else if ("+-*/".includes(token)) {
      while (
        operatorStack.length &&
        "+-*/".includes(operatorStack[operatorStack.length - 1]) &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop();
    }
  });

  while (operatorStack.length) outputQueue.push(operatorStack.pop());

  const calculationStack = [];
  outputQueue.forEach((token) => {
    if (typeof token === "number") {
      calculationStack.push(token);
    } else {
      const secondOperand = calculationStack.pop();
      const firstOperand = calculationStack.pop();
      let result = 0;

      if (token === "+") result = firstOperand + secondOperand;
      if (token === "-") result = firstOperand - secondOperand;
      if (token === "*") result = firstOperand * secondOperand;
      if (token === "/")
        result = secondOperand === 0 ? NaN : firstOperand / secondOperand;

      calculationStack.push(result);
    }
  });

  return calculationStack[0];
};

export const evaluateExpression = (expression) => {
  const expressionWithPercent = expression.replace(
    /([\-−]?\d+(\.\d+)?)%/g,
    (match, numberString) => `(${numberString}/100)`
  );

  let normalizedExpression = expressionWithPercent
    .replace(/÷/g, "/")
    .replace(/×/g, "*")
    .replace(/−/g, "-");

  normalizedExpression = normalizeUnaryMinus(normalizedExpression);

  try {
    return calculate(normalizedExpression);
  } catch {
    return NaN;
  }
};
