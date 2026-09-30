/**
 * Minimal same-origin API calls of the mod page (the typed client's route table stays out of
 * this bundle). Mutations always send `Content-Type: application/json` (the API's CSRF rule).
 */

export type ApiFailure = 'unauthenticated' | 'email' | 'rate' | 'conflict' | 'offline' | 'error';

export type ApiResult<T> = { ok: true; status: number; data: T } | { ok: false; status: number; reason: ApiFailure };

function failureOf(status: number, code: string | null): ApiFailure {
  if (status === 401) return 'unauthenticated';
  if (status === 403 && code === 'EMAIL_NOT_VERIFIED') return 'email';
  if (status === 429) return 'rate';
  if (status === 409) return 'conflict';
  return 'error';
}

export async function apiCall<T>(
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  path: string,
  body?: unknown,
): Promise<ApiResult<T>> {
  const headers: Record<string, string> = { accept: 'application/json' };
  const init: RequestInit = { method, credentials: 'same-origin', headers };
  if (method !== 'GET') {
    headers['content-type'] = 'application/json';
    init.body = JSON.stringify(body ?? {});
  }
  let response: Response;
  try {
    response = await fetch(path, init);
  } catch {
    return { ok: false, status: 0, reason: navigator.onLine === false ? 'offline' : 'error' };
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
  const code =
    payload && typeof payload === 'object' && typeof (payload as { code?: unknown }).code === 'string'
      ? (payload as { code: string }).code
      : null;
  return { ok: false, status: response.status, reason: failureOf(response.status, code) };
}
