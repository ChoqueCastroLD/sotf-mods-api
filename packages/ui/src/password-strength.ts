/**
 * Client-side password strength estimate for the meter of `PasswordField` (PLAN §7.1: ≥ 10
 * characters, no mandatory symbols; the server also rejects breached passwords via HIBP).
 *
 * A deliberately small heuristic (no 400 KB dictionary): entropy of the character classes used
 * over an "effective length" that discounts repeats, keyboard/alphabet sequences and common
 * words. It is guidance for the user, never the authority.
 */

export type PasswordScore = 0 | 1 | 2 | 3 | 4;

export interface PasswordStrength {
  score: PasswordScore;
  /** Estimated entropy in bits (after penalties). */
  bits: number;
  /** Below the minimum length: the form will reject it whatever the score. */
  tooShort: boolean;
}

export const DEFAULT_MIN_PASSWORD_LENGTH = 10;

const COMMON = [
  'password',
  'passwort',
  'contraseña',
  'qwerty',
  'azerty',
  'qwertz',
  'letmein',
  'welcome',
  'iloveyou',
  'admin',
  'dragon',
  'monkey',
  'football',
  'sunshine',
  'princess',
  'sotf',
  'sons',
  'forest',
  'kelvin',
  'virginia',
  'endnight',
  'mods',
];

const SEQUENCES = ['abcdefghijklmnopqrstuvwxyz', '0123456789', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

function charsetSize(password: string): number {
  let size = 0;
  if (/[a-z]/.test(password)) size += 26;
  if (/[A-Z]/.test(password)) size += 26;
  if (/\d/.test(password)) size += 10;
  if (/[!-/:-@[-`{-~ ]/.test(password)) size += 33;
  // Letters beyond ASCII (accents, Cyrillic, CJK…) enlarge the alphabet considerably.
  if (/[^\p{ASCII}]/u.test(password)) size += 100;
  return Math.max(size, 1);
}

/** Length after collapsing runs ("aaaa"), sequences ("abcd", "4321", "qwer") and common words. */
function effectiveLength(password: string): number {
  const chars = [...password.toLowerCase()];
  let length = 0;
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i] ?? '';
    const previous = chars[i - 1];
    if (previous === current) {
      length += 0.25;
      continue;
    }
    const pair = `${previous ?? ''}${current}`;
    const inSequence =
      previous !== undefined &&
      SEQUENCES.some((sequence) => sequence.includes(pair) || [...sequence].reverse().join('').includes(pair));
    length += inSequence ? 0.35 : 1;
  }
  const lower = password.toLowerCase();
  for (const word of COMMON) {
    if (lower.includes(word)) length -= [...word].length * 0.75;
  }
  return Math.max(length, 0);
}

export function passwordStrength(password: string, minLength = DEFAULT_MIN_PASSWORD_LENGTH): PasswordStrength {
  const length = [...password].length;
  const bits = Math.round(effectiveLength(password) * Math.log2(charsetSize(password)) * 10) / 10;
  const tooShort = length < minLength;
  let score: PasswordScore;
  if (length === 0 || tooShort || bits < 30) score = 0;
  else if (bits < 45) score = 1;
  else if (bits < 60) score = 2;
  else if (bits < 80) score = 3;
  else score = 4;
  return { score, bits, tooShort };
}
