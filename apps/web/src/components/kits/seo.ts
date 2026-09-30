/**
 * SEO of the kit pages (PLAN §4.5, §7.8 «se indexan los kits públicos con ≥ 3 elementos»).
 *
 * - Listing: `CollectionPage` + `ItemList` of the kits on the page.
 * - Detail: `CollectionPage` whose `ItemList` holds the kit's mods in order (`SoftwareApplication`
 *   references), with the curator as `author`, `dateModified` and the revision as `version`.
 *   `noindex` comes from the API (public kits with fewer than 3 items, unlisted kits).
 */
import { absoluteUrl, profilePath } from '@sotf/contracts/seo';
import { type Locale, localizePath, toHreflang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { CollectionPage, WithContext } from 'schema-dts';
import { truncate } from '../mod/seo.ts';
import type { KitCardDTO, KitDTO } from './data.ts';

export const DESCRIPTION_MAX = 160;

/** Page title (the site suffix is added by `SeoHead`). */
export function kitTitle(kit: KitDTO): string {
  const curator = kit.owner.displayName || kit.owner.handle;
  const full = m.kits_meta_title({ name: kit.name, curator });
  return full.length <= 48 ? full : truncate(kit.name, 48);
}

/** Plain text of the description HTML (first paragraph-ish), for the meta description. */
function plainText(html: string | null): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function kitDescription(kit: KitDTO): string {
  const text = plainText(kit.descriptionHtml);
  const curator = kit.owner.displayName || kit.owner.handle;
  const names = kit.items
    .filter((item) => !item.isAutoDependency)
    .slice(0, 3)
    .map((item) => item.mod.name);
  const facts = m.kits_meta_description({ name: kit.name, curator, count: kit.items.length, mods: names.join(', ') });
  return truncate(text ? `${text} — ${facts}` : facts, DESCRIPTION_MAX);
}

export function kitJsonLd(input: {
  kit: KitDTO;
  locale: Locale;
  siteUrl: string;
  description: string;
}): WithContext<CollectionPage> {
  const { kit, locale, siteUrl, description } = input;
  const url = absoluteUrl(localizePath(kit.canonicalPath, locale), siteUrl);
  const image = kit.cover?.url ?? kit.previewThumbnails[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#kit`,
    name: kit.name,
    description,
    url,
    inLanguage: toHreflang(locale),
    isPartOf: { '@id': `${siteUrl}/#website` },
    dateCreated: kit.createdAt,
    dateModified: kit.updatedAt,
    version: String(kit.revision),
    ...(image ? { image } : {}),
    author: {
      '@type': 'Person',
      name: kit.owner.displayName || kit.owner.handle,
      url: absoluteUrl(localizePath(profilePath(kit.owner.handle), locale), siteUrl),
    },
    ...(kit.forkedFrom ? { isBasedOn: absoluteUrl(localizePath(kit.forkedFrom.canonicalPath, locale), siteUrl) } : {}),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: kit.items.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: kit.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(localizePath(item.mod.canonicalPath, locale), siteUrl),
        name: item.mod.name,
      })),
    },
  };
}

export function kitListJsonLd(input: {
  siteUrl: string;
  locale: Locale;
  path: string;
  name: string;
  description: string;
  items: readonly KitCardDTO[];
  offset: number;
}): WithContext<CollectionPage> {
  const { siteUrl, locale, path, name, description, items, offset } = input;
  const url = absoluteUrl(localizePath(path, locale), siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name,
    description,
    url,
    inLanguage: toHreflang(locale),
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((kit, index) => ({
        '@type': 'ListItem',
        position: offset + index + 1,
        url: absoluteUrl(localizePath(kit.canonicalPath, locale), siteUrl),
        name: kit.name,
      })),
    },
  };
}
