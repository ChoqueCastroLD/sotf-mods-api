/**
 * Acceptance (PLAN §12.3 WP-11): every DTO validates its examples; every endpoint contract is
 * well-formed and the §5.2/§5.5 catalogue is fully covered.
 */
import { describe, expect, it } from 'vitest';
import type { z } from 'zod';
import { isCacheTag, resolveCacheTags } from '../src/cache.ts';
import { allEndpoints, apiContracts } from '../src/contracts.ts';
import { dtoMeta, registeredDtos } from '../src/dto.ts';
import { pathParamNames, RATE_LIMITS, responseKindOf } from '../src/endpoint.ts';
import { ERROR_CODES } from '../src/errors.ts';
import '../src/index.ts';

describe('DTO examples', () => {
  const dtos = registeredDtos();

  it('registers the DTOs of every domain', () => {
    expect(dtos.length).toBeGreaterThan(200);
  });

  it.each(dtos.map(([schema, meta]) => [meta.id, schema, meta] as const))(
    '%s validates its examples',
    (_id, schema, meta) => {
      expect(meta.examples.length).toBeGreaterThan(0);
      expect(meta.description.length).toBeGreaterThan(0);
      for (const example of meta.examples) {
        const result = schema.safeParse(example);
        if (!result.success) throw new Error(`${meta.id}: ${JSON.stringify(result.error.issues.slice(0, 3))}`);
      }
    },
  );

  it('uses unique PascalCase ids', () => {
    const ids = dtos.map(([, meta]) => meta.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[A-Z][A-Za-z0-9]+$/);
  });
});

describe('endpoint contracts', () => {
  const entries = allEndpoints();

  it('names every endpoint <domain>.<name>', () => {
    for (const { domain, name, endpoint } of entries) expect(endpoint.id).toBe(`${domain}.${name}`);
    const ids = entries.map((e) => e.endpoint.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('never declares the same method and path twice', () => {
    const keys = entries.map(({ endpoint }) => `${endpoint.method} ${endpoint.path}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it.each(entries.map((e) => [e.endpoint.id, e] as const))('%s is well-formed', (_id, { endpoint }) => {
    // Path params and the params schema match exactly.
    const names = pathParamNames(endpoint.path);
    const declared = endpoint.params ? Object.keys(endpoint.params.shape) : [];
    expect(declared.sort()).toEqual([...names].sort());
    expect(endpoint.path).toMatch(/^\/(api\/|internal\/|healthz$|readyz$)/);
    expect(endpoint.owner).toMatch(/^WP-\d{2}$/);
    expect(endpoint.summary.length).toBeGreaterThan(3);

    // Bodies only on mutations; request and response bodies are registered DTOs.
    if (endpoint.body) {
      expect(['POST', 'PUT', 'PATCH']).toContain(endpoint.method);
      expect(dtoMeta(endpoint.body), 'body must be a registered DTO').toBeDefined();
    }
    const kind = responseKindOf(endpoint);
    if (kind === 'json' || kind === 'event-stream') {
      expect(endpoint.response, 'json responses need a schema').toBeDefined();
    }
    if (endpoint.response) expect(dtoMeta(endpoint.response), 'response must be a registered DTO').toBeDefined();
    if (kind === 'empty' || kind === 'redirect') expect(endpoint.response).toBeUndefined();

    // Personal data is never cached publicly; public GETs are the only cacheable responses.
    if (endpoint.auth !== 'public') expect(endpoint.cache.kind).not.toBe('public');
    if (endpoint.method !== 'GET') expect(endpoint.cache.kind).not.toBe('public');

    // Documented errors and rate-limit buckets exist; cache tag templates resolve.
    for (const code of endpoint.errors ?? []) expect(ERROR_CODES).toContain(code);
    if (endpoint.rateLimit) expect(Object.keys(RATE_LIMITS)).toContain(endpoint.rateLimit);
    if (endpoint.cache.kind === 'public') {
      const values = { id: 20, modId: 20, userId: 12, kitId: 5, slug: 'quality-of-life', locale: 'es' };
      const tags = resolveCacheTags(endpoint.cache.tags, values);
      expect(tags.length).toBe(endpoint.cache.tags.length);
      for (const tag of tags) expect(isCacheTag(tag)).toBe(true);
    }

    // Queries tolerate an empty query string unless they have required keys.
    if (endpoint.query && endpoint.method === 'GET' && !endpoint.path.includes('kelvinseek')) {
      const shape = endpoint.query.shape as Record<string, z.ZodType>;
      const required = Object.entries(shape).filter(([, schema]) => !schema.safeParse(undefined).success);
      if (required.length === 0) expect(endpoint.query.safeParse({}).success).toBe(true);
    }
  });

  it('keeps legacy routes on the legacy error envelope and v2 routes on RFC 9457', () => {
    for (const { endpoint } of entries) {
      if (endpoint.path.startsWith('/api/v2/')) expect(endpoint.errorFormat ?? 'problem').toBe('problem');
      else if (endpoint.path.startsWith('/api/')) expect(endpoint.errorFormat).toBe('legacy');
    }
  });

  it('covers the whole endpoint catalogue of PLAN §5.2 and §5.5', () => {
    const declared = new Set(entries.map(({ endpoint }) => `${endpoint.method} ${endpoint.path}`));
    const v2 = (method: string, path: string) => `${method} /api/v2${path}`;
    const expected = [
      // Account and auth
      v2('POST', '/auth/register'),
      v2('POST', '/auth/login'),
      v2('POST', '/auth/logout'),
      v2('POST', '/auth/password/forgot'),
      v2('POST', '/auth/password/reset'),
      v2('POST', '/auth/email/verify'),
      v2('POST', '/auth/email/resend'),
      v2('GET', '/me'),
      v2('GET', '/me/summary'),
      v2('GET', '/me/home'),
      v2('PATCH', '/me/profile'),
      v2('PATCH', '/me/settings'),
      v2('PATCH', '/me/privacy'),
      v2('POST', '/me/email'),
      v2('POST', '/me/password'),
      v2('GET', '/me/sessions'),
      v2('DELETE', '/me/sessions/:id'),
      v2('DELETE', '/me/sessions'),
      v2('POST', '/me/export'),
      v2('GET', '/me/exports/:id'),
      v2('POST', '/me/delete'),
      v2('POST', '/me/delete/cancel'),
      v2('GET', '/me/downloads'),
      v2('DELETE', '/me/downloads'),
      v2('GET', '/me/follows'),
      v2('GET', '/me/onboarding'),
      v2('PATCH', '/me/onboarding'),
      // Catalog and search
      v2('GET', '/mods'),
      v2('GET', '/mods/:id'),
      v2('GET', '/mods/by-slug/:user/:slug'),
      v2('GET', '/mods/by-manifest/:manifestId'),
      v2('GET', '/resolve'),
      v2('GET', '/mods/:id/versions'),
      v2('GET', '/mods/:id/versions/:version'),
      v2('GET', '/mods/:id/dependencies'),
      v2('GET', '/mods/:id/dependents'),
      v2('GET', '/mods/:id/related'),
      v2('GET', '/mods/:id/stats/public'),
      v2('GET', '/categories'),
      v2('GET', '/tags'),
      v2('GET', '/creators'),
      v2('GET', '/users/:handle'),
      v2('GET', '/users/:handle/mods'),
      v2('GET', '/users/:handle/builds'),
      v2('GET', '/users/:handle/kits'),
      v2('GET', '/users/:handle/reviews'),
      v2('GET', '/users/:handle/activity'),
      v2('GET', '/users/:handle/badges'),
      v2('GET', '/search'),
      v2('GET', '/search/index'),
      v2('GET', '/site/stats'),
      v2('GET', '/live/pulse'),
      v2('GET', '/mods/:id/live'),
      v2('GET', '/badges'),
      v2('GET', '/awards/current'),
      v2('GET', '/announcements/active'),
      // Downloads and uploads
      v2('GET', '/versions/:id/download'),
      v2('POST', '/uploads'),
      v2('POST', '/uploads/:id/complete'),
      v2('GET', '/uploads/:id'),
      // Publishing and Basecamp
      v2('POST', '/drafts'),
      v2('GET', '/drafts'),
      v2('GET', '/drafts/:id'),
      v2('PATCH', '/drafts/:id'),
      v2('DELETE', '/drafts/:id'),
      v2('POST', '/drafts/:id/submit'),
      v2('GET', '/studio/mods'),
      v2('GET', '/studio/mods/:id'),
      v2('PATCH', '/studio/mods/:id'),
      v2('PUT', '/studio/mods/:id/media'),
      v2('POST', '/studio/mods/:id/versions'),
      v2('PATCH', '/studio/mods/:id/versions/:vid'),
      v2('POST', '/studio/mods/:id/archive'),
      v2('POST', '/studio/mods/:id/unlist'),
      v2('POST', '/studio/mods/:id/publish'),
      v2('POST', '/studio/mods/:id/request-removal'),
      v2('GET', '/studio/overview'),
      v2('GET', '/studio/analytics'),
      v2('GET', '/studio/analytics.csv'),
      v2('GET', '/studio/inbox'),
      // Translations (T1-25)
      v2('GET', '/mods/:id/translation'),
      v2('GET', '/studio/mods/:id/translations'),
      v2('PUT', '/studio/mods/:id/translations/:locale'),
      v2('DELETE', '/studio/mods/:id/translations/:locale'),
      // Community
      v2('GET', '/mods/:id/comments'),
      v2('GET', '/comments/:id'),
      v2('POST', '/mods/:id/comments'),
      v2('PATCH', '/comments/:id'),
      v2('DELETE', '/comments/:id'),
      v2('PUT', '/comments/:id/reactions/:kind'),
      v2('DELETE', '/comments/:id/reactions/:kind'),
      v2('POST', '/comments/:id/pin'),
      v2('DELETE', '/comments/:id/pin'),
      v2('POST', '/comments/:id/solution'),
      v2('POST', '/comments/:id/resolve'),
      v2('GET', '/mods/:id/reviews'),
      v2('GET', '/mods/:id/reviews/summary'),
      v2('POST', '/mods/:id/reviews'),
      v2('PATCH', '/reviews/:id'),
      v2('DELETE', '/reviews/:id'),
      v2('PUT', '/reviews/:id/vote'),
      v2('DELETE', '/reviews/:id/vote'),
      v2('PUT', '/reviews/:id/reply'),
      v2('DELETE', '/reviews/:id/reply'),
      v2('PUT', '/mods/:id/follow'),
      v2('DELETE', '/mods/:id/follow'),
      v2('PUT', '/users/:handle/follow'),
      v2('DELETE', '/users/:handle/follow'),
      v2('GET', '/kits'),
      v2('GET', '/kits/:id'),
      v2('GET', '/kits/by-slug/:user/:slug'),
      v2('GET', '/kits/by-code/:code'),
      v2('POST', '/kits'),
      v2('PATCH', '/kits/:id'),
      v2('DELETE', '/kits/:id'),
      v2('PUT', '/kits/:id/items'),
      v2('POST', '/kits/:id/fork'),
      v2('GET', '/mods/:id/compat'),
      v2('GET', '/ecosystem'),
      v2('GET', '/game-builds'),
      v2('GET', '/patch-radar'),
      v2('POST', '/compat-reports'),
      v2('PATCH', '/compat-reports/:id'),
      v2('DELETE', '/compat-reports/:id'),
      v2('POST', '/compat-reports/:id/acknowledge'),
      v2('POST', '/reports'),
      v2('GET', '/me/compat-prompts'),
      v2('POST', '/markdown/preview'),
      // Notifications and events
      v2('GET', '/notifications'),
      v2('GET', '/notifications/unread-count'),
      v2('POST', '/notifications/read'),
      v2('GET', '/notification-preferences'),
      v2('PUT', '/notification-preferences'),
      v2('GET', '/stream'),
      v2('POST', '/unsubscribe'),
      v2('POST', '/e'),
      v2('POST', '/e/vitals'),
      // Moderation and administration
      v2('GET', '/ranger/queue'),
      v2('GET', '/ranger/items/:id'),
      v2('POST', '/ranger/mods/:id/decision'),
      v2('POST', '/ranger/versions/:id/decision'),
      v2('GET', '/ranger/reports'),
      v2('POST', '/ranger/reports/:id/resolve'),
      v2('POST', '/ranger/comments/:id/hide'),
      v2('POST', '/ranger/comments/:id/unhide'),
      v2('POST', '/ranger/reviews/:id/hide'),
      v2('POST', '/ranger/reviews/:id/unhide'),
      v2('GET', '/ranger/users'),
      v2('GET', '/ranger/users/:id'),
      v2('POST', '/ranger/users/:id/sanctions'),
      v2('DELETE', '/ranger/sanctions/:id'),
      v2('PATCH', '/ranger/users/:id/role'),
      v2('PATCH', '/ranger/users/:id/verified-creator'),
      v2('POST', '/ranger/users/:id/revoke-sessions'),
      v2('POST', '/ranger/scans/:id/override'),
      v2('GET', '/ranger/audit'),
      v2('GET', '/admin/game-builds'),
      v2('POST', '/admin/game-builds'),
      v2('PATCH', '/admin/game-builds/:id'),
      v2('DELETE', '/admin/game-builds/:id'),
      v2('PUT', '/admin/ecosystem'),
      v2('GET', '/admin/categories'),
      v2('POST', '/admin/categories'),
      v2('PUT', '/admin/categories/:id'),
      v2('DELETE', '/admin/categories/:id'),
      v2('GET', '/admin/tags'),
      v2('POST', '/admin/tags'),
      v2('PUT', '/admin/tags/:id'),
      v2('DELETE', '/admin/tags/:id'),
      v2('POST', '/admin/recategorize'),
      v2('GET', '/admin/awards'),
      v2('POST', '/admin/awards'),
      v2('DELETE', '/admin/awards/:id'),
      v2('GET', '/admin/announcements'),
      v2('POST', '/admin/announcements'),
      v2('PUT', '/admin/announcements/:id'),
      v2('DELETE', '/admin/announcements/:id'),
      v2('GET', '/admin/settings/:key'),
      v2('PUT', '/admin/settings/:key'),
      v2('GET', '/admin/kelvinseek/usage'),
      v2('GET', '/admin/rum'),
      // Internal
      'GET /internal/downloads/resolve',
      'POST /internal/cdn/purge',
      'GET /healthz',
      'GET /readyz',
      // Legacy Tier 1 and Tier 2
      'GET /api/mods',
      'GET /api/mods/:mod_id',
      'GET /api/mods/:mod_id/check',
      'GET /api/kelvinseek/prompt',
      'GET /api/kelvinseek/clear',
      'GET /api/mods/slug/:userSlug/:mod_slug',
      'GET /api/mods/find',
      'GET /api/mods/featured',
      'GET /api/builds/featured',
      'GET /api/stats',
      'GET /api/stats/builds',
      'GET /api/categories',
      'GET /api/users/:userSlug',
      'GET /api/users/:userSlug/stats',
      'GET /api/comments',
      'GET /api/mods/:mod_id/download-stats',
      'GET /api/mods/:mod_id/download/:version',
      'GET /api/mods/slug/:userSlug/:mod_slug/download/:version',
    ];
    const missing = expected.filter((key) => !declared.has(key));
    expect(missing).toEqual([]);
  });

  it('exposes one group per domain file', () => {
    expect(Object.keys(apiContracts).sort()).toEqual(
      [
        'admin',
        'auth',
        'catalog',
        'comments',
        'compat',
        'downloads',
        'events',
        'follows',
        'gamification',
        'internal',
        'kits',
        'legacy',
        'me',
        'moderation',
        'notifications',
        'reviews',
        'search',
        'seo',
        'stats',
        'studio',
        'translations',
        'uploads',
        'versions',
      ].sort(),
    );
  });
});
