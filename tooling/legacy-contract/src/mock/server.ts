/**
 * Simulated legacy server (acceptance of WP-24: "contra un servidor simulado que reproduce los
 * fixtures: 100 % en verde").
 *
 * - The 38 fixture routes are replayed byte for byte (status, `Content-Type`, body).
 * - Every other request is answered from the dataset (`dataset.ts`) with the semantics PLAN §5.5
 *   gives the v2 legacy layer: `parseLegacyModsQuery`/`legacyListMeta`/`LEGACY_ORDERBY` of
 *   `@sotf/contracts` for the list, string-desc versions in the detail, node-semver `gt` for
 *   `/check`, KelvinSeek's text protocol with a deterministic fallback, and downloads that answer
 *   302 to a local "R2" with segment-wise encoded keys, counted only for GET without a partial
 *   `Range` and without a bot User-Agent.
 * - `hooks` inject regressions so the tests prove the harness catches them.
 */
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import {
  KELVINSEEK_CLEAR_REPLY,
  LEGACY_CHECK_MESSAGES,
  LEGACY_CORS_HEADERS,
  LEGACY_GONE_BODY,
  LEGACY_JSON_CONTENT_TYPE,
  LEGACY_ORDERBY,
  LEGACY_RETIRED_ROUTES,
  LEGACY_TEXT_CONTENT_TYPE,
  legacyError,
  legacyListMeta,
  parseLegacyModsQuery,
} from '@sotf/contracts/legacy';
import semver from 'semver';
import { encodeStorageKey, normaliseSlug } from '../downloads.ts';
import { type Fixture, loadFixtures } from '../fixtures.ts';
import { KELVINSEEK_COMMANDS } from '../kelvinseek.ts';
import { buildDataset, detailOf, type ListItem, type ModRecord, type VersionRecord } from './dataset.ts';

export interface MockRouteContext {
  method: string;
  pathname: string;
  search: string;
  /** Fixture replayed for this request, if any. */
  fixture: string | null;
}

export interface MockHooks {
  /** Rewrites a JSON body before it is sent (fixture replays included). */
  transformJson?(ctx: MockRouteContext, body: unknown): unknown;
  /** `Content-Type` of JSON answers (default `application/json`). */
  jsonContentType?: string;
  /** Status of download redirects (default 302). */
  downloadStatus?: number;
  /** Encoding of the key in the redirect (default segment-wise `encodeURIComponent`). */
  encodeKey?(key: string): string;
  /** Count HEAD, partial Range and bot requests too (a regression). */
  countEverything?: boolean;
  /** Answer unknown downloads with 200 + JSON error (the legacy bug) instead of 404. */
  missingDownloadOk?: boolean;
  /** Rewrites a KelvinSeek reply. */
  kelvinReply?(reply: string): string;
  /** `Content-Type` of KelvinSeek answers. */
  kelvinContentType?: string;
}

export interface MockServerOptions {
  host?: string;
  port?: number;
  hooks?: MockHooks;
}

export interface MockServer {
  url: string;
  /** Public base of the simulated R2 bucket (`<url>/r2`). */
  r2Base: string;
  /** Counted downloads by version id. */
  downloads: Map<number, number>;
  /** Every request received (method, path+query, user-agent). */
  requests: Array<{ method: string; path: string; userAgent: string | undefined; range: string | undefined }>;
  close(): Promise<void>;
}

const BOT_UA = /bot|crawler|spider|slurp|crawling|facebookexternalhit|embedly|preview/i;

/** Canonical form of path + query for fixture matching (decoded, order and empty keys kept). */
export function canonicalRoute(pathAndQuery: string): string {
  const q = pathAndQuery.indexOf('?');
  const path = q === -1 ? pathAndQuery : pathAndQuery.slice(0, q);
  const query = q === -1 ? null : pathAndQuery.slice(q + 1);
  const decode = (s: string) => {
    try {
      return decodeURIComponent(s.replace(/\+/g, ' '));
    } catch {
      return s;
    }
  };
  const decodedPath = path
    .split('/')
    .map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    })
    .join('/');
  if (query === null) return decodedPath;
  return `${decodedPath}?${query
    .split('&')
    .map((pair) => pair.split('=').map(decode).join('='))
    .join('&')}`;
}

function retiredPattern(path: string): RegExp {
  const source = path
    .split('/')
    .map((segment) =>
      segment === '*' ? '.+' : segment.startsWith(':') ? '[^/]+' : segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    )
    .join('/');
  return new RegExp(`^${source}$`);
}

const RETIRED = LEGACY_RETIRED_ROUTES.map((route) => ({ method: route.method, re: retiredPattern(route.path) }));

function compareValues(a: unknown, b: unknown): number {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a ?? '').localeCompare(String(b ?? ''));
}

function listMods(records: ModRecord[], raw: Record<string, string | string[]>) {
  const parsed = parseLegacyModsQuery(raw);
  if (!parsed.ok) return { status: 422, body: parsed.error as unknown };
  const f = parsed.value;
  const search = f.search?.toLowerCase() ?? null;
  const rows = records
    .map((r) => r.item)
    .filter((m) => (f.type === null ? true : m.type === f.type))
    .filter((m) => (f.approved === null ? true : m.isApproved === f.approved))
    .filter((m) => m.isNSFW === f.nsfw)
    .filter((m) => (f.userSlug ? m.user.slug === f.userSlug : true))
    // The dataset has no favorites: `userSlugFavorites` always yields an empty list.
    .filter(() => !f.userSlugFavorites)
    .filter((m) => (f.modIds ? f.modIds.includes(m.mod_id) : true))
    .filter((m) => (f.category ? m.category?.slug === f.category : true))
    .filter((m) =>
      search
        ? m.name.toLowerCase().includes(search) ||
          m.description.toLowerCase().includes(search) ||
          m.user.name.toLowerCase().includes(search)
        : true,
    );
  const order = LEGACY_ORDERBY[f.orderby];
  const dir = order.direction === 'desc' ? -1 : 1;
  rows.sort((a, b) => {
    const c = compareValues(a[order.column as keyof ListItem], b[order.column as keyof ListItem]) * dir;
    return c !== 0 ? c : a.id - b.id;
  });
  const start = (f.page - 1) * f.limit;
  return {
    status: 200,
    body: {
      status: true,
      data: rows.slice(start, start + f.limit),
      meta: legacyListMeta(rows.length, f.page, f.limit),
    } as unknown,
  };
}

function kelvinFallback(text: string): string {
  const words = new Set(
    text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(Boolean),
  );
  let best: string | null = null;
  let bestScore = 0;
  for (const command of KELVINSEEK_COMMANDS) {
    const parts = command.split(/[._]/);
    const score = parts.filter((p) => words.has(p)).length / parts.length;
    if (score > bestScore) {
      best = command;
      bestScore = score;
    }
  }
  if (!best) return "|I can't understand anything..";
  const phrase = best
    .replace('.', ' ')
    .replace('.', ' and ')
    .replaceAll('_', ' ')
    .split(' ')
    .map((w) => (w === 'me' ? 'you' : w))
    .join(' ');
  return `${best}|I will ${phrase} right away`;
}

export async function startMockServer(options: MockServerOptions = {}): Promise<MockServer> {
  const hooks = options.hooks ?? {};
  const fixtures = loadFixtures();
  const byRoute = new Map<string, Fixture>(fixtures.map((f) => [canonicalRoute(f.route), f]));
  const records = buildDataset();
  const byModId = new Map(records.map((r) => [r.item.mod_id, r]));
  const keys = new Map<string, VersionRecord>();
  for (const r of records) for (const v of r.versions) keys.set(v.key, v);
  const downloads = new Map<number, number>();
  const requests: MockServer['requests'] = [];
  const extra = (versionId: number) => downloads.get(versionId) ?? 0;
  let base = '';

  const server = http.createServer((req, res) => {
    const method = (req.method ?? 'GET').toUpperCase();
    const rawPath = req.url ?? '/';
    const url = new URL(rawPath, 'http://mock.invalid');
    const ua = req.headers['user-agent'];
    const range = req.headers.range;
    requests.push({ method, path: rawPath, userAgent: ua, range });
    const ctx: MockRouteContext = { method, pathname: url.pathname, search: url.search, fixture: null };

    const send = (status: number, headers: Record<string, string>, body: Buffer | string = '') => {
      const buf = typeof body === 'string' ? Buffer.from(body, 'utf8') : body;
      res.writeHead(status, {
        'access-control-allow-origin': LEGACY_CORS_HEADERS['access-control-allow-origin'],
        'content-length': String(buf.length),
        ...headers,
      });
      res.end(method === 'HEAD' ? undefined : buf);
    };
    const json = (status: number, body: unknown, extraHeaders: Record<string, string> = {}) => {
      // The hook gets a copy: fixture bodies are shared with the harness in the same process.
      const out = hooks.transformJson ? hooks.transformJson(ctx, structuredClone(body)) : body;
      send(
        status,
        { 'content-type': hooks.jsonContentType ?? LEGACY_JSON_CONTENT_TYPE, ...extraHeaders },
        JSON.stringify(out),
      );
    };
    const cached = { 'cache-control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=600' };
    const notFound = () => json(404, legacyError('NOT_FOUND'));

    if (method === 'OPTIONS') {
      send(204, { ...LEGACY_CORS_HEADERS });
      return;
    }

    const fixture = method === 'GET' || method === 'HEAD' ? byRoute.get(canonicalRoute(rawPath)) : undefined;
    if (fixture) {
      ctx.fixture = fixture.name;
      if (hooks.transformJson || hooks.jsonContentType) {
        json(fixture.status, fixture.body, cached);
      } else {
        send(fixture.status, { 'content-type': fixture.contentType, ...cached }, fixture.raw);
      }
      return;
    }

    const segments = url.pathname
      .split('/')
      .slice(1)
      .map((s) => {
        try {
          return decodeURIComponent(s);
        } catch {
          return s;
        }
      });
    const query: Record<string, string> = {};
    for (const [k, v] of url.searchParams) if (!(k in query)) query[k] = v;

    const download = (record: ModRecord | undefined, version: string) => {
      const v =
        record &&
        (version === 'latest' || version === 'undefined'
          ? record.versions.find((x) => x.isLatest)
          : record.versions.find((x) => x.version === version));
      if (!record || !v) {
        if (hooks.missingDownloadOk) json(200, legacyError('NOT_FOUND'));
        else json(404, legacyError('NOT_FOUND'), { 'cache-control': 'no-store, private' });
        return;
      }
      const partial = typeof range === 'string' && !/^bytes=0-/.test(range.trim());
      const counts = hooks.countEverything || (method === 'GET' && !partial && !(ua && BOT_UA.test(ua)));
      if (counts) downloads.set(v.id, extra(v.id) + 1);
      const location = `${base}/r2/${(hooks.encodeKey ?? encodeStorageKey)(v.key)}`;
      send(hooks.downloadStatus ?? 302, {
        location,
        'cache-control': 'no-store, private',
        'x-robots-tag': 'noindex, nofollow',
        'referrer-policy': 'no-referrer',
      });
    };
    const resolve = (userSlug: string, slug: string): ModRecord | undefined => {
      const exact = records.find((r) => r.item.user.slug === userSlug && r.item.slug === slug);
      if (exact) return exact;
      const global = records.find((r) => r.item.slug === slug);
      if (global) return global;
      const n = normaliseSlug(slug);
      return (
        records.find((r) => normaliseSlug(r.item.slug) === n) ?? records.find((r) => r.item.mod_id.toLowerCase() === n)
      );
    };

    // Simulated R2 bucket: keys are decoded segment by segment; `+` is a literal plus.
    if (segments[0] === 'r2' && (method === 'GET' || method === 'HEAD')) {
      const key = segments.slice(1).join('/');
      const version = keys.get(key);
      if (!version) {
        send(404, { 'content-type': 'text/plain' }, 'NoSuchKey');
        return;
      }
      const payload =
        version.extension === 'json'
          ? Buffer.from(JSON.stringify({ key, kind: 'build' }))
          : Buffer.concat([Buffer.from([0x50, 0x4b, 0x03, 0x04]), Buffer.from(key, 'utf8')]);
      send(200, { 'content-type': version.extension === 'json' ? 'application/json' : 'application/zip' }, payload);
      return;
    }

    if (
      segments[0] === 'mods' &&
      segments[3] === 'download' &&
      segments.length === 5 &&
      (method === 'GET' || method === 'HEAD')
    ) {
      download(resolve(segments[1] ?? '', segments[2] ?? ''), segments[4] ?? '');
      return;
    }

    if (segments[0] !== 'api') {
      send(404, { 'content-type': 'text/plain' }, 'Not Found');
      return;
    }

    const apiPath = `/${segments.join('/')}`;
    const retired = RETIRED.find((r) => (r.method === '*' || r.method === method) && r.re.test(apiPath));
    if (retired) {
      json(410, LEGACY_GONE_BODY, { 'cache-control': 'no-store' });
      return;
    }
    if (method !== 'GET' && method !== 'HEAD') {
      notFound();
      return;
    }

    const [, a, b, c, d, e] = segments;
    if (a === 'kelvinseek' && (b === 'prompt' || b === 'clear') && segments.length === 3) {
      const required = b === 'prompt' ? ['text', 'context', 'chat_id'] : ['chat_id'];
      if (required.some((k) => !url.searchParams.has(k))) {
        json(422, legacyError('VALIDATION'), { 'cache-control': 'no-store' });
        return;
      }
      let reply = b === 'prompt' ? kelvinFallback(url.searchParams.get('text') ?? '') : KELVINSEEK_CLEAR_REPLY;
      if (hooks.kelvinReply) reply = hooks.kelvinReply(reply);
      send(
        200,
        { 'content-type': hooks.kelvinContentType ?? LEGACY_TEXT_CONTENT_TYPE, 'cache-control': 'no-store' },
        reply,
      );
      return;
    }
    if (a === 'mods' && segments.length === 2) {
      const raw: Record<string, string> = {};
      for (const [k, v] of url.searchParams) if (!(k in raw)) raw[k] = v;
      const out = listMods(records, raw);
      json(out.status, out.body, out.status === 200 ? cached : {});
      return;
    }
    if (a === 'mods' && b === 'slug' && c && d) {
      const record = records.find((r) => r.item.user.slug === c && r.item.slug === d);
      if (segments.length === 5) {
        if (record) json(200, { status: true, data: detailOf(record, extra) }, cached);
        else notFound();
        return;
      }
      if (e === 'download' && segments.length === 7) {
        download(record, segments[6] ?? '');
        return;
      }
    }
    if (a === 'mods' && b && c === 'download' && segments.length === 5) {
      download(byModId.get(b), d ?? '');
      return;
    }
    if (a === 'mods' && b && c === 'check' && segments.length === 4) {
      const record = byModId.get(b);
      if (!record) {
        notFound();
        return;
      }
      const latest = record.versions.find((v) => v.isLatest);
      const changelog = record.detail?.versions.find((v) => v.isLatest)?.changelog ?? '';
      const version = url.searchParams.get('version');
      if (!latest) {
        notFound();
        return;
      }
      if (version === null) {
        json(
          200,
          {
            status: true,
            newVersionAvailable: false,
            message: LEGACY_CHECK_MESSAGES.latest,
            version: latest.version,
            changelog,
          },
          cached,
        );
        return;
      }
      if (!semver.valid(latest.version) || !semver.valid(version)) {
        const invalid = semver.valid(latest.version) ? version : latest.version;
        json(422, legacyError('VALIDATION', `Invalid Version: ${invalid}`));
        return;
      }
      const newer = semver.gt(latest.version, version);
      json(
        200,
        {
          status: true,
          newVersionAvailable: newer,
          message: newer ? LEGACY_CHECK_MESSAGES.newVersion : LEGACY_CHECK_MESSAGES.noNewVersion,
          version: latest.version,
          changelog,
        },
        cached,
      );
      return;
    }
    if (a === 'mods' && b && segments.length === 3) {
      const record = byModId.get(b);
      if (record) json(200, { status: true, data: detailOf(record, extra) }, cached);
      else notFound();
      return;
    }
    notFound();
  });

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(options.port ?? 0, options.host ?? '127.0.0.1', () => resolve());
  });
  const address = server.address() as AddressInfo;
  const host = address.family === 'IPv6' ? `[${address.address}]` : address.address;
  base = `http://${host}:${address.port}`;
  return {
    url: base,
    r2Base: `${base}/r2`,
    downloads,
    requests,
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.closeAllConnections();
        server.close((error) => (error ? reject(error) : resolve()));
      }),
  };
}
