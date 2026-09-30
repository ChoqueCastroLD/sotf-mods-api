/**
 * Locale-aware formatting of the Basecamp screens (the console's active locale and the creator's
 * own time zone: Basecamp is personal UI, never cached HTML).
 */
import {
  formatCompactNumber,
  formatDate,
  formatDateTime,
  formatNumber,
  formatPercent,
  formatRelativeTime,
} from '@sotf/i18n/format';
import { toIntlLocale } from '@sotf/i18n/locales';
import { localizePath } from '@sotf/i18n/paths';
import { browserTimeZone } from '../../lib/i18n.ts';
import { activeLocale } from '../../lib/messages.ts';

const DAY_MS = 86_400_000;

export function number(value: number): string {
  return formatNumber(activeLocale(), value);
}

export function compact(value: number): string {
  return formatCompactNumber(activeLocale(), value);
}

/** Share `0..1` as a percentage («94 %»). */
export function percent(ratio: number, digits = 0): string {
  return formatPercent(activeLocale(), ratio, digits);
}

/** Number with at most `digits` decimals («4.5», «4»). */
export function decimal(value: number, digits = 1): string {
  return formatNumber(activeLocale(), value, { maximumFractionDigits: digits });
}

/** Average rating with one decimal («4.6»). */
export function rating(value: number): string {
  return formatNumber(activeLocale(), value, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export function relative(value: string | number): string {
  return formatRelativeTime(activeLocale(), value);
}

export function dateTime(iso: string): string {
  return formatDateTime(activeLocale(), iso, 'medium', 'short', { timeZone: browserTimeZone() });
}

export function date(iso: string): string {
  return formatDate(activeLocale(), iso, 'medium', { timeZone: browserTimeZone() });
}

/**
 * A calendar day of the analytics series (`2026-09-29`, a UTC day): short month and day, with the
 * year when `withYear`. Formatted in UTC so the label is the day the data belongs to.
 */
export function dayLabel(day: string, withYear = false): string {
  const value = Date.parse(`${day}T00:00:00Z`);
  if (!Number.isFinite(value)) return day;
  const options: Intl.DateTimeFormatOptions = withYear
    ? { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }
    : { day: 'numeric', month: 'short', timeZone: 'UTC' };
  try {
    return new Intl.DateTimeFormat(toIntlLocale(activeLocale()), options).format(value);
  } catch {
    return day;
  }
}

/** «Day N on the island»: whole days since the account was created, the first day being day 1. */
export function dayNumber(createdAt: string, now: number = Date.now()): number {
  const created = Date.parse(createdAt);
  if (!Number.isFinite(created)) return 1;
  return Math.max(1, Math.floor((now - created) / DAY_MS) + 1);
}

/** Part of the day of the creator's clock, for the greeting. */
export function partOfDay(now: Date = new Date()): 'morning' | 'afternoon' | 'evening' | 'night' {
  const hour = now.getHours();
  if (hour < 5) return 'night';
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  if (hour < 23) return 'evening';
  return 'night';
}

/** Public URL of a site path in the creator's locale (opens the real page). */
export function publicHref(path: string): string {
  return localizePath(path, activeLocale());
}

/** Relative change between two values (null when there is nothing to compare with). */
export function changeOf(value: number, previous: number | null): number | null {
  if (previous === null || !Number.isFinite(previous)) return null;
  if (previous === 0) return value === 0 ? 0 : null;
  return (value - previous) / Math.abs(previous);
}
