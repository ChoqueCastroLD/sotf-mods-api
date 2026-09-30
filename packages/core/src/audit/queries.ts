/**
 * `GET /ranger/audit?cursor=&actor=&action=&target=` (🛡, session < 12 h): the audit log, newest
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
    if (!actor) return { items: [], nextCursor: null };
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
  if (input.cursor) {
    const position = decodeCursor(input.cursor);
    if (!position || !/^\d+$/.test(position.id)) {
      throw errors.validation('Invalid cursor', [{ path: 'cursor', code: 'invalid', message: 'invalid cursor' }]);
    }
    where.push(sql`(a."createdAt", a."id") < (${position.createdAt}::timestamptz, ${Number(position.id)}::bigint)`);
  }
  const condition = where.length > 0 ? sql.join(where, sql` AND `) : sql`TRUE`;
  const list = await query<AuditRow>(
    ctx.db,
    sql`SELECT a."id", a."actorId", a."action", a."targetType", a."targetId", a."before", a."after", a."reason", a."createdAt"
          FROM "AuditLog" a
         WHERE ${condition}
         ORDER BY a."createdAt" DESC, a."id" DESC
         LIMIT ${input.limit + 1}`,
  );
  const page = list.slice(0, input.limit);
  const refs = await loadUserRefs(
    ctx.db,
    config,
    page.map((r) => r.actorId).filter((id): id is number => id !== null),
  );
  const items: AuditEntry[] = page.map((r) => ({
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
  const last = page[page.length - 1];
  const nextCursor =
    list.length > input.limit && last
      ? encodeCursor({ createdAt: (toDate(last.createdAt) ?? new Date(0)).toISOString(), id: Number(last.id) })
      : null;
  return { items, nextCursor };
}
