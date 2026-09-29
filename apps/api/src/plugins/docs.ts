/**
 * API documentation (PLAN §5.1, T0-32): the OpenAPI 3.1 document generated from @sotf/contracts
 * (`buildOpenApiDocument`) is served at `/api/v2/openapi.json` and rendered by Scalar at
 * `/api/docs`. `@fastify/swagger` runs in static mode with the same document so Scalar (and any
 * swagger-aware tooling) reads one source of truth.
 */
import swagger from '@fastify/swagger';
import scalar from '@scalar/fastify-api-reference';
import { buildOpenApiDocument, type OpenApiDocument } from '@sotf/contracts/openapi';
import type { FastifyInstance } from 'fastify';

export const OPENAPI_PATH = '/api/v2/openapi.json';
export const DOCS_PATH = '/api/docs';

/** Relaxed CSP for the documentation page only (Scalar needs inline scripts and styles). */
const DOCS_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data: https://fonts.scalar.com",
  "connect-src 'self' https://api.sotf-mods.com https://sotf-mods.com",
  "frame-ancestors 'none'",
  "base-uri 'none'",
  "form-action 'none'",
].join('; ');

export interface DocsOptions {
  version: string;
  siteUrl: string;
}

export async function setupDocs(app: FastifyInstance, options: DocsOptions): Promise<OpenApiDocument> {
  const document = buildOpenApiDocument({ version: options.version });
  const body = JSON.stringify(document);

  await app.register(swagger, {
    mode: 'static',
    specification: { document: document as never },
  });

  app.get(OPENAPI_PATH, { config: { bucket: 'anonymousRead', publicCors: true } }, async (_request, reply) => {
    reply.header('cache-control', 'public, max-age=300');
    reply.header('cloudflare-cdn-cache-control', 'public, max-age=3600, stale-while-revalidate=86400');
    return reply.type('application/json; charset=utf-8').send(body);
  });

  await app.register(scalar, {
    routePrefix: DOCS_PATH,
    configuration: {
      url: OPENAPI_PATH,
      title: 'SOTF Mods API',
      metaData: {
        title: 'SOTF Mods API reference',
        description: 'Public API of sotf-mods.com (v2) and the legacy v1 surface.',
      },
    },
    hooks: {
      onRequest: async (_request, reply) => {
        reply.header('content-security-policy', DOCS_CSP);
        reply.header('cache-control', 'public, max-age=300');
      },
    },
    logLevel: 'warn',
  });
  return document;
}
