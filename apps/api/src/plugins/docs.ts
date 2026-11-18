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
export const INDEX_PATH = '/api/v2';

/**
 * `GET /api/v2`: where everything is, for people and AI agents that start at the API root
 * (documents, how to authenticate, conventions, first calls). Links use the public site origin.
 */
export function apiIndex(siteUrl: string, version: string) {
  const site = siteUrl.replace(/\/+$/, '');
  return {
    name: 'SOTF Mods API',
    description:
      'Mods and builds for Sons of the Forest. Creators can upload mods, publish new versions, edit their listings ' +
      'and read their stats with an API key, without opening the website.',
    version,
    documentation: {
      guide: `${site}/developers/api.md`,
      reference: `${site}${DOCS_PATH}`,
      openapi: `${site}${OPENAPI_PATH}`,
      catalog: `${site}/.well-known/api-catalog`,
      llms: `${site}/llms.txt`,
    },
    authentication: {
      type: 'bearer',
      header: 'Authorization: Bearer sotfm_pat_<key>',
      createKeys: `${site}/dashboard/api`,
      scopes: {
        read: 'Your account, your mods and drafts, analytics, notifications, and every public read.',
        'mods:write': 'Uploads, new mods, new versions, listing and media edits.',
        'social:write': 'Comments, reviews, follows and compatibility reports.',
      },
      note: 'Each OpenAPI operation lists the scope a key needs in `x-sotf-token-scope`. Keys never reach account or staff settings.',
    },
    conventions: {
      format: 'JSON, camelCase. Times are ISO 8601 in UTC.',
      errors: 'RFC 9457 application/problem+json with a stable `code` (and `errors[]` for field problems).',
      pagination: '`page` (from 1) and `pageSize` (max 100); answers carry `total` and `totalPages`.',
      rateLimits: 'RateLimit headers on every answer; 429 with Retry-After when exceeded.',
    },
    start: [
      { step: 'Check your key', request: 'GET /api/v2/me' },
      { step: 'List your mods', request: 'GET /api/v2/studio/mods' },
      { step: 'See your stats', request: 'GET /api/v2/studio/analytics?range=30d' },
      { step: 'Publish a new version', guide: `${site}/developers/api.md#publish-a-new-version` },
      { step: 'Upload a new mod', guide: `${site}/developers/api.md#upload-a-new-mod` },
    ],
  };
}

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

  const index = JSON.stringify(apiIndex(options.siteUrl, options.version), null, 2);
  for (const path of [INDEX_PATH, `${INDEX_PATH}/`]) {
    app.get(path, { config: { bucket: 'anonymousRead', publicCors: true } }, async (_request, reply) => {
      reply.header('cache-control', 'public, max-age=300');
      reply.header('link', `<${OPENAPI_PATH}>; rel="service-desc", </developers/api.md>; rel="service-doc"`);
      return reply.type('application/json; charset=utf-8').send(index);
    });
  }

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
