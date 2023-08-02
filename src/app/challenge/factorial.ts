export const factorial = (num: number) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};
