/**
 * Typed JSON-LD builders (`schema-dts`) shared by every public page (PLAN §4.5, §8.7) and the safe
 * serializer used by `SeoHead`. Page-specific graphs (SoftwareApplication, ProfilePage…) are
 * built by the page's WP with the same types and passed to `SeoHead`'s `jsonLd` prop.
 */
import type { Locale } from '@sotf/i18n';
import { toHreflang } from '@sotf/i18n';
import type { BreadcrumbList, Event, Organization, Thing, WebSite, WithContext } from 'schema-dts';
import { LOGO_PATH, SOCIAL_LINKS } from '../site.ts';

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
    logo: `${siteUrl}${LOGO_PATH}`,
    sameAs: [SOCIAL_LINKS.discord, SOCIAL_LINKS.github],
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
