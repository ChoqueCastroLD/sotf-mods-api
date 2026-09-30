/**
 * The few API calls the shell itself makes (`/me`, sign out, unread count, the stream URL), as
 * plain `fetch` so the typed client's route table stays out of the shell bundle. Failures throw
 * the same `ApiError` as `@sotf/contracts/client` (screens use `lib/api.ts`, the full client).
 */
import { ApiError } from '@sotf/contracts/client';
import { type ErrorCode, problemType } from '@sotf/contracts/error-codes';
import type { ProblemDTO } from '@sotf/contracts/errors';
import type { MeDTO } from '@sotf/contracts/me';
import type { z } from 'zod';

/** Paths of the contracts (`API_ROUTES`), checked by a unit test. */
export const SHELL_ENDPOINTS = {
  me: { id: 'me.get', method: 'GET', path: '/api/v2/me' },
  logout: { id: 'auth.logout', method: 'POST', path: '/api/v2/auth/logout' },
  unreadCount: { id: 'notifications.unreadCount', method: 'GET', path: '/api/v2/notifications/unread-count' },
  stream: { id: 'events.stream', method: 'GET', path: '/api/v2/stream' },
} as const;

type ShellEndpoint = (typeof SHELL_ENDPOINTS)[keyof typeof SHELL_ENDPOINTS];

const STATUS_CODES: Readonly<Record<number, ErrorCode>> = {
  400: 'VALIDATION_FAILED',
  401: 'UNAUTHENTICATED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  409: 'CONFLICT',
  410: 'GONE',
  422: 'VALIDATION_FAILED',
  429: 'RATE_LIMITED',
  503: 'UNAVAILABLE',
};

function syntheticProblem(code: ErrorCode, status: number, detail: string, instance: string, requestId: string) {
  return { type: problemType(code), title: code, status, detail, instance, code, requestId } satisfies ProblemDTO;
}

function isProblem(value: unknown): value is ProblemDTO {
  if (value === null || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return typeof v.code === 'string' && typeof v.status === 'number' && typeof v.title === 'string';
}

export async function toApiError(endpoint: ShellEndpoint, response: Response): Promise<ApiError> {
  const requestId = response.headers.get('x-request-id') ?? '';
  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    // Not JSON (proxy error page): synthesize below.
  }
  if (isProblem(body)) return new ApiError(endpoint.id, body);
  const code = STATUS_CODES[response.status] ?? (response.status >= 500 ? 'INTERNAL' : 'VALIDATION_FAILED');
  return new ApiError(
    endpoint.id,
    syntheticProblem(code, response.status, `HTTP ${response.status}`, endpoint.path, requestId),
  );
}

async function call<T>(endpoint: ShellEndpoint, signal?: AbortSignal): Promise<T> {
  const init: RequestInit = {
    method: endpoint.method,
    credentials: 'same-origin',
    headers: { accept: 'application/json' },
    ...(signal ? { signal } : {}),
  };
  if (endpoint.method !== 'GET') {
    // The API's CSRF rule: every mutation carries `Content-Type: application/json`.
    init.headers = { accept: 'application/json', 'content-type': 'application/json' };
    init.body = '{}';
  }
  let response: Response;
  try {
    response = await fetch(endpoint.path, init);
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') throw error;
    const detail = error instanceof Error ? error.message : 'network error';
    throw new ApiError(
      endpoint.id,
      syntheticProblem('UNAVAILABLE', 503, `network error: ${detail}`, endpoint.path, ''),
    );
  }
  if (!response.ok) throw await toApiError(endpoint, response);
  if (response.status === 204) return undefined as T;
  const text = await response.text();
  return (text ? JSON.parse(text) : undefined) as T;
}

export type Me = z.output<typeof MeDTO>;

export const shellApi = {
  me: (signal?: AbortSignal) => call<Me>(SHELL_ENDPOINTS.me, signal),
  logout: () => call<void>(SHELL_ENDPOINTS.logout),
  unreadCount: () => call<{ count: number }>(SHELL_ENDPOINTS.unreadCount),
};
