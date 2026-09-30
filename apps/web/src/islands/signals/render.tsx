/**
 * Lazy half of the header bell: loads the page-locale `signals` messages and mounts `<Bell>` in
 * its host (see `mount.ts`).
 */
import { type Locale, matchLocale } from '@sotf/i18n';
import { createRoot, type Root } from 'react-dom/client';
import Bell from './Bell.tsx';
import { loadSignalsMessages } from './i18n.ts';

let root: Root | null = null;

export function pageLocale(doc: Document = document): Locale {
  return matchLocale(doc.documentElement.lang) ?? 'en';
}

export async function renderBell(host: HTMLElement, unread: number): Promise<void> {
  const locale = pageLocale();
  try {
    await loadSignalsMessages(locale);
  } catch {
    await loadSignalsMessages('en').catch(() => {});
  }
  root ??= createRoot(host);
  root.render(<Bell unread={unread} locale={locale} />);
}
