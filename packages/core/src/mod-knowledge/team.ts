/**
 * Co-authors (T1-12). The owner (or an admin) invites a user by handle; the invitee accepts
 * (`accepted`) or declines (the row is deleted). An accepted co-author releases and edits
 * versions and maintains the known issues and FAQ (`loadManagedMod`); the listing, the status and
 * the team stay with the owner. A co-author may leave at any time; pending invitations expire
 * after `INVITE_TTL_DAYS` (`cleanup.coauthor-invites`).
 */
import type { UserRefDTO } from '@sotf/contracts/common';
import {
  type CoAuthoredModDTO,
  type CoAuthorInviteDTO,
  KNOWLEDGE_LIMITS,
  type ModTeamDTO,
} from '@sotf/contracts/mod-knowledge';
import { type Database, mod, modCoAuthor, user } from '@sotf/db';
import { and, asc, desc, eq, inArray, lt, sql } from 'drizzle-orm';
import { loadUserRefs } from '../catalog/snapshot.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { createNotifications } from '../notifications/service.ts';
import { actorOf, assertWriter, loadManagedMod, loadOwnedMod } from '../publishing/queries.ts';
import { announceModChange, evictModCaches, type KnowledgeDeps, modRefsOf } from './common.ts';

export const INVITE_TTL_DAYS = 30;

async function ownerRow(ctx: Ctx, modId: number) {
  const [row] = await ctx.db.select({ id: mod.id, userId: mod.userId }).from(mod).where(eq(mod.id, modId)).limit(1);
  return row;
}

/** `GET /studio/mods/:id/team`. */
export async function getTeam(ctx: Ctx, deps: KnowledgeDeps, modId: number): Promise<ModTeamDTO> {
  const actor = actorOf(ctx);
  const current = await loadManagedMod(ctx, modId);
  const members = await ctx.db
    .select()
    .from(modCoAuthor)
    .where(eq(modCoAuthor.modId, current.id))
    .orderBy(asc(modCoAuthor.status), asc(modCoAuthor.invitedAt), asc(modCoAuthor.id));
  const ids = [...members.map((m) => m.userId), ...(current.userId === null ? [] : [current.userId])];
  const refs = await loadUserRefs(ctx.db, deps.config, ids);
  const owner: UserRefDTO | undefined = current.userId === null ? undefined : refs.get(current.userId);
  if (!owner) throw errors.notFound('Mod');
  return {
    viewerRole: current.userId === actor.userId ? 'owner' : actor.role === 'admin' ? 'admin' : 'coauthor',
    owner,
    members: members.flatMap((m) => {
      const ref = refs.get(m.userId);
      return ref
        ? [
            {
              user: ref,
              status: m.status,
              invitedAt: m.invitedAt.toISOString(),
              respondedAt: m.respondedAt?.toISOString() ?? null,
            },
          ]
        : [];
    }),
  };
}

/** `POST /studio/mods/:id/team`. */
export async function inviteCoAuthor(
  ctx: Ctx,
  deps: KnowledgeDeps,
  modId: number,
  handle: string,
): Promise<ModTeamDTO> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  const current = await loadOwnedMod(ctx, modId);
  if (current.status === 'removed' || current.status === 'rejected') {
    throw errors.forbidden('This mod cannot have a team');
  }
  const [invitee] = await ctx.db
    .select({ id: user.id, deletedAt: user.deletedAt, bannedAt: user.bannedAt })
    .from(user)
    .where(eq(sql`lower(${user.slug})`, handle.toLowerCase()))
    .limit(1);
  if (!invitee || invitee.deletedAt || invitee.bannedAt) throw errors.notFound('User');
  if (invitee.id === current.userId) {
    throw errors.validation('The owner is already an author', [
      { path: 'handle', code: 'owner', message: 'This user owns the mod' },
    ]);
  }
  const now = ctx.clock.now();
  const inserted = await ctx.db.transaction(async (tx) => {
    await tx.execute(sql`SELECT 1 FROM "Mod" WHERE "id" = ${current.id} FOR UPDATE`);
    const rows = await tx.select().from(modCoAuthor).where(eq(modCoAuthor.modId, current.id));
    if (rows.some((r) => r.userId === invitee.id)) throw errors.conflict('This user is already invited');
    if (rows.length >= KNOWLEDGE_LIMITS.coAuthorsMax) throw errors.conflict('The team is full');
    if (rows.filter((r) => r.status === 'pending').length >= KNOWLEDGE_LIMITS.invitePendingMax) {
      throw errors.conflict('Too many pending invitations');
    }
    const [row] = await tx
      .insert(modCoAuthor)
      .values({ modId: current.id, userId: invitee.id, invitedById: actor.userId, status: 'pending', invitedAt: now })
      .returning({ id: modCoAuthor.id });
    if (!row) throw errors.conflict('Could not invite');
    return row;
  });
  const [inviterMod] = await ctx.db.select({ name: mod.name, slug: mod.slug }).from(mod).where(eq(mod.id, current.id));
  await createNotifications(
    { db: ctx.db, jobs: ctx.jobs, clock: ctx.clock, log: ctx.log },
    [
      {
        userId: invitee.id,
        type: 'coauthor.invited',
        actorId: actor.userId,
        target: {
          type: 'mod',
          id: current.id,
          title: inviterMod?.name ?? current.name,
          path: '/basecamp/invites',
        },
        groupKey: null,
        data: { modId: current.id, modName: inviterMod?.name ?? current.name },
        dedupeKey: `coauthor.invited:${inserted.id}`,
      },
    ],
    `coauthor-invite:${inserted.id}`,
  );
  ctx.log.info({ modId: current.id, inviteeId: invitee.id }, 'co-author invited');
  return getTeam(ctx, deps, current.id);
}

/** `DELETE /studio/mods/:id/team/:userId`: the owner removes anyone, a co-author removes themselves. */
export async function removeTeamMember(ctx: Ctx, modId: number, userId: number): Promise<void> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  const current = await loadManagedMod(ctx, modId);
  const isOwner = current.userId === actor.userId || actor.role === 'admin';
  if (!isOwner && userId !== actor.userId) throw errors.forbidden('Only the owner can remove co-authors');
  await ctx.db.transaction(async (tx) => {
    const removed = await tx
      .delete(modCoAuthor)
      .where(and(eq(modCoAuthor.modId, current.id), eq(modCoAuthor.userId, userId)))
      .returning({ id: modCoAuthor.id });
    if (removed.length === 0) throw errors.notFound('Team member');
    await announceModChange(ctx, tx, current, 'coAuthors', userId);
  });
  evictModCaches(ctx, current);
}

type InviteRow = {
  id: number;
  modId: number;
  invitedById: number | null;
  invitedAt: Date;
};

async function pendingInviteOf(ctx: Ctx, inviteId: number): Promise<InviteRow> {
  const actor = actorOf(ctx);
  const [row] = await ctx.db
    .select({
      id: modCoAuthor.id,
      modId: modCoAuthor.modId,
      invitedById: modCoAuthor.invitedById,
      invitedAt: modCoAuthor.invitedAt,
    })
    .from(modCoAuthor)
    .where(and(eq(modCoAuthor.id, inviteId), eq(modCoAuthor.userId, actor.userId), eq(modCoAuthor.status, 'pending')))
    .limit(1);
  if (!row) throw errors.notFound('Invitation');
  return row;
}

async function modRowsFor(db: Database, modIds: readonly number[]) {
  if (modIds.length === 0) return [];
  return db
    .select({
      id: mod.id,
      type: mod.type,
      manifestId: mod.manifestId,
      name: mod.name,
      slug: mod.slug,
      status: mod.status,
      nsfw: mod.isNSFW,
      handle: user.slug,
      latestVersion: sql<
        string | null
      >`(SELECT v."version" FROM "ModVersion" v WHERE v."modId" = ${mod.id} AND v."status" = 'active' ORDER BY v."isLatest" DESC, v."id" DESC LIMIT 1)`,
    })
    .from(mod)
    .innerJoin(user, eq(user.id, mod.userId))
    .where(inArray(mod.id, [...modIds]));
}

/** `GET /me/coauthor-invites`. */
export async function listMyInvites(ctx: Ctx, deps: KnowledgeDeps): Promise<CoAuthorInviteDTO[]> {
  const actor = actorOf(ctx);
  const rows = await ctx.db
    .select()
    .from(modCoAuthor)
    .where(and(eq(modCoAuthor.userId, actor.userId), eq(modCoAuthor.status, 'pending')))
    .orderBy(desc(modCoAuthor.invitedAt), desc(modCoAuthor.id));
  const mods = await modRowsFor(
    ctx.db,
    rows.map((r) => r.modId),
  );
  const refs = await modRefsOf(
    ctx,
    deps,
    mods.filter((m) => m.status !== 'removed'),
  );
  const inviters = await loadUserRefs(
    ctx.db,
    deps.config,
    rows.flatMap((r) => (r.invitedById === null ? [] : [r.invitedById])),
  );
  return rows.flatMap((r) => {
    const modRef = refs.get(r.modId);
    if (!modRef) return [];
    return [
      {
        id: r.id,
        mod: modRef,
        invitedBy: r.invitedById === null ? null : (inviters.get(r.invitedById) ?? null),
        invitedAt: r.invitedAt.toISOString(),
      },
    ];
  });
}

/** `POST /me/coauthor-invites/:id/accept`. */
export async function acceptInvite(ctx: Ctx, deps: KnowledgeDeps, inviteId: number): Promise<CoAuthoredModDTO> {
  assertWriter(ctx);
  const invite = await pendingInviteOf(ctx, inviteId);
  const owner = await ownerRow(ctx, invite.modId);
  const [modRow] = await ctx.db.select().from(mod).where(eq(mod.id, invite.modId)).limit(1);
  if (!owner || !modRow || modRow.status === 'removed') throw errors.notFound('Invitation');
  const now = ctx.clock.now();
  await ctx.db.transaction(async (tx) => {
    const accepted = await tx
      .update(modCoAuthor)
      .set({ status: 'accepted', respondedAt: now })
      .where(and(eq(modCoAuthor.id, invite.id), eq(modCoAuthor.status, 'pending')))
      .returning({ id: modCoAuthor.id });
    if (accepted.length === 0) throw errors.conflict('This invitation was already answered');
    await announceModChange(ctx, tx, modRow, 'coAuthors', ctx.actor?.userId ?? null);
  });
  evictModCaches(ctx, modRow);
  const [row] = await modRowsFor(ctx.db, [invite.modId]);
  if (!row) throw errors.notFound('Mod');
  const refs = await modRefsOf(ctx, deps, [row]);
  const ref = refs.get(row.id);
  if (!ref) throw errors.notFound('Mod');
  return { mod: ref, latestVersion: row.latestVersion, acceptedAt: now.toISOString() };
}

/** `POST /me/coauthor-invites/:id/decline`. */
export async function declineInvite(ctx: Ctx, inviteId: number): Promise<void> {
  const invite = await pendingInviteOf(ctx, inviteId);
  await ctx.db.delete(modCoAuthor).where(and(eq(modCoAuthor.id, invite.id), eq(modCoAuthor.status, 'pending')));
}

async function coAuthoredBy(
  ctx: Ctx,
  deps: KnowledgeDeps,
  userId: number,
  statuses: readonly string[],
): Promise<CoAuthoredModDTO[]> {
  const links = await ctx.db
    .select()
    .from(modCoAuthor)
    .where(and(eq(modCoAuthor.userId, userId), eq(modCoAuthor.status, 'accepted')))
    .orderBy(desc(modCoAuthor.respondedAt), desc(modCoAuthor.id));
  const mods = (
    await modRowsFor(
      ctx.db,
      links.map((l) => l.modId),
    )
  ).filter((m) => statuses.includes(m.status));
  const refs = await modRefsOf(ctx, deps, mods);
  const byId = new Map(mods.map((m) => [m.id, m]));
  return links.flatMap((l) => {
    const ref = refs.get(l.modId);
    const row = byId.get(l.modId);
    if (!ref || !row) return [];
    return [{ mod: ref, latestVersion: row.latestVersion, acceptedAt: (l.respondedAt ?? l.invitedAt).toISOString() }];
  });
}

/** `GET /me/coauthored-mods` (every status but removed). */
export async function listMyCoAuthored(ctx: Ctx, deps: KnowledgeDeps): Promise<CoAuthoredModDTO[]> {
  return coAuthoredBy(ctx, deps, actorOf(ctx).userId, ['pending', 'published', 'unlisted', 'rejected', 'archived']);
}

/** `GET /users/:handle/coauthored`: published mods only. Returns the user id for cache tags. */
export async function listUserCoAuthored(
  ctx: Ctx,
  deps: KnowledgeDeps,
  handle: string,
): Promise<{ userId: number; items: CoAuthoredModDTO[] }> {
  const [row] = await ctx.db
    .select({ id: user.id, deletedAt: user.deletedAt, bannedAt: user.bannedAt })
    .from(user)
    .where(eq(sql`lower(${user.slug})`, handle.toLowerCase()))
    .limit(1);
  if (!row || row.deletedAt || row.bannedAt) throw errors.notFound('User');
  return { userId: row.id, items: await coAuthoredBy(ctx, deps, row.id, ['published']) };
}

/** Pending invitations older than `INVITE_TTL_DAYS` (daily job). */
export async function cleanupStaleInvites(db: Database, now: Date): Promise<number> {
  const cutoff = new Date(now.getTime() - INVITE_TTL_DAYS * 86_400_000);
  const removed = await db
    .delete(modCoAuthor)
    .where(and(eq(modCoAuthor.status, 'pending'), lt(modCoAuthor.invitedAt, cutoff)))
    .returning({ id: modCoAuthor.id });
  return removed.length;
}
