/**
 * Follows (PLAN §5.2 "Comunidad", §6.8 "Favoritos → Backpack", T0-16).
 *
 * - **Following a mod** reuses the legacy `ModFavorite` table (+ the v2 `notify` column). The legacy
 *   table may still hold duplicate `(userId, modId)` rows until backfill B5 archives them and the
 *   unique index `ModFavorite_userId_modId_key` is built, so uniqueness never relies on that index:
 *   every write takes a transaction-scoped advisory lock on `(userId, modId)` first, then checks
 *   for an existing row. `Mod.favoritesCount` (and `ModStats.followers` when the row exists) move
 *   by exactly the number of rows inserted/deleted, in the same transaction, without touching
 *   `Mod.updatedAt`; `legacy.counters` reconciles any legacy drift.
 * - **Following a creator** uses `UserFollow` (primary key `(followerId, followeeId)`, no self
 *   follows); `UserStats.followersCount`/`followingCount` move in the same transaction.
 * - Each new follow / unfollow emits `follow.*` inside the transaction (notifications, gamification).
 *   Changing only `notify` emits nothing.
 * - The backpack lists followed mods with the last version the user downloaded, `hasUpdate`
 *   (a newer latest version released after that download) and the current-build compatibility of
 *   the latest version.
 */
import type {
  BackpackItemDTO as BackpackItemSchema,
  BackpackDTO as BackpackSchema,
  FollowLookupDTO as FollowLookupSchema,
  FollowStateDTO as FollowStateSchema,
} from '@sotf/contracts/follows';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { compatOf, getSnapshot } from '../catalog/snapshot.ts';
import { dependencyState } from '../catalog/versions.ts';
import type { Actor, Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { at, intArray, query, queryOne, toDate, toInt } from './sql.ts';

export type FollowStateDTO = z.infer<typeof FollowStateSchema>;
export type BackpackDTO = z.infer<typeof BackpackSchema>;
export type BackpackItemDTO = z.infer<typeof BackpackItemSchema>;
export type FollowLookupDTO = z.infer<typeof FollowLookupSchema>;

function actorOf(ctx: Ctx): Actor {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor;
}

// -----------------------------------------------------------------------------------------------
// Targets
// -----------------------------------------------------------------------------------------------

interface ModTarget {
  id: number;
  status: string;
  authorHidden: boolean;
  latestChecks: string | null;
}

async function loadModTarget(db: Executor, modId: number): Promise<ModTarget | null> {
  return queryOne<ModTarget>(
    db,
    sql`SELECT m."id", m."status",
               (u."id" IS NULL OR u."deletedAt" IS NOT NULL OR u."bannedAt" IS NOT NULL) AS "authorHidden",
               (SELECT v."checksStatus" FROM "ModVersion" v
                 WHERE v."modId" = m."id" AND v."isLatest" AND v."status" <> 'rejected'
                 ORDER BY v."id" DESC LIMIT 1) AS "latestChecks"
          FROM "Mod" m LEFT JOIN "User" u ON u."id" = m."userId"
         WHERE m."id" = ${modId}`,
  );
}

/**
 * Mods that can be followed are the ones reachable by URL (T0-03): published, unlisted, archived,
 * and pending only once its checks passed; never with a hidden (deleted/banned) author.
 */
export function isFollowableMod(target: ModTarget): boolean {
  if (target.authorHidden) return false;
  switch (target.status) {
    case 'published':
    case 'unlisted':
    case 'archived':
      return true;
    case 'pending':
      return target.latestChecks === 'passed';
    default:
      return false;
  }
}

interface UserTarget {
  id: number;
  slug: string;
  hidden: boolean;
}

async function loadUserTarget(db: Executor, handle: string): Promise<UserTarget | null> {
  return queryOne<UserTarget>(
    db,
    sql`SELECT "id", "slug", ("deletedAt" IS NOT NULL OR "bannedAt" IS NOT NULL) AS "hidden"
          FROM "User" WHERE lower("slug") = lower(${handle})
         ORDER BY ("slug" = ${handle}) DESC, "id" LIMIT 1`,
  );
}

/** Advisory lock key of a `(userId, modId)` follow (serialises concurrent follows of one pair). */
function modFollowLock(userId: number, modId: number) {
  return sql`SELECT pg_advisory_xact_lock(hashtextextended(${`ModFavorite:${userId}:${modId}`}, 0))`;
}

// -----------------------------------------------------------------------------------------------
// Mods
// -----------------------------------------------------------------------------------------------

/** `PUT /mods/:id/follow`: follows a mod (idempotent; a second call only updates `notify`). */
export async function followMod(ctx: Ctx, modId: number, notify: boolean): Promise<FollowStateDTO> {
  const actor = actorOf(ctx);
  const target = await loadModTarget(ctx.db, modId);
  if (!target || !isFollowableMod(target)) throw errors.notFound('Mod');
  const now = ctx.clock.now();
  return withTx(ctx.db, async (tx) => {
    await tx.execute(modFollowLock(actor.userId, modId));
    const existing = await query<{ id: number; notify: boolean }>(
      tx,
      sql`SELECT "id", "notify" FROM "ModFavorite" WHERE "userId" = ${actor.userId} AND "modId" = ${modId} ORDER BY "id"`,
    );
    if (existing.length > 0) {
      if (existing.some((row) => row.notify !== notify)) {
        await tx.execute(
          sql`UPDATE "ModFavorite" SET "notify" = ${notify}, "updatedAt" = ${at(now)}
               WHERE "userId" = ${actor.userId} AND "modId" = ${modId}`,
        );
      }
    } else {
      const inserted = await query<{ id: number }>(
        tx,
        sql`INSERT INTO "ModFavorite" ("userId", "modId", "notify", "createdAt", "updatedAt")
            VALUES (${actor.userId}, ${modId}, ${notify}, ${at(now)}, ${at(now)})
            ON CONFLICT DO NOTHING RETURNING "id"`,
      );
      if (inserted.length > 0) {
        await adjustModFollowers(tx, modId, inserted.length);
        await ctx.jobs.emitNew(
          tx,
          'follow.mod_created',
          { modId, userId: actor.userId, notify },
          { actorId: actor.userId },
        );
      }
    }
    return { following: true, notify, followers: await modFollowers(tx, modId) };
  });
}

/** `DELETE /mods/:id/follow`: unfollows a mod (idempotent). Removed mods can still be unfollowed. */
export async function unfollowMod(ctx: Ctx, modId: number): Promise<FollowStateDTO> {
  const actor = actorOf(ctx);
  const exists = await queryOne<{ id: number }>(ctx.db, sql`SELECT "id" FROM "Mod" WHERE "id" = ${modId}`);
  if (!exists) throw errors.notFound('Mod');
  return withTx(ctx.db, async (tx) => {
    await tx.execute(modFollowLock(actor.userId, modId));
    // The row is archived, not lost: follows that predate the migration are counted by the
    // invariant "favorites preserved" (ModFavorite + ModFavoriteArchive, PLAN §14.5).
    const deleted = await query<{ id: number }>(
      tx,
      sql`WITH gone AS (
            DELETE FROM "ModFavorite" WHERE "userId" = ${actor.userId} AND "modId" = ${modId}
            RETURNING "id", "createdAt", "updatedAt", "userId", "modId", "notify"
          ), archived AS (
            INSERT INTO "ModFavoriteArchive" ("id", "createdAt", "updatedAt", "userId", "modId", "notify", "reason")
            SELECT "id", "createdAt", "updatedAt", "userId", "modId", "notify", 'unfollow' FROM gone
            ON CONFLICT ("id") DO NOTHING
          )
          SELECT "id" FROM gone`,
    );
    if (deleted.length > 0) {
      await adjustModFollowers(tx, modId, -deleted.length);
      await ctx.jobs.emitNew(tx, 'follow.mod_deleted', { modId, userId: actor.userId }, { actorId: actor.userId });
    }
    return { following: false, notify: false, followers: await modFollowers(tx, modId) };
  });
}

/** ±n on `Mod.favoritesCount` (never below 0, `updatedAt` untouched) and on `ModStats.followers`. */
async function adjustModFollowers(tx: Executor, modId: number, delta: number) {
  await tx.execute(
    sql`UPDATE "Mod" SET "favoritesCount" = GREATEST("favoritesCount" + ${delta}, 0) WHERE "id" = ${modId}`,
  );
  await tx.execute(
    sql`UPDATE "ModStats" SET "followers" = GREATEST("followers" + ${delta}, 0) WHERE "modId" = ${modId}`,
  );
}

async function modFollowers(tx: Executor, modId: number): Promise<number> {
  const row = await queryOne<{ n: number }>(tx, sql`SELECT "favoritesCount" AS n FROM "Mod" WHERE "id" = ${modId}`);
  return toInt(row?.n);
}

// -----------------------------------------------------------------------------------------------
// Users
// -----------------------------------------------------------------------------------------------

async function resolveFollowee(ctx: Ctx, handle: string): Promise<UserTarget> {
  const target = await loadUserTarget(ctx.db, handle);
  if (!target || target.hidden) throw errors.notFound('User');
  return target;
}

/** `PUT /users/:handle/follow`: follows a creator (idempotent; never yourself). */
export async function followUser(ctx: Ctx, handle: string, notify: boolean): Promise<FollowStateDTO> {
  const actor = actorOf(ctx);
  const target = await resolveFollowee(ctx, handle);
  if (target.id === actor.userId) throw errors.forbidden('You cannot follow yourself');
  const now = ctx.clock.now();
  return withTx(ctx.db, async (tx) => {
    const [row] = await query<{ inserted: boolean }>(
      tx,
      sql`INSERT INTO "UserFollow" ("followerId", "followeeId", "notify", "createdAt")
          VALUES (${actor.userId}, ${target.id}, ${notify}, ${at(now)})
          ON CONFLICT ("followerId", "followeeId") DO UPDATE SET "notify" = EXCLUDED."notify"
          RETURNING (xmax = 0) AS "inserted"`,
    );
    if (row?.inserted) {
      await adjustUserStats(tx, target.id, actor.userId, 1);
      await ctx.jobs.emitNew(
        tx,
        'follow.user_created',
        { followerId: actor.userId, followeeId: target.id },
        { actorId: actor.userId },
      );
    }
    return { following: true, notify, followers: await userFollowers(tx, target.id) };
  });
}

/** `DELETE /users/:handle/follow`: unfollows a creator (idempotent). */
export async function unfollowUser(ctx: Ctx, handle: string): Promise<FollowStateDTO> {
  const actor = actorOf(ctx);
  const target = await loadUserTarget(ctx.db, handle);
  if (!target) throw errors.notFound('User');
  return withTx(ctx.db, async (tx) => {
    const deleted = await query<{ followeeId: number }>(
      tx,
      sql`DELETE FROM "UserFollow" WHERE "followerId" = ${actor.userId} AND "followeeId" = ${target.id}
          RETURNING "followeeId"`,
    );
    if (deleted.length > 0) {
      await adjustUserStats(tx, target.id, actor.userId, -1);
      await ctx.jobs.emitNew(
        tx,
        'follow.user_deleted',
        { followerId: actor.userId, followeeId: target.id },
        { actorId: actor.userId },
      );
    }
    return { following: false, notify: false, followers: await userFollowers(tx, target.id) };
  });
}

async function adjustUserStats(tx: Executor, followeeId: number, followerId: number, delta: 1 | -1) {
  const initial = Math.max(delta, 0);
  await tx.execute(
    sql`INSERT INTO "UserStats" ("userId", "followersCount") VALUES (${followeeId}, ${initial})
        ON CONFLICT ("userId") DO UPDATE SET "followersCount" = GREATEST("UserStats"."followersCount" + ${delta}, 0)`,
  );
  await tx.execute(
    sql`INSERT INTO "UserStats" ("userId", "followingCount") VALUES (${followerId}, ${initial})
        ON CONFLICT ("userId") DO UPDATE SET "followingCount" = GREATEST("UserStats"."followingCount" + ${delta}, 0)`,
  );
}

async function userFollowers(tx: Executor, userId: number): Promise<number> {
  const row = await queryOne<{ n: string }>(
    tx,
    sql`SELECT count(*) AS n FROM "UserFollow" WHERE "followeeId" = ${userId}`,
  );
  return toInt(row?.n);
}

// -----------------------------------------------------------------------------------------------
// Backpack and lookup
// -----------------------------------------------------------------------------------------------

interface BackpackRow {
  modId: number;
  notify: boolean;
  followedAt: Date | string;
  lastVersion: string | null;
  lastDownloadAt: Date | string | null;
  latestVersion: string | null;
  latestAt: Date | string | null;
  gbId: number | null;
  gbLabel: string | null;
  gbIsCurrent: boolean | null;
  gbIsBreaking: boolean | null;
  computedStatus: string | null;
  works: number | null;
  partial: number | null;
  broken: number | null;
}

/**
 * True when the latest version was released after the user's last download of the mod and is a
 * different version (the same rule as `/me/home`). Never for removed mods or users who never
 * downloaded the mod with a session.
 */
export function hasUpdate(row: {
  lastVersion: string | null;
  lastDownloadAt: Date | null;
  latestVersion: string | null;
  latestAt: Date | null;
  status: string;
}): boolean {
  if (row.status === 'removed') return false;
  if (!row.lastVersion || !row.lastDownloadAt || !row.latestVersion || !row.latestAt) return false;
  return row.latestAt.getTime() > row.lastDownloadAt.getTime() && row.latestVersion !== row.lastVersion;
}

/** `GET /me/follows`: the backpack of the signed-in user, most recently followed first. */
export async function getBackpack(ctx: Ctx, config: CatalogConfig): Promise<BackpackDTO> {
  const actor = actorOf(ctx);
  const [snapshot, list] = await Promise.all([
    getSnapshot(ctx, config),
    query<BackpackRow>(
      ctx.db,
      sql`WITH f AS (
            SELECT "modId", bool_or("notify") AS "notify", min("createdAt") AS "followedAt"
              FROM "ModFavorite" WHERE "userId" = ${actor.userId} AND "modId" IS NOT NULL
             GROUP BY "modId"
          ),
          ld AS (
            SELECT DISTINCT ON (v."modId") v."modId", v."version", d."createdAt"
              FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
             WHERE d."userId" = ${actor.userId} AND v."modId" IN (SELECT "modId" FROM f)
             ORDER BY v."modId", d."createdAt" DESC
          ),
          lv AS (
            SELECT DISTINCT ON (v."modId") v."modId", v."id", v."version", v."createdAt"
              FROM "ModVersion" v
             WHERE v."modId" IN (SELECT "modId" FROM f) AND v."isLatest" AND v."status" <> 'rejected'
             ORDER BY v."modId", v."id" DESC
          ),
          gb AS (
            SELECT "id", "label", "isCurrent", "isBreaking" FROM "GameBuild" WHERE "isCurrent" ORDER BY "id" DESC LIMIT 1
          )
          SELECT f."modId", f."notify", f."followedAt",
                 ld."version" AS "lastVersion", ld."createdAt" AS "lastDownloadAt",
                 lv."version" AS "latestVersion", lv."createdAt" AS "latestAt",
                 gb."id" AS "gbId", gb."label" AS "gbLabel", gb."isCurrent" AS "gbIsCurrent", gb."isBreaking" AS "gbIsBreaking",
                 c."computedStatus", c."works", c."partial", c."broken"
            FROM f
            LEFT JOIN ld ON ld."modId" = f."modId"
            LEFT JOIN lv ON lv."modId" = f."modId"
            LEFT JOIN gb ON true
            LEFT JOIN "ModVersionCompat" c ON c."modVersionId" = lv."id" AND c."gameBuildId" = gb."id"
           ORDER BY f."followedAt" DESC, f."modId" DESC`,
    ),
  ]);

  const items: BackpackItemDTO[] = [];
  for (const r of list) {
    const { entry } = dependencyState(snapshot, snapshot.byId.get(r.modId));
    if (!entry) continue; // rejected, never-checked pending, hidden author or not yet in the snapshot
    const gameBuild =
      r.gbId === null
        ? null
        : {
            id: r.gbId,
            label: r.gbLabel ?? '',
            isCurrent: r.gbIsCurrent === true,
            isBreaking: r.gbIsBreaking === true,
          };
    const hasCompat = r.computedStatus !== null && gameBuild !== null;
    items.push({
      mod: entry.card,
      notify: r.notify,
      followedAt: (toDate(r.followedAt) ?? new Date(0)).toISOString(),
      lastDownloadedVersion: r.lastVersion ? r.lastVersion.slice(0, 64) : null,
      hasUpdate: hasUpdate({
        lastVersion: r.lastVersion,
        lastDownloadAt: toDate(r.lastDownloadAt),
        latestVersion: r.latestVersion,
        latestAt: toDate(r.latestAt),
        status: entry.status,
      }),
      compat: {
        status: hasCompat ? compatOf(r.computedStatus) : 'untested',
        works: hasCompat ? toInt(r.works) : 0,
        partial: hasCompat ? toInt(r.partial) : 0,
        broken: hasCompat ? toInt(r.broken) : 0,
        gameBuild,
      },
    });
  }
  return { items, updatesAvailable: items.filter((i) => i.hasUpdate).length };
}

/** `GET /me/follows/lookup`: which of the given mods/users the signed-in user follows. */
export async function lookupFollows(
  ctx: Ctx,
  modIds: readonly number[],
  userIds: readonly number[],
): Promise<FollowLookupDTO> {
  const actor = actorOf(ctx);
  const [mods, users] = await Promise.all([
    modIds.length === 0
      ? []
      : query<{ id: number }>(
          ctx.db,
          sql`SELECT DISTINCT "modId" AS "id" FROM "ModFavorite"
               WHERE "userId" = ${actor.userId} AND "modId" = ANY(${intArray(modIds)}) ORDER BY 1`,
        ),
    userIds.length === 0
      ? []
      : query<{ id: number }>(
          ctx.db,
          sql`SELECT "followeeId" AS "id" FROM "UserFollow"
               WHERE "followerId" = ${actor.userId} AND "followeeId" = ANY(${intArray(userIds)}) ORDER BY 1`,
        ),
  ]);
  return { mods: mods.map((r) => r.id), users: users.map((r) => r.id) };
}
