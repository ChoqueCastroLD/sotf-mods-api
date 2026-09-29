/**
 * Versions and dependencies (T0-04, T0-09, PLAN §5.2 `GET /mods/:id/versions`,
 * `GET /mods/:id/dependencies`).
 *
 * - Public versions are `active`, `yanked` (shown with the reason) and `file_missing`; `pending`
 *   versions only while the mod itself is `pending` with passed checks; `rejected` never.
 * - Order: semver precedence, newest first (BuildShare 1.0.10 > 1.0.2); builds by date.
 * - Dependencies are resolved against `manifestId` (`depModId` when the publisher linked it, else
 *   an exact manifest id match) and carry the state of the target: `ok`, `unlisted` (reachable by
 *   URL only), `archived`, `removed`, or `missing` = not available on the site.
 */

import type { CompatStatus, GameBuildRefDTO, Platform } from '@sotf/contracts/common';
import type { CompatAggregateDTO } from '@sotf/contracts/compat';
import { downloadPath } from '@sotf/contracts/seo';
import type { DependencyDTO, ScanSummaryDTO, VersionDTO } from '@sotf/contracts/versions';
import type { Ctx } from '../kernel/context.ts';
import { sortVersionsNewestFirst } from './semver.ts';
import { type CatalogEntry, type CatalogSnapshot, compatOf, isListable, platformOf } from './snapshot.ts';
import { num, numOrNull, rows } from './sql.ts';

interface VersionRow {
  id: number;
  modId: number;
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
  checksStatus: string | null;
  downloadsCount: number;
}

interface DependencyRow {
  modVersionId: number;
  depManifestId: string;
  depModId: number | null;
  versionRange: string | null;
  kind: DependencyDTO['kind'];
}

interface CompatRow {
  modVersionId: number;
  gameBuildId: number;
  label: string;
  isCurrent: boolean;
  isBreaking: boolean;
  works: number;
  partial: number;
  broken: number;
  weightedScore: number | null;
  authorTested: boolean;
  computedStatus: string;
  updatedAt: Date | null;
}

interface ScanRow {
  modVersionId: number;
  verdict: ScanSummaryDTO['verdict'];
  engine: string;
  positives: number | null;
  total: number | null;
  permalink: string | null;
  scannedAt: Date | null;
}

const PUBLIC_VERSION_STATUSES = ['active', 'yanked', 'file_missing'] as const;
const SHA256 = /^[0-9a-f]{64}$/;
const SCAN_VERDICTS = new Set(['pending', 'clean', 'suspicious', 'malicious', 'unknown', 'false_positive']);

/** Escapes legacy plain text for HTML (the legacy stores changelogs as text). */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Legacy text → safe paragraphs (`<p>` per blank-line block, `<br>` per line). */
export function textToHtml(text: string): string {
  const blocks = text
    .replace(/\r\n?/g, '\n')
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
  return blocks.map((b) => `<p>${escapeHtml(b).replace(/\n/g, '<br>')}</p>`).join('');
}

/** State of a dependency target for visitors. */
export function dependencyState(
  snapshot: CatalogSnapshot,
  target: CatalogEntry | undefined,
): { state: DependencyDTO['state']; entry: CatalogEntry | null } {
  if (!target || snapshot.authors.get(target.userId)?.hidden) return { state: 'missing', entry: null };
  switch (target.status) {
    case 'published':
      return { state: 'ok', entry: target };
    case 'unlisted':
      return { state: 'unlisted', entry: target };
    case 'pending':
      return target.latestChecks === 'passed'
        ? { state: 'unlisted', entry: target }
        : { state: 'missing', entry: null };
    case 'archived':
      return { state: 'archived', entry: target };
    case 'removed':
      return { state: 'removed', entry: target };
    default:
      return { state: 'missing', entry: null };
  }
}

function resolveDependencies(snapshot: CatalogSnapshot, list: DependencyRow[]): DependencyDTO[] {
  const order = { required: 0, optional: 1, conflicts: 2 } as const;
  const seen = new Set<string>();
  const out: DependencyDTO[] = [];
  for (const d of [...list].sort(
    (a, b) => order[a.kind] - order[b.kind] || a.depManifestId.localeCompare(b.depManifestId),
  )) {
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

function gameBuildRef(r: CompatRow): GameBuildRefDTO {
  return { id: r.gameBuildId, label: r.label, isCurrent: r.isCurrent, isBreaking: r.isBreaking };
}

export function compatAggregate(r: CompatRow): CompatAggregateDTO {
  return {
    modVersionId: r.modVersionId,
    gameBuild: gameBuildRef(r),
    status: compatOf(r.computedStatus) as CompatStatus,
    works: num(r.works),
    partial: num(r.partial),
    broken: num(r.broken),
    weightedScore: numOrNull(r.weightedScore),
    authorTested: r.authorTested,
    updatedAt: r.updatedAt ? r.updatedAt.toISOString() : null,
  };
}

export type CompatRowOf = CompatRow;

export interface VersionsData {
  versions: VersionDTO[];
  /** Compat rows of every public version (for the current-build summary). */
  compat: CompatRow[];
}

/** Loads every public version of a mod as `VersionDTO`s, newest first. */
export async function loadVersions(ctx: Ctx, snapshot: CatalogSnapshot, entry: CatalogEntry): Promise<VersionsData> {
  const statuses: string[] = [...PUBLIC_VERSION_STATUSES];
  if (entry.status === 'pending' && entry.latestChecks === 'passed') statuses.push('pending');
  const versionRows = await rows<VersionRow>(
    ctx.db,
    `SELECT "id", "modId", "version", "isLatest", "channel", "status", "statusReason", "changelog", "changelogHtml",
            "publishedAt", "createdAt", "filename", "fileSize", "sha256", "gameVersionDeclared",
            "loaderVersionDeclared", "platformDeclared", "checksStatus", "downloadsCount"
       FROM "ModVersion"
      WHERE "modId" = $1 AND "status" = ANY($2::text[])
        AND ("status" <> 'pending' OR "checksStatus" = 'passed')`,
    [entry.id, statuses],
  );
  const ids = versionRows.map((v) => v.id);
  const [deps, compat, scans] =
    ids.length === 0
      ? [[], [], []]
      : await Promise.all([
          rows<DependencyRow>(
            ctx.db,
            `SELECT "modVersionId", "depManifestId", "depModId", "versionRange", "kind"
               FROM "ModDependency" WHERE "modVersionId" = ANY($1::int[]) ORDER BY "id"`,
            [ids],
          ),
          rows<CompatRow>(
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
            `SELECT DISTINCT ON ("modVersionId") "modVersionId", "verdict", "engine", "positives", "total", "permalink", "scannedAt"
               FROM "SecurityScan" WHERE "modVersionId" = ANY($1::int[])
              ORDER BY "modVersionId", "scannedAt" DESC NULLS LAST, "id" DESC`,
            [ids],
          ),
        ]);

  const depsOf = new Map<number, DependencyRow[]>();
  for (const d of deps) depsOf.set(d.modVersionId, [...(depsOf.get(d.modVersionId) ?? []), d]);
  const compatOfVersion = new Map<number, CompatRow[]>();
  for (const c of compat) compatOfVersion.set(c.modVersionId, [...(compatOfVersion.get(c.modVersionId) ?? []), c]);
  const scanOf = new Map(scans.map((s) => [s.modVersionId, s]));

  const sorted = sortVersionsNewestFirst(versionRows, entry.kind === 'build');
  const versions = sorted.map((v): VersionDTO => {
    const scan = scanOf.get(v.id);
    const compatRows = compatOfVersion.get(v.id) ?? [];
    return {
      id: v.id,
      modId: entry.id,
      version: v.version.slice(0, 64),
      isLatest: v.isLatest,
      channel: v.channel === 'beta' ? 'beta' : 'release',
      status: v.status as VersionDTO['status'],
      statusReason: v.status === 'yanked' || v.status === 'file_missing' ? (v.statusReason ?? null) : null,
      changelogHtml: v.changelogHtml ?? textToHtml(v.changelog),
      publishedAt: (v.publishedAt ?? v.createdAt).toISOString(),
      fileName: v.filename ? (v.filename.split('/').pop() ?? v.filename) : null,
      fileSize: numOrNull(v.fileSize),
      sha256: v.sha256 && SHA256.test(v.sha256) ? v.sha256 : null,
      downloadPath: downloadPath(entry.userHandle, entry.slug, v.version),
      gameVersionDeclared: v.gameVersionDeclared,
      loaderVersionDeclared: v.loaderVersionDeclared,
      platform: platformOf(v.platformDeclared) as Platform | null,
      testedGameBuilds: compatRows.filter((c) => c.authorTested).map(gameBuildRef),
      dependencies: resolveDependencies(snapshot, depsOf.get(v.id) ?? []),
      scan:
        scan && SCAN_VERDICTS.has(scan.verdict)
          ? {
              verdict: scan.verdict,
              engine: scan.engine,
              positives: scan.positives,
              total: scan.total,
              permalink: scan.permalink,
              scannedAt: scan.scannedAt ? scan.scannedAt.toISOString() : null,
            }
          : null,
      compat: compatRows.map(compatAggregate),
      downloadsCount: num(v.downloadsCount),
    };
  });
  return { versions, compat };
}

/** The version shown as "latest": the one flagged `isLatest`, else the newest public version. */
export function latestOf(versions: readonly VersionDTO[]): VersionDTO | null {
  return (
    versions.find((v) => v.isLatest && v.status !== 'yanked') ?? versions.find((v) => v.status !== 'yanked') ?? null
  );
}

/** Selects a version by numeric id, version string or `latest`. */
export function selectVersion(versions: readonly VersionDTO[], selector: string): VersionDTO | null {
  const s = selector.trim();
  if (s === 'latest') return latestOf(versions);
  if (/^\d{1,10}$/.test(s)) {
    const byId = versions.find((v) => v.id === Number(s));
    if (byId) return byId;
  }
  return (
    versions.find((v) => v.version === s) ??
    versions.find((v) => v.version.replace(/^v/, '') === s.replace(/^v/, '')) ??
    null
  );
}

/** Published, non-NSFW mods whose latest version requires `target` ("Required by N"). */
export async function loadDependentIds(ctx: Ctx, snapshot: CatalogSnapshot, target: CatalogEntry): Promise<number[]> {
  const found = await rows<{ modId: number }>(
    ctx.db,
    `SELECT DISTINCT v."modId"
       FROM "ModDependency" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
      WHERE v."isLatest" AND v."modId" IS NOT NULL AND v."modId" <> $1 AND d."kind" = 'required'
        AND (d."depModId" = $1 OR (d."depModId" IS NULL AND d."depManifestId" = $2))`,
    [target.id, target.manifestId],
  );
  return found
    .map((r) => snapshot.byId.get(r.modId))
    .filter((e): e is CatalogEntry => e !== undefined && isListable(snapshot, e))
    .sort((a, b) => b.downloads - a.downloads || a.id - b.id)
    .map((e) => e.id);
}
