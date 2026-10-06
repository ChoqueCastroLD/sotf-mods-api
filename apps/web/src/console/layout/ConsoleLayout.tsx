/**
 * The console shell (research/03 §6.9–§6.12): sidebar per area (icons on tablets, a menu on
 * phones), top bar (live status, Signals, account), offline and verify-email banners, the route
 * outlet, realtime stream, shortcuts and accessible route changes. Rendered by the root route
 * once the session guard has loaded `/me`.
 */

import { Banner } from '@sotf/ui/banner';
import { SkipLink } from '@sotf/ui/skip-link';
import { Outlet, useMatches, useRouterState } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import { type CSSProperties, lazy, Suspense, useEffect, useState } from 'react';
import { Fab } from '../components/Fab.tsx';
import { PullToRefresh } from '../components/PullToRefresh.tsx';
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
import { areaOf, isPushedRoute, type Viewer } from '../lib/navigation.ts';
import { GlobalShortcuts } from './GlobalShortcuts.tsx';
import { RouteAnnouncer } from './RouteAnnouncer.tsx';
import { Sidebar } from './Sidebar.tsx';
import { TAB_BAR_HEIGHT, TabBar } from './TabBar.tsx';
import { TopBar } from './TopBar.tsx';

const ShortcutsDialog = lazy(() => import('./ShortcutsDialog.tsx'));

export const MAIN_ID = 'console-main';

/** Screens whose primary action is «publish something new» (a floating button on phones). */
const FAB_PATHS: ReadonlySet<string> = new Set(['/dashboard', '/dashboard/mods', '/dashboard/drafts']);

/** Deepest static route title (`staticData.title`), applied unless a screen set its own. */
function useStaticTitle(pathname: string): (() => string) | undefined {
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
  return title;
}

/**
 * On phones the top bar already carries the title of a pushed screen: a screen heading with the
 * same text would say it twice. It stays in the document (screen readers, desktop) and is only
 * visually hidden below `md` (`data-phone-dup`, see the `main` classes).
 */
function useDuplicateHeading(mainId: string, title: string | undefined, active: boolean): void {
  useEffect(() => {
    const main = document.getElementById(mainId);
    if (!main) return;
    const mark = () => {
      const heading = main.querySelector('h1');
      if (!heading) return;
      const same =
        active && title !== undefined && heading.textContent?.trim().toLowerCase() === title.trim().toLowerCase();
      if (same) heading.setAttribute('data-phone-dup', '');
      else heading.removeAttribute('data-phone-dup');
    };
    mark();
    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(mark);
    });
    observer.observe(main, { childList: true, subtree: true, characterData: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [mainId, title, active]);
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
  const screenTitle = useStaticTitle(pathname);
  // An open queue item (`?item=`) is a pushed screen too: its decision bar replaces the tabs.
  const itemOpen = useRouterState({ select: (state) => 'item' in (state.location.search as object) });
  const pushed = isPushedRoute(pathname) || itemOpen;
  const tabs = !pushed;
  useDuplicateHeading(MAIN_ID, screenTitle?.(), pushed);

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
        <div
          className="flex min-h-dvh w-full [--tabbar-h:0px]"
          style={
            tabs
              ? ({ '--tabbar-h': `calc(${TAB_BAR_HEIGHT} + env(safe-area-inset-bottom))` } as CSSProperties)
              : undefined
          }
        >
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
              pushed={pushed}
              title={screenTitle?.()}
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
              className="mx-auto flex w-full max-w-(--container-wide) flex-1 flex-col px-4 pt-5 pb-[calc(var(--tabbar-h)+1.5rem)] outline-none [&_h1[data-phone-dup]]:max-md:sr-only [&>*]:min-w-0 [&>.grid:not([class*='grid-cols'])]:grid-cols-[minmax(0,1fr)] md:px-6 md:py-6 lg:px-8"
            >
              <Outlet />
            </main>
          </div>
          {tabs && FAB_PATHS.has(pathname.replace(/\/+$/, '') || '/') ? (
            <Fab to="/dashboard/new/mod" label={t('console_nav_new_mod')} icon={Plus} />
          ) : null}
        </div>
        {tabs ? <TabBar viewer={viewer} area={area} unread={me.unreadNotifications} /> : null}
        <PullToRefresh label={t('console_pull_refreshing')} />
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
