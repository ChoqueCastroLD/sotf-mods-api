/**
 * Public compatibility reads (PLAN §7.10, §5.2): a mod's compatibility per version × build
 * (FieldReportMeter), the Patch Radar of a build and the "Did it work?" prompts of the signed-in
 * user.
 *
 * - `GET /mods/:id/compat` follows the catalog's visibility rules (404 / 410) and its cached
 *   version list, so it always agrees with the mod page.
 * - `GET /patch-radar?build=`: the top 50 public mods and libraries by downloads in the last 30
 *   days (`ModStats.downloads30d`, total downloads as tie-break), each with the aggregate of its
 *   latest version on that build, split into works / broken / pending (untested or mixed).
 * - `GET /me/compat-prompts`: versions the user downloaded with the web session since the current
 *   build was released (at most 30 days back) and has not reported on the current build yet; off
 *   when the user disabled `settings.compatPrompts`. Own mods are never prompted.
 */
import type {
  CompatPromptListDTO,
  CompatSummaryDTO,
  ModCompatDTO,
  PatchRadarDTO,
  PatchRadarRowDTO,
} from '@sotf/contracts/compat';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { getVersionsData, reachableMod } from '../catalog/detail.ts';
import { type CatalogEntry, compatOf, getSnapshot, isListable } from '../catalog/snapshot.ts';
import { latestOf } from '../catalog/versions.ts';
import { at, intArray, query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { REPORTABLE_VERSION_SQL } from './aggregate.ts';
import { currentGameBuild } from './registry.ts';
import {
  type CompatDeps,
  GAME_BUILD_COLUMNS,
  type GameBuildRow,
  gameBuildDto,
  gameBuildRef,
  loadEcosystem,
  loadGameBuilds,
} from './shared.ts';

type ModCompat = z.infer<typeof ModCompatDTO>;
type PatchRadar = z.infer<typeof PatchRadarDTO>;
type PatchRadarRow = z.infer<typeof PatchRadarRowDTO>;
type CompatPromptList = z.infer<typeof CompatPromptListDTO>;

/** Mods listed on the Patch Radar. */
export const PATCH_RADAR_TOP = 50;
/** How far back a download may be to still ask "Did it work?". */
export const COMPAT_PROMPT_WINDOW_DAYS = 30;
/** Max prompts returned. */
export const COMPAT_PROMPT_LIMIT = 10;

// -----------------------------------------------------------------------------------------------
// GET /mods/:id/compat
// -----------------------------------------------------------------------------------------------

export async function getModCompat(ctx: Ctx, deps: CompatDeps, modId: number): Promise<ModCompat> {
  const { snapshot, entry } = await reachableMod(ctx, deps.config, { id: modId });
  const [data, current, flags] = await Promise.all([
    getVersionsData(ctx, snapshot, entry),
    currentGameBuild(ctx.db),
    queryOne<{ possiblyOutdated: boolean }>(ctx.db, sql`SELECT "possiblyOutdated" FROM "Mod" WHERE "id" = ${entry.id}`),
  ]);
  const latest = latestOf(data.versions);
  const currentRef = current ? gameBuildRef(current) : null;
  let summary: CompatSummaryDTO = { status: 'untested', works: 0, partial: 0, broken: 0, gameBuild: currentRef };
  if (latest && currentRef) {
    const agg = latest.compat.find((c) => c.gameBuild.id === currentRef.id);
    if (agg) {
      summary = {
        status: agg.status,
        works: agg.works,
        partial: agg.partial,
        broken: agg.broken,
        gameBuild: currentRef,
      };
    }
  }
  return {
    modId: entry.id,
    current: summary,
    possiblyOutdated: flags?.possiblyOutdated === true,
    versions: data.versions.map((v) => ({ versionId: v.id, version: v.version, builds: v.compat })),
  };
}

// -----------------------------------------------------------------------------------------------
// GET /patch-radar
// -----------------------------------------------------------------------------------------------

interface RadarRow {
  modId: number;
  downloads30d: number | string | null;
  versionId: number | null;
  version: string | null;
  possiblyOutdated: boolean;
  works: number | null;
  partial: number | null;
  broken: number | null;
  computedStatus: string | null;
}

export async function getPatchRadar(ctx: Ctx, deps: CompatDeps, buildId?: number): Promise<PatchRadar> {
  const [builds, snapshot] = await Promise.all([loadGameBuilds(ctx.db), getSnapshot(ctx, deps.config)]);
  const build: GameBuildRow | undefined =
    buildId === undefined ? builds.find((b) => b.isCurrent) : builds.find((b) => b.id === buildId);
  if (!build) throw errors.notFound('Game build');

  const candidates = snapshot.entries.filter((e) => e.kind !== 'build' && isListable(snapshot, e));
  const byId = new Map<number, CatalogEntry>(candidates.map((e) => [e.id, e]));
  const list =
    candidates.length === 0
      ? []
      : await query<RadarRow>(
          ctx.db,
          sql`WITH latest AS (
                SELECT DISTINCT ON (v."modId") v."modId", v."id", v."version"
                  FROM "ModVersion" v
                 WHERE v."modId" = ANY(${intArray(byId.keys())}) AND ${REPORTABLE_VERSION_SQL}
                 ORDER BY v."modId", v."isLatest" DESC, COALESCE(v."publishedAt", v."createdAt") DESC, v."id" DESC
              )
              SELECT m."id" AS "modId", COALESCE(s."downloads30d", 0) AS "downloads30d", l."id" AS "versionId",
                     l."version", m."possiblyOutdated", c."works", c."partial", c."broken", c."computedStatus"
                FROM "Mod" m
                LEFT JOIN "ModStats" s ON s."modId" = m."id"
                LEFT JOIN latest l ON l."modId" = m."id"
                LEFT JOIN "ModVersionCompat" c ON c."modVersionId" = l."id" AND c."gameBuildId" = ${build.id}
               WHERE m."id" = ANY(${intArray(byId.keys())})`,
        );

  const ranked = list
    .map((r) => ({ r, entry: byId.get(r.modId), downloads30d: toInt(r.downloads30d) }))
    .filter((x): x is { r: RadarRow; entry: CatalogEntry; downloads30d: number } => x.entry !== undefined)
    .sort((a, b) => b.downloads30d - a.downloads30d || b.entry.downloads - a.entry.downloads || a.entry.id - b.entry.id)
    .slice(0, PATCH_RADAR_TOP);

  const ref = gameBuildRef(build);
  const rows: PatchRadarRow[] = ranked.map(({ r, entry, downloads30d }) => ({
    mod: entry.ref,
    latestVersion: r.version ? r.version.slice(0, 64) : null,
    downloads30d,
    compat: {
      status: r.computedStatus === null ? 'untested' : compatOf(r.computedStatus),
      works: toInt(r.works),
      partial: toInt(r.partial),
      broken: toInt(r.broken),
      gameBuild: ref,
    },
    possiblyOutdated: r.possiblyOutdated === true,
  }));

  const confirmed = rows.filter((row) => row.compat.status !== 'untested').length;
  return {
    build: gameBuildDto(build),
    ecosystem: await loadEcosystem(ctx.db, build.id),
    confirmedShare: rows.length === 0 ? 0 : Math.round((confirmed / rows.length) * 100) / 100,
    works: rows.filter((row) => row.compat.status === 'works'),
    broken: rows.filter((row) => row.compat.status === 'broken'),
    pending: rows.filter((row) => row.compat.status === 'untested' || row.compat.status === 'mixed'),
    history: builds.map(gameBuildDto),
  };
}

// -----------------------------------------------------------------------------------------------
// GET /me/compat-prompts
// -----------------------------------------------------------------------------------------------

interface PromptRow {
  modId: number;
  modVersionId: number;
  version: string;
  downloadedAt: Date | string;
}

export async function getCompatPrompts(ctx: Ctx, deps: CompatDeps): Promise<CompatPromptList> {
  if (!ctx.actor) throw errors.unauthenticated();
  const userId = ctx.actor.userId;
  const settings = await queryOne<{ enabled: string | null }>(
    ctx.db,
    sql`SELECT ("settings"->>'compatPrompts') AS "enabled" FROM "User" WHERE "id" = ${userId}`,
  );
  if (settings?.enabled === 'false') return { items: [] };
  const current = await queryOne<GameBuildRow>(
    ctx.db,
    sql`SELECT ${GAME_BUILD_COLUMNS} FROM "GameBuild" g WHERE g."isCurrent" ORDER BY g."id" DESC LIMIT 1`,
  );
  if (!current) return { items: [] };

  const windowStart = new Date(ctx.clock.now().getTime() - COMPAT_PROMPT_WINDOW_DAYS * 86_400_000);
  const list = await query<PromptRow>(
    ctx.db,
    sql`SELECT DISTINCT ON (v."modId") v."modId", v."id" AS "modVersionId", v."version", d."createdAt" AS "downloadedAt"
          FROM "ModDownload" d
          JOIN "ModVersion" v ON v."id" = d."modVersionId"
          JOIN "Mod" m ON m."id" = v."modId"
         WHERE d."userId" = ${userId}
           AND d."createdAt" >= GREATEST(${current.releasedAt}::date::timestamp, (${at(windowStart)} AT TIME ZONE 'UTC'))
           AND m."userId" IS DISTINCT FROM ${userId}
           AND ${REPORTABLE_VERSION_SQL}
           AND NOT EXISTS (SELECT 1 FROM "CompatReport" r
                            WHERE r."userId" = ${userId} AND r."modVersionId" = v."id" AND r."gameBuildId" = ${current.id})
         ORDER BY v."modId", d."createdAt" DESC, d."id" DESC`,
  );
  if (list.length === 0) return { items: [] };

  const snapshot = await getSnapshot(ctx, deps.config);
  const ref = gameBuildRef(current);
  const items = list
    .map((r) => ({ r, entry: snapshot.byId.get(r.modId), at: toDate(r.downloadedAt) }))
    .filter(
      (x): x is { r: PromptRow; entry: CatalogEntry; at: Date } =>
        x.entry !== undefined &&
        x.at !== null &&
        snapshot.authors.get(x.entry.userId)?.hidden !== true &&
        ['published', 'unlisted', 'archived'].includes(x.entry.status),
    )
    .sort((a, b) => b.at.getTime() - a.at.getTime())
    .slice(0, COMPAT_PROMPT_LIMIT)
    .map(({ r, entry, at: downloadedAt }) => ({
      mod: entry.ref,
      modVersionId: r.modVersionId,
      version: r.version.slice(0, 64),
      gameBuild: ref,
      downloadedAt: downloadedAt.toISOString(),
    }));
  return { items };
}
