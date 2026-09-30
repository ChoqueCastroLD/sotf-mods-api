/**
 * Cloudflare Turnstile for the auth forms (PLAN §9.1, T0-13; research/03 §6.13 «Turnstile
 * invisible»). The script is **deferred**: it loads on the first interaction with a form (focus or
 * pointer) or, at the latest, on submit, so it never competes with the first paint (PLAN §8.2).
 *
 * Widgets use `appearance: 'interaction-only'`: invisible unless Cloudflare needs the visitor to
 * click. Tokens are single use, so the widget is reset after every submission.
 *
 * Without a site key (local development, e2e) the forms send {@link TURNSTILE_DISABLED_TOKEN}: the
 * API skips the check when it has no secret outside production and rejects it in production, so
 * a missing key is loud where it matters.
 */
import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const TURNSTILE_SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
export const TURNSTILE_DISABLED_TOKEN = 'turnstile-not-configured';
/** How long a submit waits for a token before giving up. */
export const TOKEN_TIMEOUT_MS = 30_000;

interface TurnstileRenderOptions {
  sitekey: string;
  action?: string;
  language?: string;
  appearance?: 'always' | 'execute' | 'interaction-only';
  size?: 'normal' | 'flexible' | 'compact';
  theme?: 'auto' | 'light' | 'dark';
  'refresh-expired'?: 'auto' | 'manual' | 'never';
  callback?: (token: string) => void;
  'error-callback'?: (code: string) => boolean | undefined;
  'expired-callback'?: () => void;
  'timeout-callback'?: () => void;
}

export interface TurnstileApi {
  render(container: HTMLElement, options: TurnstileRenderOptions): string | undefined;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loading: Promise<TurnstileApi> | null = null;

/** Loads the Turnstile script once per page. */
export function loadTurnstile(doc: Document = document): Promise<TurnstileApi> {
  const win = doc.defaultView;
  if (win?.turnstile) return Promise.resolve(win.turnstile);
  loading ??= new Promise<TurnstileApi>((resolve, reject) => {
    const script = doc.createElement('script');
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      if (win?.turnstile) resolve(win.turnstile);
      else reject(new Error('turnstile did not initialize'));
    });
    script.addEventListener('error', () => reject(new Error('turnstile failed to load')));
    doc.head.append(script);
  }).catch((error: unknown) => {
    loading = null;
    throw error;
  });
  return loading;
}

/** Test hook. */
export function resetTurnstileLoaderForTests(): void {
  loading = null;
}

export type TurnstileStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface UseTurnstileOptions {
  siteKey: string | undefined;
  /** Analytics label shown in the Cloudflare dashboard (`login`, `register`, `forgot`). */
  action: string;
  /** BCP-47 language of the page. */
  language: string;
  /** Whether the form needs a token at all (login only after 3 failures). Default true. */
  enabled?: boolean;
}

export interface TurnstileHandle {
  /** Attach to the element that hosts the widget. */
  containerRef: RefObject<HTMLDivElement | null>;
  status: TurnstileStatus;
  /** Starts loading the script (call on the first interaction with the form). */
  prepare(): void;
  /** A fresh token, or the development token when no site key is configured. */
  getToken(): Promise<string>;
  /** Discards the used token (tokens are single use). */
  reset(): void;
}

export function useTurnstile({ siteKey, action, language, enabled = true }: UseTurnstileOptions): TurnstileHandle {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<string | undefined>(undefined);
  const apiRef = useRef<TurnstileApi | null>(null);
  const tokenRef = useRef<string | null>(null);
  const loadingRef = useRef(false);
  const waitersRef = useRef<Array<{ resolve: (token: string) => void; reject: (error: Error) => void }>>([]);
  const [status, setStatus] = useState<TurnstileStatus>('idle');
  const active = Boolean(siteKey) && enabled;

  const settle = useCallback((token: string | null, error?: Error) => {
    const waiters = waitersRef.current;
    waitersRef.current = [];
    for (const waiter of waiters) {
      if (token) waiter.resolve(token);
      else waiter.reject(error ?? new Error('turnstile error'));
    }
  }, []);

  const prepare = useCallback(() => {
    if (!active || !siteKey || loadingRef.current) return;
    if (apiRef.current && widgetRef.current) return;
    loadingRef.current = true;
    setStatus('loading');
    loadTurnstile()
      .then((api) => {
        loadingRef.current = false;
        apiRef.current = api;
        const container = containerRef.current;
        if (!container) return;
        widgetRef.current = api.render(container, {
          sitekey: siteKey,
          action,
          language,
          appearance: 'interaction-only',
          size: 'flexible',
          theme: 'auto',
          'refresh-expired': 'auto',
          callback: (token) => {
            tokenRef.current = token;
            setStatus('ready');
            settle(token);
          },
          'error-callback': () => {
            tokenRef.current = null;
            setStatus('error');
            // Let the next submit retry the challenge.
            if (widgetRef.current) api.reset(widgetRef.current);
            settle(null, new Error('turnstile challenge error'));
            return true;
          },
          'expired-callback': () => {
            tokenRef.current = null;
          },
          'timeout-callback': () => {
            tokenRef.current = null;
          },
        });
        setStatus('ready');
      })
      .catch(() => {
        loadingRef.current = false;
        setStatus('error');
        settle(null, new Error('turnstile failed to load'));
      });
  }, [active, siteKey, action, language, settle]);

  const getToken = useCallback((): Promise<string> => {
    if (!active) return Promise.resolve(TURNSTILE_DISABLED_TOKEN);
    if (tokenRef.current) return Promise.resolve(tokenRef.current);
    // Loads the script (or retries a failed load); a rendered widget delivers its next token.
    prepare();
    return new Promise<string>((resolve, reject) => {
      const timer = setTimeout(() => {
        waitersRef.current = waitersRef.current.filter((waiter) => waiter.resolve !== done);
        reject(new Error('turnstile timeout'));
      }, TOKEN_TIMEOUT_MS);
      const done = (token: string) => {
        clearTimeout(timer);
        resolve(token);
      };
      waitersRef.current.push({
        resolve: done,
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        },
      });
    });
  }, [active, prepare]);

  const reset = useCallback(() => {
    tokenRef.current = null;
    const api = apiRef.current;
    if (api && widgetRef.current) api.reset(widgetRef.current);
  }, []);

  useEffect(
    () => () => {
      const api = apiRef.current;
      if (api && widgetRef.current) api.remove(widgetRef.current);
    },
    [],
  );

  return { containerRef, status, prepare, getToken, reset };
}
