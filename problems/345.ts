export function reverseVowels(s: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelList: Array<string> = [];
  const sAsArray: Array<string> = [];
  const key = '*';

  // loop over string
  for (let i = 0; i < s.length; i++) {
    // if  s[i] is a vowel
    if (vowels.includes(s[i].toLowerCase())) {
      // Add it to the vowelList
      vowelList.push(s[i]);
      // Add key
      sAsArray.push(key);
    } else {
      // Add current string
      sAsArray.push(s[i]);
    }
  }

  return sAsArray.join('').replaceAll(key, () => vowelList.pop() || '');
}
