/**
 * Users as seen by Ranger Station (PLAN §7.4 "Usuarios"): search, the user card (flags, history,
 * sanctions) and the `RangerUserDTO` mapper shared by every user action.
 *
 * Unlike the public references, banned and deleted accounts are shown (that is who rangers look
 * at). The email is visible to staff only here and every read is covered by the staff guard.
 */
import type { RangerUserDTO, RangerUserPageDTO, SanctionDTO } from '@sotf/contracts/moderation';
import { totalPages } from '@sotf/contracts/pagination';
import type { Executor, MediaVariant, UserPrivacy } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { type CatalogConfig, mediaUrlForWidth } from '../catalog/media.ts';
import { getSnapshot, rankOf, roleOf, tierOf } from '../catalog/snapshot.ts';
import { intArray, query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertStaff } from '../moderation/guard.ts';

export type RangerUser = z.infer<typeof RangerUserDTO>;
export type Sanction = z.infer<typeof SanctionDTO>;

interface UserRow {
  id: number;
  slug: string;
  name: string;
  displayName: string | null;
  imageUrl: string | null;
  email: string;
  emailVerifiedAt: Date | string | null;
  role: string;
  verifiedCreator: boolean;
  legacyTrusted: boolean | null;
  trustLevel: number;
  createdAt: Date | string;
  lastSeenAt: Date | string | null;
  suspendedUntil: Date | string | null;
  bannedAt: Date | string | null;
  privacy: UserPrivacy | null;
  tier: string | null;
  rank: string | null;
  aWidth: number | null;
  aHeight: number | null;
  aThumbhash: string | null;
  aColor: string | null;
  aVariants: MediaVariant[] | null;
  aBucket: string | null;
  aKey: string | null;
  mods: number;
  comments: number;
  reviews: number;
  reportsAgainst: number;
}

const USER_SELECT = sql`
  SELECT u."id", u."slug", u."name", u."displayName", u."imageUrl", u."email", u."emailVerifiedAt", u."role",
         u."verifiedCreator", u."legacyTrusted", u."trustLevel", u."createdAt", u."lastSeenAt", u."suspendedUntil",
         u."bannedAt", u."privacy", s."creatorTier" AS "tier", s."survivorRank" AS "rank",
         a."width" AS "aWidth", a."height" AS "aHeight", a."thumbhash" AS "aThumbhash", a."dominantColor" AS "aColor",
         a."variants" AS "aVariants", a."sourceBucket" AS "aBucket", a."sourceKey" AS "aKey",
         (SELECT count(*)::int FROM "Mod" m WHERE m."userId" = u."id") AS "mods",
         (SELECT count(*)::int FROM "Comment" c WHERE c."userId" = u."id" AND c."status" <> 'deleted') AS "comments",
         (SELECT count(*)::int FROM "ModReview" r WHERE r."userId" = u."id" AND r."status" <> 'deleted') AS "reviews",
         (SELECT count(*)::int FROM "Report" rp
           WHERE (rp."targetType" = 'user' AND rp."targetId" = u."id")
              OR (rp."targetType" = 'mod' AND rp."targetId" IN (SELECT m."id" FROM "Mod" m WHERE m."userId" = u."id"))
              OR (rp."targetType" = 'comment' AND rp."targetId" IN (SELECT c."id" FROM "Comment" c WHERE c."userId" = u."id"))
              OR (rp."targetType" = 'review' AND rp."targetId" IN (SELECT r."id" FROM "ModReview" r WHERE r."userId" = u."id"))
         ) AS "reportsAgainst"
    FROM "User" u
    LEFT JOIN "UserStats" s ON s."userId" = u."id"
    LEFT JOIN "Media" a ON a."id" = u."avatarMediaId"`;

function iso(value: Date | string | null): string | null {
  return toDate(value)?.toISOString() ?? null;
}

export interface SanctionRow {
  id: number;
  userId: number;
  kind: Sanction['kind'];
  scopeModId: number | null;
  reason: string;
  startsAt: Date | string;
  endsAt: Date | string | null;
  createdById: number;
  revokedAt: Date | string | null;
}

export const SANCTION_COLUMNS = sql.raw(
  `s."id", s."userId", s."kind", s."scopeModId", s."reason", s."startsAt", s."endsAt", s."createdById", s."revokedAt"`,
);

/** Staff-facing user references (banned and deleted accounts included). */
export async function staffUserRefs(
  exec: Executor,
  config: CatalogConfig,
  ids: Iterable<number>,
): Promise<Map<number, RangerUser['user']>> {
  const unique = [...new Set(ids)];
  if (unique.length === 0) return new Map();
  const list = await query<UserRow>(exec, sql`${USER_SELECT} WHERE u."id" = ANY(${intArray(unique)})`);
  return new Map(list.map((r) => [r.id, userRefOf(config, r)]));
}

function userRefOf(config: CatalogConfig, r: UserRow): RangerUser['user'] {
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
  return {
    id: r.id,
    handle: r.slug,
    displayName: r.displayName?.trim() || r.name,
    avatarUrl: mediaUrlForWidth(config, media, 96, r.imageUrl),
    verifiedCreator: r.verifiedCreator === true,
    role: roleOf(r.role),
    creatorTier: tierOf(r.tier),
    survivorRank: r.privacy?.hideRank === true ? null : rankOf(r.rank),
  };
}

/** Sanctions of a user (newest first) as DTOs. */
export async function sanctionsOf(ctx: Ctx, config: CatalogConfig, rows: readonly SanctionRow[]): Promise<Sanction[]> {
  const [refs, snapshot] = await Promise.all([
    staffUserRefs(
      ctx.db,
      config,
      rows.map((r) => r.createdById),
    ),
    rows.some((r) => r.scopeModId !== null) ? getSnapshot(ctx, config) : Promise.resolve(null),
  ]);
  return rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    scopeMod: r.scopeModId === null ? null : (snapshot?.byId.get(r.scopeModId)?.ref ?? null),
    reason: r.reason,
    startsAt: iso(r.startsAt) ?? new Date(0).toISOString(),
    endsAt: iso(r.endsAt),
    createdBy: refs.get(r.createdById) ?? null,
    revokedAt: iso(r.revokedAt),
  }));
}

async function toRangerUsers(ctx: Ctx, config: CatalogConfig, list: readonly UserRow[], withSanctions: boolean) {
  const sanctionRows = withSanctions
    ? await query<SanctionRow>(
        ctx.db,
        sql`SELECT ${SANCTION_COLUMNS} FROM "UserSanction" s WHERE s."userId" = ANY(${intArray(list.map((u) => u.id))})
             ORDER BY s."startsAt" DESC, s."id" DESC LIMIT 200`,
      )
    : [];
  const sanctions = await sanctionsOf(ctx, config, sanctionRows);
  const byUser = new Map<number, Sanction[]>();
  sanctionRows.forEach((r, i) => {
    const dto = sanctions[i];
    if (dto) byUser.set(r.userId, [...(byUser.get(r.userId) ?? []), dto]);
  });
  const now = ctx.clock.now().getTime();
  return list.map((r): RangerUser => {
    const suspendedUntil = toDate(r.suspendedUntil);
    return {
      user: userRefOf(config, r),
      email: r.email,
      emailVerified: r.emailVerifiedAt !== null,
      role: roleOf(r.role),
      verifiedCreator: r.verifiedCreator === true,
      legacyTrusted: r.legacyTrusted,
      trustLevel: Math.min(3, Math.max(0, toInt(r.trustLevel))),
      createdAt: iso(r.createdAt) ?? new Date(0).toISOString(),
      lastSeenAt: iso(r.lastSeenAt),
      suspendedUntil: suspendedUntil && suspendedUntil.getTime() > now ? suspendedUntil.toISOString() : null,
      bannedAt: iso(r.bannedAt),
      stats: {
        mods: toInt(r.mods),
        comments: toInt(r.comments),
        reviews: toInt(r.reviews),
        reportsAgainst: toInt(r.reportsAgainst),
      },
      sanctions: byUser.get(r.id) ?? [],
    };
  });
}

/** One user card (no guard: callers check). */
export async function rangerUser(ctx: Ctx, config: CatalogConfig, id: number): Promise<RangerUser> {
  const row = await queryOne<UserRow>(ctx.db, sql`${USER_SELECT} WHERE u."id" = ${id}`);
  if (!row) throw errors.notFound('User');
  const [dto] = await toRangerUsers(ctx, config, [row], true);
  if (!dto) throw errors.notFound('User');
  return dto;
}

/** `GET /ranger/users/:id`. */
export async function getRangerUser(ctx: Ctx, config: CatalogConfig, id: number): Promise<RangerUser> {
  await assertStaff(ctx, 'moderation.queue');
  return rangerUser(ctx, config, id);
}

function likeEscape(value: string): string {
  return value.replace(/[\\%_]/g, (c) => `\\${c}`);
}

/**
 * `GET /ranger/users?q=&page=&pageSize=`: by handle, name, display name or email (substring,
 * case-insensitive); `#123` looks up an id. Exact handle/email matches first, then newest
 * accounts. Without `q`: the newest accounts.
 */
export async function searchRangerUsers(
  ctx: Ctx,
  config: CatalogConfig,
  input: {
    q?: string | undefined;
    page: number;
    pageSize: number;
    role?: 'user' | 'moderator' | 'admin' | undefined;
    status?: 'active' | 'suspended' | 'banned' | undefined;
    verified?: boolean | undefined;
    sort?: 'newest' | 'oldest' | 'name' | 'reports' | 'seen' | undefined;
  },
): Promise<z.infer<typeof RangerUserPageDTO>> {
  await assertStaff(ctx, 'moderation.queue');
  const q = input.q?.trim() ?? '';
  let where: SQL = sql`TRUE`;
  let rank: SQL = sql`0::int`;
  if (/^#\d{1,9}$/.test(q)) {
    where = sql`u."id" = ${Number(q.slice(1))}`;
  } else if (q !== '') {
    const pattern = `%${likeEscape(q.toLowerCase())}%`;
    where = sql`(lower(u."slug") LIKE ${pattern} OR lower(u."name") LIKE ${pattern}
                 OR lower(coalesce(u."displayName", '')) LIKE ${pattern} OR lower(u."email") LIKE ${pattern})`;
    rank = sql`CASE WHEN lower(u."slug") = ${q.toLowerCase()} OR lower(u."email") = ${q.toLowerCase()} THEN 0 ELSE 1 END`;
  }
  const filters: SQL[] = [where];
  if (input.role) filters.push(sql`u."role" = ${input.role}`);
  if (input.verified !== undefined) filters.push(sql`u."verifiedCreator" = ${input.verified}`);
  if (input.status === 'banned') filters.push(sql`u."bannedAt" IS NOT NULL`);
  if (input.status === 'suspended') {
    filters.push(sql`u."bannedAt" IS NULL AND u."suspendedUntil" > ${ctx.clock.now().toISOString()}::timestamptz`);
  }
  if (input.status === 'active') {
    filters.push(
      sql`u."bannedAt" IS NULL AND (u."suspendedUntil" IS NULL OR u."suspendedUntil" <= ${ctx.clock.now().toISOString()}::timestamptz)`,
    );
  }
  const condition = sql.join(filters, sql` AND `);
  const order = (() => {
    switch (input.sort) {
      case 'oldest':
        return sql`${rank}, u."createdAt" ASC, u."id" ASC`;
      case 'name':
        return sql`${rank}, lower(coalesce(nullif(u."displayName", ''), u."name")) ASC, u."id" ASC`;
      case 'reports':
        return sql`${rank}, "reportsAgainst" DESC, u."id" DESC`;
      case 'seen':
        return sql`${rank}, u."lastSeenAt" DESC NULLS LAST, u."id" DESC`;
      default:
        return sql`${rank}, u."createdAt" DESC, u."id" DESC`;
    }
  })();
  const total = await queryOne<{ n: number }>(
    ctx.db,
    sql`SELECT count(*)::int AS "n" FROM "User" u WHERE ${condition}`,
  );
  const offset = (input.page - 1) * input.pageSize;
  const list = await query<UserRow>(
    ctx.db,
    sql`${USER_SELECT} WHERE ${condition} ORDER BY ${order}
        LIMIT ${input.pageSize} OFFSET ${offset}`,
  );
  const count = total?.n ?? 0;
  return {
    items: await toRangerUsers(ctx, config, list, false),
    page: input.page,
    pageSize: input.pageSize,
    total: count,
    totalPages: totalPages(count, input.pageSize),
  };
}
