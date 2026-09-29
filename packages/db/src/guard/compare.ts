/**
 * The "legacy ⊆ v2" comparison (PLAN §6.2): every legacy table, column (type, nullability and
 * default), constraint, index and trigger of the frozen snapshot must still exist, unchanged, in
 * the live catalog. The only accepted difference is the additive "updatedAt" default of 0002.
 * Columns on legacy tables that are neither legacy nor declared by the v2 Drizzle schema are
 * unexpected drift.
 */
import type { Catalog, TableCatalog } from './catalog.ts';

export type GuardSeverity = 'error' | 'warning';

export interface GuardIssue {
  severity: GuardSeverity;
  table: string;
  kind: 'table' | 'column' | 'constraint' | 'index' | 'trigger';
  name: string;
  message: string;
}

export interface GuardReport {
  ok: boolean;
  issues: GuardIssue[];
  /** Legacy tables checked. */
  tables: number;
  /** v2 objects found on legacy tables (columns, constraints, indexes, triggers). */
  additions: number;
}

export interface CompareOptions {
  /**
   * Columns that v2 is allowed to add to each legacy table (from the Drizzle schema). When
   * omitted, extra columns are not checked.
   */
  declaredColumns?: ReadonlyMap<string, ReadonlySet<string>>;
  /**
   * Legacy columns whose default may go from none to the given expression (additive change).
   * Defaults to `"updatedAt"` -> `CURRENT_TIMESTAMP` on every legacy table (migration 0002).
   */
  allowedDefaultAdditions?: (table: string, column: string) => string | null;
}

export const updatedAtDefaultAddition = (_table: string, column: string): string | null =>
  column === 'updatedAt' ? 'CURRENT_TIMESTAMP' : null;

export function compareLegacyCatalog(snapshot: Catalog, live: Catalog, options: CompareOptions = {}): GuardReport {
  const issues: GuardIssue[] = [];
  const allowDefault = options.allowedDefaultAdditions ?? updatedAtDefaultAddition;
  let additions = 0;
  const push = (severity: GuardSeverity, table: string, kind: GuardIssue['kind'], name: string, message: string) =>
    issues.push({ severity, table, kind, name, message });

  for (const [tableName, legacy] of Object.entries(snapshot.tables)) {
    const current: TableCatalog | undefined = live.tables[tableName];
    if (!current) {
      push('error', tableName, 'table', tableName, 'legacy table is missing');
      continue;
    }

    for (const [name, want] of Object.entries(legacy.columns)) {
      const got = current.columns[name];
      if (!got) {
        push('error', tableName, 'column', name, 'legacy column is missing');
        continue;
      }
      if (got.type !== want.type) push('error', tableName, 'column', name, `type changed: ${want.type} -> ${got.type}`);
      if (got.nullable !== want.nullable) {
        push(
          'error',
          tableName,
          'column',
          name,
          `nullability changed: ${nullability(want.nullable)} -> ${nullability(got.nullable)}`,
        );
      }
      if (got.generated !== want.generated) push('error', tableName, 'column', name, 'generated expression changed');
      if (got.identity !== want.identity) push('error', tableName, 'column', name, 'identity changed');
      if (got.default !== want.default) {
        const allowed = want.default === null ? allowDefault(tableName, name) : null;
        if (allowed === null || got.default !== allowed) {
          push(
            'error',
            tableName,
            'column',
            name,
            `default changed: ${want.default ?? 'none'} -> ${got.default ?? 'none'}`,
          );
        }
      }
    }

    const declared = options.declaredColumns?.get(tableName);
    for (const name of Object.keys(current.columns)) {
      if (name in legacy.columns) continue;
      additions += 1;
      if (options.declaredColumns && !declared?.has(name)) {
        push(
          'error',
          tableName,
          'column',
          name,
          'unexpected column on a legacy table (not legacy, not in the v2 schema)',
        );
      }
    }

    for (const [name, want] of Object.entries(legacy.constraints)) {
      const got = current.constraints[name];
      if (!got) push('error', tableName, 'constraint', name, 'legacy constraint is missing');
      else if (got.definition !== want.definition || got.type !== want.type) {
        push('error', tableName, 'constraint', name, `definition changed: ${want.definition} -> ${got.definition}`);
      } else if (want.validated && !got.validated) {
        push('error', tableName, 'constraint', name, 'constraint is no longer validated');
      }
    }
    additions += Object.keys(current.constraints).filter((n) => !(n in legacy.constraints)).length;

    for (const [name, want] of Object.entries(legacy.indexes)) {
      const got = current.indexes[name];
      if (!got) push('error', tableName, 'index', name, 'legacy index is missing');
      else if (got.definition !== want.definition) {
        push('error', tableName, 'index', name, `definition changed: ${want.definition} -> ${got.definition}`);
      } else if (!got.valid) push('error', tableName, 'index', name, 'legacy index is INVALID');
    }
    for (const [name, got] of Object.entries(current.indexes)) {
      if (name in legacy.indexes) continue;
      additions += 1;
      if (!got.valid) {
        push(
          'warning',
          tableName,
          'index',
          name,
          'v2 index is INVALID (failed CONCURRENTLY build); db:migrate rebuilds it',
        );
      }
    }

    for (const [name, want] of Object.entries(legacy.triggers)) {
      const got = current.triggers[name];
      if (!got) push('error', tableName, 'trigger', name, 'legacy trigger is missing');
      else if (got !== want) push('error', tableName, 'trigger', name, 'legacy trigger definition changed');
    }
    additions += Object.keys(current.triggers).filter((n) => !(n in legacy.triggers)).length;
  }

  return {
    ok: !issues.some((i) => i.severity === 'error'),
    issues,
    tables: Object.keys(snapshot.tables).length,
    additions,
  };
}

const nullability = (nullable: boolean) => (nullable ? 'NULL' : 'NOT NULL');

export function formatGuardReport(report: GuardReport): string {
  const lines = [
    `legacy ⊆ v2 guard: ${report.ok ? 'OK' : 'FAILED'} (${report.tables} legacy tables, ${report.additions} v2 additions)`,
  ];
  for (const issue of report.issues) {
    lines.push(
      `  ${issue.severity === 'error' ? '✘' : '!'} "${issue.table}" ${issue.kind} "${issue.name}": ${issue.message}`,
    );
  }
  return lines.join('\n');
}
