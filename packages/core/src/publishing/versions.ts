/**
 * Versions as the owner sees them (every status: pending, rejected and yanked included, with the
 * rejection or yank reason and the security report) and the recomputation of the latest version
 * after a yank, an unyank or a moderation decision.
 *
 * The "latest" of a mod is its highest `active` version (semver precedence for mods and libraries,
 * creation date for builds). Recomputing it keeps the legacy columns in step: `ModVersion.isLatest`
 * (one per mod, partial unique index), `Mod.latestVersion`, the CSV of required dependencies and
 * `logColor`. `lastReleasedAt` only moves when a version is released.
 */
import type { CompatAggregateDTO } from '@sotf/contracts/compat';
import { downloadPath } from '@sotf/contracts/seo';
import type { DependencyDTO, VersionDTO } from '@sotf/contracts/versions';
import { type Executor, mod, modVersion } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import { sortVersionsNewestFirst } from '../catalog/semver.ts';
import { type CatalogEntry, type CatalogSnapshot, platformOf } from '../catalog/snapshot.ts';
import { num, numOrNull, rows } from '../catalog/sql.ts';
import { type CompatRowOf, compatAggregate, dependencyState, textToHtml } from '../catalog/versions.ts';
import type { Ctx } from '../kernel/context.ts';

interface OwnerVersionRow {
  id: number;
  version: string;
  isLatest: boolean;
  channel: string;
  status: string;
  statusReason: string | null;
  changelog: string;
  changelogHtml: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  filename: string | null;
  fileSize: string | number | null;
  sha256: string | null;
  gameVersionDeclared: string | null;
  loaderVersionDeclared: string | null;
  platformDeclared: string | null;
  downloadsCount: number;
}

interface DependencyRow {
  modVersionId: number;
  depManifestId: string;
  depModId: number | null;
  versionRange: string | null;
  kind: DependencyDTO['kind'];
}

interface ScanRow {
  id: number | string;
  modVersionId: number;
  verdict: string;
  engine: string;
  positives: number | null;
  total: number | null;
  permalink: string | null;
  scannedAt: Date | null;
}

const SHA256 = /^[0-9a-f]{64}$/;
const SCAN_VERDICTS = new Set(['pending', 'clean', 'suspicious', 'malicious', 'unknown', 'false_positive']);
const VERSION_STATUSES = new Set(['pending', 'active', 'rejected', 'yanked', 'file_missing']);
const DEP_ORDER = { required: 0, optional: 1, conflicts: 2 } as const;

function dependencies(snapshot: CatalogSnapshot, list: readonly DependencyRow[]): DependencyDTO[] {
  const seen = new Set<string>();
  const out: DependencyDTO[] = [];
  const sorted = [...list].sort(
    (a, b) => DEP_ORDER[a.kind] - DEP_ORDER[b.kind] || a.depManifestId.localeCompare(b.depManifestId),
  );
  for (const d of sorted) {
    const key = `${d.kind}\n${d.depManifestId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const target =
      (d.depModId === null ? undefined : snapshot.byId.get(d.depModId)) ?? snapshot.byManifestId.get(d.depManifestId);
    const { state, entry } = dependencyState(snapshot, target);
    out.push({
      manifestId: d.depManifestId.slice(0, 128) || '?',
      kind: d.kind,
      versionRange: d.versionRange?.trim() || null,
      state,
      mod: entry ? entry.ref : null,
    });
  }
  return out;
}

/** Every version of a mod (any status) as `VersionDTO`s, newest first, or only `onlyId`. */
export async function ownerVersions(
  ctx: Ctx,
  snapshot: CatalogSnapshot,
  entry: Pick<CatalogEntry, 'id' | 'kind' | 'userHandle' | 'slug'>,
  onlyId?: number,
): Promise<VersionDTO[]> {
  const versionRows = await rows<OwnerVersionRow>(
    ctx.db,
    `SELECT "id", "version", "isLatest", "channel", "status", "statusReason", "changelog", "changelogHtml",
            "publishedAt", "createdAt", "filename", "fileSize", "sha256", "gameVersionDeclared",
            "loaderVersionDeclared", "platformDeclared", "downloadsCount"
       FROM "ModVersion" WHERE "modId" = $1 AND ($2::int IS NULL OR "id" = $2)`,
    [entry.id, onlyId ?? null],
  );
  const ids = versionRows.map((v) => v.id);
  if (ids.length === 0) return [];
  const [deps, compat, scans] = await Promise.all([
    rows<DependencyRow>(
      ctx.db,
      `SELECT "modVersionId", "depManifestId", "depModId", "versionRange", "kind"
         FROM "ModDependency" WHERE "modVersionId" = ANY($1::int[]) ORDER BY "id"`,
      [ids],
    ),
    rows<CompatRowOf>(
      ctx.db,
      `SELECT c."modVersionId", c."gameBuildId", g."label", g."isCurrent", g."isBreaking", c."works", c."partial",
              c."broken", c."weightedScore", c."authorTested", c."computedStatus", c."updatedAt"
         FROM "ModVersionCompat" c JOIN "GameBuild" g ON g."id" = c."gameBuildId"
        WHERE c."modVersionId" = ANY($1::int[])
        ORDER BY g."releasedAt" DESC, g."id" DESC`,
      [ids],
    ),
    rows<ScanRow>(
      ctx.db,
      `SELECT DISTINCT ON ("modVersionId") "id", "modVersionId", "verdict", "engine", "positives", "total", "permalink", "scannedAt"
         FROM "SecurityScan" WHERE "modVersionId" = ANY($1::int[])
        ORDER BY "modVersionId", "scannedAt" DESC NULLS LAST, "id" DESC`,
      [ids],
    ),
  ]);
  const depsOf = new Map<number, DependencyRow[]>();
  for (const d of deps) depsOf.set(d.modVersionId, [...(depsOf.get(d.modVersionId) ?? []), d]);
  const compatOf = new Map<number, CompatRowOf[]>();
  for (const c of compat) compatOf.set(c.modVersionId, [...(compatOf.get(c.modVersionId) ?? []), c]);
  const scanOf = new Map(scans.map((s) => [s.modVersionId, s]));

  return sortVersionsNewestFirst(versionRows, entry.kind === 'build').map((v): VersionDTO => {
    const scan = scanOf.get(v.id);
    const compatRows = compatOf.get(v.id) ?? [];
    return {
      id: v.id,
      modId: entry.id,
      version: v.version.slice(0, 64),
      isLatest: v.isLatest,
      channel: v.channel === 'beta' ? 'beta' : 'release',
      status: (VERSION_STATUSES.has(v.status) ? v.status : 'active') as VersionDTO['status'],
      statusReason: v.statusReason ?? null,
      changelogHtml: v.changelogHtml ?? textToHtml(v.changelog),
      publishedAt: (v.publishedAt ?? v.createdAt).toISOString(),
      fileName: v.filename ? (v.filename.split('/').pop() ?? v.filename) : null,
      fileSize: numOrNull(v.fileSize),
      sha256: v.sha256 && SHA256.test(v.sha256) ? v.sha256 : null,
      downloadPath: downloadPath(entry.userHandle, entry.slug, v.version),
      gameVersionDeclared: v.gameVersionDeclared,
      loaderVersionDeclared: v.loaderVersionDeclared,
      platform: platformOf(v.platformDeclared),
      testedGameBuilds: compatRows
        .filter((c) => c.authorTested)
        .map((c) => ({ id: c.gameBuildId, label: c.label, isCurrent: c.isCurrent, isBreaking: c.isBreaking })),
      dependencies: dependencies(snapshot, depsOf.get(v.id) ?? []),
      scan:
        scan && SCAN_VERDICTS.has(scan.verdict)
          ? {
              id: Number(scan.id),
              verdict: scan.verdict as NonNullable<VersionDTO['scan']>['verdict'],
              engine: scan.engine,
              positives: scan.positives,
              total: scan.total,
              permalink: scan.permalink,
              scannedAt: scan.scannedAt ? scan.scannedAt.toISOString() : null,
            }
          : null,
      compat: compatRows.map((c): CompatAggregateDTO => compatAggregate(c)),
      downloadsCount: num(v.downloadsCount),
    };
  });
}

/**
 * Makes the highest `active` version the latest one (see the module comment). Returns the new
 * latest version string, or null when the mod has no active version (then nothing changes: the
 * previous latest keeps its flag so legacy clients still find a file).
 */
export async function recomputeLatest(
  tx: Executor,
  modId: number,
  kind: 'mod' | 'library' | 'build',
): Promise<string | null> {
  const found = await tx.execute<{
    id: number;
    version: string;
    createdAt: Date;
    isLatest: boolean;
    manifest: { logColor?: unknown } | null;
  }>(sql`SELECT "id", "version", "createdAt", "isLatest", "manifest" FROM "ModVersion"
          WHERE "modId" = ${modId} AND "status" = 'active'`);
  const best = sortVersionsNewestFirst(found.rows, kind === 'build')[0];
  if (!best) return null;
  if (!best.isLatest) {
    await tx
      .update(modVersion)
      .set({ isLatest: false })
      .where(and(eq(modVersion.modId, modId), eq(modVersion.isLatest, true)));
    await tx.update(modVersion).set({ isLatest: true }).where(eq(modVersion.id, best.id));
  }
  const deps = await tx.execute<{ depManifestId: string }>(
    sql`SELECT "depManifestId" FROM "ModDependency" WHERE "modVersionId" = ${best.id} AND "kind" = 'required' ORDER BY "id"`,
  );
  const logColor = typeof best.manifest?.logColor === 'string' ? best.manifest.logColor : null;
  await tx
    .update(mod)
    .set({
      latestVersion: best.version,
      dependencies: kind === 'build' ? '' : deps.rows.map((d) => d.depManifestId).join(','),
      ...(logColor ? { logColor } : {}),
    })
    .where(eq(mod.id, modId));
  return best.version;
}
