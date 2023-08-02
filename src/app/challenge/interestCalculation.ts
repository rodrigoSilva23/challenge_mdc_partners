type InterestCalculation = {
  initialCapital: number;
  interestRate: number;
  investmentTimeMonths: number;
};
export const interestCalculation = (data: InterestCalculation): number => {
  const { interestRate, initialCapital, investmentTimeMonths } = data;
  const interest = interestRate / 100;
  const finalValue =
    initialCapital * Math.pow(1 + interest, investmentTimeMonths);
  return +finalValue.toFixed(2);
};
