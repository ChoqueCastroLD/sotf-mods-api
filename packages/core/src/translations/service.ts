/**
 * Automatic translation of a mod listing (PLAN §7.13 T1-25): the NAME, the short description and
 * the full Markdown DESCRIPTION.
 *
 * - `translateMod` (job `translation.mod`): translates every missing or stale field of a published
 *   mod into the locales that need it. Name and short description of all locales share one model
 *   call; the description goes chunk by chunk per locale (masked so code, links and URLs cannot be
 *   touched, validated so nothing is lost). Every field is cached in `"ModTranslation"` keyed by
 *   the hash of its original, charged to a daily budget (`"TranslationUsageDaily"`), and an
 *   author's own text is never overwritten.
 * - `sweepTranslations` (job `translation.sweep`): queues the mods (and builds) that still lack
 *   translations, bounded per run: this is also the backfill of the whole catalog.
 * - `getModTranslation` / `getCardTranslations` (public reads) and the author's list / put / revert
 *   (Basecamp).
 */
import { cacheTag } from '@sotf/contracts/cache';
import {
  type CardTranslationsDTO,
  type ModTranslationDTO,
  type StudioTranslationFieldDTO,
  type StudioTranslationItemDTO,
  type StudioTranslationsDTO,
  TRANSLATION_FIELDS,
  TRANSLATION_LIMITS,
  TRANSLATION_LOCALES,
  type TranslationField,
  type TranslationLocale,
  type TranslationSource,
} from '@sotf/contracts/translations';
import { sql } from 'drizzle-orm';
import { isModelAuthBlocked, type KelvinModel, KelvinModelError, kelvinCostMicroUsd } from '../kelvinseek/model.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { firstRow, rows } from '../legacy/db.ts';
import { assertWriter, descriptionFormatOf, loadOwnedMod } from '../publishing/queries.ts';
import { renderDescription } from '../publishing/text.ts';
import { type PipelineSettings, prepareDescription, translateDescription, translateListing } from './pipeline.ts';
import {
  SQL_DESCRIPTION_SOURCE,
  sourceLocaleOf,
  sqlHashOf,
  targetLocalesOf,
  translationSourceHash,
  trimmedSource,
} from './text.ts';

export interface TranslationConfig {
  model: string;
  dailyBudgetUsd: number;
  timeoutMs: number;
}

export const DEFAULT_TRANSLATION_TIMEOUT_MS = 40_000;
/** A run stops starting new locales after this long; the continuation job carries on. */
export const TRANSLATION_RUN_DEADLINE_MS = 6 * 60_000;
/** Description locales translated at the same time inside one job. */
const DESCRIPTION_CONCURRENCY = 3;

export type TranslateOutcome =
  | { status: 'translated'; locales: TranslationLocale[]; costMicroUsd: number; remaining: boolean }
  | { status: 'skipped'; reason: 'no_model' | 'budget' | 'not_found' | 'not_published' | 'empty' | 'up_to_date' };

type Originals = Record<TranslationField, string>;

interface ModRow extends Record<string, unknown> {
  id: number;
  name: string;
  shortDescription: string | null;
  description: string | null;
  contentLang: string | null;
  status: string;
}

interface StoredRow extends Record<string, unknown> {
  locale: TranslationLocale;
  name: string | null;
  nameSource: TranslationSource | null;
  nameHash: string | null;
  shortDescription: string | null;
  source: TranslationSource;
  sourceHash: string | null;
  description: string | null;
  descriptionSource: TranslationSource | null;
  descriptionHash: string | null;
}

/** Columns that hold one field of `"ModTranslation"`. */
const COLUMNS: Readonly<Record<TranslationField, { text: string; source: string; hash: string }>> = {
  name: { text: 'name', source: 'nameSource', hash: 'nameHash' },
  shortDescription: { text: 'shortDescription', source: 'source', hash: 'sourceHash' },
  description: { text: 'description', source: 'descriptionSource', hash: 'descriptionHash' },
};

const SELECT_STORED = sql.raw(
  `"locale", "name", "nameSource", "nameHash", "shortDescription", "source", "sourceHash", "description", "descriptionSource", "descriptionHash"`,
);

function originalsOf(row: Pick<ModRow, 'name' | 'shortDescription' | 'description'>): Originals {
  return {
    name: trimmedSource(row.name ?? ''),
    shortDescription: trimmedSource(row.shortDescription ?? ''),
    description: trimmedSource(row.description ?? ''),
  };
}

function hashesOf(originals: Originals): Record<TranslationField, string> {
  return {
    name: translationSourceHash(originals.name),
    shortDescription: translationSourceHash(originals.shortDescription),
    description: translationSourceHash(originals.description),
  };
}

/** What a stored row holds for one field. */
function fieldOf(row: StoredRow | undefined, field: TranslationField) {
  if (!row) return { text: null, source: null, hash: null } as const;
  const c = COLUMNS[field];
  return {
    text: (row[c.text] as string | null) ?? null,
    source: (row[c.source] as TranslationSource | null) ?? null,
    hash: (row[c.hash] as string | null) ?? null,
  };
}

/** The job must (re)translate this field: there is an original and no fresh or authored text. */
function needsField(row: StoredRow | undefined, field: TranslationField, originals: Originals, hash: string): boolean {
  if (!originals[field]) return false;
  const have = fieldOf(row, field);
  if (have.text === null) return true;
  return have.source !== 'author' && have.hash !== hash;
}

/** The field may be shown to visitors: authored, or a machine text of the current original. */
function visibleField(row: StoredRow | undefined, field: TranslationField, hash: string): string | null {
  const have = fieldOf(row, field);
  if (have.text === null) return null;
  return have.source === 'author' || have.hash === hash ? have.text : null;
}

async function loadMod(db: Ctx['db'], modId: number): Promise<ModRow | null> {
  return firstRow<ModRow>(
    db,
    sql`SELECT m."id", m."name", m."shortDescription", ${sql.raw(SQL_DESCRIPTION_SOURCE)} AS "description",
               m."contentLang", m."status"
          FROM "Mod" m WHERE m."id" = ${modId}`,
  );
}

async function storedRows(db: Ctx['db'], modId: number): Promise<StoredRow[]> {
  return rows<StoredRow>(db, sql`SELECT ${SELECT_STORED} FROM "ModTranslation" WHERE "modId" = ${modId}`);
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
    INSERT INTO "TranslationUsageDaily" AS u ("day", "requests", "failures", "tokensIn", "tokensOut", "costMicroUsd")
    VALUES (${day}::date, ${delta.requests}, ${delta.failures}, ${delta.tokensIn}, ${delta.tokensOut}, ${delta.costMicroUsd})
    ON CONFLICT ("day") DO UPDATE SET
      "requests" = u."requests" + EXCLUDED."requests",
      "failures" = u."failures" + EXCLUDED."failures",
      "tokensIn" = u."tokensIn" + EXCLUDED."tokensIn",
      "tokensOut" = u."tokensOut" + EXCLUDED."tokensOut",
      "costMicroUsd" = u."costMicroUsd" + EXCLUDED."costMicroUsd"`);
}

/** Evicts the mod's pages from the web, the CDN and the API caches. */
async function purgeMod(ctx: Ctx, modId: number): Promise<void> {
  const tags = [cacheTag.mod(modId)];
  await publishCacheInvalidation(ctx.db, tags);
  await ctx.jobs.enqueue('cdn.purge', { tags, reason: 'translation.mod' });
}

/**
 * Upserts the given fields of one locale. A field the author wrote is kept; the others take the
 * machine text. Only fields whose original still hashes to `hashes[field]` are written (the
 * original may have changed while the model worked). Returns whether anything was written.
 */
async function writeMachineFields(
  ctx: Ctx,
  modId: number,
  locale: TranslationLocale,
  fields: Partial<Record<TranslationField, string>>,
  hashes: Record<TranslationField, string>,
  model: string,
): Promise<boolean> {
  const now = ctx.clock.now().toISOString();
  return ctx.db.transaction(async (tx) => {
    const current = await firstRow<ModRow>(
      tx,
      sql`SELECT m."id", m."name", m."shortDescription", ${sql.raw(SQL_DESCRIPTION_SOURCE)} AS "description",
                 m."contentLang", m."status"
            FROM "Mod" m WHERE m."id" = ${modId} FOR SHARE OF m`,
    );
    if (!current) return false;
    const now_ = hashesOf(originalsOf(current));
    const fresh = TRANSLATION_FIELDS.filter((f) => fields[f] !== undefined && now_[f] === hashes[f]);
    if (fresh.length === 0) return false;
    const insertCols = fresh.flatMap((f) => {
      const c = COLUMNS[f];
      return [c.text, c.source, c.hash];
    });
    const insertVals = fresh.flatMap((f) => [fields[f] as string, 'machine', hashes[f]]);
    const updates = fresh.flatMap((f) => {
      const c = COLUMNS[f];
      const keep = `"ModTranslation"."${c.source}" = 'author' AND "ModTranslation"."${c.text}" IS NOT NULL`;
      return [c.text, c.source, c.hash].map(
        (col) => `"${col}" = CASE WHEN ${keep} THEN "ModTranslation"."${col}" ELSE EXCLUDED."${col}" END`,
      );
    });
    await tx.execute(sql`
      INSERT INTO "ModTranslation" ("modId", "locale", ${sql.raw(insertCols.map((c) => `"${c}"`).join(', '))}, "model", "createdAt", "updatedAt")
      VALUES (${modId}, ${locale}, ${sql.join(
        insertVals.map((v) => sql`${v}`),
        sql`, `,
      )}, ${model}, ${now}::timestamptz, ${now}::timestamptz)
      ON CONFLICT ("modId", "locale") DO UPDATE SET ${sql.raw(updates.join(', '))},
        "model" = EXCLUDED."model", "updatedAt" = EXCLUDED."updatedAt"`);
    return true;
  });
}

interface Deps {
  model: KelvinModel | null;
  config: TranslationConfig;
}

/** Thrown inside a run to stop everything without failing the job (the sweep retries later). */
class StopRun extends Error {
  readonly reason: 'no_model' | 'budget';
  constructor(reason: 'no_model' | 'budget') {
    super(reason);
    this.reason = reason;
  }
}

/**
 * Translates the missing or stale fields of one mod. A model failure throws (the queue retries
 * with backoff, and what was already written is cached); a budget or configuration gap returns a
 * `skipped` outcome (or a partial `translated` one) and the sweep retries later.
 */
export async function translateMod(
  ctx: Ctx,
  deps: Deps,
  input: { modId: number; locales?: readonly TranslationLocale[] | undefined },
): Promise<TranslateOutcome> {
  const row = await loadMod(ctx.db, input.modId);
  if (!row) return { status: 'skipped', reason: 'not_found' };
  if (row.status !== 'published') return { status: 'skipped', reason: 'not_published' };
  const originals = originalsOf(row);
  if (!originals.name && !originals.shortDescription && !originals.description) {
    return { status: 'skipped', reason: 'empty' };
  }
  const hashes = hashesOf(originals);

  const stored = new Map((await storedRows(ctx.db, row.id)).map((r) => [r.locale, r]));
  const wanted = input.locales ? new Set(input.locales) : null;
  const plan = new Map<TranslationLocale, TranslationField[]>();
  for (const locale of targetLocalesOf(row.contentLang)) {
    if (wanted && !wanted.has(locale)) continue;
    const fields = TRANSLATION_FIELDS.filter((f) => needsField(stored.get(locale), f, originals, hashes[f]));
    if (fields.length > 0) plan.set(locale, fields);
  }
  if (plan.size === 0) return { status: 'skipped', reason: 'up_to_date' };
  if (!deps.model || isModelAuthBlocked()) return { status: 'skipped', reason: 'no_model' };
  const model = deps.model;

  const budget = Math.round(deps.config.dailyBudgetUsd * 1_000_000);
  const startedAt = Date.now();
  let costMicroUsd = 0;
  const written = new Set<TranslationLocale>();
  let failures = 0;
  let deadlineHit = false;

  /** One model call with usage accounting; throws `StopRun` when the budget is gone. */
  const call = async (request: Parameters<KelvinModel>[0]): Promise<Awaited<ReturnType<KelvinModel>>> => {
    const day = utcDay(ctx.clock.now());
    if ((await translationSpentToday(ctx.db, day)) >= budget) throw new StopRun('budget');
    let answer: Awaited<ReturnType<KelvinModel>>;
    try {
      answer = await model(request);
    } catch (error) {
      await recordUsage(ctx.db, day, { requests: 1, failures: 1, tokensIn: 0, tokensOut: 0, costMicroUsd: 0 });
      if (error instanceof KelvinModelError) {
        ctx.log.warn({ modId: row.id, kind: error.kind }, 'translation model failed');
        // A rejected key is not the mod's fault: stop, the sweep retries once the key works again.
        if (error.kind === 'auth') throw new StopRun('no_model');
      }
      throw error;
    }
    const cost = kelvinCostMicroUsd(deps.config.model, answer.tokensIn, answer.tokensOut);
    costMicroUsd += cost;
    await recordUsage(ctx.db, day, {
      requests: 1,
      failures: 0,
      tokensIn: answer.tokensIn,
      tokensOut: answer.tokensOut,
      costMicroUsd: cost,
    });
    return answer;
  };

  const source = sourceLocaleOf(row.contentLang);
  const settings: PipelineSettings = {
    model: deps.config.model,
    timeoutMs: deps.config.timeoutMs,
    from: source,
    isFatal: (error) => error instanceof StopRun,
    warn: (fields, message) => ctx.log.warn({ modId: row.id, ...fields }, message),
  };

  // ---- Name and short description of every locale: one call. -----------------------------------
  const listingLocales = [...plan].filter(([, f]) => f.includes('name') || f.includes('shortDescription'));
  const listingFields = (['name', 'shortDescription'] as const).filter((f) =>
    listingLocales.some(([, fields]) => fields.includes(f)),
  );
  const runListing = async (): Promise<void> => {
    if (listingLocales.length === 0) return;
    const locales = listingLocales.map(([locale]) => locale);
    const texts: Partial<Record<'name' | 'shortDescription', string>> = {};
    for (const f of listingFields) texts[f] = originals[f];
    const parsed = await translateListing(call, settings, { texts, locales });
    if (parsed.size === 0) {
      await recordUsage(ctx.db, utcDay(ctx.clock.now()), {
        requests: 0,
        failures: 1,
        tokensIn: 0,
        tokensOut: 0,
        costMicroUsd: 0,
      });
      throw new Error('translation model returned no usable translation');
    }
    for (const [locale, fields] of parsed) {
      const wantedFields = plan.get(locale) ?? [];
      const only: Partial<Record<TranslationField, string>> = {};
      for (const f of listingFields) if (wantedFields.includes(f) && fields[f] !== undefined) only[f] = fields[f];
      if (Object.keys(only).length === 0) continue;
      if (await writeMachineFields(ctx, row.id, locale, only, hashes, deps.config.model)) written.add(locale);
    }
  };

  // ---- Description: per locale, chunk by chunk. --------------------------------------------------
  const descriptionLocales = [...plan].filter(([, f]) => f.includes('description')).map(([locale]) => locale);
  const prepared = originals.description ? prepareDescription(originals.description, [originals.name]) : null;

  const runDescription = async (locale: TranslationLocale): Promise<void> => {
    if (!prepared) return;
    const text = await translateDescription(call, settings, prepared, locale);
    if (!text || text.length > TRANSLATION_LIMITS.descriptionMax * 2) {
      throw new Error(`description (${locale}) has an unusable length`);
    }
    if (await writeMachineFields(ctx, row.id, locale, { description: text }, hashes, deps.config.model)) {
      written.add(locale);
    }
  };

  try {
    try {
      await runListing();
    } catch (error) {
      if (error instanceof StopRun) throw error;
      failures++;
      ctx.log.warn({ modId: row.id, err: error }, 'listing translation failed');
      if (descriptionLocales.length === 0) throw error;
    }
    const queue = [...descriptionLocales];
    let firstError: unknown;
    await Promise.all(
      Array.from({ length: Math.min(DESCRIPTION_CONCURRENCY, queue.length) }, async () => {
        for (;;) {
          if (Date.now() - startedAt > TRANSLATION_RUN_DEADLINE_MS) {
            deadlineHit = deadlineHit || queue.length > 0;
            return;
          }
          const locale = queue.shift();
          if (!locale) return;
          try {
            await runDescription(locale);
          } catch (error) {
            if (error instanceof StopRun) throw error;
            failures++;
            firstError ??= error;
            ctx.log.warn({ modId: row.id, locale, err: error }, 'description translation failed');
          }
        }
      }),
    );
    if (failures > 0 && firstError !== undefined && written.size === 0) throw firstError;
  } catch (error) {
    if (!(error instanceof StopRun)) {
      if (written.size > 0) await purgeMod(ctx, row.id);
      throw error;
    }
    if (written.size > 0) await purgeMod(ctx, row.id);
    if (written.size === 0) return { status: 'skipped', reason: error.reason };
    return { status: 'translated', locales: [...written], costMicroUsd, remaining: true };
  }

  if (written.size > 0) await purgeMod(ctx, row.id);
  if (deadlineHit) await queueModTranslationContinuation(ctx, row.id);
  ctx.log.info({ modId: row.id, locales: [...written], costMicroUsd, failures }, 'mod translated');
  if (failures > 0) {
    // Some locales failed: let the queue retry them (the finished ones are cached).
    throw new Error(`translation of mod ${row.id} incomplete (${failures} failures)`);
  }
  return { status: 'translated', locales: [...written], costMicroUsd, remaining: deadlineHit };
}

/** Name and short description need the original to be non-empty (one trimmed SQL fragment each). */
const SQL_NAME = `m."name"`;
const SQL_SHORT = `coalesce(m."shortDescription", '')`;
const SQL_DESCRIPTION = SQL_DESCRIPTION_SOURCE;

/** SQL: the text expression has content after trimming. */
const sqlNonEmpty = (expr: string) => `length(regexp_replace(${expr}, '^[ \t\r\n\f\v]+|[ \t\r\n\f\v]+$', '', 'g')) > 0`;

/** SQL: row `t` of `"ModTranslation"` holds an up-to-date (or authored) text of every non-empty field of mod `m`. */
const SQL_COMPLETE = sql.raw(
  `(${[
    [SQL_NAME, 'name', 'nameSource', 'nameHash'],
    [SQL_SHORT, 'shortDescription', 'source', 'sourceHash'],
    [SQL_DESCRIPTION, 'description', 'descriptionSource', 'descriptionHash'],
  ]
    .map(
      ([expr, text, src, hash]) =>
        `(NOT (${sqlNonEmpty(expr as string)}) OR (t."${text}" IS NOT NULL AND (t."${src}" = 'author' OR t."${hash}" = ${sqlHashOf(expr as string)})))`,
    )
    .join(' AND ')})`,
);

/** SQL fragment: how many translations a mod needs (12, minus its own language). */
const NEEDED_COUNT = sql`(${TRANSLATION_LOCALES.length} - CASE WHEN split_part(lower(coalesce(m."contentLang", 'en')), '-', 1) IN (${sql.join(
  TRANSLATION_LOCALES.map((l) => sql`${l}`),
  sql`, `,
)}) THEN 1 ELSE 0 END)`;

/**
 * Queues `translation.mod` for published mods and builds with missing or stale translations
 * (random order so a mod that keeps failing cannot starve the others). Does nothing without a
 * model or budget. Run repeatedly it is the backfill of the whole catalog.
 */
export async function sweepTranslations(
  ctx: Ctx,
  deps: Deps,
  batchSize: number,
): Promise<{ queued: number; skipped?: 'no_model' | 'budget' }> {
  if (!deps.model) return { queued: 0, skipped: 'no_model' };
  const budget = Math.round(deps.config.dailyBudgetUsd * 1_000_000);
  if ((await translationSpentToday(ctx.db, utcDay(ctx.clock.now()))) >= budget) return { queued: 0, skipped: 'budget' };
  const found = await rows<{ id: number }>(
    ctx.db,
    sql`SELECT m."id" FROM "Mod" m
         WHERE m."status" = 'published'
           AND (SELECT count(*) FROM "ModTranslation" t
                 WHERE t."modId" = m."id" AND ${SQL_COMPLETE}
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

/** The run ran out of time: the rest goes into a follow-up job (its own key, the current one is active). */
async function queueModTranslationContinuation(ctx: Ctx, modId: number): Promise<void> {
  await ctx.jobs.enqueue('translation.mod', { modId }, { singletonKey: `translation:${modId}:more`, startAfter: 5 });
}

// -----------------------------------------------------------------------------------------------
// Public reads
// -----------------------------------------------------------------------------------------------

function isTranslationLocale(locale: string): locale is TranslationLocale {
  return (TRANSLATION_LOCALES as readonly string[]).includes(locale);
}

/** The translation shown to a visitor of `locale`: the author's text, or a fresh machine one, per field. */
export async function getModTranslation(ctx: Ctx, modId: number, locale: string): Promise<ModTranslationDTO> {
  const row = await loadMod(ctx.db, modId);
  if (!row || !['published', 'unlisted', 'archived'].includes(row.status)) throw errors.notFound('Mod');
  if (!isTranslationLocale(locale)) return { translation: null };
  if (sourceLocaleOf(row.contentLang) === locale) return { translation: null };
  const hashes = hashesOf(originalsOf(row));
  const found = (await storedRows(ctx.db, modId)).find((r) => r.locale === locale);
  const name = visibleField(found, 'name', hashes.name);
  const shortDescription = visibleField(found, 'shortDescription', hashes.shortDescription);
  const description = visibleField(found, 'description', hashes.description);
  if (name === null && shortDescription === null && description === null) return { translation: null };
  let descriptionHtml: string | null = null;
  if (description !== null) {
    try {
      const legacy = (await descriptionFormatOf(ctx.db, modId)) === 'legacy';
      descriptionHtml = renderDescription(description, { legacy }).html;
    } catch (error) {
      ctx.log.warn({ modId, locale, err: error }, 'translated description did not render');
    }
  }
  const sourceOf = (field: TranslationField, text: string | null) =>
    text === null ? null : fieldOf(found, field).source;
  return {
    translation: {
      locale,
      name,
      shortDescription,
      descriptionHtml,
      source: fieldOf(found, 'shortDescription').source ?? 'machine',
      sources: {
        name: sourceOf('name', name),
        shortDescription: sourceOf('shortDescription', shortDescription),
        description: sourceOf('description', descriptionHtml === null ? null : description),
      },
    },
  };
}

/** Translated names and short descriptions of several mods for the cards of one listing. */
export async function getCardTranslations(
  ctx: Ctx,
  ids: readonly number[],
  locale: string,
): Promise<CardTranslationsDTO> {
  if (!isTranslationLocale(locale) || ids.length === 0) return { locale: locale as never, items: [] };
  const found = await rows<{ id: number; name: string | null; shortDescription: string | null }>(
    ctx.db,
    sql`SELECT t."modId" AS "id",
               CASE WHEN t."name" IS NOT NULL AND (t."nameSource" = 'author' OR t."nameHash" = ${sql.raw(sqlHashOf('m."name"'))})
                    THEN t."name" END AS "name",
               CASE WHEN t."shortDescription" IS NOT NULL AND (t."source" = 'author' OR t."sourceHash" = ${sql.raw(sqlHashOf(`coalesce(m."shortDescription", '')`))})
                    THEN t."shortDescription" END AS "shortDescription"
          FROM "ModTranslation" t JOIN "Mod" m ON m."id" = t."modId"
         WHERE t."modId" IN (${sql.join(
           ids.map((id) => sql`${id}`),
           sql`, `,
         )})
           AND t."locale" = ${locale}
           AND m."status" IN ('published', 'unlisted', 'archived')
           AND split_part(lower(coalesce(m."contentLang", 'en')), '-', 1) <> ${locale}`,
  );
  return {
    locale: locale as TranslationLocale,
    items: found
      .filter((r) => r.name !== null || r.shortDescription !== null)
      .map((r) => ({ id: Number(r.id), name: r.name, shortDescription: r.shortDescription })),
  };
}

// -----------------------------------------------------------------------------------------------
// Author (Basecamp)
// -----------------------------------------------------------------------------------------------

function fieldItem(row: StoredRow | undefined, field: TranslationField, hash: string): StudioTranslationFieldDTO {
  const have = fieldOf(row, field);
  return {
    text: have.text,
    source: have.text === null ? null : have.source,
    stale: have.text !== null && have.hash !== hash,
  };
}

function itemOf(
  locale: TranslationLocale,
  hashes: Record<TranslationField, string>,
  row: StoredRow | undefined,
): StudioTranslationItemDTO {
  return {
    locale,
    name: fieldItem(row, 'name', hashes.name),
    shortDescription: fieldItem(row, 'shortDescription', hashes.shortDescription),
    description: fieldItem(row, 'description', hashes.description),
  };
}

/** `GET /studio/mods/:id/translations`. `enabled`: the server can translate (model configured). */
export async function listStudioTranslations(
  ctx: Ctx,
  modId: number,
  enabled: boolean,
): Promise<StudioTranslationsDTO> {
  const owned = await loadOwnedMod(ctx, modId);
  const row = await loadMod(ctx.db, owned.id);
  const originals = originalsOf(
    row ?? { name: owned.name, shortDescription: owned.shortDescription, description: null },
  );
  const hashes = hashesOf(originals);
  const stored = new Map((await storedRows(ctx.db, owned.id)).map((r) => [r.locale, r]));
  return {
    originals,
    sourceLocale: sourceLocaleOf(owned.contentLang),
    enabled,
    items: targetLocalesOf(owned.contentLang).map((locale) => itemOf(locale, hashes, stored.get(locale))),
  };
}

function assertTarget(contentLang: string | null, locale: TranslationLocale): void {
  if (!targetLocalesOf(contentLang).includes(locale)) {
    throw errors.validation('That is the language of the original text', [
      { path: 'locale', code: 'locale_is_source', message: 'the original is already written in this language' },
    ]);
  }
}

function cleanAuthorText(field: TranslationField, text: string): string {
  if (field === 'description') return text.replace(/\r\n?/g, '\n').trim();
  return text.trim().replace(/\s+/g, ' ');
}

const LIMIT_OF: Readonly<Record<TranslationField, number>> = {
  name: TRANSLATION_LIMITS.nameMax,
  shortDescription: TRANSLATION_LIMITS.shortDescriptionMax,
  description: TRANSLATION_LIMITS.descriptionMax,
};

/**
 * `PUT /studio/mods/:id/translations/:locale`: the author's own text replaces the machine one, per
 * field. A `null` field goes back to the automatic translation (cleared and queued).
 */
export async function putStudioTranslation(
  ctx: Ctx,
  modId: number,
  locale: TranslationLocale,
  body: Partial<Record<TranslationField, string | null | undefined>>,
): Promise<StudioTranslationItemDTO> {
  assertWriter(ctx);
  const owned = await loadOwnedMod(ctx, modId);
  assertTarget(owned.contentLang, locale);
  const row = await loadMod(ctx.db, owned.id);
  const originals = originalsOf(
    row ?? { name: owned.name, shortDescription: owned.shortDescription, description: null },
  );
  const hashes = hashesOf(originals);

  const set: Partial<Record<TranslationField, string>> = {};
  const clear: TranslationField[] = [];
  for (const field of TRANSLATION_FIELDS) {
    const value = body[field];
    if (value === undefined) continue;
    if (value === null) {
      clear.push(field);
      continue;
    }
    const text = cleanAuthorText(field, value);
    if (!text || text.length > LIMIT_OF[field]) {
      throw errors.validation('Invalid translation', [
        { path: field, code: 'too_long', message: `1 to ${LIMIT_OF[field]} characters` },
      ]);
    }
    set[field] = text;
  }

  const now = ctx.clock.now().toISOString();
  if (Object.keys(set).length > 0) {
    const fields = TRANSLATION_FIELDS.filter((f) => set[f] !== undefined);
    const cols = fields.flatMap((f) => [COLUMNS[f].text, COLUMNS[f].source, COLUMNS[f].hash]);
    const vals = fields.flatMap((f) => [set[f] as string, 'author', hashes[f]]);
    const updates = cols.map((c) => `"${c}" = EXCLUDED."${c}"`);
    await ctx.db.execute(sql`
      INSERT INTO "ModTranslation" ("modId", "locale", ${sql.raw(cols.map((c) => `"${c}"`).join(', '))}, "model", "createdAt", "updatedAt")
      VALUES (${owned.id}, ${locale}, ${sql.join(
        vals.map((v) => sql`${v}`),
        sql`, `,
      )}, NULL, ${now}::timestamptz, ${now}::timestamptz)
      ON CONFLICT ("modId", "locale") DO UPDATE SET ${sql.raw(updates.join(', '))}, "model" = NULL, "updatedAt" = EXCLUDED."updatedAt"`);
  }
  if (clear.length > 0) {
    const sets = clear.flatMap((f) => [COLUMNS[f].text, COLUMNS[f].source, COLUMNS[f].hash]);
    await ctx.db.execute(sql`
      UPDATE "ModTranslation" SET ${sql.raw(
        sets.map((c) => `"${c}" = ${c === 'source' ? `'machine'` : 'NULL'}`).join(', '),
      )}, "updatedAt" = ${now}::timestamptz
       WHERE "modId" = ${owned.id} AND "locale" = ${locale}`);
    await ctx.db.execute(sql`
      DELETE FROM "ModTranslation"
       WHERE "modId" = ${owned.id} AND "locale" = ${locale}
         AND "name" IS NULL AND "shortDescription" IS NULL AND "description" IS NULL`);
    await queueModTranslation(ctx, owned.id, [locale]);
  }
  await purgeMod(ctx, owned.id);
  const stored = (await storedRows(ctx.db, owned.id)).find((r) => r.locale === locale);
  return itemOf(locale, hashes, stored);
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
  return itemOf(
    locale,
    hashesOf(originalsOf({ name: owned.name, shortDescription: owned.shortDescription, description: null })),
    undefined,
  );
}
