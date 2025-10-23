import { CalculatorCommand } from './base.js';

export class DigitCommand extends CalculatorCommand {
  constructor(calculator, digit) {
    super(calculator);
    this.digit = digit;
  }

  execute() {
    const state = this.calculator.state;

    if (state.isResult) {
      state.currentInput = '';
      state.leftOperand = null;
      state.currentOperator = null;
      state.isResult = false;
    }

    if (state.currentInput.length < state.MAX_LEN) {
      state.currentInput += this.digit;
    }

    this.calculator.updateDisplay();
  }
}

export class SignCommand extends CalculatorCommand {
  execute() {
    const state = this.calculator.state;

    if (state.currentInput) {
      state.currentInput = state.currentInput.startsWith('-')
        ? state.currentInput.slice(1)
        : `-${state.currentInput}`;
    } else if (state.leftOperand !== null) {
      state.leftOperand = -state.leftOperand;
    }

    this.calculator.updateDisplay();
  }
}

export class PercentCommand extends CalculatorCommand {
  execute() {
    const state = this.calculator.state;

    if (state.currentInput) {
      const b = this.calculator.evaluateExpression(state.currentInput);
      if (!this.calculator.isFiniteSafe(b)) return;

      if (state.leftOperand !== null && state.currentOperator) {
        let percentValue;

        switch (state.currentOperator) {
          case '×':
          case '÷':
            percentValue = b / 100;
            break;
          case '+':
          case '−':
            percentValue = state.leftOperand * (b / 100);
            break;
          default:
            percentValue = b / 100;
        }

        state.currentInput = percentValue.toString();
      } else {
        state.currentInput = (b / 100).toString();
      }
    } else if (state.leftOperand !== null && state.currentOperator) {
      state.currentInput = (state.leftOperand / 100).toString();
    }

    this.calculator.updateDisplay();
  }
}
