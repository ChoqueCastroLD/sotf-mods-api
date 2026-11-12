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
import { DETAIL_PAGE, DETAIL_PARAMS } from '../lib/cache/cloudflare-tags.ts';
import { requestLocaleOrDefault } from '../lib/cache/request-locale.ts';
import { finalizePublicResponse } from '../lib/cache/response.ts';
import { configureDomainMessages } from '../lib/domain-i18n.ts';
import { loadEnv } from '../lib/env.ts';
import { configureUiMessages, href } from '../lib/i18n.ts';
import { passGate } from '../lib/server/js-pass.ts';
import {
  eventLoopLag,
  fakeBrowserResponse,
  isBusy,
  isExpensiveQuery,
  isFakeBrowser,
  isSheddable,
  shedResponse,
} from '../lib/server/load-shed.ts';
import { listingRateLimit, tooManyRequests } from '../lib/server/rate-limit.ts';
import { requestIdOf } from '../lib/server/request-id.ts';
import { isTransientUpstreamError, retryAfterSeconds } from '../lib/server/upstream.ts';
import { legacyRule } from './redirects.ts';
import { securityMiddleware } from './security.ts';

configureUiMessages();
configureDomainMessages();

let inFlight = 0;

/**
 * The cheap refusals, in order: rate limits (429), scripts posing as browsers on expensive URLs
 * (403), the JavaScript pass of multi-filter listings (`lib/server/js-pass.ts`), load shedding
 * (429); otherwise the page renders.
 */
async function guard(url: URL, method: string, headers: Headers, next: () => Promise<Response>): Promise<Response> {
  const retryAfter = method === 'GET' ? listingRateLimit(url, headers) : null;
  if (retryAfter !== null) return tooManyRequests(retryAfter, headers.get('accept') ?? '');
  if (isExpensiveQuery(url) && isFakeBrowser(headers)) return fakeBrowserResponse();
  const gated = method === 'GET' ? passGate(url, headers, loadEnv().internalSecret) : null;
  if (gated) return gated;
  if (isSheddable(url, headers) && isBusy(inFlight)) return shedResponse();
  inFlight++;
  try {
    return await next();
  } finally {
    inFlight--;
  }
}

/**
 * One JSON line per page request (stdout): who renders what, to spot crawlers that bypass the
 * edge, after `guard` decided whether to render.
 */
const accessLog = defineMiddleware(async (context, next) => {
  const started = performance.now();
  const headers = context.request.headers;
  const response = await guard(context.url, context.request.method, headers, next);
  process.stdout.write(
    `${JSON.stringify({
      msg: 'request',
      method: context.request.method,
      path: context.url.pathname + context.url.search,
      status: response.status,
      ms: Math.round(performance.now() - started),
      ip: headers.get('cf-connecting-ip') ?? undefined,
      country: headers.get('cf-ipcountry') ?? undefined,
      ua: headers.get('user-agent')?.slice(0, 160),
      inFlight,
      lag: eventLoopLag(),
      sf: headers.has('sec-fetch-mode') ? 1 : 0,
      gate: response.headers.get('x-sotf-gate') ?? undefined,
    })}\n`,
  );
  return response;
});

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

  // Mod and build pages read only `adult`: any other parameter (crawlers append random ones to
  // dodge caches) is dropped with a 301 before rendering. `utm_*` stay for the analytics.
  if (DETAIL_PAGE.test(url.pathname) && context.request.method === 'GET') {
    const kept = [...url.searchParams].filter(([name]) => DETAIL_PARAMS.has(name) || name.startsWith('utm_'));
    if (kept.length !== [...url.searchParams].length) {
      const query = new URLSearchParams(kept).toString();
      return new Response(null, {
        status: 301,
        headers: {
          location: `${href(url.pathname, locale)}${query ? `?${query}` : ''}`,
          'cache-control': 'public, max-age=3600',
          'cloudflare-cdn-cache-control': 'public, max-age=86400',
          'x-sotf-cache-tags': 'html',
        },
      });
    }
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

export const onRequest = sequence(accessLog, securityMiddleware, siteMiddleware);
