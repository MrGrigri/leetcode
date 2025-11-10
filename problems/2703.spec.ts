import { describe, expect, it } from 'vitest';
import { argumentsLength } from './2703';

describe('argumentsLength', () => {
  it('Should ...', () => {
    expect(argumentsLength(5)).toBe(1);
    expect(argumentsLength({}, null, '3')).toBe(3);
  });
});
