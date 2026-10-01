/**
 * Console navigation lists, shared by the sidebar (expanded or icon-only) and the mobile menu.
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Link, type LinkProps } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { t } from '../lib/messages.ts';
import {
  type AreaId,
  type ConsoleArea,
  isActivePath,
  type NavItem,
  type Viewer,
  visibleAreas,
  visibleSections,
} from '../lib/navigation.ts';

export interface NavListProps {
  pathname: string;
  /** Icon-only rendering (collapsed sidebar): labels become tooltips. */
  compact?: boolean;
  onNavigate?: () => void;
}

interface NavEntryProps {
  to: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  compact: boolean;
  onNavigate?: () => void;
  badge?: ReactNode;
  /** Accessible name when it differs from the visible label (a count next to it). */
  accessibleLabel?: string;
}

function NavEntry({ to, label, icon, active, compact, onNavigate, badge, accessibleLabel }: NavEntryProps) {
  const name = accessibleLabel ?? (compact ? label : undefined);
  return (
    <li>
      <Link
        // Area routes are registered by their own work packages; unknown paths render «not found».
        to={to as LinkProps['to']}
        aria-current={active ? 'page' : 'false'}
        {...(name ? { 'aria-label': name } : {})}
        onClick={onNavigate}
        className={cn(
          'group/nav relative flex min-h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-fg-muted transition-colors duration-(--dur-fast) hover:bg-fg/8 hover:text-fg max-md:min-h-11',
          'aria-[current=page]:bg-primary/12 aria-[current=page]:text-fg aria-[current=page]:shadow-[inset_2px_0_0_var(--color-primary)]',
          compact && 'justify-center px-0',
        )}
      >
        <Icon icon={icon} size={18} className="shrink-0" />
        {compact ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute start-full z-(--z-popover) ms-2 hidden whitespace-nowrap rounded-md border border-border bg-overlay px-2 py-1 text-xs text-fg shadow-md group-hover/nav:block group-focus-visible/nav:block"
          >
            {label}
          </span>
        ) : (
          <span className="min-w-0 flex-1 truncate">{label}</span>
        )}
        {badge}
      </Link>
    </li>
  );
}

function itemEntry(item: NavItem, props: NavListProps) {
  return (
    <NavEntry
      key={item.to}
      to={item.to}
      label={item.label()}
      icon={item.icon}
      active={isActivePath(props.pathname, item)}
      compact={props.compact ?? false}
      {...(props.onNavigate ? { onNavigate: props.onNavigate } : {})}
    />
  );
}

export interface AreaListProps extends NavListProps {
  viewer: Viewer;
  current: AreaId | null;
  label: string;
  unread?: number;
}

/** The areas the viewer can open (Basecamp, Me, Signals, Settings, Ranger Station). */
export function AreaList({ viewer, current, label, unread = 0, ...props }: AreaListProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-col gap-0.5">
        {visibleAreas(viewer).map((area) => (
          <NavEntry
            key={area.id}
            to={area.to}
            label={area.label()}
            icon={area.icon}
            active={area.id === current}
            compact={props.compact ?? false}
            {...(props.onNavigate ? { onNavigate: props.onNavigate } : {})}
            {...(area.id === 'signals' && unread > 0
              ? { accessibleLabel: t('console_signals_unread', { count: unread }) }
              : {})}
            badge={
              area.id === 'signals' && unread > 0 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-2xs font-semibold text-primary-fg tabular-nums',
                    props.compact && 'absolute -top-0.5 end-1 h-4 min-w-4 px-1',
                  )}
                >
                  {unread > 99 ? '99+' : unread}
                </span>
              ) : undefined
            }
          />
        ))}
      </ul>
    </nav>
  );
}

export interface SectionListProps extends NavListProps {
  area: ConsoleArea;
  viewer: Viewer;
}

/** Links of the current area, grouped in sections (Ranger Station → Admin). */
export function SectionList({ area, viewer, ...props }: SectionListProps) {
  const sections = visibleSections(area, viewer);
  if (sections.length === 0) return null;
  return (
    <nav aria-label={area.label()} className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.id} className="flex flex-col gap-1">
          {section.label && !props.compact ? <p className="readout px-3 pt-1">{section.label()}</p> : null}
          <ul className="flex flex-col gap-0.5">{section.items.map((item) => itemEntry(item, props))}</ul>
        </div>
      ))}
    </nav>
  );
}
