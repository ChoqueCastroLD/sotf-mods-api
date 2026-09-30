/**
 * Web download route (WP-31, PLAN §2.8 "Descarga", research/01 §6.2): `GET|HEAD
 * /mods/:user/:slug/download/:version` never touches the file. It asks the API
 * (`GET INTERNAL_API_URL/internal/downloads/resolve`, signed with `X-Internal-Auth`) and relays the
 * answer:
 *
 * - 302 → `Location` = the R2 URL (key encoded per segment), `Cache-Control: no-store, private`,
 *   `X-Robots-Tag: noindex, nofollow`, `Referrer-Policy: no-referrer`. Never 301.
 * - 404 / 410 → the site's error page for browsers (`Accept: text/html`, `locals.errorKind = 'gone'`
 *   for 410), otherwise the legacy JSON envelope (RedManager, the in-game checker, scripts).
 * - API unreachable or slow → 503 with `Retry-After` (a download can never be answered without
 *   knowing where the file is).
 *
 * Forwarded to the API: `CF-Connecting-IP` (or the socket address), `User-Agent` (sent even when
 * empty, so the API sees what the client sent: an empty UA counts), `CF-IPCountry`, `Range`,
 * `Sec-Purpose`/`Purpose`, the method, the request id and the `Cookie` header (so a signed-in
 * download can be linked to "My downloads" once the platform resolves sessions on this route).
 *
 * Files starting with `_` are not routes in Astro: this module is the testable core of
 * `[version].ts`.
 */
import { DOWNLOAD_REDIRECT_HEADERS, type DownloadResolveDTO, INTERNAL_AUTH_HEADER } from '@sotf/contracts/downloads';
import { LEGACY_JSON_CONTENT_TYPE, legacyError } from '@sotf/contracts/legacy';

export interface DownloadProxyEnv {
  /** `INTERNAL_API_URL` (e.g. `http://api:3001`). */
  internalApiUrl: string;
  /** `INTERNAL_SECRET`. */
  internalSecret: string;
  /** Budget for the API call (default 5 s). */
  timeoutMs?: number;
}

export interface DownloadProxyInput {
  request: Request;
  /** Decoded route parameters. */
  params: { user: string; slug: string; version: string };
  /** Socket address of the client (used when Cloudflare's `CF-Connecting-IP` is absent). */
  clientAddress?: string | null;
  env: DownloadProxyEnv;
  fetchImpl?: typeof fetch;
  /** Renders the site's 404/410 page (HTML). Its status is replaced by `status`. */
  renderErrorPage?: (status: 404 | 410) => Promise<Response>;
}

const BASE_HEADERS: Readonly<Record<string, string>> = { ...DOWNLOAD_REDIRECT_HEADERS };

function withBaseHeaders(response: Response, status: number): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(BASE_HEADERS)) headers.set(name, value);
  return new Response(response.body, { status, headers });
}

function json(status: number, body: unknown, extra: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': LEGACY_JSON_CONTENT_TYPE, ...BASE_HEADERS, ...extra },
  });
}

/** True when the client prefers an HTML page (browsers), false for API clients. */
export function wantsHtml(request: Request): boolean {
  const accept = request.headers.get('accept') ?? '';
  return /\btext\/html\b/i.test(accept);
}

/** Environment of the route (read at request time; validated here so misconfiguration is loud). */
export function downloadProxyEnv(source: Readonly<Record<string, string | undefined>>): DownloadProxyEnv {
  const internalApiUrl = source.INTERNAL_API_URL?.trim();
  const internalSecret = source.INTERNAL_SECRET?.trim();
  if (!internalApiUrl || !/^https?:\/\//.test(internalApiUrl)) throw new Error('INTERNAL_API_URL is not set');
  if (!internalSecret) throw new Error('INTERNAL_SECRET is not set');
  return { internalApiUrl: internalApiUrl.replace(/\/+$/, ''), internalSecret };
}

/** Headers sent to the internal resolve endpoint. */
export function forwardedHeaders(request: Request, clientAddress: string | null | undefined, secret: string): Headers {
  const incoming = request.headers;
  const headers = new Headers({ accept: 'application/json', [INTERNAL_AUTH_HEADER]: secret });
  const ip = incoming.get('cf-connecting-ip') ?? clientAddress ?? null;
  if (ip) headers.set('cf-connecting-ip', ip);
  // Always explicit: without it fetch would add its own UA and an empty UA must reach the API as such.
  headers.set('user-agent', incoming.get('user-agent') ?? '');
  for (const name of ['cf-ipcountry', 'range', 'sec-purpose', 'purpose', 'cf-ray', 'x-request-id', 'cookie']) {
    const value = incoming.get(name);
    if (value !== null) headers.set(name, value);
  }
  return headers;
}

export async function proxyDownload(input: DownloadProxyInput): Promise<Response> {
  const { request, params, env } = input;
  const method = request.method.toUpperCase() === 'HEAD' ? 'HEAD' : 'GET';
  const url = new URL(`${env.internalApiUrl}/internal/downloads/resolve`);
  url.searchParams.set('user', params.user);
  url.searchParams.set('slug', params.slug);
  url.searchParams.set('version', params.version);
  url.searchParams.set('method', method);

  let resolved: DownloadResolveDTO;
  try {
    const response = await (input.fetchImpl ?? fetch)(url, {
      method: 'GET',
      headers: forwardedHeaders(request, input.clientAddress, env.internalSecret),
      redirect: 'manual',
      signal: AbortSignal.timeout(env.timeoutMs ?? 5_000),
    });
    if (response.status === 404 || response.status === 422) {
      // Unresolvable parameters (e.g. an over-long slug) are simply not found.
      resolved = { status: 404, location: null, reason: 'mod_not_found', counted: false, modId: null, versionId: null };
    } else if (!response.ok) {
      throw new Error(`resolve answered ${response.status}`);
    } else {
      resolved = (await response.json()) as DownloadResolveDTO;
    }
  } catch {
    return json(503, legacyError('UNKNOWN', 'Downloads are temporarily unavailable'), { 'retry-after': '10' });
  }

  if (resolved.status === 302 && resolved.location) {
    return new Response(null, { status: 302, headers: { location: resolved.location, ...BASE_HEADERS } });
  }
  const status: 404 | 410 = resolved.status === 410 ? 410 : 404;
  if (wantsHtml(request) && input.renderErrorPage) {
    try {
      return withBaseHeaders(await input.renderErrorPage(status), status);
    } catch {
      // Fall through to the JSON body: an error page failure must not turn a 404 into a 500.
    }
  }
  return json(
    status,
    status === 410 ? legacyError('GONE', 'This file is no longer available') : legacyError('NOT_FOUND'),
  );
}
