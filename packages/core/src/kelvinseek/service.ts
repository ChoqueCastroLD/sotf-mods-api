/**
 * KelvinSeek (PLAN §5.5, research/01 §2.7): the in-game companion mod sends the player's text and
 * gets back `"{command}|{answer}"` (always 200, `text/plain`).
 *
 * v2 keeps the protocol, the command list, the prompt and the fallback of the legacy API and adds:
 * - `chat_id` (it contains the SteamID and Steam name) is stored as `keyedHash(APP_SECRET)` with
 *   `isHashed = true`, and hashed rows are deleted after 30 days (`cleanupKelvinSeek`);
 * - the conversation keeps the **32 most recent** messages (the legacy deleted the newest ones);
 * - the model call has a timeout (8 s by default) and a daily budget in USD; when the model cannot
 *   be used (no key, disabled, budget spent, per-chat daily limit, timeout, error, empty answer)
 *   the deterministic legacy fallback answers instead;
 * - daily usage (requests, fallbacks, tokens, cost) is aggregated in `"KelvinUsageDaily"`.
 */
import { type Database, type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { type Clock, systemClock, utcDay } from '../kernel/clock.ts';
import { keyedHash } from '../kernel/hashing.ts';
import type { Logger } from '../kernel/logger.ts';
import { firstRow, rows } from '../legacy/db.ts';
import { type KelvinModel, KelvinModelError, kelvinCostMicroUsd } from './model.ts';
import { kelvinPrompt } from './prompt.ts';
import {
  fallbackReply,
  type KelvinSeekFallbackReason,
  parseModelAnswer,
  previousConversations,
  sanitizeInput,
} from './text.ts';

/** Messages kept per chat (and sent as context). */
export const KELVINSEEK_HISTORY_LIMIT = 32;
/** Days hashed conversations are kept. */
export const KELVINSEEK_RETENTION_DAYS = 30;
/** Requests per chat and IP per day before the model is skipped (PLAN §5.1 `kelvinseek`). */
export const KELVINSEEK_DAILY_CHAT_LIMIT = 300;

export interface KelvinSeekConfig {
  enabled: boolean;
  model: string;
  dailyBudgetUsd: number;
  timeoutMs: number;
}

export interface KelvinSeekDeps {
  db: Database;
  appSecret: string;
  log: Logger;
  clock?: Clock;
  /** null: no model configured (no OPENAI_API_KEY) → always the fallback. */
  model: KelvinModel | null;
}

export interface KelvinSeekInput {
  chatId: string;
  text: string;
  context: string;
  /** The chat went over its daily request limit: answer without the model. */
  overDailyLimit?: boolean;
}

export type KelvinSeekOutcome =
  | 'model'
  | 'fallback:disabled'
  | 'fallback:budget'
  | 'fallback:limit'
  | 'fallback:timeout'
  | 'fallback:error'
  | 'fallback:empty';

export interface KelvinSeekResult {
  /** `"{command}|{answer}"`. */
  reply: string;
  outcome: KelvinSeekOutcome;
}

/** `HMAC(APP_SECRET, chat_id)` as stored in `"KelvinGPTMessages"."chatId"`. */
export function kelvinChatHash(appSecret: string, chatId: string): string {
  return keyedHash(appSecret, 'kelvinseek-chat', chatId);
}

/** Settings of `"SiteSetting"('kelvinseek')` over the environment defaults. */
export async function loadKelvinSeekConfig(db: Executor, defaults: KelvinSeekConfig): Promise<KelvinSeekConfig> {
  const row = await firstRow<{ value: Partial<KelvinSeekConfig> | null }>(
    db,
    sql`SELECT "value" FROM "SiteSetting" WHERE "key" = 'kelvinseek'`,
  );
  const value = row?.value;
  if (!value || typeof value !== 'object') return defaults;
  return {
    enabled: typeof value.enabled === 'boolean' ? value.enabled : defaults.enabled,
    model: typeof value.model === 'string' && value.model.trim() ? value.model.trim() : defaults.model,
    dailyBudgetUsd:
      typeof value.dailyBudgetUsd === 'number' && value.dailyBudgetUsd >= 0
        ? value.dailyBudgetUsd
        : defaults.dailyBudgetUsd,
    timeoutMs:
      typeof value.timeoutMs === 'number' && value.timeoutMs >= 1000 && value.timeoutMs <= 30_000
        ? value.timeoutMs
        : defaults.timeoutMs,
  };
}

interface UsageDelta {
  requests: number;
  fallbacks: number;
  tokensIn: number;
  tokensOut: number;
  costMicroUsd: number;
}

/** Adds to today's `"KelvinUsageDaily"` row. */
export async function recordKelvinUsage(db: Executor, day: string, delta: UsageDelta): Promise<void> {
  await db.execute(sql`
    INSERT INTO "KelvinUsageDaily" ("day", "requests", "fallbacks", "tokensIn", "tokensOut", "costMicroUsd")
    VALUES (${day}::date, ${delta.requests}, ${delta.fallbacks}, ${delta.tokensIn}, ${delta.tokensOut}, ${delta.costMicroUsd})
    ON CONFLICT ("day") DO UPDATE SET
      "requests" = "KelvinUsageDaily"."requests" + EXCLUDED."requests",
      "fallbacks" = "KelvinUsageDaily"."fallbacks" + EXCLUDED."fallbacks",
      "tokensIn" = "KelvinUsageDaily"."tokensIn" + EXCLUDED."tokensIn",
      "tokensOut" = "KelvinUsageDaily"."tokensOut" + EXCLUDED."tokensOut",
      "costMicroUsd" = "KelvinUsageDaily"."costMicroUsd" + EXCLUDED."costMicroUsd"`);
}

/** Micro-USD spent today. */
export async function kelvinSpentToday(db: Executor, day: string): Promise<number> {
  const row = await firstRow<{ cost: string | number }>(
    db,
    sql`SELECT "costMicroUsd" AS "cost" FROM "KelvinUsageDaily" WHERE "day" = ${day}::date`,
  );
  return Number(row?.cost ?? 0);
}

interface HistoryRow {
  prompt: string;
  message: string;
}

/**
 * The conversation, oldest first: the 32 most recent messages of the hashed chat plus any legacy
 * (not hashed) rows of the same chat written by the legacy API during the coexistence.
 */
export async function kelvinHistory(db: Executor, chatHash: string, rawChatId: string): Promise<HistoryRow[]> {
  const found = await rows<HistoryRow>(
    db,
    sql`SELECT "prompt", "message" FROM "KelvinGPTMessages"
         WHERE ("chatId" = ${chatHash} AND "isHashed") OR ("chatId" = ${rawChatId} AND NOT "isHashed")
         ORDER BY "updatedAt" DESC, "id" DESC LIMIT ${KELVINSEEK_HISTORY_LIMIT}`,
  );
  return found.reverse();
}

/** Deletes the hashed messages of a chat beyond the 32 most recent. Returns how many. */
export async function trimKelvinHistory(db: Executor, chatHash: string): Promise<number> {
  const result = await db.execute(sql`
    DELETE FROM "KelvinGPTMessages"
     WHERE "chatId" = ${chatHash} AND "isHashed"
       AND "id" NOT IN (
         SELECT "id" FROM "KelvinGPTMessages"
          WHERE "chatId" = ${chatHash} AND "isHashed"
          ORDER BY "updatedAt" DESC, "id" DESC LIMIT ${KELVINSEEK_HISTORY_LIMIT})`);
  return result.rowCount ?? 0;
}

/** A `Date` as a legacy `timestamp(3)` value (UTC wall clock), whatever the process time zone. */
function utcTimestamp(date: Date) {
  return sql`(${date.toISOString()}::timestamptz AT TIME ZONE 'UTC')`;
}

function outcomeNote(outcome: Exclude<KelvinSeekOutcome, 'model'>): KelvinSeekFallbackReason {
  return outcome === 'fallback:budget' || outcome === 'fallback:limit' ? 'quota' : 'error';
}

/** `GET /api/kelvinseek/prompt`. Never throws for model problems: it falls back. */
export async function kelvinSeekPrompt(
  deps: KelvinSeekDeps,
  config: KelvinSeekConfig,
  input: KelvinSeekInput,
): Promise<KelvinSeekResult> {
  const clock = deps.clock ?? systemClock;
  const day = utcDay(clock.now());
  const text = sanitizeInput(input.text);
  const chatHash = kelvinChatHash(deps.appSecret, input.chatId);

  const fallback = async (outcome: Exclude<KelvinSeekOutcome, 'model'>, usage?: Partial<UsageDelta>) => {
    await recordKelvinUsage(deps.db, day, {
      requests: 1,
      fallbacks: 1,
      tokensIn: usage?.tokensIn ?? 0,
      tokensOut: usage?.tokensOut ?? 0,
      costMicroUsd: usage?.costMicroUsd ?? 0,
    });
    return { reply: fallbackReply(text, outcomeNote(outcome)), outcome };
  };

  if (!config.enabled || !deps.model) return fallback('fallback:disabled');
  if (input.overDailyLimit) return fallback('fallback:limit');
  if ((await kelvinSpentToday(deps.db, day)) >= Math.round(config.dailyBudgetUsd * 1_000_000)) {
    return fallback('fallback:budget');
  }

  const history = await kelvinHistory(deps.db, chatHash, input.chatId);
  const system = kelvinPrompt(sanitizeInput(input.context), previousConversations(history));
  let answer: Awaited<ReturnType<KelvinModel>>;
  try {
    answer = await deps.model({ model: config.model, system, user: text, timeoutMs: config.timeoutMs });
  } catch (error) {
    const timeout = error instanceof KelvinModelError && error.kind === 'timeout';
    deps.log.warn(
      { err: error instanceof KelvinModelError ? { kind: error.kind, status: error.status } : error },
      'kelvinseek model call failed; answering with the fallback',
    );
    return fallback(timeout ? 'fallback:timeout' : 'fallback:error');
  }
  const cost = kelvinCostMicroUsd(config.model, answer.tokensIn, answer.tokensOut);
  const parsed = parseModelAnswer(answer.text);
  if (!parsed) {
    return fallback('fallback:empty', { tokensIn: answer.tokensIn, tokensOut: answer.tokensOut, costMicroUsd: cost });
  }
  const reply = `${parsed.command}|${parsed.answer}`;
  await withTx(deps.db, async (tx) => {
    await tx.execute(sql`
      INSERT INTO "KelvinGPTMessages" ("chatId", "messageId", "prompt", "message", "role", "who", "isHashed", "createdAt", "updatedAt")
      VALUES (${chatHash}, ${answer.id}, ${text}, ${reply}, '', '', true, ${utcTimestamp(clock.now())}, ${utcTimestamp(clock.now())})`);
    await trimKelvinHistory(tx, chatHash);
    await recordKelvinUsage(tx, day, {
      requests: 1,
      fallbacks: 0,
      tokensIn: answer.tokensIn,
      tokensOut: answer.tokensOut,
      costMicroUsd: cost,
    });
  });
  return { reply, outcome: 'model' };
}

/** `GET /api/kelvinseek/clear`: forgets the chat (hashed rows and legacy rows of the same chat). */
export async function kelvinSeekClear(deps: Pick<KelvinSeekDeps, 'db' | 'appSecret'>, chatId: string): Promise<number> {
  const result = await deps.db.execute(sql`
    DELETE FROM "KelvinGPTMessages"
     WHERE ("chatId" = ${kelvinChatHash(deps.appSecret, chatId)} AND "isHashed")
        OR ("chatId" = ${chatId} AND NOT "isHashed")`);
  return result.rowCount ?? 0;
}

/**
 * Retention (PLAN §5.5, §9.3): deletes hashed messages older than 30 days. Legacy rows that were
 * never hashed are kept until the contract phase decides (PLAN §6.8).
 */
export async function cleanupKelvinSeek(
  db: Executor,
  now: Date,
  retentionDays = KELVINSEEK_RETENTION_DAYS,
): Promise<number> {
  const cutoff = new Date(now.getTime() - retentionDays * 86_400_000);
  const result = await db.execute(sql`
    DELETE FROM "KelvinGPTMessages" WHERE "isHashed" AND "updatedAt" < ${utcTimestamp(cutoff)}`);
  return result.rowCount ?? 0;
}
