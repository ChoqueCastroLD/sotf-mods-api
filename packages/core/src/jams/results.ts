/**
 * Results of a jam: marks suspicious votes, computes the standings (see `computeStandings`) into
 * `JamResult` and publishes them. Recomputing is idempotent; the previous rows are replaced.
 */
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { rows } from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { loadCategories } from './queries.ts';
import { computeStandings } from './rules.ts';

/** Marks the votes that do not count. Returns how many votes are excluded. */
async function markExcluded(tx: Transaction, jamId: number): Promise<number> {
  // Reset automatic marks first so a restored entry or a fixed rule counts again.
  await tx.execute(
    sql`UPDATE "JamVote" SET "excludedReason" = NULL WHERE "jamId" = ${jamId} AND "excludedReason" IN ('shared_ip', 'unavailable_voter')`,
  );
  // Same address as a member of the team (seen in their sessions): a friend or an alt account.
  await tx.execute(
    sql`UPDATE "JamVote" v SET "excludedReason" = 'shared_ip'
         WHERE v."jamId" = ${jamId} AND v."excludedReason" IS NULL AND v."ipHash" IS NOT NULL
           AND EXISTS (
             SELECT 1 FROM "JamEntryAuthor" a
               JOIN "Session" s ON s."userId" = a."userId"
              WHERE a."entryId" = v."entryId" AND s."ipHash" = v."ipHash")`,
  );
  // Banned or deleted voters never count.
  await tx.execute(
    sql`UPDATE "JamVote" v SET "excludedReason" = 'unavailable_voter'
         WHERE v."jamId" = ${jamId} AND v."excludedReason" IS NULL
           AND EXISTS (SELECT 1 FROM "User" u WHERE u."id" = v."voterId" AND (u."bannedAt" IS NOT NULL OR u."deletedAt" IS NOT NULL))`,
  );
  const found = await rows<{ n: number }>(
    tx,
    sql`SELECT count(*)::int AS "n" FROM "JamVote" WHERE "jamId" = ${jamId} AND "excludedReason" IS NOT NULL`,
  );
  return found[0]?.n ?? 0;
}

/** Recomputes `JamResult` for a jam (inside a transaction). Only active entries compete. */
export async function computeJamResults(tx: Transaction, ctx: Ctx, jamId: number, minVotes: number): Promise<void> {
  const now = ctx.clock.now();
  await markExcluded(tx, jamId);
  const categories = await loadCategories(tx, jamId);
  const entries = await rows<{ id: number }>(
    tx,
    sql`SELECT "id" FROM "JamEntry" WHERE "jamId" = ${jamId} AND "status" = 'active' ORDER BY "id"`,
  );
  const votes = await rows<{ entryId: number; categoryId: number; voterId: number; score: number }>(
    tx,
    sql`SELECT v."entryId", v."categoryId", v."voterId", v."score"
          FROM "JamVote" v JOIN "JamEntry" e ON e."id" = v."entryId"
         WHERE v."jamId" = ${jamId} AND v."excludedReason" IS NULL AND e."status" = 'active'`,
  );
  const standings = computeStandings({
    categories: categories.map((c) => ({ id: c.id, key: c.key, weight: c.weight })),
    entryIds: entries.map((e) => e.id),
    votes: votes.map((v) => ({ ...v, score: Number(v.score) })),
    minVotes,
  });
  await tx.execute(sql`DELETE FROM "JamResult" WHERE "jamId" = ${jamId}`);
  for (let i = 0; i < standings.length; i += 200) {
    const chunk = standings.slice(i, i + 200);
    await tx.execute(
      sql`INSERT INTO "JamResult" ("jamId", "entryId", "categoryKey", "votes", "average", "score", "rank", "computedAt")
          VALUES ${sql.join(
            chunk.map(
              (r) =>
                sql`(${jamId}, ${r.entryId}, ${r.categoryKey}, ${r.votes}, ${r.average}, ${r.score}, ${r.rank}, ${now})`,
            ),
            sql`, `,
          )}`,
    );
  }
  await tx.execute(sql`UPDATE "Jam" SET "resultsComputedAt" = ${now}, "updatedAt" = ${now} WHERE "id" = ${jamId}`);
}
