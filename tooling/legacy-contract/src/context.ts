/** Shared state of a harness run and helpers used by several suites. */
import type { LegacyModDetail, LegacyModListItem } from '@sotf/contracts/legacy';
import { type HttpClient, type HttpResponse, joinUrl, parseJson } from './http.ts';
import { isPlainObject } from './normalize.ts';

export interface HarnessOptions {
  /** API base (`https://api.sotf-mods.com`, `http://127.0.0.1:3001`). */
  baseUrl: string;
  /** Host of `/mods/:u/:s/download/:v` (web). Defaults to `baseUrl`. */
  webUrl: string;
  /** Shadow reference (`https://api.sotf-mods.com`). */
  compareWith: string | null;
  /** `full` compares values; `shape` only schema, key order, statuses and invariants. */
  mode: 'full' | 'shape';
  /** Max pages walked per list (RedManager tabs, UpdatesChecker paging, discovery). */
  maxPages: number;
  /** RedManager installs to simulate (downloads followed to the file). */
  installs: number;
  /** Follow the 302 to the storage and check the file (RedManager's reqwest behaviour). */
  followDownloads: boolean;
  /** Verify the counting rules (HEAD/Range/bots do not count) through `_count.downloads`. */
  checkCounting: boolean;
  countTimeoutMs: number;
  countPollMs: number;
  /** Detail requests allowed while looking for download keys with special characters. */
  downloadScan: number;
}

export const DEFAULT_OPTIONS: Omit<HarnessOptions, 'baseUrl' | 'webUrl' | 'compareWith'> = {
  mode: 'full',
  maxPages: 50,
  installs: 3,
  followDownloads: true,
  checkCounting: true,
  countTimeoutMs: 30_000,
  countPollMs: 500,
  downloadScan: 80,
};

export interface Capture {
  name: string;
  body: Buffer;
}

export interface HarnessContext {
  options: HarnessOptions;
  client: HttpClient;
  /** Bodies captured for the .NET UpdatesChecker checker. */
  captures: Capture[];
  api(route: string): URL;
  web(route: string): URL;
  isProduction(url: URL): boolean;
  sleep(ms: number): Promise<void>;
}

export function createContext(options: HarnessOptions, client: HttpClient): HarnessContext {
  return {
    options,
    client,
    captures: [],
    api: (route) => joinUrl(options.baseUrl, route),
    web: (route) => joinUrl(options.webUrl, route),
    isProduction: (url) => client.isProduction(url),
    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  };
}

export function jsonBody(response: HttpResponse): unknown {
  const parsed = parseJson(response.body);
  if (!parsed.ok) {
    throw new Error(
      `${response.method} ${response.url.pathname}${response.url.search} → ${response.status}: body is not JSON (${parsed.error})`,
    );
  }
  return parsed.value;
}

export interface ListPage {
  status: number;
  body: {
    status: boolean;
    data: LegacyModListItem[];
    meta: { total: number; page: number; limit: number; pages: number };
  };
  response: HttpResponse;
}

export async function getList(ctx: HarnessContext, route: string): Promise<ListPage> {
  const response = await ctx.client.get(ctx.api(route));
  const body = jsonBody(response);
  if (!isPlainObject(body) || !Array.isArray(body.data) || !isPlainObject(body.meta)) {
    throw new Error(`${route} → ${response.status}: not a legacy list envelope`);
  }
  return { status: response.status, body: body as ListPage['body'], response };
}

/** Every mod visible through the list (both NSFW values, every type), bounded by `maxPages`. */
export async function discoverMods(ctx: HarnessContext): Promise<LegacyModListItem[]> {
  const seen = new Map<number, LegacyModListItem>();
  for (const nsfw of ['false', 'true']) {
    for (let page = 1; page <= ctx.options.maxPages; page++) {
      const { body } = await getList(ctx, `/api/mods?type=Both&nsfw=${nsfw}&limit=100&page=${page}`);
      for (const item of body.data) seen.set(item.id, item);
      if (page >= (body.meta.pages ?? 0)) break;
    }
  }
  return [...seen.values()];
}

export async function getDetail(
  ctx: HarnessContext,
  modId: string,
  cacheBust = false,
): Promise<{ status: number; data: LegacyModDetail | null; response: HttpResponse }> {
  const route = `/api/mods/${encodeURIComponent(modId)}${cacheBust ? `?_t=${Date.now()}` : ''}`;
  const response = await ctx.client.get(ctx.api(route));
  const body = jsonBody(response);
  if (isPlainObject(body) && body.status === true && isPlainObject(body.data)) {
    return { status: response.status, data: body.data as LegacyModDetail, response };
  }
  return { status: response.status, data: null, response };
}
