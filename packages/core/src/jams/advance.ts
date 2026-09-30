/**
 * Phase changes. `advanceJams` is the worker tick: every jam follows its schedule (forward only,
 * unless staff locked the phase). `changePhase` is the single place that writes a phase, so the
 * results are computed and the domain event is emitted the same way for the worker and for staff.
 */
import type { JamPhase } from '@sotf/contracts/jams';
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { rows } from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { type JamRow, loadJamById } from './queries.ts';
import { computeJamResults } from './results.ts';
import { nextAutoPhase, PHASE_INDEX } from './rules.ts';

/** Moves a (locked) jam to `phase`. Returns the updated row. */
export async function changePhase(
  tx: Transaction,
  ctx: Ctx,
  jam: JamRow,
  phase: JamPhase,
  options: { lock?: boolean; actorId?: number | null } = {},
): Promise<JamRow> {
  const now = ctx.clock.now();
  const previous = jam.phase;
  const enteringResults = PHASE_INDEX[phase] >= PHASE_INDEX.results && jam.resultsComputedAt === null;
  if (enteringResults) await computeJamResults(tx, ctx, jam.id, jam.minVotes);
  const publishNow =
    PHASE_INDEX[phase] >= PHASE_INDEX.results && jam.resultsPublishedAt === null && jam.autoPublishResults;
  await tx.execute(
    sql`UPDATE "Jam" SET "phase" = ${phase}, "phaseLocked" = ${options.lock ?? jam.phaseLocked},
          "resultsPublishedAt" = ${publishNow ? now : (jam.resultsPublishedAt ?? null)}, "updatedAt" = ${now}
         WHERE "id" = ${jam.id}`,
  );
  if (previous !== phase) {
    // Unpublished results stay quiet: followers hear about them when staff publish.
    const quiet = PHASE_INDEX[phase] >= PHASE_INDEX.results && !publishNow && jam.resultsPublishedAt === null;
    if (quiet) await ctx.jobs.emitNew(tx, 'jam.changed', { jamId: jam.id }, { actorId: options.actorId ?? null });
    else {
      await ctx.jobs.emitNew(
        tx,
        'jam.phase_changed',
        { jamId: jam.id, phase, previous },
        { actorId: options.actorId ?? null },
      );
    }
  }
  const updated = await loadJamById(tx, jam.id);
  if (!updated) throw new Error('jam vanished');
  return updated;
}

/** Worker tick. Returns the ids of the jams that changed phase. */
export async function advanceJams(ctx: Ctx): Promise<number[]> {
  const candidates = await rows<{ id: number }>(
    ctx.db,
    sql`SELECT "id" FROM "Jam" WHERE "phase" NOT IN ('draft', 'archived') AND NOT "phaseLocked" ORDER BY "id"`,
  );
  const moved: number[] = [];
  for (const { id } of candidates) {
    await ctx.db.transaction(async (tx) => {
      await tx.execute(sql`SELECT 1 FROM "Jam" WHERE "id" = ${id} FOR UPDATE`);
      const jam = await loadJamById(tx, id);
      if (!jam) return;
      const target = nextAutoPhase(jam.phase, jam.phaseLocked, jam, ctx.clock.now());
      if (target === jam.phase) return;
      await changePhase(tx, ctx, jam, target);
      moved.push(id);
    });
  }
  return moved;
}
