/**
 * Writing a version (PLAN §6.8, §7.4, T0-04, T0-09), shared by the draft submission, the
 * "new version" endpoint and moderation (approving a held version, WP-51).
 *
 * Legacy-compatible writes, all in the caller's transaction:
 * - `ModVersion`: `downloadUrl` (public R2 URL of the final key, raw), `filename` (the key),
 *   `extension`, `changelog` (HTML-escaped copy of the Markdown, "First release" by default) plus the
 *   v2 columns (`storageKey`, size, SHA-256, type, status, channel, Markdown/HTML changelog, every
 *   manifest field, declared game/loader/platform, `buildMeta`, `checksStatus`, publisher);
 * - the `isLatest` switch (the previous latest is cleared first: a partial unique index allows one
 *   latest version per mod);
 * - `Mod`: `latestVersion`, `lastReleasedAt`, the legacy CSV of required `dependencies`, `type`
 *   (from the manifest for mods and libraries), `logColor`;
 * - `VersionInspection`, `ModDependency` and the author-tested `ModVersionCompat` rows;
 * - jobs: `security.scan` (VirusTotal, WP-51) and `compat.aggregate`; event `version.published`
 *   for active versions (followers, Discord, CDN purge, IndexNow).
 */
import type { ModStatus } from '@sotf/contracts/common';
import type { RedLoaderManifest } from '@sotf/contracts/manifest';
import type { UploadInspectionDTO as UploadInspectionSchema } from '@sotf/contracts/uploads';
import { type JsonObject, mod, modDependency, modVersion, type Transaction } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { storedBuildMeta } from '../builds/blueprint.ts';
import { type InspectionDetail, saveVersionInspection } from '../inspection/run.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import type { VersionFile } from './files.ts';
import type { PublicationDecision } from './policy.ts';
import type { ResolvedDependency } from './queries.ts';
import { FIRST_RELEASE_CHANGELOG, legacyText, renderChangelog } from './text.ts';
import { recomputeLatest } from './versions.ts';

type UploadInspectionDTO = z.infer<typeof UploadInspectionSchema>;

export interface ReleaseMod {
  id: number;
  name: string;
  manifestId: string;
  kind: 'mod' | 'library' | 'build';
  userId: number;
  nsfw: boolean;
  categorySlug: string | null;
}

export interface ReleaseInput {
  mod: ReleaseMod;
  versionId: number;
  version: string;
  decision: PublicationDecision;
  file: VersionFile;
  publicUrl: string;
  size: number;
  inspection: UploadInspectionDTO;
  entries: InspectionDetail['entries'] | null;
  manifest: RedLoaderManifest | null;
  changelogMd: string;
  channel: 'release' | 'beta';
  dependencies: readonly ResolvedDependency[];
  testedGameBuildIds: readonly number[];
  notifyFollowers: boolean;
  publishedById: number;
  /** Minimum loader declared in the wizard; used when the manifest declares no `loaderVersion`. */
  loaderMin?: string | null;
  /**
   * Emit `version.published` for an active version (default true). The first version of a new mod
   * is announced by `mod.published` instead.
   */
  emitVersionEvent?: boolean;
}

/** Next id of a serial column (ids are reserved before the file is copied under them). */
export async function reserveId(exec: Transaction | Ctx['db'], table: 'Mod' | 'ModVersion'): Promise<number> {
  const res = await exec.execute<{ id: string }>(
    sql`SELECT nextval(pg_get_serial_sequence(${`"${table}"`}, 'id'))::text AS "id"`,
  );
  return Number(res.rows[0]?.id);
}

/** Manifest id of BuildShare: every build depends on it (T0-24). */
export const BUILDSHARE_MANIFEST_ID = 'BuildShare';

/** CSV of required dependencies (the legacy `Mod.dependencies` string). */
export function legacyDependenciesCsv(deps: readonly ResolvedDependency[]): string {
  return deps
    .filter((d) => d.kind === 'required')
    .map((d) => d.manifestId)
    .join(',');
}

/** Legacy "Mod"."type" of a publication. */
export function legacyType(kind: 'mod' | 'library' | 'build'): 'Mod' | 'Library' | 'Build' {
  return kind === 'build' ? 'Build' : kind === 'library' ? 'Library' : 'Mod';
}

function manifestJson(manifest: RedLoaderManifest | null): JsonObject | null {
  return manifest ? (JSON.parse(JSON.stringify(manifest)) as JsonObject) : null;
}

/** Inserts the version and applies every side effect listed above. */
export async function writeVersion(ctx: Ctx, tx: Transaction, input: ReleaseInput): Promise<void> {
  const now = ctx.clock.now();
  const active = input.decision.versionStatus === 'active';
  const changelogMd = input.changelogMd.trim() === '' ? FIRST_RELEASE_CHANGELOG : input.changelogMd;
  const changelog = renderChangelog(changelogMd, input.versionId);

  if (input.decision.becomesLatest) {
    await tx
      .update(modVersion)
      .set({ isLatest: false })
      .where(and(eq(modVersion.modId, input.mod.id), eq(modVersion.isLatest, true)));
  }
  await tx.insert(modVersion).values({
    id: input.versionId,
    version: input.version,
    isLatest: input.decision.becomesLatest,
    changelog: legacyText(changelogMd),
    downloadUrl: input.publicUrl,
    extension: input.file.extension,
    filename: input.file.key,
    createdAt: now,
    updatedAt: now,
    modId: input.mod.id,
    storageKey: input.file.key,
    fileSize: input.size,
    sha256: input.inspection.sha256,
    contentType: input.file.contentType,
    status: input.decision.versionStatus,
    statusReason: null,
    channel: input.channel,
    changelogMd,
    changelogHtml: changelog.html,
    manifest: manifestJson(input.manifest),
    gameVersionDeclared: input.manifest?.gameVersion ?? null,
    loaderVersionDeclared: input.manifest?.loaderVersion ?? (input.loaderMin?.trim() || null),
    platformDeclared: input.manifest?.platform ?? null,
    buildMeta: storedBuildMeta(input.inspection.buildMeta),
    checksStatus: input.inspection.status === 'pending' ? 'pending' : input.inspection.status,
    publishedById: input.publishedById,
    publishedAt: active ? now : null,
  });
  await saveVersionInspection(tx, input.versionId, input.inspection, input.entries, now);

  if (input.dependencies.length > 0) {
    await tx.insert(modDependency).values(
      input.dependencies.map((d) => ({
        modVersionId: input.versionId,
        depManifestId: d.manifestId,
        depModId: d.depModId,
        versionRange: d.versionRange,
        kind: d.kind,
      })),
    );
  }
  const builds = [...new Set(input.testedGameBuildIds)];
  if (builds.length > 0) {
    await tx.execute(sql`
      INSERT INTO "ModVersionCompat" ("modVersionId", "gameBuildId", "authorTested", "updatedAt")
      SELECT ${input.versionId}, g."id", true, now() FROM "GameBuild" g WHERE g."id" = ANY(${sql.param(builds)}::int[])
      ON CONFLICT ("modVersionId", "gameBuildId") DO UPDATE SET "authorTested" = true`);
  }

  if (input.decision.becomesLatest) {
    await tx
      .update(mod)
      .set({
        latestVersion: input.version,
        lastReleasedAt: now,
        updatedAt: now,
        // Builds keep the legacy empty CSV (their BuildShare dependency lives in ModDependency).
        dependencies: input.mod.kind === 'build' ? '' : legacyDependenciesCsv(input.dependencies),
        type: legacyType(input.mod.kind),
        ...(input.manifest?.logColor ? { logColor: input.manifest.logColor } : {}),
        ...(input.mod.kind === 'build' && input.inspection.buildMeta
          ? {
              buildGuid: input.inspection.buildMeta.guid,
              buildShareVersion: input.inspection.buildMeta.buildshareVersion,
              numberOfElements: input.inspection.buildMeta.elements,
            }
          : {}),
      })
      .where(eq(mod.id, input.mod.id));
  }

  if (input.inspection.sha256) {
    await ctx.jobs.enqueue(
      'security.scan',
      { modVersionId: input.versionId, sha256: input.inspection.sha256 },
      { tx, singletonKey: `scan:${input.versionId}` },
    );
  }
  if (active) {
    for (const gameBuildId of builds) {
      await ctx.jobs.enqueue('compat.aggregate', { modVersionId: input.versionId, gameBuildId }, { tx });
    }
  }
  if (active && input.emitVersionEvent !== false) {
    await ctx.jobs.emitNew(
      tx,
      'version.published',
      {
        modId: input.mod.id,
        authorId: input.mod.userId,
        kind: input.mod.kind,
        categorySlug: input.mod.categorySlug,
        versionId: input.versionId,
        version: input.version,
        channel: input.channel,
        notifyFollowers: input.notifyFollowers,
        nsfw: input.mod.nsfw,
      },
      { actorId: input.publishedById },
    );
  }
  await publishCacheInvalidation(tx, [`mod:${input.mod.id}`, `user:${input.mod.userId}`, 'list:mods', 'list:builds']);
}

/**
 * Activates a version held for review (moderation approves it, WP-51): `pending` → `active`,
 * becomes the latest when it is the highest one, legacy `Mod` columns and `version.published`.
 * The caller publishes the file first (`publishVersionFile`) and passes the mod status.
 */
export async function activateVersion(
  ctx: Ctx,
  tx: Transaction,
  versionId: number,
  options: { actorId: number; notifyFollowers?: boolean },
): Promise<{ modId: number; status: ModStatus } | null> {
  const found = await tx.execute<{
    modId: number;
    version: string;
    channel: 'release' | 'beta';
    status: string;
    type: string | null;
    userId: number;
    isNSFW: boolean;
    modStatus: ModStatus;
    categorySlug: string | null;
    manifest: JsonObject | null;
  }>(sql`
    SELECT v."modId", v."version", v."channel", v."status", m."type", m."userId", m."isNSFW", m."status" AS "modStatus",
           c."slug" AS "categorySlug", v."manifest"
      FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" LEFT JOIN "Category" c ON c."id" = m."categoryId"
     WHERE v."id" = ${versionId} FOR UPDATE OF v`);
  const row = found.rows[0];
  if (row?.status !== 'pending') return null;
  const now = ctx.clock.now();
  await tx
    .update(modVersion)
    .set({ status: 'active', statusReason: null, publishedAt: now, updatedAt: now })
    .where(eq(modVersion.id, versionId));
  const kind = row.type === 'Build' ? 'build' : row.type === 'Library' ? 'library' : 'mod';
  const latest = await recomputeLatest(tx, row.modId, kind);
  await tx
    .update(mod)
    .set({ updatedAt: now, ...(latest === row.version ? { lastReleasedAt: now } : {}) })
    .where(eq(mod.id, row.modId));
  await ctx.jobs.emitNew(
    tx,
    'version.published',
    {
      modId: row.modId,
      authorId: row.userId,
      kind,
      categorySlug: row.categorySlug,
      versionId,
      version: row.version,
      channel: row.channel === 'beta' ? 'beta' : 'release',
      notifyFollowers: options.notifyFollowers ?? true,
      nsfw: row.isNSFW,
    },
    { actorId: options.actorId },
  );
  await publishCacheInvalidation(tx, [`mod:${row.modId}`, `user:${row.userId}`, 'list:mods', 'list:builds']);
  return { modId: row.modId, status: row.modStatus };
}
