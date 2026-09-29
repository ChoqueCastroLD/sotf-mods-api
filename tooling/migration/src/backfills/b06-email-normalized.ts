/**
 * B6 · `"User"."emailNormalized" = lower(trim(email))` (PLAN §6.9, research/02 Q13).
 *
 * The legacy unique index on `email` is case-sensitive while login is not, so two accounts may
 * share a normalised email. Collisions are written to `out/email-collisions.csv` and are resolved
 * by hand with the owner (PLAN §6.13 A6); until there are none, migration `0045` (the unique
 * index on `emailNormalized`) stays deferred. Nothing is merged or changed automatically.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Backfill } from './framework.ts';

export interface EmailCollision {
  emailNormalized: string;
  id: number;
  email: string;
  createdAt: Date;
  mods: number;
  comments: number;
}

function csvField(value: string | number): string {
  const text = String(value);
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function collisionsCsv(rows: readonly EmailCollision[]): string {
  const header = 'emailNormalized,id,email,createdAt,mods,comments';
  const lines = rows.map((r) =>
    [r.emailNormalized, r.id, r.email, r.createdAt.toISOString(), r.mods, r.comments].map(csvField).join(','),
  );
  return `${[header, ...lines].join('\n')}\n`;
}

export const b06: Backfill = {
  id: 'B6',
  title: 'normalised emails (collisions reported, never merged)',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT count(*)::text AS checksum FROM "User" WHERE "emailNormalized" IS NULL`,
  async run(ctx) {
    const { client } = ctx;
    let total = 0;
    let cursor = 0;
    for (;;) {
      const { rows } = await client.query<{ id: number }>(
        `SELECT "id" FROM "User" WHERE "id" > $1 AND "emailNormalized" IS NULL ORDER BY "id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (rows.length === 0) break;
      cursor = rows[rows.length - 1]?.id as number;
      const updated = await ctx.batch(() =>
        client.query(
          `UPDATE "User" SET "emailNormalized" = lower(btrim("email"))
            WHERE "id" = ANY($1::int[]) AND "emailNormalized" IS NULL`,
          [rows.map((r) => r.id)],
        ),
      );
      total += updated.rowCount ?? 0;
    }

    // In a dry run the column may still be empty: compute the collisions from the source column.
    const { rows: collisions } = await client.query<EmailCollision>(
      `WITH n AS (SELECT "id", "email", "createdAt", lower(btrim("email")) AS norm FROM "User")
       SELECT n.norm AS "emailNormalized", n."id", n."email", n."createdAt",
              (SELECT count(*)::int FROM "Mod" m WHERE m."userId" = n."id") AS mods,
              (SELECT count(*)::int FROM "Comment" c WHERE c."userId" = n."id") AS comments
         FROM n WHERE n.norm IN (SELECT norm FROM n GROUP BY norm HAVING count(*) > 1)
        ORDER BY n.norm, n."id"`,
    );
    const groups = new Set(collisions.map((c) => c.emailNormalized)).size;
    ctx.notes.collisionGroups = groups;
    ctx.notes.collisionAccounts = collisions.length;
    if (collisions.length > 0) {
      const file = join(ctx.outDir, 'email-collisions.csv');
      if (!ctx.dryRun) {
        mkdirSync(ctx.outDir, { recursive: true });
        writeFileSync(file, collisionsCsv(collisions));
        ctx.notes.collisionsFile = file;
      }
      ctx.log.warn(
        `B6: ${groups} email collision group(s) (${collisions.length} accounts)${ctx.dryRun ? '' : ` → ${file}`}; ` +
          'the unique index 0045 stays deferred until they are resolved with the owner',
      );
    }
    return total;
  },
};
