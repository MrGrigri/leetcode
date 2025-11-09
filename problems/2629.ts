import { equals } from '../utils/equals';

type F = (x: number) => number;

function compose(functions: Array<F>): F {
  return function (x) {
    let sum = x;

    for (let i = functions.length - 1, l = 0; i >= l; i--) {
      sum = functions[i](sum);
    }

    return sum;
  };
}

equals(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4), 65); //?
