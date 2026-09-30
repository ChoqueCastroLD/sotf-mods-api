/**
 * Current console locale and a setter (Settings → Preferences calls `setLocale` after saving).
 * Changing it re-renders the whole console tree with the new messages.
 */
import type { Locale } from '@sotf/i18n';
import { createContext, useContext } from 'react';

export interface ConsoleLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const ConsoleLocaleContext = createContext<ConsoleLocaleContextValue | null>(null);

export function useConsoleLocale(): ConsoleLocaleContextValue {
  const value = useContext(ConsoleLocaleContext);
  if (!value) throw new Error('useConsoleLocale must be used inside <ConsoleApp>');
  return value;
}
