import { CalculatorCommand } from './base';

export class SpecialOperationCommand extends CalculatorCommand {
  constructor(calculator, operationType) {
    super(calculator);
    this.operationType = operationType;
  }

  execute(buttonElement = null) {
    const { state } = this.calculator;

    const valueToCompute = this.calculator.calculateCurrentExpression();

    if (!this.calculator.isFiniteSafe(valueToCompute)) {
      this.calculator.displayError();
      return;
    }

    state.storedValue = valueToCompute;
    state.pendingOperation = this.operationType;
    state.currentInput = '';
    state.currentOperator = null;
    state.isResult = false;

    if (state.activeButton) {
      state.activeButton.classList.remove('active-func');
    }
    state.activeButton = buttonElement;
    if (buttonElement) {
      buttonElement.classList.add('active-func');
    }

    this.calculator.updateDisplay();
  }
}

export class MemoryCommand extends CalculatorCommand {
  constructor(calculator, memoryAction) {
    super(calculator);
    this.memoryAction = memoryAction;
  }

  execute() {
    const { state } = this.calculator;

    const mrButton = document.querySelector('[data-action="mr"]');

    if (this.memoryAction === 'mr') {
      const memoryValue = this.calculator.memoryActions.mr();
      state.currentInput = this.calculator.formatNumber(memoryValue);
      state.isResult = false;
      this.calculator.updateDisplay();
    } else {
      const valueToUse = this.calculator.calculateCurrentExpression();
      if (valueToUse !== null && this.calculator.isFiniteSafe(valueToUse)) {
        this.calculator.memoryActions[this.memoryAction](valueToUse.toString());
      }

      if (this.memoryAction === 'mPlus' || this.memoryAction === 'mMinus') {
        if (mrButton) {
          mrButton.classList.add('active-func');
        }
      }

      if (this.memoryAction === 'mc') {
        if (mrButton) {
          mrButton.classList.remove('active-func');
        }
      }
    }
  }
}
