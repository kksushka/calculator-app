import { CalculatorCommand } from './base';

export class OperationCommand extends CalculatorCommand {
  constructor(calculator, operation) {
    super(calculator);
    this.operation = operation;
  }

  execute() {
    const state = this.calculator.state;

    const opsMap = {
      plus: '+',
      minus: '−',
      multiply: '×',
      divide: '÷',
    };
    const opChar = opsMap[this.operation];

    if (state.pendingOperation && state.storedValue !== null) {
      this.calculator.processPendingOperation();
    }

    if (
      state.currentInput ||
      (state.leftOperand !== null && state.currentOperator)
    ) {
      const result = this.calculator.calculateCurrentExpression();
      if (!this.calculator.isFiniteSafe(result)) {
        this.calculator.displayError();
        return;
      }
      state.leftOperand = result;
      state.currentInput = '';
    }

    if (state.leftOperand === null && state.currentInput) {
      const result = this.calculator.evaluateExpression(state.currentInput);
      if (!this.calculator.isFiniteSafe(result)) {
        this.calculator.displayError();
        return;
      }
      state.leftOperand = result;
      state.currentInput = '';
    }

    if (
      state.leftOperand === null &&
      !state.currentInput &&
      this.operation === 'minus'
    ) {
      state.currentInput = '-';
      this.calculator.updateDisplay();
      return;
    }

    if (state.leftOperand === null) {
      state.leftOperand = 0;
    }

    state.currentOperator = opChar;
    state.isResult = false;
    this.calculator.updateDisplay();
  }
}

export class EqualsCommand extends CalculatorCommand {
  execute() {
    const state = this.calculator.state;

    if (state.pendingOperation && state.storedValue !== null) {
      this.calculator.processPendingOperation();
      return;
    }

    const result = this.calculator.calculateCurrentExpression();
    if (!this.calculator.isFiniteSafe(result)) {
      this.calculator.displayError();
      return;
    }

    state.leftOperand = result;
    state.currentInput = '';
    state.currentOperator = null;
    state.isResult = true;
    this.calculator.updateDisplay();
  }
}

export class ClearCommand extends CalculatorCommand {
  execute() {
    const state = this.calculator.state;

    state.currentInput = '';
    state.leftOperand = null;
    state.currentOperator = null;
    state.storedValue = null;
    state.pendingOperation = null;
    if (state.activeButton) {
      state.activeButton.classList.remove('active-func');
    }
    state.activeButton = null;
    state.isResult = false;
    this.calculator.updateDisplay();
  }
}
