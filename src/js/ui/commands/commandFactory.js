import { DigitCommand, SignCommand, PercentCommand } from './inputCommands';
import {
  OperationCommand,
  EqualsCommand,
  ClearCommand,
} from './operationCommands';
import { FunctionCommand } from './functionCommands';
import { SpecialOperationCommand, MemoryCommand } from './specialCommands';

export class CommandFactory {
  constructor(calculator) {
    this.calculator = calculator;
  }

  createDigitCommand(digit) {
    return new DigitCommand(this.calculator, digit);
  }

  createOperationCommand(operation) {
    return new OperationCommand(this.calculator, operation);
  }

  createFunctionCommand(functionName) {
    return new FunctionCommand(this.calculator, functionName);
  }

  createSpecialOperationCommand(operationType) {
    return new SpecialOperationCommand(this.calculator, operationType);
  }

  createMemoryCommand(memoryAction) {
    return new MemoryCommand(this.calculator, memoryAction);
  }

  createEqualsCommand() {
    return new EqualsCommand(this.calculator);
  }

  createClearCommand() {
    return new ClearCommand(this.calculator);
  }

  createSignCommand() {
    return new SignCommand(this.calculator);
  }

  createPercentCommand() {
    return new PercentCommand(this.calculator);
  }
}
