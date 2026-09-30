/**
 * The console shell (research/03 §6.9–§6.12): sidebar per area (icons on tablets, a menu on
 * phones), top bar (live status, Signals, account), offline and verify-email banners, the route
 * outlet, realtime stream, shortcuts and accessible route changes. Rendered by the root route
 * once the session guard has loaded `/me`.
 */

import { Banner } from '@sotf/ui/banner';
import { SkipLink } from '@sotf/ui/skip-link';
import { Outlet, useMatches, useRouterState } from '@tanstack/react-router';
import { lazy, Suspense, useEffect, useState } from 'react';
import { applyDisplayPreferences } from '../features/settings/display.ts';
import { useConsoleLocale } from '../hooks/use-console-locale.ts';
import { applyStaticTitle } from '../hooks/use-document-title.ts';
import { isRanger, type Me, useMe } from '../hooks/use-me.ts';
import { useOnline } from '../hooks/use-online.ts';
import { ShortcutsProvider } from '../hooks/use-shortcuts.tsx';
import { useSidebar } from '../hooks/use-sidebar.ts';
import { StreamStatusContext, useStream } from '../hooks/use-stream.ts';
import { userLocale } from '../lib/locale.ts';
import { t } from '../lib/messages.ts';
import { areaOf, type Viewer } from '../lib/navigation.ts';
import { GlobalShortcuts } from './GlobalShortcuts.tsx';
import { RouteAnnouncer } from './RouteAnnouncer.tsx';
import { Sidebar } from './Sidebar.tsx';
import { TopBar } from './TopBar.tsx';

const ShortcutsDialog = lazy(() => import('./ShortcutsDialog.tsx'));

export const MAIN_ID = 'console-main';

/** Deepest static route title (`staticData.title`), applied unless a screen set its own. */
function useStaticTitle(pathname: string): void {
  const title = useMatches({
    select: (matches) => {
      for (let index = matches.length - 1; index >= 0; index -= 1) {
        const candidate = matches[index]?.staticData.title;
        if (candidate) return candidate;
      }
      return undefined;
    },
  });
  const { locale } = useConsoleLocale();
  useEffect(() => {
    applyStaticTitle(title?.());
  }, [title, pathname, locale]);
}

/** Switches to the user's saved language once `/me` says it differs from the first guess. */
function useUserLocale(me: Parameters<typeof userLocale>[0]): void {
  const { locale, setLocale } = useConsoleLocale();
  const preferred = userLocale(me);
  useEffect(() => {
    if (preferred && preferred !== locale) setLocale(preferred);
  }, [preferred, locale, setLocale]);
}

/**
 * Theme, density and the motion override follow the account on every device: applied once `/me`
 * loads and again whenever it changes (another tab, Preferences saving).
 */
function useDisplayPreferences(settings: Me['settings']): void {
  const { theme, density, reducedMotion } = settings;
  useEffect(() => {
    applyDisplayPreferences({ theme, density, reducedMotion });
  }, [theme, density, reducedMotion]);
}

export function ConsoleLayout() {
  const me = useMe();
  const status = useStream();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const area = areaOf(pathname);
  const sidebar = useSidebar();
  const online = useOnline();
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [shortcutsRequested, setShortcutsRequested] = useState(false);
  useUserLocale(me);
  useDisplayPreferences(me.settings);
  useStaticTitle(pathname);

  const viewer: Viewer = { role: me.user.role };
  const showShortcuts = () => {
    setShortcutsRequested(true);
    setShortcutsOpen(true);
  };

  return (
    <StreamStatusContext.Provider value={status}>
      <ShortcutsProvider enabled={me.settings.keyboardShortcuts}>
        <GlobalShortcuts ranger={isRanger(me)} onToggleSidebar={sidebar.toggle} onShowHelp={showShortcuts} />
        <SkipLink target={MAIN_ID} />
        <div className="flex min-h-dvh w-full">
          <Sidebar
            viewer={viewer}
            area={area}
            pathname={pathname}
            unread={me.unreadNotifications}
            collapsed={sidebar.collapsed}
            onToggle={sidebar.toggle}
          />
          <div className="flex min-w-0 flex-1 flex-col">
            <TopBar
              me={me}
              viewer={viewer}
              area={area}
              pathname={pathname}
              status={status}
              onShowShortcuts={showShortcuts}
            />
            {online && !me.flags.mustVerifyEmail ? null : (
              <div className="flex flex-col gap-2 px-3 pt-3 md:px-6">
                {online ? null : (
                  <Banner tone="warning" title={t('common_state_offline')}>
                    {t('console_offline_detail')}
                  </Banner>
                )}
                {me.flags.mustVerifyEmail ? (
                  <Banner tone="signal" title={t('errors_code_email_not_verified_title')}>
                    {t('errors_code_email_not_verified_detail')}
                  </Banner>
                ) : null}
              </div>
            )}
            <main
              id={MAIN_ID}
              tabIndex={-1}
              className="mx-auto flex w-full max-w-(--container-wide) flex-1 flex-col px-4 py-6 outline-none md:px-6 lg:px-8"
            >
              <Outlet />
            </main>
          </div>
        </div>
        <RouteAnnouncer mainId={MAIN_ID} />
        {shortcutsRequested ? (
          <Suspense fallback={null}>
            <ShortcutsDialog open={shortcutsOpen} onOpenChange={setShortcutsOpen} />
          </Suspense>
        ) : null}
      </ShortcutsProvider>
    </StreamStatusContext.Provider>
  );
}
