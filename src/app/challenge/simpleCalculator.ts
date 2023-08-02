type SimpleCalculatorProps = {
  numberOne: number;
  numberTwo: number;
  operator: string;
};
export const simpleCalculator = (data: SimpleCalculatorProps) => {
  const { numberOne, numberTwo, operator } = data;
  switch (operator) {
    case "+":
      return numberOne + numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "*":
      return numberOne * numberTwo;
    case "/":
      return numberOne / numberTwo;

    default:
      return "Error: Invalid operator.";
  }
};
