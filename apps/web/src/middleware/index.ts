/**
 * Astro middleware of the public site (PLAN §4.1, §4.6, §2.7). Runs for every SSR request,
 * including the 404/500 pages, after the server entry (`src/lib/server/fetch.ts`) has stripped
 * the locale prefix:
 *
 * 1. request context: `locals.locale`, `locals.pagePath`, `locals.requestId`;
 * 2. legacy rules (`redirects.ts`): 301 to the v2 URL, or 410 for 2023 uploads;
 * 3. the render runs inside `withLocale(locale)` so every message resolves per request;
 * 4. response hygiene: edge-cache headers from `setPageCache()` where Astro's cache did not run
 *    (dev server, error pages), no shared caching of anything that sets a cookie, and the
 *    browser policy of public HTML.
 */

import { defineMiddleware } from 'astro:middleware';
import { withLocale } from '@sotf/i18n/server';
import { requestLocaleOrDefault } from '../lib/cache/request-locale.ts';
import { finalizePublicResponse } from '../lib/cache/response.ts';
import { configureUiMessages } from '../lib/i18n.ts';
import { requestIdOf } from '../lib/server/request-id.ts';
import { legacyRule } from './redirects.ts';

configureUiMessages();

export const onRequest = defineMiddleware(async (context, next) => {
  const locale = requestLocaleOrDefault(context.request);
  const url = context.url;
  context.locals.locale = locale;
  context.locals.pagePath = url.pathname + url.search;
  context.locals.requestId = requestIdOf(context.request);

  const rule = legacyRule(url.pathname, url.search, locale, context.request.method);
  if (rule.kind === 'redirect') {
    return new Response(null, {
      status: rule.status,
      headers: {
        location: rule.location,
        'cache-control': 'public, max-age=3600',
        'cloudflare-cdn-cache-control': 'public, max-age=86400',
        'x-sotf-cache-tags': 'html',
      },
    });
  }

  return withLocale(locale, async () => {
    // `/images/…` never matches a page, so Astro is already rendering 404.astro: flag it as
    // «gone» (different copy) and answer 410.
    if (rule.kind === 'gone') context.locals.errorKind = 'gone';
    let response = await next();
    if (rule.kind === 'gone' && response.status === 404) {
      response = new Response(response.body, { status: 410, headers: response.headers });
    }
    return finalizePublicResponse(response, {
      method: context.request.method,
      locale,
      policy: context.locals.pageCache,
      setsCookies: [...context.cookies.headers()].length > 0,
    });
  });
});
