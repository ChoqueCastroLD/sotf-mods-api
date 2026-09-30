/**
 * Site module (WP-33): public figures of PLAN §5.2: `GET /site/stats`, `GET /live/pulse`,
 * `GET /mods/:id/live` and `GET /mods/:id/stats/public` (edge 30–60 s, tag `stats`).
 */
import { statsEndpoints } from '@sotf/contracts';
import { getLivePulse, getModBadge, getModLive, getModPublicStats, getSiteStats } from '@sotf/core/catalog/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';
import { encodedJson } from '../catalog/respond.ts';

export default defineModule({
  name: 'site',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(statsEndpoints.site, async ({ ctx, request, reply }) =>
      encodedJson(statsEndpoints.site, request, reply, await getSiteStats(ctx, config)),
    );

    m.implement(statsEndpoints.livePulse, async ({ ctx, request, reply }) =>
      encodedJson(statsEndpoints.livePulse, request, reply, await getLivePulse(ctx, config)),
    );

    m.implement(statsEndpoints.modLive, async ({ params, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      return encodedJson(statsEndpoints.modLive, request, reply, await getModLive(ctx, config, params.id));
    });

    m.implement(statsEndpoints.modBadge, async ({ params, ctx, cache }) => {
      cache({ id: params.id });
      return {
        body: await getModBadge(ctx, config, params.id, params.kind),
        contentType: 'image/svg+xml; charset=utf-8',
      };
    });

    m.implement(statsEndpoints.modPublicStats, async ({ params, query, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      const series = await getModPublicStats(ctx, config, params.id, query.range);
      return encodedJson(statsEndpoints.modPublicStats, request, reply, series);
    });
  },
});
