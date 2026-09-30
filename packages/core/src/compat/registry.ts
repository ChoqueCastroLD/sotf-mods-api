/**
 * Game-build registry (PLAN §7.10 "Registro", §5.2): game builds (exactly one `isCurrent`),
 * RedLoader / RedManager releases and the ecosystem matrix (loader × build status).
 *
 * - Public reads: `GET /game-builds`, `GET /ecosystem`.
 * - Admin writes (👑, session < 12 h, `AuditLog` row in the same transaction). Every write that
 *   changes which build is current or breaking recomputes `Mod.compatStatus` /
 *   `Mod.possiblyOutdated` of every mod in the same transaction, so listings, the "works on the
 *   current build" filter and the banners never disagree with the registry.
 * - A new `isBreaking` build (created as breaking, or flipped to breaking later) emits
 *   `game_build.created`: `patch.breaking_build` signals to creators (deduplicated per build), the
 *   global banner and the Patch Day Hero badge window. Other writes purge the `compat` tag.
 */
import type {
  CreateGameBuildBody,
  CreateLoaderReleaseBody,
  PutEcosystemBody,
  UpdateGameBuildBody,
} from '@sotf/contracts/admin';
import type { EcosystemDTO, GameBuildDTO, GameBuildListDTO } from '@sotf/contracts/compat';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { query, queryOne, sqlState } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { modTags, refreshModsCompat } from './aggregate.ts';
import {
  assertRegistryAdmin,
  audit,
  type EcosystemEntryDTO,
  GAME_BUILD_COLUMNS,
  type GameBuildRow,
  gameBuildDto,
  type LoaderReleaseDTO,
  type LoaderReleaseRow,
  loadEcosystem,
  loaderReleaseDto,
  loadGameBuilds,
} from './shared.ts';

type CreateGameBuildInput = z.output<typeof CreateGameBuildBody>;
type UpdateGameBuildInput = z.output<typeof UpdateGameBuildBody>;
type CreateLoaderReleaseInput = z.output<typeof CreateLoaderReleaseBody>;
type PutEcosystemInput = z.output<typeof PutEcosystemBody>;
type GameBuildList = z.infer<typeof GameBuildListDTO>;
type Ecosystem = z.infer<typeof EcosystemDTO>;

const UNIQUE_VIOLATION = '23505';

// -----------------------------------------------------------------------------------------------
// Public reads
// -----------------------------------------------------------------------------------------------

/** `GET /game-builds` (and the admin list): every build, newest first. */
export async function listGameBuilds(ctx: Ctx): Promise<GameBuildList> {
  return { items: (await loadGameBuilds(ctx.db)).map(gameBuildDto) };
}

/** The current build, or null when none is flagged. */
export async function currentGameBuild(db: Executor): Promise<GameBuildRow | null> {
  return queryOne<GameBuildRow>(
    db,
    sql`SELECT ${GAME_BUILD_COLUMNS} FROM "GameBuild" g WHERE g."isCurrent" ORDER BY g."id" DESC LIMIT 1`,
  );
}

/** `GET /ecosystem`: current build and the loader/manager status on every build. */
export async function getEcosystem(ctx: Ctx): Promise<Ecosystem> {
  const [current, entries] = await Promise.all([currentGameBuild(ctx.db), loadEcosystem(ctx.db)]);
  return { currentBuild: current ? gameBuildDto(current) : null, entries };
}

// -----------------------------------------------------------------------------------------------
// Game builds (admin)
// -----------------------------------------------------------------------------------------------

async function loadBuildForUpdate(tx: Executor, id: number): Promise<GameBuildRow | null> {
  return queryOne<GameBuildRow>(
    tx,
    sql`SELECT ${GAME_BUILD_COLUMNS} FROM "GameBuild" g WHERE g."id" = ${id} FOR UPDATE`,
  );
}

/** Serialises registry writes (the single-current invariant and the mod refresh). */
async function lockRegistry(tx: Executor): Promise<void> {
  await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtextextended('GameBuild:registry', 0))`);
}

function auditShape(r: GameBuildRow) {
  return {
    label: r.label,
    steamBuildId: r.steamBuildId,
    releasedAt: r.releasedAt,
    isBreaking: r.isBreaking,
    isCurrent: r.isCurrent,
  };
}

/** Recomputes every mod's status after a registry change and purges what shows it. */
async function afterRegistryChange(ctx: Ctx, tx: Executor, reason: string): Promise<void> {
  const changed = await refreshModsCompat(tx, ctx.clock.now(), 'all');
  await purge(ctx.jobs, changed.length > 0 ? modTags(changed) : ['compat', 'home'], reason, { tx });
}

/** `POST /admin/game-builds`. */
export async function createGameBuild(ctx: Ctx, input: CreateGameBuildInput): Promise<GameBuildDTO> {
  const actor = await assertRegistryAdmin(ctx);
  try {
    return await withTx(ctx.db, async (tx) => {
      await lockRegistry(tx);
      if (input.isCurrent) await tx.execute(sql`UPDATE "GameBuild" SET "isCurrent" = false WHERE "isCurrent"`);
      const created = await queryOne<GameBuildRow>(
        tx,
        sql`INSERT INTO "GameBuild" AS g ("label", "steamBuildId", "releasedAt", "isBreaking", "isCurrent", "notesMd", "createdById")
            VALUES (${input.label}, ${input.steamBuildId ?? null}, ${input.releasedAt}::date, ${input.isBreaking},
                    ${input.isCurrent}, ${input.notesMd?.trim() || null}, ${actor.userId})
            RETURNING ${GAME_BUILD_COLUMNS}`,
      );
      if (!created) throw new Error('GameBuild insert returned no row');
      await audit(tx, ctx, {
        action: 'game_build.create',
        targetType: 'game_build',
        targetId: created.id,
        after: auditShape(created),
      });
      await ctx.jobs.emitNew(
        tx,
        'game_build.created',
        { gameBuildId: created.id, label: created.label, isBreaking: created.isBreaking, isCurrent: created.isCurrent },
        { actorId: actor.userId },
      );
      await afterRegistryChange(ctx, tx, 'game build created');
      return gameBuildDto(created);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('A game build with this label already exists');
    throw error;
  }
}

/** `PATCH /admin/game-builds/:id`. */
export async function updateGameBuild(ctx: Ctx, id: number, input: UpdateGameBuildInput): Promise<GameBuildDTO> {
  const actor = await assertRegistryAdmin(ctx);
  try {
    return await withTx(ctx.db, async (tx) => {
      await lockRegistry(tx);
      const before = await loadBuildForUpdate(tx, id);
      if (!before) throw errors.notFound('Game build');
      if (input.isCurrent === true && !before.isCurrent) {
        await tx.execute(sql`UPDATE "GameBuild" SET "isCurrent" = false WHERE "isCurrent" AND "id" <> ${id}`);
      }
      const notes = input.notesMd === undefined ? before.notesMd : input.notesMd?.trim() || null;
      const after = await queryOne<GameBuildRow>(
        tx,
        sql`UPDATE "GameBuild" AS g SET
              "label" = ${input.label ?? before.label},
              "steamBuildId" = ${input.steamBuildId === undefined ? before.steamBuildId : input.steamBuildId},
              "releasedAt" = ${input.releasedAt ?? before.releasedAt}::date,
              "isBreaking" = ${input.isBreaking ?? before.isBreaking},
              "isCurrent" = ${input.isCurrent ?? before.isCurrent},
              "notesMd" = ${notes}
            WHERE g."id" = ${id}
            RETURNING ${GAME_BUILD_COLUMNS}`,
      );
      if (!after) throw errors.notFound('Game build');
      await audit(tx, ctx, {
        action: 'game_build.update',
        targetType: 'game_build',
        targetId: id,
        before: auditShape(before),
        after: auditShape(after),
      });
      if (after.isBreaking && !before.isBreaking) {
        // Announced like a new breaking build (signals are deduplicated per build id).
        await ctx.jobs.emitNew(
          tx,
          'game_build.created',
          { gameBuildId: after.id, label: after.label, isBreaking: true, isCurrent: after.isCurrent },
          { actorId: actor.userId },
        );
      }
      await afterRegistryChange(ctx, tx, 'game build updated');
      return gameBuildDto(after);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('A game build with this label already exists');
    throw error;
  }
}

/** `DELETE /admin/game-builds/:id`: only builds without field reports (history is never erased). */
export async function deleteGameBuild(ctx: Ctx, id: number): Promise<void> {
  await assertRegistryAdmin(ctx);
  await withTx(ctx.db, async (tx) => {
    await lockRegistry(tx);
    const before = await loadBuildForUpdate(tx, id);
    if (!before) throw errors.notFound('Game build');
    const reports = await queryOne<{ n: number }>(
      tx,
      sql`SELECT count(*)::int AS n FROM "CompatReport" WHERE "gameBuildId" = ${id}`,
    );
    if ((reports?.n ?? 0) > 0) throw errors.conflict('This game build has field reports and cannot be deleted');
    await tx.execute(sql`DELETE FROM "GameBuild" WHERE "id" = ${id}`);
    await audit(tx, ctx, {
      action: 'game_build.delete',
      targetType: 'game_build',
      targetId: id,
      before: auditShape(before),
    });
    await afterRegistryChange(ctx, tx, 'game build deleted');
  });
}

// -----------------------------------------------------------------------------------------------
// Loader releases and ecosystem (admin)
// -----------------------------------------------------------------------------------------------

const LOADER_COLUMNS = sql.raw(`"id", "name", "version", "releasedAt"::text AS "releasedAt", "url"`);

/** `GET /admin/loader-releases`: newest first per loader. */
export async function listLoaderReleases(ctx: Ctx): Promise<{ items: LoaderReleaseDTO[] }> {
  await assertRegistryAdmin(ctx);
  const list = await query<LoaderReleaseRow>(
    ctx.db,
    sql`SELECT ${LOADER_COLUMNS} FROM "LoaderRelease" ORDER BY "name", "releasedAt" DESC NULLS LAST, "id" DESC`,
  );
  return { items: list.map(loaderReleaseDto) };
}

/** `POST /admin/loader-releases`. */
export async function createLoaderRelease(ctx: Ctx, input: CreateLoaderReleaseInput): Promise<LoaderReleaseDTO> {
  await assertRegistryAdmin(ctx);
  try {
    return await withTx(ctx.db, async (tx) => {
      const created = await queryOne<LoaderReleaseRow>(
        tx,
        sql`INSERT INTO "LoaderRelease" ("name", "version", "releasedAt", "url")
            VALUES (${input.name}, ${input.version}, ${input.releasedAt ?? null}::date, ${input.url ?? null})
            RETURNING ${LOADER_COLUMNS}`,
      );
      if (!created) throw new Error('LoaderRelease insert returned no row');
      await audit(tx, ctx, {
        action: 'loader_release.create',
        targetType: 'loader_release',
        targetId: created.id,
        after: { name: created.name, version: created.version, releasedAt: created.releasedAt, url: created.url },
      });
      await purge(ctx.jobs, ['compat'], 'loader release created', { tx });
      return loaderReleaseDto(created);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('This release is already registered');
    throw error;
  }
}

/** `PUT /admin/ecosystem`: sets (upserts) the status of a loader release on a game build. */
export async function putEcosystem(ctx: Ctx, input: PutEcosystemInput): Promise<EcosystemEntryDTO> {
  const actor = await assertRegistryAdmin(ctx);
  return withTx(ctx.db, async (tx) => {
    const [build, loader] = await Promise.all([
      queryOne<{ id: number }>(tx, sql`SELECT "id" FROM "GameBuild" WHERE "id" = ${input.gameBuildId}`),
      queryOne<{ id: number }>(tx, sql`SELECT "id" FROM "LoaderRelease" WHERE "id" = ${input.loaderReleaseId}`),
    ]);
    if (!build) throw errors.notFound('Game build');
    if (!loader) throw errors.notFound('Loader release');
    const before = await queryOne<{ status: string; noteMd: string | null }>(
      tx,
      sql`SELECT "status", "noteMd" FROM "EcosystemStatus"
           WHERE "gameBuildId" = ${input.gameBuildId} AND "loaderReleaseId" = ${input.loaderReleaseId} FOR UPDATE`,
    );
    const note = input.noteMd === undefined ? (before?.noteMd ?? null) : input.noteMd?.trim() || null;
    await tx.execute(
      sql`INSERT INTO "EcosystemStatus" ("gameBuildId", "loaderReleaseId", "status", "noteMd", "updatedById", "updatedAt")
          VALUES (${input.gameBuildId}, ${input.loaderReleaseId}, ${input.status}, ${note}, ${actor.userId}, now())
          ON CONFLICT ("gameBuildId", "loaderReleaseId") DO UPDATE SET
            "status" = EXCLUDED."status", "noteMd" = EXCLUDED."noteMd",
            "updatedById" = EXCLUDED."updatedById", "updatedAt" = EXCLUDED."updatedAt"`,
    );
    await audit(tx, ctx, {
      action: 'ecosystem.put',
      targetType: 'game_build',
      targetId: input.gameBuildId,
      before: before ? { loaderReleaseId: input.loaderReleaseId, status: before.status } : null,
      after: { loaderReleaseId: input.loaderReleaseId, status: input.status },
    });
    await purge(ctx.jobs, ['compat', 'home'], 'ecosystem status changed', { tx });
    const entry = (await loadEcosystem(tx, input.gameBuildId)).find((e) => e.loader.id === input.loaderReleaseId);
    if (!entry) throw errors.notFound('Ecosystem entry');
    return entry;
  });
}
