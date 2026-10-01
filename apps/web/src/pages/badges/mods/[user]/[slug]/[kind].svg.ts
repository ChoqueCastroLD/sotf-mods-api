/**
 * `GET /badges/mods/:user/:slug/:kind.svg` (PLAN §7.13 T1-09): SVG badge (`downloads`, `version`,
 * `compat`, `rating`) for READMEs and posts. Cached 1 h with `mod:{id}`; renamed slugs 301 to the
 * canonical badge URL, unknown mods answer a short-lived 404.
 */
import type { CacheTag } from '@sotf/contracts/cache';
import type { APIRoute } from 'astro';
import { serverApi } from '../../../../../lib/api.ts';
import { badgeParts, isBadgeKind, renderBadge } from '../../../../../lib/seo/badge.ts';
import { apiStatus } from '../../../../../lib/seo/data.ts';
import { lookupMod, rawSegments, stripSuffix, underMods } from '../../../../../lib/seo/entities.ts';
import { machineError, machineRedirect, machineResponse } from '../../../../../lib/seo/respond.ts';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const segments = rawSegments(context.url);
  const user = segments[2] ?? '';
  const slug = segments[3] ?? '';
  const kind = stripSuffix(segments[4] ?? '', '.svg');
  if (!isBadgeKind(kind)) return machineError(context, 404, 'Not found.');
  try {
    const found = await lookupMod('mods', user, slug);
    if (found.status === 404 || found.status === 410) {
      return machineError(context, found.status, found.status === 410 ? 'Gone.' : 'Not found.');
    }
    if (found.status === 301 && found.id === null)
      return machineRedirect(`/badges${underMods(found.canonicalPath)}/${kind}.svg`);
    const id = found.id as number;
    const mod = await serverApi().catalog.getMod({ params: { id } });
    const tags: CacheTag[] = [`mod:${mod.id}`];
    const svg = renderBadge(
      badgeParts(kind, {
        downloads: mod.downloads,
        latestVersion: mod.latestVersion?.version ?? null,
        compatStatus: mod.compatCurrent.status,
        gameBuildLabel: mod.compatCurrent.gameBuild?.label ?? null,
        ratingAvg: mod.ratingAvg,
        ratingCount: mod.ratingCount,
      }),
    );
    return machineResponse(context, svg, {
      contentType: 'image/svg+xml; charset=utf-8',
      tags,
      headers: { 'x-content-type-options': 'nosniff' },
    });
  } catch (error) {
    // The resolver can name a mod the public detail hides (pending review): that is a 404, not an outage.
    const status = apiStatus(error);
    if (status) return machineError(context, status, status === 410 ? 'Gone.' : 'Not found.');
    console.error('[web] badge failed', error);
    return new Response('Unavailable.\n', {
      status: 503,
      headers: { 'retry-after': '60', 'cache-control': 'no-store' },
    });
  }
};
