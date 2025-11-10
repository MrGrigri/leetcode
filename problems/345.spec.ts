import { describe, expect, it } from 'vitest';
import { reverseVowels } from './345';

describe('reverseVowels', () => {
  it('Should reverse the vowels in a given string', () => {
    expect(reverseVowels('leetcode')).toBe('leotcede');
    expect(reverseVowels('IceCreAm')).toBe('AceCreIm');
    expect(reverseVowels('sdfg')).toBe('sdfg');
  });
});
