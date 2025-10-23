export class Command {
  execute() {}
}

export class CalculatorCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }
}
