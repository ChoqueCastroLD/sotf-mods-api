/**
 * Canonical mod resolver (PLAN §4.6, research/01 §4.3). Mod slugs are unique site-wide, so a mod
 * can be found from almost any URL that ever pointed at it:
 *
 *   1. `(userSlug, slug)` exact on `Mod.slug` or `Mod.canonicalSlug` → `exact`
 *      (an exact old path in `ModSlugHistory` → `history`);
 *   2. `slug` exact site-wide (owner changes, `undefined` users) → `global_slug`
 *      (or a historical slug of any owner → `history`);
 *   3. normalised comparison (lower case; without `'`, `()`, `.`, `_`, `+`; hyphen runs collapsed)
 *      on `Mod.slug`, `canonicalSlug` and `ModSlugHistory.slug` → `normalized`;
 *   4. normalised slug == `lower(mod_id)` (manifest links such as `anwender/helimod`) → `manifest_id`.
 *
 * Ties (several candidates) prefer the requested owner, then visible mods, then the oldest id.
 * The page resolver (`resolvePath`) turns a match into 200/301; the download route uses the match
 * directly (no intermediate 301).
 */
import { normalizeSlugForLookup } from '@sotf/contracts/seo';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';

export type ModMatchRule = 'exact' | 'history' | 'global_slug' | 'normalized' | 'manifest_id';

export interface ModMatch {
  id: number;
  name: string;
  slug: string;
  canonicalSlug: string | null;
  manifestId: string;
  type: 'Mod' | 'Library' | 'Build' | null;
  status: 'pending' | 'published' | 'unlisted' | 'rejected' | 'archived' | 'removed';
  userId: number | null;
  /** Current owner's slug (null for orphan mods). */
  ownerSlug: string | null;
}

export interface ModResolution {
  mod: ModMatch;
  rule: ModMatchRule;
  /** True when the request used the owner's slug and `Mod.slug` verbatim. */
  canonical: boolean;
}

/** SQL twin of `normalizeSlugForLookup` (PLAN §4.6 step 3). */
export function normalizedSql(column: ReturnType<typeof sql>) {
  return sql`regexp_replace(regexp_replace(regexp_replace(lower(${column}), '[''()._+]', '', 'g'), '[[:space:]-]+', '-', 'g'), '^-+|-+$', '', 'g')`;
}

const SELECT = sql`
  SELECT m."id", m."name", m."slug", m."canonicalSlug", m."mod_id" AS "manifestId", m."type", m."status",
         m."userId", u."slug" AS "ownerSlug"
    FROM "Mod" m
    LEFT JOIN "User" u ON u."id" = m."userId"`;

/** Preference among several candidates. */
function orderBy(userSlug: string) {
  return sql`
    ORDER BY (u."slug" = ${userSlug}) DESC NULLS LAST,
             (CASE m."status" WHEN 'published' THEN 0 WHEN 'unlisted' THEN 1 WHEN 'archived' THEN 2
                              WHEN 'pending' THEN 3 WHEN 'removed' THEN 4 ELSE 5 END),
             m."id"
    LIMIT 1`;
}

async function first(db: Executor, query: ReturnType<typeof sql>): Promise<ModMatch | null> {
  const result = await db.execute<ModMatch & Record<string, unknown>>(query);
  const row = result.rows[0];
  return row ? { ...row, id: Number(row.id), userId: row.userId === null ? null : Number(row.userId) } : null;
}

/** Finds the mod behind `(userSlug, slug)` with the rules of PLAN §4.6 steps 1–4. */
export async function findModBySlug(db: Executor, userSlug: string, slug: string): Promise<ModResolution | null> {
  if (!slug) return null;

  // 1. Exact path on the current slug or the canonical slug.
  const exact = await first(
    db,
    sql`${SELECT} WHERE u."slug" = ${userSlug} AND (m."slug" = ${slug} OR m."canonicalSlug" = ${slug}) ${orderBy(userSlug)}`,
  );
  if (exact) return { mod: exact, rule: 'exact', canonical: exact.slug === slug };

  // 1b. Exact old path (renames, owner changes recorded in the history).
  const oldPath = await first(
    db,
    sql`${SELECT} JOIN "ModSlugHistory" h ON h."modId" = m."id"
        WHERE h."userSlug" = ${userSlug} AND h."slug" = ${slug} ${orderBy(userSlug)}`,
  );
  if (oldPath) return { mod: oldPath, rule: 'history', canonical: false };

  // 2. Same slug under any owner (owner changed, `undefined` user).
  const global = await first(
    db,
    sql`${SELECT} WHERE m."slug" = ${slug} OR m."canonicalSlug" = ${slug} ${orderBy(userSlug)}`,
  );
  if (global) return { mod: global, rule: 'global_slug', canonical: false };
  const globalHistory = await first(
    db,
    sql`${SELECT} WHERE EXISTS (SELECT 1 FROM "ModSlugHistory" h WHERE h."modId" = m."id" AND h."slug" = ${slug}) ${orderBy(userSlug)}`,
  );
  if (globalHistory) return { mod: globalHistory, rule: 'history', canonical: false };

  // 3. Normalised comparison (case, punctuation, hyphen runs).
  const normalized = normalizeSlugForLookup(slug);
  if (normalized) {
    const byNormalized = await first(
      db,
      sql`${SELECT}
          WHERE ${normalizedSql(sql`m."slug"`)} = ${normalized}
             OR ${normalizedSql(sql`m."canonicalSlug"`)} = ${normalized}
             OR EXISTS (SELECT 1 FROM "ModSlugHistory" h
                         WHERE h."modId" = m."id" AND ${normalizedSql(sql`h."slug"`)} = ${normalized})
          ${orderBy(userSlug)}`,
    );
    if (byNormalized) return { mod: byNormalized, rule: 'normalized', canonical: false };

    // 4. The slug is the manifest id (`/mods/anwender/helimod` → mod_id `HeliMod`).
    const byManifest = await first(
      db,
      sql`${SELECT}
          WHERE lower(m."mod_id") = ${normalized} OR ${normalizedSql(sql`m."mod_id"`)} = ${normalized}
          ${orderBy(userSlug)}`,
    );
    if (byManifest) return { mod: byManifest, rule: 'manifest_id', canonical: false };
  }
  return null;
}

/** Finds a mod by its manifest `mod_id` (legacy download alias): exact, then case-insensitive. */
export async function findModByManifestId(db: Executor, manifestId: string): Promise<ModMatch | null> {
  const exact = await first(db, sql`${SELECT} WHERE m."mod_id" = ${manifestId} ${orderBy('')}`);
  if (exact) return exact;
  return first(db, sql`${SELECT} WHERE lower(m."mod_id") = ${manifestId.toLowerCase()} ${orderBy('')}`);
}

/** Loads a mod by id with its owner. */
export async function findModById(db: Executor, id: number): Promise<ModMatch | null> {
  return first(db, sql`${SELECT} WHERE m."id" = ${id}`);
}
