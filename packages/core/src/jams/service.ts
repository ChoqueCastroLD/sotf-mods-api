/**
 * Mod Jam member writes: follow, submit / withdraw an entry and vote. Every write re-checks the
 * phase inside the transaction with the jam row locked, so a phase change never races a write.
 */
import type {
  EligibleModsDTO,
  JamEntryDTO,
  JamVoteBody,
  MyJamStateDTO,
  SubmitJamEntryBody,
} from '@sotf/contracts/jams';
import { modPath } from '@sotf/contracts/seo';
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { type CommunityConfig, firstRow, loadMember, rows } from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { renderUserText } from '../mentions/index.ts';
import { assertCan } from '../permissions/index.ts';
import { entryDtos, type JamRow, loadCategories, loadJamById, memberActivity, requirePublicJam } from './queries.ts';
import { acceptsSubmissions, acceptsVotes, acceptsWithdrawals, voteBlock } from './rules.ts';

async function lockJam(tx: Transaction, id: number): Promise<JamRow> {
  const found = await tx.execute(sql`SELECT * FROM "Jam" WHERE "id" = ${id} FOR UPDATE`);
  if (found.rows.length === 0) throw errors.notFound('Jam');
  // Re-read through Drizzle so the row is mapped (dates) like every other read.
  const row = await loadJamById(tx, id);
  if (!row) throw errors.notFound('Jam');
  return row;
}

export async function setFollow(ctx: Ctx, slug: string, follow: boolean): Promise<void> {
  const member = await loadMember(ctx);
  const row = await requirePublicJam(ctx.db, slug);
  if (follow) {
    await ctx.db.execute(
      sql`INSERT INTO "JamFollow" ("jamId", "userId") VALUES (${row.id}, ${member.id}) ON CONFLICT DO NOTHING`,
    );
  } else {
    await ctx.db.execute(sql`DELETE FROM "JamFollow" WHERE "jamId" = ${row.id} AND "userId" = ${member.id}`);
  }
}

export async function myJamState(ctx: Ctx, slug: string): Promise<MyJamStateDTO> {
  const member = await loadMember(ctx);
  const row = await requirePublicJam(ctx.db, slug);
  const [follow, mine, votes, activity] = await Promise.all([
    firstRow<{ ok: boolean }>(
      ctx.db,
      sql`SELECT EXISTS (SELECT 1 FROM "JamFollow" WHERE "jamId" = ${row.id} AND "userId" = ${member.id}) AS "ok"`,
    ),
    rows<{ id: number }>(
      ctx.db,
      sql`SELECT e."id" FROM "JamEntry" e JOIN "JamEntryAuthor" a ON a."entryId" = e."id"
           WHERE e."jamId" = ${row.id} AND e."status" = 'active' AND a."userId" = ${member.id}`,
    ),
    rows<{ entryId: number; categoryId: number; score: number }>(
      ctx.db,
      sql`SELECT "entryId", "categoryId", "score" FROM "JamVote" WHERE "jamId" = ${row.id} AND "voterId" = ${member.id}`,
    ),
    memberActivity(ctx.db, member.id),
  ]);
  const reason = voteBlock(
    row.phase,
    row,
    { emailVerified: member.emailVerified, accountCreatedAt: member.createdAt, activity },
    ctx.clock.now(),
  );
  return {
    following: follow?.ok === true,
    eligibility: { canVote: reason === null, reason },
    myEntryIds: mine.map((e) => e.id),
    votes: votes.map((v) => ({ entryId: v.entryId, categoryId: v.categoryId, score: Number(v.score) })),
  };
}

export async function eligibleMods(ctx: Ctx, config: CommunityConfig, slug: string): Promise<EligibleModsDTO> {
  const member = await loadMember(ctx);
  const row = await requirePublicJam(ctx.db, slug);
  const kinds = row.entryKinds === 'any' ? sql`TRUE` : sql`m."type" = ${row.entryKinds}`;
  const found = await rows<{
    id: number;
    name: string;
    slug: string;
    type: string;
    handle: string;
    thumb: string | null;
    submitted: boolean;
  }>(
    ctx.db,
    sql`SELECT m."id", m."name", m."slug", m."type", u."slug" AS "handle", NULL::text AS "thumb",
               EXISTS (SELECT 1 FROM "JamEntry" e WHERE e."jamId" = ${row.id} AND e."modId" = m."id"
                        AND e."status" IN ('active', 'hidden', 'disqualified')) AS "submitted"
          FROM "Mod" m JOIN "User" u ON u."id" = m."userId"
         WHERE m."userId" = ${member.id} AND m."status" = 'published' AND ${kinds}
         ORDER BY m."name" LIMIT 200`,
  );
  void config;
  return {
    items: found.map((m) => ({
      id: m.id,
      name: m.name,
      kind: m.type === 'build' ? ('build' as const) : ('mod' as const),
      canonicalPath: modPath(m.type === 'build' ? 'build' : 'mod', m.handle, m.slug),
      thumbnailUrl: null,
      submitted: m.submitted,
    })),
  };
}

export async function submitEntry(
  ctx: Ctx,
  config: CommunityConfig,
  slug: string,
  input: SubmitJamEntryBody,
): Promise<JamEntryDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  const publicRow = await requirePublicJam(ctx.db, slug);
  const notes = (input.notesMd ?? '').trim();
  const rendered = notes === '' ? null : await renderUserText(ctx.db, notes, member.id);
  const entryId = await ctx.db.transaction(async (tx) => {
    const row = await lockJam(tx, publicRow.id);
    if (!acceptsSubmissions(row.phase)) throw errors.conflict('This jam is not accepting submissions');
    const found = await firstRow<{
      id: number;
      userId: number | null;
      status: string;
      type: string;
      createdAt: unknown;
    }>(tx, sql`SELECT "id", "userId", "status", "type", "createdAt" FROM "Mod" WHERE "id" = ${input.modId}`);
    if (!found || found.userId !== member.id) throw errors.notFound('Mod');
    if (found.status !== 'published') {
      throw errors.conflict('Only published mods and builds can enter a jam');
    }
    if (row.entryKinds !== 'any' && found.type !== row.entryKinds) {
      throw errors.conflict(`This jam only accepts ${row.entryKinds === 'build' ? 'builds' : 'mods'}`);
    }
    const existing = await firstRow<{ id: number; status: string; submittedById: number | null }>(
      tx,
      sql`SELECT "id", "status", "submittedById" FROM "JamEntry" WHERE "jamId" = ${row.id} AND "modId" = ${found.id}`,
    );
    if (existing && existing.status !== 'withdrawn') throw errors.conflict('This mod is already in the jam');
    const own = await firstRow<{ n: number }>(
      tx,
      sql`SELECT count(*)::int AS "n" FROM "JamEntry" e JOIN "JamEntryAuthor" a ON a."entryId" = e."id"
           WHERE e."jamId" = ${row.id} AND e."status" IN ('active', 'hidden') AND a."isLead" AND a."userId" = ${member.id}`,
    );
    if ((own?.n ?? 0) >= row.maxEntriesPerUser) {
      throw errors.conflict(
        `You can enter ${row.maxEntriesPerUser} ${row.maxEntriesPerUser === 1 ? 'entry' : 'entries'} in this jam`,
      );
    }
    const startedAt = row.submissionsOpenAt ?? row.announceAt;
    const createdDuringJam = startedAt !== null && new Date(found.createdAt as string | Date) >= startedAt;
    let id: number;
    if (existing) {
      await tx.execute(
        sql`UPDATE "JamEntry" SET "status" = 'active', "statusReason" = NULL, "notesMd" = ${rendered?.md ?? ''},
              "notesHtml" = ${rendered?.html ?? null}, "submittedById" = ${member.id}, "createdDuringJam" = ${createdDuringJam},
              "updatedAt" = ${now} WHERE "id" = ${existing.id}`,
      );
      await tx.execute(sql`DELETE FROM "JamEntryAuthor" WHERE "entryId" = ${existing.id}`);
      id = existing.id;
    } else {
      const created = await firstRow<{ id: number }>(
        tx,
        sql`INSERT INTO "JamEntry" ("jamId", "modId", "submittedById", "notesMd", "notesHtml", "createdDuringJam", "createdAt", "updatedAt")
            VALUES (${row.id}, ${found.id}, ${member.id}, ${rendered?.md ?? ''}, ${rendered?.html ?? null}, ${createdDuringJam}, ${now}, ${now})
            RETURNING "id"`,
      );
      if (!created) throw new Error('jam entry insert returned no row');
      id = created.id;
    }
    await tx.execute(
      sql`INSERT INTO "JamEntryAuthor" ("entryId", "userId", "isLead") VALUES (${id}, ${member.id}, TRUE)`,
    );
    // Accepted co-authors of the mod are part of the team (snapshot at submission time).
    await tx.execute(
      sql`INSERT INTO "JamEntryAuthor" ("entryId", "userId", "isLead")
          SELECT ${id}, c."userId", FALSE FROM "ModCoAuthor" c JOIN "User" u ON u."id" = c."userId"
           WHERE c."modId" = ${found.id} AND c."status" = 'accepted' AND c."userId" <> ${member.id} AND u."deletedAt" IS NULL
           ORDER BY c."id" LIMIT ${row.maxCoAuthors}
          ON CONFLICT DO NOTHING`,
    );
    await tx.execute(
      sql`INSERT INTO "JamFollow" ("jamId", "userId") VALUES (${row.id}, ${member.id}) ON CONFLICT DO NOTHING`,
    );
    await ctx.jobs.emitNew(tx, 'jam.changed', { jamId: row.id }, { actorId: member.id });
    return id;
  });
  const [entry] = await entryDtos(
    ctx.db,
    config,
    (
      await rows<{
        id: number;
        modId: number;
        notesHtml: string | null;
        createdDuringJam: boolean;
        createdAt: unknown;
      }>(
        ctx.db,
        sql`SELECT "id", "modId", "notesHtml", "createdDuringJam", "createdAt" FROM "JamEntry" WHERE "id" = ${entryId}`,
      )
    ).map((e) => ({ ...e, createdAt: new Date(e.createdAt as string | Date) })),
  );
  if (!entry) throw errors.notFound('Entry');
  return entry;
}

export async function withdrawEntry(ctx: Ctx, slug: string, entryId: number): Promise<void> {
  const member = await loadMember(ctx);
  const publicRow = await requirePublicJam(ctx.db, slug);
  await ctx.db.transaction(async (tx) => {
    const row = await lockJam(tx, publicRow.id);
    const entry = await firstRow<{ id: number; status: string; lead: boolean }>(
      tx,
      sql`SELECT e."id", e."status",
                 EXISTS (SELECT 1 FROM "JamEntryAuthor" a WHERE a."entryId" = e."id" AND a."userId" = ${member.id} AND a."isLead") AS "lead"
            FROM "JamEntry" e WHERE e."id" = ${entryId} AND e."jamId" = ${row.id} FOR UPDATE`,
    );
    if (!entry || !entry.lead) throw errors.notFound('Entry');
    if (entry.status === 'withdrawn') return;
    if (!acceptsWithdrawals(row.phase)) throw errors.conflict('Entries can only be withdrawn before voting starts');
    if (entry.status !== 'active') throw errors.forbidden('Moderators handle this entry');
    await tx.execute(
      sql`UPDATE "JamEntry" SET "status" = 'withdrawn', "updatedAt" = ${ctx.clock.now()} WHERE "id" = ${entryId}`,
    );
    await ctx.jobs.emitNew(tx, 'jam.changed', { jamId: row.id }, { actorId: member.id });
  });
}

export async function castVotes(
  ctx: Ctx,
  slug: string,
  entryId: number,
  input: JamVoteBody,
): Promise<{ entryId: number; votes: { categoryId: number; score: number }[] }> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  const publicRow = await requirePublicJam(ctx.db, slug);
  if (!acceptsVotes(publicRow.phase)) throw errors.conflict('Voting is not open');
  const activity = await memberActivity(ctx.db, member.id);
  await ctx.db.transaction(async (tx: Transaction) => {
    const row = await lockJam(tx, publicRow.id);
    const block = voteBlock(
      row.phase,
      row,
      { emailVerified: member.emailVerified, accountCreatedAt: member.createdAt, activity },
      now,
    );
    if (block === 'not_voting') throw errors.conflict('Voting is not open');
    if (block) throw errors.forbidden(voteBlockMessage(block, row));
    const entry = await firstRow<{ id: number; author: boolean }>(
      tx,
      sql`SELECT e."id", EXISTS (SELECT 1 FROM "JamEntryAuthor" a WHERE a."entryId" = e."id" AND a."userId" = ${member.id}) AS "author"
            FROM "JamEntry" e WHERE e."id" = ${entryId} AND e."jamId" = ${row.id} AND e."status" = 'active'`,
    );
    if (!entry) throw errors.notFound('Entry');
    if (entry.author) throw errors.forbidden('You cannot vote for your own entry');
    const categories = await loadCategories(tx, row.id);
    const valid = new Set(categories.map((c) => c.id));
    const seen = new Set<number>();
    for (const { categoryId, score } of input.scores) {
      if (!valid.has(categoryId) || seen.has(categoryId)) {
        throw errors.validation('Unknown or repeated category', [
          { path: 'scores', code: 'invalid', message: 'unknown or repeated category' },
        ]);
      }
      seen.add(categoryId);
      await tx.execute(
        sql`INSERT INTO "JamVote" ("entryId", "categoryId", "voterId", "jamId", "score", "ipHash", "createdAt", "updatedAt")
            VALUES (${entryId}, ${categoryId}, ${member.id}, ${row.id}, ${score}, ${ctx.ipHash}, ${now}, ${now})
            ON CONFLICT ("entryId", "categoryId", "voterId") DO UPDATE SET
              "changes" = "JamVote"."changes" + (CASE WHEN "JamVote"."score" <> EXCLUDED."score" THEN 1 ELSE 0 END),
              "score" = EXCLUDED."score", "ipHash" = EXCLUDED."ipHash", "updatedAt" = EXCLUDED."updatedAt"`,
      );
    }
  });
  const mine = await rows<{ categoryId: number; score: number }>(
    ctx.db,
    sql`SELECT "categoryId", "score" FROM "JamVote" WHERE "entryId" = ${entryId} AND "voterId" = ${member.id} ORDER BY "categoryId"`,
  );
  return { entryId, votes: mine.map((v) => ({ categoryId: v.categoryId, score: Number(v.score) })) };
}

function voteBlockMessage(
  block: 'email_not_verified' | 'account_too_new' | 'not_enough_activity' | 'not_voting',
  row: JamRow,
) {
  switch (block) {
    case 'email_not_verified':
      return 'Verify your email to vote';
    case 'account_too_new':
      return `Accounts must be at least ${row.minVoterAgeDays} days old to vote`;
    case 'not_enough_activity':
      return 'Take part in the community (comment, review or follow a mod) to unlock voting';
    case 'not_voting':
      return 'Voting is not open';
  }
}
