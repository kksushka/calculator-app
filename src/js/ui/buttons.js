import { evaluateExpression } from '../calculator/evaluator.js';
import { applyFunction } from '../calculator/functions.js';
import { memoryActions } from '../calculator/memory.js';
import { formatNumber } from '../utils/format.js';
import { isFiniteSafe, pow, nthRoot } from '../utils/helpers.js';
import updateDisplay from './display.js';
import { CommandFactory } from './commands/index.js';

class Calculator {
  constructor(display, wrapper) {
    this.display = display;
    this.wrapper = wrapper;

    this.state = {
      currentInput: '',
      leftOperand: null,
      currentOperator: null,
      isResult: false,
      pendingOperation: null,
      storedValue: null,
      activeButton: null,
      MAX_LEN: 30,
    };

    this.commandFactory = new CommandFactory(this);
  }

  updateDisplay() {
    let displayContent = '';

    if (this.state.pendingOperation && this.state.storedValue !== null) {
      const symbol = this.state.pendingOperation === 'power' ? '^' : 'ʸ√';
      displayContent = `${formatNumber(this.state.storedValue)} ${symbol} ${this.state.currentInput || ''}`;
    } else if (this.state.leftOperand !== null && this.state.currentOperator) {
      displayContent = `${formatNumber(this.state.leftOperand)} ${this.state.currentOperator} ${this.state.currentInput || ''}`;
    } else if (this.state.currentInput) {
      displayContent = this.state.currentInput;
    } else if (this.state.leftOperand !== null) {
      displayContent = formatNumber(this.state.leftOperand);
    } else {
      displayContent = '0';
    }

    updateDisplay(this.display, this.wrapper, displayContent);
  }

  calculateCurrentExpression() {
    if (
      this.state.leftOperand !== null &&
      this.state.currentOperator &&
      this.state.currentInput
    ) {
      const expression = `${this.state.leftOperand} ${this.state.currentOperator} ${this.state.currentInput}`;
      return evaluateExpression(expression);
    } else if (this.state.currentInput && !this.state.leftOperand) {
      return evaluateExpression(this.state.currentInput);
    }
    return this.state.leftOperand;
  }

  evaluateExpression(expr) {
    return evaluateExpression(expr);
  }

  applyFunction(fn, val) {
    return applyFunction(fn, val);
  }

  isFiniteSafe(n) {
    return isFiniteSafe(n);
  }

  formatNumber(n) {
    return formatNumber(n);
  }

  displayError() {
    updateDisplay(this.display, this.wrapper, 'Error');
  }

  processPendingOperation() {
    if (this.state.pendingOperation && this.state.storedValue !== null) {
      let y, res;

      if (this.state.currentInput) {
        y = evaluateExpression(this.state.currentInput);
      } else {
        y = this.state.leftOperand !== null ? this.state.leftOperand : 1;
      }

      if (this.state.pendingOperation === 'power') {
        res = pow(this.state.storedValue, y);
      } else if (this.state.pendingOperation === 'yRoot') {
        res = nthRoot(this.state.storedValue, y);
      }

      if (!isFiniteSafe(res)) {
        this.clear();
        updateDisplay(this.display, this.wrapper, 'Error');
        return;
      }

      this.state.leftOperand = res;
      this.state.currentInput = '';
      this.state.currentOperator = null;
      this.state.pendingOperation = null;
      this.state.storedValue = null;
      if (this.state.activeButton) {
        this.state.activeButton.classList.remove('active-func');
      }
      this.state.activeButton = null;
      this.state.isResult = true;
      this.updateDisplay();
    }
  }

  clear() {
    this.state.currentInput = '';
    this.state.leftOperand = null;
    this.state.currentOperator = null;
    this.state.storedValue = null;
    this.state.pendingOperation = null;
    if (this.state.activeButton) {
      this.state.activeButton.classList.remove('active-func');
    }
    this.state.activeButton = null;
    this.state.isResult = false;
    this.updateDisplay();
  }

  get memoryActions() {
    return memoryActions;
  }
}

export const initButtons = (display, wrapper) => {
  const buttons = document.querySelectorAll('.btn, .btn__func, .btn__operator');
  const calculator = new Calculator(display, wrapper);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { action } = btn.dataset;
      const val = btn.textContent;

      if (!action) {
        const command = calculator.commandFactory.createDigitCommand(val);
        command.execute();
        return;
      }

      switch (action) {
        case 'clear':
          calculator.commandFactory.createClearCommand().execute();
          break;

        case 'equals':
          calculator.commandFactory.createEqualsCommand().execute();
          break;

        case 'plus':
        case 'minus':
        case 'multiply':
        case 'divide':
          calculator.commandFactory.createOperationCommand(action).execute();
          break;

        case 'square':
        case 'cube':
        case 'reciprocal':
        case 'sqrt':
        case 'cbrt':
        case 'tenPower':
        case 'factorial':
          calculator.commandFactory.createFunctionCommand(action).execute();
          break;

        case 'power':
        case 'yRoot':
          calculator.commandFactory
            .createSpecialOperationCommand(action)
            .execute(btn);
          break;

        case 'mc':
        case 'mPlus':
        case 'mMinus':
        case 'mr':
          calculator.commandFactory.createMemoryCommand(action).execute();
          break;

        case 'sign':
          calculator.commandFactory.createSignCommand().execute();
          break;

        case 'percent':
          calculator.commandFactory.createPercentCommand().execute();
          break;
      }
    });
  });

  calculator.updateDisplay();
};
