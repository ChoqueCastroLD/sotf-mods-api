/**
 * Transactions (PLAN §2.6): domain writes and `emit(tx, event)` run in one transaction, so events
 * are never lost. `withTx` retries serialization failures and deadlocks, which are safe to retry
 * because the whole callback re-runs from scratch.
 */
import type { Database } from './client.ts';

export type Transaction = Parameters<Parameters<Database['transaction']>[0]>[0];
/** A database or a transaction: services accept either. */
export type Executor = Database | Transaction;

export interface WithTxOptions {
  isolationLevel?: 'read committed' | 'repeatable read' | 'serializable';
  accessMode?: 'read only' | 'read write';
  /** Retries on 40001 (serialization_failure) and 40P01 (deadlock_detected). Default 3. */
  retries?: number;
}

const RETRYABLE = new Set(['40001', '40P01']);

function sqlState(error: unknown): string | undefined {
  let current: unknown = error;
  for (let depth = 0; depth < 5 && current; depth += 1) {
    const code = (current as { code?: unknown }).code;
    if (typeof code === 'string') return code;
    current = (current as { cause?: unknown }).cause;
  }
  return undefined;
}

export async function withTx<T>(
  db: Database,
  fn: (tx: Transaction) => Promise<T>,
  options: WithTxOptions = {},
): Promise<T> {
  const retries = options.retries ?? 3;
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await db.transaction(fn, {
        isolationLevel: options.isolationLevel ?? 'read committed',
        accessMode: options.accessMode ?? 'read write',
      });
    } catch (error) {
      const code = sqlState(error);
      if (code && RETRYABLE.has(code) && attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 20 * 2 ** attempt + Math.random() * 20));
        continue;
      }
      throw error;
    }
  }
}
