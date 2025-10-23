import { CalculatorCommand } from './base';

export class FunctionCommand extends CalculatorCommand {
  constructor(calculator, functionName) {
    super(calculator);
    this.functionName = functionName;
  }

  execute() {
    const state = this.calculator.state;

    let valueToCompute;

    if (
      state.currentInput &&
      state.currentOperator &&
      state.leftOperand !== null
    ) {
      const expression = `${state.leftOperand} ${state.currentOperator} ${state.currentInput}`;
      valueToCompute = this.calculator.evaluateExpression(expression);
    } else if (state.currentInput) {
      valueToCompute = this.calculator.evaluateExpression(state.currentInput);
    } else if (state.leftOperand !== null) {
      valueToCompute = state.leftOperand;
    } else {
      return;
    }

    if (
      typeof valueToCompute !== 'number' ||
      !this.calculator.isFiniteSafe(valueToCompute)
    ) {
      this.calculator.displayError();
      return;
    }

    if (this.functionName === 'factorial') {
      if (valueToCompute < 0 || valueToCompute % 1 !== 0) {
        this.calculator.displayError();
        return;
      }
      if (valueToCompute > 170) {
        this.calculator.updateDisplay('Overflow');
        return;
      }
    }

    if (this.functionName === 'sqrt' && valueToCompute < 0) {
      this.calculator.displayError();
      return;
    }

    if (this.functionName === 'reciprocal' && valueToCompute === 0) {
      this.calculator.displayError();
      return;
    }

    const result = this.calculator.applyFunction(
      this.functionName,
      valueToCompute,
    );

    if (typeof result !== 'number' || !this.calculator.isFiniteSafe(result)) {
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
