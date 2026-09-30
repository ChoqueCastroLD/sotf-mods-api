/**
 * The console's TanStack Query client (PLAN §2.5: islands and the console load data with
 * TanStack Query).
 *
 * - Queries: 30 s fresh, refetch on focus/reconnect, retry only what can succeed (never 4xx).
 * - A 401 from any query means the session ended → `onUnauthenticated` (login with `next`).
 * - Mutations: no retry. A failing mutation without its own `onError` shows a toast with the
 *   localized problem (`problemText`, the texts of `describeProblem`); `meta: { toast: false }`
 *   opts out. A 401 on a mutation does not navigate away (the form keeps its state): the toast
 *   offers to sign in again.
 */
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { isClientError, isUnauthenticated, problemCode } from './errors.ts';
import { problemText, t } from './messages.ts';
import { notify } from './notify.ts';

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: { toast?: boolean };
  }
}

export const QUERY_STALE_MS = 30_000;
export const QUERY_GC_MS = 5 * 60_000;
export const MAX_QUERY_RETRIES = 2;

export interface ConsoleQueryClientOptions {
  /** Called when a query answers 401 (the guard sends the user to `/login?next=`). */
  onUnauthenticated: () => void;
  /** Called with the «sign in again» action of a mutation that answered 401. */
  onSignInAgain?: () => void;
}

export function shouldRetry(failureCount: number, error: unknown): boolean {
  return !isClientError(error) && failureCount < MAX_QUERY_RETRIES;
}

export function createConsoleQueryClient(options: ConsoleQueryClientOptions): QueryClient {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        if (isUnauthenticated(error)) options.onUnauthenticated();
      },
    }),
    mutationCache: new MutationCache({
      onError: (error, _variables, _result, mutation) => {
        if (isUnauthenticated(error)) {
          notify.warning(t('console_session_expired'), {
            id: 'console-session-expired',
            duration: Number.POSITIVE_INFINITY,
            ...(options.onSignInAgain
              ? { action: { label: t('common_account_sign_in'), onClick: options.onSignInAgain } }
              : {}),
          });
          return;
        }
        if (mutation.options.onError || mutation.meta?.toast === false) return;
        const text = problemText(problemCode(error));
        notify.error(text.title, { description: text.detail });
      },
    }),
    defaultOptions: {
      queries: {
        staleTime: QUERY_STALE_MS,
        gcTime: QUERY_GC_MS,
        retry: shouldRetry,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
      },
      mutations: { retry: false },
    },
  });
}
