/**
 * Result list of an Explore page (server-rendered, never hydrated): `ModCard` in the grid, row
 * or compact layout (`BuildCard` for builds in the grid), inside one `DomainI18nProvider` tree.
 * Every item is an `<li data-explore-item>` so «Load more» can append the next page's items
 * as they come from the server.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { type Locale, localizePath } from '@sotf/i18n';
import { cn } from '@sotf/ui/cn';
import {
  AdSlot,
  BuildCard,
  BuildCardSkeleton,
  type DomainI18n,
  DomainI18nProvider,
  ModCard,
  ModCardSkeleton,
  modDownloadHref,
} from '@sotf/ui/domain';
import { Fragment } from 'react';
import { type AdUnit, feedAdAfter } from '../../lib/ads.ts';
import type { ExploreView } from './state.ts';

export const LIST_CLASSES: Record<ExploreView, string> = {
  grid: 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3',
  list: 'grid grid-cols-1 gap-3',
  compact: 'grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3',
};

export interface ExploreResultsProps {
  items: readonly ModCardDTO[];
  view: ExploreView;
  locale: Locale;
  i18n: DomainI18n;
  /** Heading level of the card titles (2 on hubs without section headings, 3 otherwise). */
  headingLevel?: 2 | 3;
  /** The first card is the LCP candidate (page 1 above the fold). */
  priorityFirst?: boolean;
  /** Position offset of the first item (1-based positions for `ItemList`). */
  offset?: number;
  /**
   * In-feed ad unit for guests (PLAN §8.5: grid view, first page, after the 6th and 18th card).
   * Null when ads are off. The `<li>` carries no `data-explore-item`, so «Load more», positions
   * and JSON-LD ignore it.
   */
  ad?: AdUnit | null;
  className?: string;
}

/** A card DTO whose links point to the page's locale. */
function localized(mod: ModCardDTO, locale: Locale): ModCardDTO {
  return { ...mod, canonicalPath: localizePath(mod.canonicalPath, locale) };
}

export function ExploreItems({
  items,
  view,
  locale,
  headingLevel = 3,
  priorityFirst = false,
  offset = 0,
  ad = null,
}: Omit<ExploreResultsProps, 'i18n' | 'className'>) {
  const withAds = ad !== null && view === 'grid' && offset === 0;
  return (
    <>
      {items.map((mod, index) => {
        const card = localized(mod, locale);
        const priority = priorityFirst && index === 0;
        const adAfter = withAds && feedAdAfter(index + 1, items.length);
        return (
          <Fragment key={mod.id}>
            <li data-explore-item="" data-position={offset + index + 1} className="min-w-0">
              {view === 'grid' && mod.kind === 'build' ? (
                <BuildCard build={card} headingLevel={headingLevel} priority={priority} className="h-full" />
              ) : (
                <ModCard
                  mod={card}
                  variant={view === 'grid' ? 'grid' : view === 'list' ? 'row' : 'compact'}
                  headingLevel={headingLevel}
                  priority={priority}
                  downloadHref={modDownloadHref(mod)}
                  className="h-full"
                />
              )}
            </li>
            {adAfter && ad ? (
              <li data-explore-ad="" className="min-w-0">
                <AdSlot format="in-feed" client={ad.client} slot={ad.slot} showNotice className="h-full" />
              </li>
            ) : null}
          </Fragment>
        );
      })}
    </>
  );
}

export default function ExploreResults(props: ExploreResultsProps) {
  const { i18n, view, className } = props;
  return (
    <DomainI18nProvider value={i18n}>
      <ul data-explore-items="" data-view={view} className={cn(LIST_CLASSES[view], className)}>
        <ExploreItems {...props} />
      </ul>
    </DomainI18nProvider>
  );
}

/** Loading placeholder with the geometry of the list (shown by the script after 300 ms). */
export function ExploreSkeleton({
  view,
  builds = false,
  count = 6,
}: {
  view: ExploreView;
  builds?: boolean;
  count?: number;
}) {
  return (
    <ul aria-hidden="true" className={LIST_CLASSES[view]}>
      {Array.from({ length: count }, (_, index) => (
        <li key={index}>
          {view === 'grid' && builds ? (
            <BuildCardSkeleton />
          ) : (
            <ModCardSkeleton variant={view === 'grid' ? 'grid' : view === 'list' ? 'row' : 'compact'} />
          )}
        </li>
      ))}
    </ul>
  );
}
