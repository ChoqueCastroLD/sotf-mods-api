/**
 * `GET /.well-known/api-catalog` (RFC 9727): where the API, its OpenAPI description and its docs
 * are, as an RFC 9264 linkset, so tools and AI agents can find them from the site root.
 */
import type { APIRoute } from 'astro';
import { loadEnv } from '../../lib/env.ts';
import { machineResponse } from '../../lib/seo/respond.ts';

export const prerender = false;

export function apiCatalog(siteUrl: string) {
  const site = siteUrl.replace(/\/+$/, '');
  return {
    linkset: [
      {
        anchor: `${site}/api/v2`,
        'service-desc': [{ href: `${site}/api/v2/openapi.json`, type: 'application/vnd.oai.openapi+json' }],
        'service-doc': [
          { href: `${site}/developers/api.md`, type: 'text/markdown' },
          { href: `${site}/api/docs`, type: 'text/html' },
        ],
        'service-meta': [{ href: `${site}/api/v2`, type: 'application/json' }],
      },
    ],
  };
}

export const GET: APIRoute = (context) =>
  machineResponse(context, JSON.stringify(apiCatalog(loadEnv().siteUrl), null, 2), {
    contentType: 'application/linkset+json; charset=utf-8',
    headers: { 'access-control-allow-origin': '*' },
  });
