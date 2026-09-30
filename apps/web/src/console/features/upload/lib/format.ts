/** Locale-aware formatting for the wizard (the console's active locale). */
import { formatBytes, formatNumber, formatPercent, formatRelativeTime } from '@sotf/i18n/format';
import { activeLocale } from '../../../lib/messages.ts';

export function bytes(value: number): string {
  return formatBytes(activeLocale(), Math.max(0, value));
}

export function number(value: number): string {
  return formatNumber(activeLocale(), value);
}

export function percent(ratio: number): string {
  return formatPercent(activeLocale(), ratio);
}

export function relative(value: number | string): string {
  return formatRelativeTime(activeLocale(), value);
}
