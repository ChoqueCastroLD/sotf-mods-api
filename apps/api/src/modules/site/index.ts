/**
 * Site module (WP-33): public figures of PLAN §5.2: `GET /site/stats`, `GET /live/pulse`,
 * `GET /mods/:id/live` and `GET /mods/:id/stats/public` (edge 30–60 s, tag `stats`).
 */
import { statsEndpoints } from '@sotf/contracts';
import { getLivePulse, getModLive, getModPublicStats, getSiteStats } from '@sotf/core/catalog/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'site',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(statsEndpoints.site, async ({ ctx }) => getSiteStats(ctx, config));

    m.implement(statsEndpoints.livePulse, async ({ ctx }) => getLivePulse(ctx, config));

    m.implement(statsEndpoints.modLive, async ({ params, ctx, cache }) => {
      cache({ id: params.id });
      return getModLive(ctx, config, params.id);
    });

    m.implement(statsEndpoints.modPublicStats, async ({ params, query, ctx, cache }) => {
      cache({ id: params.id });
      return getModPublicStats(ctx, config, params.id, query.range);
    });
  },
});
