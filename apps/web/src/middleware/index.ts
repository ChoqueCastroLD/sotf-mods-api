/**
 * Astro middleware of the public site (PLAN §4.1, §4.6, §2.7). Runs for every SSR request,
 * including the 404/500 pages, after the server entry (`src/lib/server/fetch.ts`) has stripped
 * the locale prefix:
 *
 * 0. resource isolation (`security.ts`, WP-93): Fetch Metadata policy, runs before everything;
 * 1. request context: `locals.locale`, `locals.pagePath`, `locals.requestId`;
 * 2. legacy rules (`redirects.ts`): 301 to the v2 URL, or 410 for 2023 uploads;
 * 3. the render runs inside `withLocale(locale)` so every message resolves per request;
 * 4. response hygiene: edge-cache headers from `setPageCache()` where Astro's cache did not run
 *    (dev server, error pages), no shared caching of anything that sets a cookie, and the
 *    browser policy of public HTML.
 */

import { defineMiddleware, sequence } from 'astro:middleware';
import { withLocale } from '@sotf/i18n/server';
import { requestLocaleOrDefault } from '../lib/cache/request-locale.ts';
import { finalizePublicResponse } from '../lib/cache/response.ts';
import { configureDomainMessages } from '../lib/domain-i18n.ts';
import { configureUiMessages } from '../lib/i18n.ts';
import { requestIdOf } from '../lib/server/request-id.ts';
import { isTransientUpstreamError, retryAfterSeconds } from '../lib/server/upstream.ts';
import { legacyRule } from './redirects.ts';
import { securityMiddleware } from './security.ts';

configureUiMessages();
configureDomainMessages();

const siteMiddleware = defineMiddleware(async (context, next) => {
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
    let response: Response;
    try {
      response = await next();
    } catch (error) {
      // The API rate limiting or failing is transient: render the error page as 503 + Retry-After.
      if (!isTransientUpstreamError(error)) throw error;
      context.locals.upstreamError = error;
      const page = await context.rewrite('/500');
      const headers = new Headers(page.headers);
      headers.set('retry-after', String(retryAfterSeconds(error)));
      headers.set('cache-control', 'no-store');
      response = new Response(page.body, { status: 503, headers });
    }
    // Tombstoned pages (`respondUnresolved` flags `gone` and rewrites to 404.astro) are 410 as well.
    if (context.locals.errorKind === 'gone' && response.status === 404) {
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

export const onRequest = sequence(securityMiddleware, siteMiddleware);
