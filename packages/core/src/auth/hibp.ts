/**
 * Breached-password check with Have I Been Pwned "Pwned Passwords" (T0-13): k-anonymity range
 * API, so only the first 5 hex chars of the SHA-1 leave the server. Padding is requested so the
 * response size does not reveal the suffix count. **Fail-open**: a timeout (2 s), network error or
 * unexpected status never blocks a registration; it is logged and the password is accepted.
 */
import { createHash } from 'node:crypto';
import type { Logger } from '../kernel/logger.ts';

export interface BreachedPasswordChecker {
  /** Times the password appears in breaches (0 = not found or the check failed open). */
  count(password: string): Promise<number>;
}

export interface HibpOptions {
  fetch?: typeof fetch;
  timeoutMs?: number;
  log?: Logger;
  /** Base URL of the range API (tests). */
  baseUrl?: string;
  userAgent?: string;
}

export const HIBP_RANGE_URL = 'https://api.pwnedpasswords.com/range/';

/** Uppercase hex SHA-1 split in the 5-char prefix sent and the 35-char suffix kept locally. */
export function hibpParts(password: string): { prefix: string; suffix: string } {
  const sha1 = createHash('sha1').update(password.normalize('NFC'), 'utf8').digest('hex').toUpperCase();
  return { prefix: sha1.slice(0, 5), suffix: sha1.slice(5) };
}

/** Count of `suffix` in a range response (`SUFFIX:COUNT` per line; padding rows have count 0). */
export function countInRange(body: string, suffix: string): number {
  for (const line of body.split(/\r?\n/)) {
    const [candidate, count] = line.trim().split(':');
    if (candidate?.toUpperCase() === suffix) return Number.parseInt(count ?? '0', 10) || 0;
  }
  return 0;
}

export function createHibpChecker(options: HibpOptions = {}): BreachedPasswordChecker {
  const doFetch = options.fetch ?? fetch;
  const timeoutMs = options.timeoutMs ?? 2000;
  const baseUrl = options.baseUrl ?? HIBP_RANGE_URL;
  return {
    async count(password) {
      const { prefix, suffix } = hibpParts(password);
      try {
        const response = await doFetch(`${baseUrl}${prefix}`, {
          headers: { 'add-padding': 'true', 'user-agent': options.userAgent ?? 'sotf-mods.com' },
          signal: AbortSignal.timeout(timeoutMs),
        });
        if (!response.ok) {
          options.log?.warn({ status: response.status }, 'hibp check failed open (status)');
          return 0;
        }
        return countInRange(await response.text(), suffix);
      } catch (error) {
        options.log?.warn({ err: (error as Error).name }, 'hibp check failed open');
        return 0;
      }
    },
  };
}

/** A checker that never finds anything (disabled environments and tests). */
export const noBreachCheck: BreachedPasswordChecker = { count: async () => 0 };
