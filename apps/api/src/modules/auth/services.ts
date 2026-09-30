/**
 * Account services shared by the `auth`, `me` and `account` modules of one API process: the
 * `AuthService` (argon2 semaphore, Turnstile, HIBP, per-account limits), the export storage (private
 * bucket) and the media origin. Built once per platform, lazily, so tests can inject fakes with
 * `createAccountModules({ ... })` before the first request.
 */

import { type ExportStorage, S3ExportStorage } from '@sotf/core/accounts/index';
import {
  AuthService,
  type BreachedPasswordChecker,
  createHibpChecker,
  createTurnstileVerifier,
  PasswordHasher,
  type TurnstileVerifier,
} from '@sotf/core/auth/index';
import type { Platform } from '../../lib/types.ts';

export interface AccountServicesOptions {
  hibp?: BreachedPasswordChecker;
  turnstile?: TurnstileVerifier;
  /** `null` disables exports (no storage configured). Default: the private R2 bucket from the env. */
  storage?: ExportStorage | null;
  /** Minimum duration of a failed login (ms). */
  failureFloorMs?: number;
}

export interface AccountServices {
  auth: AuthService;
  storage: ExportStorage | null;
  mediaBaseUrl: string;
  siteUrl: string;
}

const services = new WeakMap<Platform, AccountServices>();

function defaultStorage(platform: Platform): ExportStorage | null {
  const env = platform.env;
  try {
    return new S3ExportStorage(env);
  } catch (error) {
    platform.log.warn({ err: (error as Error).message }, 'data exports disabled: no R2 credentials');
    return null;
  }
}

/** The account services of a platform (created on first use with `options`). */
export function accountServices(platform: Platform, options: AccountServicesOptions = {}): AccountServices {
  const existing = services.get(platform);
  if (existing) return existing;
  const env = platform.env;
  const log = platform.log;
  const auth = new AuthService({
    hasher: new PasswordHasher({ concurrency: env.ARGON2_CONCURRENCY }),
    hibp: options.hibp ?? createHibpChecker({ log }),
    turnstile:
      options.turnstile ??
      createTurnstileVerifier({ secret: env.TURNSTILE_SECRET_KEY, production: env.SITE_ENV === 'production', log }),
    siteUrl: env.PUBLIC_SITE_URL,
    mediaBaseUrl: env.R2_PUBLIC_BASE_URL,
    limits: platform.rateLimiter,
    ...(options.failureFloorMs !== undefined ? { failureFloorMs: options.failureFloorMs } : {}),
  });
  const created: AccountServices = {
    auth,
    storage: options.storage === undefined ? defaultStorage(platform) : options.storage,
    mediaBaseUrl: env.R2_PUBLIC_BASE_URL,
    siteUrl: env.PUBLIC_SITE_URL,
  };
  services.set(platform, created);
  return created;
}
