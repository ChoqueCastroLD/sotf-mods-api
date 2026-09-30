/**
 * Publication (PLAN §2.8 step 4, §5.2, §7.4 "Política de publicación", T0-04, T0-09, T0-19,
 * T0-24): a draft becomes a `"Mod"` + its first `"ModVersion"`, and `POST /studio/mods/:id/versions`
 * (or a new-version draft) adds a version.
 *
 * Order of operations, so that a retry after any failure converges:
 *
 * 1. Everything is validated first (preflight of the draft, mod-relative checks of the file).
 * 2. The ids of the new rows are reserved from their sequences and remembered in the upload
 *    (`resultRef.reserved`): the final object key contains them, so a retry reuses the same key.
 * 3. Files that passed the checks are copied to their final public key (`publishVersionFile`,
 *    idempotent per key). Flagged files stay in `quarantine/` until a moderator approves them.
 * 4. One transaction writes the mod, the version and every side effect (legacy columns, tags,
 *    media, dependencies, inspection, compat, jobs, events, cache invalidation) and deletes the
 *    draft. Unique violations (slug, manifest id) become CONFLICT.
 */

import { modPath } from '@sotf/contracts/seo';
import type { SubmitResultDTO } from '@sotf/contracts/studio';
import type { UploadInspectionDTO as UploadInspectionSchema } from '@sotf/contracts/uploads';
import { type JsonObject, mod, modDraft, upload } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { checkAgainstMod } from '../inspection/checks.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';
import { publishLaneCounts } from '../moderation/lanes.ts';
import { can } from '../permissions/can.ts';
import { audit, evictLocal, modRouting, modTags, type PublishingDeps } from './context.ts';
import { evaluateDraft, loadOwnDraft } from './drafts.ts';
import { publishVersionFile, type VersionFileTarget, versionFile } from './files.ts';
import { writeMediaSet } from './gallery.ts';
import { legacyModSide, legacyMultiplayer } from './legacy.ts';
import { resolveListing, setModTags, storedListingFacts } from './listing.ts';
import { decidePublication, PublicationRefused } from './policy.ts';
import { preflightPasses, qualityScore } from './preflight.ts';
import {
  actorOf,
  assertWriter,
  descriptionFormatOf,
  existingVersions,
  type FileUpload,
  isAcceptedCoAuthor,
  kindOfType,
  loadFileUpload,
  loadManagedMod,
  lockManagedMod,
  persistDescriptionFormat,
  type ResolvedDependency,
  resolveDependencies,
  subjectOf,
  uploadRef,
} from './queries.ts';
import { BUILDSHARE_MANIFEST_ID, legacyType, reserveId, writeVersion } from './release.ts';

/** Lanes a submission can enter (held for review, or published into the post-review lanes). */
const REVIEW_LANES = ['new_mods', 'versions', 'post_review', 'builds'] as const;

type UploadInspectionDTO = z.infer<typeof UploadInspectionSchema>;

// -----------------------------------------------------------------------------------------------
// Shared checks
// -----------------------------------------------------------------------------------------------

/** Publishing needs a verified, unsuspended account without an active ban or upload mute. */
export async function assertCanPublish(ctx: Ctx): Promise<Awaited<ReturnType<typeof subjectOf>>> {
  assertWriter(ctx);
  const subject = await subjectOf(ctx);
  if (!can(subject, 'mod.publish', undefined, ctx.clock.now())) throw errors.forbidden('You cannot publish');
  const now = ctx.clock.now();
  const res = await ctx.db.execute<{ kind: string }>(sql`
    SELECT "kind" FROM "UserSanction"
     WHERE "userId" = ${subject.userId} AND "kind" IN ('ban', 'upload_mute') AND "revokedAt" IS NULL
       AND "startsAt" <= ${now} AND ("endsAt" IS NULL OR "endsAt" > ${now})
     LIMIT 1`);
  if (res.rows[0]) throw new DomainError('FORBIDDEN', undefined, 'Publishing is disabled for your account');
  return subject;
}

function fileError(code: string, message: string): DomainError {
  return errors.validation(message, [{ path: 'uploadId', code, message }]);
}

/** The file must be inspected and not failed. */
function usableFile(file: FileUpload | null): {
  file: FileUpload;
  inspection: UploadInspectionDTO;
  checks: 'passed' | 'flagged';
} {
  if (!file) throw fileError('file_missing', 'Upload the file first');
  switch (file.state) {
    case 'passed':
    case 'flagged':
      if (!file.inspection) throw fileError('file_inspecting', 'The file is still being checked');
      return { file, inspection: file.inspection, checks: file.state };
    case 'pending':
      throw fileError('file_inspecting', 'The file is still being checked');
    case 'expired':
      throw fileError('file_expired', 'The upload expired; upload the file again');
    default:
      throw fileError('file_failed', 'The file did not pass the automatic checks');
  }
}

interface Reserved {
  modId?: number;
  versionId: number;
}

/**
 * Ids of the rows a publication will insert, remembered in the upload so that a retry (after a
 * failure between the file copy and the commit) targets the same final key.
 */
async function reserveIds(ctx: Ctx, file: FileUpload, needMod: boolean): Promise<Reserved> {
  const ref = uploadRef(file.row) as { reserved?: Reserved };
  const previous = ref.reserved;
  if (previous && (!needMod || previous.modId)) {
    const used = await ctx.db.execute<{ n: number }>(sql`
      SELECT (SELECT count(*) FROM "ModVersion" WHERE "id" = ${previous.versionId})::int
           + (SELECT count(*) FROM "Mod" WHERE "id" = ${previous.modId ?? 0})::int AS "n"`);
    if (Number(used.rows[0]?.n ?? 0) === 0) return previous;
  }
  const reserved: Reserved = {
    ...(needMod ? { modId: await reserveId(ctx.db, 'Mod') } : {}),
    versionId: await reserveId(ctx.db, 'ModVersion'),
  };
  await ctx.db
    .update(upload)
    .set({ resultRef: JSON.parse(JSON.stringify({ ...uploadRef(file.row), reserved })) as JsonObject })
    .where(eq(upload.id, file.row.id));
  return reserved;
}

function isUniqueViolation(error: unknown, constraint?: string): boolean {
  const e = error as { code?: string; constraint?: string; cause?: { code?: string; constraint?: string } };
  const code = e?.code ?? e?.cause?.code;
  const name = e?.constraint ?? e?.cause?.constraint;
  return code === '23505' && (constraint === undefined || name === constraint);
}

function conflictOf(error: unknown): DomainError | null {
  if (isUniqueViolation(error, 'Mod_slug_userId_key')) return errors.conflict('You already have a mod with this slug');
  if (isUniqueViolation(error, 'Mod_mod_id_key')) return errors.conflict('A mod with this manifest id already exists');
  if (isUniqueViolation(error, 'ModVersion_modId_latest_key')) {
    return errors.conflict('Another version was published at the same time; try again');
  }
  return null;
}

async function userHandle(ctx: Ctx, userId: number): Promise<string> {
  const res = await ctx.db.execute<{ slug: string }>(sql`SELECT "slug" FROM "User" WHERE "id" = ${userId}`);
  return res.rows[0]?.slug ?? '';
}

// -----------------------------------------------------------------------------------------------
// New mod or build (draft submission)
// -----------------------------------------------------------------------------------------------

/** `POST /drafts/:id/submit`. */
export async function submitDraft(ctx: Ctx, deps: PublishingDeps, draftId: string): Promise<SubmitResultDTO> {
  const subject = await assertCanPublish(ctx);
  const draft = await loadOwnDraft(ctx, draftId);
  const evaluation = await evaluateDraft(ctx, draft);
  const blocking = evaluation.preflight.filter((row) => row.severity === 'error');
  if (!preflightPasses(evaluation.preflight)) {
    throw errors.validation(
      'The draft is not ready to be published',
      blocking.map((row) => ({ path: row.field, code: row.code, message: row.code })),
    );
  }

  if (evaluation.kind === 'version') {
    if (!evaluation.target) throw errors.notFound('Mod');
    const data = evaluation.data;
    const result = await releaseVersion(ctx, deps, evaluation.target.id, {
      uploadId: data.fileUploadId ?? '',
      changelogMd: data.version?.changelogMd ?? '',
      channel: data.version?.channel ?? 'release',
      testedGameBuildIds: data.testedGameBuildIds ?? [],
      notifyFollowers: data.version?.notifyFollowers ?? true,
      declaredDependencies: data.dependencies ?? null,
      draftId: draft.id,
      loaderMin: data.loaderMin ?? null,
    });
    return result.submit;
  }

  const data = evaluation.data;
  const { file, inspection, checks } = usableFile(evaluation.file);
  const kind = evaluation.publicationKind;
  const manifest = inspection.manifest;
  const buildMeta = inspection.buildMeta;
  if (kind === 'build' ? !buildMeta : !manifest) throw fileError('file_failed', 'The file has no valid manifest');
  const manifestId = evaluation.manifestId;
  const slug = evaluation.slug;
  const name = (data.name ?? manifest?.name ?? '').trim();
  if (!manifestId || !slug || name.length < 2) {
    throw errors.validation('The listing is incomplete', [
      { path: 'name', code: 'name_missing', message: 'name_missing' },
    ]);
  }
  const version = kind === 'build' ? newId() : (manifest?.version ?? '');
  const actor = actorOf(ctx);
  const now = ctx.clock.now();

  const decision = decidePublication({
    kind,
    modStatus: null,
    checks,
    canSkipReview: can(subject, 'mod.publish_without_review', undefined, now),
  });
  const reserved = await reserveIds(ctx, file, true);
  const modId = reserved.modId as number;
  const target: VersionFileTarget = { modId, versionId: reserved.versionId, modName: name, version, kind };
  const storage = deps.storage;
  if (!storage) throw errors.unavailable('File storage is not configured');
  const final = versionFile(target);
  let size = file.row.declaredBytes;
  if (decision.publishFile) size = (await publishVersionFile(ctx, storage, file.row.id, target)).size;

  const listing = await resolveListing(
    ctx.db,
    {
      name,
      shortDescription: data.shortDescription ?? manifest?.description?.slice(0, 200) ?? '',
      descriptionMd: data.descriptionMd ?? '',
      categorySlug: data.categorySlug,
      tagSlugs: data.tagSlugs ?? [],
      license: data.license ?? null,
      sourceUrl: data.sourceUrl ?? null,
      supportLinks: data.supportLinks ?? [],
      videoUrl: data.videoUrl ?? null,
      nsfw: data.nsfw ?? false,
      contentLang: data.contentLang ?? null,
      platform: data.platform ?? manifest?.platform ?? null,
      multiplayerRole: data.multiplayerRole ?? null,
      dedicatedServer: data.dedicatedServer ?? null,
      safeToRemove: data.safeToRemove ?? null,
      originalAuthor: data.originalAuthor ?? null,
    },
    { kind, legacy: false, now },
  );
  const published = decision.modStatus === 'published';
  const handle = await userHandle(ctx, actor.userId);

  try {
    await ctx.db.transaction(async (tx) => {
      await tx.insert(mod).values({
        id: modId,
        name,
        slug,
        manifestId,
        description: '',
        dependencies: '',
        type: legacyType(kind),
        isNSFW: data.nsfw ?? false,
        isApproved: published,
        isFeatured: false,
        userId: actor.userId,
        status: decision.modStatus,
        statusChangedAt: now,
        publishedAt: published ? now : null,
        canonicalSlug: slug,
        latestVersion: version,
        lastReleasedAt: now,
        createdAt: now,
        updatedAt: now,
        modSide: legacyModSide(data.platform ?? manifest?.platform ?? null),
        ...legacyMultiplayer(data.multiplayerRole ?? null),
        ...listing.columns,
        editedAt: null,
      });
      if (listing.tagIds) await setModTags(tx, modId, listing.tagIds);
      await writeMediaSet(
        tx,
        modId,
        {
          thumbnailMediaId: evaluation.thumbnailMediaId,
          gallery: evaluation.gallery.map((g, position) => ({ ...g, position })),
        },
        { mediaBaseUrl: deps.config.mediaBaseUrl, publicBucket: deps.config.publicBucket, actorId: actor.userId },
      );
      const dependencies: ResolvedDependency[] = await resolveDependencies(
        tx,
        manifestId,
        kind === 'build' ? [BUILDSHARE_MANIFEST_ID] : (manifest?.dependencies ?? []),
        data.dependencies ?? [],
      );
      await writeVersion(ctx, tx, {
        mod: {
          id: modId,
          name,
          manifestId,
          kind,
          userId: actor.userId,
          nsfw: data.nsfw ?? false,
          categorySlug: data.categorySlug ?? null,
        },
        versionId: reserved.versionId,
        version,
        decision,
        file: final,
        publicUrl: storage.publicUrl(final.key),
        size,
        inspection,
        entries: null,
        manifest,
        changelogMd: data.version?.changelogMd ?? '',
        channel: data.version?.channel ?? 'release',
        dependencies,
        testedGameBuildIds: data.testedGameBuildIds ?? [],
        notifyFollowers: false,
        publishedById: actor.userId,
        emitVersionEvent: false,
        loaderMin: data.loaderMin ?? null,
      });
      const facts = await storedListingFacts(tx, modId, kind === 'build' ? 'build' : 'mod');
      await tx
        .update(mod)
        .set({ qualityScore: qualityScore(facts) })
        .where(eq(mod.id, modId));
      if (published) {
        await ctx.jobs.emitNew(
          tx,
          'mod.published',
          { modId, authorId: actor.userId, kind, categorySlug: data.categorySlug ?? null, nsfw: data.nsfw ?? false },
          { actorId: actor.userId },
        );
      }
      // The rangers see the new item (or the auto-published one in post-review) at once.
      await publishLaneCounts(tx, ctx.clock.now(), REVIEW_LANES);
      await audit(ctx, tx, {
        action: 'mod.submit',
        targetType: 'mod',
        targetId: modId,
        after: { status: decision.modStatus, versionId: reserved.versionId, version, checks },
      });
      await tx.delete(modDraft).where(eq(modDraft.id, draft.id));
    });
  } catch (error) {
    throw conflictOf(error) ?? error;
  }
  evictLocal(ctx, modTags(modId, actor.userId, kind));
  ctx.log.info({ modId, versionId: reserved.versionId, status: decision.modStatus, kind }, 'mod submitted');
  return {
    modId,
    versionId: reserved.versionId,
    status: decision.modStatus,
    canonicalPath: modPath(kind, handle, slug),
  };
}

// -----------------------------------------------------------------------------------------------
// New version of an existing mod
// -----------------------------------------------------------------------------------------------

export interface ReleaseVersionInput {
  uploadId: string;
  changelogMd: string;
  channel: 'release' | 'beta';
  testedGameBuildIds: readonly number[];
  notifyFollowers: boolean;
  /** Dependencies declared in the wizard (null: keep the optional/conflicting ones of the latest). */
  declaredDependencies?: ReadonlyArray<{
    manifestId: string;
    kind?: 'required' | 'optional' | 'conflicts' | undefined;
    versionRange?: string | null | undefined;
  }> | null;
  /** Draft deleted in the same transaction (new-version drafts). */
  draftId?: string;
  /** Minimum loader of the wizard (`DraftData.loaderMin`), when the manifest declares none. */
  loaderMin?: string | null;
}

/** Declared (non-required) dependencies of the current latest version, carried to the next one. */
async function carriedDependencies(
  ctx: Ctx,
  modId: number,
): Promise<Array<{ manifestId: string; kind: 'required' | 'optional' | 'conflicts'; versionRange: string | null }>> {
  const res = await ctx.db.execute<{
    depManifestId: string;
    kind: 'required' | 'optional' | 'conflicts';
    versionRange: string | null;
  }>(sql`
    SELECT d."depManifestId", d."kind", d."versionRange" FROM "ModDependency" d
      JOIN "ModVersion" v ON v."id" = d."modVersionId"
     WHERE v."modId" = ${modId} AND v."isLatest"
     ORDER BY d."id"`);
  return res.rows
    .filter((r) => r.kind !== 'required' || r.versionRange !== null)
    .map((r) => ({ manifestId: r.depManifestId, kind: r.kind, versionRange: r.versionRange }));
}

/** `POST /studio/mods/:id/versions` (and new-version drafts). */
export async function releaseVersion(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
  input: ReleaseVersionInput,
): Promise<{ versionId: number; submit: SubmitResultDTO }> {
  const subject = await assertCanPublish(ctx);
  const actor = actorOf(ctx);
  const current = await loadManagedMod(ctx, modId);
  // A co-author (accepted invitation) releases versions with the owner's rights over the mod.
  const publisherOf = (await isAcceptedCoAuthor(ctx.db, current.id, actor.userId)) ? actor.userId : current.userId;
  if (!can(subject, 'version.publish', { ownerId: publisherOf }, ctx.clock.now()) && subject.role !== 'admin') {
    throw errors.forbidden('This is not your mod');
  }
  if (current.status === 'removed') throw errors.forbidden('A removed mod cannot receive new versions');
  const storedKind = kindOfType(current.type);
  const isBuild = storedKind === 'build';
  const { file, inspection, checks } = usableFile(
    await loadFileUpload(ctx, input.uploadId, isBuild ? 'build_file' : 'mod_file'),
  );
  const manifest = inspection.manifest;
  if (!isBuild && !manifest) throw fileError('manifest_missing', 'The file has no valid manifest');
  if (isBuild && !inspection.buildMeta) throw fileError('blueprint_invalid', 'The file is not a valid blueprint');
  const kind: 'mod' | 'library' | 'build' = isBuild ? 'build' : manifest?.type === 'Library' ? 'library' : 'mod';

  if (manifest) {
    const problems = checkAgainstMod(manifest, {
      manifestId: current.manifestId,
      existingVersions: await existingVersions(ctx.db, current.id),
    });
    if (problems.length > 0) {
      throw errors.validation(
        problems[0]?.detail ?? 'The file does not match this mod',
        problems.map((p) => ({ path: 'uploadId', code: p.code, message: p.detail ?? p.code })),
      );
    }
  }
  const version = isBuild ? newId() : (manifest?.version ?? '');
  let decision: ReturnType<typeof decidePublication>;
  try {
    decision = decidePublication({
      kind,
      modStatus: current.status,
      checks,
      canSkipReview: can(subject, 'mod.publish_without_review', undefined, ctx.clock.now()),
    });
  } catch (error) {
    if (error instanceof PublicationRefused) throw errors.forbidden(error.message);
    throw error;
  }

  const storage = deps.storage;
  if (!storage) throw errors.unavailable('File storage is not configured');
  const reserved = await reserveIds(ctx, file, false);
  const target: VersionFileTarget = {
    modId: current.id,
    versionId: reserved.versionId,
    modName: current.name,
    version,
    kind,
  };
  const final = versionFile(target);
  let size = file.row.declaredBytes;
  if (decision.publishFile) size = (await publishVersionFile(ctx, storage, file.row.id, target)).size;
  const declared = input.declaredDependencies ?? (await carriedDependencies(ctx, current.id));
  const routing = await modRouting(ctx.db, current.id);
  // Inferred before the first v2 version exists, so publishing one never flips an old layout.
  const descriptionFormat = await descriptionFormatOf(ctx.db, current.id);
  const now = ctx.clock.now();

  try {
    await ctx.db.transaction(async (tx) => {
      const locked = await lockManagedMod(ctx, tx, current.id);
      if (locked.status !== current.status) throw errors.conflict('The mod changed meanwhile; try again');
      await persistDescriptionFormat(tx, locked.id, descriptionFormat);
      if (manifest) {
        const again = checkAgainstMod(manifest, {
          manifestId: locked.manifestId,
          existingVersions: await existingVersions(tx, locked.id),
        });
        if (again.length > 0) throw errors.conflict(again[0]?.detail ?? 'This version already exists');
      }
      const dependencies = await resolveDependencies(
        tx,
        locked.manifestId,
        isBuild ? [BUILDSHARE_MANIFEST_ID] : (manifest?.dependencies ?? []),
        declared,
      );
      await writeVersion(ctx, tx, {
        mod: {
          id: locked.id,
          name: locked.name,
          manifestId: locked.manifestId,
          kind,
          userId: locked.userId ?? actor.userId,
          nsfw: locked.isNSFW,
          categorySlug: routing.categorySlug,
        },
        versionId: reserved.versionId,
        version,
        decision,
        file: final,
        publicUrl: storage.publicUrl(final.key),
        size,
        inspection,
        entries: null,
        manifest,
        changelogMd: input.changelogMd,
        channel: input.channel,
        dependencies,
        testedGameBuildIds: input.testedGameBuildIds,
        notifyFollowers: input.notifyFollowers,
        publishedById: actor.userId,
        emitVersionEvent: locked.status === 'published' || locked.status === 'unlisted' || locked.status === 'archived',
        loaderMin: input.loaderMin ?? null,
      });
      if (decision.modStatus !== locked.status) {
        // A new version of a rejected mod is a resubmission (rejected → pending).
        await tx
          .update(mod)
          .set({ status: decision.modStatus, statusReason: null, statusChangedAt: now })
          .where(eq(mod.id, locked.id));
        await ctx.jobs.emitNew(
          tx,
          'mod.status_changed',
          {
            modId: locked.id,
            authorId: routing.authorId,
            kind,
            categorySlug: routing.categorySlug,
            from: locked.status,
            to: decision.modStatus,
            reason: null,
            templateKey: null,
          },
          { actorId: actor.userId },
        );
      }
      await publishLaneCounts(tx, ctx.clock.now(), REVIEW_LANES);
      await audit(ctx, tx, {
        action: 'version.submit',
        targetType: 'version',
        targetId: reserved.versionId,
        before: { modStatus: locked.status },
        after: { modId: locked.id, version, status: decision.versionStatus, checks, modStatus: decision.modStatus },
      });
      if (input.draftId) await tx.delete(modDraft).where(eq(modDraft.id, input.draftId));
    });
  } catch (error) {
    throw conflictOf(error) ?? error;
  }
  evictLocal(ctx, modTags(current.id, current.userId, kind));
  ctx.log.info(
    { modId: current.id, versionId: reserved.versionId, status: decision.versionStatus, checks },
    'version submitted',
  );
  const handle = await userHandle(ctx, current.userId ?? actor.userId);
  return {
    versionId: reserved.versionId,
    submit: {
      modId: current.id,
      versionId: reserved.versionId,
      status: decision.modStatus,
      canonicalPath: modPath(kind, handle, current.slug),
    },
  };
}
