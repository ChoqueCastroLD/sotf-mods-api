/**
 * Review reads (PLAN §7.7): the cursor list (helpful = Wilson lower bound of the votes, new,
 * critical = lowest stars first), the summary (histogram, mean, Bayesian mean, ≥ 3 threshold) and
 * the `ReviewDTO` builder shared with the writes. Public lists contain `visible` reviews only.
 */
import type { ReviewDTO, ReviewsSummaryDTO } from '@sotf/contracts/reviews';
import type { Executor } from '@sotf/db';
import { decodeEntities, renderMarkdown } from '@sotf/markdown';
import { type SQL, sql } from 'drizzle-orm';
import {
  AUTHOR_COLUMNS,
  type AuthorColumns,
  asDate,
  authorJoins,
  type CommunityConfig,
  decodeKeyset,
  encodeKeyset,
  firstRow,
  loadThreadMod,
  rows,
  userRefOf,
  type Viewer,
} from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { helpfulKeySql, type RatingAggregate, siteMeanOf, summaryOf } from './rules.ts';

interface ReviewRow extends AuthorColumns {
  id: number;
  modId: number;
  userId: number | null;
  rating: number;
  title: string;
  message: string;
  bodyMd: string | null;
  bodyHtml: string | null;
  status: 'visible' | 'hidden' | 'deleted';
  isVerifiedDownload: boolean;
  helpfulCount: number;
  unhelpfulCount: number;
  authorReplyHtml: string | null;
  authorRepliedAt: unknown;
  createdAt: unknown;
  editedAt: unknown;
  mvId: number | null;
  mvVersion: string | null;
  helpfulKey: string | number;
}

const HELPFUL_KEY = sql.raw(helpfulKeySql('r."helpfulCount"', 'r."unhelpfulCount"'));

const BASE = sql`SELECT r."id", r."modId", r."userId", r."rating", r."title", r."message", r."bodyMd", r."bodyHtml",
    r."status", r."isVerifiedDownload", r."helpfulCount", r."unhelpfulCount", r."authorReplyHtml",
    r."authorRepliedAt", r."createdAt", r."editedAt", mv."id" AS "mvId", mv."version" AS "mvVersion",
    ${HELPFUL_KEY} AS "helpfulKey", ${AUTHOR_COLUMNS}
  FROM "ModReview" r
  LEFT JOIN "ModVersion" mv ON mv."id" = r."modVersionId"
  ${authorJoins(sql.raw('r."userId"'))}`;

function reviewDto(config: CommunityConfig, row: ReviewRow): ReviewDTO {
  // "title" is a legacy column: v2 writes it HTML-escaped (PLAN §6.8), so it is always decoded.
  const title = decodeEntities(row.title);
  // Legacy rows (before backfill B9) keep entity-encoded text in "message".
  const bodyHtml =
    row.bodyHtml ??
    (row.bodyMd !== null || row.message !== ''
      ? renderMarkdown(row.bodyMd ?? decodeEntities(row.message), { profile: 'lite' }).html
      : null);
  return {
    id: row.id,
    modId: row.modId,
    rating: Math.min(5, Math.max(1, Math.round(row.rating))),
    title: title.trim() === '' ? null : title.slice(0, 80),
    bodyHtml: bodyHtml === '' ? null : bodyHtml,
    author: userRefOf(config, row),
    modVersion: row.mvId !== null && row.mvVersion !== null ? { id: row.mvId, version: row.mvVersion } : null,
    isVerifiedDownload: row.isVerifiedDownload,
    helpfulCount: row.helpfulCount,
    unhelpfulCount: row.unhelpfulCount,
    authorReply:
      row.authorReplyHtml !== null && row.authorRepliedAt !== null
        ? { bodyHtml: row.authorReplyHtml, repliedAt: asDate(row.authorRepliedAt).toISOString() }
        : null,
    status: row.status,
    createdAt: asDate(row.createdAt).toISOString(),
    editedAt: row.editedAt === null ? null : asDate(row.editedAt).toISOString(),
  };
}

/** `ReviewDTO` of one review; `viewer` may read their own hidden review (staff: any). */
export async function reviewDtoById(
  db: Executor,
  config: CommunityConfig,
  id: number,
  viewer: Viewer | null,
): Promise<ReviewDTO> {
  const [row] = await rows<ReviewRow>(db, sql`${BASE} WHERE r."id" = ${id}`);
  if (!row || row.status === 'deleted') throw errors.notFound('Review');
  if (row.status !== 'visible' && !(viewer && (viewer.staff || viewer.userId === row.userId))) {
    throw errors.notFound('Review');
  }
  return reviewDto(config, row);
}

export interface ReviewListInput {
  sort: 'helpful' | 'new' | 'critical';
  cursor?: string | undefined;
  limit: number;
}

/** `GET /mods/:id/reviews`. */
export async function listReviews(
  ctx: Ctx,
  config: CommunityConfig,
  modId: number,
  input: ReviewListInput,
): Promise<{ items: ReviewDTO[]; nextCursor: string | null }> {
  await loadThreadMod(ctx.db, modId);
  let after: SQL = sql`TRUE`;
  let order: SQL;
  switch (input.sort) {
    case 'new':
      order = sql`r."id" DESC`;
      if (input.cursor) {
        const [id] = decodeKeyset(input.cursor, 1);
        after = sql`r."id" < ${id}`;
      }
      break;
    case 'critical':
      order = sql`r."rating" ASC, r."id" DESC`;
      if (input.cursor) {
        const [rating, id] = decodeKeyset(input.cursor, 2);
        after = sql`(r."rating" > ${rating} OR (r."rating" = ${rating} AND r."id" < ${id}))`;
      }
      break;
    default:
      order = sql`${HELPFUL_KEY} DESC, r."id" DESC`;
      if (input.cursor) {
        const [key, id] = decodeKeyset(input.cursor, 2);
        after = sql`(${HELPFUL_KEY}, r."id") < (${key}::bigint, ${id})`;
      }
  }
  const found = await rows<ReviewRow>(
    ctx.db,
    sql`${BASE} WHERE r."modId" = ${modId} AND r."status" = 'visible' AND ${after}
        ORDER BY ${order} LIMIT ${input.limit + 1}`,
  );
  const page = found.slice(0, input.limit);
  const last = page[page.length - 1];
  let nextCursor: string | null = null;
  if (found.length > input.limit && last) {
    nextCursor =
      input.sort === 'new'
        ? encodeKeyset([last.id])
        : input.sort === 'critical'
          ? encodeKeyset([last.rating, last.id])
          : encodeKeyset([Number(last.helpfulKey), last.id]);
  }
  return { items: page.map((row) => reviewDto(config, row)), nextCursor };
}

/** Visible-review aggregate of a mod. */
export async function ratingAggregate(db: Executor, modId: number): Promise<RatingAggregate> {
  const row = await firstRow<{
    count: number;
    sum: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
  }>(
    db,
    sql`SELECT count(*)::int AS "count", coalesce(sum("rating"), 0)::int AS "sum",
               count(*) FILTER (WHERE "rating" = 1)::int AS "h1", count(*) FILTER (WHERE "rating" = 2)::int AS "h2",
               count(*) FILTER (WHERE "rating" = 3)::int AS "h3", count(*) FILTER (WHERE "rating" = 4)::int AS "h4",
               count(*) FILTER (WHERE "rating" = 5)::int AS "h5"
          FROM "ModReview" WHERE "modId" = ${modId} AND "status" = 'visible'`,
  );
  return {
    count: row?.count ?? 0,
    sum: row?.sum ?? 0,
    histogram: { 1: row?.h1 ?? 0, 2: row?.h2 ?? 0, 3: row?.h3 ?? 0, 4: row?.h4 ?? 0, 5: row?.h5 ?? 0 },
  };
}

/** Mean of every visible review of the site (the prior `m` of the Bayesian mean). */
export async function siteMean(db: Executor): Promise<number> {
  const row = await firstRow<{ avg: number | string | null }>(
    db,
    sql`SELECT avg("rating")::float8 AS "avg" FROM "ModReview" WHERE "status" = 'visible'`,
  );
  return siteMeanOf(row?.avg === null || row?.avg === undefined ? null : Number(row.avg));
}

/** `GET /mods/:id/reviews/summary`. */
export async function reviewsSummary(ctx: Ctx, modId: number): Promise<ReviewsSummaryDTO> {
  await loadThreadMod(ctx.db, modId);
  const [aggregate, mean] = await Promise.all([ratingAggregate(ctx.db, modId), siteMean(ctx.db)]);
  return summaryOf(aggregate, mean);
}

/**
 * The viewer's own review of a mod (any status but deleted) with its Markdown source, for the
 * session lookup `GET /me/social-state` (public lists are read as a guest).
 */
export async function myReviewOf(
  db: Executor,
  config: CommunityConfig,
  modId: number,
  userId: number,
): Promise<(ReviewDTO & { bodyMd: string | null }) | null> {
  const [row] = await rows<ReviewRow>(
    db,
    sql`${BASE} WHERE r."modId" = ${modId} AND r."userId" = ${userId} AND r."status" <> 'deleted'
         ORDER BY r."id" DESC LIMIT 1`,
  );
  if (!row) return null;
  return { ...reviewDto(config, row), bodyMd: row.bodyMd ?? (row.message !== '' ? decodeEntities(row.message) : null) };
}
