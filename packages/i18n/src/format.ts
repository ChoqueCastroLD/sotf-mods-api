/**
 * `Intl` formatters for the 13 locales (PLAN §7.11): numbers («1,98 M», «198万», «1.98M»),
 * file sizes, percentages, dates, times, relative times («hace 2 h») and lists.
 *
 * - Every function takes the locale explicitly, so the output never depends on hidden state.
 * - Dates default to `timeZone: 'UTC'`: public HTML is identical for every visitor and cached at
 *   the edge (PLAN §2.5), so server output must not depend on the server's or visitor's zone.
 *   Pass `timeZone` (e.g. the browser's) only in client-rendered, per-user UI.
 * - `Intl` instances are cached per locale and options (constructing them is the expensive part).
 *
 * Runtime-agnostic: no Node or DOM APIs.
 */
import { type Locale, toIntlLocale } from './locales.ts';

const MAX_CACHE_ENTRIES = 500;
const cache = new Map<string, unknown>();

function cached<T>(kind: string, locale: Locale, options: object | undefined, create: () => T): T {
  const key = `${kind}|${locale}|${options ? JSON.stringify(options) : ''}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit as T;
  // Options come from code, not users, so the key space is small; the cap is a safety net only.
  if (cache.size >= MAX_CACHE_ENTRIES) cache.clear();
  const created = create();
  cache.set(key, created);
  return created;
}

function numberFormat(locale: Locale, options?: Intl.NumberFormatOptions): Intl.NumberFormat {
  return cached('number', locale, options, () => new Intl.NumberFormat(toIntlLocale(locale), options));
}

export type DateInput = Date | string | number;

function toDate(value: DateInput): Date {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) throw new RangeError(`Invalid date: ${String(value)}`);
  return date;
}

/** Locale-aware number (`1,234.5`, `1.234,5`, `1 234,5`). */
export function formatNumber(locale: Locale, value: number | bigint, options?: Intl.NumberFormatOptions): string {
  return numberFormat(locale, options).format(value);
}

/**
 * Compact number with 3 significant digits: 1 980 000 → `1.98M` (en), `1,98 M` (es),
 * `1,98 Mio.` (de), `198万` (zh, ja). Values below 1000 are shown in full.
 */
export function formatCompactNumber(locale: Locale, value: number): string {
  if (Math.abs(value) < 1000) return formatNumber(locale, value, { maximumFractionDigits: 0 });
  return formatNumber(locale, value, { notation: 'compact', maximumSignificantDigits: 3 });
}

/** Percentage from a ratio: `0.873` → `87%` (or `87,3 %` with `maximumFractionDigits: 1`). */
export function formatPercent(locale: Locale, ratio: number, maximumFractionDigits = 0): string {
  return formatNumber(locale, ratio, { style: 'percent', maximumFractionDigits });
}

const BYTE_UNITS = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'] as const;

/**
 * File size with binary multiples and the conventional labels Windows Explorer uses
 * (1 KB = 1024 bytes), so the number matches what players see after downloading:
 * `1288490` → `1.2 MB` (en), `1,2 MB` (es), `1,2 Mo` (fr), `1,2 МБ` (ru).
 */
export function formatBytes(locale: Locale, bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) throw new RangeError(`Invalid byte count: ${bytes}`);
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < BYTE_UNITS.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return formatNumber(locale, value, {
    style: 'unit',
    unit: BYTE_UNITS[unit],
    // "512 bytes" reads better than the short form "512 byte"; larger units use the short form.
    unitDisplay: unit === 0 ? 'long' : 'short',
    maximumFractionDigits: unit === 0 || value >= 100 ? 0 : 1,
  });
}

export type UnitName = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

/** A quantity with a unit, e.g. a `Retry-After` delay: `30 s`, `2 h`, `3 días`. */
export function formatUnit(
  locale: Locale,
  value: number,
  unit: UnitName,
  unitDisplay: 'short' | 'long' | 'narrow' = 'short',
): string {
  return formatNumber(locale, value, { style: 'unit', unit, unitDisplay, maximumFractionDigits: 0 });
}

export type DateStyle = 'short' | 'medium' | 'long' | 'full';

export interface DateFormatOptions {
  /** IANA zone; defaults to `UTC` (see the module comment). */
  timeZone?: string;
}

/** Calendar date: `Sep 29, 2026` (medium, en), `29 sept 2026` (medium, es), `2026年9月29日` (long, ja). */
export function formatDate(
  locale: Locale,
  value: DateInput,
  style: DateStyle = 'medium',
  options: DateFormatOptions = {},
): string {
  const resolved = { dateStyle: style, timeZone: options.timeZone ?? 'UTC' } as const;
  return cached('date', locale, resolved, () => new Intl.DateTimeFormat(toIntlLocale(locale), resolved)).format(
    toDate(value),
  );
}

/** Time of day, e.g. `14:05` (es) or `2:05 PM` (en). */
export function formatTime(
  locale: Locale,
  value: DateInput,
  style: Exclude<DateStyle, 'full'> = 'short',
  options: DateFormatOptions = {},
): string {
  const resolved = { timeStyle: style, timeZone: options.timeZone ?? 'UTC' } as const;
  return cached('time', locale, resolved, () => new Intl.DateTimeFormat(toIntlLocale(locale), resolved)).format(
    toDate(value),
  );
}

/** Date and time together (`Sep 29, 2026, 2:05 PM`). */
export function formatDateTime(
  locale: Locale,
  value: DateInput,
  dateStyle: DateStyle = 'medium',
  timeStyle: Exclude<DateStyle, 'full'> = 'short',
  options: DateFormatOptions = {},
): string {
  const resolved = { dateStyle, timeStyle, timeZone: options.timeZone ?? 'UTC' } as const;
  return cached('datetime', locale, resolved, () => new Intl.DateTimeFormat(toIntlLocale(locale), resolved)).format(
    toDate(value),
  );
}

/** ISO date (`2026-09-29`) for `<time datetime>` attributes; locale-independent. */
export function toIsoDate(value: DateInput): string {
  return toDate(value).toISOString().slice(0, 10);
}

export interface RelativeTimeOptions {
  /** Reference instant; defaults to `Date.now()`. Pass it explicitly in SSR and tests. */
  now?: DateInput;
  /** `short` → «hace 2 h», `long` → «hace 2 horas», `narrow` → «hace 2h». Default `short`. */
  style?: Intl.RelativeTimeFormatStyle;
  /** `auto` → «yesterday», «now»; `always` → «1 day ago». Default `auto`. */
  numeric?: Intl.RelativeTimeFormatNumeric;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30.436875 * DAY;
const YEAR = 365.2425 * DAY;

/** Unit thresholds: the first unit whose `below` bound exceeds the elapsed time wins. */
const RELATIVE_STEPS: ReadonlyArray<{ unit: Intl.RelativeTimeFormatUnit; ms: number; below: number }> = [
  { unit: 'second', ms: SECOND, below: 45 * SECOND },
  { unit: 'minute', ms: MINUTE, below: 45 * MINUTE },
  { unit: 'hour', ms: HOUR, below: 22 * HOUR },
  { unit: 'day', ms: DAY, below: 7 * DAY },
  { unit: 'week', ms: WEEK, below: 4 * WEEK },
  { unit: 'month', ms: MONTH, below: 11 * MONTH },
  { unit: 'year', ms: YEAR, below: Number.POSITIVE_INFINITY },
];

/**
 * Human relative time with an automatically chosen unit: «2 h ago», «hace 2 h», «2 小时前»,
 * «in 3 days». Anything under 45 s reads as «now» (with `numeric: 'auto'`).
 */
export function formatRelativeTime(locale: Locale, value: DateInput, options: RelativeTimeOptions = {}): string {
  const now = options.now === undefined ? Date.now() : toDate(options.now).getTime();
  const diff = toDate(value).getTime() - now;
  const elapsed = Math.abs(diff);
  const step =
    RELATIVE_STEPS.find((candidate) => elapsed < candidate.below) ?? RELATIVE_STEPS[RELATIVE_STEPS.length - 1];
  if (!step) throw new Error('unreachable: relative time steps are empty');
  const resolved = { style: options.style ?? 'short', numeric: options.numeric ?? 'auto' } as const;
  const formatter = cached(
    'relative',
    locale,
    resolved,
    () => new Intl.RelativeTimeFormat(toIntlLocale(locale), resolved),
  );
  // Under 45 s we report "now" instead of a ticking seconds count.
  const amount = step.unit === 'second' ? 0 : Math.round(diff / step.ms);
  // Avoid "-0" leaking into the output ("0 seconds ago" vs "now").
  return formatter.format(amount === 0 ? 0 : amount, step.unit);
}

/** «A, B and C» / «A, B y C» / «A、B和C». */
export function formatList(
  locale: Locale,
  items: Iterable<string>,
  type: Intl.ListFormatType = 'conjunction',
  style: Intl.ListFormatStyle = 'long',
): string {
  const resolved = { type, style } as const;
  return cached('list', locale, resolved, () => new Intl.ListFormat(toIntlLocale(locale), resolved)).format(items);
}

/** Locale-aware string comparison for sorting names (`items.sort(compareStrings('sv'))`). */
export function compareStrings(locale: Locale): (a: string, b: string) => number {
  const collator = cached(
    'collator',
    locale,
    { sensitivity: 'base', numeric: true },
    () => new Intl.Collator(toIntlLocale(locale), { sensitivity: 'base', numeric: true }),
  );
  return (a, b) => collator.compare(a, b);
}
