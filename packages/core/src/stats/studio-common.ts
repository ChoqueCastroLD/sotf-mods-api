/**
 * Shared pieces of the creator endpoints (Basecamp overview, analytics, CSV and inbox): scope of
 * "my mods", mod and user references, the listing quality score and small numeric helpers.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import type { ModRefDTO, UserRefDTO } from '@sotf/contracts/common';
import type { MediaVariant } from '@sotf/db';
import { type CatalogConfig, mediaUrlForWidth } from '../catalog/media.ts';
import { rankOf, roleOf, tierOf } from '../catalog/snapshot.ts';
import { rows } from '../catalog/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { hasRole } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';

export const DAY_MS = 86_400_000;

/** `CardOptions` of `loadModCards` from the catalog config. */
export function cardOptionsOf(config: CatalogConfig): { publicBaseUrl: string; publicBucket: string } {
  return { publicBaseUrl: config.mediaBaseUrl, publicBucket: config.publicBucket };
}

/** The signed-in creator (every creator endpoint requires a session). */
export function creatorOf(ctx: Ctx): number {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor.userId;
}

/** Ids of every mod and build of the user (any status), ascending. */
export async function ownedModIds(ctx: Ctx, userId: number): Promise<number[]> {
  const found = await rows<{ id: number }>(ctx.db, `SELECT "id" FROM "Mod" WHERE "userId" = $1 ORDER BY "id"`, [
    userId,
  ]);
  return found.map((r) => Number(r.id));
}

/**
 * Mods covered by an analytics request: one mod (404 when unknown; 403 unless the actor owns it or
 * is a moderator) or every mod of the actor.
 */
export async function analyticsScope(ctx: Ctx, modId: number | undefined): Promise<number[]> {
  const userId = creatorOf(ctx);
  if (modId === undefined) return ownedModIds(ctx, userId);
  const [found] = await rows<{ userId: number | null }>(ctx.db, `SELECT "userId" FROM "Mod" WHERE "id" = $1`, [modId]);
  if (!found) throw errors.notFound('Mod');
  if (found.userId !== userId && !hasRole(ctx.actor, 'moderator')) throw errors.forbidden('This is not your mod');
  return [modId];
}

/** `ModRefDTO` of a card (same canonical path, thumbnail and status). */
export function modRefOf(card: ModCardDTO): ModRefDTO {
  return {
    id: card.id,
    kind: card.kind,
    manifestId: card.manifestId,
    name: card.name,
    slug: card.slug,
    userHandle: card.userHandle,
    canonicalPath: card.canonicalPath,
    status: card.status,
    nsfw: card.nsfw,
    thumbnailUrl: card.thumbnail?.url ?? null,
  };
}

interface UserRow {
  id: number;
  slug: string;
  name: string;
  displayName: string | null;
  imageUrl: string | null;
  verifiedCreator: boolean | null;
  role: string | null;
  privacy: { hideRank?: boolean } | null;
  creatorTier: string | null;
  survivorRank: string | null;
  aWidth: number | null;
  aHeight: number | null;
  aThumbhash: string | null;
  aColor: string | null;
  aVariants: MediaVariant[] | null;
  aBucket: string | null;
  aKey: string | null;
}

/** `UserRefDTO` of the given users (unknown ids are absent from the map). */
export async function loadUserRefDtos(
  ctx: Ctx,
  config: CatalogConfig,
  ids: readonly number[],
): Promise<Map<number, UserRefDTO>> {
  const unique = [...new Set(ids)].filter((id) => Number.isSafeInteger(id));
  const out = new Map<number, UserRefDTO>();
  if (unique.length === 0) return out;
  const found = await rows<UserRow>(
    ctx.db,
    `SELECT u."id", u."slug", u."name", u."displayName", u."imageUrl", u."verifiedCreator", u."role", u."privacy",
            s."creatorTier", s."survivorRank",
            a."width" AS "aWidth", a."height" AS "aHeight", a."thumbhash" AS "aThumbhash",
            a."dominantColor" AS "aColor", a."variants" AS "aVariants", a."sourceBucket" AS "aBucket",
            a."sourceKey" AS "aKey"
       FROM "User" u
       LEFT JOIN "UserStats" s ON s."userId" = u."id"
       LEFT JOIN "Media" a ON a."id" = u."avatarMediaId" AND a."status" = 'ready'
      WHERE u."id" = ANY($1::int[])`,
    [unique],
  );
  for (const u of found) {
    const media =
      u.aKey === null && u.aVariants === null
        ? null
        : {
            width: u.aWidth,
            height: u.aHeight,
            thumbhash: u.aThumbhash,
            dominantColor: u.aColor,
            variants: u.aVariants,
            sourceBucket: u.aBucket,
            sourceKey: u.aKey,
          };
    out.set(Number(u.id), {
      id: Number(u.id),
      handle: u.slug,
      displayName: u.displayName?.trim() || u.name,
      avatarUrl: mediaUrlForWidth(config, media, 96, u.imageUrl),
      verifiedCreator: u.verifiedCreator === true,
      role: roleOf(u.role),
      creatorTier: tierOf(u.creatorTier),
      survivorRank: u.privacy?.hideRank === true ? null : rankOf(u.survivorRank),
    });
  }
  return out;
}

export interface QualityInput {
  galleryImages: number;
  descriptionLength: number;
  hasSource: boolean;
  hasPlatform: boolean;
  tags: number;
  hasLicense: boolean;
}

/**
 * "Calidad de ficha" (PLAN §7.5 step 6): gallery ≥ 3, description ≥ 300 characters, source link,
 * platform, tags and license; equal weights, 0–100.
 */
export function listingQualityScore(input: QualityInput): number {
  const checks = [
    input.galleryImages >= 3,
    input.descriptionLength >= 300,
    input.hasSource,
    input.hasPlatform,
    input.tags > 0,
    input.hasLicense,
  ];
  return Math.round((100 * checks.filter(Boolean).length) / checks.length);
}

/** `YYYY-MM-DD` of `day` shifted by `delta` days. */
export function addDays(day: string, delta: number): string {
  return new Date(Date.parse(`${day}T00:00:00.000Z`) + delta * DAY_MS).toISOString().slice(0, 10);
}

/** Every day from `from` to `to` (both included). */
export function daysBetween(from: string, to: string): string[] {
  const out: string[] = [];
  for (let day = from; day <= to; day = addDays(day, 1)) out.push(day);
  return out;
}

/** Plain text → one safe HTML paragraph (the inbox excerpts). */
export function paragraphHtml(text: string): string {
  const escaped = text.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;',
  );
  return `<p>${escaped}</p>`;
}
