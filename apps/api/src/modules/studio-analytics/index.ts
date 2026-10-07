/**
 * Studio analytics module (WP-52, PLAN §5.2 "Publicación y Basecamp", §7.5, T0-20): Basecamp
 * overview, creator analytics (JSON and CSV) and the creator inbox. Private responses only
 * (`cache.private`); the rules and queries live in `@sotf/core/stats`.
 */
import { studioEndpoints } from '@sotf/contracts/studio';
import {
  getCreatorAnalytics,
  getCreatorAnalyticsCsv,
  getCreatorInbox,
  getStudioAttention,
  getStudioOverview,
} from '@sotf/core/stats/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'studio-analytics',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(studioEndpoints.overview, async ({ ctx }) => getStudioOverview(ctx, config));

    m.implement(studioEndpoints.attention, async ({ query, ctx }) => getStudioAttention(ctx, config, query));

    m.implement(studioEndpoints.analytics, async ({ query, ctx }) => getCreatorAnalytics(ctx, query));

    m.implement(studioEndpoints.analyticsCsv, async ({ query, ctx }) => {
      const csv = await getCreatorAnalyticsCsv(ctx, query);
      return { body: csv.body, filename: csv.filename, contentType: 'text/csv; charset=utf-8' };
    });

    m.implement(studioEndpoints.inbox, async ({ query, ctx }) => getCreatorInbox(ctx, config, query));
  },
});
