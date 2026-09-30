/**
 * «2 h ago» for `<time data-relative datetime>`: the cached HTML carries absolute UTC dates (it
 * is shared by every visitor for minutes or hours); the browser rewrites them relative to now in
 * the page language and keeps the absolute text as the tooltip.
 */
import { formatRelativeTime, matchLocale } from '@sotf/i18n';

export const RELATIVE_SELECTOR = 'time[data-relative][datetime]';

export function relativize(root: ParentNode, now: number = Date.now()): void {
  const locale = matchLocale(document.documentElement.lang) ?? 'en';
  for (const time of root.querySelectorAll<HTMLTimeElement>(RELATIVE_SELECTOR)) {
    const instant = Date.parse(time.dateTime);
    if (Number.isNaN(instant)) continue;
    if (!time.title && time.textContent) time.title = time.textContent;
    time.textContent = formatRelativeTime(locale, instant, { now });
  }
}
