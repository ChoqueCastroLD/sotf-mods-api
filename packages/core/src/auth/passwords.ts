/**
 * Password hashing and verification (PLAN §6.10, research/02 §6).
 *
 * - `$argon2*` (Bun's `Bun.password.hash` default and v2) → `@node-rs/argon2`.
 * - `$2a$`/`$2b$`/`$2y$` → `@node-rs/bcrypt`. Bun pre-hashes passwords longer than 72 bytes with
 *   SHA-512 (raw 64-byte digest) before bcrypt; that variant is tried as well.
 * - Anything else never verifies (logged by the caller, who suggests a reset).
 * - When the raw input fails, it is retried once in NFC (passwords typed on macOS arrive in NFD).
 * - New hashes: argon2id m=65536 KiB, t=2, p=1 (what Bun also verifies, so a rollback keeps working).
 * - Every hash/verify runs inside a global semaphore (`ARGON2_CONCURRENCY`, wait ≤ 5 s → 503).
 * - `verifyDecoy()` burns the same work when the account does not exist (constant-time login).
 */
import { createHash } from 'node:crypto';
import { hash as argon2Hash, verify as argon2Verify } from '@node-rs/argon2';
import { verify as bcryptVerify } from '@node-rs/bcrypt';
import { Semaphore } from './semaphore.ts';

/** Parameters of new hashes (and the minimum a stored argon2id hash must have). */
export const ARGON2_TARGET = { memoryCost: 65_536, timeCost: 2, parallelism: 1 } as const;

/** Random argon2id hash with the target parameters: nobody knows its password. */
const DECOY_HASH = '$argon2id$v=19$m=65536,t=2,p=1$QDdl1b851B2gp62LjCnDNQ$QpC7YAwB6Vf69/P2mO3nBGw3rWMY67y55UUH4wGz54E';

const BCRYPT_MAX_BYTES = 72;

export type HashAlgorithm = 'argon2id' | 'argon2i' | 'argon2d' | 'bcrypt' | 'unknown';

export interface VerifyResult {
  ok: boolean;
  algorithm: HashAlgorithm;
  /** True when the stored hash should be replaced by a fresh argon2id hash (only when `ok`). */
  needsRehash: boolean;
}

/** Algorithm of a stored hash string. */
export function algorithmOf(stored: string): HashAlgorithm {
  if (stored.startsWith('$argon2id$')) return 'argon2id';
  if (stored.startsWith('$argon2i$')) return 'argon2i';
  if (stored.startsWith('$argon2d$')) return 'argon2d';
  if (/^\$2[aby]\$\d{2}\$/.test(stored)) return 'bcrypt';
  return 'unknown';
}

/** Parses `m=…,t=…,p=…` of a PHC argon2 string. */
export function argon2Params(stored: string): { m: number; t: number; p: number } | null {
  const match = /^\$argon2(?:id|i|d)\$(?:v=\d+\$)?m=(\d+),t=(\d+),p=(\d+)\$/.exec(stored);
  if (!match) return null;
  return { m: Number(match[1]), t: Number(match[2]), p: Number(match[3]) };
}

/** True when a hash that verified must be upgraded to argon2id with the target parameters. */
export function needsRehash(stored: string): boolean {
  if (algorithmOf(stored) !== 'argon2id') return true;
  const params = argon2Params(stored);
  if (!params) return true;
  return (
    params.m < ARGON2_TARGET.memoryCost || params.t < ARGON2_TARGET.timeCost || params.p < ARGON2_TARGET.parallelism
  );
}

/**
 * Fingerprint of the stored password hash kept in every session (PLAN §6.4 "Session"): the first
 * 16 hex chars of sha256(hash). A password change by any path (including the legacy API) changes
 * it, which invalidates the older sessions.
 */
export function pwdFingerprint(stored: string): string {
  return createHash('sha256').update(stored, 'utf8').digest('hex').slice(0, 16);
}

async function verifyRaw(stored: string, plain: string, algorithm: HashAlgorithm): Promise<boolean> {
  try {
    if (algorithm === 'argon2id' || algorithm === 'argon2i' || algorithm === 'argon2d') {
      return await argon2Verify(stored, plain);
    }
    if (algorithm === 'bcrypt') {
      if (Buffer.byteLength(plain, 'utf8') > BCRYPT_MAX_BYTES) {
        // Bun's non-standard pre-hash for long passwords; then the standard truncation.
        const digest = createHash('sha512').update(plain, 'utf8').digest();
        if (await bcryptVerify(digest, stored)) return true;
        return await bcryptVerify(Buffer.from(plain, 'utf8').subarray(0, BCRYPT_MAX_BYTES), stored);
      }
      return await bcryptVerify(plain, stored);
    }
  } catch {
    // Malformed hash: never verifies.
    return false;
  }
  return false;
}

export class PasswordHasher {
  readonly #semaphore: Semaphore;

  constructor(options: { concurrency: number; queueTimeoutMs?: number }) {
    this.#semaphore = new Semaphore(options.concurrency, options.queueTimeoutMs ?? 5000);
  }

  get semaphore(): Semaphore {
    return this.#semaphore;
  }

  /** New argon2id hash of `plain` (NFC-normalized, so every device produces the same input). */
  hash(plain: string): Promise<string> {
    return this.#semaphore.run(() => argon2Hash(plain.normalize('NFC'), { ...ARGON2_TARGET }));
  }

  /** Verifies `plain` against a stored hash (raw input first, then NFC once). */
  verify(stored: string, plain: string): Promise<VerifyResult> {
    const algorithm = algorithmOf(stored);
    if (algorithm === 'unknown') return Promise.resolve({ ok: false, algorithm, needsRehash: false });
    return this.#semaphore.run(async () => {
      let ok = await verifyRaw(stored, plain, algorithm);
      const nfc = plain.normalize('NFC');
      if (!ok && nfc !== plain) ok = await verifyRaw(stored, nfc, algorithm);
      return { ok, algorithm, needsRehash: ok && needsRehash(stored) };
    });
  }

  /** Same cost as a real verification, always false (unknown account). */
  async verifyDecoy(plain: string): Promise<false> {
    await this.#semaphore.run(() => verifyRaw(DECOY_HASH, plain, 'argon2id'));
    return false;
  }
}
