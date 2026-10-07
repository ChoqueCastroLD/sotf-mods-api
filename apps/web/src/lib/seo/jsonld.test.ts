/**
 * Structured data checks: every JSON-LD builder of the site is run on realistic input and validated
 * against the properties Google's structured data documentation requires or recommends
 * (https://developers.google.com/search/docs/appearance/structured-data), plus the format rules
 * that make a graph invalid (relative URLs, bad dates, non sequential positions).
 */
import { ModDetailDTO, UserPublicDTO } from '@sotf/contracts/catalog';
import { exampleOf } from '@sotf/contracts/dto';
import { describe, expect, it } from 'vitest';
import { buildJsonLd } from '../../components/builds/seo.ts';
import { collectionJsonLd } from '../../components/explore/seo.ts';
import { modJsonLd } from '../../components/mod/seo.ts';
import { profileJsonLd } from '../../components/profile/seo.ts';
import {
  breadcrumbJsonLd,
  itemListJsonLd,
  type JsonLd,
  jamEventJsonLd,
  organizationJsonLd,
  requestPostingJsonLd,
  serializeJsonLd,
  websiteJsonLd,
} from './jsonld.ts';

const SITE = 'https://sotf-mods.com';

type Node = Record<string, unknown>;

const ABSOLUTE_URL = /^https:\/\/[^\s]+$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}(T[\d:.]+(Z|[+-]\d{2}:\d{2})?)?$/;

/** Walks a value and collects every problem found under `path`. */
function validate(value: unknown, path: string, problems: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      validate(item, `${path}[${index}]`, problems);
    });
    return;
  }
  if (value === null || typeof value !== 'object') return;
  const node = value as Node;
  for (const [key, child] of Object.entries(node)) {
    if (child === undefined) problems.push(`${path}.${key} is undefined`);
    if (child === '') problems.push(`${path}.${key} is empty`);
    if (
      typeof child === 'string' &&
      /(^|[a-z])(url|Url|URL)$/.test(key) &&
      key !== 'urlTemplate' &&
      !ABSOLUTE_URL.test(child)
    )
      problems.push(`${path}.${key} is not an absolute https URL: ${child}`);
    if (
      typeof child === 'string' &&
      /^(datePublished|dateModified|startDate|endDate|uploadDate|dateCreated)$/.test(key) &&
      !ISO_DATE.test(child)
    )
      problems.push(`${path}.${key} is not an ISO date: ${child}`);
    if (typeof child === 'number' && !Number.isFinite(child)) problems.push(`${path}.${key} is not finite`);
    validate(child, `${path}.${key}`, problems);
  }
  // Nested nodes are references (author, organizer, hasPart): only top-level nodes need the full set.
  if (!/^\[\d+\]$/.test(path)) return;
  const type = node['@type'];
  const need = (...keys: string[]) => {
    for (const key of keys) if (node[key] === undefined) problems.push(`${path} (${String(type)}) misses ${key}`);
  };
  switch (type) {
    case 'WebSite':
      need('name', 'url', 'potentialAction');
      break;
    case 'Organization':
      need('name', 'url', 'logo', 'sameAs');
      break;
    case 'SoftwareApplication':
      need('name', 'applicationCategory', 'operatingSystem', 'offers');
      break;
    case 'Event':
      need('name', 'startDate', 'location');
      break;
    case 'ItemList':
      need('itemListElement');
      break;
    case 'ListItem':
      need('position');
      break;
    case 'DiscussionForumPosting':
      need('headline', 'author', 'datePublished', 'url');
      break;
    case 'ProfilePage':
      need('mainEntity');
      break;
    case 'Person':
    case 'CreativeWork':
      need('name');
      break;
    case 'AggregateRating':
      need('ratingValue');
      if (!(typeof node.ratingCount === 'number' || typeof node.reviewCount === 'number'))
        problems.push(`${path} needs ratingCount or reviewCount`);
      break;
    default:
  }
}

function check(graph: JsonLd | readonly JsonLd[]): string[] {
  const problems: string[] = [];
  const nodes = Array.isArray(graph) ? graph : [graph];
  nodes.forEach((node, index) => {
    if ((node as Node)['@context'] !== 'https://schema.org') problems.push(`[${index}] misses @context`);
    validate(node, `[${index}]`, problems);
  });
  // Serializes to valid JSON that cannot close the script element.
  const out = serializeJsonLd(graph as JsonLd);
  expect(() => JSON.parse(out)).not.toThrow();
  expect(out).not.toMatch(/[<>&]/);
  return problems;
}

describe('structured data builders validate', () => {
  it('WebSite with SearchAction, Organization with logo and sameAs', () => {
    const org = organizationJsonLd(SITE) as unknown as Node;
    expect(org.logo).toBe(`${SITE}/brand/logo.png`);
    const same = (org.sameAs as string[]).join(' ');
    expect(same).toContain('discord.gg');
    expect(same).toContain('youtube.com');
    expect(same).toContain('github.com');
    expect(check([websiteJsonLd(SITE, 'en', '/search'), organizationJsonLd(SITE)])).toEqual([]);
  });

  it('BreadcrumbList positions are sequential and the last crumb has no link', () => {
    const crumbs = breadcrumbJsonLd([
      { name: 'Home', url: `${SITE}/` },
      { name: 'Mods', url: `${SITE}/mods` },
      { name: 'Axel' },
    ]);
    expect(check(crumbs)).toEqual([]);
    expect((crumbs.itemListElement as unknown as Node[]).map((item) => item.position)).toEqual([1, 2, 3]);
  });

  it('ItemList of a listing continues positions across pages', () => {
    const list = itemListJsonLd({
      url: `${SITE}/requests?page=2`,
      name: 'Requests',
      offset: 20,
      items: [
        { name: 'A', url: `${SITE}/requests/1` },
        { name: 'B', url: `${SITE}/requests/2` },
      ],
    });
    expect(check(list)).toEqual([]);
    expect((list.itemListElement as unknown as Node[]).map((item) => item.position)).toEqual([21, 22]);
  });

  it('Event of a jam', () => {
    const event = jamEventJsonLd({
      name: 'Winter jam',
      description: 'Build a mod in two weeks.',
      url: `${SITE}/jams/winter`,
      startDate: '2026-12-01T00:00:00.000Z',
      endDate: '2026-12-15T00:00:00.000Z',
      image: `${SITE}/brand/og-default.png`,
      organizerName: 'SOTF Mods',
      organizerUrl: SITE,
    });
    expect(check(event)).toEqual([]);
  });

  it('DiscussionForumPosting of a request', () => {
    const post = requestPostingJsonLd({
      url: `${SITE}/requests/31`,
      headline: 'A ziplines overlay',
      text: 'Would love an overlay.',
      authorName: 'Cook Log',
      authorUrl: `${SITE}/profile/cooklog`,
      datePublished: '2026-09-27T20:00:00.000Z',
      dateModified: null,
      votes: 42,
      comments: 6,
      locale: 'en',
    });
    expect(check(post)).toEqual([]);
  });

  it('SoftwareApplication of a mod: free offer, download counter, rating only with real reviews', () => {
    const mod = exampleOf(ModDetailDTO) as never as Parameters<typeof modJsonLd>[0]['mod'];
    const noReviews = { ...mod, reviewsSummary: { ...mod.reviewsSummary, count: 0, average: null, showStars: false } };
    const graph = modJsonLd({
      mod: noReviews,
      locale: 'en',
      siteUrl: SITE,
      pageUrl: `${SITE}/mods/imaxel/axels-mod-menu`,
    });
    expect(check(graph)).toEqual([]);
    const app = graph[0] as Node;
    expect(app['@type']).toBe('SoftwareApplication');
    expect(app.aggregateRating).toBeUndefined();
    expect((app.offers as Node).price).toBe('0');
    expect(JSON.stringify(app.interactionStatistic)).toContain('DownloadAction');
    const reviewed = {
      ...mod,
      reviewsSummary: { ...mod.reviewsSummary, count: 12, average: 4.5, showStars: true },
    };
    const rated = modJsonLd({
      mod: reviewed,
      locale: 'en',
      siteUrl: SITE,
      pageUrl: `${SITE}/mods/imaxel/axels-mod-menu`,
    })[0] as Node;
    expect(check(rated as never)).toEqual([]);
    expect((rated.aggregateRating as Node).ratingCount).toBe(12);
  });

  it('CreativeWork of a build', () => {
    const build = exampleOf(ModDetailDTO) as never as Parameters<typeof buildJsonLd>[0]['build'];
    const graph = buildJsonLd({
      build,
      spec: {
        elements: 4125,
        structures: 2,
        buildShareVersion: '0.0.16',
        guid: 'abc',
        blueprintAuthor: null,
        sizeClass: null,
      },
      locale: 'en',
      siteUrl: SITE,
      pageUrl: `${SITE}/builds/imaxel/axels-cabin`,
    });
    expect(check(graph)).toEqual([]);
    expect((graph[0] as Node)['@type']).toBe('CreativeWork');
  });

  it('ProfilePage of a creator and CollectionPage of a listing', () => {
    const user = exampleOf(UserPublicDTO) as never as Parameters<typeof profileJsonLd>[0]['user'];
    expect(check(profileJsonLd({ user, locale: 'en', siteUrl: SITE, pageUrl: `${SITE}/profile/imaxel` }))).toEqual([]);
    const collection = collectionJsonLd({
      siteUrl: SITE,
      locale: 'en',
      path: '/mods',
      name: 'Mods',
      description: 'All mods.',
      items: [],
    });
    expect(collection['@type']).toBe('CollectionPage');
  });
});
