export const primeNumbers = (num: number) => {
  const isPrime = isPrimeNumber(num);
  const numberOfPrimesToPrint = 10;
  let primes = [];
  var count = 0
  while (primes.length < numberOfPrimesToPrint) {
    
    if (isPrimeNumber(count)) {
      primes.push(count);
    }
    count++
  }
  return {
    isPrime,
    primes,
  };
};

function isPrimeNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
