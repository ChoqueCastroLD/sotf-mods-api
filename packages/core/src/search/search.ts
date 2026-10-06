/**
 * Server search (PLAN §7.9, `GET /api/v2/search`).
 *
 * Mods and builds, in this order of evidence:
 *   1. exact `manifestId` or exact name (case-insensitive) first;
 *   2. full text: `websearch_to_tsquery` over `"searchVector"` (weights A name/manifest id,
 *      B short description, C description) ranked with `ts_rank_cd`; the `simple` configuration
 *      matches words as typed and `english` adds stemming for the English descriptions;
 *   3. trigram similarity on `lower(sotf_unaccent(name))` (threshold 0.3), also against the name
 *      without spaces and the manifest id, plus `word_similarity` for a word inside a longer name,
 *      so typos still find the mod («stak mod» → StackMod, «kelvn» → the Kelvin mods).
 * Users (`User.name`, `User.displayName`), public kits (`Kit.name`) and the static pages are
 * searched as well. Only listable mods are returned (published, not NSFW).
 *
 * Every query is logged aggregated per day (`SearchQueryDaily`) to curate synonyms and spot mod
 * requests; the write is asynchronous and never fails the search.
 */

import type { Locale } from '@sotf/contracts/common';
import type { SearchHitDTO } from '@sotf/contracts/search';
import { kitPath, profilePath } from '@sotf/contracts/seo';
import { type CatalogConfig, mediaUrlForWidth } from '../catalog/media.ts';
import { getSnapshot, isListable } from '../catalog/snapshot.ts';
import { cached, num, row, rows } from '../catalog/sql.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { getCardTranslations } from '../translations/service.ts';
import { SITE_PAGES } from './pages.ts';
import { highlight, normalizeQuery } from './text.ts';

export type SearchType = SearchHitDTO['type'];

/** Minimum trigram similarity (PLAN §7.9). */
export const SIMILARITY_THRESHOLD = 0.3;
/** `word_similarity` threshold: a query word matching a word inside a longer name. */
export const WORD_SIMILARITY_THRESHOLD = 0.5;
export const DEFAULT_SEARCH_LIMIT = 20;

const SEARCH_TTL_MS = 60_000;

interface ModScoreRow {
  id: number;
  exact: boolean;
  fts: number;
  sim: number;
  wsim: number;
}

const MOD_SEARCH_SQL = `
WITH input AS (
  SELECT $1::text AS raw,
         lower(public.sotf_unaccent($1::text)) AS qn,
         replace(lower(public.sotf_unaccent($1::text)), ' ', '') AS qc,
         websearch_to_tsquery('simple', public.sotf_unaccent($1::text)) AS tsq_simple,
         websearch_to_tsquery('english', public.sotf_unaccent($1::text)) AS tsq_english
), scored AS (
  SELECT m."id",
         (m."mod_id" = i.raw OR lower(m."mod_id") = lower(i.raw) OR lower(m."name") = lower(i.raw)) AS exact,
         (m."searchVector" @@ i.tsq_simple OR m."searchVector" @@ i.tsq_english) AS matched,
         greatest(ts_rank_cd(m."searchVector", i.tsq_simple), ts_rank_cd(m."searchVector", i.tsq_english))::float8 AS fts,
         greatest(
           similarity(lower(public.sotf_unaccent(m."name")), i.qn),
           similarity(replace(lower(public.sotf_unaccent(m."name")), ' ', ''), i.qc),
           similarity(lower(m."mod_id"), i.qc)
         )::float8 AS sim,
         word_similarity(i.qn, lower(public.sotf_unaccent(m."name")))::float8 AS wsim
    FROM "Mod" m CROSS JOIN input i
   WHERE m."status" IN ('published', 'pending') AND m."userId" IS NOT NULL
)
SELECT "id", "exact", "fts", "sim", "wsim" FROM scored
 WHERE "exact" OR "matched" OR "sim" >= $2 OR "wsim" >= $3`;

/** Combines the evidence of one mod into a score (exact ≫ full text ≈ fuzzy; popularity breaks ties). */
export function modScore(r: ModScoreRow, downloads: number): number {
  const fuzzy = Math.max(r.sim, r.wsim * 0.9);
  const score = (r.exact ? 10 : 0) + Math.min(r.fts, 1) * 1.5 + fuzzy + Math.log10(downloads + 1) / 60;
  return Math.round(score * 10_000) / 10_000;
}

interface UserHitRow {
  id: number;
  slug: string;
  displayName: string;
  exact: boolean;
  sim: number;
  downloads: string | number | null;
  imageUrl: string | null;
  mWidth: number | null;
  mHeight: number | null;
  mThumbhash: string | null;
  mColor: string | null;
  mVariants: import('@sotf/db').MediaVariant[] | null;
  mBucket: string | null;
  mKey: string | null;
}

const USER_SEARCH_SQL = `
WITH input AS (SELECT lower(public.sotf_unaccent($1::text)) AS qn)
SELECT u."id", u."slug", coalesce(nullif(btrim(u."displayName"), ''), u."name") AS "displayName",
       (lower(u."slug") = i.qn OR lower(u."name") = i.qn OR lower(coalesce(u."displayName", '')) = i.qn) AS exact,
       greatest(
         similarity(lower(public.sotf_unaccent(u."name")), i.qn),
         similarity(lower(public.sotf_unaccent(coalesce(u."displayName", ''))), i.qn),
         word_similarity(i.qn, lower(public.sotf_unaccent(coalesce(u."displayName", u."name"))))
       )::float8 AS sim,
       s."downloadsTotal" AS downloads, u."imageUrl",
       med."width" AS "mWidth", med."height" AS "mHeight", med."thumbhash" AS "mThumbhash",
       med."dominantColor" AS "mColor", med."variants" AS "mVariants",
       med."sourceBucket" AS "mBucket", med."sourceKey" AS "mKey"
  FROM "User" u CROSS JOIN input i
  LEFT JOIN "UserStats" s ON s."userId" = u."id"
  LEFT JOIN "Media" med ON med."id" = u."avatarMediaId"
 WHERE u."deletedAt" IS NULL AND u."bannedAt" IS NULL
   AND (lower(u."slug") = i.qn OR lower(u."name") = i.qn OR lower(coalesce(u."displayName", '')) = i.qn
        OR similarity(lower(public.sotf_unaccent(u."name")), i.qn) >= $2
        OR similarity(lower(public.sotf_unaccent(coalesce(u."displayName", ''))), i.qn) >= $2
        OR word_similarity(i.qn, lower(public.sotf_unaccent(coalesce(u."displayName", u."name")))) >= $3)
 ORDER BY exact DESC, (coalesce(s."modsCount", 0) + coalesce(s."buildsCount", 0) > 0) DESC, sim DESC, u."id"
 LIMIT $4`;

interface KitHitRow {
  id: number;
  name: string;
  slug: string;
  ownerHandle: string;
  itemsCount: number;
  exact: boolean;
  sim: number;
  mWidth: number | null;
  mHeight: number | null;
  mThumbhash: string | null;
  mColor: string | null;
  mVariants: import('@sotf/db').MediaVariant[] | null;
  mBucket: string | null;
  mKey: string | null;
}

const KIT_SEARCH_SQL = `
WITH input AS (SELECT lower(public.sotf_unaccent($1::text)) AS qn)
SELECT k."id", k."name", k."slug", u."slug" AS "ownerHandle", k."itemsCount",
       (lower(k."name") = i.qn OR k."code" = upper($1::text)) AS exact,
       greatest(similarity(lower(public.sotf_unaccent(k."name")), i.qn),
                word_similarity(i.qn, lower(public.sotf_unaccent(k."name"))))::float8 AS sim,
       med."width" AS "mWidth", med."height" AS "mHeight", med."thumbhash" AS "mThumbhash",
       med."dominantColor" AS "mColor", med."variants" AS "mVariants",
       med."sourceBucket" AS "mBucket", med."sourceKey" AS "mKey"
  FROM "Kit" k CROSS JOIN input i
  JOIN "User" u ON u."id" = k."ownerId"
  LEFT JOIN "Media" med ON med."id" = k."coverMediaId"
 WHERE k."visibility" = 'public' AND k."deletedAt" IS NULL AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
   AND (lower(k."name") = i.qn OR k."code" = upper($1::text)
        OR similarity(lower(public.sotf_unaccent(k."name")), i.qn) >= $2
        OR word_similarity(i.qn, lower(public.sotf_unaccent(k."name"))) >= $3)
 ORDER BY exact DESC, sim DESC, k."followersCount" DESC, k."id"
 LIMIT $4`;

function mediaRowOf(r: {
  mWidth: number | null;
  mHeight: number | null;
  mThumbhash: string | null;
  mColor: string | null;
  mVariants: import('@sotf/db').MediaVariant[] | null;
  mBucket: string | null;
  mKey: string | null;
}) {
  if (r.mKey === null && r.mVariants === null) return null;
  return {
    width: r.mWidth,
    height: r.mHeight,
    thumbhash: r.mThumbhash,
    dominantColor: r.mColor,
    variants: r.mVariants,
    sourceBucket: r.mBucket,
    sourceKey: r.mKey,
  };
}

/** pg_trgm-compatible trigram similarity (for the static pages, searched in memory). */
export function trigramSimilarity(a: string, b: string): number {
  const grams = (s: string) => {
    const set = new Set<string>();
    for (const word of s.split(/[^\p{L}\p{N}]+/u).filter(Boolean)) {
      const padded = `  ${word} `;
      for (let i = 0; i + 3 <= padded.length; i++) set.add(padded.slice(i, i + 3));
    }
    return set;
  };
  const x = grams(a);
  const y = grams(b);
  if (x.size === 0 || y.size === 0) return 0;
  let common = 0;
  for (const g of x) if (y.has(g)) common += 1;
  return common / (x.size + y.size - common);
}

function pageHits(q: string, locale: Locale): SearchHitDTO[] {
  const qn = normalizeQuery(q);
  const hits: SearchHitDTO[] = [];
  for (const page of SITE_PAGES) {
    const title = page.titles[locale];
    const candidates = [title, page.titles.en, page.key.replace(/-/g, ' '), ...page.keywords].map(normalizeQuery);
    let score = 0;
    for (const c of candidates) {
      if (c === qn) score = Math.max(score, 3);
      else if (c.startsWith(qn) || c.split(' ').some((w) => w.startsWith(qn))) score = Math.max(score, 1.2);
      else score = Math.max(score, trigramSimilarity(c, qn));
    }
    if (score < SIMILARITY_THRESHOLD) continue;
    hits.push({
      type: 'page',
      id: page.key,
      title,
      subtitle: null,
      path: page.path,
      thumbnailUrl: null,
      kind: null,
      compatStatus: null,
      downloads: null,
      score: Math.round(score * 10_000) / 10_000,
      highlight: highlight(title, q),
    });
  }
  return hits;
}

export interface SearchInput {
  q: string;
  types?: readonly SearchType[];
  limit?: number;
  locale?: Locale;
}

export interface SearchOutput {
  q: string;
  total: number;
  hits: SearchHitDTO[];
}

/** Records the query in `SearchQueryDaily` (fire and forget; failures are only logged). */
export function logSearch(ctx: Ctx, q: string, results: number): void {
  const qNorm = normalizeQuery(q);
  if (qNorm === '') return;
  const day = utcDay(ctx.clock.now());
  row(
    ctx.db,
    `INSERT INTO "SearchQueryDaily" ("day", "qNorm", "results", "count") VALUES ($1::date, $2, $3, 1)
     ON CONFLICT ("day", "qNorm") DO UPDATE SET "count" = "SearchQueryDaily"."count" + 1, "results" = EXCLUDED."results"`,
    [day, qNorm, results],
  ).catch((error: unknown) => ctx.log.warn({ err: error }, 'search query log failed'));
}

/** Search across mods, builds, kits, users and pages (best first). */
export async function search(ctx: Ctx, config: CatalogConfig, input: SearchInput): Promise<SearchOutput> {
  const q = input.q.trim().slice(0, 100);
  const types = new Set<SearchType>(
    input.types && input.types.length > 0 ? input.types : ['mod', 'build', 'kit', 'user', 'page'],
  );
  const limit = input.limit ?? DEFAULT_SEARCH_LIMIT;
  const locale = input.locale ?? 'en';
  const key = `${normalizeQuery(q)}|${[...types].sort().join(',')}|${limit}|${locale}`;

  const result = await cached<SearchOutput>(
    ctx,
    { name: 'search:results', max: 500, ttlMs: SEARCH_TTL_MS },
    key,
    async () => {
      const hits: SearchHitDTO[] = [];
      const tasks: Array<Promise<void>> = [];

      if (types.has('mod') || types.has('build')) {
        tasks.push(
          (async () => {
            const [snapshot, scored] = await Promise.all([getSnapshot(ctx, config), scoreModRows(ctx, q)]);
            for (const r of scored) {
              const entry = snapshot.byId.get(r.id);
              if (!entry || !isListable(snapshot, entry)) continue;
              const type: SearchType = entry.kind === 'build' ? 'build' : 'mod';
              if (!types.has(type)) continue;
              hits.push({
                type,
                id: entry.id,
                title: entry.name,
                subtitle: `@${entry.userHandle}`,
                path: entry.canonicalPath,
                thumbnailUrl: entry.ref.thumbnailUrl,
                kind: entry.kind,
                compatStatus: entry.compatStatus,
                downloads: entry.downloads,
                score: modScore(r, entry.downloads),
                highlight:
                  highlight(entry.name, q) ?? (entry.shortDescription ? highlight(entry.shortDescription, q) : null),
              });
            }
          })(),
        );
      }
      if (types.has('user')) {
        tasks.push(
          (async () => {
            const found = await rows<UserHitRow>(ctx.db, USER_SEARCH_SQL, [
              q,
              SIMILARITY_THRESHOLD,
              WORD_SIMILARITY_THRESHOLD,
              limit,
            ]);
            for (const u of found) {
              hits.push({
                type: 'user',
                id: u.id,
                title: u.displayName,
                subtitle: `@${u.slug}`,
                path: profilePath(u.slug),
                thumbnailUrl: mediaUrlForWidth(config, mediaRowOf(u), 96, u.imageUrl),
                kind: null,
                compatStatus: null,
                downloads: u.downloads === null ? null : num(u.downloads),
                score: Math.round(((u.exact ? 10 : 0) + u.sim) * 10_000) / 10_000,
                highlight: highlight(u.displayName, q),
              });
            }
          })(),
        );
      }
      if (types.has('kit')) {
        tasks.push(
          (async () => {
            const found = await rows<KitHitRow>(ctx.db, KIT_SEARCH_SQL, [
              q,
              SIMILARITY_THRESHOLD,
              WORD_SIMILARITY_THRESHOLD,
              limit,
            ]);
            for (const k of found) {
              hits.push({
                type: 'kit',
                id: k.id,
                title: k.name,
                subtitle: `@${k.ownerHandle}`,
                path: kitPath(k.ownerHandle, k.slug),
                thumbnailUrl: mediaUrlForWidth(config, mediaRowOf(k), 320),
                kind: null,
                compatStatus: null,
                downloads: null,
                score: Math.round(((k.exact ? 10 : 0) + k.sim) * 10_000) / 10_000,
                highlight: highlight(k.name, q),
              });
            }
          })(),
        );
      }
      if (types.has('page')) hits.push(...pageHits(q, locale));
      await Promise.all(tasks);

      const order: Record<SearchType, number> = { mod: 0, build: 1, kit: 2, user: 3, page: 4 };
      hits.sort(
        (a, b) =>
          b.score - a.score ||
          order[a.type] - order[b.type] ||
          (b.downloads ?? 0) - (a.downloads ?? 0) ||
          String(a.id).localeCompare(String(b.id)),
      );
      const top = hits.slice(0, limit);
      await localizeHits(ctx, top, locale);
      return {
        value: { q, total: hits.length, hits: top },
        tags: ['list:mods', 'list:builds', 'list:kits'],
      };
    },
  );

  logSearch(ctx, q, result.total);
  return result;
}

/** Shows the translated name of mods and builds to a visitor of another language (original kept aside). */
async function localizeHits(ctx: Ctx, hits: SearchHitDTO[], locale: Locale): Promise<void> {
  if (locale === 'en' && !hits.some((h) => h.type === 'mod' || h.type === 'build')) return;
  const ids = hits.filter((h) => h.type === 'mod' || h.type === 'build').map((h) => Number(h.id));
  if (ids.length === 0) return;
  try {
    const { items } = await getCardTranslations(ctx, ids, locale);
    const byId = new Map(items.map((t) => [t.id, t]));
    for (const hit of hits) {
      const name = byId.get(Number(hit.id))?.name;
      if (hit.type !== 'mod' && hit.type !== 'build') continue;
      if (name && name !== hit.title) {
        hit.titleOriginal = hit.title;
        hit.title = name;
      }
    }
  } catch (error) {
    ctx.log.warn({ err: error }, 'search hits could not be localized');
  }
}

/** Raw evidence rows of the mod search (cached per normalised query). */
async function scoreModRows(ctx: Ctx, q: string): Promise<ModScoreRow[]> {
  const key = normalizeQuery(q);
  if (key === '') return [];
  const list = await cached<ModScoreRow[]>(
    ctx,
    { name: 'search:mod-rows', max: 500, ttlMs: SEARCH_TTL_MS },
    key,
    async () => ({
      value: await rows<ModScoreRow>(ctx.db, MOD_SEARCH_SQL, [
        q.trim().slice(0, 100),
        SIMILARITY_THRESHOLD,
        WORD_SIMILARITY_THRESHOLD,
      ]),
      tags: ['list:mods', 'list:builds'],
    }),
  );
  return list;
}

/** Relevance map for `GET /mods?q=` (mod id → score including the popularity tie-breaker). */
export async function modRelevance(ctx: Ctx, config: CatalogConfig, q: string): Promise<Map<number, number>> {
  const [snapshot, scored] = await Promise.all([getSnapshot(ctx, config), scoreModRows(ctx, q)]);
  const out = new Map<number, number>();
  for (const r of scored) out.set(r.id, modScore(r, snapshot.byId.get(r.id)?.downloads ?? 0));
  return out;
}
