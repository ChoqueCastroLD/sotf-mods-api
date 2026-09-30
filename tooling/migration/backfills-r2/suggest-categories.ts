/**
 * `pnpm --filter @sotf/migration-tools r2:suggest-categories` — category suggestions for the new
 * v2 taxonomy (PLAN T0-06, §7.4 "Admin"), as a CSV that the admin's bulk recategorisation imports
 * (WP-83). **Never writes to the database**: a human confirms every change in Ranger Station.
 *
 * - **Rules** (always): the keyword rules and scoring of `@sotf/core/admin/recategorize` (the same
 *   ones the admin tool shows), over name + manifest id, short description and the first 4 000
 *   characters of the description; libraries (by `type` or by the manifest B15 stored) go to
 *   `library`. Curated tags whose name or slug appear in the text are suggested alongside (≤ 5).
 * - **LLM** (optional, `--llm`): OpenAI Chat Completions (`OPENAI_API_KEY`, model `--model` or
 *   `KELVINSEEK_MODEL`, default `gpt-4o-mini`) classifies the mods the rules are unsure about
 *   (`--llm-below`, default confidence < 0.6; `--llm-all` for every mod), answering a strict JSON
 *   object that is validated against the active categories. `--max-llm-calls` caps the spend.
 *   The LLM wins only when its confidence is higher than the rules'.
 *
 * CSV columns (UTF-8, RFC 4180, header row): `modId,categorySlug,tagSlugs` are what the import
 * applies (`tagSlugs` separated by `;`); the rest explains the suggestion — `slug,name,
 * currentCategory,source,confidence,ruleCategory,ruleConfidence,ruleKeywords,llmCategory,
 * llmConfidence,llmReason`. By default only mods whose suggestion differs from their current
 * (active) category are listed; `--all` lists every mod.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { confidenceOf, scoreCategories } from '@sotf/core/admin/recategorize';
import { openAiModel } from '@sotf/core/kelvinseek/model';
import { loadRootDotEnv } from '@sotf/db/env';
import type pg from 'pg';
import {
  cliLogger,
  color,
  flagInt,
  flagString,
  helpRequested,
  parseArgs,
  runCli,
  userPath,
} from '../src/cli/_shared.ts';
import { OUT_DIR } from '../src/constants.ts';
import { connect } from '../src/db.ts';
import { resolveDatabaseUrl } from '../src/local.ts';

const USAGE = `
pnpm --filter @sotf/migration-tools r2:suggest-categories [--out <file.csv>] [--all]
      [--llm [--model <id>] [--llm-below <0..1> | --llm-all] [--max-llm-calls <n>]]
  Reads the database (read-only) and writes category suggestions as CSV for the admin import (WP-83).
  --out <file>          CSV path (default tooling/migration/out/category-suggestions-<stamp>.csv)
  --all                 list every mod, also those whose category would not change
  --llm                 also ask an LLM (needs OPENAI_API_KEY) for the uncertain mods
  --model <id>          model (default KELVINSEEK_MODEL or gpt-4o-mini)
  --llm-below <x>       rule confidence under which the LLM is asked (default 0.6)
  --llm-all             ask the LLM for every mod
  --max-llm-calls <n>   hard cap of LLM calls (default 300)
`;

const BODY_CHARS = 4000;
const MAX_TAGS = 5;

interface ModRow {
  id: number;
  slug: string;
  manifestId: string;
  name: string;
  shortDescription: string | null;
  body: string | null;
  type: string | null;
  manifestType: string | null;
  categorySlug: string | null;
  categoryRetired: boolean | null;
  categoryType: string | null;
  tagSlugs: string[] | null;
}

interface CategoryRow {
  id: number;
  slug: string;
  name: string;
  description: string;
  legacySlugs: string[] | null;
}

export interface Suggestion {
  modId: number;
  slug: string;
  name: string;
  currentCategory: string | null;
  categorySlug: string;
  tagSlugs: string[];
  source: 'rules' | 'llm' | 'type' | 'current';
  confidence: number;
  ruleCategory: string | null;
  ruleConfidence: number;
  ruleKeywords: string[];
  llmCategory: string | null;
  llmConfidence: number | null;
  llmReason: string | null;
  changed: boolean;
}

function normalise(text: string): string {
  return ` ${text
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()} `;
}

async function loadData(client: pg.ClientBase): Promise<{
  mods: ModRow[];
  categories: CategoryRow[];
  legacyToActive: Map<string, string>;
  tags: Array<{ slug: string; name: string }>;
}> {
  const mods = await client.query<ModRow>(
    `SELECT m."id", m."slug", m."mod_id" AS "manifestId", m."name", m."shortDescription",
            left(coalesce(m."descriptionMd", m."description", ''), ${BODY_CHARS}) AS "body", m."type",
            (SELECT coalesce(vi."manifest", v."manifest") ->> 'type'
               FROM "ModVersion" v LEFT JOIN "VersionInspection" vi ON vi."modVersionId" = v."id"
              WHERE v."modId" = m."id" AND coalesce(vi."manifest", v."manifest") ? 'type'
              ORDER BY v."createdAt" DESC, v."id" DESC LIMIT 1) AS "manifestType",
            c."slug" AS "categorySlug", (c."retiredAt" IS NOT NULL) AS "categoryRetired", c."type" AS "categoryType",
            ARRAY(SELECT t."slug" FROM "_ModToTag" mt JOIN "Tag" t ON t."id" = mt."B" WHERE mt."A" = m."id") AS "tagSlugs"
       FROM "Mod" m
       LEFT JOIN "Category" c ON c."id" = m."categoryId"
      WHERE m."status" IN ('published', 'pending', 'unlisted', 'archived')
        AND coalesce(m."type", 'Mod') <> 'Build' AND m."userId" IS NOT NULL
      ORDER BY m."id"`,
  );
  const categories = await client.query<CategoryRow>(
    `SELECT "id", "slug", "name", "description", "legacySlugs" FROM "Category"
      WHERE "retiredAt" IS NULL AND coalesce("type", 'Mod') = 'Mod' ORDER BY "sortOrder", "id"`,
  );
  const legacyToActive = new Map<string, string>();
  for (const c of categories.rows) {
    legacyToActive.set(c.slug, c.slug);
    for (const legacy of c.legacySlugs ?? []) legacyToActive.set(legacy, c.slug);
  }
  const tags = await client.query<{ slug: string; name: string }>(
    `SELECT "slug", "name" FROM "Tag" WHERE "isCurated" ORDER BY "sortOrder", "slug"`,
  );
  return { mods: mods.rows, categories: categories.rows, legacyToActive, tags: tags.rows };
}

function suggestTags(
  text: string,
  tags: ReadonlyArray<{ slug: string; name: string }>,
  existing: ReadonlySet<string>,
): string[] {
  const out: string[] = [];
  for (const tag of tags) {
    if (out.length >= MAX_TAGS) break;
    if (existing.has(tag.slug)) continue;
    const byName = normalise(tag.name).trim();
    const bySlug = normalise(tag.slug.replace(/-/g, ' ')).trim();
    if ((byName && text.includes(` ${byName} `)) || (bySlug && text.includes(` ${bySlug} `))) out.push(tag.slug);
  }
  return out;
}

/** Rule-based suggestion of one mod (null when nothing matched and the mod has a valid category). */
export function ruleSuggestion(
  mod: ModRow,
  active: ReadonlySet<string>,
): { slug: string | null; confidence: number; keywords: string[]; source: 'rules' | 'type' } {
  if (mod.type === 'Library' || mod.manifestType === 'Library') {
    return {
      slug: 'library',
      confidence: 1,
      keywords: [mod.type === 'Library' ? 'type: Library' : 'manifest type: Library'],
      source: 'type',
    };
  }
  const scored = scoreCategories({
    title: `${mod.name} ${mod.manifestId}`,
    short: mod.shortDescription ?? '',
    body: mod.body ?? '',
  }).filter((s) => active.has(s.slug));
  const best = scored[0];
  if (!best) return { slug: null, confidence: 0, keywords: [], source: 'rules' };
  return { slug: best.slug, confidence: confidenceOf(scored), keywords: best.matched, source: 'rules' };
}

interface LlmAnswer {
  category: string;
  confidence: number;
  reason: string;
}

function llmPrompt(categories: readonly CategoryRow[]): string {
  const list = categories.map((c) => `- ${c.slug}: ${c.name} — ${c.description}`).join('\n');
  return [
    'You classify mods for the game Sons of the Forest into exactly one category of this list:',
    list,
    'Answer ONLY with a JSON object: {"category": "<slug from the list>", "confidence": <0..1>, "reason": "<max 20 words>"}.',
    'Use "library" only for shared code other mods depend on, and "misc" only when nothing else fits.',
  ].join('\n');
}

function parseLlmAnswer(text: string, active: ReadonlySet<string>): LlmAnswer | null {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    const value = JSON.parse(match[0]) as Record<string, unknown>;
    const category = typeof value.category === 'string' ? value.category.trim().toLowerCase() : '';
    const confidence = typeof value.confidence === 'number' ? value.confidence : Number(value.confidence);
    if (!active.has(category) || !Number.isFinite(confidence)) return null;
    const reason = typeof value.reason === 'string' ? value.reason.replace(/\s+/g, ' ').trim().slice(0, 200) : '';
    return { category, confidence: Math.min(1, Math.max(0, confidence)), reason };
  } catch {
    return null;
  }
}

/** RFC 4180 field; text that a spreadsheet would run as a formula is prefixed with `'`. */
function csvField(value: unknown, text = false): string {
  let s = value === null || value === undefined ? '' : String(value);
  if (text && /^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export const CSV_COLUMNS = [
  'modId',
  'categorySlug',
  'tagSlugs',
  'slug',
  'name',
  'currentCategory',
  'source',
  'confidence',
  'ruleCategory',
  'ruleConfidence',
  'ruleKeywords',
  'llmCategory',
  'llmConfidence',
  'llmReason',
] as const;

export function toCsv(rows: readonly Suggestion[]): string {
  const lines = [CSV_COLUMNS.join(',')];
  for (const r of rows) {
    lines.push(
      [
        csvField(r.modId),
        csvField(r.categorySlug),
        csvField(r.tagSlugs.join(';')),
        csvField(r.slug, true),
        csvField(r.name, true),
        csvField(r.currentCategory),
        csvField(r.source),
        csvField(r.confidence.toFixed(2)),
        csvField(r.ruleCategory),
        csvField(r.ruleConfidence.toFixed(2)),
        csvField(r.ruleKeywords.join(';'), true),
        csvField(r.llmCategory),
        csvField(r.llmConfidence === null ? '' : r.llmConfidence.toFixed(2)),
        csvField(r.llmReason, true),
      ].join(','),
    );
  }
  return `${lines.join('\r\n')}\r\n`;
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  loadRootDotEnv();
  const useLlm = args.flags.has('llm');
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (useLlm && !apiKey) throw new Error('--llm needs OPENAI_API_KEY');
  const modelName = flagString(args, 'model') ?? process.env.KELVINSEEK_MODEL?.trim() ?? 'gpt-4o-mini';
  const llmBelow = Number(flagString(args, 'llm-below') ?? '0.6');
  if (!Number.isFinite(llmBelow) || llmBelow < 0 || llmBelow > 1)
    throw new Error('--llm-below must be between 0 and 1');
  const maxCalls = flagInt(args, 'max-llm-calls', 300, 0);

  const client = await connect(resolveDatabaseUrl(), 'sotf-suggest-categories');
  let data: Awaited<ReturnType<typeof loadData>>;
  try {
    await client.query('SET default_transaction_read_only = on');
    data = await loadData(client);
  } finally {
    await client.end();
  }
  const active = new Set(data.categories.map((c) => c.slug));
  if (active.size === 0) throw new Error('no active v2 mod category found (is migration 0025_seed_taxonomy applied?)');
  const model = useLlm && apiKey ? openAiModel({ apiKey, maxOutputTokens: 120 }) : null;
  const system = llmPrompt(data.categories);

  let calls = 0;
  let tokensIn = 0;
  let tokensOut = 0;
  const rows: Suggestion[] = [];
  for (const mod of data.mods) {
    const current = mod.categorySlug ? (data.legacyToActive.get(mod.categorySlug) ?? null) : null;
    const rules = ruleSuggestion(mod, active);
    let llm: LlmAnswer | null = null;
    const ask = model && rules.source !== 'type' && (args.flags.has('llm-all') || rules.confidence < llmBelow);
    if (ask && calls < maxCalls) {
      calls += 1;
      const user = [
        `Name: ${mod.name}`,
        `Manifest id: ${mod.manifestId}`,
        `Short description: ${mod.shortDescription ?? ''}`,
        `Description: ${(mod.body ?? '').slice(0, 1500)}`,
      ].join('\n');
      try {
        const answer = await model({ model: modelName, system, user, timeoutMs: 30_000 });
        tokensIn += answer.tokensIn;
        tokensOut += answer.tokensOut;
        llm = parseLlmAnswer(answer.text, active);
        if (!llm) cliLogger.warn(`mod ${mod.id}: unusable LLM answer ${JSON.stringify(answer.text.slice(0, 120))}`);
      } catch (error) {
        cliLogger.warn(`mod ${mod.id}: LLM call failed (${error instanceof Error ? error.message : String(error)})`);
      }
    }
    let categorySlug: string | null = rules.slug;
    let source: Suggestion['source'] = rules.source;
    let confidence = rules.confidence;
    if (llm && (categorySlug === null || llm.confidence > confidence)) {
      categorySlug = llm.category;
      source = 'llm';
      confidence = llm.confidence;
    }
    if (categorySlug === null) {
      // Nothing matched: keep a valid current category, else fall back to «Other».
      categorySlug = current ?? 'misc';
      source = 'current';
      confidence = current ? 1 : 0;
      if (!active.has(categorySlug)) continue;
    }
    const changed = categorySlug !== current;
    if (!changed && !args.flags.has('all')) continue;
    const text = normalise(`${mod.name} ${mod.manifestId} ${mod.shortDescription ?? ''} ${mod.body ?? ''}`);
    rows.push({
      modId: mod.id,
      slug: mod.slug,
      name: mod.name,
      currentCategory: mod.categorySlug,
      categorySlug,
      tagSlugs: suggestTags(text, data.tags, new Set(mod.tagSlugs ?? [])),
      source,
      confidence,
      ruleCategory: rules.slug,
      ruleConfidence: rules.confidence,
      ruleKeywords: rules.keywords,
      llmCategory: llm?.category ?? null,
      llmConfidence: llm?.confidence ?? null,
      llmReason: llm?.reason ?? null,
      changed,
    });
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outFlag = flagString(args, 'out');
  const file = outFlag ? userPath(outFlag) : join(OUT_DIR, `category-suggestions-${stamp}.csv`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, toCsv(rows));
  const bySource = rows.reduce<Record<string, number>>((acc, r) => {
    acc[r.source] = (acc[r.source] ?? 0) + 1;
    return acc;
  }, {});
  cliLogger.info(
    color.green(`${rows.length} suggestion(s) for ${data.mods.length} mod(s) → ${file}`) +
      color.dim(
        ` ${JSON.stringify(bySource)}${model ? ` · ${calls} LLM call(s), ${tokensIn}/${tokensOut} tokens (${modelName})` : ''}`,
      ),
  );
  cliLogger.info(
    color.dim('Nothing was written to the database: import the CSV in Ranger Station → Admin → Recategorize.'),
  );
  return 0;
}

if (import.meta.main) runCli(main);
