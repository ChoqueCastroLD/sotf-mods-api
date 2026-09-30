/**
 * Shared reads of the publishing domain: ownership, taxonomy lookups, uniqueness checks,
 * dependency resolution (T0-09) and the uploads a publication consumes.
 */
import { UploadInspectionDTO as UploadInspectionSchema } from '@sotf/contracts/uploads';
import { type Executor, type Mod, mod, type Upload, upload } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import type { PermissionSubject } from '../permissions/can.ts';
import type { FileState } from './preflight.ts';

type UploadInspectionDTO = z.infer<typeof UploadInspectionSchema>;

type Row = Record<string, unknown>;

/** The signed-in actor, or UNAUTHENTICATED. */
export function actorOf(ctx: Ctx) {
  const actor = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  return actor;
}

/** The actor with the account flags `can()` needs (verified creator, trust level). */
export async function subjectOf(ctx: Ctx): Promise<PermissionSubject> {
  const actor = actorOf(ctx);
  const res = await ctx.db.execute<{ verifiedCreator: boolean; trustLevel: number | null }>(
    sql`SELECT "verifiedCreator", "trustLevel" FROM "User" WHERE "id" = ${actor.userId}`,
  );
  const row = res.rows[0];
  if (!row) throw errors.unauthenticated();
  return { ...actor, verifiedCreator: row.verifiedCreator === true, trustLevel: Number(row.trustLevel ?? 0) };
}

/** Throws unless the actor may write content (verified email, not suspended). */
export function assertWriter(ctx: Ctx): void {
  const actor = actorOf(ctx);
  if (!actor.emailVerified) throw new DomainError('EMAIL_NOT_VERIFIED', undefined, 'Verify your email first');
  if (actor.suspendedUntil && actor.suspendedUntil.getTime() > ctx.clock.now().getTime()) {
    throw new DomainError('SUSPENDED', undefined, 'Your account is suspended');
  }
}

/**
 * A mod of the actor (admins may manage any mod). Someone else's mod is FORBIDDEN when it is
 * publicly visible and NOT_FOUND otherwise (its existence is not revealed).
 */
export async function loadOwnedMod(ctx: Ctx, id: number, exec: Executor = ctx.db): Promise<Mod> {
  const actor = actorOf(ctx);
  const [row] = await exec.select().from(mod).where(eq(mod.id, id)).limit(1);
  if (!row) throw errors.notFound('Mod');
  if (row.userId !== actor.userId && actor.role !== 'admin') {
    if (['published', 'unlisted', 'archived'].includes(row.status)) throw errors.forbidden('This is not your mod');
    throw errors.notFound('Mod');
  }
  return row;
}

/** Same as `loadOwnedMod`, locking the row for the rest of the transaction. */
export async function lockOwnedMod(ctx: Ctx, exec: Executor, id: number): Promise<Mod> {
  await exec.execute(sql`SELECT 1 FROM "Mod" WHERE "id" = ${id} FOR UPDATE`);
  return loadOwnedMod(ctx, id, exec);
}

/** "Mod"."type" → publication kind of the contracts. */
export function kindOfType(type: string | null): 'mod' | 'library' | 'build' {
  if (type === 'Build') return 'build';
  if (type === 'Library') return 'library';
  return 'mod';
}

/** True when the mod was authored on the legacy site (never published through v2). */
export async function isLegacyAuthored(exec: Executor, modId: number): Promise<boolean> {
  const res = await exec.execute<{ v2: boolean }>(
    sql`SELECT EXISTS (SELECT 1 FROM "ModVersion" WHERE "modId" = ${modId} AND "publishedById" IS NOT NULL) AS "v2"`,
  );
  return res.rows[0]?.v2 !== true;
}

export interface CategoryMatch {
  id: number;
  slug: string;
}

/** Active category of `slug` for the kind (`Build` categories for builds, `Mod` otherwise). */
export async function findCategory(
  exec: Executor,
  slug: string,
  kind: 'mod' | 'library' | 'build',
): Promise<CategoryMatch | null> {
  const type = kind === 'build' ? 'Build' : 'Mod';
  const res = await exec.execute<{ id: number; slug: string }>(sql`
    SELECT "id", "slug" FROM "Category"
     WHERE ("slug" = ${slug} OR ${slug} = ANY("legacySlugs")) AND "retiredAt" IS NULL
       AND coalesce("type", 'Mod') = ${type}
     ORDER BY ("slug" = ${slug}) DESC, "id" LIMIT 1`);
  return res.rows[0] ?? null;
}

/** Tags by slug; `unknown` lists the slugs that do not exist. */
export async function findTags(
  exec: Executor,
  slugs: readonly string[],
): Promise<{ ids: number[]; unknown: string[] }> {
  const wanted = [...new Set(slugs.map((s) => s.trim().toLowerCase()).filter(Boolean))];
  if (wanted.length === 0) return { ids: [], unknown: [] };
  const res = await exec.execute<{ id: number; slug: string }>(
    sql`SELECT "id", "slug" FROM "Tag" WHERE "slug" = ANY(${wanted}::text[])`,
  );
  const found = new Map(res.rows.map((r) => [r.slug, r.id]));
  return {
    ids: wanted.map((s) => found.get(s)).filter((id): id is number => id !== undefined),
    unknown: wanted.filter((s) => !found.has(s)),
  };
}

export async function slugTaken(exec: Executor, userId: number, slug: string, exceptModId?: number): Promise<boolean> {
  const res = await exec.execute<{ n: number }>(sql`
    SELECT count(*)::int AS "n" FROM "Mod"
     WHERE "userId" = ${userId} AND lower("slug") = lower(${slug}) AND (${exceptModId ?? null}::int IS NULL OR "id" <> ${exceptModId ?? null})`);
  return Number(res.rows[0]?.n ?? 0) > 0;
}

export async function manifestIdTaken(exec: Executor, manifestId: string): Promise<boolean> {
  const res = await exec.execute<{ n: number }>(
    sql`SELECT count(*)::int AS "n" FROM "Mod" WHERE "mod_id" = ${manifestId}`,
  );
  return Number(res.rows[0]?.n ?? 0) > 0;
}

/** Versions already in a mod (any status but `rejected`). */
export async function existingVersions(exec: Executor, modId: number): Promise<string[]> {
  const res = await exec.execute<{ version: string }>(
    sql`SELECT "version" FROM "ModVersion" WHERE "modId" = ${modId} AND "status" <> 'rejected'`,
  );
  return res.rows.map((r) => r.version);
}

export interface ResolvedDependency {
  manifestId: string;
  kind: 'required' | 'optional' | 'conflicts';
  versionRange: string | null;
  depModId: number | null;
}

/**
 * Merges the manifest's dependencies (required) with the ones declared in the wizard (which may
 * change the kind or add optional/conflicting ones) and links each to the mod on the site.
 */
export async function resolveDependencies(
  exec: Executor,
  selfManifestId: string,
  manifestDeps: readonly string[],
  declared: ReadonlyArray<{ manifestId: string; kind?: ResolvedDependency['kind']; versionRange?: string | null }>,
): Promise<ResolvedDependency[]> {
  const merged = new Map<string, ResolvedDependency>();
  for (const id of manifestDeps) {
    if (id !== selfManifestId) merged.set(id, { manifestId: id, kind: 'required', versionRange: null, depModId: null });
  }
  for (const d of declared) {
    const id = d.manifestId.trim();
    if (!id || id === selfManifestId) continue;
    merged.set(id, {
      manifestId: id,
      kind: d.kind ?? 'required',
      versionRange: d.versionRange?.trim() || null,
      depModId: null,
    });
  }
  const ids = [...merged.keys()];
  if (ids.length === 0) return [];
  const res = await exec.execute<{ id: number; manifestId: string }>(sql`
    SELECT "id", "mod_id" AS "manifestId" FROM "Mod"
     WHERE "mod_id" = ANY(${ids}::text[]) AND "status" NOT IN ('rejected')`);
  for (const r of res.rows) {
    const dep = merged.get(r.manifestId);
    if (dep) dep.depModId = r.id;
  }
  return [...merged.values()];
}

/** Required dependencies that would create a cycle back to `selfManifestId` (via latest versions). */
export async function dependencyCycles(
  exec: Executor,
  selfManifestId: string,
  deps: readonly ResolvedDependency[],
): Promise<string[]> {
  const direct = deps.filter((d) => d.kind === 'required').map((d) => d.manifestId);
  if (direct.length === 0) return [];
  const res = await exec.execute<{ origin: string }>(sql`
    WITH RECURSIVE walk("origin", "manifest", "depth") AS (
      SELECT o, o, 1 FROM unnest(${direct}::text[]) AS o
      UNION
      SELECT w."origin", d."depManifestId", w."depth" + 1
        FROM walk w
        JOIN "Mod" m ON m."mod_id" = w."manifest"
        JOIN "ModVersion" v ON v."modId" = m."id" AND v."isLatest"
        JOIN "ModDependency" d ON d."modVersionId" = v."id" AND d."kind" = 'required'
       WHERE w."depth" < 25
    )
    SELECT DISTINCT "origin" FROM walk WHERE "manifest" = ${selfManifestId}`);
  return res.rows.map((r) => r.origin).sort();
}

// -----------------------------------------------------------------------------------------------
// Uploads consumed by a publication
// -----------------------------------------------------------------------------------------------

export interface FileUpload {
  row: Upload;
  inspection: UploadInspectionDTO | null;
  state: FileState;
}

interface Ref {
  inspection?: unknown;
  mediaId?: string;
  final?: { bucket: string; key: string };
  quarantine?: { key: string };
  buildThumbnail?: { mediaId: string | null };
}

export function uploadRef(row: Pick<Upload, 'resultRef'>): Ref {
  return (row.resultRef ?? {}) as Ref;
}

export function fileStateOf(row: Upload | null, inspection: UploadInspectionDTO | null, now: Date): FileState {
  if (!row) return 'missing';
  if (row.status === 'rejected' || inspection?.status === 'failed') return 'failed';
  const ref = uploadRef(row);
  if (!ref.final && !ref.quarantine && (row.status === 'expired' || row.expiresAt.getTime() <= now.getTime())) {
    return 'expired';
  }
  if (!inspection || inspection.status === 'pending') return 'pending';
  return inspection.status;
}

/** A file upload of the actor for `purpose` (null when absent or someone else's). */
export async function loadFileUpload(
  ctx: Ctx,
  uploadId: string | undefined,
  purpose: 'mod_file' | 'build_file',
  exec: Executor = ctx.db,
): Promise<FileUpload | null> {
  if (!uploadId) return null;
  const actor = actorOf(ctx);
  const [row] = await exec.select().from(upload).where(eq(upload.id, uploadId)).limit(1);
  if (!row || row.userId !== actor.userId || row.purpose !== purpose) return null;
  const parsed = UploadInspectionSchema.safeParse(uploadRef(row).inspection);
  const inspection = parsed.success ? parsed.data : null;
  return { row, inspection, state: fileStateOf(row, inspection, ctx.clock.now()) };
}

export interface MediaFacts {
  id: string;
  status: 'pending' | 'ready' | 'failed';
  ownerId: number | null;
  sourceBucket: string;
  sourceKey: string;
}

/** Media rows by id. */
export async function loadMedia(exec: Executor, ids: readonly string[]): Promise<Map<string, MediaFacts>> {
  const unique = [...new Set(ids)];
  if (unique.length === 0) return new Map();
  const res = await exec.execute<Row>(sql`
    SELECT "id", "status", "ownerId", "sourceBucket", "sourceKey" FROM "Media" WHERE "id" = ANY(${unique}::uuid[])`);
  return new Map(
    res.rows.map((r) => [
      String(r.id),
      {
        id: String(r.id),
        status: r.status as MediaFacts['status'],
        ownerId: r.ownerId === null ? null : Number(r.ownerId),
        sourceBucket: String(r.sourceBucket),
        sourceKey: String(r.sourceKey),
      },
    ]),
  );
}

/** Media id of an image upload of the actor (null when absent, not an image or someone else's). */
export async function mediaIdOfUpload(ctx: Ctx, uploadId: string, exec: Executor = ctx.db): Promise<string | null> {
  const actor = actorOf(ctx);
  const [row] = await exec.select().from(upload).where(eq(upload.id, uploadId)).limit(1);
  if (!row || row.userId !== actor.userId) return null;
  return uploadRef(row).mediaId ?? null;
}
