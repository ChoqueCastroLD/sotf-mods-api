/**
 * Dates of the personal screens: console locale and the browser's time zone (never cached HTML).
 */
import { formatDate, formatDateTime, formatRelativeTime } from '@sotf/i18n';
import { browserTimeZone } from '../../lib/i18n.ts';
import { activeLocale } from '../../lib/messages.ts';

export function localDate(iso: string): string {
  try {
    return formatDate(activeLocale(), iso, 'medium', { timeZone: browserTimeZone() });
  } catch {
    return iso.slice(0, 10);
  }
}

export function localDateTime(iso: string): string {
  try {
    return formatDateTime(activeLocale(), iso, 'medium', 'short', { timeZone: browserTimeZone() });
  } catch {
    return iso.slice(0, 16).replace('T', ' ');
  }
}

export function relativeTime(iso: string): string {
  try {
    return formatRelativeTime(activeLocale(), iso);
  } catch {
    return localDateTime(iso);
  }
}
