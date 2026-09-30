/**
 * Downloads module (WP-31, PLAN §2.8, §5.2, T0-02, T0-17).
 *
 * - `GET|HEAD /api/v2/versions/:id/download` → 302 to R2 (`Cache-Control: no-store, private`,
 *   `X-Robots-Tag: noindex, nofollow`, `Referrer-Policy: no-referrer`); 404/410 problems.
 * - `GET /internal/downloads/resolve?user=&slug=&version=&method=` (🔒 `X-Internal-Auth`): the web
 *   route `/mods/:user/:slug/download/:version` forwards `CF-Connecting-IP`, `User-Agent`,
 *   `CF-IPCountry`, `Range` and `Sec-Purpose`; the API resolves, counts and answers
 *   `{status, location, reason, counted}` so the web can send the 302 itself. The forwarded session
 *   cookie (if any) links the download to the user.
 * - `GET|DELETE /api/v2/me/downloads`: "My downloads" and clearing it.
 * - The legacy aliases `/api/mods/:mod_id/download/:version` and
 *   `/api/mods/slug/:u/:s/download/:version` live in `src/legacy/downloads` and share this runtime.
 *
 * Counting never blocks: over 60 downloads/min per IP (soft `downloads` bucket) the request still
 * redirects, it is only not counted. Events are flushed every 2 s and on shutdown.
 */
import { SESSION_COOKIE } from '@sotf/contracts/auth';
import { downloadsEndpoints } from '@sotf/contracts/downloads';
import { resolveSession } from '@sotf/core/auth/index';
import {
  clearDownloadHistory,
  getDownloadHistory,
  removeDownloadFromHistory,
  toResolveDTO,
} from '@sotf/core/downloads/index';
import { registerLegacyDownloads } from '../../legacy/downloads/index.ts';
import { defineModule } from '../../lib/define-module.ts';
import { downloadsRuntime, installDownloadHeaders, redirectOrThrow, requestHints } from './runtime.ts';

export default defineModule({
  name: 'downloads',
  register(m) {
    const { service } = downloadsRuntime(m.app, m.platform);
    const env = m.platform.env;
    installDownloadHeaders(m.app);

    m.implement(downloadsEndpoints.versionDownload, async ({ params, ctx, request }) => {
      const outcome = await service.handle(
        ctx,
        { by: 'version', versionId: params.id },
        { surface: 'api', method: request.method, ...requestHints(request), overLimit: request.overSoftLimit },
      );
      return redirectOrThrow(outcome);
    });

    m.implement(downloadsEndpoints.resolve, async ({ query, ctx, request }) => {
      // Internal routes have no rate-limit bucket: count this download in the shared soft bucket,
      // keyed by the forwarded CF-Connecting-IP (request.clientIp).
      const overLimit = (await m.platform.rateLimiter.hit('downloads', request)) !== null;
      // Internal routes skip the platform's session resolution; the web forwards the visitor's
      // Cookie so a signed-in download is linked to "My downloads" (T0-02).
      const token = request.cookies?.[SESSION_COOKIE];
      const session = token ? await resolveSession(ctx.db, token, ctx.clock.now()) : null;
      const outcome = await service.handle(
        ctx,
        { by: 'slug', user: query.user, slug: query.slug, version: query.version },
        { surface: 'web', method: query.method, ...requestHints(request), overLimit, userId: session?.userId ?? null },
      );
      return toResolveDTO(outcome);
    });

    m.implement(downloadsEndpoints.myDownloads, async ({ ctx }) =>
      getDownloadHistory(ctx, { publicBaseUrl: env.R2_PUBLIC_BASE_URL, publicBucket: env.R2_BUCKET }),
    );

    m.implement(downloadsEndpoints.clearMyDownloads, async ({ ctx }) => {
      const detached = await clearDownloadHistory(ctx);
      ctx.log.info({ detached }, 'download history cleared');
    });

    m.implement(downloadsEndpoints.removeMyDownload, async ({ params, ctx }) => {
      const detached = await removeDownloadFromHistory(ctx, params.modId);
      ctx.log.info({ detached, modId: params.modId }, 'download history entry removed');
    });

    registerLegacyDownloads(m, service);
  },
});
