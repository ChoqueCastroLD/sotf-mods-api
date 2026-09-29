/**
 * Delta replay for the disaster runbook (PLAN §6.14 R4): after restoring the pre-cut-over dump
 * into a **new** database, re-inject every row created since then from the damaged database.
 *
 * - Rows with `id` above the watermark of each table are copied from `source` to `target`, in
 *   foreign-key order (users and mods before what hangs from them), append-only tables first in
 *   spirit: nothing that already exists in the target is updated (`ON CONFLICT DO NOTHING`).
 * - Watermarks: `--since-watermarks` takes `max(id)` of each table in the target (the restored
 *   dump); `--watermarks <file>` takes the values noted at D1.
 * - Values travel as JSON and are rebuilt with `jsonb_populate_recordset`, so every type
 *   (timestamps without time zone included) round-trips exactly. Generated columns are skipped;
 *   identity columns are written with `OVERRIDING SYSTEM VALUE`; sequences are moved past the
 *   copied ids.
 * - Updates to existing rows (counters, statuses) are not replayed: `legacy.counters` and B11
 *   recompute them.
 */
import type pg from 'pg';
import { ident, inTransaction } from './db.ts';

/** Replay order: parents before children; v2 append-only logs last. */
export const REPLAY_TABLES = [
  'User',
  'Category',
  'Tag',
  'Mod',
  'ModVersion',
  'ModImage',
  'Comment',
  'ModFavorite',
  'ModReview',
  'ModDownload',
  'KelvinGPTMessages',
  'PendingMention',
  'Token',
  'PasswordResetToken',
  'AuthEvent',
  'AuditLog',
  'Notification',
  'Report',
  'CompatReport',
  'XpEvent',
  'AnalyticsEvent',
  'DataFixAudit',
] as const;

export interface ReplayTableReport {
  table: string;
  watermark: number;
  pending: number;
  inserted: number;
  skipped?: string;
}

interface ColumnMeta {
  name: string;
  generated: boolean;
  identityAlways: boolean;
}

async function columns(client: pg.ClientBase, table: string): Promise<ColumnMeta[]> {
  const { rows } = await client.query<{
    column_name: string;
    is_generated: string;
    identity_generation: string | null;
  }>(
    `SELECT column_name, is_generated, identity_generation FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1 ORDER BY ordinal_position`,
    [table],
  );
  return rows.map((r) => ({
    name: r.column_name,
    generated: r.is_generated === 'ALWAYS',
    identityAlways: r.identity_generation === 'ALWAYS',
  }));
}

export async function targetWatermarks(
  target: pg.ClientBase,
  tables: readonly string[],
): Promise<Record<string, number>> {
  const out: Record<string, number> = {};
  for (const table of tables) {
    const cols = await columns(target, table);
    if (!cols.some((c) => c.name === 'id')) continue;
    const { rows } = await target.query<{ max: string | null }>(`SELECT max("id")::text AS max FROM ${ident(table)}`);
    out[table] = Number(rows[0]?.max ?? 0);
  }
  return out;
}

export async function replayDelta(
  source: pg.ClientBase,
  target: pg.ClientBase,
  options: { watermarks: Record<string, number>; apply: boolean; batchSize?: number; tables?: readonly string[] },
): Promise<ReplayTableReport[]> {
  const reports: ReplayTableReport[] = [];
  const batchSize = options.batchSize ?? 5000;
  for (const table of options.tables ?? REPLAY_TABLES) {
    const [src, dst] = [await columns(source, table), await columns(target, table)];
    const watermark = options.watermarks[table] ?? 0;
    if (src.length === 0 || dst.length === 0) {
      reports.push({ table, watermark, pending: 0, inserted: 0, skipped: 'table missing on one side' });
      continue;
    }
    if (!src.some((c) => c.name === 'id')) {
      reports.push({ table, watermark, pending: 0, inserted: 0, skipped: 'no id column' });
      continue;
    }
    const srcNames = new Set(src.filter((c) => !c.generated).map((c) => c.name));
    const common = dst.filter((c) => !c.generated && srcNames.has(c.name));
    const list = common.map((c) => ident(c.name)).join(', ');
    const overriding = common.some((c) => c.identityAlways) ? ' OVERRIDING SYSTEM VALUE' : '';
    const { rows: countRows } = await source.query<{ n: string }>(
      `SELECT count(*) AS n FROM ${ident(table)} WHERE "id" > $1`,
      [watermark],
    );
    const pending = Number(countRows[0]?.n ?? 0);
    let inserted = 0;
    if (options.apply && pending > 0) {
      let cursor = watermark;
      for (;;) {
        const { rows } = await source.query<{ id: string; row: unknown }>(
          `SELECT "id"::text AS id, to_jsonb(t) AS row FROM ${ident(table)} t WHERE "id" > $1 ORDER BY "id" LIMIT $2`,
          [cursor, batchSize],
        );
        if (rows.length === 0) break;
        cursor = Number(rows[rows.length - 1]?.id);
        const result = await inTransaction(target, () =>
          target.query(
            `INSERT INTO ${ident(table)} (${list})${overriding}
             SELECT ${list} FROM jsonb_populate_recordset(NULL::${ident(table)}, $1::jsonb)
             ON CONFLICT DO NOTHING`,
            [JSON.stringify(rows.map((r) => r.row))],
          ),
        );
        inserted += result.rowCount ?? 0;
      }
      await target.query(
        `SELECT setval(seq, greatest(m.max, 1), m.max > 0)
           FROM (SELECT pg_get_serial_sequence($1, 'id') AS seq) s,
                (SELECT coalesce(max("id"), 0) AS max FROM ${ident(table)}) m
          WHERE seq IS NOT NULL`,
        [`public.${ident(table)}`],
      );
    }
    reports.push({ table, watermark, pending, inserted });
  }
  return reports;
}
