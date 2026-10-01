/**
 * Top bar. Phones: the brand mark (or a Back arrow on pushed screens), the area or screen title in
 * the display face, the realtime dot and the account menu, with the area's places as a strip of
 * pills below (the Signals bell lives in the bottom tabs). Larger screens: the current area,
 * realtime status, the Signals bell with the unread count (it opens a panel with the latest
 * signals, `SignalsBell.tsx`, lazy; until that chunk arrives it is a link to `/signals`) and the
 * account menu.
 */

import { BELOW_MD_QUERY, useMediaQuery } from '@sotf/ui';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Link, useRouter } from '@tanstack/react-router';
import { Bell, ChevronLeft } from 'lucide-react';
import { lazy, Suspense } from 'react';
import type { Me } from '../hooks/use-me.ts';
import { t } from '../lib/messages.ts';
import { type AreaId, findArea, isPushedRoute, parentPath, phoneItems, type Viewer } from '../lib/navigation.ts';
import type { StreamStatus } from '../lib/stream.ts';
import { AccountMenu } from './AccountMenu.tsx';
import { BrandLogo } from './BrandLogo.tsx';
import { LiveStatus } from './LiveStatus.tsx';
import { SectionStrip } from './SectionStrip.tsx';

const SignalsBell = lazy(() => import('./SignalsBell.tsx'));

export interface TopBarProps {
  me: Me;
  viewer: Viewer;
  area: AreaId | null;
  pathname: string;
  status: StreamStatus;
  /** A pushed screen (editor, wizard, open queue item): Back arrow instead of the mark, no strip. */
  pushed: boolean;
  /** Title of the current screen (deepest route title), shown on phones. */
  title?: string | undefined;
  onShowShortcuts: () => void;
}

/** «‹» on pushed screens: back through the history, or to the parent screen on a deep link. */
function BackButton({ pathname }: { pathname: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      aria-label={t('common_action_back')}
      onClick={() => {
        if (router.history.canGoBack()) router.history.back();
        else if (isPushedRoute(pathname)) void router.navigate({ to: parentPath(pathname) as '/' });
        else void router.navigate({ to: pathname as '/', search: {} as never, replace: true });
      }}
      className="-ms-1 flex size-11 shrink-0 items-center justify-center rounded-full text-fg active:bg-fg/8 md:hidden"
    >
      <Icon icon={ChevronLeft} size={26} className="rtl:rotate-180" />
    </button>
  );
}

export function TopBar({ me, viewer, area, pathname, status, pushed, title, onShowShortcuts }: TopBarProps) {
  const unread = me.unreadNotifications;
  const bellLabel = t('console_signals_unread', { count: unread });
  const phone = useMediaQuery(BELOW_MD_QUERY);
  const bellLink = (
    <Link
      to={'/signals' as '/'}
      aria-label={bellLabel}
      title={bellLabel}
      className="relative flex size-11 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg md:size-10"
    >
      <Icon icon={Bell} size={20} />
      {unread > 0 ? (
        <span
          data-unread-count={unread}
          aria-hidden="true"
          className="absolute end-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-2xs font-semibold text-primary-fg tabular-nums"
        >
          {unread > 99 ? '99+' : unread}
        </span>
      ) : null}
    </Link>
  );
  const strip = area !== null && !pushed && phoneItems(findArea(area), viewer).length > 0;
  const areaLabel = area ? findArea(area).label() : t('console_nav_label');
  const phoneTitle = pushed && title ? title : areaLabel;
  return (
    <header
      className={cn(
        'sticky top-0 z-(--z-sticky) shrink-0 bg-bg/95 pt-[env(safe-area-inset-top)] supports-[backdrop-filter]:bg-bg/85 supports-[backdrop-filter]:backdrop-blur-md',
        strip ? 'md:border-b md:border-border' : 'border-b border-border',
      )}
    >
      <div className="flex h-14 items-center gap-2 px-3 md:gap-4 md:px-6">
        {pushed ? <BackButton pathname={pathname} /> : null}
        <a
          href="/"
          className={cn('flex h-11 items-center text-fg md:hidden', pushed && 'hidden')}
          aria-label={`${t('common_site_name')} · ${t('common_nav_home')}`}
        >
          <BrandLogo variant="mark" />
        </a>
        <p className="font-display-caps min-w-0 truncate text-xl leading-none text-fg md:hidden">{phoneTitle}</p>
        <p className="readout hidden md:block">{areaLabel}</p>
        <div className="ms-auto flex items-center gap-1 md:gap-3">
          <LiveStatus status={status} />
          {phone ? null : (
            <Suspense fallback={bellLink}>
              <SignalsBell unread={unread} label={bellLabel} fallback={bellLink} />
            </Suspense>
          )}
          <AccountMenu me={me} onShowShortcuts={onShowShortcuts} />
        </div>
      </div>
      {strip && area ? <SectionStrip area={area} viewer={viewer} pathname={pathname} /> : null}
    </header>
  );
}
