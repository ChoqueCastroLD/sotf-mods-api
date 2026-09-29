/**
 * Moon phase for the footer (PLAN §3.7): computed on the client from the date alone.
 * Kept dependency-free and tiny (it ships in the public JS budget).
 *
 * Uses the mean synodic month from a reference new moon; accurate to well under a day,
 * which is plenty for choosing one of eight icons.
 */

/** Mean synodic month in days. */
export const SYNODIC_MONTH = 29.530588853;

/** Reference new moon: 2000-01-06 18:14 UTC. */
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

const DAY = 86_400_000;

export const MOON_PHASE_NAMES = [
  'new',
  'waxing-crescent',
  'first-quarter',
  'waxing-gibbous',
  'full',
  'waning-gibbous',
  'last-quarter',
  'waning-crescent',
] as const;

export type MoonPhaseName = (typeof MOON_PHASE_NAMES)[number];

/** Index 0–7, matching the `moon-phase-{index}` icons of the Field kit sprite. */
export type MoonPhaseIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface MoonPhase {
  readonly index: MoonPhaseIndex;
  readonly name: MoonPhaseName;
  /** Days since the last new moon (0 … 29.53). */
  readonly age: number;
  /** Position in the cycle (0 = new, 0.5 = full). */
  readonly fraction: number;
  /** Illuminated fraction of the disc (0 … 1). */
  readonly illumination: number;
  readonly waxing: boolean;
}

/** Moon phase at `date` (default: now). */
export function moonPhase(date: Date | number = Date.now()): MoonPhase {
  const time = typeof date === 'number' ? date : date.getTime();
  if (!Number.isFinite(time)) {
    throw new RangeError('moonPhase() needs a valid date');
  }
  const days = (time - REFERENCE_NEW_MOON) / DAY;
  const age = ((days % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const fraction = age / SYNODIC_MONTH;
  const index = (Math.floor(fraction * 8 + 0.5) % 8) as MoonPhaseIndex;
  return {
    index,
    name: MOON_PHASE_NAMES[index],
    age,
    fraction,
    illumination: (1 - Math.cos(2 * Math.PI * fraction)) / 2,
    waxing: fraction < 0.5,
  };
}
