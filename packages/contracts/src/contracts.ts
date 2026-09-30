/**
 * Registry of every endpoint contract, grouped by domain (PLAN §5.2, §5.5). Fastify registers
 * modules from here, the typed client exposes `api.<domain>.<name>()` and the OpenAPI generator
 * documents them. Each endpoint `id` is `<domain>.<name>` (checked by the tests).
 */
import { adminEndpoints } from './admin.ts';
import { authEndpoints } from './auth.ts';
import { buildViewerEndpoints } from './build-viewer.ts';
import { bundlesEndpoints } from './bundles.ts';
import { catalogEndpoints } from './catalog.ts';
import { commentsEndpoints } from './comments.ts';
import { compatEndpoints } from './compat.ts';
import { discoveryEndpoints } from './discovery.ts';
import { downloadsEndpoints } from './downloads.ts';
import type { Endpoint } from './endpoint.ts';
import { eventsEndpoints } from './events.ts';
import { followsEndpoints } from './follows.ts';
import { gamificationEndpoints } from './gamification.ts';
import { internalEndpoints } from './internal.ts';
import { jamsEndpoints } from './jams.ts';
import { kitSocialEndpoints } from './kit-social.ts';
import { kitsEndpoints } from './kits.ts';
import { legacyEndpoints } from './legacy.ts';
import { meEndpoints } from './me.ts';
import { modKnowledgeEndpoints } from './mod-knowledge.ts';
import { moderationEndpoints } from './moderation.ts';
import { notificationsEndpoints } from './notifications.ts';
import { oauthEndpoints } from './oauth.ts';
import { requestsEndpoints } from './requests.ts';
import { reviewsEndpoints } from './reviews.ts';
import { searchEndpoints } from './search.ts';
import { securityEndpoints } from './security.ts';
import { seoEndpoints } from './seo.ts';
import { statsEndpoints } from './stats.ts';
import { studioEndpoints } from './studio.ts';
import { tokensEndpoints } from './tokens.ts';
import { translationsEndpoints } from './translations.ts';
import { uploadsEndpoints } from './uploads.ts';
import { versionsEndpoints } from './versions.ts';

export const apiContracts = {
  admin: adminEndpoints,
  auth: authEndpoints,
  buildViewer: buildViewerEndpoints,
  bundles: bundlesEndpoints,
  catalog: catalogEndpoints,
  comments: commentsEndpoints,
  compat: compatEndpoints,
  discovery: discoveryEndpoints,
  downloads: downloadsEndpoints,
  events: eventsEndpoints,
  follows: followsEndpoints,
  gamification: gamificationEndpoints,
  internal: internalEndpoints,
  kits: kitsEndpoints,
  kitSocial: kitSocialEndpoints,
  legacy: legacyEndpoints,
  me: meEndpoints,
  modKnowledge: modKnowledgeEndpoints,
  moderation: moderationEndpoints,
  notifications: notificationsEndpoints,
  oauth: oauthEndpoints,
  jams: jamsEndpoints,
  requests: requestsEndpoints,
  reviews: reviewsEndpoints,
  search: searchEndpoints,
  security: securityEndpoints,
  seo: seoEndpoints,
  stats: statsEndpoints,
  studio: studioEndpoints,
  tokens: tokensEndpoints,
  translations: translationsEndpoints,
  uploads: uploadsEndpoints,
  versions: versionsEndpoints,
} as const;

export type ApiContracts = typeof apiContracts;
export type ContractDomain = keyof ApiContracts;

export interface EndpointEntry {
  domain: ContractDomain;
  name: string;
  endpoint: Endpoint;
}

/** Every endpoint with its domain and name, in declaration order. */
export function allEndpoints(): EndpointEntry[] {
  const out: EndpointEntry[] = [];
  for (const [domain, group] of Object.entries(apiContracts) as Array<[ContractDomain, Record<string, Endpoint>]>) {
    for (const [name, endpoint] of Object.entries(group)) out.push({ domain, name, endpoint });
  }
  return out;
}

/** Looks an endpoint up by its operation id (`catalog.getMod`). */
export function endpointById(id: string): Endpoint | undefined {
  return allEndpoints().find((entry) => entry.endpoint.id === id)?.endpoint;
}
