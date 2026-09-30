/**
 * Recommendations (T1-15): "players also downloaded" and similar mods.
 *
 * The worker computes them nightly (`computeRecommendations`) into "ModRecommendation"; the API
 * reads them (`getRecommendations`).
 *
 * - `also_downloaded`: co-downloads over the last 180 days. A downloader is a user id, or the
 *   stored IP hash for guests (legacy rows without IP are skipped). Bulk downloaders (more than
 *   40 distinct mods: scrapers, pack installs) are ignored. A pair needs at least 2 shared
 *   downloaders; it is ranked by cosine similarity `co / sqrt(downloadersA × downloadersB)` so a
 *   library everybody installs does not drown the list.
 * - `similar`: tag Jaccard + same category + co-download cosine, among the mods that share a tag or
 *   a co-download. When a mod has fewer than eight, the catalogue's text/tag similarity
 *   (`relatedEntries`) tops it up, so a new mod never shows an empty block.
 *
 * Only published, non-NSFW mods with an author are recommended, builds only with builds, and
 * libraries are never recommended (they are dependencies, not a next download).
 */
import { type ModRecommendationsDTO, RECOMMENDATIONS_PER_KIND } from '@sotf/contracts/discovery';
import { type Database, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { assertReachable } from '../catalog/detail.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { relatedEntries } from '../catalog/related.ts';
import { type CatalogEntry, getSnapshot, isListable } from '../catalog/snapshot.ts';
import { cached, rows } from '../catalog/sql.ts';
import type { Ctx } from '../kernel/context.ts';

/** Days of downloads considered. */
export const COLLABORATIVE_WINDOW_DAYS = 180;
/** Downloaders with more distinct mods than this are not a taste signal. */
export const BULK_DOWNLOADER_MODS = 40;
/** Minimum shared downloaders of a pair. */
export const MIN_CO_DOWNLOADERS = 2;
/** Minimum blended score of a "similar" recommendation. */
export const MIN_SIMILAR_SCORE = 0.15;

const COMPUTE_SQL = `
WITH listable AS (
  SELECT m."id", m."userId", m."categoryId", m."downloads",
         CASE WHEN m."type" = 'Build' THEN 'build' ELSE 'mod' END AS "family",
         (m."type" = 'Library') AS "isLibrary"
    FROM "Mod" m
   WHERE m."status" = 'published' AND NOT m."isNSFW" AND m."userId" IS NOT NULL
), dl AS (
  SELECT DISTINCT COALESCE('u' || d."userId"::text, 'i' || d."ip") AS "actor", v."modId" AS "modId"
    FROM "ModDownload" d
    JOIN "ModVersion" v ON v."id" = d."modVersionId"
    JOIN listable l ON l."id" = v."modId"
   WHERE d."createdAt" > (now() AT TIME ZONE 'UTC') - make_interval(days => $1::int)
     AND (d."userId" IS NOT NULL OR (d."ip" <> '' AND d."ip" <> 'undefined'))
), busy AS (
  SELECT "actor" FROM dl GROUP BY "actor" HAVING count(*) > $2::int
), dl2 AS (
  SELECT dl.* FROM dl WHERE dl."actor" NOT IN (SELECT "actor" FROM busy)
), per_mod AS (
  SELECT "modId", count(*)::float8 AS "n" FROM dl2 GROUP BY "modId"
), co AS (
  SELECT a."modId" AS "a", b."modId" AS "b", count(*)::int AS "support"
    FROM dl2 a JOIN dl2 b ON a."actor" = b."actor" AND a."modId" <> b."modId"
   GROUP BY a."modId", b."modId"
  HAVING count(*) >= $3::int
), co_scored AS (
  SELECT co."a", co."b", co."support", co."support" / sqrt(pa."n" * pb."n") AS "cosine"
    FROM co JOIN per_mod pa ON pa."modId" = co."a" JOIN per_mod pb ON pb."modId" = co."b"
), tag_counts AS (
  SELECT t."A" AS "modId", count(*)::float8 AS "n" FROM "_ModToTag" t JOIN listable l ON l."id" = t."A" GROUP BY t."A"
), tag_pairs AS (
  SELECT x."A" AS "a", y."A" AS "b", count(*)::float8 AS "shared"
    FROM "_ModToTag" x
    JOIN "_ModToTag" y ON y."B" = x."B" AND y."A" <> x."A"
    JOIN listable la ON la."id" = x."A"
    JOIN listable lb ON lb."id" = y."A"
   GROUP BY x."A", y."A"
), pair_keys AS (
  SELECT "a", "b" FROM tag_pairs UNION SELECT "a", "b" FROM co_scored
), pair_scores AS (
  SELECT k."a", k."b",
         COALESCE(c."support", 0) AS "support",
         COALESCE(c."cosine", 0) AS "cosine",
         COALESCE(tp."shared" / NULLIF(ta."n" + tb."n" - tp."shared", 0), 0) AS "jaccard",
         (la."categoryId" IS NOT NULL AND la."categoryId" = lb."categoryId") AS "sameCategory",
         lb."downloads" AS "downloads"
    FROM pair_keys k
    JOIN listable la ON la."id" = k."a"
    JOIN listable lb ON lb."id" = k."b" AND lb."family" = la."family" AND NOT lb."isLibrary"
    LEFT JOIN co_scored c ON c."a" = k."a" AND c."b" = k."b"
    LEFT JOIN tag_pairs tp ON tp."a" = k."a" AND tp."b" = k."b"
    LEFT JOIN tag_counts ta ON ta."modId" = k."a"
    LEFT JOIN tag_counts tb ON tb."modId" = k."b"
), picked AS (
  SELECT "a" AS "modId", "b" AS "recommendedModId", 'also_downloaded' AS "kind",
         "cosine" AS "score", "support",
         row_number() OVER (PARTITION BY "a" ORDER BY "cosine" DESC, "support" DESC, "downloads" DESC, "b") AS "rank"
    FROM pair_scores WHERE "support" >= $3::int
  UNION ALL
  SELECT "a", "b", 'similar',
         ("jaccard" + 0.3 * ("sameCategory")::int + 1.5 * "cosine") AS "score", "support",
         row_number() OVER (
           PARTITION BY "a"
           ORDER BY ("jaccard" + 0.3 * ("sameCategory")::int + 1.5 * "cosine") DESC, "downloads" DESC, "b"
         )
    FROM pair_scores
   WHERE ("jaccard" + 0.3 * ("sameCategory")::int + 1.5 * "cosine") >= $4::float8
)
SELECT "modId", "recommendedModId", "kind", "rank"::int AS "rank", "score"::float8 AS "score", "support"::int AS "supportCount"
  FROM picked WHERE "rank" <= $5::int`;

export interface RecommendationsRun {
  /** Rows written. */
  rows: number;
  alsoDownloaded: number;
  similar: number;
  /** Mods with at least one recommendation. */
  mods: number;
}

interface ComputedRow {
  modId: number;
  recommendedModId: number;
  kind: 'also_downloaded' | 'similar';
  rank: number;
  score: number;
  supportCount: number;
}

/** Recomputes "ModRecommendation" (atomically replaces its content). Idempotent. */
export async function computeRecommendations(db: Database): Promise<RecommendationsRun> {
  const computed = await rows<ComputedRow>(db, COMPUTE_SQL, [
    COLLABORATIVE_WINDOW_DAYS,
    BULK_DOWNLOADER_MODS,
    MIN_CO_DOWNLOADERS,
    MIN_SIMILAR_SCORE,
    RECOMMENDATIONS_PER_KIND,
  ]);
  await withTx(db, async (tx) => {
    await tx.execute(sql`DELETE FROM "ModRecommendation"`);
    const CHUNK = 1000;
    for (let i = 0; i < computed.length; i += CHUNK) {
      const values = computed
        .slice(i, i + CHUNK)
        .map((r) => sql`(${r.modId}, ${r.recommendedModId}, ${r.kind}, ${r.rank}, ${r.score}, ${r.supportCount})`);
      await tx.execute(sql`
        INSERT INTO "ModRecommendation" ("modId", "recommendedModId", "kind", "rank", "score", "supportCount")
        VALUES ${sql.join(values, sql`, `)}`);
    }
  });
  return {
    rows: computed.length,
    alsoDownloaded: computed.filter((r) => r.kind === 'also_downloaded').length,
    similar: computed.filter((r) => r.kind === 'similar').length,
    mods: new Set(computed.map((r) => r.modId)).size,
  };
}

interface StoredRow {
  recommendedModId: number;
  kind: 'also_downloaded' | 'similar';
}

const STORED_SQL = `
SELECT "recommendedModId", "kind" FROM "ModRecommendation"
 WHERE "modId" = $1 ORDER BY "kind", "rank"`;

/** The recommendations of a reachable mod, as catalogue cards (only listable mods are returned). */
export async function getRecommendations(ctx: Ctx, config: CatalogConfig, id: number): Promise<ModRecommendationsDTO> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  const stored = await cached<StoredRow[]>(
    ctx,
    { name: 'discovery:recommendations', max: 500, ttlMs: 300_000 },
    String(entry.id),
    async () => ({
      value: await rows<StoredRow>(ctx.db, STORED_SQL, [entry.id]),
      tags: [`mod:${entry.id}`, 'list:mods'],
    }),
  );
  const pick = (kind: StoredRow['kind']): CatalogEntry[] =>
    stored
      .filter((r) => r.kind === kind)
      .map((r) => snapshot.byId.get(r.recommendedModId))
      .filter((e): e is CatalogEntry => e !== undefined && e.id !== entry.id && isListable(snapshot, e))
      .slice(0, RECOMMENDATIONS_PER_KIND);

  const alsoDownloaded = pick('also_downloaded');
  const similar = pick('similar');
  if (similar.length < RECOMMENDATIONS_PER_KIND) {
    const taken = new Set([entry.id, ...similar.map((e) => e.id)]);
    for (const e of relatedEntries(snapshot, entry, RECOMMENDATIONS_PER_KIND * 2)) {
      if (similar.length >= RECOMMENDATIONS_PER_KIND) break;
      if (taken.has(e.id) || e.kind === 'library') continue;
      taken.add(e.id);
      similar.push(e);
    }
  }
  return { alsoDownloaded: alsoDownloaded.map((e) => e.card), similar: similar.map((e) => e.card) };
}
