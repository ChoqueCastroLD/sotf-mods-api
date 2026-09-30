/**
 * XML writers of the machine endpoints (PLAN §4.4, §8.6): sitemaps (protocol 0.9 with
 * `xhtml:link` hreflang alternates and `image:image`), the sitemap index and RSS 2.0 channels.
 * Pure string builders: no DOM, deterministic output, every value escaped.
 */
import { hreflangAlternates } from '@sotf/i18n';

/** Escapes text for XML element content and attribute values. */
export function escapeXml(value: string): string {
  return stripInvalidXmlChars(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Drops what XML 1.0 forbids: C0 controls but tab/LF/CR, lone surrogates, U+FFFE and U+FFFF. */
export function stripInvalidXmlChars(value: string): string {
  let out = '';
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    const control = code < 0x20 && code !== 0x09 && code !== 0x0a && code !== 0x0d;
    const loneSurrogate = code >= 0xd800 && code <= 0xdfff;
    if (!control && !loneSurrogate && code !== 0xfffe && code !== 0xffff) out += char;
  }
  return out;
}

/**
 * Absolute URL of a site path, percent-encoding what sitemaps require (RFC 3986): the path
 * helpers keep `'`, `(`, `)` readable, which is valid in a URL but must be entity-escaped in XML
 * (done by {@link escapeXml}).
 */
export function absolute(siteUrl: string, path: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** `YYYY-MM-DDThh:mm:ssZ` (W3C Datetime) or null for missing/invalid dates. */
export function w3cDate(value: string | Date | null | undefined): string | null {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return `${date.toISOString().slice(0, 19)}Z`;
}

/** RFC 822 date of RSS (`Sat, 26 Sep 2026 21:33:31 GMT`). */
export function rfc822(value: string | Date): string {
  const date = value instanceof Date ? value : new Date(value);
  return date.toUTCString();
}

// -----------------------------------------------------------------------------------------------
// Sitemaps
// -----------------------------------------------------------------------------------------------

export interface SitemapImage {
  url: string;
  /** Optional caption (not part of Google's current spec, kept out of the XML). */
  title?: string;
}

/** A page of the site: expanded to one `<url>` per locale with the full hreflang cluster. */
export interface SitemapPage {
  /** Locale-less canonical path (`/mods/imaxel/axel's-mod-menu`). */
  path: string;
  /** Real last modification (never "now"). Omitted when unknown. */
  lastmod?: string | Date | null;
  images?: readonly SitemapImage[];
  /** Publish only the English URL (pages outside the localized cluster). Default: every locale. */
  englishOnly?: boolean;
}

const URLSET_OPEN =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
  'xmlns:xhtml="http://www.w3.org/1999/xhtml" ' +
  'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

/**
 * `<urlset>` with every locale of every page. Each `<url>` lists the 13 alternates + `x-default`
 * (Google requires the cluster on every member). Element order follows the XSD: `loc`, `lastmod`,
 * then the extension elements.
 */
export function urlset(siteUrl: string, pages: readonly SitemapPage[]): string {
  const parts: string[] = [URLSET_OPEN];
  for (const page of pages) {
    const lastmod = w3cDate(page.lastmod ?? null);
    const images = (page.images ?? []).filter((image) => /^https?:\/\//.test(image.url)).slice(0, 1000);
    const imageXml = images
      .map((image) => `<image:image><image:loc>${escapeXml(image.url)}</image:loc></image:image>`)
      .join('');
    if (page.englishOnly) {
      parts.push(
        `<url><loc>${escapeXml(absolute(siteUrl, page.path))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}${imageXml}</url>\n`,
      );
      continue;
    }
    const alternates = hreflangAlternates(page.path, siteUrl.replace(/\/+$/, ''));
    const cluster = alternates
      .map((alt) => `<xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`)
      .join('');
    for (const alt of alternates) {
      if (alt.hreflang === 'x-default') continue;
      parts.push(
        `<url><loc>${escapeXml(alt.href)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}${cluster}${imageXml}</url>\n`,
      );
    }
  }
  parts.push('</urlset>\n');
  return parts.join('');
}

export interface SitemapRef {
  path: string;
  lastmod?: string | Date | null;
}

/** `<sitemapindex>` pointing at the per-type sitemaps. */
export function sitemapIndex(siteUrl: string, sitemaps: readonly SitemapRef[]): string {
  const entries = sitemaps
    .map((sitemap) => {
      const lastmod = w3cDate(sitemap.lastmod ?? null);
      return `<sitemap><loc>${escapeXml(absolute(siteUrl, sitemap.path))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</sitemap>`;
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    `${entries}\n</sitemapindex>\n`
  );
}

// -----------------------------------------------------------------------------------------------
// RSS 2.0
// -----------------------------------------------------------------------------------------------

export interface RssItem {
  title: string;
  /** Absolute URL. */
  link: string;
  /** Plain text or HTML (escaped into the element either way). */
  description: string;
  pubDate: string | Date;
  /** Stable unique id; `isPermaLink="false"` unless it equals the link. */
  guid: string;
  author?: string | null;
  categories?: readonly string[];
  /** Absolute image URL (`<enclosure>` needs a length, so Media RSS is used). */
  imageUrl?: string | null;
}

export interface RssChannel {
  title: string;
  /** Absolute URL of the HTML page the feed mirrors. */
  link: string;
  /** Absolute URL of the feed itself (`atom:link rel="self"`). */
  selfUrl: string;
  description: string;
  /** BCP-47 language of the channel texts. */
  language: string;
  items: readonly RssItem[];
  /** Absolute URL of the channel image (the logo). */
  imageUrl?: string;
  /** Minutes a reader may cache the feed. */
  ttl?: number;
}

/** A complete RSS 2.0 document (with the Atom self link and Media RSS thumbnails). */
export function rss(channel: RssChannel): string {
  const newest = channel.items.reduce<Date | null>((latest, item) => {
    const date = new Date(item.pubDate);
    if (Number.isNaN(date.getTime())) return latest;
    return latest === null || date > latest ? date : latest;
  }, null);
  const items = channel.items
    .map((item) => {
      const permalink = item.guid === item.link;
      const parts = [
        `<title>${escapeXml(item.title)}</title>`,
        `<link>${escapeXml(item.link)}</link>`,
        `<guid isPermaLink="${permalink ? 'true' : 'false'}">${escapeXml(item.guid)}</guid>`,
        `<pubDate>${rfc822(item.pubDate)}</pubDate>`,
        `<description>${escapeXml(item.description)}</description>`,
        ...(item.author ? [`<dc:creator>${escapeXml(item.author)}</dc:creator>`] : []),
        ...(item.categories ?? []).map((category) => `<category>${escapeXml(category)}</category>`),
        ...(item.imageUrl ? [`<media:thumbnail url="${escapeXml(item.imageUrl)}"/>`] : []),
      ];
      return `<item>${parts.join('')}</item>`;
    })
    .join('\n');
  const head = [
    `<title>${escapeXml(channel.title)}</title>`,
    `<link>${escapeXml(channel.link)}</link>`,
    `<atom:link href="${escapeXml(channel.selfUrl)}" rel="self" type="application/rss+xml"/>`,
    `<description>${escapeXml(channel.description)}</description>`,
    `<language>${escapeXml(channel.language)}</language>`,
    '<generator>SOTF Mods</generator>',
    `<docs>https://www.rssboard.org/rss-specification</docs>`,
    ...(newest ? [`<lastBuildDate>${rfc822(newest)}</lastBuildDate>`] : []),
    ...(channel.ttl ? [`<ttl>${channel.ttl}</ttl>`] : []),
    ...(channel.imageUrl
      ? [
          `<image><url>${escapeXml(channel.imageUrl)}</url><title>${escapeXml(channel.title)}</title><link>${escapeXml(channel.link)}</link></image>`,
        ]
      : []),
  ];
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">\n' +
    `<channel>${head.join('')}\n${items}\n</channel>\n</rss>\n`
  );
}
