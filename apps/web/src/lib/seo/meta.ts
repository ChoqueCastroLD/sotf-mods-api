/**
 * Head metadata of a public page (PLAN §4.5 «Reglas comunes»): localized title (≤ 60),
 * description (≤ 160), self-referencing canonical per locale, the 13-locale hreflang cluster +
 * `x-default`, Open Graph / Twitter, `theme-color` and robots. Pure: `SeoHead.astro` renders it.
 */

import { themeColor } from '@sotf/brand/colors';
import {
  DEFAULT_LOCALE,
  hreflangAlternates,
  LOCALES,
  type Locale,
  localizePath,
  toHtmlLang,
  toOgLocale,
} from '@sotf/i18n';
import { OG_DEFAULT_PATH, OG_DEFAULT_SIZE } from '../site.ts';

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

export interface SeoInput {
  /** Page title without the site suffix (or the full title with `rawTitle`). */
  title: string;
  /** Use `title` as is (the landing page). */
  rawTitle?: boolean;
  /** `{title} | SOTF Mods` template of the locale (from the `meta` namespace). */
  titleTemplate: (title: string) => string;
  description: string;
  locale: Locale;
  /** Locale-less path + query of the canonical URL (`/mods?page=2`). */
  path: string;
  /** Public origin (`https://sotf-mods.com`). */
  siteUrl: string;
  /** `noindex, follow` (filters, auth, search, error pages, non-production). */
  noindex?: boolean;
  /**
   * Publish the hreflang cluster (default). Only for pages whose UI is localized in all 13
   * locales (PLAN §4.5); untranslated guides and search results set `false` (guides also point
   * `canonicalLocale` to `en`).
   */
  alternates?: boolean;
  /** Locale of the canonical URL when the page is not translated (default: the page locale). */
  canonicalLocale?: Locale;
  /** Omit the canonical link (error pages have no canonical URL). */
  canonical?: boolean;
  og?: {
    /** Absolute URL or root-relative path of a 1200×630 image. */
    image?: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    type?: 'website' | 'article' | 'profile';
  };
  /** NSFW pages: `<meta name="rating" content="adult">` and no explicit OG image (PLAN §4.5). */
  adult?: boolean;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  media?: string;
}

export interface LinkTag {
  rel: string;
  href: string;
  hreflang?: string;
}

export interface SeoHeadData {
  lang: string;
  title: string;
  metas: MetaTag[];
  links: LinkTag[];
}

/** Truncates to `max` characters on a word boundary with an ellipsis. */
export function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:.–—-]+$/, '')}…`;
}

function absolute(siteUrl: string, pathOrUrl: string): string {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${siteUrl}${pathOrUrl}`;
}

export function buildSeoHead(input: SeoInput): SeoHeadData {
  const siteUrl = input.siteUrl.replace(/\/+$/, '');
  const fullTitle = input.rawTitle ? input.title : input.titleTemplate(input.title);
  const title = truncate(fullTitle, TITLE_MAX);
  const description = truncate(input.description, DESCRIPTION_MAX);
  const canonicalLocale = input.canonicalLocale ?? input.locale;
  const canonicalPath = localizePath(input.path.split('#', 1)[0] ?? '/', canonicalLocale);
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const links: LinkTag[] = [];
  if (input.canonical !== false) links.push({ rel: 'canonical', href: canonicalUrl });
  if (input.alternates !== false) {
    for (const alternate of hreflangAlternates(input.path, siteUrl)) {
      links.push({ rel: 'alternate', hreflang: alternate.hreflang, href: alternate.href });
    }
  }

  const og = input.og;
  const metas: MetaTag[] = [
    { name: 'description', content: description },
    {
      name: 'robots',
      content: input.noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    { name: 'theme-color', content: themeColor.night, media: '(prefers-color-scheme: dark)' },
    { name: 'theme-color', content: themeColor.day, media: '(prefers-color-scheme: light)' },
    { property: 'og:site_name', content: 'SOTF Mods' },
    { property: 'og:type', content: og?.type ?? 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:locale', content: toOgLocale(input.locale) },
  ];
  if (input.alternates !== false) {
    for (const locale of LOCALES) {
      if (locale !== input.locale) metas.push({ property: 'og:locale:alternate', content: toOgLocale(locale) });
    }
  }
  if (input.adult) {
    metas.push({ name: 'rating', content: 'adult' });
  } else {
    const image = og?.image ?? OG_DEFAULT_PATH;
    // The default card is known to be 1200 x 630; a custom image without sizes states none
    // (a wrong size makes scrapers crop or reject the card).
    const width = og?.imageWidth ?? (og?.image ? undefined : OG_DEFAULT_SIZE.width);
    const height = og?.imageHeight ?? (og?.image ? undefined : OG_DEFAULT_SIZE.height);
    metas.push(
      { property: 'og:image', content: absolute(siteUrl, image) },
      { property: 'og:image:alt', content: og?.imageAlt ?? '' },
      ...(width && height
        ? [
            { property: 'og:image:width', content: String(width) },
            { property: 'og:image:height', content: String(height) },
          ]
        : []),
      { name: 'twitter:image', content: absolute(siteUrl, image) },
      { name: 'twitter:image:alt', content: og?.imageAlt ?? '' },
    );
  }
  metas.push(
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  );

  return { lang: toHtmlLang(input.locale), title, metas, links };
}

export { DEFAULT_LOCALE };
