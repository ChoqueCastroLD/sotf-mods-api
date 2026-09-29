/**
 * Server entry of the web app (Astro `fetchFile`, see `astro.config.mjs`).
 *
 * Why an entry and not only middleware (i18n spike, see `src/lib/README.md`): Astro matches the
 * route *before* middleware runs, so `/es/mods/…` would never match `pages/mods/…`; rewriting in
 * middleware works only through the 404 error path, which skips the route cache (no LRU, no
 * cache headers). Here the locale prefix is stripped **before** routing, so every locale goes
 * through the normal pipeline (route match → cache provider → middleware → page):
 *
 * 1. canonical redirects that must happen before the prefix is removed (trailing slash, `/en/…`,
 *    prefixed unlocalized paths);
 * 2. `/{locale}/rest` → `/rest` with the locale in the internal `x-sotf-locale` header (always
 *    overwritten, never trusted from the client);
 * 3. after Astro: publish the cache tags as `Cache-Tag`, add the baseline security headers.
 *
 * Importing this module validates the environment (fails fast) and schedules the post-deploy
 * purge.
 */
import type { Fetchable } from 'astro';
import { astro, FetchState } from 'astro/fetch';
import { entryDecision } from '../../middleware/redirects.ts';
import { loadEnv } from '../env.ts';
import { schedulePostDeployPurge } from './deploy-purge.ts';
import { finalizeResponse, prepareRequest, redirectResponse } from './entry-utils.ts';

const env = loadEnv();
schedulePostDeployPurge(env);

export async function handle(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const decision = entryDecision(url, request.method);
  if (decision.redirect) {
    return finalizeResponse(
      redirectResponse(decision.redirect.status, decision.redirect.location),
      env.siteEnv,
      url.pathname,
    );
  }
  const prepared = prepareRequest(request, decision.path, decision.locale);
  const response = await astro(new FetchState(prepared));
  return finalizeResponse(response, env.siteEnv, decision.path.split('?', 1)[0] ?? '/');
}

export default { fetch: handle } satisfies Fetchable;
