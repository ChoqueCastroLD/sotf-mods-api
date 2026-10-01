/**
 * Phone navigation (< 768 px): the console areas as bottom tabs, within thumb reach — Basecamp,
 * You, Signals (with the unread count), Settings and, for rangers, the Ranger Station. Pushed
 * screens (the wizard, an editor, an open queue item) hide it and bring their own sticky actions.
 * Safe-area aware, a `<nav>` of plain links (no JavaScript beyond the router), 48 px touch
 * targets, the active tab marked by a waypoint pill and `aria-current`.
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Link, type LinkProps } from '@tanstack/react-router';
import { t } from '../lib/messages.ts';
import { type AreaId, type ConsoleArea, tabTarget, type Viewer, visibleAreas } from '../lib/navigation.ts';

export const TAB_BAR_HEIGHT = '3.75rem';

export interface TabBarProps {
  viewer: Viewer;
  area: AreaId | null;
  unread: number;
}

/** Short names for the tabs whose area title is long in some languages. */
function tabLabel(area: ConsoleArea): string {
  if (area.id === 'ranger') return t('console_tab_ranger');
  if (area.id === 'basecamp') return t('console_tab_basecamp');
  return area.label();
}

export function TabBar({ viewer, area, unread }: TabBarProps) {
  return (
    <nav
      aria-label={t('console_area_switcher')}
      data-console-tabbar=""
      className="fixed inset-x-0 bottom-0 z-(--z-sticky) border-t border-border bg-surface/96 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-16px_var(--elev-color)] supports-[backdrop-filter]:bg-surface/90 supports-[backdrop-filter]:backdrop-blur-xl md:hidden"
    >
      <ul className="mx-auto flex h-15 max-w-lg items-stretch justify-around px-1">
        {visibleAreas(viewer).map((entry) => {
          const active = entry.id === area;
          const badge = entry.id === 'signals' && unread > 0 ? unread : 0;
          return (
            <li key={entry.id} className="min-w-0 flex-1">
              <Link
                to={tabTarget(entry) as LinkProps['to']}
                aria-current={active ? 'page' : 'false'}
                {...(badge ? { 'aria-label': t('console_signals_unread', { count: badge }) } : {})}
                className={cn(
                  'group/tab relative flex h-full flex-col items-center justify-center gap-0.5 rounded-lg px-1 text-[0.65rem] leading-4 font-semibold transition-colors',
                  active ? 'text-fg' : 'text-fg-subtle active:text-fg',
                )}
              >
                <span
                  className={cn(
                    'relative flex h-7 w-14 items-center justify-center rounded-full transition-colors duration-(--dur-base) ease-(--ease-out)',
                    active ? 'bg-primary/16 text-primary' : 'group-active/tab:bg-fg/8',
                  )}
                >
                  <Icon icon={entry.icon} size={21} strokeWidth={active ? 2.3 : 1.9} />
                  {badge ? (
                    <span
                      aria-hidden="true"
                      data-unread-count={badge}
                      className="absolute end-2 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-2xs font-bold leading-none text-primary-fg tabular-nums ring-2 ring-surface"
                    >
                      {badge > 99 ? '99+' : badge}
                    </span>
                  ) : null}
                </span>
                <span aria-hidden={badge ? 'true' : undefined} className="max-w-full truncate">
                  {tabLabel(entry)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
