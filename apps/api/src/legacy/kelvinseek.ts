/**
 * KelvinSeek legacy routes (PLAN §5.5 Tier 1, research/01 §2.7). The service is deprecated: the
 * endpoints stay only so the old in-game mod does not break, and they no longer call any AI model.
 *
 * `GET /api/kelvinseek/prompt` answers `text/plain;charset=utf-8` `"{command}|{answer}"` with
 * status 200, always the deterministic legacy fallback (closest command to the player's words);
 * `GET /api/kelvinseek/clear` answers `Chat cleared` (and drops any stored conversation of the
 * chat). Both are `no-store`. A missing parameter is a 422 legacy JSON envelope (the contract's
 * query schema). The `kelvinseek` rate limit bucket (20/min per chat_id + IP, 429) is applied by
 * the platform.
 */
import { KELVINSEEK_CLEAR_REPLY, LEGACY_TEXT_CONTENT_TYPE, legacyEndpoints } from '@sotf/contracts/legacy';
import { fallbackReply, kelvinSeekClear, sanitizeInput } from '@sotf/core/kelvinseek/index';
import type { LegacyContext } from './context.ts';

function text(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export function registerKelvinSeekRoutes(ctx: LegacyContext): void {
  const { env, db } = ctx.platform;

  ctx.route(legacyEndpoints.kelvinseekPrompt, async ({ query }) => ({
    text: fallbackReply(sanitizeInput(text(query.text)), 'error'),
    contentType: LEGACY_TEXT_CONTENT_TYPE,
  }));

  ctx.route(legacyEndpoints.kelvinseekClear, async ({ query }) => {
    await kelvinSeekClear({ db, appSecret: env.APP_SECRET }, text(query.chat_id));
    return { text: KELVINSEEK_CLEAR_REPLY, contentType: LEGACY_TEXT_CONTENT_TYPE };
  });
}
