/**
 * Shared pieces of the compat services: DTO mappers (game builds, loader releases, ecosystem
 * entries, reporters), the admin guard (👑 + session younger than 12 h) and the audit trail of
 * the registry writes.
 */
import type { GameBuildRefDTO, UserRefDTO } from '@sotf/contracts/common';
import type {
  EcosystemEntryDTO as EcosystemEntrySchema,
  GameBuildDTO,
  LoaderReleaseDTO as LoaderReleaseSchema,
} from '@sotf/contracts/compat';
import type { Executor, MediaVariant, UserPrivacy } from '@sotf/db';
import { renderMarkdown } from '@sotf/markdown';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { type CatalogConfig, mediaUrlForWidth } from '../catalog/media.ts';
import { rankOf, roleOf, tierOf } from '../catalog/snapshot.ts';
import { intArray, query, toDate } from '../follows/sql.ts';
import type { Actor, Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertCan, type PermissionSubject } from '../permissions/can.ts';

export type LoaderReleaseDTO = z.infer<typeof LoaderReleaseSchema>;
export type EcosystemEntryDTO = z.infer<typeof EcosystemEntrySchema>;

/** What core needs from the deployment to build compat DTOs (avatars, thumbnails). */
export interface CompatDeps {
  config: CatalogConfig;
}

// -----------------------------------------------------------------------------------------------
// Game builds
// -----------------------------------------------------------------------------------------------

export interface GameBuildRow {
  id: number;
  label: string;
  steamBuildId: string | null;
  releasedAt: string;
  isBreaking: boolean;
  isCurrent: boolean;
  notesMd: string | null;
}

export const GAME_BUILD_COLUMNS = sql.raw(
  `g."id", g."label", g."steamBuildId", g."releasedAt"::text AS "releasedAt", g."isBreaking", g."isCurrent", g."notesMd"`,
);

/** Every game build, newest first. */
export async function loadGameBuilds(db: Executor): Promise<GameBuildRow[]> {
  return query<GameBuildRow>(
    db,
    sql`SELECT ${GAME_BUILD_COLUMNS} FROM "GameBuild" g ORDER BY g."releasedAt" DESC, g."id" DESC`,
  );
}

/** Release and ecosystem notes: Markdown `lite` (links, emphasis, lists, code), rendered on read. */
export function notesHtml(md: string | null): string | null {
  if (!md || md.trim() === '') return null;
  const html = renderMarkdown(md, { profile: 'lite' }).html;
  return html === '' ? null : html;
}

export function gameBuildDto(r: GameBuildRow): GameBuildDTO {
  return {
    id: r.id,
    label: r.label,
    steamBuildId: r.steamBuildId,
    releasedAt: r.releasedAt,
    isBreaking: r.isBreaking,
    isCurrent: r.isCurrent,
    notesMd: r.notesMd?.trim() ? r.notesMd : null,
    notesHtml: notesHtml(r.notesMd),
  };
}

export function gameBuildRef(r: Pick<GameBuildRow, 'id' | 'label' | 'isCurrent' | 'isBreaking'>): GameBuildRefDTO {
  return { id: r.id, label: r.label, isCurrent: r.isCurrent, isBreaking: r.isBreaking };
}

// -----------------------------------------------------------------------------------------------
// Loader releases and ecosystem
// -----------------------------------------------------------------------------------------------

export interface LoaderReleaseRow {
  id: number;
  name: string;
  version: string;
  releasedAt: string | null;
  url: string | null;
}

export function loaderReleaseDto(r: LoaderReleaseRow): LoaderReleaseDTO {
  return { id: r.id, name: r.name, version: r.version, releasedAt: r.releasedAt, url: r.url };
}

interface EcosystemRow {
  gameBuildId: number;
  gLabel: string;
  gIsCurrent: boolean;
  gIsBreaking: boolean;
  loaderReleaseId: number;
  lName: string;
  lVersion: string;
  lReleasedAt: string | null;
  lUrl: string | null;
  status: EcosystemEntryDTO['status'];
  noteMd: string | null;
  updatedAt: Date | string;
}

const ECOSYSTEM_STATUSES = new Set(['works', 'partial', 'broken', 'unknown']);

/** Ecosystem entries (optionally of one build), newest build first, then loader name and release. */
export async function loadEcosystem(db: Executor, gameBuildId?: number): Promise<EcosystemEntryDTO[]> {
  const where = gameBuildId === undefined ? sql`TRUE` : sql`e."gameBuildId" = ${gameBuildId}`;
  const list = await query<EcosystemRow>(
    db,
    sql`SELECT e."gameBuildId", g."label" AS "gLabel", g."isCurrent" AS "gIsCurrent", g."isBreaking" AS "gIsBreaking",
               e."loaderReleaseId", l."name" AS "lName", l."version" AS "lVersion",
               l."releasedAt"::text AS "lReleasedAt", l."url" AS "lUrl", e."status", e."noteMd", e."updatedAt"
          FROM "EcosystemStatus" e
          JOIN "GameBuild" g ON g."id" = e."gameBuildId"
          JOIN "LoaderRelease" l ON l."id" = e."loaderReleaseId"
         WHERE ${where}
         ORDER BY g."releasedAt" DESC, g."id" DESC, l."name", l."releasedAt" DESC NULLS LAST, l."id" DESC`,
  );
  return list.map((r) => ({
    gameBuild: { id: r.gameBuildId, label: r.gLabel, isCurrent: r.gIsCurrent, isBreaking: r.gIsBreaking },
    loader: loaderReleaseDto({
      id: r.loaderReleaseId,
      name: r.lName,
      version: r.lVersion,
      releasedAt: r.lReleasedAt,
      url: r.lUrl,
    }),
    status: ECOSYSTEM_STATUSES.has(r.status) ? r.status : 'unknown',
    noteMd: r.noteMd?.trim() ? r.noteMd : null,
    noteHtml: notesHtml(r.noteMd),
    updatedAt: (toDate(r.updatedAt) ?? new Date(0)).toISOString(),
  }));
}

// -----------------------------------------------------------------------------------------------
// Users
// -----------------------------------------------------------------------------------------------

interface UserRefRow {
  id: number;
  slug: string;
  name: string;
  displayName: string | null;
  imageUrl: string | null;
  verifiedCreator: boolean;
  role: string;
  privacy: UserPrivacy | null;
  hidden: boolean;
  tier: string | null;
  rank: string | null;
  aWidth: number | null;
  aHeight: number | null;
  aThumbhash: string | null;
  aColor: string | null;
  aVariants: MediaVariant[] | null;
  aBucket: string | null;
  aKey: string | null;
}

/** Public references of users (deleted and banned users are left out: the caller shows null). */
export async function loadUserRefs(
  db: Executor,
  config: CatalogConfig,
  userIds: Iterable<number>,
): Promise<Map<number, UserRefDTO>> {
  const ids = [...new Set(userIds)];
  const out = new Map<number, UserRefDTO>();
  if (ids.length === 0) return out;
  const list = await query<UserRefRow>(
    db,
    sql`SELECT u."id", u."slug", u."name", u."displayName", u."imageUrl", u."verifiedCreator", u."role", u."privacy",
               (u."deletedAt" IS NOT NULL OR u."bannedAt" IS NOT NULL) AS "hidden",
               s."creatorTier" AS "tier", s."survivorRank" AS "rank",
               a."width" AS "aWidth", a."height" AS "aHeight", a."thumbhash" AS "aThumbhash",
               a."dominantColor" AS "aColor", a."variants" AS "aVariants", a."sourceBucket" AS "aBucket",
               a."sourceKey" AS "aKey"
          FROM "User" u
          LEFT JOIN "UserStats" s ON s."userId" = u."id"
          LEFT JOIN "Media" a ON a."id" = u."avatarMediaId"
         WHERE u."id" = ANY(${intArray(ids)})`,
  );
  for (const r of list) {
    if (r.hidden) continue;
    const media =
      r.aKey === null && r.aVariants === null
        ? null
        : {
            width: r.aWidth,
            height: r.aHeight,
            thumbhash: r.aThumbhash,
            dominantColor: r.aColor,
            variants: r.aVariants,
            sourceBucket: r.aBucket,
            sourceKey: r.aKey,
          };
    out.set(r.id, {
      id: r.id,
      handle: r.slug,
      displayName: r.displayName?.trim() || r.name,
      avatarUrl: mediaUrlForWidth(config, media, 96, r.imageUrl),
      verifiedCreator: r.verifiedCreator === true,
      role: roleOf(r.role),
      creatorTier: tierOf(r.tier),
      survivorRank: r.privacy?.hideRank === true ? null : rankOf(r.rank),
    });
  }
  return out;
}

// -----------------------------------------------------------------------------------------------
// Guards and audit
// -----------------------------------------------------------------------------------------------

export function actorOf(ctx: Ctx): Actor {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor;
}

/** Account flags the permission rules need (suspension included). */
export async function subjectOf(ctx: Ctx): Promise<PermissionSubject> {
  const actor = actorOf(ctx);
  const [row] = await query<{ verifiedCreator: boolean; trustLevel: number; suspendedUntil: Date | string | null }>(
    ctx.db,
    sql`SELECT "verifiedCreator", "trustLevel", "suspendedUntil" FROM "User" WHERE "id" = ${actor.userId}`,
  );
  return {
    ...actor,
    verifiedCreator: row?.verifiedCreator === true,
    trustLevel: Number(row?.trustLevel ?? 0),
    suspendedUntil: actor.suspendedUntil ?? toDate(row?.suspendedUntil ?? null),
  };
}

/** Admin guard of the game-build registry. */
export async function assertRegistryAdmin(ctx: Ctx): Promise<Actor> {
  const subject = await subjectOf(ctx);
  const now = ctx.clock.now();
  assertCan(subject, 'admin.game_builds', undefined, now);
  return subject;
}

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

/**
 * Appends an `AuditLog` row inside the write's transaction (the shared `recordAudit` of
 * `@sotf/core/audit`).
 */
export async function audit(
  tx: Executor,
  ctx: Ctx,
  entry: {
    action: string;
    targetType: string;
    targetId: number | null;
    before?: Record<string, Json> | null;
    after?: Record<string, Json> | null;
    reason?: string | null;
  },
): Promise<void> {
  await recordAudit(tx, ctx, entry);
}
