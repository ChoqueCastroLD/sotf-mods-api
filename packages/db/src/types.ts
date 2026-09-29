import type { QueryResult, QueryResultRow } from 'pg';

/** Anything that can run a parameterized query: a pg Pool, PoolClient or Client. */
export interface Queryable {
  query<R extends QueryResultRow = QueryResultRow>(text: string, values?: unknown[]): Promise<QueryResult<R>>;
}

/** Minimal logger accepted by the runner and the guard (pino, console-like or a no-op). */
export interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export const silentLogger: Logger = {
  info: () => {},
  warn: () => {},
  error: () => {},
};
