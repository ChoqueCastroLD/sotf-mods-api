/**
 * Typed JSON-LD builders (`schema-dts`) shared by every public page (PLAN §4.5, §8.7) and the safe
 * serializer used by `SeoHead`. Page-specific graphs (SoftwareApplication, ProfilePage…) are
 * built by the page's WP with the same types and passed to `SeoHead`'s `jsonLd` prop.
 */
import type { Locale } from '@sotf/i18n';
import { toHreflang } from '@sotf/i18n';
import type {
  BreadcrumbList,
  DiscussionForumPosting,
  Event,
  ItemList,
  Organization,
  Thing,
  WebSite,
  WithContext,
} from 'schema-dts';
import { ORG_LOGO_PATH, SOCIAL_LINKS } from '../site.ts';

export type JsonLd = WithContext<Thing>;

/**
 * Serializes JSON-LD for an inline `<script type="application/ld+json">`: escapes `<`, `>`, `&`
 * and the line separators so user-provided strings can never close the script element.
 */
export function serializeJsonLd(data: JsonLd | readonly JsonLd[]): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

/** `Organization` node: the entity behind the site (E-E-A-T, `sameAs`). */
export function organizationJsonLd(siteUrl: string): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'SOTF Mods',
    url: `${siteUrl}/`,
    logo: `${siteUrl}${ORG_LOGO_PATH}`,
    sameAs: [SOCIAL_LINKS.discord, SOCIAL_LINKS.youtube, SOCIAL_LINKS.github],
  };
}

/** `WebSite` node with the site search action (landing, PLAN §4.5). */
export function websiteJsonLd(siteUrl: string, locale: Locale, searchPath: string): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'SOTF Mods',
    alternateName: ['sotf-mods.com', 'Sons of the Forest Mods'],
    url: `${siteUrl}/`,
    inLanguage: toHreflang(locale),
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}${searchPath}?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    } as WebSite['potentialAction'],
  };
}

export interface Crumb {
  name: string;
  /** Absolute URL; omit on the last crumb (the current page). */
  url?: string;
}

/** `BreadcrumbList` (positions start at 1). */
export function breadcrumbJsonLd(crumbs: readonly Crumb[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.url ? { item: crumb.url } : {}),
    })),
  };
}

export interface JamEventInput {
  name: string;
  description: string;
  /** Absolute canonical URL of the jam page. */
  url: string;
  /** Start of the jam (first milestone) and its end, ISO 8601. */
  startDate: string | null;
  endDate: string | null;
  image: string | null;
  organizerName: string;
  organizerUrl: string;
}

/** `Event` node of a Mod Jam: an online, free, community event with a start and an end. */
export function jamEventJsonLd(input: JamEventInput): WithContext<Event> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: input.name,
    description: input.description,
    url: input.url,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: { '@type': 'VirtualLocation', url: input.url },
    ...(input.startDate ? { startDate: input.startDate } : {}),
    ...(input.endDate ? { endDate: input.endDate } : {}),
    ...(input.image ? { image: input.image } : {}),
    isAccessibleForFree: true,
    organizer: { '@type': 'Organization', name: input.organizerName, url: input.organizerUrl },
  };
}

export interface ItemListInput {
  /** Absolute URL of the listing page. */
  url: string;
  name: string;
  items: ReadonlyArray<{ name: string; url: string }>;
  /** Items before this page (positions continue across pages). */
  offset?: number;
}

/** `ItemList` of a listing page: one `ListItem` per entry with its absolute URL. */
export function itemListJsonLd(input: ItemListInput): WithContext<ItemList> {
  const offset = input.offset ?? 0;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${input.url}#list`,
    name: input.name,
    url: input.url,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      '@type': 'ListItem',
      position: offset + index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export interface RequestPostingInput {
  /** Absolute canonical URL of the request page. */
  url: string;
  headline: string;
  /** Plain text of the request body (may be empty). */
  text: string;
  authorName: string | null;
  authorUrl: string | null;
  datePublished: string;
  dateModified: string | null;
  votes: number;
  comments: number;
  locale: Locale;
}

/** `DiscussionForumPosting` of a mod request: the ask, its votes and its comment count. */
export function requestPostingJsonLd(input: RequestPostingInput): WithContext<DiscussionForumPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    '@id': `${input.url}#request`,
    headline: input.headline,
    url: input.url,
    inLanguage: toHreflang(input.locale),
    datePublished: input.datePublished,
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(input.text ? { text: input.text } : {}),
    author: {
      '@type': 'Person',
      name: input.authorName ?? 'Deleted user',
      ...(input.authorUrl ? { url: input.authorUrl } : {}),
    },
    commentCount: input.comments,
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'LikeAction' },
        userInteractionCount: input.votes,
      },
    ],
  };
}
