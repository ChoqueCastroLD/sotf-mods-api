/**
 * Minimal HTTP client of the harness, on `node:http`/`node:https` instead of `fetch` because the
 * legacy clients must be reproduced faithfully:
 *
 * - no `User-Agent` unless asked (RedManager's reqwest and .NET `HttpClient` send none; `fetch`
 *   always adds `node`);
 * - redirects are never followed implicitly (`followRedirects` does it hop by hop, like reqwest);
 * - the production guard (`guard.ts`) and a per-host rate limit run before any socket is opened.
 */
import http from 'node:http';
import https from 'node:https';
import { assertProductionSafe, isProductionHost, PRODUCTION_HOSTS, PRODUCTION_MIN_INTERVAL_MS } from './guard.ts';

export interface HttpRequest {
  method: string;
  url: URL;
  headers: Record<string, string>;
  timeoutMs: number;
}

export interface HttpResponse {
  status: number;
  /** Lower-cased header names; repeated headers joined with `, `. */
  headers: Record<string, string>;
  body: Buffer;
  url: URL;
  method: string;
}

export type Transport = (request: HttpRequest) => Promise<HttpResponse>;

export interface RequestOptions {
  headers?: Record<string, string>;
  /** `undefined`/`null` → no User-Agent header at all. */
  userAgent?: string | null;
  timeoutMs?: number;
}

export interface HttpClientOptions {
  /** Replaces the network (tests). */
  transport?: Transport;
  /** Minimum interval between requests to the same host (non-production). Default 0. */
  minIntervalMs?: number;
  /** Hosts treated as production (default `PRODUCTION_HOSTS`). */
  productionHosts?: readonly string[];
  timeoutMs?: number;
  /** Clock and sleep (tests). */
  now?: () => number;
  sleep?: (ms: number) => Promise<void>;
  /** Maximum response body kept in memory (bytes). Default 64 MiB. */
  maxBodyBytes?: number;
}

const DEFAULT_TIMEOUT_MS = 20_000;
const DEFAULT_MAX_BODY = 64 * 1024 * 1024;

/** Joins a base URL (which may carry a path prefix such as `https://beta.example/api-proxy`) and a route. */
export function joinUrl(base: string | URL, route: string): URL {
  const baseUrl = new URL(base);
  const prefix = baseUrl.pathname.replace(/\/+$/, '');
  return new URL(`${baseUrl.origin}${prefix}${route.startsWith('/') ? route : `/${route}`}`);
}

function nodeTransport(maxBodyBytes: number): Transport {
  return (request) =>
    new Promise<HttpResponse>((resolve, reject) => {
      const lib = request.url.protocol === 'https:' ? https : http;
      const req = lib.request(
        request.url,
        { method: request.method, headers: request.headers, timeout: request.timeoutMs },
        (res) => {
          const chunks: Buffer[] = [];
          let size = 0;
          res.on('data', (chunk: Buffer) => {
            size += chunk.length;
            if (size > maxBodyBytes) {
              res.destroy(new Error(`response body larger than ${maxBodyBytes} bytes`));
              return;
            }
            chunks.push(chunk);
          });
          res.on('error', reject);
          res.on('end', () => {
            const headers: Record<string, string> = {};
            for (const [key, value] of Object.entries(res.headers)) {
              if (value === undefined) continue;
              headers[key.toLowerCase()] = Array.isArray(value) ? value.join(', ') : String(value);
            }
            resolve({
              status: res.statusCode ?? 0,
              headers,
              body: Buffer.concat(chunks),
              url: request.url,
              method: request.method,
            });
          });
        },
      );
      req.on('timeout', () => req.destroy(new Error(`timeout after ${request.timeoutMs} ms: ${request.url.href}`)));
      req.on('error', reject);
      req.end();
    });
}

export class HttpClient {
  readonly #transport: Transport;
  readonly #minIntervalMs: number;
  readonly #productionHosts: readonly string[];
  readonly #timeoutMs: number;
  readonly #now: () => number;
  readonly #sleep: (ms: number) => Promise<void>;
  /** Next allowed start time per host. */
  readonly #slots = new Map<string, number>();
  /** Requests sent, by host (reports and tests). */
  readonly sent = new Map<string, number>();

  constructor(options: HttpClientOptions = {}) {
    this.#transport = options.transport ?? nodeTransport(options.maxBodyBytes ?? DEFAULT_MAX_BODY);
    this.#minIntervalMs = options.minIntervalMs ?? 0;
    this.#productionHosts = options.productionHosts ?? PRODUCTION_HOSTS;
    this.#timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.#now = options.now ?? Date.now;
    this.#sleep = options.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  }

  isProduction(url: URL): boolean {
    return isProductionHost(url.hostname, this.#productionHosts);
  }

  async #throttle(url: URL): Promise<void> {
    const interval = this.isProduction(url)
      ? Math.max(PRODUCTION_MIN_INTERVAL_MS, this.#minIntervalMs)
      : this.#minIntervalMs;
    if (interval <= 0) return;
    const host = url.host;
    const now = this.#now();
    const slot = Math.max(now, this.#slots.get(host) ?? 0);
    this.#slots.set(host, slot + interval);
    if (slot > now) await this.#sleep(slot - now);
  }

  /** One request; never follows redirects. */
  async request(method: string, url: URL, options: RequestOptions = {}): Promise<HttpResponse> {
    assertProductionSafe(method, url, this.#productionHosts);
    await this.#throttle(url);
    const headers: Record<string, string> = { ...options.headers };
    if (options.userAgent) headers['user-agent'] = options.userAgent;
    this.sent.set(url.host, (this.sent.get(url.host) ?? 0) + 1);
    return this.#transport({
      method: method.toUpperCase(),
      url,
      headers,
      timeoutMs: options.timeoutMs ?? this.#timeoutMs,
    });
  }

  get(url: URL, options: RequestOptions = {}): Promise<HttpResponse> {
    return this.request('GET', url, options);
  }

  /**
   * Follows redirects hop by hop like reqwest's default policy (≤ 10 redirects, method kept for
   * 307/308, GET otherwise). Every hop goes through the guard. Returns every response.
   */
  async followRedirects(
    method: string,
    url: URL,
    options: RequestOptions & { maxRedirects?: number } = {},
  ): Promise<HttpResponse[]> {
    const hops: HttpResponse[] = [];
    let current = url;
    let verb = method;
    const max = options.maxRedirects ?? 10;
    for (let i = 0; i <= max; i++) {
      const response = await this.request(verb, current, options);
      hops.push(response);
      const location = response.headers.location;
      if (response.status < 300 || response.status >= 400 || response.status === 304 || !location) return hops;
      current = new URL(location, current);
      if (response.status !== 307 && response.status !== 308 && verb !== 'HEAD') verb = 'GET';
    }
    throw new Error(`too many redirects (> ${max}) starting at ${url.href}`);
  }
}

/** Media type and parameters of a `Content-Type` header, normalised (`text/plain;charset=utf-8`). */
export function normaliseContentType(value: string | undefined): string {
  if (!value) return '';
  return value
    .split(';')
    .map((part) => part.trim().toLowerCase())
    .filter((part) => part.length > 0)
    .map((part, i) => (i === 0 ? part : part.replace(/\s*=\s*/, '=').replace(/"/g, '')))
    .join(';');
}

export function parseJson(body: Buffer): { ok: true; value: unknown } | { ok: false; error: string } {
  try {
    return { ok: true, value: JSON.parse(body.toString('utf8')) as unknown };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
