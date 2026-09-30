/**
 * SEO of the build page (PLAN §4.5 «Build», research/03 §6.6, research/04 «Build (BuildShare)»).
 *
 * - Title «{Name} — SOTF build (BuildShare blueprint)», shortened step by step so the full
 *   `<title>` (with the site suffix) stays within 60 characters.
 * - Description: the short description (≤ 160) or a sentence built from the facts.
 * - JSON-LD `CreativeWork` + `about: VideoGame` + `author` (+ original author as `creator`) +
 *   `interactionStatistic`; `aggregateRating` only with ≥ 3 visible reviews. The breadcrumb list
 *   is added by `PageLayout`.
 */
import { REVIEW_RULES } from '@sotf/contracts/reviews';
import { absoluteUrl, profilePath } from '@sotf/contracts/seo';
import { formatBytes, formatCompactNumber, formatNumber, type Locale, toHreflang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { CreativeWork, PropertyValue, WithContext } from 'schema-dts';
import type { JsonLd } from '../../lib/seo/jsonld.ts';
import type { BuildSpec, ModDetailDTO } from './data.ts';

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;
export const STEAM_APP_URL = 'https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/';

/** Cuts at a word boundary and adds «…» (never in the middle of a surrogate pair). */
export function truncate(value: string, max: number): string {
  const clean = value.replace(/\s+/g, ' ').trim();
  const chars = Array.from(clean);
  if (chars.length <= max) return clean;
  const cut = chars.slice(0, max - 1).join('');
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,.;:—-]+$/, '')}…`;
}

/** Page title without the site suffix (`SeoHead` adds it with the locale template). */
export function buildTitle(build: ModDetailDTO): string {
  const full = (title: string) => m.meta_title_template({ title });
  const candidates = [
    m.builds_meta_title({ name: build.name }),
    m.builds_meta_title_short({ name: build.name }),
    build.name,
  ];
  for (const candidate of candidates) {
    if (Array.from(full(candidate)).length <= TITLE_MAX) return candidate;
  }
  const suffixLength = Array.from(full('')).length;
  return truncate(build.name, Math.max(20, TITLE_MAX - suffixLength));
}

/** Meta description: the short description, or the facts. */
export function buildDescription(build: ModDetailDTO, spec: BuildSpec, locale: Locale): string {
  if (build.shortDescription.trim()) return truncate(build.shortDescription, DESCRIPTION_MAX);
  const author = build.userDisplayName || build.userHandle;
  const facts =
    spec.elements === null
      ? m.builds_meta_description_fallback({
          name: build.name,
          author,
          count: build.downloads,
          downloads: formatCompactNumber(locale, build.downloads),
        })
      : m.builds_meta_description_facts({
          name: build.name,
          author,
          pieceCount: spec.elements,
          pieces: formatNumber(locale, spec.elements),
          count: build.downloads,
          downloads: formatCompactNumber(locale, build.downloads),
        });
  return truncate(facts, DESCRIPTION_MAX);
}

export interface BuildJsonLdInput {
  build: ModDetailDTO;
  spec: BuildSpec;
  locale: Locale;
  siteUrl: string;
  /** Localised canonical URL of the page. */
  pageUrl: string;
}

/** `CreativeWork` of the build. */
export function buildJsonLd({ build, spec, locale, siteUrl, pageUrl }: BuildJsonLdInput): JsonLd[] {
  const latest = build.latestVersion;
  const author = build.author;
  const image = build.nsfw ? undefined : (build.thumbnail?.url ?? build.gallery[0]?.url);
  // `size` (CreativeWork) carries the class and the piece count; the blueprint GUID is the
  // `identifier`. Both are plain facts of the `.json`, so answer engines can quote them.
  const size =
    spec.sizeClass && spec.elements !== null
      ? `${spec.sizeClass} (${spec.elements} pieces)`
      : (spec.sizeClass ?? (spec.elements !== null ? `${spec.elements} pieces` : null));
  const identifier: PropertyValue | null = spec.guid
    ? { '@type': 'PropertyValue', propertyID: 'BuildShare GUID', value: spec.guid }
    : null;

  const work: WithContext<CreativeWork> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#build`,
    name: build.name,
    url: pageUrl,
    headline: build.name,
    description: build.shortDescription || undefined,
    genre: 'BuildShare blueprint',
    inLanguage: build.contentLang ?? toHreflang(locale),
    isAccessibleForFree: true,
    ...(image ? { image, thumbnailUrl: image } : {}),
    ...(latest
      ? {
          version: latest.version,
          encoding: {
            '@type': 'MediaObject',
            contentUrl: absoluteUrl(latest.downloadPath, siteUrl),
            encodingFormat: 'application/json',
            ...(latest.fileName ? { name: latest.fileName } : {}),
            ...(typeof latest.fileSize === 'number' ? { contentSize: formatBytes('en', latest.fileSize) } : {}),
          },
        }
      : {}),
    datePublished: build.publishedAt ?? build.createdAt,
    dateModified: build.lastReleasedAt,
    author: {
      '@type': 'Person',
      name: author.displayName || author.handle,
      alternateName: `@${author.handle}`,
      url: absoluteUrl(profilePath(author.handle), siteUrl),
    },
    ...(build.originalAuthor
      ? {
          creator: {
            '@type': 'Person',
            name: build.originalAuthor.name,
            ...(build.originalAuthor.url ? { url: build.originalAuthor.url } : {}),
          },
        }
      : spec.blueprintAuthor
        ? { creator: { '@type': 'Person', name: spec.blueprintAuthor } }
        : {}),
    publisher: { '@id': `${siteUrl}/#organization` },
    about: { '@type': 'VideoGame', name: 'Sons of the Forest', sameAs: STEAM_APP_URL },
    keywords: ['Sons of the Forest', 'BuildShare', 'blueprint', ...build.tags.map((tag) => tag.name)].join(', '),
    ...(size ? { size } : {}),
    ...(identifier ? { identifier } : {}),
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'DownloadAction' },
        userInteractionCount: build.downloads,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'LikeAction' },
        userInteractionCount: build.followers,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'CommentAction' },
        userInteractionCount: build.commentsCount,
      },
    ],
  } as WithContext<CreativeWork>;

  const summary = build.reviewsSummary;
  if (summary.showStars && summary.count >= REVIEW_RULES.publicStarsMinReviews && summary.average !== null) {
    work.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: Math.round(summary.average * 10) / 10,
      ratingCount: summary.count,
      reviewCount: summary.count,
      bestRating: 5,
      worstRating: 1,
    };
  }
  return [work];
}
