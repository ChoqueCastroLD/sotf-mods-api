/**
 * KelvinSeek routes (PLAN §5.5 Tier 1, research/01 §2.7): `GET /api/kelvinseek/prompt` answers
 * `text/plain;charset=utf-8` `"{command}|{answer}"` with status 200 whatever happens to the model;
 * `GET /api/kelvinseek/clear` answers `Chat cleared`. Both are `no-store`. A missing parameter is
 * a 422 legacy JSON envelope (the contract's query schema).
 *
 * Limits: the `kelvinseek` bucket (20/min per chat_id + IP, 429) is applied by the platform; above
 * 300 requests per day per chat_id + IP, or above the daily budget, the fallback answers without
 * calling the model.
 */
import { KELVINSEEK_CLEAR_REPLY, LEGACY_TEXT_CONTENT_TYPE, legacyEndpoints } from '@sotf/contracts/legacy';
import { isDomainError } from '@sotf/core';
import {
  KELVINSEEK_DAILY_CHAT_LIMIT,
  type KelvinModel,
  type KelvinSeekConfig,
  kelvinSeekClear,
  kelvinSeekPrompt,
  loadKelvinSeekConfig,
  openAiModel,
} from '@sotf/core/kelvinseek/index';
import type { LegacyContext } from './context.ts';

/** Default model timeout (PLAN §5.5: 8 s). */
export const KELVINSEEK_TIMEOUT_MS = 8_000;
/** How long the `SiteSetting('kelvinseek')` override is cached. */
const CONFIG_TTL_MS = 30_000;

export interface KelvinSeekRouteOptions {
  /** Overrides the model (tests); default: OpenAI when OPENAI_API_KEY is set, else none. */
  model?: KelvinModel | null;
  /** OpenAI base URL (tests point it at a simulated server). */
  openAiBaseUrl?: string;
  /** Default timeout (ms) when the site setting does not set one. */
  timeoutMs?: number;
  /** Requests per day per chat_id + IP before the fallback answers (default 300). */
  dailyChatLimit?: number;
}

function text(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export function registerKelvinSeekRoutes(ctx: LegacyContext, options: KelvinSeekRouteOptions = {}): void {
  const { env, db, log, rateLimiter } = ctx.platform;
  const model: KelvinModel | null =
    options.model !== undefined
      ? options.model
      : env.OPENAI_API_KEY
        ? openAiModel({
            apiKey: env.OPENAI_API_KEY,
            ...(options.openAiBaseUrl ? { baseUrl: options.openAiBaseUrl } : {}),
          })
        : null;
  const defaults: KelvinSeekConfig = {
    enabled: true,
    model: env.KELVINSEEK_MODEL,
    dailyBudgetUsd: env.KELVINSEEK_DAILY_BUDGET_USD,
    timeoutMs: options.timeoutMs ?? KELVINSEEK_TIMEOUT_MS,
  };
  let cached: { at: number; config: KelvinSeekConfig } | null = null;
  const config = async (): Promise<KelvinSeekConfig> => {
    const now = ctx.clock.now().getTime();
    if (cached && now - cached.at < CONFIG_TTL_MS) return cached.config;
    cached = { at: now, config: await loadKelvinSeekConfig(db, defaults) };
    return cached.config;
  };
  const deps = { db, appSecret: env.APP_SECRET, log: log.child({ module: 'kelvinseek' }), clock: ctx.clock, model };

  ctx.route(legacyEndpoints.kelvinseekPrompt, async ({ query, request }) => {
    const chatId = text(query.chat_id);
    let overDailyLimit = false;
    try {
      await rateLimiter.consume('kelvinseek-day', `${chatId.slice(0, 200)}|${request.clientIp}`, {
        max: options.dailyChatLimit ?? KELVINSEEK_DAILY_CHAT_LIMIT,
        window: '1 day',
      });
    } catch (error) {
      if (!isDomainError(error) || error.code !== 'RATE_LIMITED') throw error;
      overDailyLimit = true;
    }
    const result = await kelvinSeekPrompt(deps, await config(), {
      chatId,
      text: text(query.text),
      context: text(query.context),
      overDailyLimit,
    });
    request.log.info({ outcome: result.outcome }, 'kelvinseek prompt');
    return { text: result.reply, contentType: LEGACY_TEXT_CONTENT_TYPE };
  });

  ctx.route(legacyEndpoints.kelvinseekClear, async ({ query }) => {
    await kelvinSeekClear(deps, text(query.chat_id));
    return { text: KELVINSEEK_CLEAR_REPLY, contentType: LEGACY_TEXT_CONTENT_TYPE };
  });
}
