/**
 * `verify-snapshot` (PLAN §6.11): takes the JSON snapshot of `sql/verify-snapshot.sql` and diffs
 * two snapshots.
 *
 * The diff accepts only the expected differences: a legacy table may differ from the "before"
 * snapshot only if its checksum **with the audited fixes undone** equals the before checksum
 * (B4 on `"Mod"."type"`, B8 on `"shortDescription"`, `admin:grant` on `"User"."isTrusted"`, the
 * B5 archive for `"ModFavorite"`). Counter sums and every `"ModDownload"` block must be identical.
 * With `strict` (two runs of the same backfills), the v2 section must be identical too.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type pg from 'pg';
import { SQL_DIR } from './constants.ts';
import { tableExists } from './db.ts';

export interface TableSum {
  count: number;
  md5: string;
}

export interface Snapshot {
  format: number;
  tables: Record<string, TableSum>;
  sums: Record<string, number>;
  modDownloadBlocks: Array<{ block: number; count: number; md5: string }>;
  fixes?: {
    Mod: TableSum;
    User: TableSum;
    ModFavorite: TableSum;
    audit: Record<string, number>;
    archive: Record<string, number>;
  };
  v2?: Record<string, unknown>;
}

/** Splits an SQL file into its `-- @section <name>` parts. */
export function sqlSections(text: string): Map<string, string> {
  const sections = new Map<string, string>();
  let name: string | null = null;
  let lines: string[] = [];
  const flush = () => {
    if (name) sections.set(name, lines.join('\n').trim());
  };
  for (const line of text.split('\n')) {
    const match = /^-- @section (\S.*?)\s*$/.exec(line);
    if (match) {
      flush();
      name = match[1] as string;
      lines = [];
    } else if (name) lines.push(line);
  }
  flush();
  return sections;
}

export async function takeSnapshot(client: pg.ClientBase): Promise<Snapshot> {
  const sections = sqlSections(readFileSync(join(SQL_DIR, 'verify-snapshot.sql'), 'utf8'));
  const run = async (name: string) => {
    const { rows } = await client.query<{ snapshot: Record<string, unknown> }>(sections.get(name) as string);
    return rows[0]?.snapshot ?? {};
  };
  const legacy = (await run('legacy')) as unknown as Snapshot;
  if (await tableExists(client, 'DataFixAudit')) Object.assign(legacy, await run('v2'));
  return legacy;
}

export interface Difference {
  kind: 'expected' | 'unexpected';
  where: string;
  detail: string;
}

export interface SnapshotDiff {
  ok: boolean;
  differences: Difference[];
}

const stable = (value: unknown) => JSON.stringify(value);

/** Maps each legacy table whose undone checksum lives in `fixes` to the fixes that can explain it. */
const FIXABLE: Record<string, (after: Snapshot) => string> = {
  Mod: (a) => describeAudit(a, 'Mod.'),
  User: (a) => describeAudit(a, 'User.'),
  ModFavorite: (a) =>
    `archived by B5: ${Object.entries(a.fixes?.archive ?? {})
      .map(([reason, n]) => `${n} ${reason}`)
      .join(', ')}`,
};

function describeAudit(after: Snapshot, prefix: string): string {
  const entries = Object.entries(after.fixes?.audit ?? {}).filter(([k]) => k.split(':')[1]?.startsWith(prefix));
  return `audited fixes: ${entries.map(([k, n]) => `${k} ×${n}`).join(', ') || 'none'}`;
}

export function compareSnapshots(before: Snapshot, after: Snapshot, options: { strict?: boolean } = {}): SnapshotDiff {
  const differences: Difference[] = [];
  const tables = new Set([...Object.keys(before.tables), ...Object.keys(after.tables)]);
  for (const table of [...tables].sort()) {
    const b = before.tables[table];
    const a = after.tables[table];
    if (b && a && b.count === a.count && b.md5 === a.md5) continue;
    const undone = after.fixes?.[table as 'Mod' | 'User' | 'ModFavorite'];
    const explain = FIXABLE[table];
    if (!options.strict && b && undone && explain && undone.count === b.count && undone.md5 === b.md5) {
      const delta = a ? a.count - b.count : 0;
      differences.push({
        kind: 'expected',
        where: table,
        detail: `${explain(after)}${delta !== 0 ? ` (rows ${b.count} → ${a?.count})` : ''}`,
      });
    } else {
      differences.push({
        kind: 'unexpected',
        where: table,
        detail: `count ${b?.count ?? '∅'} → ${a?.count ?? '∅'}, md5 ${b?.md5?.slice(0, 8) ?? '∅'} → ${a?.md5?.slice(0, 8) ?? '∅'}`,
      });
    }
  }
  for (const key of new Set([...Object.keys(before.sums), ...Object.keys(after.sums)])) {
    if (before.sums[key] !== after.sums[key]) {
      differences.push({
        kind: 'unexpected',
        where: `sum(${key})`,
        detail: `${before.sums[key]} → ${after.sums[key]}`,
      });
    }
  }
  const blocks = new Map(before.modDownloadBlocks.map((b) => [b.block, b]));
  for (const a of after.modDownloadBlocks) {
    const b = blocks.get(a.block);
    blocks.delete(a.block);
    if (!b || b.md5 !== a.md5 || b.count !== a.count) {
      differences.push({
        kind: 'unexpected',
        where: `ModDownload block ${a.block}`,
        detail: `ids ${a.block * 100_000}–${a.block * 100_000 + 99_999}: count ${b?.count ?? '∅'} → ${a.count}`,
      });
    }
  }
  for (const b of blocks.values()) {
    differences.push({ kind: 'unexpected', where: `ModDownload block ${b.block}`, detail: 'missing after' });
  }
  if (options.strict) {
    for (const section of ['fixes', 'v2'] as const) {
      const bs = (before[section] ?? {}) as Record<string, unknown>;
      const as = (after[section] ?? {}) as Record<string, unknown>;
      for (const key of new Set([...Object.keys(bs), ...Object.keys(as)])) {
        if (stable(bs[key]) !== stable(as[key])) {
          differences.push({ kind: 'unexpected', where: `${section}.${key}`, detail: 'differs' });
        }
      }
    }
  }
  return { ok: differences.every((d) => d.kind === 'expected'), differences };
}
