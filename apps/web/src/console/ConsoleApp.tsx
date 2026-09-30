/**
 * `<ConsoleApp client:only="react" />` — the console SPA (PLAN §2.5, §4.3), mounted by the
 * shells in `src/pages/{basecamp,me,ranger,settings}/[...path].astro` and `src/pages/signals.astro`.
 *
 * Boot: pick the first locale (saved → browser → English) and load its shell messages while the
 * router's session guard fetches `/me`; the user's saved language then wins (`ConsoleLayout`).
 *
 * Providers, outermost first: last-resort error boundary → console locale → `@sotf/ui` labels →
 * TanStack Query → TanStack Router (session guard, shell, routes) + lazily mounted toasts.
 */
import type { Locale } from '@sotf/i18n';
import { setLocale as setParaglideLocale } from '@sotf/i18n/runtime';
import { UiTranslateProvider } from '@sotf/ui/labels';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { config as configureZod } from 'zod/v4/core';
import { LazyToaster } from './components/LazyToaster.tsx';
import { BootScreen } from './components/PendingScreen.tsx';
import { ConsoleErrorBoundary } from './components/RouteError.tsx';
import { ConsoleLocaleContext, type ConsoleLocaleContextValue } from './hooks/use-console-locale.ts';
import { redirectToLogin } from './lib/auth.ts';
import { installChunkErrorRecovery } from './lib/chunk-reload.ts';
import { preloadDomainCatalog } from './lib/domain-messages.ts';
import { uiTranslate } from './lib/i18n.ts';
import { applyLocale, initialLocale } from './lib/locale.ts';
import { loadCatalog, setActiveCatalog } from './lib/messages.ts';
import { createConsoleQueryClient } from './lib/query-client.ts';
import { createConsoleRouter } from './router.ts';

// zod 4 probes `new Function` on the first parse; under the CSP (no 'unsafe-eval') that probe
// fails safely but reports a violation on every page load. The interpreter is fast enough here.
configureZod({ jitless: true });

/** Loads `locale`'s messages (English if that fails) and activates them everywhere. */
async function activate(locale: Locale): Promise<Locale> {
  let resolved = locale;
  let catalog: Awaited<ReturnType<typeof loadCatalog>>;
  try {
    catalog = await loadCatalog(locale);
  } catch (error) {
    if (locale === 'en') throw error;
    resolved = 'en';
    catalog = await loadCatalog('en');
  }
  setActiveCatalog(resolved, catalog);
  setParaglideLocale(resolved, { reload: false });
  preloadDomainCatalog(resolved);
  return resolved;
}

function Console() {
  const [locale, setLocaleState] = useState<Locale | null>(null);
  const [bootError, setBootError] = useState<unknown>(null);
  const [queryClient] = useState(() =>
    createConsoleQueryClient({
      onUnauthenticated: () => redirectToLogin(),
      onSignInAgain: () => redirectToLogin(),
    }),
  );
  const [router] = useState(() => createConsoleRouter(queryClient));
  const pending = useRef<Locale | null>(null);

  useEffect(() => installChunkErrorRecovery(), []);

  useEffect(() => {
    // The session check starts at once, in parallel with the messages.
    void router.load();
    activate(initialLocale()).then(setLocaleState, setBootError);
  }, [router]);

  const setLocale = useCallback((next: Locale) => {
    pending.current = next;
    activate(next).then(
      (resolved) => {
        if (pending.current !== next) return;
        applyLocale(resolved);
        setLocaleState(resolved);
      },
      (error: unknown) => console.error('[console] could not switch language', error),
    );
  }, []);

  const localeValue = useMemo<ConsoleLocaleContextValue | null>(
    () => (locale ? { locale, setLocale } : null),
    [locale, setLocale],
  );
  // A new function per locale so every label consumer re-renders after a language switch.
  const translate = useMemo(() => uiTranslate.bind(null), [locale]);

  if (bootError) throw bootError;
  if (!localeValue) return <BootScreen />;

  return (
    <ConsoleLocaleContext.Provider value={localeValue}>
      <UiTranslateProvider value={translate}>
        <QueryClientProvider client={queryClient}>
          {/* Messages are read at render time: remount the screens when the language changes. */}
          <Fragment key={localeValue.locale}>
            <RouterProvider router={router} />
          </Fragment>
          <LazyToaster />
        </QueryClientProvider>
      </UiTranslateProvider>
    </ConsoleLocaleContext.Provider>
  );
}

export default function ConsoleApp() {
  return (
    <ConsoleErrorBoundary>
      <Console />
    </ConsoleErrorBoundary>
  );
}
