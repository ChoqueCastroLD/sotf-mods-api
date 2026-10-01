/**
 * Server-side data of `/logs/:id`: the log summary read without cookies (the page is never cached
 * or indexed; the viewer island fetches the text itself).
 */
import { isApiError } from '@sotf/contracts/client';
import type { LogDTO } from '@sotf/contracts/logs';
import { serverApi } from '../../lib/api.ts';

export const LOG_ID_PATTERN = /^[A-Za-z0-9_-]{24}$/;

export type LogPageData =
  | { kind: 'ok'; log: LogDTO }
  | { kind: 'gone'; reason: 'expired' | 'deleted' | 'reported' }
  | { kind: 'not-found' }
  | { kind: 'error' };

export async function loadLog(id: string): Promise<LogPageData> {
  try {
    const log = await serverApi().logs.get({ params: { id } }, { signal: AbortSignal.timeout(4000) });
    return { kind: 'ok', log };
  } catch (error) {
    if (isApiError(error)) {
      if (error.status === 404) return { kind: 'not-found' };
      if (error.status === 410) {
        const detail = error.problem.detail;
        return { kind: 'gone', reason: detail === 'deleted' || detail === 'reported' ? detail : 'expired' };
      }
    }
    return { kind: 'error' };
  }
}
