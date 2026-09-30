/**
 * Download resolution (PLAN §2.8 "Descarga", research/01 §6.2): from any of the download URLs to
 * the R2 object, without an intermediate 301.
 *
 * - `slug` (web route `/mods/:user/:slug/download/:version` and the legacy slug alias): the
 *   canonical resolver, steps 1–4 (wrong/`undefined` user, case, old slugs, manifest ids);
 * - `manifest` (legacy `/api/mods/:mod_id/download/:version`): the manifest `mod_id`;
 * - `version` (`/api/v2/versions/:id/download`): the version id.
 *
 * Version: exact string (the newest row when the legacy allowed duplicates); `latest` and
 * `undefined` (RedManager ≤ 1.1.9) → the `isLatest` version (or the newest downloadable one).
 *
 * Outcomes: mod `removed` (or a tombstoned path) → 410 · mod `rejected` → 404 · unknown mod/version → 404 · version
 * `rejected` or `pending` without passed checks → 404 · version `file_missing` or without an R2
 * object → 410 · otherwise 302 to `R2_PUBLIC_BASE_URL/<key encoded per segment>`.
 */
import { LATEST_VERSION_ALIASES } from '@sotf/contracts/downloads';
import { encodePathSegment } from '@sotf/contracts/seo';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { findModByManifestId, findModBySlug, type ModMatch } from '../resolve/mods.ts';
import { tombstoneStatus } from '../resolve/paths.ts';
import { publicObjectUrl, storageKeyFromPublicUrl } from '../storage/keys.ts';

export type DownloadTarget =
  | { by: 'slug'; user: string; slug: string; version: string }
  | { by: 'manifest'; manifestId: string; version: string }
  | { by: 'version'; versionId: number };

export type DownloadReason =
  | 'ok'
  | 'mod_not_found'
  | 'version_not_found'
  | 'file_missing'
  | 'mod_removed'
  | 'mod_rejected';

export interface ResolvedDownload {
  status: 302 | 404 | 410;
  reason: DownloadReason;
  location: string | null;
  modId: number | null;
  versionId: number | null;
  /** Object key (for logs and tests). */
  key: string | null;
}

export interface DownloadResolveOptions {
  /** `R2_PUBLIC_BASE_URL`. */
  publicBaseUrl: string;
  /**
   * Origins whose legacy `downloadUrl`s point into the public bucket (used when a version has no
   * `storageKey` yet, e.g. created by the legacy app during coexistence).
   */
  publicOrigins: readonly string[];
}

interface VersionRow {
  id: number;
  modId: number | null;
  version: string;
  status: string;
  checksStatus: string | null;
  storageKey: string | null;
  downloadUrl: string;
}

const VERSION_COLUMNS = sql`v."id", v."modId", v."version", v."status", v."checksStatus", v."storageKey", v."downloadUrl"`;

/** Version states that can never be downloaded publicly. */
function hiddenVersion(v: VersionRow): boolean {
  if (v.status === 'rejected') return true;
  if (v.status === 'pending' && v.checksStatus !== 'passed') return true;
  return false;
}

export function isLatestAlias(version: string): boolean {
  return (LATEST_VERSION_ALIASES as readonly string[]).includes(version.trim().toLowerCase());
}

/** The version of a mod a download asks for (`modId` is an SQL expression). */
function versionQuery(modId: ReturnType<typeof sql>, version: string) {
  return isLatestAlias(version)
    ? sql`SELECT ${VERSION_COLUMNS} FROM "ModVersion" v
           WHERE v."modId" = ${modId}
             AND v."status" <> 'rejected' AND (v."status" <> 'pending' OR v."checksStatus" = 'passed')
           ORDER BY v."isLatest" DESC, v."createdAt" DESC, v."id" DESC
           LIMIT 1`
    : sql`SELECT ${VERSION_COLUMNS} FROM "ModVersion" v
           WHERE v."modId" = ${modId} AND v."version" = ${version}
           ORDER BY v."createdAt" DESC, v."id" DESC
           LIMIT 1`;
}

function versionOf(row: Record<string, unknown>, prefix = ''): VersionRow | null {
  const get = (name: string) => row[prefix ? `${prefix}${name[0]?.toUpperCase()}${name.slice(1)}` : name];
  if (get('id') === null || get('id') === undefined) return null;
  const modId = get('modId');
  return {
    id: Number(get('id')),
    modId: modId === null || modId === undefined ? null : Number(modId),
    version: String(get('version')),
    status: String(get('status')),
    checksStatus: (get('checksStatus') as string | null) ?? null,
    storageKey: (get('storageKey') as string | null) ?? null,
    downloadUrl: String(get('downloadUrl') ?? ''),
  };
}

function modOf(row: Record<string, unknown>): ModMatch | null {
  if (row.mId === null || row.mId === undefined) return null;
  return {
    id: Number(row.mId),
    name: String(row.mName),
    slug: String(row.mSlug),
    canonicalSlug: (row.mCanonicalSlug as string | null) ?? null,
    manifestId: String(row.mManifestId),
    type: (row.mType as ModMatch['type']) ?? null,
    status: row.mStatus as ModMatch['status'],
    userId: row.mUserId === null || row.mUserId === undefined ? null : Number(row.mUserId),
    ownerSlug: (row.mOwnerSlug as string | null) ?? null,
  };
}

const MOD_COLUMNS = sql`m."id" AS "mId", m."name" AS "mName", m."slug" AS "mSlug", m."canonicalSlug" AS "mCanonicalSlug",
  m."mod_id" AS "mManifestId", m."type" AS "mType", m."status" AS "mStatus", m."userId" AS "mUserId",
  u."slug" AS "mOwnerSlug"`;

async function findVersion(db: Executor, modId: number, version: string): Promise<VersionRow | null> {
  const rows = await db.execute<Record<string, unknown>>(versionQuery(sql`${modId}`, version));
  return rows.rows[0] ? versionOf(rows.rows[0]) : null;
}

/**
 * One round trip for the common cases (a version id, or the exact owner path with its version).
 * `undefined` = not found this way (the caller runs the full resolver).
 */
async function fastPath(
  db: Executor,
  target: DownloadTarget,
): Promise<{ mod: ModMatch | null; version: VersionRow | null } | undefined> {
  if (target.by === 'version') {
    const rows = await db.execute<Record<string, unknown>>(sql`
      SELECT ${VERSION_COLUMNS}, ${MOD_COLUMNS}
        FROM "ModVersion" v
        LEFT JOIN "Mod" m ON m."id" = v."modId"
        LEFT JOIN "User" u ON u."id" = m."userId"
       WHERE v."id" = ${target.versionId}`);
    const row = rows.rows[0];
    return row ? { mod: modOf(row), version: versionOf(row) } : { mod: null, version: null };
  }
  if (target.by !== 'slug') return undefined;
  const rows = await db.execute<Record<string, unknown>>(sql`
    SELECT ${MOD_COLUMNS}, lv."id" AS "vId", lv."modId" AS "vModId", lv."version" AS "vVersion",
           lv."status" AS "vStatus", lv."checksStatus" AS "vChecksStatus", lv."storageKey" AS "vStorageKey",
           lv."downloadUrl" AS "vDownloadUrl"
      FROM "Mod" m
      JOIN "User" u ON u."id" = m."userId"
      LEFT JOIN LATERAL (${versionQuery(sql`m."id"`, target.version)}) lv ON true
     WHERE u."slug" = ${target.user} AND (m."slug" = ${target.slug} OR m."canonicalSlug" = ${target.slug})
     ORDER BY (CASE m."status" WHEN 'published' THEN 0 WHEN 'unlisted' THEN 1 WHEN 'archived' THEN 2
                               WHEN 'pending' THEN 3 WHEN 'removed' THEN 4 ELSE 5 END), m."id"
     LIMIT 1`);
  const row = rows.rows[0];
  return row ? { mod: modOf(row), version: versionOf(row, 'v') } : undefined;
}

function outcome(
  status: ResolvedDownload['status'],
  reason: DownloadReason,
  mod: ModMatch | null,
  version: VersionRow | null,
  location: string | null = null,
  key: string | null = null,
): ResolvedDownload {
  return { status, reason, location, modId: mod?.id ?? null, versionId: version?.id ?? null, key };
}

/** Resolves a download to its 302 target or its 404/410 reason. Pure read. */
export async function resolveDownload(
  db: Executor,
  target: DownloadTarget,
  options: DownloadResolveOptions,
): Promise<ResolvedDownload> {
  let mod: ModMatch | null = null;
  let version: VersionRow | null = null;
  const fast = await fastPath(db, target);

  if (target.by === 'version') {
    version = fast?.version ?? null;
    if (!version) return outcome(404, 'version_not_found', null, null);
    mod = fast?.mod ?? null;
    if (!mod) return outcome(404, 'mod_not_found', null, version);
  } else if (fast?.mod) {
    mod = fast.mod;
    version = fast.version;
  } else {
    mod =
      target.by === 'slug'
        ? ((await findModBySlug(db, target.user, target.slug))?.mod ?? null)
        : await findModByManifestId(db, target.manifestId);
    if (!mod && target.by === 'slug') {
      // Content deleted before v2 (tombstones) is gone, not unknown.
      const path = `/mods/${encodePathSegment(target.user)}/${encodePathSegment(target.slug)}`;
      const status = await tombstoneStatus(db, [path, path.toLowerCase(), `/mods/${target.user}/${target.slug}`]);
      if (status === 410) return outcome(410, 'mod_removed', null, null);
    }
    if (!mod) return outcome(404, 'mod_not_found', null, null);
  }

  if (mod.status === 'removed') return outcome(410, 'mod_removed', mod, version);
  if (mod.status === 'rejected') return outcome(404, 'mod_rejected', mod, version);

  if (target.by !== 'version' && !fast?.mod) version = await findVersion(db, mod.id, target.version);
  if (!version) return outcome(404, 'version_not_found', mod, null);
  if (!version || hiddenVersion(version)) return outcome(404, 'version_not_found', mod, null);
  if (version.status === 'file_missing') return outcome(410, 'file_missing', mod, version);

  const key =
    version.storageKey ??
    storageKeyFromPublicUrl(version.downloadUrl, [options.publicBaseUrl, ...options.publicOrigins]);
  if (!key) return outcome(410, 'file_missing', mod, version);
  return outcome(302, 'ok', mod, version, publicObjectUrl(options.publicBaseUrl, key), key);
}
