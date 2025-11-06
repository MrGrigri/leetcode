import { equals } from '../utils/equals';

type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  let output = [];

  for (let j = 0; j < arr.length; j++) {
    const result = fn(arr[j], j);

    if (result) {
      output.push(arr[j]);
    }
  }

  return output;
}

equals(
  filter([0, 10, 20, 30], (n) => {
    return n > 10;
  }),
  [20, 30],
); //?
