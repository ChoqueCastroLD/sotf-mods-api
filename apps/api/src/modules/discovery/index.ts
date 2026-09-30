/**
 * Discovery module (WP-33, T1-07 and T1-15): Scout, the natural-language mod finder of Cmd+K, and
 * the "players also downloaded" / "similar mods" recommendations of the mod page.
 *
 * `POST /api/v2/scout` is public but bounded: the `scout` bucket (6/min), 60 questions per day per
 * user or IP, cached answers, and the global daily spend cap (`SCOUT_DAILY_BUDGET_USD`). Without
 * `OPENAI_API_KEY` Scout reports `available: false` and the palette hides its mode.
 */
import { discoveryEndpoints } from '@sotf/contracts';
import type { ScoutConfig, ScoutDeps } from '@sotf/core/discovery/index';
import { askScout, getRecommendations, scoutStatus } from '@sotf/core/discovery/index';
import { openAiModel } from '@sotf/core/kelvinseek/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

/** Model timeout (ms): Scout sends ~30 candidates, so it needs more than KelvinSeek's 8 s. */
const SCOUT_TIMEOUT_MS = 20_000;
/** Questions per day per user (or IP for guests). */
const SCOUT_PER_DAY = 60;

export default defineModule({
  name: 'discovery',
  register(m) {
    const { env, rateLimiter } = m.platform;
    const catalog = catalogConfigOf(env);
    const config: ScoutConfig = {
      enabled: env.SCOUT_ENABLED,
      model: env.SCOUT_MODEL,
      dailyBudgetUsd: env.SCOUT_DAILY_BUDGET_USD,
      timeoutMs: SCOUT_TIMEOUT_MS,
    };
    const deps: ScoutDeps = {
      catalog,
      config,
      model: env.OPENAI_API_KEY ? openAiModel({ apiKey: env.OPENAI_API_KEY }) : null,
    };

    m.implement(discoveryEndpoints.scoutStatus, async ({ ctx }) => scoutStatus(ctx, deps));

    m.implement(discoveryEndpoints.scout, async ({ body, ctx, request }) => {
      const actor = ctx.actor ? `u:${ctx.actor.userId}` : `ip:${request.clientIp}`;
      await rateLimiter.consume('scout-day', actor, { max: SCOUT_PER_DAY, window: '1 day' });
      return askScout(ctx, deps, { question: body.question, locale: body.locale });
    });

    m.implement(discoveryEndpoints.recommendations, async ({ params, ctx, cache }) => {
      const result = await getRecommendations(ctx, catalog, params.id);
      cache({ id: params.id });
      return result;
    });
  },
});
