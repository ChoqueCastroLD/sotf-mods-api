/**
 * Account deletion (T0-14, PLAN §9.3): `POST /me/delete` (password confirmation) schedules the
 * deletion with a 14-day grace period; `POST /me/delete/cancel` stops it. The daily
 * `account.delete` sweep then **anonymizes** the account instead of deleting the row (legacy
 * foreign keys, comments and reviews must stay readable):
 *
 * - "User": email → `deleted-<id>@deleted.invalid`, name/displayName → «Deleted survivor» (the UI
 *   localizes it from `deletedAt`), handle → `deleted-<id>`, unusable password, bio, links, avatar,
 *   banner, settings, privacy and onboarding cleared, `deletedAt` set.
 * - Personal data deleted: sessions, one-time tokens, exports (and their objects), notifications and
 *   preferences, follows (both directions), favorites and kits; the download history is unlinked,
 *   queued emails are dropped and the security log is erased.
 * - Comments, reviews and compat reports stay, attributed to the anonymized account («Deleted
 *   survivor»); moderation history (reports, sanctions) is kept for accountability.
 * - Mods: `archive_mods` (default) archives every live mod; `keep_mods_anonymous` keeps them
 *   published without attribution, and the old handle stays in "UserSlugHistory" so their URLs
 *   keep resolving (the user chose to leave them public).
 */
import type { AccountDeletionDTO as AccountDeletionSchema } from '@sotf/contracts/me';
import { type AccountDeletionMode, accountDeletion, type Database, type Executor, mod, user, withTx } from '@sotf/db';
import { and, eq, inArray, isNull, lte, sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { AuthService } from '../auth/service.ts';
import { siteLink } from '../auth/service.ts';
import { displayNameOf, findUserById, localeOf } from '../auth/users.ts';
import { queueEmail } from '../email/outbox.ts';
import type { Clock } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import type { Jobs } from '../kernel/jobs.ts';
import type { Logger } from '../kernel/logger.ts';
import type { ExportStorage } from './export-storage.ts';

export type AccountDeletionDTO = z.infer<typeof AccountDeletionSchema>;

export const DELETION_GRACE_MS = 14 * 24 * 3600 * 1000;
export const DELETED_DISPLAY_NAME = 'Deleted survivor';

function toDTO(row: { requestedAt: Date; executeAfter: Date; mode: AccountDeletionMode }): AccountDeletionDTO {
  return { requestedAt: row.requestedAt.toISOString(), executeAfter: row.executeAfter.toISOString(), mode: row.mode };
}

/** Active (scheduled, not cancelled, not executed) deletion of a user. */
export async function activeDeletion(db: Executor, userId: number) {
  const [row] = await db
    .select()
    .from(accountDeletion)
    .where(
      and(eq(accountDeletion.userId, userId), isNull(accountDeletion.cancelledAt), isNull(accountDeletion.executedAt)),
    );
  return row ?? null;
}

export async function requestDeletion(
  ctx: Ctx,
  auth: AuthService,
  input: { password: string; mode: AccountDeletionMode },
): Promise<AccountDeletionDTO> {
  const target = await auth.confirmPassword(ctx, input.password);
  const now = ctx.clock.now();
  const executeAfter = new Date(now.getTime() + DELETION_GRACE_MS);
  return withTx(ctx.db, async (tx) => {
    const existing = await activeDeletion(tx, target.id);
    if (existing) throw errors.conflict('An account deletion is already scheduled');
    // One row per user (primary key): a cancelled or stale request is replaced.
    await tx
      .insert(accountDeletion)
      .values({ userId: target.id, requestedAt: now, executeAfter, mode: input.mode })
      .onConflictDoUpdate({
        target: accountDeletion.userId,
        set: { requestedAt: now, executeAfter, mode: input.mode, cancelledAt: null, executedAt: null },
      });
    const locale = localeOf(target, ctx.locale);
    await queueEmail(tx, ctx.jobs, {
      userId: target.id,
      to: target.email,
      template: 'account.deletion_scheduled',
      locale,
      payload: {
        displayName: displayNameOf(target),
        executeAfter: executeAfter.toISOString(),
        cancelUrl: siteLink(auth.deps.siteUrl, locale, '/settings/data'),
        mode: input.mode,
      },
      dedupeKey: `account.delete-scheduled:${target.id}:${now.getTime()}`,
    });
    await auth.recordEvent(tx, ctx, 'account_delete_request', true, target.id);
    return toDTO({ requestedAt: now, executeAfter, mode: input.mode });
  });
}

export async function cancelDeletion(ctx: Ctx, auth: AuthService): Promise<void> {
  const actor = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  const now = ctx.clock.now();
  await withTx(ctx.db, async (tx) => {
    const existing = await activeDeletion(tx, actor.userId);
    if (!existing) throw errors.notFound('Scheduled deletion');
    await tx.update(accountDeletion).set({ cancelledAt: now }).where(eq(accountDeletion.userId, actor.userId));
    const target = await findUserById(tx, actor.userId);
    if (target) {
      await queueEmail(tx, ctx.jobs, {
        userId: target.id,
        to: target.email,
        template: 'account.deletion_cancelled',
        locale: localeOf(target, ctx.locale),
        payload: { displayName: displayNameOf(target), cancelledAt: now.toISOString() },
        dedupeKey: `account.delete-cancelled:${target.id}:${now.getTime()}`,
      });
    }
    await auth.recordEvent(tx, ctx, 'account_delete_cancel', true, actor.userId);
  });
}

export interface DeletionJobDeps {
  db: Database;
  jobs: Jobs;
  clock: Clock;
  log: Logger;
  storage: ExportStorage | null;
}

function kindOf(type: string | null): 'mod' | 'library' | 'build' {
  if (type === 'Library') return 'library';
  if (type === 'Build') return 'build';
  return 'mod';
}

/** Anonymizes one account whose deletion is due. Returns false when nothing was due. */
export async function executeDeletion(deps: DeletionJobDeps, userId: number): Promise<boolean> {
  const now = deps.clock.now();
  const exportKeys: string[] = [];
  const done = await withTx(deps.db, async (tx) => {
    const [due] = await tx
      .select()
      .from(accountDeletion)
      .where(
        and(
          eq(accountDeletion.userId, userId),
          isNull(accountDeletion.cancelledAt),
          isNull(accountDeletion.executedAt),
          lte(accountDeletion.executeAfter, now),
        ),
      )
      .for('update');
    if (!due) return false;
    const target = await findUserById(tx, userId);
    if (!target) return false;

    // Goodbye email to the address before it is erased.
    if (!target.deletedAt) {
      await queueEmail(tx, deps.jobs, {
        userId: null,
        to: target.email,
        template: 'account.deletion_completed',
        locale: localeOf(target),
        payload: { displayName: displayNameOf(target) },
        dedupeKey: `account.deleted:${userId}`,
      });
    }

    // Mods.
    const mods = await tx
      .select({ id: mod.id, status: mod.status, type: mod.type, categoryId: mod.categoryId })
      .from(mod)
      .where(eq(mod.userId, userId));
    if (due.mode === 'archive_mods') {
      const live = mods.filter((m) => m.status === 'published' || m.status === 'unlisted' || m.status === 'pending');
      if (live.length > 0) {
        await tx
          .update(mod)
          .set({ status: 'archived', statusReason: 'account_deleted', statusChangedAt: now, archivedAt: now })
          .where(
            inArray(
              mod.id,
              live.map((m) => m.id),
            ),
          );
        const categories = await tx.execute<{ id: number; slug: string }>(
          sql`SELECT "id", "slug" FROM "Category" WHERE "id" IN (SELECT "categoryId" FROM "Mod" WHERE "userId" = ${userId})`,
        );
        const slugOf = new Map(categories.rows.map((c) => [c.id, c.slug]));
        for (const m of live) {
          await deps.jobs.emitNew(
            tx,
            'mod.status_changed',
            {
              modId: m.id,
              authorId: userId,
              kind: kindOf(m.type),
              categorySlug: (m.categoryId !== null ? slugOf.get(m.categoryId) : undefined) ?? null,
              from: m.status,
              to: 'archived',
              reason: 'account_deleted',
              templateKey: null,
            },
            { actorId: null },
          );
        }
      }
    }

    // Personal data.
    const exports = await tx.execute<{ key: string | null }>(
      sql`DELETE FROM "DataExport" WHERE "userId" = ${userId} RETURNING "key"`,
    );
    for (const row of exports.rows) if (row.key) exportKeys.push(row.key);
    await tx.execute(sql`DELETE FROM "Session" WHERE "userId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "AuthToken" WHERE "userId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "AuthEvent" WHERE "userId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "Notification" WHERE "userId" = ${userId}`);
    await tx.execute(sql`UPDATE "Notification" SET "actorId" = NULL WHERE "actorId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "NotificationPreference" WHERE "userId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "UserFollow" WHERE "followerId" = ${userId} OR "followeeId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "ModFavorite" WHERE "userId" = ${userId}`);
    await tx.execute(sql`DELETE FROM "Kit" WHERE "ownerId" = ${userId}`);
    await tx.execute(sql`UPDATE "ModDownload" SET "userId" = NULL WHERE "userId" = ${userId}`);
    await tx.execute(
      sql`UPDATE "EmailOutbox" SET "status" = 'suppressed', "error" = 'account deleted' WHERE "userId" = ${userId} AND "status" IN ('queued', 'retry')`,
    );
    await tx.execute(
      sql`UPDATE "EmailOutbox" SET "toEmail" = 'deleted@deleted.invalid', "payload" = '{}'::jsonb WHERE "userId" = ${userId}`,
    );

    if (due.mode === 'keep_mods_anonymous' && mods.length > 0) {
      await tx.execute(
        sql`INSERT INTO "UserSlugHistory" ("slug", "userId") VALUES (${target.slug}, ${userId}) ON CONFLICT DO NOTHING`,
      );
    } else {
      await tx.execute(sql`DELETE FROM "UserSlugHistory" WHERE "userId" = ${userId}`);
    }

    // The account row itself (legacy table, normal application flow).
    await tx
      .update(user)
      .set({
        email: `deleted-${userId}@deleted.invalid`,
        password: '!deleted',
        name: DELETED_DISPLAY_NAME,
        slug: `deleted-${userId}`,
        imageUrl: '',
        isTrusted: false,
        displayName: null,
        bioMd: null,
        links: [],
        avatarMediaId: null,
        bannerMediaId: null,
        bannerSeed: null,
        settings: {},
        privacy: {},
        onboarding: {},
        pinnedModIds: [],
        role: 'user',
        verifiedCreator: false,
        emailVerifiedAt: null,
        lastLoginAt: null,
        lastSeenAt: null,
        trustLevel: 0,
        deletedAt: now,
      })
      .where(eq(user.id, userId));
    await tx.update(accountDeletion).set({ executedAt: now }).where(eq(accountDeletion.userId, userId));
    return true;
  });
  for (const key of exportKeys) {
    await deps.storage?.delete(key).catch((error: unknown) => {
      deps.log.warn({ userId, err: error }, 'could not delete an export object of a deleted account');
    });
  }
  if (done) deps.log.info({ userId }, 'account anonymized after the grace period');
  return done;
}

/** Daily sweep: every due deletion (or only `userId`). Returns the anonymized user ids. */
export async function executeDueDeletions(deps: DeletionJobDeps, userId?: number): Promise<number[]> {
  const now = deps.clock.now();
  const conditions = [
    isNull(accountDeletion.cancelledAt),
    isNull(accountDeletion.executedAt),
    lte(accountDeletion.executeAfter, now),
  ];
  if (userId !== undefined) conditions.push(eq(accountDeletion.userId, userId));
  const due = await deps.db
    .select({ userId: accountDeletion.userId })
    .from(accountDeletion)
    .where(and(...conditions))
    .limit(500);
  const executed: number[] = [];
  for (const row of due) {
    if (await executeDeletion(deps, row.userId)) executed.push(row.userId);
  }
  return executed;
}
