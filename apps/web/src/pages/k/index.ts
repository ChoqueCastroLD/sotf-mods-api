/**
 * `GET /k?code=…` — target of the «Have a kit code?» form on `/kits` (works without
 * JavaScript). A code that normalises (`KIT-XXXX-XX`, the short form, any case, Crockford
 * confusables) goes to `/k/XXXXXX`, which resolves it; `/k` without a code goes to `/kits`; an
 * impossible code gets the site's 404 page («Off the map»), like an unknown one.
 */
import { kitShortCode, normalizeKitCode } from '@sotf/contracts/kits';
import type { APIRoute } from 'astro';
import { href } from '../../lib/i18n.ts';

export const prerender = false;

export const GET: APIRoute = (context) => {
  const locale = context.locals.locale;
  const raw = context.url.searchParams.get('code')?.trim() ?? '';
  const headers = { 'cache-control': 'no-store', 'x-robots-tag': 'noindex' };
  if (!raw) return new Response(null, { status: 302, headers: { ...headers, location: href('/kits', locale) } });
  const code = normalizeKitCode(raw);
  if (!code) {
    context.locals.errorKind = 'not-found';
    return context.rewrite('/404');
  }
  return new Response(null, {
    status: 302,
    headers: { ...headers, location: href(`/k/${kitShortCode(code)}`, locale) },
  });
};
