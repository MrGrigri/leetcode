// cSpell:ignore apbqcr, pqrs, apbqrs, apbqcd, beebaeca, fbeebaeca
import { equals } from '../utils/equals';

function mergeAlternately(word1: string, word2: string): string {
  const word1Array = word1.split('');
  const word2Array = word2.split('');

  const output: Array<string> = [];
  let remainder: Array<string> = [];

  let wordDifference = Math.abs(word1Array.length - word2Array.length);

  if (wordDifference) {
    remainder =
      word1Array.length > word2Array.length
        ? word1Array.splice(word1Array.length - wordDifference)
        : word2Array.splice(word2Array.length - wordDifference);
  }

  for (let i = 0, l = word1Array.length; i < l; i++) {
    output.push(word1Array[i], word2Array[i]);
  }

  if (remainder) {
    output.push(...remainder);
  }

  return output.join('');
}

equals(mergeAlternately('abc', 'pqr'), 'apbqcr');
equals(mergeAlternately('ab', 'pqrs'), 'apbqrs');
equals(mergeAlternately('abcd', 'pq'), 'apbqcd');
equals(mergeAlternately('f', 'beebaeca'), 'fbeebaeca');
