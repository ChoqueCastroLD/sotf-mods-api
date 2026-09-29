/**
 * @sotf/db: database layer (PLAN §6): Drizzle schema for the legacy and v2 tables, hand-written
 * additive SQL migrations with their runner, the legacy ⊆ v2 superset guard and test helpers
 * (`@sotf/db/testing`).
 */
export {
  type CreateDbOptions,
  createDb,
  createPool,
  type Database,
  type DbHandle,
  parseUtcTimestamp,
  type Schema,
  schema,
} from './client.ts';
export type { Catalog, ColumnInfo, LegacyCatalogSnapshot, TableCatalog } from './guard/catalog.ts';
export { introspectCatalog } from './guard/catalog.ts';
export { legacyTableNames, loadLegacyCatalog } from './guard/snapshot.ts';
export { declaredLegacyColumns, formatGuardReport, type GuardIssue, type GuardReport, runGuard } from './guard.ts';
export * from './migrate.ts';
export * from './schema/_index.gen.ts';
export type * from './schema/_json.ts';
export { legacyTables } from './schema/legacy/_tables.ts';
export { type Executor, type Transaction, type WithTxOptions, withTx } from './tx.ts';
export { type Logger, type Queryable, silentLogger } from './types.ts';
