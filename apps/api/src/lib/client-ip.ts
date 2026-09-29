/**
 * Client address (PLAN §5.1 "Límites de uso": the key is `CF-Connecting-IP`). Behind Cloudflare the
 * edge sets `CF-Connecting-IP`; the web SSR forwards it on internal calls. Without it we use the
 * address Fastify derives from the socket / the nearest trusted proxy (Traefik).
 */
import { isIP } from 'node:net';
import type { FastifyRequest } from 'fastify';

export function clientIpOf(request: FastifyRequest): string {
  const header = request.headers['cf-connecting-ip'];
  const value = Array.isArray(header) ? header[0] : header;
  if (value && isIP(value.trim())) return value.trim();
  return request.ip;
}

/** Two-letter country from `CF-IPCountry` (`XX`/`T1` → null). */
export function countryOf(request: FastifyRequest): string | null {
  const header = request.headers['cf-ipcountry'];
  const value = (Array.isArray(header) ? header[0] : header)?.trim().toUpperCase();
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
