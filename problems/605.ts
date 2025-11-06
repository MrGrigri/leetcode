import { equals } from '../utils/equals';

/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 *
 * Constraints:
 *  1 <= flowerbed.length <= 2 * 10^4
 *  flowerbed[i] is 0 or 1
 *  There are no two adjacent flowers in flowerbed
 *  0 <= n <= flowerbed.length
 *
 * @param {Array<number>} flowerbed - Flowerbed row
 * @param {number} n - Number of flowers to be planted
 *
 * @returns {boolean} - If the number of flowers (n) can be planted in flowerbed (flowerbed) given the restraints above
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
}

equals(canPlaceFlowers([1, 0, 0, 0, 1], 1), true); //?
equals(canPlaceFlowers([1, 0, 0, 0, 1], 2), false); //?
equals(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2), false); //?
equals(canPlaceFlowers([0, 0, 1, 0, 1], 1), true); //?
