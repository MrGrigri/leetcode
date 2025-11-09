// cSpell:ignore accum, nums
import { equals } from '../utils/equals';

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let output = init;

  for (let i = 0; i < nums.length; i++) {
    output = fn(output, nums[i]);
  }

  return output;
}

equals(
  reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0),
  10,
); //?
