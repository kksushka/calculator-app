import "../styles/main.scss";
import { formatNumber } from './utils.js';
import { evaluateExpression } from './calculator.js';
import { updateDisplay } from './display.js';
import { initTheme } from './theme.js';

const display = document.getElementById("display");
const displayWrapper = document.getElementById("display-wrapper");
const buttons = document.querySelectorAll(".btn, .btn__func, .btn__operator");

let currentExpression = "";
let isResultShown = false;
const MAX_EXPRESSION_LENGTH = 30;

const operatorSymbols = {
  plus: "+",
  minus: "−",
  multiply: "×",
  divide: "÷",
};

const buttonActions = {
  clear: () => {
    currentExpression = "";
    updateDisplay(display, displayWrapper, "0");
  },
  sign: () => {
    const numberMatch = currentExpression.match(/(-?\d+(?:\.\d+)?)$/);
    if (numberMatch) {
      const numberString = numberMatch[0];
      const expressionBeforeNumber = currentExpression.slice(0, -numberString.length);
      const invertedNumber = numberString.startsWith("-")
        ? numberString.slice(1)
        : "-" + numberString;
      currentExpression = expressionBeforeNumber + invertedNumber;
      updateDisplay(display, displayWrapper, currentExpression);
    }
  },
  percent: () => {
    if (currentExpression.length >= MAX_EXPRESSION_LENGTH) return;
    currentExpression += "%";
    updateDisplay(display, displayWrapper, currentExpression);
  },
  equals: () => {
    if (currentExpression) {
      const calculationResult = evaluateExpression(currentExpression);
      const formattedResult = formatNumber(calculationResult);
      updateDisplay(display, displayWrapper, formattedResult);
      currentExpression = formattedResult;
      isResultShown = true;
    }
  }
};

const handleButtonClick = (button) => {
  const { action } = button.dataset;
  const buttonValue = button.textContent;

  if (!action) {
    if (isResultShown) {
      currentExpression = "";
      isResultShown = false;
    }
    if (buttonValue === "." && /\.\d*$/.test(currentExpression)) return;
    if (currentExpression.length >= MAX_EXPRESSION_LENGTH) return;

    currentExpression += buttonValue;

    updateDisplay(display, displayWrapper, currentExpression);
    return;
  }

  if (buttonActions[action]) {
    buttonActions[action]();
  } else if (operatorSymbols[action]) {
    if (isResultShown) isResultShown = false;

    if (!currentExpression && action === "minus") {
      currentExpression = "−";
      updateDisplay(display, displayWrapper, currentExpression);
    } else if (currentExpression && !/[+\-*/÷×−]$/.test(currentExpression)) {
      currentExpression += operatorSymbols[action];
      updateDisplay(display, displayWrapper, currentExpression);
    }
  }
};

export const initCalculator = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button));
  });

  initTheme();
};

document.addEventListener('DOMContentLoaded', initCalculator);
