import { describe, expect, it } from 'vitest';
import {
  compareStrings,
  formatBytes,
  formatCompactNumber,
  formatDate,
  formatDateTime,
  formatList,
  formatNumber,
  formatPercent,
  formatRelativeTime,
  formatTime,
  formatUnit,
  LOCALES,
  toIsoDate,
} from '../src/index.ts';

// Intl output uses narrow/non-breaking spaces in several locales; compare with plain spaces.
const plain = (text: string) => text.replace(/[  ]/g, ' ');

describe('numbers', () => {
  it('formats compact numbers like PLAN §7.11', () => {
    expect(formatCompactNumber('en', 1_980_000)).toBe('1.98M');
    expect(plain(formatCompactNumber('es', 1_980_000))).toBe('1,98 M');
    expect(formatCompactNumber('zh', 1_980_000)).toBe('198万');
    expect(formatCompactNumber('ja', 1_980_000)).toBe('198万');
    expect(plain(formatCompactNumber('de', 1_980_000))).toBe('1,98 Mio.');
    expect(formatCompactNumber('en', 999)).toBe('999');
    expect(formatCompactNumber('en', 3_900)).toBe('3.9K');
  });

  it('formats plain numbers and percentages per locale', () => {
    expect(formatNumber('en', 1204)).toBe('1,204');
    expect(formatNumber('es', 12_040)).toBe('12.040');
    expect(plain(formatNumber('fr', 1204.5))).toBe('1 204,5');
    expect(plain(formatNumber('pt', 1204.5))).toBe('1.204,5');
    expect(formatPercent('en', 0.873)).toBe('87%');
    expect(plain(formatPercent('de', 0.873, 1))).toBe('87,3 %');
  });

  it('formats file sizes with binary multiples', () => {
    expect(formatBytes('en', 0)).toBe('0 bytes');
    expect(formatBytes('en', 1)).toBe('1 byte');
    expect(formatBytes('en', 1_288_490)).toBe('1.2 MB');
    expect(formatBytes('es', 1_288_490)).toBe('1,2 MB');
    expect(plain(formatBytes('fr', 1_288_490))).toBe('1,2 Mo');
    expect(plain(formatBytes('ru', 1_288_490))).toBe('1,2 МБ');
    expect(formatBytes('en', 512 * 1024)).toBe('512 kB');
    expect(formatBytes('en', 3 * 1024 ** 3)).toBe('3 GB');
    expect(formatBytes('en', 1023)).toBe('1,023 bytes');
    expect(formatBytes('en', 1024)).toBe('1 kB');
    expect(() => formatBytes('en', -1)).toThrow(RangeError);
    expect(() => formatBytes('en', Number.NaN)).toThrow(RangeError);
  });

  it('moves to the next unit when rounding reaches 1024', () => {
    expect(formatBytes('en', 1023.4)).toBe('1,023 bytes');
    expect(formatBytes('en', 1023.9)).toBe('1 kB');
    expect(formatBytes('en', 1_048_575)).toBe('1 MB');
    expect(formatBytes('en', 1_048_000)).toBe('1,023 kB');
    expect(formatBytes('en', 1024 ** 3 - 1)).toBe('1 GB');
    expect(formatBytes('en', 1024 ** 4 - 1)).toBe('1 TB');
    // The largest unit never rolls over.
    expect(formatBytes('en', 2048 * 1024 ** 4)).toBe('2,048 TB');
    // Values that round up inside a unit keep it: 99.96 kB → 100 kB.
    expect(formatBytes('en', 99.96 * 1024)).toBe('100 kB');
    expect(formatBytes('en', 1.04 * 1024)).toBe('1 kB');
  });

  it('formats units', () => {
    expect(formatUnit('en', 30, 'second')).toBe('30 sec');
    expect(plain(formatUnit('es', 2, 'hour'))).toBe('2 h');
    expect(formatUnit('en', 3, 'day', 'long')).toBe('3 days');
  });
});

describe('dates', () => {
  const instant = '2026-09-29T23:30:00Z';

  it('formats in UTC by default, so SSR output never depends on the server zone', () => {
    expect(formatDate('en', instant)).toBe('Sep 29, 2026');
    expect(formatDate('es', instant, 'long')).toBe('29 de septiembre de 2026');
    expect(formatDate('ja', instant, 'long')).toBe('2026年9月29日');
    expect(formatDate('en', instant, 'medium', { timeZone: 'Asia/Tokyo' })).toBe('Sep 30, 2026');
    expect(formatTime('de', instant)).toBe('23:30');
    expect(plain(formatDateTime('en', instant))).toBe('Sep 29, 2026, 11:30 PM');
    expect(toIsoDate(new Date(instant))).toBe('2026-09-29');
  });

  it('rejects invalid dates', () => {
    expect(() => formatDate('en', 'not a date')).toThrow(RangeError);
  });

  it('formats relative times with an automatic unit', () => {
    const now = Date.parse('2026-09-29T12:00:00Z');
    expect(formatRelativeTime('es', now - 2 * 3_600_000, { now })).toBe('hace 2 h');
    expect(formatRelativeTime('en', now - 2 * 3_600_000, { now })).toBe('2 hr. ago');
    expect(formatRelativeTime('en', now - 10_000, { now })).toBe('now');
    expect(formatRelativeTime('en', now - 24 * 3_600_000, { now })).toBe('yesterday');
    expect(formatRelativeTime('en', now + 3 * 86_400_000, { now, style: 'long' })).toBe('in 3 days');
    expect(formatRelativeTime('en', now - 60 * 86_400_000, { now, style: 'long' })).toBe('2 months ago');
    expect(formatRelativeTime('en', now - 800 * 86_400_000, { now, style: 'long' })).toBe('2 years ago');
    expect(formatRelativeTime('zh', now - 5 * 60_000, { now })).toBe('5分钟前');
  });

  it('works in every locale', () => {
    for (const locale of LOCALES) {
      expect(formatDate(locale, instant)).not.toBe('');
      expect(formatRelativeTime(locale, instant, { now: Date.parse(instant) + 7_200_000 })).not.toBe('');
      expect(formatCompactNumber(locale, 1_980_000)).toMatch(/1[.,]98|198/);
    }
  });
});

describe('lists and sorting', () => {
  it('joins lists per locale', () => {
    expect(formatList('en', ['A', 'B', 'C'])).toBe('A, B, and C');
    expect(formatList('es', ['A', 'B', 'C'])).toBe('A, B y C');
    expect(formatList('en', ['A', 'B'], 'disjunction')).toBe('A or B');
  });

  it('sorts with locale collation and numeric awareness', () => {
    expect(['Zed', 'Ärm', 'Arm'].sort(compareStrings('sv'))).toEqual(['Arm', 'Zed', 'Ärm']);
    expect(['mod 10', 'mod 9'].sort(compareStrings('en'))).toEqual(['mod 9', 'mod 10']);
  });
});
