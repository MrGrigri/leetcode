import { equals } from '../utils/equals';

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let output = [];

  for (let j = 0, l = arr.length; j < l; j++) {
    output.push(fn(arr[j], j));
  }

  return output;
}

equals(
  map([1, 2, 3], (n) => n + 1),
  [2, 3, 4],
);
equals(
  map([1, 2, 3], (n, i) => n + i),
  [1, 3, 5],
);
equals(
  map([10, 20, 30], () => 42),
  [42, 42, 42],
);
