/**
 * Top bar: on mobile the menu button and the mark; on larger screens the current area. Always:
 * realtime status, the Signals bell with the unread count and the account menu. On ≥ md the bell
 * opens a panel with the latest signals (`SignalsBell.tsx`, lazy); on phones, and until that chunk
 * arrives, it is a link to `/signals`.
 */

import { BELOW_MD_QUERY, useMediaQuery } from '@sotf/ui';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import { Bell } from 'lucide-react';
import { lazy, Suspense } from 'react';
import type { Me } from '../hooks/use-me.ts';
import { t } from '../lib/messages.ts';
import { type AreaId, findArea, type Viewer } from '../lib/navigation.ts';
import type { StreamStatus } from '../lib/stream.ts';
import { AccountMenu } from './AccountMenu.tsx';
import { BrandLogo } from './BrandLogo.tsx';
import { LiveStatus } from './LiveStatus.tsx';
import { MobileNav } from './MobileNav.tsx';

const SignalsBell = lazy(() => import('./SignalsBell.tsx'));

export interface TopBarProps {
  me: Me;
  viewer: Viewer;
  area: AreaId | null;
  pathname: string;
  status: StreamStatus;
  onShowShortcuts: () => void;
}

export function TopBar({ me, viewer, area, pathname, status, onShowShortcuts }: TopBarProps) {
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
  return (
    <header className="sticky top-0 z-(--z-sticky) flex h-14 shrink-0 items-center gap-2 border-b border-border bg-bg/90 px-3 supports-[backdrop-filter]:bg-bg/75 supports-[backdrop-filter]:backdrop-blur-md md:gap-4 md:px-6">
      <MobileNav viewer={viewer} area={area} pathname={pathname} unread={unread} />
      <a
        href="/"
        className="flex h-11 items-center text-fg md:hidden"
        aria-label={`${t('common_site_name')} · ${t('common_nav_home')}`}
      >
        <BrandLogo variant="mark" />
      </a>
      <p className="readout hidden md:block">{area ? findArea(area).label() : t('console_nav_label')}</p>
      <div className="ms-auto flex items-center gap-1 md:gap-3">
        <LiveStatus status={status} />
        {phone ? (
          bellLink
        ) : (
          <Suspense fallback={bellLink}>
            <SignalsBell unread={unread} label={bellLabel} fallback={bellLink} />
          </Suspense>
        )}
        <AccountMenu me={me} onShowShortcuts={onShowShortcuts} />
      </div>
    </header>
  );
}
