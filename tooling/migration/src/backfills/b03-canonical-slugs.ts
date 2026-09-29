/**
 * B3 · Canonical slugs and URL history (PLAN §6.9, §4.6).
 *
 * - `"Mod"."canonicalSlug"`: strict `[a-z0-9-]` slug, unique per owner (`-2` on collision). The
 *   legacy `"Mod"."slug"` never changes before the contract phase.
 * - `"ModSlugHistory"`: one `legacy` row with the current path of every mod and one
 *   `canonicalized` row when the canonical slug differs, so both old and new URLs resolve.
 * - `"UserSlugHistory"`: the current slug of every user.
 */
import { assignCanonicalSlugs } from '../slug.ts';
import type { Backfill } from './framework.ts';

export const b03: Backfill = {
  id: 'B3',
  title: 'canonical slugs and URL history',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || coalesce("canonicalSlug", '~'), ',' ORDER BY "id"), '')) AS checksum FROM "Mod"`,
  async run(ctx) {
    const { client } = ctx;
    // Owners (NULL = orphan mods) that still have a mod without canonical slug.
    const { rows: owners } = await client.query<{ userId: number | null }>(
      `SELECT DISTINCT "userId" FROM "Mod" WHERE "canonicalSlug" IS NULL ORDER BY "userId" NULLS LAST`,
    );
    let mods = 0;
    let history = 0;
    const perBatch = Math.max(1, Math.floor(ctx.batchSize / 20));
    for (let i = 0; i < owners.length; i += perBatch) {
      const group = owners.slice(i, i + perBatch).map((o) => o.userId);
      const result = await ctx.batch(async () => {
        const { rows } = await client.query<{
          id: number;
          slug: string;
          name: string;
          userId: number | null;
          canonicalSlug: string | null;
        }>(
          `SELECT "id", "slug", "name", "userId", "canonicalSlug" FROM "Mod"
            WHERE "userId" = ANY($1::int[]) OR ("userId" IS NULL AND $2::boolean)
            ORDER BY "id" FOR UPDATE`,
          [group.filter((g) => g !== null), group.includes(null)],
        );
        const byOwner = new Map<number | null, typeof rows>();
        for (const r of rows) byOwner.set(r.userId, [...(byOwner.get(r.userId) ?? []), r]);
        const ids: number[] = [];
        const slugs: string[] = [];
        for (const list of byOwner.values()) {
          const taken = list.filter((m) => m.canonicalSlug !== null).map((m) => m.canonicalSlug as string);
          const pending = list.filter((m) => m.canonicalSlug === null);
          for (const [id, slug] of assignCanonicalSlugs(pending, taken)) {
            ids.push(id);
            slugs.push(slug);
          }
        }
        if (ids.length === 0) return { mods: 0, history: 0 };
        await client.query(
          `UPDATE "Mod" m SET "canonicalSlug" = t.slug FROM unnest($1::int[], $2::text[]) AS t(id, slug)
            WHERE m."id" = t.id AND m."canonicalSlug" IS NULL`,
          [ids, slugs],
        );
        const inserted = await client.query(
          `INSERT INTO "ModSlugHistory" ("modId", "userSlug", "slug", "reason", "createdAt")
           SELECT m."id", u."slug", p.slug, p.reason, m."createdAt" AT TIME ZONE 'UTC'
             FROM "Mod" m
             JOIN "User" u ON u."id" = m."userId"
             CROSS JOIN LATERAL (VALUES (m."slug", 'legacy'), (m."canonicalSlug", 'canonicalized')) AS p(slug, reason)
            WHERE m."id" = ANY($1::int[]) AND (p.reason = 'legacy' OR p.slug <> m."slug")
           ON CONFLICT ("modId", lower("userSlug"), lower("slug")) DO NOTHING`,
          [ids],
        );
        return { mods: ids.length, history: inserted.rowCount ?? 0 };
      });
      mods += result.mods;
      history += result.history;
    }

    // Current user slugs (the profile URL /profile/:slug keeps resolving after a rename).
    let users = 0;
    let cursor = 0;
    for (;;) {
      const { rows } = await client.query<{ id: number }>(
        `SELECT u."id" FROM "User" u WHERE u."id" > $1
            AND NOT EXISTS (SELECT 1 FROM "UserSlugHistory" h WHERE h."slug" = u."slug")
          ORDER BY u."id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (rows.length === 0) break;
      cursor = rows[rows.length - 1]?.id as number;
      const inserted = await ctx.batch(() =>
        client.query(
          `INSERT INTO "UserSlugHistory" ("userId", "slug", "createdAt")
           SELECT "id", "slug", "createdAt" AT TIME ZONE 'UTC' FROM "User" WHERE "id" = ANY($1::int[])
           ON CONFLICT ("slug") DO NOTHING`,
          [rows.map((r) => r.id)],
        ),
      );
      users += inserted.rowCount ?? 0;
    }
    Object.assign(ctx.notes, { mods, modSlugHistory: history, userSlugHistory: users });
    return mods + history + users;
  },
};
