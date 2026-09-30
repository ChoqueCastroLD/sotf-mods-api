/**
 * IndexNow (PLAN §8.6): the key is served by the web at `/{INDEXNOW_KEY}.txt`; after publishing,
 * editing or retiring content, the `indexnow.ping` job (debounced 60 s) POSTs the canonical URLs of
 * every affected locale to `https://api.indexnow.org/indexnow` (shared by Bing, Yandex, Seznam,
 * Naver…; Bing feeds Copilot and ChatGPT Search). Cloudflare Crawler Hints stays disabled so URLs
 * are not submitted twice.
 *
 * Only production submits: staging and preflight are `noindex` and must never be announced.
 */
import { LOCALES } from '@sotf/contracts/common';
import { defaultFetch, type HttpFetch } from '../cdn/cloudflare.ts';

export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
/** Protocol limit of URLs per POST. */
export const INDEXNOW_MAX_URLS = 10_000;
/** IndexNow keys: 8–128 characters of `[a-zA-Z0-9-]`. */
export const INDEXNOW_KEY_PATTERN = /^[a-zA-Z0-9-]{8,128}$/;
const REQUEST_TIMEOUT_MS = 20_000;

export function isValidIndexNowKey(key: string | null | undefined): key is string {
  return typeof key === 'string' && INDEXNOW_KEY_PATTERN.test(key);
}

export interface IndexNowConfig {
  key: string;
  /** Public origin (`https://sotf-mods.com`). */
  siteUrl: string;
  /** Override for tests (default {@link INDEXNOW_ENDPOINT}). */
  endpoint?: string;
}

export class IndexNowError extends Error {
  override readonly name = 'IndexNowError';
  readonly status: number;
  /** 4xx other than 429: the request itself is wrong (key, host); retrying does not help. */
  readonly permanent: boolean;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.permanent = status >= 400 && status < 500 && status !== 429;
  }
}

/**
 * The URL of `path` in every locale (English unprefixed, the others under `/{lc}`), absolute on
 * `siteUrl`. Paths are the canonical, locale-less ones (`/mods/imaxel/axel's-mod-menu`).
 */
export function localizedUrls(path: string, siteUrl: string): string[] {
  const base = siteUrl.replace(/\/+$/, '');
  return LOCALES.map((locale) => {
    if (locale === 'en') return `${base}${path}`;
    return `${base}/${locale}${path === '/' ? '' : path}`;
  });
}

/** Absolute URLs of the paths, deduplicated, keeping only URLs on the site's host. */
export function indexNowUrls(paths: readonly string[], siteUrl: string): string[] {
  const host = new URL(siteUrl).host;
  const out = new Set<string>();
  for (const path of paths) {
    if (!path.startsWith('/')) continue;
    const url = `${siteUrl.replace(/\/+$/, '')}${path}`;
    try {
      if (new URL(url).host === host) out.add(url);
    } catch {
      // Not a valid URL: skip it.
    }
  }
  return [...out];
}

export interface IndexNowResult {
  submitted: number;
  requests: number;
}

/**
 * Submits the URLs in batches of ≤ 10 000. 200 and 202 are success; 429 and 5xx throw a retryable
 * {@link IndexNowError}; other 4xx (bad key, key file not reachable, host mismatch) throw a
 * permanent one.
 */
export async function submitIndexNow(
  config: IndexNowConfig,
  urls: readonly string[],
  options: { fetch?: HttpFetch; signal?: AbortSignal } = {},
): Promise<IndexNowResult> {
  if (!isValidIndexNowKey(config.key)) throw new IndexNowError('invalid IndexNow key', 400);
  const doFetch = options.fetch ?? defaultFetch;
  const origin = config.siteUrl.replace(/\/+$/, '');
  const host = new URL(origin).host;
  let requests = 0;
  for (let i = 0; i < urls.length; i += INDEXNOW_MAX_URLS) {
    const batch = urls.slice(i, i + INDEXNOW_MAX_URLS);
    const signal = options.signal
      ? AbortSignal.any([options.signal, AbortSignal.timeout(REQUEST_TIMEOUT_MS)])
      : AbortSignal.timeout(REQUEST_TIMEOUT_MS);
    const response = await doFetch(config.endpoint ?? INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key: config.key, keyLocation: `${origin}/${config.key}.txt`, urlList: batch }),
      signal,
    });
    requests++;
    if (response.status !== 200 && response.status !== 202) {
      const detail = (await response.text().catch(() => '')).slice(0, 200);
      throw new IndexNowError(`IndexNow answered ${response.status} ${detail}`.trim(), response.status);
    }
  }
  return { submitted: urls.length, requests };
}
