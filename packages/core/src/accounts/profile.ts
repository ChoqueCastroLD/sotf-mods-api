/**
 * `GET|PATCH /me/profile` (PLAN §5.2, §6.10): the owner reads (with the bio source) and edits the
 * public profile.
 *
 * - `displayName`, `bioMd` (≤ 500, blank → null) and `links` (≤ 7, `{ kind, url, label }`).
 * - `avatarUploadId` / `bannerUploadId`: an own upload of purpose `avatar` / `banner` that was
 *   completed (`POST /uploads/:id/complete` created its "Media" row, `resultRef.mediaId`); the
 *   media may still be processing (the profile shows it once `media.process` marks it ready).
 *   `null` removes the avatar (also the legacy `imageUrl`) or returns to the generated banner.
 * - `bannerSeed`: seed of the generated banner.
 * - `pinnedModIds`: up to 3 distinct own published mods, in the given order.
 *
 * The write emits `user.profile_updated` (cache tag `user:{id}`, one-time XP when the profile
 * becomes complete) in the same transaction and evicts the process LRU of the user at once so the
 * response (built by the catalog's `getUserProfile`) reflects the change.
 */

import type { SelfProfileDTO, UpdateProfileBody } from '@sotf/contracts/me';
import { type Executor, media, type User, type UserLink, upload, user } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { findUserById } from '../auth/users.ts';
import { type CatalogConfig, getUserProfile } from '../catalog/index.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';

type ProfilePatch = z.infer<typeof UpdateProfileBody>;
type ImagePurpose = 'avatar' | 'banner';

/**
 * A profile counts as complete (one-time XP, PLAN §8 "Perfil completo") with an avatar, a bio and
 * at least one link.
 */
export function isProfileComplete(row: Pick<User, 'avatarMediaId' | 'imageUrl' | 'bioMd' | 'links'>): boolean {
  const hasAvatar = row.avatarMediaId !== null || /^https:\/\//.test((row.imageUrl ?? '').trim());
  const hasBio = (row.bioMd ?? '').trim().length > 0;
  return hasAvatar && hasBio && (row.links ?? []).length > 0;
}

/** Media id of an own, completed image upload of the given purpose (NOT_FOUND otherwise). */
async function mediaOfUpload(tx: Executor, userId: number, uploadId: string, purpose: ImagePurpose): Promise<string> {
  const [found] = await tx
    .select({ status: upload.status, purpose: upload.purpose, resultRef: upload.resultRef })
    .from(upload)
    .where(and(eq(upload.id, uploadId), eq(upload.userId, userId)));
  // Someone else's upload is indistinguishable from a missing one.
  if (!found) throw errors.notFound('Upload');
  const field = purpose === 'avatar' ? 'avatarUploadId' : 'bannerUploadId';
  if (found.purpose !== purpose) {
    throw errors.validation(`This upload is not a ${purpose} image`, [
      { path: field, code: 'invalid', message: `expected an upload of purpose ${purpose}` },
    ]);
  }
  const mediaId = typeof found.resultRef?.mediaId === 'string' ? found.resultRef.mediaId : null;
  if ((found.status !== 'processing' && found.status !== 'ready') || !mediaId) {
    throw errors.validation('Finish the upload before using it', [
      { path: field, code: 'invalid', message: 'the upload is not complete' },
    ]);
  }
  const [image] = await tx
    .select({ status: media.status })
    .from(media)
    .where(and(eq(media.id, mediaId), eq(media.ownerId, userId), eq(media.purpose, purpose)));
  if (!image) throw errors.notFound('Upload');
  if (image.status === 'failed') {
    throw errors.validation('This image could not be processed', [
      { path: field, code: 'invalid', message: 'the image failed processing' },
    ]);
  }
  return mediaId;
}

/** Distinct ids, all own published mods (VALIDATION_FAILED otherwise). */
async function checkPinned(tx: Executor, userId: number, ids: readonly number[]): Promise<number[]> {
  const unique = [...new Set(ids)];
  if (unique.length !== ids.length) {
    throw errors.validation('Pinned mods must be distinct', [
      { path: 'pinnedModIds', code: 'duplicate', message: 'a mod is pinned twice' },
    ]);
  }
  if (unique.length === 0) return [];
  const result = await tx.execute<{ id: number }>(sql`
    SELECT m."id" FROM "Mod" m
     WHERE m."id" IN (${sql.join(
       unique.map((id) => sql`${id}`),
       sql`, `,
     )}) AND m."userId" = ${userId} AND m."status" = 'published'`);
  const owned = new Set(result.rows.map((r) => Number(r.id)));
  const invalid = unique.filter((id) => !owned.has(id));
  if (invalid.length > 0) {
    throw errors.validation('Only your own published mods can be pinned', [
      { path: 'pinnedModIds', code: 'invalid', message: `not pinnable: ${invalid.join(', ')}` },
    ]);
  }
  return unique;
}

/** `PATCH /me/profile`: applies the patch and returns the refreshed own profile. */
export async function updateProfile(
  ctx: Ctx,
  config: CatalogConfig,
  userId: number,
  patch: ProfilePatch,
): Promise<z.infer<typeof SelfProfileDTO>> {
  const current = await findUserById(ctx.db, userId);
  if (!current || current.deletedAt) throw errors.unauthenticated();

  const updated = await ctx.db.transaction(async (tx) => {
    const changes: Partial<User> = {};
    if (patch.displayName !== undefined) changes.displayName = patch.displayName;
    if (patch.bioMd !== undefined) {
      const bio = patch.bioMd?.normalize('NFC').trim() ?? '';
      changes.bioMd = bio.length > 0 ? bio : null;
    }
    if (patch.links !== undefined) {
      changes.links = patch.links.map((link) => {
        const label = link.label?.trim();
        return { kind: link.kind, url: link.url, ...(label ? { label } : {}) } as UserLink;
      });
    }
    if (patch.avatarUploadId !== undefined) {
      if (patch.avatarUploadId === null) {
        changes.avatarMediaId = null;
        changes.imageUrl = '';
      } else {
        changes.avatarMediaId = await mediaOfUpload(tx, userId, patch.avatarUploadId, 'avatar');
      }
    }
    if (patch.bannerUploadId !== undefined) {
      changes.bannerMediaId =
        patch.bannerUploadId === null ? null : await mediaOfUpload(tx, userId, patch.bannerUploadId, 'banner');
    }
    if (patch.bannerSeed !== undefined) changes.bannerSeed = patch.bannerSeed;
    if (patch.pinnedModIds !== undefined) changes.pinnedModIds = await checkPinned(tx, userId, patch.pinnedModIds);

    if (Object.keys(changes).length === 0) return current;
    const [row] = await tx
      .update(user)
      .set({ ...changes, updatedAt: ctx.clock.now() })
      .where(eq(user.id, userId))
      .returning();
    if (!row) throw errors.unauthenticated();
    await ctx.jobs.emitNew(
      tx,
      'user.profile_updated',
      { userId, completed: isProfileComplete(row) },
      { actorId: userId },
    );
    return row;
  });

  if (updated !== current) ctx.caches?.invalidate([`user:${userId}`]);
  const profile = await getUserProfile(ctx, config, updated.slug);
  return { ...profile, bioMd: updated.bioMd };
}

/** `GET /me/profile`: the own profile with the Markdown source of the bio. */
export async function getOwnProfile(
  ctx: Ctx,
  config: CatalogConfig,
  userId: number,
): Promise<z.infer<typeof SelfProfileDTO>> {
  const current = await findUserById(ctx.db, userId);
  if (!current || current.deletedAt) throw errors.unauthenticated();
  const profile = await getUserProfile(ctx, config, current.slug);
  return { ...profile, bioMd: current.bioMd };
}
