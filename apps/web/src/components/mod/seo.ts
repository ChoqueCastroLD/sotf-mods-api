/**
 * SEO of the mod pages (PLAN §4.5 «Mod», research/03 §6.3 «SEO/GEO»).
 *
 * - Title «{Name} — Sons of the Forest mod by {author} | SOTF Mods», shortened step by step so the
 *   full `<title>` stays within 60 characters.
 * - Description: `shortDescription` (≤ 160) or, when missing, a sentence built from the facts.
 * - JSON-LD `SoftwareApplication` (+ `VideoObject` when there is a trailer). `aggregateRating`
 *   only with ≥ 3 visible reviews (`reviewsSummary.showStars`).
 */
import { REVIEW_RULES } from '@sotf/contracts/reviews';
import { absoluteUrl, profilePath } from '@sotf/contracts/seo';
import { formatBytes, formatCompactNumber, type Locale, toHreflang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { SoftwareApplication, VideoObject, WithContext } from 'schema-dts';
import type { JsonLd } from '../../lib/seo/jsonld.ts';
import type { ModDetailDTO } from './data.ts';
import { licenseHref } from './i18n.ts';

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;
export const STEAM_APP_URL = 'https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/';

/** Cuts at a word boundary and adds «…» (never in the middle of a surrogate pair). */
export function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  const chars = Array.from(clean);
  if (chars.length <= max) return clean;
  const cut = chars.slice(0, max - 1).join('');
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,.;:—-]+$/, '')}…`;
}

/** Page title (without the site suffix, which `SeoHead` adds with the locale template). */
export function modTitle(mod: ModDetailDTO): string {
  const author = mod.userDisplayName || mod.userHandle;
  const full = (title: string) => m.meta_title_template({ title });
  const candidates = [
    m.mod_meta_title({ name: mod.name, author, kind: mod.kind }),
    m.mod_meta_title_short({ name: mod.name, kind: mod.kind }),
    mod.name,
  ];
  for (const candidate of candidates) {
    if (Array.from(full(candidate)).length <= TITLE_MAX) return candidate;
  }
  const suffixLength = Array.from(full('')).length;
  return truncate(mod.name, Math.max(20, TITLE_MAX - suffixLength));
}

/** Title of a sub-page («Versions of X», «Reviews of X»). */
export function subpageTitle(label: string, mod: ModDetailDTO): string {
  const full = (title: string) => m.meta_title_template({ title });
  const title = m.mod_meta_subpage_title({ page: label, name: mod.name });
  if (Array.from(full(title)).length <= TITLE_MAX) return title;
  const suffixLength = Array.from(full('')).length;
  return truncate(title, Math.max(20, TITLE_MAX - suffixLength));
}

/** Meta description: the short description, or the facts. */
export function modDescription(mod: ModDetailDTO, locale: Locale): string {
  if (mod.shortDescription.trim()) return truncate(mod.shortDescription, DESCRIPTION_MAX);
  const facts = m.mod_meta_description_facts({
    name: mod.name,
    author: mod.userDisplayName || mod.userHandle,
    kind: mod.kind,
    downloads: formatCompactNumber(locale, mod.downloads),
    count: mod.downloads,
  });
  return truncate(facts, DESCRIPTION_MAX);
}

export interface ModJsonLdInput {
  mod: ModDetailDTO;
  locale: Locale;
  siteUrl: string;
  /** Localised canonical URL of the page. */
  pageUrl: string;
}

/** `SoftwareApplication` of the mod (+ `VideoObject` of the trailer). */
export function modJsonLd({ mod, locale, siteUrl, pageUrl }: ModJsonLdInput): JsonLd[] {
  const latest = mod.latestVersion;
  const author = mod.author;
  const licenseUrl = mod.license ? licenseHref(mod.license) : null;
  const image = mod.nsfw ? undefined : (mod.thumbnail?.url ?? mod.gallery[0]?.url);
  const app: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${pageUrl}#software`,
    name: mod.name,
    url: pageUrl,
    description: mod.shortDescription || undefined,
    applicationCategory: 'GameApplication',
    applicationSubCategory: mod.category?.name ?? (mod.kind === 'library' ? 'Library' : 'Mod'),
    operatingSystem: 'Windows',
    inLanguage: mod.contentLang ?? toHreflang(locale),
    ...(image ? { image } : {}),
    ...(latest
      ? {
          softwareVersion: latest.version,
          downloadUrl: absoluteUrl(latest.downloadPath, siteUrl),
          ...(typeof latest.fileSize === 'number' ? { fileSize: formatBytes('en', latest.fileSize) } : {}),
        }
      : {}),
    softwareRequirements: 'Sons of the Forest (Steam), RedLoader',
    datePublished: mod.publishedAt ?? mod.createdAt,
    dateModified: mod.lastReleasedAt,
    ...(licenseUrl ? { license: licenseUrl } : {}),
    author: {
      '@type': 'Person',
      name: author.displayName || author.handle,
      alternateName: `@${author.handle}`,
      url: absoluteUrl(profilePath(author.handle), siteUrl),
    },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    about: {
      '@type': 'VideoGame',
      name: 'Sons of the Forest',
      sameAs: STEAM_APP_URL,
    },
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'DownloadAction' },
        userInteractionCount: mod.downloads,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'LikeAction' },
        userInteractionCount: mod.followers,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'CommentAction' },
        userInteractionCount: mod.commentsCount,
      },
    ],
    ...(mod.sourceUrl ? { sameAs: mod.sourceUrl } : {}),
  };
  const summary = mod.reviewsSummary;
  if (summary.showStars && summary.count >= REVIEW_RULES.publicStarsMinReviews && summary.average !== null) {
    app.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: Math.round(summary.average * 10) / 10,
      ratingCount: summary.count,
      reviewCount: summary.count,
      bestRating: 5,
      worstRating: 1,
    };
  }
  const graph: JsonLd[] = [app];
  if (mod.video) {
    const video: WithContext<VideoObject> = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: m.mod_video_title({ name: mod.name }),
      description: mod.shortDescription || m.mod_video_title({ name: mod.name }),
      thumbnailUrl: `https://i.ytimg.com/vi/${encodeURIComponent(mod.video.id)}/hqdefault.jpg`,
      uploadDate: mod.publishedAt ?? mod.createdAt,
      contentUrl: mod.video.url,
      embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(mod.video.id)}`,
      about: { '@id': `${pageUrl}#software` },
    };
    graph.push(video);
  }
  return graph;
}
