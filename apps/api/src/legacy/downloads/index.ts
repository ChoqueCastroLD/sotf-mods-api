/**
 * Legacy download aliases (WP-31, PLAN §2.8, §5.5, research/01 §6.2), served on
 * `api.sotf-mods.com` and on `sotf-mods.com/api/*`:
 *
 * - `GET|HEAD /api/mods/:mod_id/download/:version` (manifest `mod_id`);
 * - `GET|HEAD /api/mods/slug/:userSlug/:mod_slug/download/:version` (tolerant resolver).
 *
 * Both answer the same 302 as the web route instead of streaming the file (intentional deviation
 * `download-302`); the legacy `?ip=&agent=` parameters are ignored (the IP comes from
 * `CF-Connecting-IP`, never from the caller). Errors use the legacy envelope (`errorFormat:
 * 'legacy'`): an unknown mod or version is a real 404, never the old 200 with an error body.
 */
import { legacyEndpoints } from '@sotf/contracts/legacy';
import type { DownloadsService } from '@sotf/core/downloads/index';
import type { ModuleContext } from '../../lib/define-module.ts';
import { redirectOrThrow, requestHints } from '../../modules/downloads/runtime.ts';

export function registerLegacyDownloads(m: ModuleContext, service: DownloadsService): void {
  m.implement(legacyEndpoints.download, async ({ params, ctx, request }) => {
    const outcome = await service.handle(
      ctx,
      { by: 'manifest', manifestId: params.mod_id, version: params.version },
      { surface: 'legacy', method: request.method, ...requestHints(request), overLimit: request.overSoftLimit },
    );
    return redirectOrThrow(outcome);
  });

  m.implement(legacyEndpoints.downloadBySlug, async ({ params, ctx, request }) => {
    const outcome = await service.handle(
      ctx,
      { by: 'slug', user: params.userSlug, slug: params.mod_slug, version: params.version },
      { surface: 'legacy', method: request.method, ...requestHints(request), overLimit: request.overSoftLimit },
    );
    return redirectOrThrow(outcome);
  });
}
