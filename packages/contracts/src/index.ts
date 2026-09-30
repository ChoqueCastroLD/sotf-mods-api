/**
 * @sotf/contracts (PLAN §5, WP-11): Zod 4 DTOs, endpoint contracts, error codes and `ProblemDTO`,
 * pagination, the `DomainEvent` union, job payloads, the typed `createApiClient`, the OpenAPI 3.1
 * generator and the legacy (v1) schemas generated from the golden fixtures.
 *
 * Browser code should import the narrowest subpath (`@sotf/contracts/client`,
 * `@sotf/contracts/catalog`…) to keep bundles small; the barrel re-exports everything.
 */
export * from './admin.ts';
export * from './auth.ts';
export * from './build-viewer.ts';
export * from './bundles.ts';
export * from './cache.ts';
export * from './catalog.ts';
export * from './client.ts';
export * from './comments.ts';
export * from './common.ts';
export * from './compat.ts';
export * from './contracts.ts';
export * from './discovery.ts';
export * from './domain-events.ts';
export * from './downloads.ts';
export * from './dto.ts';
export * from './endpoint.ts';
export * from './errors.ts';
export * from './events.ts';
export * from './follows.ts';
export * from './gamification.ts';
export * from './internal.ts';
export * from './jams.ts';
export * from './jobs.ts';
export * from './kit-social.ts';
export * from './kits.ts';
export * from './legacy.ts';
export * from './manifest.ts';
export * from './me.ts';
export * from './mod-knowledge.ts';
export * from './moderation.ts';
export * from './notifications.ts';
export * from './oauth.ts';
export * from './openapi.ts';
export * from './pagination.ts';
export * from './requests.ts';
export * from './reviews.ts';
export * from './search.ts';
export * from './seo.ts';
export * from './stats.ts';
export * from './studio.ts';
export * from './tokens.ts';
export * from './translations.ts';
export * from './uploads.ts';
export * from './versions.ts';
