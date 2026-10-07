/**
 * Desktop/tablet sidebar (research/03 §6.9): the logo in a row as tall as the top bar (one band
 * with it, like the public header), the console areas, the current area's sections and, at the
 * bottom, «Back to the site» and the collapse toggle. Icons only when
 * collapsed (tablets by default), with the label as a tooltip and the accessible name.
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { ArrowLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { t } from '../lib/messages.ts';
import { type AreaId, findArea, type Viewer } from '../lib/navigation.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { AreaList, SectionList } from './NavLinks.tsx';

export interface SidebarProps {
  viewer: Viewer;
  area: AreaId | null;
  pathname: string;
  unread: number;
  collapsed: boolean;
  onToggle: () => void;
}

export const SIDEBAR_ID = 'console-sidebar';

export function Sidebar({ viewer, area, pathname, unread, collapsed, onToggle }: SidebarProps) {
  const current = area ? findArea(area) : null;
  return (
    <aside
      id={SIDEBAR_ID}
      data-collapsed={collapsed ? 'true' : 'false'}
      className={cn(
        'sticky top-0 hidden h-dvh shrink-0 flex-col border-e border-border bg-bg md:flex',
        'transition-[width] duration-(--dur-base) ease-(--ease-out)',
        collapsed ? 'w-16' : 'w-60',
      )}
    >
      <a
        href="/"
        className={cn(
          'flex h-16 shrink-0 items-center border-b border-border text-fg transition-colors hover:bg-fg/4',
          collapsed ? 'justify-center' : 'px-5',
        )}
        aria-label={`${t('common_site_name')} · ${t('common_nav_home')}`}
      >
        <BrandLogo variant={collapsed ? 'mark' : 'lockup'} />
      </a>
      <div
        className={cn(
          'flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-visible py-4',
          collapsed ? 'px-2' : 'px-3',
        )}
      >
        <AreaList
          viewer={viewer}
          current={area}
          label={t('console_area_switcher')}
          unread={unread}
          pathname={pathname}
          compact={collapsed}
        />
        {current && current.sections.length > 0 ? (
          <>
            <hr className="border-border" />
            <SectionList area={current} viewer={viewer} pathname={pathname} compact={collapsed} />
          </>
        ) : null}
      </div>
      <div className={cn('flex shrink-0 flex-col gap-0.5 border-t border-border py-3', collapsed ? 'px-2' : 'px-3')}>
        <a
          href="/"
          {...(collapsed ? { 'aria-label': t('console_back_to_site') } : {})}
          className={cn(
            'flex min-h-10 items-center gap-3 rounded-md px-3 text-sm text-fg-muted hover:bg-fg/8 hover:text-fg',
            collapsed && 'justify-center px-0',
          )}
        >
          <Icon icon={ArrowLeft} size={18} />
          {collapsed ? null : <span>{t('console_back_to_site')}</span>}
        </a>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={!collapsed}
          aria-controls={SIDEBAR_ID}
          aria-keyshortcuts="["
          {...(collapsed ? { 'aria-label': t('console_sidebar_expand') } : {})}
          className={cn(
            'flex min-h-10 items-center gap-3 rounded-md px-3 text-sm text-fg-muted hover:bg-fg/8 hover:text-fg',
            collapsed && 'justify-center px-0',
          )}
        >
          <Icon icon={collapsed ? PanelLeftOpen : PanelLeftClose} size={18} />
          {collapsed ? null : <span>{t('console_sidebar_collapse')}</span>}
        </button>
      </div>
    </aside>
  );
}
