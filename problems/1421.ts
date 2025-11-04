import { equals } from '../utils/equals';

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let largest = Math.max(...candies);
  let output: Array<boolean> = [];

  for (let idx = 0; idx < candies.length; idx++) {
    output.push(extraCandies + candies[idx] >= largest);
  }

  return output;
}

equals(kidsWithCandies([2, 3, 5, 1, 3], 3), [true, true, true, false, true]); //?
equals(kidsWithCandies([4, 2, 1, 1, 2], 1), [true, false, false, false, false]); //?
equals(kidsWithCandies([12, 1, 12], 10), [true, false, true]); //?
