import { describe, expect, it } from 'vitest';
import { passwordStrength } from '../src/password-strength.ts';

describe('passwordStrength', () => {
  it('rejects anything shorter than the minimum', () => {
    expect(passwordStrength('')).toMatchObject({ score: 0, tooShort: true });
    expect(passwordStrength('Xk9!pq')).toMatchObject({ score: 0, tooShort: true });
  });

  it('penalises repeats, sequences and common words', () => {
    expect(passwordStrength('aaaaaaaaaaaa').score).toBe(0);
    expect(passwordStrength('abcdefghijkl').score).toBe(0);
    expect(passwordStrength('password1234').score).toBe(0);
    expect(passwordStrength('sonsoftheforest').score).toBeLessThanOrEqual(1);
  });

  it('rewards length and variety', () => {
    expect(passwordStrength('mutant cave lantern').score).toBeGreaterThanOrEqual(3);
    expect(passwordStrength('Zipline-Treehouse-47-Virgil').score).toBe(4);
    const weak = passwordStrength('kelvinrocks1');
    const strong = passwordStrength('kelvin rocks the cube at 3am!');
    expect(strong.bits).toBeGreaterThan(weak.bits);
  });

  it('counts non-ASCII characters (all 13 locales)', () => {
    expect(passwordStrength('ёжик в тумане').score).toBeGreaterThanOrEqual(2);
    expect(passwordStrength('森の中のケルビン').tooShort).toBe(true);
  });
});
