/**
 * The three Signals calls of the header bell as plain `fetch` (the typed client's route table
 * would triple the island). Paths are those of `API_ROUTES.notifications` (`@sotf/contracts`).
 * Mutations carry `Content-Type: application/json` (the API's CSRF rule).
 */
import type { NotificationDTO } from '@sotf/contracts/notifications';

export const SIGNALS_ENDPOINTS = {
  list: '/api/v2/notifications',
  unreadCount: '/api/v2/notifications/unread-count',
  markRead: '/api/v2/notifications/read',
} as const;

export class SignalsRequestError extends Error {
  readonly status: number;

  constructor(status: number) {
    super(`signals request failed (${status})`);
    this.name = 'SignalsRequestError';
    this.status = status;
  }
}

async function json<T>(response: Response): Promise<T> {
  if (!response.ok) throw new SignalsRequestError(response.status);
  return (await response.json()) as T;
}

const GET: RequestInit = { credentials: 'same-origin', headers: { accept: 'application/json' } };

export async function fetchRecentSignals(limit: number, signal?: AbortSignal): Promise<NotificationDTO[]> {
  const response = await fetch(`${SIGNALS_ENDPOINTS.list}?limit=${limit}`, { ...GET, ...(signal ? { signal } : {}) });
  return (await json<{ items: NotificationDTO[] }>(response)).items;
}

export async function fetchUnreadCount(): Promise<number> {
  return (await json<{ count: number }>(await fetch(SIGNALS_ENDPOINTS.unreadCount, GET))).count;
}

/**
 * Marks signals as read and resolves the new unread count. `keepalive` lets the request finish
 * when the click that triggered it navigates away.
 */
export async function markSignalsRead(body: { ids: number[] } | { all: true }): Promise<number> {
  const response = await fetch(SIGNALS_ENDPOINTS.markRead, {
    method: 'POST',
    credentials: 'same-origin',
    keepalive: true,
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  return (await json<{ count: number }>(response)).count;
}
