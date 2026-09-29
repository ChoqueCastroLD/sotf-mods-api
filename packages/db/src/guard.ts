/**
 * Legacy ⊆ v2 superset guard (PLAN §6.2, §14.5): read-only introspection of the live catalog,
 * compared against the frozen legacy snapshot. Run by `pnpm db:guard`, in CI, and by the runner
 * before (drift → abort) and after every migration run.
 */
import { getTableConfig, type PgTable } from 'drizzle-orm/pg-core';
import { type Catalog, introspectCatalog } from './guard/catalog.ts';
import { type CompareOptions, compareLegacyCatalog, type GuardReport } from './guard/compare.ts';
import { loadLegacyCatalog } from './guard/snapshot.ts';
import { legacyTables } from './schema/legacy/_tables.ts';
import type { Queryable } from './types.ts';

export { formatGuardReport, type GuardIssue, type GuardReport } from './guard/compare.ts';

/** Columns the Drizzle schema declares on each legacy table (legacy + v2 additions). */
export function declaredLegacyColumns(tables: readonly PgTable[] = legacyTables): Map<string, Set<string>> {
  const declared = new Map<string, Set<string>>();
  for (const table of tables) {
    const config = getTableConfig(table);
    declared.set(config.name, new Set(config.columns.map((c) => c.name)));
  }
  return declared;
}

export interface GuardOptions {
  legacyCatalog?: Catalog;
  /** Check that every non-legacy column of a legacy table is declared in Drizzle (default true). */
  checkUnexpectedColumns?: boolean;
  allowedDefaultAdditions?: CompareOptions['allowedDefaultAdditions'];
}

export async function runGuard(db: Queryable, options: GuardOptions = {}): Promise<GuardReport> {
  const snapshot = options.legacyCatalog ?? loadLegacyCatalog();
  const live = await introspectCatalog(db, { tables: Object.keys(snapshot.tables) });
  return compareLegacyCatalog(snapshot, live, {
    declaredColumns: options.checkUnexpectedColumns === false ? undefined : declaredLegacyColumns(),
    allowedDefaultAdditions: options.allowedDefaultAdditions,
  });
}
