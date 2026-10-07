/**
 * `GET /ranger/audit?cursor=&actor=&action=&target=` (moderators): the audit log, newest
 * first, filterable by actor handle, action (exact, or a prefix ending in `*`, e.g. `mod.*`) and
 * target (`<targetType>:<id>`). Cursor = `createdAt|id` of the last row (PLAN §5.1).
 */
import type { AuditEntryDTO, AuditPageDTO } from '@sotf/contracts/moderation';
import { decodeCursor, encodeCursor } from '@sotf/contracts/pagination';
import { type SQL, sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { loadUserRefs } from '../compat/shared.ts';
import { query, queryOne, toDate } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertStaff } from '../moderation/guard.ts';

type AuditEntry = z.infer<typeof AuditEntryDTO>;
type AuditPage = z.infer<typeof AuditPageDTO>;

export interface AuditQuery {
  cursor?: string | undefined;
  limit: number;
  actor?: string | undefined;
  action?: string | undefined;
  target?: string | undefined;
  /** Page mode (adds totals). */
  page?: number | undefined;
  from?: string | undefined;
  to?: string | undefined;
  targetType?: string | undefined;
  /** Text in the reason. */
  q?: string | undefined;
  /** Page mode only (the cursor always walks newest first). */
  sort?: 'newest' | 'oldest' | undefined;
}

interface AuditRow {
  id: string | number;
  actorId: number | null;
  action: string;
  targetType: string | null;
  targetId: number | null;
  before: unknown;
  after: unknown;
  reason: string | null;
  createdAt: Date | string;
}

function likeEscape(value: string): string {
  return value.replace(/[\\%_]/g, (c) => `\\${c}`);
}

/** The audit feed. */
export async function listAudit(ctx: Ctx, config: CatalogConfig, input: AuditQuery): Promise<AuditPage> {
  await assertStaff(ctx, 'moderation.audit');
  const where: SQL[] = [];

  if (input.actor) {
    const actor = await queryOne<{ id: number }>(
      ctx.db,
      sql`SELECT "id" FROM "User" WHERE lower("slug") = lower(${input.actor.trim()}) LIMIT 1`,
    );
    if (!actor) return { items: [], nextCursor: null, page: 1, pageSize: input.limit, total: 0, totalPages: 0 };
    where.push(sql`a."actorId" = ${actor.id}`);
  }
  if (input.action) {
    const action = input.action.trim();
    if (action.endsWith('*')) {
      where.push(sql`a."action" LIKE ${`${likeEscape(action.slice(0, -1))}%`}`);
    } else {
      where.push(sql`a."action" = ${action}`);
    }
  }
  if (input.target) {
    const [type, id] = input.target.split(':');
    where.push(sql`a."targetType" = ${type ?? ''} AND a."targetId" = ${Number(id)}`);
  }
  if (input.targetType) where.push(sql`a."targetType" = ${input.targetType}`);
  if (input.from) where.push(sql`a."createdAt" >= ${input.from}::timestamptz`);
  if (input.to) where.push(sql`a."createdAt" < ${input.to}::timestamptz`);
  if (input.q?.trim()) where.push(sql`a."reason" ILIKE ${`%${likeEscape(input.q.trim())}%`}`);
  const base = where.length > 0 ? sql.join(where, sql` AND `) : sql`TRUE`;
  if (input.page === undefined && input.cursor) {
    const position = decodeCursor(input.cursor);
    if (!position || !/^\d+$/.test(position.id)) {
      throw errors.validation('Invalid cursor', [{ path: 'cursor', code: 'invalid', message: 'invalid cursor' }]);
    }
    where.push(sql`(a."createdAt", a."id") < (${position.createdAt}::timestamptz, ${Number(position.id)}::bigint)`);
  }
  const condition = where.length > 0 ? sql.join(where, sql` AND `) : sql`TRUE`;
  let total: number | null = null;
  let totalPages = 0;
  let page = 1;
  let offset = 0;
  if (input.page !== undefined) {
    const counted = await queryOne<{ n: number }>(
      ctx.db,
      sql`SELECT count(*)::int AS "n" FROM "AuditLog" a WHERE ${base}`,
    );
    total = counted?.n ?? 0;
    totalPages = total === 0 ? 0 : Math.ceil(total / input.limit);
    page = Math.max(1, Math.min(input.page, Math.max(1, totalPages)));
    offset = (page - 1) * input.limit;
  }
  const list = await query<AuditRow>(
    ctx.db,
    sql`SELECT a."id", a."actorId", a."action", a."targetType", a."targetId", a."before", a."after", a."reason", a."createdAt"
          FROM "AuditLog" a
         WHERE ${condition}
         ORDER BY ${input.page !== undefined && input.sort === 'oldest' ? sql`a."createdAt" ASC, a."id" ASC` : sql`a."createdAt" DESC, a."id" DESC`}
         LIMIT ${input.limit + 1} OFFSET ${offset}`,
  );
  const slice = list.slice(0, input.limit);
  const refs = await loadUserRefs(
    ctx.db,
    config,
    slice.map((r) => r.actorId).filter((id): id is number => id !== null),
  );
  const items: AuditEntry[] = slice.map((r) => ({
    id: Number(r.id),
    actor: r.actorId === null ? null : (refs.get(r.actorId) ?? null),
    action: r.action,
    targetType: r.targetType,
    targetId: r.targetId,
    before: r.before ?? null,
    after: r.after ?? null,
    reason: r.reason,
    createdAt: (toDate(r.createdAt) ?? new Date(0)).toISOString(),
  }));
  const last = slice[slice.length - 1];
  const nextCursor =
    list.length > input.limit && last
      ? encodeCursor({ createdAt: (toDate(last.createdAt) ?? new Date(0)).toISOString(), id: Number(last.id) })
      : null;
  return { items, nextCursor, page, pageSize: input.limit, total, totalPages };
}
