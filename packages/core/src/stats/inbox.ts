/**
 * Creator inbox (`GET /studio/inbox`, PLAN §7.5 "Bandeja"): comments, bug reports, reviews and field
 * reports (broken / partial) left by **other** users on my mods, newest first, with their state:
 *
 * | type    | open                           | answered                              | resolved                  |
 * |---------|--------------------------------|---------------------------------------|---------------------------|
 * | comment | no visible reply from me       | I replied                             | —                         |
 * | bug     | no reply, not resolved         | I replied                             | marked fixed in a version |
 * | review  | no author reply                | I replied                             | —                         |
 * | compat  | not acknowledged, not fixed    | acknowledged                          | fixed in a version        |
 *
 * Only visible items of mods that still exist are listed. Cursor = `createdAt|<type>-<id>` (the
 * type disambiguates ids of different tables); ties are broken by type, then id.
 */
import { decodeCursor, encodeCursor } from '@sotf/contracts/pagination';
import type { InboxPageDTO, InboxQuery } from '@sotf/contracts/studio';
import { INBOX_TYPES } from '@sotf/contracts/studio';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { rows } from '../catalog/sql.ts';
import { loadModCards } from '../downloads/cards.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { plainExcerpt } from '../notifications/refs.ts';
import { cardOptionsOf, creatorOf, loadUserRefDtos, modRefOf, paragraphHtml } from './studio-common.ts';

type InboxPage = z.infer<typeof InboxPageDTO>;
type Query = z.output<typeof InboxQuery>;
type InboxType = (typeof INBOX_TYPES)[number];

const TYPE_RANK: Record<InboxType, number> = { comment: 1, bug: 2, review: 3, compat: 4 };
const EXCERPT_CHARS = 280;

interface InboxRow {
  type: InboxType;
  id: string;
  modId: number;
  userId: number | null;
  body: string | null;
  title: string | null;
  result: string | null;
  mode: string | null;
  buildLabel: string | null;
  state: 'open' | 'answered' | 'resolved';
  createdAt: Date;
}

const INBOX_SQL = `
WITH items AS (
  SELECT CASE WHEN c."isBugReport" THEN 'bug' ELSE 'comment' END AS type,
         CASE WHEN c."isBugReport" THEN 2 ELSE 1 END AS rank,
         c."id"::bigint AS id, c."modId", c."userId",
         coalesce(nullif(c."bodyMd", ''), c."message") AS body, NULL::text AS title,
         NULL::text AS result, NULL::text AS mode, NULL::text AS "buildLabel",
         CASE WHEN c."isBugReport" AND c."bugResolvedInVersionId" IS NOT NULL THEN 'resolved'
              WHEN EXISTS (SELECT 1 FROM "Comment" r WHERE r."replyId" = c."id" AND r."userId" = $1
                             AND r."status" = 'visible') THEN 'answered'
              ELSE 'open' END AS state,
         (c."createdAt" AT TIME ZONE 'UTC') AS "createdAt"
    FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
   WHERE m."userId" = $1 AND c."status" = 'visible' AND c."replyId" IS NULL
     AND c."userId" IS DISTINCT FROM $1
  UNION ALL
  SELECT 'review', 3, r."id"::bigint, r."modId", r."userId",
         coalesce(nullif(r."bodyMd", ''), r."message"), r."title", NULL, NULL, NULL,
         CASE WHEN r."authorRepliedAt" IS NOT NULL OR r."authorReplyMd" IS NOT NULL THEN 'answered' ELSE 'open' END,
         (r."createdAt" AT TIME ZONE 'UTC')
    FROM "ModReview" r JOIN "Mod" m ON m."id" = r."modId"
   WHERE m."userId" = $1 AND r."status" = 'visible' AND r."userId" IS DISTINCT FROM $1
  UNION ALL
  SELECT 'compat', 4, cr."id", v."modId", cr."userId", cr."note", NULL, cr."result", cr."mode", g."label",
         CASE WHEN cr."fixedInVersionId" IS NOT NULL THEN 'resolved'
              WHEN cr."acknowledgedAt" IS NOT NULL THEN 'answered' ELSE 'open' END,
         cr."createdAt"
    FROM "CompatReport" cr
    JOIN "ModVersion" v ON v."id" = cr."modVersionId"
    JOIN "Mod" m ON m."id" = v."modId"
    JOIN "GameBuild" g ON g."id" = cr."gameBuildId"
   WHERE m."userId" = $1 AND cr."status" = 'visible' AND cr."result" IN ('broken', 'partial')
     AND cr."userId" IS DISTINCT FROM $1
)
SELECT type, id::text AS id, "modId", "userId", body, title, result, mode, "buildLabel", state, "createdAt"
  FROM items
 WHERE type = ANY($2::text[])
   AND ($3::boolean OR state = 'open')
   AND ($4::timestamptz IS NULL OR ("createdAt", rank, id) < ($4::timestamptz, $5::int, $6::bigint))
   AND ($8::int IS NULL OR "modId" = $8::int)
 ORDER BY "createdAt" DESC, rank DESC, id DESC
 LIMIT $7`;

function parseCursor(cursor: string | undefined): { at: string; rank: number; id: string } | null {
  if (!cursor) return null;
  const decoded = decodeCursor(cursor);
  const match = decoded ? /^(comment|bug|review|compat)-(\d{1,18})$/.exec(decoded.id) : null;
  if (!decoded || !match)
    throw errors.validation('Invalid cursor', [{ path: 'cursor', code: 'invalid', message: 'invalid cursor' }]);
  return { at: decoded.createdAt, rank: TYPE_RANK[match[1] as InboxType], id: match[2] as string };
}

function excerptOf(row: InboxRow): string {
  if (row.type === 'compat') {
    const head = [row.result, row.buildLabel, row.mode].filter(Boolean).join(' · ');
    const note = plainExcerpt(row.body, EXCERPT_CHARS);
    return note ? `${paragraphHtml(head)}${paragraphHtml(note)}` : paragraphHtml(head);
  }
  const body = plainExcerpt(row.body, EXCERPT_CHARS);
  if (row.type === 'review' && row.title?.trim()) {
    const title = plainExcerpt(row.title, 80);
    return body ? `${paragraphHtml(title)}${paragraphHtml(body)}` : paragraphHtml(title);
  }
  return paragraphHtml(body);
}

function permalinkOf(path: string, row: InboxRow): string {
  if (row.type === 'review') return `${path}/reviews#r-${row.id}`;
  if (row.type === 'compat') return `${path}#compat`;
  return `${path}#c-${row.id}`;
}

export async function getCreatorInbox(ctx: Ctx, config: CatalogConfig, query: Query): Promise<InboxPage> {
  const userId = creatorOf(ctx);
  const types = query.type && query.type.length > 0 ? query.type : [...INBOX_TYPES];
  const after = parseCursor(query.cursor);
  const limit = query.limit;
  const found = await rows<InboxRow>(ctx.db, INBOX_SQL, [
    userId,
    types,
    query.state === 'all',
    after?.at ?? null,
    after?.rank ?? 0,
    after?.id ?? '0',
    limit + 1,
    query.modId ?? null,
  ]);
  const page = found.slice(0, limit);
  const [cards, users] = await Promise.all([
    loadModCards(ctx.db, [...new Set(page.map((r) => Number(r.modId)))], cardOptionsOf(config)),
    loadUserRefDtos(
      ctx,
      config,
      page
        .map((r) => r.userId)
        .filter((id): id is number => id !== null)
        .map(Number),
    ),
  ]);
  const items: InboxPage['items'] = [];
  for (const row of page) {
    const card = cards.get(Number(row.modId))?.card;
    if (!card) continue;
    items.push({
      type: row.type,
      id: Number(row.id),
      mod: modRefOf(card),
      author: row.userId === null ? null : (users.get(Number(row.userId)) ?? null),
      excerptHtml: excerptOf(row),
      state: row.state,
      permalink: permalinkOf(card.canonicalPath, row),
      createdAt: new Date(row.createdAt).toISOString(),
    });
  }
  const lastRow = page[page.length - 1];
  const nextCursor =
    found.length > limit && lastRow
      ? encodeCursor({ createdAt: new Date(lastRow.createdAt).toISOString(), id: `${lastRow.type}-${lastRow.id}` })
      : null;
  return { items, nextCursor };
}
