/**
 * Drain of the legacy "PendingMention" queue (PLAN §6.9 B18, §2.9 "Modo de coexistencia").
 *
 * Before the cut-over the legacy cron (every 10 minutes) mails and deletes these rows, so v2 must
 * not touch them: the worker only runs this with `LEGACY_COEXIST=false`. From the cut-over on, the
 * rows still queued (and any a legacy process might add) become v2 signals: each row turns into a
 * `comment.on_my_mod` / `comment.reply` / `comment.mention` notification and is deleted **in the
 * same transaction**, exactly like the legacy cron deleted what it had sent. The emails then go out
 * through the normal instant flush (one email per user, grouped as the legacy did).
 */
import type { NotificationType } from '@sotf/contracts/notifications';
import { type Database, pendingMention, withTx } from '@sotf/db';
import { asc, inArray } from 'drizzle-orm';
import type { Clock } from '../kernel/clock.ts';
import type { Jobs } from '../kernel/jobs.ts';
import { loadModRefs, plainExcerpt } from './refs.ts';
import type { NotificationDraft } from './rules.ts';
import { scheduleInstantFlush, writeNotificationDrafts } from './service.ts';

const LEGACY_TYPES: Readonly<Record<string, NotificationType>> = {
  comment: 'comment.on_my_mod',
  reply: 'comment.reply',
  mention: 'comment.mention',
};

export interface LegacyMentionDeps {
  db: Database;
  jobs: Jobs;
  clock: Clock;
}

export interface LegacyDrainResult {
  rows: number;
  created: number;
  grouped: number;
  skipped: number;
}

/** Converts and deletes up to `batch` rows per transaction until the queue is empty. */
export async function drainLegacyMentions(deps: LegacyMentionDeps, batch = 500): Promise<LegacyDrainResult> {
  const total: LegacyDrainResult = { rows: 0, created: 0, grouped: 0, skipped: 0 };
  for (;;) {
    const done = await withTx(deps.db, async (tx) => {
      const rows = await tx
        .select()
        .from(pendingMention)
        .orderBy(asc(pendingMention.id))
        .limit(batch)
        .for('update', { skipLocked: true });
      if (rows.length === 0) return true;
      const mods = await loadModRefs(
        tx,
        rows.map((r) => r.modId),
      );
      const drafts: NotificationDraft[] = [];
      for (const row of rows) {
        const ref = mods.get(row.modId);
        const type = LEGACY_TYPES[row.type] ?? 'comment.mention';
        if (!ref || row.targetUserId === row.fromUserId) continue;
        drafts.push({
          userId: row.targetUserId,
          type,
          actorId: row.fromUserId,
          target: { type: 'mod', id: ref.id, title: ref.name, path: ref.path ? `${ref.path}#comments` : null },
          groupKey: type === 'comment.on_my_mod' ? `comment.on_my_mod:${ref.id}` : null,
          data: {
            modId: ref.id,
            modName: ref.name,
            excerpt: plainExcerpt(row.commentMessage) || null,
            isBugReport: false,
            legacy: true,
          },
          dedupeKey: `legacy-mention:${row.id}`,
        });
      }
      const written = await writeNotificationDrafts(tx, deps, drafts, 'legacy-mention');
      await tx.delete(pendingMention).where(
        inArray(
          pendingMention.id,
          rows.map((r) => r.id),
        ),
      );
      // The legacy cron mailed every pending row, including "comment" ones: flush now.
      if (written.created + written.grouped > 0) await scheduleInstantFlush(tx, deps.jobs, deps.clock.now());
      total.rows += rows.length;
      total.created += written.created;
      total.grouped += written.grouped;
      total.skipped += written.skipped + (rows.length - drafts.length);
      return rows.length < batch;
    });
    if (done) return total;
  }
}
