/**
 * The immutable `AuditLog` (PLAN §7.4 "Auditoría", §9.1 "Abuso de moderador"): one row per
 * moderator/admin action — actor, action, target, before/after, reason, hashed IP and time.
 *
 * - `recordAudit(exec, ctx, entry)` appends a row **inside the caller's transaction** (the audit
 *   entry commits or rolls back with the write it describes). Every moderation, sanction, role,
 *   taxonomy, award, announcement and setting write goes through it; other domains may use it too
 *   (it writes the same shape as the local helpers of compat and publishing).
 * - The table is insert-only: `ops/sql/roles.sql` revokes UPDATE and DELETE from the application
 *   role, so a compromised or buggy process cannot rewrite history. It has no foreign keys (the log
 *   outlives the rows it describes).
 * - `before`/`after` are small JSON snapshots of the fields that changed; never secrets or full
 *   rows (`redactSecrets` masks known secret-bearing fields such as webhook URLs).
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';

export type AuditJson = string | number | boolean | null | AuditJson[] | { [key: string]: AuditJson };

export interface AuditEntry {
  /** Dotted verb, e.g. `mod.reject`, `sanction.create`, `setting.update`. */
  action: string;
  /** `mod`, `version`, `user`, `report`, `comment`, `review`, `scan`, `category`, `setting`… */
  targetType: string | null;
  targetId: number | null;
  before?: Record<string, unknown> | null;
  after?: Record<string, unknown> | null;
  reason?: string | null;
  /** Overrides the context actor (system actions such as the report auto-hide pass `null`). */
  actorId?: number | null;
}

const MAX_REASON = 2000;

/** JSON-safe copy (Dates → ISO strings, `undefined` dropped). */
function toJson(value: Record<string, unknown> | null | undefined): string | null {
  if (!value) return null;
  return JSON.stringify(value, (_key, v: unknown) => (v instanceof Date ? v.toISOString() : v));
}

/** Appends an entry and returns its id. Pass the write's transaction as `exec`. */
export async function recordAudit(exec: Executor, ctx: Ctx, entry: AuditEntry): Promise<number> {
  const actorId = entry.actorId === undefined ? (ctx.actor?.userId ?? null) : entry.actorId;
  const reason = entry.reason?.trim() ? entry.reason.trim().slice(0, MAX_REASON) : null;
  const row = await queryOne<{ id: string | number }>(
    exec,
    sql`INSERT INTO "AuditLog" ("actorId", "action", "targetType", "targetId", "before", "after", "reason", "ipHash")
        VALUES (${actorId}, ${entry.action}, ${entry.targetType}, ${entry.targetId},
                ${toJson(entry.before)}::jsonb, ${toJson(entry.after)}::jsonb, ${reason}, ${ctx.ipHash})
        RETURNING "id"`,
  );
  if (!row) throw new Error('AuditLog insert returned no row');
  return Number(row.id);
}

/** Keys whose values are secrets or capability URLs: never copied into the log in clear. */
const SECRET_KEYS = new Set(['url', 'token', 'secret', 'apiKey', 'password', 'webhook']);

/**
 * Masks secret-bearing values in a snapshot (Discord webhook URLs keep only their host and a
 * fingerprint of the path so two versions can still be told apart).
 */
export function redactSecrets(value: unknown): AuditJson {
  if (value === null || value === undefined) return null;
  if (Array.isArray(value)) return value.map(redactSecrets);
  if (typeof value === 'object') {
    const out: Record<string, AuditJson> = {};
    for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
      out[key] = SECRET_KEYS.has(key) && typeof v === 'string' ? maskSecret(v) : redactSecrets(v);
    }
    return out;
  }
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value;
  return null;
}

function maskSecret(value: string): string {
  let host = '';
  try {
    host = new URL(value).host;
  } catch {
    host = '';
  }
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return `${host ? `${host}/` : ''}…#${hash.toString(16).padStart(8, '0')}`;
}
