/**
 * Browser calls of the auth islands to the same-origin API (`/api/v2`, PLAN §2.1). Deliberately
 * tiny (no Zod, no typed client) to keep the auth pages inside their JS budget (PLAN §8.2): the
 * request bodies follow `@sotf/contracts/auth`, checked at compile time through `import type`.
 *
 * Every call resolves (never throws) to a discriminated result, so forms can render the three
 * failure kinds of PLAN §1.2: a problem from the API (RFC 9457 `problem+json`), the network being
 * down, or an unexpected answer.
 */
import type { SelfUserDTO } from '@sotf/contracts/auth';
import type { MeSummaryDTO, UpdateSettingsBody } from '@sotf/contracts/me';
import type { z } from 'zod';

export const API_BASE = '/api/v2';

export interface FieldIssue {
  path: string;
  message: string;
  code?: string;
}

export interface ApiProblem {
  status: number;
  code: string;
  requestId?: string;
  /** Seconds before retrying (`retryAfter` member or the `Retry-After` header). */
  retryAfter?: number;
  errors: FieldIssue[];
}

export type ApiResult<T> =
  | { ok: true; status: number; data: T }
  | { ok: false; kind: 'problem'; problem: ApiProblem }
  | { ok: false; kind: 'network' };

export type ApiFailure = Exclude<ApiResult<unknown>, { ok: true }>;

function retryAfterOf(body: Record<string, unknown>, headers: Headers): number | undefined {
  const member = body.retryAfter;
  if (typeof member === 'number' && Number.isFinite(member) && member >= 0) return Math.ceil(member);
  const header = headers.get('retry-after');
  if (!header) return undefined;
  const seconds = Number(header);
  if (Number.isFinite(seconds) && seconds >= 0) return Math.ceil(seconds);
  const date = Date.parse(header);
  return Number.isNaN(date) ? undefined : Math.max(0, Math.ceil((date - Date.now()) / 1000));
}

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

/** Turns a non-2xx response into an {@link ApiProblem} (tolerates proxies answering HTML). */
export async function problemOf(response: Response): Promise<ApiProblem> {
  let body: Record<string, unknown> = {};
  try {
    const parsed: unknown = await response.json();
    if (parsed && typeof parsed === 'object') body = parsed as Record<string, unknown>;
  } catch {
    // Not JSON (gateway error page): keep the status only.
  }
  const fallbackCode = response.status === 429 ? 'RATE_LIMITED' : response.status >= 500 ? 'UNAVAILABLE' : 'UNKNOWN';
  const retryAfter = retryAfterOf(body, response.headers);
  const requestId =
    typeof body.requestId === 'string' ? body.requestId : (response.headers.get('x-request-id') ?? undefined);
  return {
    status: response.status,
    code: typeof body.code === 'string' ? body.code : fallbackCode,
    ...(requestId ? { requestId } : {}),
    ...(retryAfter !== undefined ? { retryAfter } : {}),
    errors: issuesOf(body.errors),
  };
}

export interface RequestOptions {
  signal?: AbortSignal;
  /** Injected in tests. */
  fetchImpl?: typeof fetch;
}

async function request<T>(
  method: 'GET' | 'POST' | 'PATCH',
  path: string,
  body: unknown,
  options: RequestOptions,
): Promise<ApiResult<T>> {
  const doFetch = options.fetchImpl ?? fetch;
  let response: Response;
  try {
    response = await doFetch(`${API_BASE}${path}`, {
      method,
      credentials: 'same-origin',
      headers:
        method === 'GET'
          ? { accept: 'application/json' }
          : { accept: 'application/json', 'content-type': 'application/json' },
      // The API only accepts JSON on unsafe methods (CSRF rule, PLAN §5.1): `{}` when empty.
      ...(method === 'GET' ? {} : { body: JSON.stringify(body ?? {}) }),
      ...(options.signal ? { signal: options.signal } : {}),
    });
  } catch {
    return { ok: false, kind: 'network' };
  }
  if (!response.ok) return { ok: false, kind: 'problem', problem: await problemOf(response) };
  if (response.status === 204 || response.headers.get('content-length') === '0') {
    return { ok: true, status: response.status, data: undefined as T };
  }
  try {
    const text = await response.text();
    return { ok: true, status: response.status, data: (text ? JSON.parse(text) : undefined) as T };
  } catch {
    return { ok: false, kind: 'problem', problem: { status: response.status, code: 'UNKNOWN', errors: [] } };
  }
}

export type MeSummary = z.output<typeof MeSummaryDTO>;
export interface AuthResult {
  user: SelfUserDTO;
}

export interface LoginInput {
  identifier: string;
  password: string;
  remember: boolean;
  turnstileToken?: string;
}

export interface RegisterInput {
  email: string;
  handle: string;
  password: string;
  displayName?: string;
  locale: string;
  acceptTerms: true;
  turnstileToken: string;
}

export const authApi = {
  login: (input: LoginInput, options: RequestOptions = {}) =>
    request<AuthResult>('POST', '/auth/login', input, options),
  register: (input: RegisterInput, options: RequestOptions = {}) =>
    request<AuthResult>('POST', '/auth/register', input, options),
  logout: (options: RequestOptions = {}) => request<void>('POST', '/auth/logout', {}, options),
  forgotPassword: (input: { email: string; turnstileToken: string }, options: RequestOptions = {}) =>
    request<void>('POST', '/auth/password/forgot', input, options),
  resetPassword: (input: { token: string; password: string }, options: RequestOptions = {}) =>
    request<void>('POST', '/auth/password/reset', input, options),
  verifyEmail: (input: { token: string }, options: RequestOptions = {}) =>
    request<void>('POST', '/auth/email/verify', input, options),
  resendVerification: (options: RequestOptions = {}) => request<void>('POST', '/auth/email/resend', {}, options),
  summary: (options: RequestOptions = {}) => request<MeSummary>('GET', '/me/summary', undefined, options),
  updateSettings: (input: z.input<typeof UpdateSettingsBody>, options: RequestOptions = {}) =>
    request<unknown>('PATCH', '/me/settings', input, options),
};
