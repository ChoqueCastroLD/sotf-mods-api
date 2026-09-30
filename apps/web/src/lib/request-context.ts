/**
 * Request context for pages that may render without the middleware (Astro renders the 500 page
 * with `skipMiddleware` when the middleware itself failed). Fills the locals the layout needs from
 * the request, so an error page can always render.
 */
import { requestLocaleOrDefault } from './cache/request-locale.ts';
import { requestIdOf } from './server/request-id.ts';

export function ensureLocals(context: { locals: App.Locals; request: Request; url: URL }): App.Locals {
  const locals = context.locals;
  locals.locale ??= requestLocaleOrDefault(context.request);
  locals.pagePath ??= context.url.pathname + context.url.search;
  locals.requestId ??= requestIdOf(context.request);
  return locals;
}
