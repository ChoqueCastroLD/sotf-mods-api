/**
 * Same-origin calls of the social islands (comments, reviews, field reports) to `/api/v2`.
 *
 * Deliberately small (no Zod, no typed client: the islands have a size budget, PLAN §8.2); the
 * shapes follow `@sotf/contracts` through `import type`. Every call resolves (never throws) to a
 * discriminated result so the UI can render the failure states of PLAN §1.2: an API problem
 * (RFC 9457 `problem+json`), the network being down, or an unexpected answer. Mutations always
 * send `Content-Type: application/json` (the API's CSRF rule).
 */
import { problemDetail, t } from './messages.ts';

export const API = '/api/v2';

export interface FieldIssue {
  path: string;
  message: string;
  code?: string;
}

export interface Problem {
  status: number;
  code: string;
  detail?: string;
  requestId?: string;
  retryAfter?: number;
  errors: FieldIssue[];
}

export type Failure = { ok: false; kind: 'problem'; problem: Problem } | { ok: false; kind: 'network' };

export type Result<T> = { ok: true; status: number; data: T } | Failure;

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

function issuesOf(value: unknown): FieldIssue[] {
  if (!Array.isArray(value)) return [];
  const out: FieldIssue[] = [];
  for (const item of value) {
    if (!item || typeof item !== 'object') continue;
    const { path, message, code } = item as Record<string, unknown>;
    out.push({
      path: typeof path === 'string' ? path : '',
      message: typeof message === 'string' ? message : '',
      ...(typeof code === 'string' ? { code } : {}),
    });
  }
  return out;
}

function retryAfterOf(body: Record<string, unknown>, headers: Headers): number | undefined {
  if (typeof body.retryAfter === 'number' && Number.isFinite(body.retryAfter)) return Math.ceil(body.retryAfter);
  const seconds = Number(headers.get('retry-after'));
  return Number.isFinite(seconds) && seconds > 0 ? Math.ceil(seconds) : undefined;
}

export async function api<T>(method: Method, path: string, body?: unknown, signal?: AbortSignal): Promise<Result<T>> {
  const headers: Record<string, string> = { accept: 'application/json' };
  const init: RequestInit = { method, credentials: 'same-origin', headers };
  if (signal) init.signal = signal;
  if (method !== 'GET') {
    headers['content-type'] = 'application/json';
    init.body = JSON.stringify(body ?? {});
  }
  let response: Response;
  try {
    response = await fetch(path.startsWith('/') ? path : `${API}/${path}`, init);
  } catch {
    return { ok: false, kind: 'network' };
  }
  let payload: unknown = null;
  if (response.status !== 204) {
    try {
      payload = await response.json();
    } catch {
      payload = null;
    }
  }
  if (response.ok) return { ok: true, status: response.status, data: payload as T };
  const record = payload && typeof payload === 'object' ? (payload as Record<string, unknown>) : {};
  const retryAfter = retryAfterOf(record, response.headers);
  const requestId =
    typeof record.requestId === 'string' ? record.requestId : (response.headers.get('x-request-id') ?? undefined);
  return {
    ok: false,
    kind: 'problem',
    problem: {
      status: response.status,
      code: typeof record.code === 'string' ? record.code : response.status === 429 ? 'RATE_LIMITED' : 'INTERNAL',
      ...(typeof record.detail === 'string' ? { detail: record.detail } : {}),
      ...(requestId ? { requestId } : {}),
      ...(retryAfter !== undefined ? { retryAfter } : {}),
      errors: issuesOf(record.errors),
    },
  };
}

export const get = <T>(path: string, signal?: AbortSignal) => api<T>('GET', path, undefined, signal);

/** Localised one-line explanation of a failure (what happened and what to do). */
export function failureText(failure: Failure): string {
  if (failure.kind === 'network') {
    return typeof navigator !== 'undefined' && navigator.onLine === false
      ? t('social_offline')
      : t('errors_network_detail');
  }
  return problemDetail(failure.problem.code, failure.problem.retryAfter);
}

/** Reference shown under error messages («Ref. abc123»), for support requests. */
export function failureRef(failure: Failure): string | null {
  return failure.kind === 'problem' && failure.problem.requestId ? failure.problem.requestId : null;
}

export function isCode(failure: Failure, code: string): boolean {
  return failure.kind === 'problem' && failure.problem.code === code;
}
