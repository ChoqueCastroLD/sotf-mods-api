/**
 * Cloudflare Turnstile server-side validation (T0-22): registration, "forgot password" and logins
 * after 3 failures. Tokens are single use and validated with `siteverify`, bound to the client IP.
 *
 * Without a secret the verifier fails closed in production and passes (with a warning) elsewhere,
 * so local development works without Cloudflare. Development uses Cloudflare's documented
 * always-pass test secret (`.env.example`).
 */
import type { Logger } from '../kernel/logger.ts';

export const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export interface TurnstileVerifier {
  /** True when the token is valid for this client. Never throws. */
  verify(token: string | undefined, remoteIp: string | null): Promise<boolean>;
}

export interface TurnstileOptions {
  secret: string | undefined;
  /** `SITE_ENV === 'production'`: a missing secret then rejects every token. */
  production: boolean;
  fetch?: typeof fetch;
  timeoutMs?: number;
  log?: Logger;
}

export function createTurnstileVerifier(options: TurnstileOptions): TurnstileVerifier {
  const doFetch = options.fetch ?? fetch;
  return {
    async verify(token, remoteIp) {
      if (!options.secret) {
        if (options.production) {
          options.log?.error('TURNSTILE_SECRET_KEY is missing in production: rejecting the challenge');
          return false;
        }
        options.log?.warn('TURNSTILE_SECRET_KEY is not set: skipping the challenge (non-production)');
        return true;
      }
      if (!token) return false;
      const form = new URLSearchParams({ secret: options.secret, response: token });
      if (remoteIp) form.set('remoteip', remoteIp);
      try {
        const response = await doFetch(TURNSTILE_VERIFY_URL, {
          method: 'POST',
          body: form,
          signal: AbortSignal.timeout(options.timeoutMs ?? 5000),
        });
        if (!response.ok) {
          options.log?.warn({ status: response.status }, 'turnstile siteverify failed');
          return false;
        }
        const result = (await response.json()) as { success?: boolean; 'error-codes'?: string[] };
        if (!result.success) options.log?.info({ codes: result['error-codes'] ?? [] }, 'turnstile rejected');
        return result.success === true;
      } catch (error) {
        // Fail closed: the challenge protects against abuse; the user can retry.
        options.log?.warn({ err: (error as Error).name }, 'turnstile siteverify unreachable');
        return false;
      }
    },
  };
}

/** Accepts any non-empty token (tests). */
export const acceptAnyTurnstile: TurnstileVerifier = { verify: async (token) => Boolean(token) };
