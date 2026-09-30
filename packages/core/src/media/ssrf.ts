/**
 * Anti-SSRF fetch for remote images (PLAN §9.1 "SSRF", §8.3 "Legacy"): images embedded in Markdown
 * descriptions are replicated to R2, and fetching an arbitrary author-supplied URL from inside the
 * network is the classic SSRF. Rules:
 *
 * - `https:` only, default port (443) only, no credentials in the URL;
 * - the host is resolved **before** connecting and every resolved address must be public: loopback,
 *   private (RFC 1918, ULA), link-local (incl. `169.254.169.254` cloud metadata), CGNAT,
 *   multicast, reserved, documentation, benchmarking, 6to4/Teredo/NAT64 and IPv4-mapped forms of
 *   those are refused;
 * - the socket connects to the address that was validated (custom `lookup`), so DNS rebinding
 *   between the check and the connection is impossible;
 * - redirects are followed manually (≤ 3) and every hop is validated again;
 * - 10 MB cap (declared `Content-Length` and streamed bytes), 5 s total timeout.
 */
import dns from 'node:dns';
import type { IncomingHttpHeaders } from 'node:http';
import https from 'node:https';
import net from 'node:net';

export const REMOTE_FETCH_LIMITS = {
  maxBytes: 10 * 1024 * 1024,
  timeoutMs: 5_000,
  maxRedirects: 3,
} as const;

export class SafeFetchError extends Error {
  override readonly name = 'SafeFetchError';
  readonly reason:
    | 'invalid_url'
    | 'scheme'
    | 'port'
    | 'credentials'
    | 'private_address'
    | 'dns'
    | 'too_large'
    | 'timeout'
    | 'status'
    | 'redirects'
    | 'network';

  constructor(reason: SafeFetchError['reason'], message: string) {
    super(message);
    this.reason = reason;
  }
}

const blocked = new net.BlockList();
for (const [address, prefix] of [
  ['0.0.0.0', 8],
  ['10.0.0.0', 8],
  ['100.64.0.0', 10],
  ['127.0.0.0', 8],
  ['169.254.0.0', 16],
  ['172.16.0.0', 12],
  ['192.0.0.0', 24],
  ['192.0.2.0', 24],
  ['192.88.99.0', 24],
  ['192.168.0.0', 16],
  ['198.18.0.0', 15],
  ['198.51.100.0', 24],
  ['203.0.113.0', 24],
  ['224.0.0.0', 4],
  ['240.0.0.0', 4],
] as const) {
  blocked.addSubnet(address, prefix, 'ipv4');
}
for (const [address, prefix] of [
  ['::', 128],
  ['::1', 128],
  ['64:ff9b::', 96],
  ['64:ff9b:1::', 48],
  ['100::', 64],
  ['2001::', 23],
  ['2001:db8::', 32],
  ['2002::', 16],
  ['fc00::', 7],
  ['fe80::', 10],
  ['fec0::', 10],
  ['ff00::', 8],
] as const) {
  blocked.addSubnet(address, prefix, 'ipv6');
}

/** IPv4 embedded in an IPv4-mapped/compatible IPv6 address (`::ffff:10.0.0.1`), else null. */
function embeddedIpv4(address: string): string | null {
  const lower = address.toLowerCase();
  const dotted = /^(?:::ffff:|::ffff:0:|::)(\d{1,3}(?:\.\d{1,3}){3})$/.exec(lower);
  if (dotted?.[1]) return dotted[1];
  const hex = /^(?:::ffff:|::)([0-9a-f]{1,4}):([0-9a-f]{1,4})$/.exec(lower);
  if (hex?.[1] && hex[2]) {
    const hi = Number.parseInt(hex[1], 16);
    const lo = Number.parseInt(hex[2], 16);
    return `${hi >> 8}.${hi & 0xff}.${lo >> 8}.${lo & 0xff}`;
  }
  return null;
}

/** True when `address` (IPv4 or IPv6 literal) is a public unicast address. */
export function isPublicAddress(address: string): boolean {
  const family = net.isIP(address);
  if (family === 4) return !blocked.check(address, 'ipv4');
  if (family === 6) {
    const v4 = embeddedIpv4(address);
    if (v4) return net.isIPv4(v4) && !blocked.check(v4, 'ipv4');
    return !blocked.check(address, 'ipv6');
  }
  return false;
}

/** Validates the shape of a URL (scheme, port, credentials). Returns the parsed URL. */
export function assertFetchableUrl(raw: string, allowedPorts: readonly number[] = [443]): URL {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new SafeFetchError('invalid_url', 'invalid URL');
  }
  if (url.protocol !== 'https:') throw new SafeFetchError('scheme', 'only https URLs are fetched');
  const port = url.port === '' ? 443 : Number(url.port);
  if (!allowedPorts.includes(port)) throw new SafeFetchError('port', 'only the default https port is allowed');
  if (url.username || url.password) throw new SafeFetchError('credentials', 'URLs with credentials are refused');
  if (url.hostname === '') throw new SafeFetchError('invalid_url', 'URL without host');
  return url;
}

export type Resolver = (hostname: string) => Promise<Array<{ address: string; family: number }>>;

const systemResolver: Resolver = (hostname) => dns.promises.lookup(hostname, { all: true, verbatim: true });

/** Resolves `hostname` and returns its addresses when **all** are public (else throws). */
export async function resolvePublic(
  hostname: string,
  resolver: Resolver = systemResolver,
  isAllowed: (address: string) => boolean = isPublicAddress,
): Promise<Array<{ address: string; family: number }>> {
  const host = hostname.startsWith('[') && hostname.endsWith(']') ? hostname.slice(1, -1) : hostname;
  let addresses: Array<{ address: string; family: number }>;
  if (net.isIP(host)) addresses = [{ address: host, family: net.isIP(host) }];
  else {
    try {
      addresses = await resolver(host);
    } catch {
      throw new SafeFetchError('dns', `cannot resolve ${host}`);
    }
  }
  if (addresses.length === 0) throw new SafeFetchError('dns', `no address for ${host}`);
  const bad = addresses.find((a) => !isAllowed(a.address));
  if (bad) throw new SafeFetchError('private_address', `${host} resolves to a non-public address`);
  return addresses;
}

export interface SafeFetchOptions {
  maxBytes?: number;
  timeoutMs?: number;
  maxRedirects?: number;
  /** Extra request headers (Accept…). */
  headers?: Record<string, string>;
  /** DNS resolver (tests). */
  resolver?: Resolver;
  /** TLS options of the request (tests: a private CA). Certificate verification is never disabled. */
  tls?: Pick<https.RequestOptions, 'ca'>;
  /**
   * Address policy (default `isPublicAddress`). Only integration tests override it, to reach a
   * local HTTPS server; production callers never pass it.
   */
  isAllowedAddress?: (address: string) => boolean;
  /** Allowed ports (default `[443]`); only integration tests widen it. */
  allowedPorts?: readonly number[];
}

export interface SafeFetchResult {
  body: Buffer;
  contentType: string | null;
  finalUrl: string;
}

interface Hop {
  status: number;
  headers: IncomingHttpHeaders;
  body: Buffer | null;
}

function requestOnce(
  url: URL,
  address: { address: string; family: number },
  options: Required<Pick<SafeFetchOptions, 'maxBytes'>> & SafeFetchOptions,
  signal: AbortSignal,
): Promise<Hop> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: 'GET',
        headers: { 'user-agent': 'SOTF-Mods-ImageFetcher/2 (+https://sotf-mods.com)', ...options.headers },
        // Connect to the validated address only (no second resolution → no DNS rebinding).
        lookup: (_hostname, lookupOptions, callback) => {
          const cb = callback as unknown as (
            error: Error | null,
            address: string | Array<{ address: string; family: number }>,
            family?: number,
          ) => void;
          if ((lookupOptions as { all?: boolean }).all) cb(null, [address]);
          else cb(null, address.address, address.family);
        },
        servername: net.isIP(url.hostname.replace(/^\[|\]$/g, '')) ? undefined : url.hostname,
        signal,
        ...(options.tls ?? {}),
      },
      (res) => {
        const status = res.statusCode ?? 0;
        if (status >= 300 && status < 400) {
          res.resume();
          resolve({ status, headers: res.headers, body: null });
          return;
        }
        if (status !== 200) {
          res.resume();
          reject(new SafeFetchError('status', `HTTP ${status}`));
          return;
        }
        const declared = Number(res.headers['content-length']);
        if (Number.isFinite(declared) && declared > options.maxBytes) {
          res.destroy();
          reject(new SafeFetchError('too_large', `larger than ${options.maxBytes} bytes`));
          return;
        }
        const chunks: Buffer[] = [];
        let total = 0;
        res.on('data', (chunk: Buffer) => {
          total += chunk.length;
          if (total > options.maxBytes) {
            res.destroy();
            reject(new SafeFetchError('too_large', `larger than ${options.maxBytes} bytes`));
            return;
          }
          chunks.push(chunk);
        });
        res.on('end', () => resolve({ status, headers: res.headers, body: Buffer.concat(chunks) }));
        res.on('error', (error) => reject(error));
      },
    );
    req.on('error', (error) => {
      if (signal.aborted) reject(new SafeFetchError('timeout', 'timed out'));
      else reject(error instanceof SafeFetchError ? error : new SafeFetchError('network', error.message));
    });
    req.end();
  });
}

/** Fetches a remote resource under the anti-SSRF rules above. */
export async function safeFetch(rawUrl: string, options: SafeFetchOptions = {}): Promise<SafeFetchResult> {
  const maxBytes = options.maxBytes ?? REMOTE_FETCH_LIMITS.maxBytes;
  const maxRedirects = options.maxRedirects ?? REMOTE_FETCH_LIMITS.maxRedirects;
  const signal = AbortSignal.timeout(options.timeoutMs ?? REMOTE_FETCH_LIMITS.timeoutMs);
  let url = assertFetchableUrl(rawUrl, options.allowedPorts);
  for (let hop = 0; ; hop += 1) {
    const addresses = await resolvePublic(url.hostname, options.resolver, options.isAllowedAddress);
    const address = addresses[0] as { address: string; family: number };
    let result: Hop;
    try {
      result = await requestOnce(url, address, { ...options, maxBytes }, signal);
    } catch (error) {
      if (signal.aborted) throw new SafeFetchError('timeout', 'timed out');
      throw error;
    }
    if (result.body) {
      const type = result.headers['content-type'];
      return { body: result.body, contentType: typeof type === 'string' ? type : null, finalUrl: url.href };
    }
    const location = result.headers.location;
    if (!location) throw new SafeFetchError('status', `HTTP ${result.status} without Location`);
    if (hop >= maxRedirects) throw new SafeFetchError('redirects', 'too many redirects');
    url = assertFetchableUrl(new URL(location, url).href, options.allowedPorts);
  }
}
