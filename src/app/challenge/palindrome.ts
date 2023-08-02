export const isPalindrome = (word: string): boolean => {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < cleanedWord.length / 2; i++) {
    if (cleanedWord[i] !== cleanedWord[cleanedWord.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
