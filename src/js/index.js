import "../styles/main.scss";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .btn__func, .btn__operator");

let expression = "";
let resultShown = false;

const MAX_LENGTH = 30; // максимальная длина выражения

// ограничение до 7 знаков после запятой
const formatNumber = (num) => {
  if (!isFinite(num)) return "Error";
  if (Math.abs(num) > 1e10) return num.toExponential(7);

  let str = Number(num).toFixed(7);
  str = str.replace(/\.?0+$/, "");
  return str;
};

// обновление дисплея
const updateDisplay = (value) => {
  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth; // автоскролл вправо
};

// вычисление выражения
const evaluateExpression = (expr) => {
  // Заменяем проценты на их числовые эквиваленты (деление на 100)
  const exprWithPercent = expr.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
    return `(${num}/100)`;
  });

  const mathExpr = exprWithPercent
    .replace(/÷/g, "/")
    .replace(/×/g, "*")
    .replace(/−/g, "-");

  try {
    const result = Function(`"use strict"; return (${mathExpr})`)();
    return result;
  } catch {
    return NaN;
  }
};

const operators = {
  plus: "+",
  minus: "−",
  multiply: "×",
  divide: "÷",
};

// обработка кликов
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const { action } = btn.dataset;
    const value = btn.textContent;

    if (!action) {
      if (resultShown) {
        expression = "";
        resultShown = false;
      }
      if (value === "." && /\.\d*$/.test(expression)) return;
      if (expression.length >= MAX_LENGTH) return;

      expression += value;
      updateDisplay(expression);
      return;
    }

    const actions = {
      clear: () => {
        expression = "";
        updateDisplay("0");
      },
      sign: () => {
        const match = expression.match(/(-?\d+(?:\.\d+)?)$/);
        if (match) {
          const numStr = match[0];
          const before = expression.slice(0, -numStr.length);
          const newNum = numStr.startsWith("-")
            ? numStr.slice(1)
            : "-" + numStr;
          expression = before + newNum;
          updateDisplay(expression);
        }
      },
      percent: () => {
        // Просто добавляем символ % к выражению
        if (expression.length >= MAX_LENGTH) return;
        expression += "%";
        updateDisplay(expression);
      },
      equals: () => {
        if (expression) {
          const result = evaluateExpression(expression);
          const formatted = formatNumber(result);
          updateDisplay(formatted);
          expression = formatted;
          resultShown = true;
        }
      },
    };

    if (actions[action]) {
      actions[action]();
    } else if (operators[action]) {
      if (resultShown) resultShown = false;
      if (expression && !/[+\-*/÷×−]$/.test(expression)) {
        expression += operators[action];
        updateDisplay(expression);
      }
    }
  });
});

// тема
const themeButtons = document.querySelectorAll(".theme-switcher button");

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.id === "light-theme" ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
});

const savedTheme = localStorage.getItem("theme") || "dark";
document.body.setAttribute("data-theme", savedTheme);
