/**
 * Client address (PLAN §5.1 "Límites de uso": the key is `CF-Connecting-IP`). Behind Cloudflare the
 * edge sets `CF-Connecting-IP`; the web SSR forwards it on internal calls. Without it we use the
 * address Fastify derives from the socket / the nearest trusted proxy (Traefik).
 *
 * `CF-Connecting-IP` is only a header: anyone who reaches the origin without going through
 * Cloudflare can send any value and dodge every per-IP limit (register 3/day, login 5/min, …). It
 * is therefore honoured only when the connection really comes from Cloudflare or from our own
 * network: `request.ip` (the address Traefik saw, taken from `X-Forwarded-For`, or the socket
 * address of a direct internal caller such as the web container) must be a Cloudflare edge address
 * or a private/loopback one. Anything else is a client talking to the origin directly: its own
 * address is used and the Cloudflare headers are ignored.
 */
import { BlockList, isIP } from 'node:net';
import type { FastifyRequest } from 'fastify';

/** Cloudflare's published edge ranges (https://www.cloudflare.com/ips/). */
export const CLOUDFLARE_CIDRS: readonly string[] = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22',
  '2400:cb00::/32',
  '2606:4700::/32',
  '2803:f800::/32',
  '2405:b500::/32',
  '2405:8100::/32',
  '2a06:98c0::/29',
  '2c0f:f248::/32',
];

/** Loopback, RFC 1918, link-local and unique-local ranges: the container network and local dev. */
export const PRIVATE_CIDRS: readonly string[] = [
  '127.0.0.0/8',
  '10.0.0.0/8',
  '172.16.0.0/12',
  '192.168.0.0/16',
  '169.254.0.0/16',
  '::1/128',
  'fc00::/7',
  'fe80::/10',
];

/** Set of addresses whose `CF-*` headers are believed. */
export type TrustedEdge = (address: string) => boolean;

/** Builds the matcher for Cloudflare + private ranges + `extra` CIDRs (`TRUSTED_EDGE_CIDRS`). */
export function createTrustedEdge(extra: readonly string[] = []): TrustedEdge {
  const list = new BlockList();
  for (const cidr of [...CLOUDFLARE_CIDRS, ...PRIVATE_CIDRS, ...extra]) {
    const [network, prefix] = cidr.split('/');
    const family = network ? isIP(network) : 0;
    if (!network || !prefix || family === 0) continue;
    list.addSubnet(network, Number(prefix), family === 6 ? 'ipv6' : 'ipv4');
  }
  return (address) => {
    const family = isIP(address);
    return family !== 0 && list.check(address, family === 6 ? 'ipv6' : 'ipv4');
  };
}

const defaultEdge = createTrustedEdge();

/** True when the connection came from Cloudflare or from the private network. */
export function viaTrustedEdge(request: FastifyRequest, edge: TrustedEdge = defaultEdge): boolean {
  return edge(request.ip);
}

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function clientIpOf(request: FastifyRequest, edge: TrustedEdge = defaultEdge): string {
  const value = first(request.headers['cf-connecting-ip'])?.trim();
  if (value && isIP(value) && viaTrustedEdge(request, edge)) return value;
  return request.ip;
}

/** Two-letter country from `CF-IPCountry` (`XX`/`T1` → null); ignored outside the trusted edge. */
export function countryOf(request: FastifyRequest, edge: TrustedEdge = defaultEdge): string | null {
  if (!viaTrustedEdge(request, edge)) return null;
  const value = first(request.headers['cf-ipcountry'])?.trim().toUpperCase();
  if (!value || !/^[A-Z]{2}$/.test(value) || value === 'XX') return null;
  return value;
}

/** Request id: the Cloudflare ray id when present (so logs match CF), else a uuid v7. */
export function requestIdFrom(headers: Record<string, string | string[] | undefined>, fallback: () => string): string {
  const ray = headers['cf-ray'];
  const value = Array.isArray(ray) ? ray[0] : ray;
  if (value && /^[A-Za-z0-9-]{8,64}$/.test(value)) return value;
  return fallback();
}
