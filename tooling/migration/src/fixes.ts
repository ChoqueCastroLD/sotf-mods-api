/**
 * Audited fixes (PLAN §6.1 rule 3, §6.14 R2): `db:revert-fix <fixId>` and `admin:grant`.
 *
 * Every in-place change of a legacy column is recorded in `"DataFixAudit"` (old and new value as
 * JSON). Reverting restores the old value **only if the column still holds the value the fix
 * wrote**; otherwise the row is reported as a conflict and left alone (someone changed it since).
 * Whole rows moved out of a legacy table (`columnName = '*'`, B5) are put back from the audit copy
 * and removed from their archive.
 */
import type pg from 'pg';
import { ident, inTransaction } from './db.ts';

/** Legacy tables whose rows can be moved by a fix, and the archive that holds them. */
const ROW_ARCHIVES: Readonly<Record<string, string>> = { ModFavorite: 'ModFavoriteArchive' };

export interface RevertReport {
  fixId: string;
  reverted: number;
  conflicts: Array<{ auditId: string; table: string; rowId: string; column: string; reason: string }>;
  dryRun: boolean;
}

async function columnsOf(client: pg.ClientBase, table: string): Promise<Set<string>> {
  const { rows } = await client.query<{ column_name: string }>(
    `SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = $1`,
    [table],
  );
  return new Set(rows.map((r) => r.column_name));
}

interface AuditRow {
  id: string;
  tableName: string;
  rowId: string;
  columnName: string;
  oldValue: unknown;
  newValue: unknown;
}

export async function revertFix(
  client: pg.ClientBase,
  fixId: string,
  options: { dryRun?: boolean; rowIds?: readonly string[] } = {},
): Promise<RevertReport> {
  const report: RevertReport = { fixId, reverted: 0, conflicts: [], dryRun: options.dryRun === true };
  await inTransaction(
    client,
    async () => {
      const { rows } = await client.query<AuditRow>(
        `SELECT "id", "tableName", "rowId", "columnName", "oldValue", "newValue" FROM "DataFixAudit"
          WHERE "fixId" = $1 AND "revertedAt" IS NULL AND ($2::text[] IS NULL OR "rowId" = ANY($2::text[]))
          ORDER BY "id" DESC FOR UPDATE`,
        [fixId, options.rowIds && options.rowIds.length > 0 ? options.rowIds : null],
      );
      const known = new Map<string, Set<string>>();
      for (const audit of rows) {
        let columns = known.get(audit.tableName);
        if (!columns) {
          columns = await columnsOf(client, audit.tableName);
          known.set(audit.tableName, columns);
        }
        const conflict = (reason: string) =>
          report.conflicts.push({
            auditId: audit.id,
            table: audit.tableName,
            rowId: audit.rowId,
            column: audit.columnName,
            reason,
          });
        if (columns.size === 0) {
          conflict('table does not exist');
          continue;
        }
        const table = ident(audit.tableName);
        await client.query('SAVEPOINT revert_row');
        try {
          let done = false;
          if (audit.columnName === '*') {
            const archive = ROW_ARCHIVES[audit.tableName];
            const values = (audit.oldValue ?? {}) as Record<string, unknown>;
            const cols = Object.keys(values).filter((c) => columns.has(c));
            if (!archive || cols.length === 0 || !cols.includes('id')) {
              conflict('row restore is not supported for this table');
            } else {
              const list = cols.map(ident).join(', ');
              const inserted = await client.query(
                `INSERT INTO ${table} (${list}) SELECT ${list} FROM jsonb_populate_record(NULL::${table}, $1::jsonb)
                 ON CONFLICT ("id") DO NOTHING`,
                [JSON.stringify(values)],
              );
              if (inserted.rowCount === 1) {
                await client.query(`DELETE FROM ${ident(archive)} WHERE "id"::text = $1`, [audit.rowId]);
                done = true;
              } else conflict('a row with this id exists again');
            }
          } else if (!columns.has(audit.columnName)) {
            conflict('column does not exist');
          } else {
            const column = ident(audit.columnName);
            const updated = await client.query(
              `UPDATE ${table} SET ${column} = (jsonb_populate_record(NULL::${table}, jsonb_build_object($2::text, $3::jsonb))).${column}
                WHERE "id"::text = $1
                  AND ${column} IS NOT DISTINCT FROM (jsonb_populate_record(NULL::${table}, jsonb_build_object($2::text, $4::jsonb))).${column}`,
              [audit.rowId, audit.columnName, JSON.stringify(audit.oldValue), JSON.stringify(audit.newValue)],
            );
            if (updated.rowCount === 1) done = true;
            else conflict('the value changed after the fix (or the row is gone)');
          }
          if (done) {
            await client.query(`UPDATE "DataFixAudit" SET "revertedAt" = now() WHERE "id" = $1`, [audit.id]);
            report.reverted += 1;
          }
          await client.query('RELEASE SAVEPOINT revert_row');
        } catch (error) {
          await client.query('ROLLBACK TO SAVEPOINT revert_row');
          const message = error instanceof Error ? error.message : String(error);
          const code = (error as { code?: string }).code;
          const constraint = (error as { constraint?: string }).constraint;
          conflict(
            code === '23505' && constraint
              ? `${message}: the row would break "${constraint}", created after the fix; roll that migration back first (pnpm db:migrate down)`
              : message,
          );
        }
      }
    },
    { rollback: options.dryRun === true },
  );
  return report;
}

export type Role = 'user' | 'moderator' | 'admin';
export const ROLES: readonly Role[] = ['user', 'moderator', 'admin'];

export interface GrantReport {
  userId: number;
  email: string;
  previousRole: string;
  role: Role;
  trustedSet: boolean;
  dryRun: boolean;
}

export class GrantError extends Error {
  override name = 'GrantError';
}

/**
 * Grants a role (PLAN §14.3: the admin account is granted during the cut-over). Naming a moderator
 * or admin also sets the legacy `isTrusted` (so the legacy site keeps working during coexistence,
 * PLAN §6.8) with an audit row (`fixId = 'admin-grant'`); `isTrusted` is never lowered.
 */
export async function grantRole(
  client: pg.ClientBase,
  input: { email: string; role: Role; dryRun?: boolean; reason?: string },
): Promise<GrantReport> {
  if (!ROLES.includes(input.role)) throw new GrantError(`unknown role "${input.role}" (${ROLES.join(', ')})`);
  const normalized = input.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+$/.test(normalized)) throw new GrantError(`"${input.email}" is not an email address`);
  return inTransaction(
    client,
    async () => {
      const { rows } = await client.query<{ id: number; email: string; role: string; isTrusted: boolean }>(
        `SELECT "id", "email", "role", "isTrusted" FROM "User"
          WHERE coalesce("emailNormalized", lower(btrim("email"))) = $1 ORDER BY "id" FOR UPDATE`,
        [normalized],
      );
      if (rows.length === 0) {
        throw new GrantError(
          `no account uses ${normalized}: create it with the normal sign-up and email verification, then run admin:grant again`,
        );
      }
      if (rows.length > 1) {
        throw new GrantError(
          `${rows.length} accounts share ${normalized} (ids ${rows.map((r) => r.id).join(', ')}): resolve the collision first (B6 report)`,
        );
      }
      const user = rows[0] as (typeof rows)[number];
      const trustedSet = input.role !== 'user' && !user.isTrusted;
      await client.query(`UPDATE "User" SET "role" = $2 WHERE "id" = $1`, [user.id, input.role]);
      if (trustedSet) {
        await client.query(`UPDATE "User" SET "isTrusted" = true WHERE "id" = $1`, [user.id]);
        await client.query(
          `INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
           VALUES ('admin-grant', 'User', $1, 'isTrusted', 'false'::jsonb, 'true'::jsonb)`,
          [String(user.id)],
        );
      }
      await client.query(
        `INSERT INTO "AuditLog" ("actorId", "action", "targetType", "targetId", "before", "after", "reason")
         VALUES (NULL, 'user.role_granted', 'user', $1, $2::jsonb, $3::jsonb, $4)`,
        [
          user.id,
          JSON.stringify({ role: user.role, isTrusted: user.isTrusted }),
          JSON.stringify({ role: input.role, isTrusted: user.isTrusted || trustedSet }),
          input.reason ?? 'pnpm admin:grant',
        ],
      );
      return {
        userId: user.id,
        email: user.email,
        previousRole: user.role,
        role: input.role,
        trustedSet,
        dryRun: input.dryRun === true,
      };
    },
    { rollback: input.dryRun === true },
  );
}
