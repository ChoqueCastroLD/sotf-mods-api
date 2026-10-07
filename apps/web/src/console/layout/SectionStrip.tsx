/**
 * The places of the current area as a horizontally scrolling strip under the phone's top bar
 * (replaces the hamburger menu): snap-scrolled pills, the current one centred, with a soft edge
 * fade where more is hidden.
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Link, type LinkProps } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { type AreaId, findArea, isActivePath, phoneItems, type Viewer } from '../lib/navigation.ts';

export function SectionStrip({ area, viewer, pathname }: { area: AreaId; viewer: Viewer; pathname: string }) {
  const items = phoneItems(findArea(area), viewer);
  const list = useRef<HTMLUListElement>(null);
  const activeTo = items.find((item) => isActivePath(pathname, item))?.to;

  // Bring the current place into view (after a deep link or when switching areas).
  useEffect(() => {
    const current = list.current?.querySelector<HTMLElement>('[aria-current="page"]');
    const container = list.current;
    if (!current || !container) return;
    const target = current.offsetLeft - (container.clientWidth - current.clientWidth) / 2;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.scrollTo({ left: target, behavior: reduce ? 'auto' : 'smooth' });
  }, [activeTo, area]);

  if (items.length === 0) return null;
  return (
    <nav
      aria-label={findArea(area).label()}
      className="relative border-b border-border bg-bg/95 supports-[backdrop-filter]:bg-bg/85 supports-[backdrop-filter]:backdrop-blur-md md:hidden"
    >
      <ul
        ref={list}
        className="relative flex snap-x snap-proximity gap-2 overflow-x-auto px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const active = isActivePath(pathname, item);
          return (
            <li key={item.to} className="shrink-0 snap-start">
              <Link
                to={item.to as LinkProps['to']}
                activeOptions={{ exact: item.exact === true }}
                aria-current={active ? 'page' : 'false'}
                className={cn(
                  'inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm font-semibold whitespace-nowrap transition-colors',
                  active
                    ? 'border-primary bg-primary text-primary-fg'
                    : 'border-border bg-surface text-fg-muted active:bg-fg/8',
                )}
              >
                <Icon icon={item.icon} size={15} />
                {item.label()}
              </Link>
            </li>
          );
        })}
      </ul>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 end-0 w-6 bg-gradient-to-l from-bg/90 to-transparent"
      />
    </nav>
  );
}
