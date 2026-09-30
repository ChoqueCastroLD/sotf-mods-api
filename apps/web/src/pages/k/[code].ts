/**
 * `GET /k/:code` — short share URL of a kit (WP-71, PLAN §4.2 «`/k/:code` endpoint E(3600)
 * `kits/by-code` → 301», §7.8). Accepts the 6-character short code and every spelling of the
 * full one (`KIT-XXXX-XX`, any case, with or without dashes, Crockford confusables); answers a
 * 301 to the localised canonical page, edge-cached for an hour with `kit:{id}`. Private and
 * unknown codes get the site's 404 page (short TTL).
 */
import { cacheTag } from '@sotf/contracts/cache';
import type { APIRoute } from 'astro';
import { kitByCode } from '../../components/kits/data.ts';
import { setPageCache } from '../../lib/cache/page.ts';
import { EDGE_TTL, pageCache } from '../../lib/cache/policy.ts';
import { href } from '../../lib/i18n.ts';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const raw = context.params.code ?? '';
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    // Keep the raw segment: it simply will not normalise to a code.
  }
  const kit = await kitByCode(decoded);
  if (!kit) {
    context.locals.errorKind = 'not-found';
    return context.rewrite('/404');
  }
  setPageCache(context, pageCache.custom(EDGE_TTL.hour, [cacheTag.kit(kit.id)]));
  return context.redirect(href(kit.canonicalPath, context.locals.locale), 301);
};
