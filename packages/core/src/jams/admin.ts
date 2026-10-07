/**
 * Mod Jam staff writes (moderators and admins): create and edit jams, force or resume phases,
 * moderate entries and publish results. Every write is audited (`recordAudit`) in its transaction.
 */
import {
  type CreateJamBody,
  JAM_DEFAULT_CATEGORIES,
  type JamAdminDTO,
  type JamAdminEntryDTO,
  type JamPhase,
  type ModerateJamEntryBody,
  type SetJamPhaseBody,
  type UpdateJamBody,
} from '@sotf/contracts/jams';
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { recordAudit } from '../audit/index.ts';
import { type CommunityConfig, firstRow, loadMember } from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { renderUserText } from '../mentions/index.ts';
import { assertCan } from '../permissions/index.ts';
import { changePhase } from './advance.ts';
import { adminEntryDto, adminJamDto, type JamRow, listAdminEntriesPage, loadJamById } from './queries.ts';
import { computeJamResults } from './results.ts';
import { type JamSchedule, PHASE_INDEX, scheduleProblem } from './rules.ts';

/** Moderators and admins that are not suspended (`can()` is the one place that knows the rule). */
async function staff(ctx: Ctx) {
  const member = await loadMember(ctx);
  assertCan(member.subject, 'moderation.decide', undefined, ctx.clock.now());
  return member;
}

/** Guard of the staff console reads that have no other check (`GET /ranger/jams`). */
export async function assertJamStaff(ctx: Ctx): Promise<void> {
  await staff(ctx);
}

async function lock(tx: Transaction, id: number): Promise<JamRow> {
  await tx.execute(sql`SELECT 1 FROM "Jam" WHERE "id" = ${id} FOR UPDATE`);
  const row = await loadJamById(tx, id);
  if (!row) throw errors.notFound('Jam');
  return row;
}

const SCHEDULE_KEYS = [
  'announceAt',
  'submissionsOpenAt',
  'submissionsCloseAt',
  'votingOpenAt',
  'votingCloseAt',
  'archiveAt',
] as const;

const toDate = (value: string | null | undefined): Date | null => (value ? new Date(value) : null);

export async function createJam(ctx: Ctx, config: CommunityConfig, input: CreateJamBody): Promise<JamAdminDTO> {
  const member = await staff(ctx);
  const now = ctx.clock.now();
  const id = await ctx.db.transaction(async (tx) => {
    const taken = await firstRow<{ id: number }>(tx, sql`SELECT "id" FROM "Jam" WHERE "slug" = ${input.slug}`);
    if (taken) throw errors.conflict('That slug is already used by another jam');
    const created = await firstRow<{ id: number }>(
      tx,
      sql`INSERT INTO "Jam" ("slug", "title", "tagline", "theme", "themeHidden", "createdById", "createdAt", "updatedAt")
          VALUES (${input.slug}, ${input.title}, ${input.tagline ?? ''}, ${input.theme ?? ''}, ${input.themeHidden ?? false},
                  ${member.id}, ${now}, ${now}) RETURNING "id"`,
    );
    if (!created) throw new Error('jam insert returned no row');
    for (const [position, key] of JAM_DEFAULT_CATEGORIES.entries()) {
      await tx.execute(
        sql`INSERT INTO "JamCategory" ("jamId", "key", "position") VALUES (${created.id}, ${key}, ${position})`,
      );
    }
    await recordAudit(tx, ctx, {
      action: 'jam.create',
      targetType: 'jam',
      targetId: created.id,
      after: { slug: input.slug, title: input.title },
    });
    return created.id;
  });
  const row = await loadJamById(ctx.db, id);
  if (!row) throw errors.notFound('Jam');
  return adminJamDto(ctx.db, config, row);
}

export async function getAdminJam(ctx: Ctx, config: CommunityConfig, id: number): Promise<JamAdminDTO> {
  await staff(ctx);
  const row = await loadJamById(ctx.db, id);
  if (!row) throw errors.notFound('Jam');
  return adminJamDto(ctx.db, config, row);
}

export async function updateJam(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  input: UpdateJamBody,
): Promise<JamAdminDTO> {
  const member = await staff(ctx);
  const now = ctx.clock.now();
  const md = async (value: string | undefined) =>
    value === undefined
      ? undefined
      : value.trim() === ''
        ? { md: '', html: null }
        : await renderUserText(ctx.db, value, member.id);
  const [description, rules, prizes] = await Promise.all([
    md(input.descriptionMd),
    md(input.rulesMd),
    md(input.prizesMd),
  ]);
  await ctx.db.transaction(async (tx) => {
    const current = await lock(tx, id);
    const schedule = Object.fromEntries(
      SCHEDULE_KEYS.map((k) => [k, input[k] === undefined ? current[k] : toDate(input[k])]),
    ) as unknown as JamSchedule;
    const problem = scheduleProblem(schedule);
    if (problem) throw errors.validation(problem, [{ path: 'schedule', code: 'invalid', message: problem }]);
    if (input.categories) {
      if (PHASE_INDEX[current.phase] >= PHASE_INDEX.voting) {
        throw errors.conflict('Categories cannot change once voting started');
      }
      const keys = new Set<string>();
      for (const c of input.categories) {
        if (keys.has(c.key))
          throw errors.validation('Repeated category', [
            { path: 'categories', code: 'invalid', message: `repeated ${c.key}` },
          ]);
        keys.add(c.key);
      }
      await tx.execute(
        sql`DELETE FROM "JamCategory" WHERE "jamId" = ${id} AND "key" NOT IN (${sql.join(
          [...keys].map((k) => sql`${k}`),
          sql`, `,
        )})`,
      );
      for (const [position, c] of input.categories.entries()) {
        await tx.execute(
          sql`INSERT INTO "JamCategory" ("jamId", "key", "label", "weight", "position")
              VALUES (${id}, ${c.key}, ${c.label ?? null}, ${c.weight}, ${position})
              ON CONFLICT ("jamId", "key") DO UPDATE SET "label" = EXCLUDED."label", "weight" = EXCLUDED."weight", "position" = EXCLUDED."position"`,
        );
      }
    }
    const pick = <T>(value: T | undefined, column: string) =>
      value === undefined ? sql.raw(`"${column}"`) : sql`${value}`;
    const dateOf = (key: (typeof SCHEDULE_KEYS)[number]) =>
      input[key] === undefined ? sql.raw(`"${key}"`) : sql`${toDate(input[key])}`;
    await tx.execute(
      sql`UPDATE "Jam" SET
            "title" = ${pick(input.title, 'title')}, "tagline" = ${pick(input.tagline, 'tagline')},
            "theme" = ${pick(input.theme, 'theme')}, "themeHidden" = ${pick(input.themeHidden, 'themeHidden')},
            "descriptionMd" = ${description ? description.md : sql.raw('"descriptionMd"')},
            "descriptionHtml" = ${description ? description.html : sql.raw('"descriptionHtml"')},
            "rulesMd" = ${rules ? rules.md : sql.raw('"rulesMd"')}, "rulesHtml" = ${rules ? rules.html : sql.raw('"rulesHtml"')},
            "prizesMd" = ${prizes ? prizes.md : sql.raw('"prizesMd"')}, "prizesHtml" = ${prizes ? prizes.html : sql.raw('"prizesHtml"')},
            "bannerUrl" = ${pick(input.bannerUrl, 'bannerUrl')}, "accent" = ${pick(input.accent, 'accent')},
            "announceAt" = ${dateOf('announceAt')}, "submissionsOpenAt" = ${dateOf('submissionsOpenAt')},
            "submissionsCloseAt" = ${dateOf('submissionsCloseAt')}, "votingOpenAt" = ${dateOf('votingOpenAt')},
            "votingCloseAt" = ${dateOf('votingCloseAt')}, "archiveAt" = ${dateOf('archiveAt')},
            "entryKinds" = ${pick(input.entryKinds, 'entryKinds')}, "maxEntriesPerUser" = ${pick(input.maxEntriesPerUser, 'maxEntriesPerUser')},
            "maxCoAuthors" = ${pick(input.maxCoAuthors, 'maxCoAuthors')}, "minVoterAgeDays" = ${pick(input.minVoterAgeDays, 'minVoterAgeDays')},
            "minVoterActivity" = ${pick(input.minVoterActivity, 'minVoterActivity')}, "minVotes" = ${pick(input.minVotes, 'minVotes')},
            "autoPublishResults" = ${pick(input.autoPublishResults, 'autoPublishResults')}, "updatedAt" = ${now}
          WHERE "id" = ${id}`,
    );
    const changed = Object.keys(input).filter((k) => !/Md$/.test(k));
    await recordAudit(tx, ctx, { action: 'jam.update', targetType: 'jam', targetId: id, after: { fields: changed } });
    await ctx.jobs.emitNew(tx, 'jam.changed', { jamId: id }, { actorId: member.id });
  });
  const row = await loadJamById(ctx.db, id);
  if (!row) throw errors.notFound('Jam');
  return adminJamDto(ctx.db, config, row);
}

export async function deleteJam(ctx: Ctx, id: number): Promise<void> {
  const member = await staff(ctx);
  await ctx.db.transaction(async (tx) => {
    const row = await lock(tx, id);
    if (row.phase !== 'draft') throw errors.conflict('Only draft jams can be deleted');
    await tx.execute(sql`DELETE FROM "Jam" WHERE "id" = ${id}`);
    await recordAudit(tx, ctx, { action: 'jam.delete', targetType: 'jam', targetId: id, before: { slug: row.slug } });
    await ctx.jobs.emitNew(tx, 'jam.changed', { jamId: id }, { actorId: member.id });
  });
}

/**
 * Forces a phase. Announcing a draft only publishes it (the schedule keeps running); any other
 * forced phase locks the schedule until staff resume it.
 */
export async function forcePhase(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  input: SetJamPhaseBody,
): Promise<JamAdminDTO> {
  const member = await staff(ctx);
  await ctx.db.transaction(async (tx) => {
    const row = await lock(tx, id);
    if (row.phase === input.phase) return;
    const publish = row.phase === 'draft' && input.phase === 'announced';
    if (input.phase === 'draft' && PHASE_INDEX[row.phase] > PHASE_INDEX.announced) {
      throw errors.conflict('A jam that already collected entries cannot go back to draft');
    }
    await changePhase(tx, ctx, row, input.phase as JamPhase, {
      lock: publish ? row.phaseLocked : true,
      actorId: member.id,
    });
    await recordAudit(tx, ctx, {
      action: 'jam.phase',
      targetType: 'jam',
      targetId: id,
      before: { phase: row.phase, locked: row.phaseLocked },
      after: { phase: input.phase },
      reason: input.reason,
    });
  });
  return getAdminJam(ctx, config, id);
}

export async function resumeSchedule(ctx: Ctx, config: CommunityConfig, id: number): Promise<JamAdminDTO> {
  await staff(ctx);
  await ctx.db.transaction(async (tx) => {
    const row = await lock(tx, id);
    if (!row.phaseLocked) return;
    await tx.execute(sql`UPDATE "Jam" SET "phaseLocked" = FALSE, "updatedAt" = ${ctx.clock.now()} WHERE "id" = ${id}`);
    await recordAudit(tx, ctx, { action: 'jam.resume', targetType: 'jam', targetId: id, before: { locked: true } });
  });
  return getAdminJam(ctx, config, id);
}

export async function listAdminEntries(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  input: {
    page: number;
    pageSize: number;
    status?: JamAdminEntryDTO['status'] | undefined;
    q?: string | undefined;
    sort?: 'newest' | 'oldest' | 'votes' | 'name' | undefined;
  },
) {
  await staff(ctx);
  if (!(await loadJamById(ctx.db, id))) throw errors.notFound('Jam');
  const first = await listAdminEntriesPage(ctx.db, config, id, {
    status: input.status,
    q: input.q,
    sort: input.sort,
    limit: input.pageSize,
    offset: (input.page - 1) * input.pageSize,
  });
  const totalPages = first.total === 0 ? 0 : Math.ceil(first.total / input.pageSize);
  return { ...first, page: input.page, pageSize: input.pageSize, totalPages };
}

export async function moderateEntry(
  ctx: Ctx,
  config: CommunityConfig,
  jamId: number,
  entryId: number,
  input: ModerateJamEntryBody,
): Promise<JamAdminEntryDTO> {
  const member = await staff(ctx);
  await ctx.db.transaction(async (tx) => {
    const row = await lock(tx, jamId);
    const entry = await firstRow<{ id: number; status: string }>(
      tx,
      sql`SELECT "id", "status" FROM "JamEntry" WHERE "id" = ${entryId} AND "jamId" = ${jamId} FOR UPDATE`,
    );
    if (!entry) throw errors.notFound('Entry');
    await tx.execute(
      sql`UPDATE "JamEntry" SET "status" = ${input.status}, "statusReason" = ${input.status === 'active' ? null : (input.reason ?? null)},
            "updatedAt" = ${ctx.clock.now()} WHERE "id" = ${entryId}`,
    );
    // A change after the results were computed recomputes them (the podium may shift).
    if (row.resultsComputedAt !== null) await computeJamResults(tx, ctx, jamId, row.minVotes);
    await recordAudit(tx, ctx, {
      action: 'jam.entry.moderate',
      targetType: 'jam_entry',
      targetId: entryId,
      before: { status: entry.status },
      after: { status: input.status },
      reason: input.reason,
    });
    await ctx.jobs.emitNew(tx, 'jam.changed', { jamId }, { actorId: member.id });
  });
  return adminEntryDto(ctx.db, config, entryId);
}

/** Recomputes and publishes the results (phase `voting` closed or later). */
export async function publishResults(ctx: Ctx, config: CommunityConfig, id: number): Promise<JamAdminDTO> {
  const member = await staff(ctx);
  await ctx.db.transaction(async (tx) => {
    const row = await lock(tx, id);
    if (PHASE_INDEX[row.phase] < PHASE_INDEX.results) {
      throw errors.conflict('Results can be published once the jam reached the results phase');
    }
    await computeJamResults(tx, ctx, id, row.minVotes);
    const firstTime = row.resultsPublishedAt === null;
    await tx.execute(
      sql`UPDATE "Jam" SET "resultsPublishedAt" = COALESCE("resultsPublishedAt", ${ctx.clock.now()}), "updatedAt" = ${ctx.clock.now()} WHERE "id" = ${id}`,
    );
    await recordAudit(tx, ctx, {
      action: 'jam.results.publish',
      targetType: 'jam',
      targetId: id,
      after: { firstTime },
    });
    // Followers hear about the results once, when they first become public.
    if (firstTime) {
      await ctx.jobs.emitNew(
        tx,
        'jam.phase_changed',
        { jamId: id, phase: 'results', previous: row.phase },
        { actorId: member.id },
      );
    } else {
      await ctx.jobs.emitNew(tx, 'jam.changed', { jamId: id }, { actorId: member.id });
    }
  });
  return getAdminJam(ctx, config, id);
}
