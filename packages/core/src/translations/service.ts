/**
 * Automatic translation of the mod short description (PLAN §7.13 T1-25).
 *
 * - `translateMod` (job `translation.mod`): one OpenAI call translates the English text into every
 *   missing or stale locale of a published mod. Cached in `"ModTranslation"` keyed by the hash of
 *   the original, charged to a daily budget (`"TranslationUsageDaily"`), and it never overwrites
 *   an author's own text.
 * - `sweepTranslations` (job `translation.sweep`): queues the mods that still lack translations
 *   (older mods, failed or over-budget runs), bounded per run.
 * - `getModTranslation` (public read) and the author's list / put / revert (Basecamp).
 */
import { cacheTag } from '@sotf/contracts/cache';
import {
  type ModTranslationDTO,
  type StudioTranslationItemDTO,
  type StudioTranslationsDTO,
  TRANSLATION_LIMITS,
  TRANSLATION_LOCALES,
  type TranslationLocale,
} from '@sotf/contracts/translations';
import { sql } from 'drizzle-orm';
import { type KelvinModel, KelvinModelError, kelvinCostMicroUsd } from '../kelvinseek/model.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { firstRow, rows } from '../legacy/db.ts';
import { assertWriter, loadOwnedMod } from '../publishing/queries.ts';
import {
  parseTranslations,
  sourceLocaleOf,
  TRANSLATION_SYSTEM_PROMPT,
  targetLocalesOf,
  translationMaxOutputTokens,
  translationSourceHash,
  translationUserPrompt,
} from './text.ts';

export interface TranslationConfig {
  model: string;
  dailyBudgetUsd: number;
  timeoutMs: number;
}

export const DEFAULT_TRANSLATION_TIMEOUT_MS = 40_000;

export type TranslateOutcome =
  | { status: 'translated'; locales: TranslationLocale[]; costMicroUsd: number }
  | { status: 'skipped'; reason: 'no_model' | 'budget' | 'not_found' | 'not_published' | 'empty' | 'up_to_date' };

interface ModRow extends Record<string, unknown> {
  id: number;
  name: string;
  shortDescription: string | null;
  contentLang: string | null;
  status: string;
}

interface StoredRow extends Record<string, unknown> {
  locale: TranslationLocale;
  shortDescription: string;
  source: 'machine' | 'author';
  sourceHash: string;
}

async function loadMod(db: Ctx['db'], modId: number): Promise<ModRow | null> {
  return firstRow<ModRow>(
    db,
    sql`SELECT "id", "name", "shortDescription", "contentLang", "status" FROM "Mod" WHERE "id" = ${modId}`,
  );
}

async function storedRows(db: Ctx['db'], modId: number): Promise<StoredRow[]> {
  return rows<StoredRow>(
    db,
    sql`SELECT "locale", "shortDescription", "source", "sourceHash" FROM "ModTranslation" WHERE "modId" = ${modId}`,
  );
}

/** Micro-USD spent today by the translation job. */
export async function translationSpentToday(db: Ctx['db'], day: string): Promise<number> {
  const row = await firstRow<{ cost: string | number }>(
    db,
    sql`SELECT "costMicroUsd" AS "cost" FROM "TranslationUsageDaily" WHERE "day" = ${day}::date`,
  );
  return Number(row?.cost ?? 0);
}

async function recordUsage(
  db: Ctx['db'],
  day: string,
  delta: { requests: number; failures: number; tokensIn: number; tokensOut: number; costMicroUsd: number },
): Promise<void> {
  await db.execute(sql`
    INSERT INTO "TranslationUsageDaily" ("day", "requests", "failures", "tokensIn", "tokensOut", "costMicroUsd")
    VALUES (${day}::date, ${delta.requests}, ${delta.failures}, ${delta.tokensIn}, ${delta.tokensOut}, ${delta.costMicroUsd})
    ON CONFLICT ("day") DO UPDATE SET
      "requests" = "TranslationUsageDaily"."requests" + EXCLUDED."requests",
      "failures" = "TranslationUsageDaily"."failures" + EXCLUDED."failures",
      "tokensIn" = "TranslationUsageDaily"."tokensIn" + EXCLUDED."tokensIn",
      "tokensOut" = "TranslationUsageDaily"."tokensOut" + EXCLUDED."tokensOut",
      "costMicroUsd" = "TranslationUsageDaily"."costMicroUsd" + EXCLUDED."costMicroUsd"`);
}

/** Evicts the mod's pages from the web, the CDN and the API caches. */
async function purgeMod(ctx: Ctx, modId: number): Promise<void> {
  const tags = [cacheTag.mod(modId)];
  await publishCacheInvalidation(ctx.db, tags);
  await ctx.jobs.enqueue('cdn.purge', { tags, reason: 'translation.mod' });
}

/**
 * Translates the missing or stale locales of one mod. A model failure throws (the queue retries
 * with backoff); a budget or configuration gap returns a `skipped` outcome and the sweep retries
 * later.
 */
export async function translateMod(
  ctx: Ctx,
  deps: { model: KelvinModel | null; config: TranslationConfig },
  input: { modId: number; locales?: readonly TranslationLocale[] | undefined },
): Promise<TranslateOutcome> {
  const row = await loadMod(ctx.db, input.modId);
  if (!row) return { status: 'skipped', reason: 'not_found' };
  if (row.status !== 'published') return { status: 'skipped', reason: 'not_published' };
  const original = (row.shortDescription ?? '').trim();
  if (!original) return { status: 'skipped', reason: 'empty' };
  const hash = translationSourceHash(original);

  const stored = new Map((await storedRows(ctx.db, row.id)).map((r) => [r.locale, r]));
  const wanted = input.locales ? new Set(input.locales) : null;
  const needed = targetLocalesOf(row.contentLang).filter((locale) => {
    if (wanted && !wanted.has(locale)) return false;
    const have = stored.get(locale);
    return !have || (have.source === 'machine' && have.sourceHash !== hash);
  });
  if (needed.length === 0) return { status: 'skipped', reason: 'up_to_date' };
  if (!deps.model) return { status: 'skipped', reason: 'no_model' };

  const now = ctx.clock.now();
  const day = utcDay(now);
  const budget = Math.round(deps.config.dailyBudgetUsd * 1_000_000);
  if ((await translationSpentToday(ctx.db, day)) >= budget) return { status: 'skipped', reason: 'budget' };

  let answer: Awaited<ReturnType<KelvinModel>>;
  try {
    answer = await deps.model({
      model: deps.config.model,
      system: TRANSLATION_SYSTEM_PROMPT,
      user: translationUserPrompt({
        name: row.name,
        text: original,
        from: sourceLocaleOf(row.contentLang),
        locales: needed,
      }),
      timeoutMs: deps.config.timeoutMs,
      maxOutputTokens: translationMaxOutputTokens(needed.length),
      json: true,
    });
  } catch (error) {
    await recordUsage(ctx.db, day, { requests: 1, failures: 1, tokensIn: 0, tokensOut: 0, costMicroUsd: 0 });
    if (error instanceof KelvinModelError)
      ctx.log.warn({ modId: row.id, kind: error.kind }, 'translation model failed');
    throw error;
  }
  const costMicroUsd = kelvinCostMicroUsd(deps.config.model, answer.tokensIn, answer.tokensOut);
  const parsed = parseTranslations(answer.text, needed);
  await recordUsage(ctx.db, day, {
    requests: 1,
    failures: parsed.size === 0 ? 1 : 0,
    tokensIn: answer.tokensIn,
    tokensOut: answer.tokensOut,
    costMicroUsd,
  });
  if (parsed.size === 0) throw new Error('translation model returned no usable translation');

  const written: TranslationLocale[] = [];
  await ctx.db.transaction(async (tx) => {
    // The original may have changed while the model worked: only write when it is still the same.
    const current = await firstRow<{ shortDescription: string | null }>(
      tx,
      sql`SELECT "shortDescription" FROM "Mod" WHERE "id" = ${row.id} FOR SHARE`,
    );
    if (translationSourceHash(current?.shortDescription ?? '') !== hash) return;
    for (const [locale, text] of parsed) {
      const res = await tx.execute(sql`
        INSERT INTO "ModTranslation" ("modId", "locale", "shortDescription", "source", "sourceHash", "model", "createdAt", "updatedAt")
        VALUES (${row.id}, ${locale}, ${text}, 'machine', ${hash}, ${deps.config.model}, ${now.toISOString()}::timestamptz, ${now.toISOString()}::timestamptz)
        ON CONFLICT ("modId", "locale") DO UPDATE SET
          "shortDescription" = EXCLUDED."shortDescription", "sourceHash" = EXCLUDED."sourceHash",
          "model" = EXCLUDED."model", "updatedAt" = EXCLUDED."updatedAt"
        WHERE "ModTranslation"."source" = 'machine'`);
      if ((res.rowCount ?? 0) > 0) written.push(locale);
    }
  });
  if (written.length > 0) await purgeMod(ctx, row.id);
  ctx.log.info({ modId: row.id, locales: written, costMicroUsd }, 'mod translated');
  return { status: 'translated', locales: written, costMicroUsd };
}

/** SQL fragment: how many translations a mod needs (12, minus its own language). */
const NEEDED_COUNT = sql`(${TRANSLATION_LOCALES.length} - CASE WHEN split_part(lower(coalesce(m."contentLang", 'en')), '-', 1) IN (${sql.join(
  TRANSLATION_LOCALES.map((l) => sql`${l}`),
  sql`, `,
)}) THEN 1 ELSE 0 END)`;

/**
 * Queues `translation.mod` for published mods with missing or stale translations (random order so a
 * mod that keeps failing cannot starve the others). Does nothing without a model or budget.
 */
export async function sweepTranslations(
  ctx: Ctx,
  deps: { model: KelvinModel | null; config: TranslationConfig },
  batchSize: number,
): Promise<{ queued: number; skipped?: 'no_model' | 'budget' }> {
  if (!deps.model) return { queued: 0, skipped: 'no_model' };
  const budget = Math.round(deps.config.dailyBudgetUsd * 1_000_000);
  if ((await translationSpentToday(ctx.db, utcDay(ctx.clock.now()))) >= budget) return { queued: 0, skipped: 'budget' };
  const found = await rows<{ id: number }>(
    ctx.db,
    sql`SELECT m."id" FROM "Mod" m
         WHERE m."status" = 'published' AND btrim(coalesce(m."shortDescription", '')) <> ''
           AND (SELECT count(*) FROM "ModTranslation" t
                 WHERE t."modId" = m."id"
                   AND (t."source" = 'author'
                        OR t."sourceHash" = encode(sha256(convert_to(btrim(m."shortDescription"), 'UTF8')), 'hex'))
               ) < ${NEEDED_COUNT}
         ORDER BY random() LIMIT ${batchSize}`,
  );
  let queued = 0;
  for (const { id } of found) {
    const jobId = await ctx.jobs.enqueue('translation.mod', { modId: id }, { singletonKey: `translation:${id}` });
    if (jobId) queued++;
  }
  return { queued };
}

/** Queues the translation of a mod shortly after it changed (edits inside the window coalesce). */
export async function queueModTranslation(
  ctx: Ctx,
  modId: number,
  locales?: readonly TranslationLocale[],
): Promise<void> {
  await ctx.jobs.enqueue('translation.mod', locales ? { modId, locales: [...locales] } : { modId }, {
    singletonKey: `translation:${modId}${locales ? `:${locales.join(',')}` : ''}`,
    startAfter: 20,
  });
}

// -----------------------------------------------------------------------------------------------
// Public read
// -----------------------------------------------------------------------------------------------

/** The translation shown to a visitor of `locale`: the author's text, or a fresh machine one. */
export async function getModTranslation(ctx: Ctx, modId: number, locale: string): Promise<ModTranslationDTO> {
  const row = await loadMod(ctx.db, modId);
  if (!row || !['published', 'unlisted', 'archived'].includes(row.status)) throw errors.notFound('Mod');
  if (!(TRANSLATION_LOCALES as readonly string[]).includes(locale)) return { translation: null };
  if (sourceLocaleOf(row.contentLang) === locale) return { translation: null };
  const hash = translationSourceHash(row.shortDescription ?? '');
  const found = (await storedRows(ctx.db, modId)).find((r) => r.locale === locale);
  if (!found || (found.source === 'machine' && found.sourceHash !== hash)) return { translation: null };
  return { translation: { locale: found.locale, shortDescription: found.shortDescription, source: found.source } };
}

// -----------------------------------------------------------------------------------------------
// Author (Basecamp)
// -----------------------------------------------------------------------------------------------

function itemOf(locale: TranslationLocale, hash: string, found: StoredRow | undefined): StudioTranslationItemDTO {
  return {
    locale,
    shortDescription: found?.shortDescription ?? null,
    source: found?.source ?? null,
    stale: found !== undefined && found.sourceHash !== hash,
  };
}

/** `GET /studio/mods/:id/translations`. `enabled`: the server can translate (model configured). */
export async function listStudioTranslations(
  ctx: Ctx,
  modId: number,
  enabled: boolean,
): Promise<StudioTranslationsDTO> {
  const owned = await loadOwnedMod(ctx, modId);
  const original = (owned.shortDescription ?? '').trim();
  const hash = translationSourceHash(original);
  const stored = new Map((await storedRows(ctx.db, owned.id)).map((r) => [r.locale, r]));
  return {
    original,
    sourceLocale: sourceLocaleOf(owned.contentLang),
    enabled,
    items: targetLocalesOf(owned.contentLang).map((locale) => itemOf(locale, hash, stored.get(locale))),
  };
}

function assertTarget(contentLang: string | null, locale: TranslationLocale): void {
  if (!targetLocalesOf(contentLang).includes(locale)) {
    throw errors.validation('That is the language of the original text', [
      { path: 'locale', code: 'locale_is_source', message: 'the original is already written in this language' },
    ]);
  }
}

/** `PUT /studio/mods/:id/translations/:locale`: the author's own text replaces the machine one. */
export async function putStudioTranslation(
  ctx: Ctx,
  modId: number,
  locale: TranslationLocale,
  text: string,
): Promise<StudioTranslationItemDTO> {
  assertWriter(ctx);
  const owned = await loadOwnedMod(ctx, modId);
  assertTarget(owned.contentLang, locale);
  const value = text.trim().replace(/\s+/g, ' ');
  if (!value || value.length > TRANSLATION_LIMITS.shortDescriptionMax) {
    throw errors.validation('Invalid translation', [
      {
        path: 'shortDescription',
        code: 'too_long',
        message: `1 to ${TRANSLATION_LIMITS.shortDescriptionMax} characters`,
      },
    ]);
  }
  const hash = translationSourceHash(owned.shortDescription ?? '');
  const now = ctx.clock.now();
  await ctx.db.execute(sql`
    INSERT INTO "ModTranslation" ("modId", "locale", "shortDescription", "source", "sourceHash", "model", "createdAt", "updatedAt")
    VALUES (${owned.id}, ${locale}, ${value}, 'author', ${hash}, NULL, ${now.toISOString()}::timestamptz, ${now.toISOString()}::timestamptz)
    ON CONFLICT ("modId", "locale") DO UPDATE SET
      "shortDescription" = EXCLUDED."shortDescription", "source" = 'author', "sourceHash" = EXCLUDED."sourceHash",
      "model" = NULL, "updatedAt" = EXCLUDED."updatedAt"`);
  await purgeMod(ctx, owned.id);
  return { locale, shortDescription: value, source: 'author', stale: false };
}

/** `DELETE /studio/mods/:id/translations/:locale`: back to the automatic translation. */
export async function revertStudioTranslation(
  ctx: Ctx,
  modId: number,
  locale: TranslationLocale,
): Promise<StudioTranslationItemDTO> {
  assertWriter(ctx);
  const owned = await loadOwnedMod(ctx, modId);
  assertTarget(owned.contentLang, locale);
  await ctx.db.execute(sql`DELETE FROM "ModTranslation" WHERE "modId" = ${owned.id} AND "locale" = ${locale}`);
  await purgeMod(ctx, owned.id);
  await queueModTranslation(ctx, owned.id, [locale]);
  return { locale, shortDescription: null, source: null, stale: false };
}
