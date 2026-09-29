import { describe, expect, it } from 'vitest';
import { MOON_PHASE_NAMES, moonPhase, SYNODIC_MONTH } from '../src/moon.ts';

/** Well-known eclipses: solar eclipses are new moons, lunar eclipses are full moons. */
const NEW_MOONS = ['2024-04-08T18:21:00Z', '2026-08-12T17:37:00Z', '2017-08-21T18:30:00Z'];
const FULL_MOONS = ['2025-03-14T06:55:00Z', '2024-09-18T02:34:00Z', '2022-11-08T11:02:00Z'];

describe('moonPhase', () => {
  it.each(NEW_MOONS)('recognises the new moon of %s', (iso) => {
    const phase = moonPhase(new Date(iso));
    expect(phase.index).toBe(0);
    expect(phase.name).toBe('new');
    expect(Math.min(phase.age, SYNODIC_MONTH - phase.age)).toBeLessThan(1);
    expect(phase.illumination).toBeLessThan(0.02);
  });

  it.each(FULL_MOONS)('recognises the full moon of %s', (iso) => {
    const phase = moonPhase(Date.parse(iso));
    expect(phase.index).toBe(4);
    expect(phase.name).toBe('full');
    expect(Math.abs(phase.age - SYNODIC_MONTH / 2)).toBeLessThan(1);
    expect(phase.illumination).toBeGreaterThan(0.98);
  });

  it('walks through the eight phases in order during a month', () => {
    const start = Date.parse(NEW_MOONS[0] as string);
    const seen: number[] = [];
    for (let day = 0; day < 29; day += 1) {
      const { index } = moonPhase(start + day * 86_400_000);
      if (seen[seen.length - 1] !== index) {
        seen.push(index);
      }
    }
    expect(seen).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 0]);
    expect(MOON_PHASE_NAMES).toHaveLength(8);
  });

  it('reports waxing before full and waning after', () => {
    const start = Date.parse(NEW_MOONS[0] as string);
    expect(moonPhase(start + 5 * 86_400_000).waxing).toBe(true);
    expect(moonPhase(start + 20 * 86_400_000).waxing).toBe(false);
  });

  it('handles dates before the reference epoch and rejects invalid dates', () => {
    expect(moonPhase(new Date('1969-07-20T20:17:00Z')).index).toBeGreaterThanOrEqual(0);
    expect(() => moonPhase(new Date('invalid'))).toThrow(RangeError);
  });
});
