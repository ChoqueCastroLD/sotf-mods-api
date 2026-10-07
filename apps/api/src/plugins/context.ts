/**
 * Request context and authentication (PLAN §5.1 "Autenticación", §9.2).
 *
 * For every routed request: `X-Request-Id`, client IP, the actor (via the pluggable
 * `sessionResolver`; null by default until WP-30 provides one) and `request.ctx` (core `Ctx`).
 * Then the contract's auth level is enforced:
 * `public` · `session` (401) · `verified` (403 EMAIL_NOT_VERIFIED) · `moderator`/`admin` (403) ·
 * `internal` (`X-Internal-Auth` equal to INTERNAL_SECRET, compared in constant time; 403).
 *
 * Publicly cached endpoints never see the session: their HTML/JSON is identical for everyone and
 * must not vary by cookie (PLAN §2.5), so the resolver is not even called for them.
 */
import { createHash, timingSafeEqual } from 'node:crypto';
import type { Endpoint } from '@sotf/contracts';
import { type Actor, createCtx, createIpHasher, hasRole, type KernelDeps, type Logger } from '@sotf/core';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import { clientIpOf, countryOf, createTrustedEdge, type TrustedEdge } from '../lib/client-ip.ts';
import type { SessionResolver } from '../lib/types.ts';
import { httpError } from './errors.ts';

/** Constant-time comparison of two secrets of any length. */
export function secretsEqual(given: string | undefined, expected: string): boolean {
  if (!given) return false;
  const a = createHash('sha256').update(given).digest();
  const b = createHash('sha256').update(expected).digest();
  return timingSafeEqual(a, b);
}

/** True when the endpoint's response may depend on who is asking. */
function needsSession(endpoint: Endpoint | undefined): boolean {
  if (!endpoint) return false;
  if (endpoint.auth === 'internal') return false;
  if (endpoint.auth === 'public' && endpoint.cache.kind === 'public') return false;
  return true;
}

export function enforceAuth(endpoint: Endpoint, actor: Actor | null, request: FastifyRequest, secret: string): void {
  switch (endpoint.auth) {
    case 'public':
      return;
    case 'internal': {
      const given = request.headers['x-internal-auth'];
      if (!secretsEqual(Array.isArray(given) ? given[0] : given, secret)) {
        throw httpError('FORBIDDEN', 'Internal endpoint');
      }
      return;
    }
    case 'session':
      if (!actor) throw httpError('UNAUTHENTICATED');
      return;
    case 'verified':
      if (!actor) throw httpError('UNAUTHENTICATED');
      if (!actor.emailVerified) throw httpError('EMAIL_NOT_VERIFIED');
      return;
    case 'moderator':
      if (!actor) throw httpError('UNAUTHENTICATED');
      if (!hasRole(actor, 'moderator')) throw httpError('FORBIDDEN');
      return;
    case 'admin':
      if (!actor) throw httpError('UNAUTHENTICATED');
      if (!hasRole(actor, 'admin')) throw httpError('FORBIDDEN');
      return;
  }
}

export interface ContextOptions {
  deps: KernelDeps;
  internalSecret: string;
  sessionResolver: () => SessionResolver;
  /** Which peers' `CF-*` headers are believed (default: Cloudflare and private networks). */
  edge?: TrustedEdge;
}

/** First hook of every request: request id header, client IP and per-request state. */
export function setupRequestBasics(app: FastifyInstance, options: { edge?: TrustedEdge } = {}): void {
  const edge = options.edge ?? createTrustedEdge();
  app.decorateRequest('ctx', null as never);
  app.decorateRequest('actor', null);
  app.decorateRequest('clientIp', '');
  app.decorateRequest('cacheValues', null as never);
  app.decorateRequest('extraCacheTags', null as never);
  app.decorateRequest('overSoftLimit', false);
  app.addHook('onRequest', async (request, reply) => {
    reply.header('x-request-id', request.id);
    request.clientIp = clientIpOf(request, edge);
    request.cacheValues = {};
    request.extraCacheTags = [];
    // A NUL byte (`%00`) in the path or query can never be valid and makes Postgres fail with a 500.
    if (/%00/i.test(request.raw.url ?? '') || (request.raw.url ?? '').includes('\u0000')) {
      throw httpError('VALIDATION_FAILED', 'The URL contains a NUL character');
    }
  });
}

/** Resolves the actor, builds `request.ctx` and enforces the endpoint's auth level. */
export function setupContext(app: FastifyInstance, options: ContextOptions): void {
  const hashIp = createIpHasher(options.deps.appSecret, options.deps.clock);
  const edge = options.edge ?? createTrustedEdge();
  app.addHook('onRequest', async (request) => {
    const endpoint = request.routeOptions.config?.endpoint;
    let actor: Actor | null = null;
    if (needsSession(endpoint)) actor = await options.sessionResolver()(request);
    request.actor = actor;
    request.ctx = createCtx(options.deps, {
      requestId: request.id,
      actor,
      ip: request.clientIp,
      ipHash: hashIp(request.clientIp),
      userAgent: (request.headers['user-agent'] as string | undefined) ?? null,
      country: countryOf(request, edge),
      log: request.log as Logger,
    });
    if (endpoint) enforceAuth(endpoint, actor, request, options.internalSecret);
  });
}
