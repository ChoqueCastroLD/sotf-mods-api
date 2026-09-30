/**
 * oEmbed provider (PLAN §4.2, §8.6 backlinks; oembed.com §2.2–2.3): `GET /oembed?url=&format=json
 * [&maxwidth=&maxheight=]` answers a `rich` response whose `html` is an `<iframe>` of the light
 * card `/embed/mods/:u/:s` (in the locale of the URL). Only mod, library and build pages embed.
 *
 * Status codes of the spec: 404 (URL not ours or not embeddable), 501 (format other than JSON),
 * 400 (malformed parameters). Successful answers are edge-cached 900 s with `mod:{id}`.
 */
import { cacheTag } from '@sotf/contracts/cache';
import type { ModDetailDTO } from '@sotf/contracts/catalog';
import { absoluteUrl, profilePath } from '@sotf/contracts/seo';
import { DEFAULT_LOCALE, type Locale, localizePath, stripLocale } from '@sotf/i18n';
import { serverApi } from '../api.ts';
import { EDGE_TTL } from '../cache/policy.ts';
import { loadEnv } from '../env.ts';
import { apiStatus } from './data.ts';
import { lookupMod } from './entities.ts';
import { CONTENT_TYPES, type MachineContext, machineResponse, machineUnavailable } from './respond.ts';
import { escapeXml } from './xml.ts';

export const EMBED_WIDTH = 480;
export const EMBED_HEIGHT = 180;
/** Narrowest card that still fits (oEmbed consumers may ask for less; we refuse below this). */
const EMBED_MIN_WIDTH = 280;
const EMBED_MIN_HEIGHT = 140;

type Context = MachineContext & { url: URL };

function oembedError(status: 400 | 404 | 501, message: string): Response {
  return new Response(`${message}\n`, {
    status,
    headers: { 'content-type': CONTENT_TYPES.text, 'cache-control': 'public, max-age=300', 'x-robots-tag': 'noindex' },
  });
}

/** Parses a page URL of this site: `{ locale, prefix, user, slug }` or null. */
export function parseEmbeddableUrl(
  raw: string,
  siteUrl: string,
): { locale: Locale; prefix: 'mods' | 'builds'; user: string; slug: string } | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  const site = new URL(siteUrl);
  const hosts = new Set([site.host, `www.${site.host}`, 'sotf-mods.com', 'www.sotf-mods.com']);
  if (!hosts.has(url.host) || (url.protocol !== 'https:' && url.protocol !== 'http:')) return null;
  const { locale, path } = stripLocale(url.pathname.replace(/\/+$/, '') || '/');
  const segments = path.split('/').filter(Boolean);
  if (segments.length !== 3) return null;
  const [prefix, user, slug] = segments as [string, string, string];
  if (prefix !== 'mods' && prefix !== 'builds') return null;
  const decode = (value: string) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };
  return { locale, prefix, user: decode(user), slug: decode(slug) };
}

function positive(value: string | null): number | null {
  if (value === null || value === '') return null;
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : Number.NaN;
}

/** The `rich` oEmbed document of a mod (oembed.com §2.3.4). */
export function oembedDocument(
  mod: ModDetailDTO,
  options: { siteUrl: string; locale: Locale; width: number; height: number },
): Record<string, unknown> {
  const embedPath = localizePath(`/embed${mod.canonicalPath.replace(/^\/builds\//, '/mods/')}`, options.locale);
  const embedUrl = absoluteUrl(embedPath, options.siteUrl);
  const title = `${mod.name} on SOTF Mods`;
  const html = `<iframe src="${escapeXml(embedUrl)}" width="${options.width}" height="${options.height}" style="border:0;max-width:100%;border-radius:12px" loading="lazy" title="${escapeXml(title)}"></iframe>`;
  const document: Record<string, unknown> = {
    version: '1.0',
    type: 'rich',
    title: mod.name,
    author_name: mod.author.displayName,
    author_url: absoluteUrl(localizePath(profilePath(mod.author.handle), options.locale), options.siteUrl),
    provider_name: 'SOTF Mods',
    provider_url: `${options.siteUrl.replace(/\/+$/, '')}/`,
    cache_age: EDGE_TTL.detail,
    html,
    width: options.width,
    height: options.height,
  };
  const thumbnail = mod.thumbnail;
  if (!mod.nsfw && thumbnail?.width && thumbnail.height && thumbnail.width <= options.width) {
    document.thumbnail_url = thumbnail.url;
    document.thumbnail_width = thumbnail.width;
    document.thumbnail_height = thumbnail.height;
  }
  return document;
}

export async function oembedRoute(context: Context): Promise<Response> {
  const params = context.url.searchParams;
  const format = (params.get('format') ?? 'json').toLowerCase();
  if (format !== 'json') return oembedError(501, 'Only format=json is supported.');
  const rawUrl = params.get('url');
  if (!rawUrl) return oembedError(400, 'The url parameter is required.');
  const maxWidth = positive(params.get('maxwidth'));
  const maxHeight = positive(params.get('maxheight'));
  if (Number.isNaN(maxWidth) || Number.isNaN(maxHeight)) {
    return oembedError(400, 'maxwidth and maxheight must be positive integers.');
  }
  const width = Math.min(EMBED_WIDTH, maxWidth ?? EMBED_WIDTH);
  const height = Math.min(EMBED_HEIGHT, maxHeight ?? EMBED_HEIGHT);
  if (width < EMBED_MIN_WIDTH || height < EMBED_MIN_HEIGHT) {
    // oembed.com §2.3.4: a provider that cannot honour the size answers 404 for that request.
    return oembedError(404, 'No embed fits the requested size.');
  }

  const siteUrl = loadEnv().siteUrl;
  const target = parseEmbeddableUrl(rawUrl, siteUrl);
  if (!target) return oembedError(404, 'This URL cannot be embedded.');
  try {
    const found = await lookupMod(target.prefix, target.user, target.slug);
    const id = found.status === 200 || found.status === 301 ? found.id : null;
    if (id === null) return oembedError(404, 'This URL cannot be embedded.');
    const mod = await serverApi().catalog.getMod({ params: { id } });
    if (mod.nsfw || mod.banners.includes('pending_review')) return oembedError(404, 'This URL cannot be embedded.');
    const body = JSON.stringify(
      oembedDocument(mod, { siteUrl, locale: target.locale ?? DEFAULT_LOCALE, width, height }),
    );
    return machineResponse(context, body, {
      contentType: CONTENT_TYPES.json,
      maxAge: EDGE_TTL.detail,
      tags: [cacheTag.mod(mod.id), cacheTag.user(mod.userId)],
      headers: { 'access-control-allow-origin': '*', 'x-robots-tag': 'noindex' },
    });
  } catch (error) {
    if (apiStatus(error)) return oembedError(404, 'This URL cannot be embedded.');
    console.error('[web] oembed failed', error);
    return machineUnavailable();
  }
}
