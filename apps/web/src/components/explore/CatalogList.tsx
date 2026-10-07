/**
 * The mod list of the catalogue (server-rendered, never hydrated): one `ModCard` `list` row per
 * mod, separated by hairlines, inside one `DomainI18nProvider` tree. In-feed ad units (guests
 * only) sit between rows after the 6th and 18th mod of the first page.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { type Locale, localizePath } from '@sotf/i18n';
import { AdSlot, type DomainI18n, DomainI18nProvider, ModCard, type ModCardListLabels } from '@sotf/ui/domain';
import { Fragment } from 'react';
import { type AdUnit, feedAdAfter } from '../../lib/ads.ts';

export interface CatalogListProps {
  items: readonly ModCardDTO[];
  locale: Locale;
  i18n: DomainI18n;
  labels: ModCardListLabels;
  /** Reference instant of the relative «updated» times (the render time). */
  now: number;
  /** The first row is the LCP candidate (page 1). */
  priorityFirst?: boolean;
  /** Number of items before this page (1-based positions for `ItemList`). */
  offset?: number;
  ad?: AdUnit | null;
}

export default function CatalogList({
  items,
  locale,
  i18n,
  labels,
  now,
  priorityFirst = false,
  offset = 0,
  ad = null,
}: CatalogListProps) {
  const withAds = ad !== null && offset === 0;
  return (
    <DomainI18nProvider value={i18n}>
      <ul data-catalog-items="" className="flex flex-col divide-y divide-border">
        {items.map((mod, index) => {
          const card = { ...mod, canonicalPath: localizePath(mod.canonicalPath, locale) };
          const adAfter = withAds && feedAdAfter(index + 1, items.length);
          return (
            <Fragment key={mod.id}>
              <li data-position={offset + index + 1} className="min-w-0">
                <ModCard
                  mod={card}
                  variant="list"
                  headingLevel={2}
                  labels={labels}
                  now={now}
                  priority={priorityFirst && index < 2}
                />
              </li>
              {adAfter && ad ? (
                <li className="min-w-0 py-4">
                  <AdSlot format="in-feed" client={ad.client} slot={ad.slot} showNotice />
                </li>
              ) : null}
            </Fragment>
          );
        })}
      </ul>
    </DomainI18nProvider>
  );
}
