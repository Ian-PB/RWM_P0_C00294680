import { describe, it, expect } from 'vitest';
import { collatzMulti } from './collatz';

describe('Cube filter', () => {
  it('collatz a sequence', () => {
    const input = [2, 5, 21, 52, 999, 0]; // 6
    const expected = [1, 16, 64, 26, 298, 0];
    expect(collatzMulti(input)).toEqual(expected);
  });
});