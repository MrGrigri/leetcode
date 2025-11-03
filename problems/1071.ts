// cSpell:ignore ABCABC, ABABAB, AAACCC
import { equals } from '../utils/equals';

function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const str1Length = str1.length;
  const str2Length = str2.length;
  const smallest = str1Length >= str2Length ? str2 : str1;
  const largest = smallest === str1 ? str2 : str1;
  const divisor = gcd(str1Length, str2Length);
  const word = smallest.substring(0, divisor);

  word;
  divisor;

  if (
    word.repeat(largest.length / divisor) === largest &&
    word.repeat(smallest.length / divisor) === smallest
  ) {
    return word;
  }

  return '';
}

equals(gcdOfStrings('ABCABC', 'ABC'), 'ABC'); //?
equals(gcdOfStrings('ABC', 'ABCABC'), 'ABC'); //?
equals(gcdOfStrings('ABABAB', 'ABAB'), 'AB'); //?
equals(gcdOfStrings('ABCDEF', 'ABC'), ''); //?
equals(gcdOfStrings('LEET', 'CODE'), ''); //?
equals(gcdOfStrings('LEE', 'CODE'), ''); //?
equals(gcdOfStrings('AAAAAAAAA', 'AAACCC'), ''); //?
