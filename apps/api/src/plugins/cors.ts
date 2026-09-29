/**
 * CORS per route group (PLAN §5.1 "CORS", §5.5 "Convenciones globales").
 *
 * - Public v2 GETs (`auth: public` + public cache policy): `Access-Control-Allow-Origin: *`, no
 *   credentials. Every other v2 endpoint uses cookies and is same-origin only: the header is
 *   removed from its responses, so browsers block cross-origin reads.
 * - Legacy `/api/*`: `*` without credentials, `GET, HEAD, OPTIONS`, preflight 204 cached 24 h.
 * - Internal, docs and platform routes: no CORS.
 */
import cors, { type FastifyCorsOptions } from '@fastify/cors';
import { LEGACY_CORS_HEADERS } from '@sotf/contracts';
import type { FastifyInstance, FastifyRequest } from 'fastify';
import { surfaceOf } from '../lib/surface.ts';

const LEGACY: FastifyCorsOptions = {
  origin: LEGACY_CORS_HEADERS['access-control-allow-origin'],
  methods: LEGACY_CORS_HEADERS['access-control-allow-methods'].split(', '),
  allowedHeaders: LEGACY_CORS_HEADERS['access-control-allow-headers'].split(', '),
  maxAge: Number(LEGACY_CORS_HEADERS['access-control-max-age']),
  credentials: false,
  optionsSuccessStatus: 204,
};

const V2_PUBLIC: FastifyCorsOptions = {
  origin: '*',
  methods: ['GET', 'HEAD'],
  allowedHeaders: ['Accept', 'Accept-Language', 'Content-Type', 'If-None-Match'],
  exposedHeaders: ['ETag', 'X-Request-Id', 'Retry-After'],
  maxAge: 86_400,
  credentials: false,
  optionsSuccessStatus: 204,
};

const NONE: FastifyCorsOptions = { origin: false };

export function corsOptionsFor(request: FastifyRequest): FastifyCorsOptions {
  switch (surfaceOf(request.url)) {
    case 'legacy':
      return LEGACY;
    case 'v2':
      return V2_PUBLIC;
    default:
      return NONE;
  }
}

/** True when a v2 endpoint may be read cross-origin. */
export function isPublicCorsEndpoint(request: FastifyRequest): boolean {
  const config = request.routeOptions.config;
  if (config?.publicCors) return true;
  const endpoint = config?.endpoint;
  if (!endpoint) return false;
  return endpoint.auth === 'public' && endpoint.cache.kind === 'public';
}

export async function setupCors(app: FastifyInstance): Promise<void> {
  await app.register(cors, {
    hook: 'onRequest',
    delegator: (request, callback) => callback(null, corsOptionsFor(request)),
  });
  app.addHook('onSend', async (request, reply, payload) => {
    if (request.method === 'OPTIONS') return payload;
    if (surfaceOf(request.url) === 'v2' && !isPublicCorsEndpoint(request)) {
      reply.removeHeader('access-control-allow-origin');
      reply.removeHeader('access-control-expose-headers');
    }
    return payload;
  });
}
