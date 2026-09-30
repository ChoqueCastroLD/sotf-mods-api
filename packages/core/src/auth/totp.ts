/**
 * TOTP (RFC 6238, SHA-1, 6 digits, 30 s) and the crypto around it (T1-02).
 *
 * - Secrets are 160 bits, shown to the user in Base32 (RFC 4648) and stored as AES-256-GCM
 *   ciphertext under a key derived from `APP_SECRET` (a database dump alone cannot produce codes).
 * - `verifyTotp` accepts the current step and one step either side (clock drift) and reports the
 *   accepted step so the caller can refuse to accept the same or an older step again (replay).
 * - Recovery codes: 10 × `xxxxx-xxxxx` from an unambiguous 31-symbol alphabet (≈ 49.5 bits), stored as
 *   HMAC-SHA256 (keyed by `APP_SECRET`), single use.
 */
import {
  createCipheriv,
  createDecipheriv,
  createHmac,
  hkdfSync,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from 'node:crypto';

export const TOTP_PERIOD_SECONDS = 30;
export const TOTP_DIGITS = 6;
/** Steps accepted either side of the current one. */
export const TOTP_WINDOW = 1;

const BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export function base32Encode(bytes: Uint8Array): string {
  let bits = 0;
  let value = 0;
  let out = '';
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      out += BASE32[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += BASE32[(value << (5 - bits)) & 31];
  return out;
}

export function base32Decode(text: string): Buffer {
  const clean = text.replace(/=+$/, '').replace(/\s+/g, '').toUpperCase();
  let bits = 0;
  let value = 0;
  const out: number[] = [];
  for (const char of clean) {
    const index = BASE32.indexOf(char);
    if (index < 0) throw new Error('invalid base32');
    value = (value << 5) | index;
    bits += 5;
    if (bits >= 8) {
      out.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }
  return Buffer.from(out);
}

/** A new random TOTP secret (20 bytes) in Base32. */
export function generateTotpSecret(): string {
  return base32Encode(randomBytes(20));
}

/** The 6-digit code of `secret` (Base32) for a time step. */
export function totpCode(secret: string, step: number): string {
  const counter = Buffer.alloc(8);
  counter.writeBigUInt64BE(BigInt(step));
  const digest = createHmac('sha1', base32Decode(secret)).update(counter).digest();
  const offset = (digest[digest.length - 1] ?? 0) & 15;
  const binary =
    (((digest[offset] ?? 0) & 0x7f) << 24) |
    (((digest[offset + 1] ?? 0) & 0xff) << 16) |
    (((digest[offset + 2] ?? 0) & 0xff) << 8) |
    ((digest[offset + 3] ?? 0) & 0xff);
  return String(binary % 10 ** TOTP_DIGITS).padStart(TOTP_DIGITS, '0');
}

export function totpStep(now: Date): number {
  return Math.floor(now.getTime() / 1000 / TOTP_PERIOD_SECONDS);
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

/**
 * The time step `code` is valid for (within the window), or null. Steps up to `lastUsedStep` are
 * rejected, so a code (or an older one) cannot be used twice.
 */
export function verifyTotp(secret: string, code: string, now: Date, lastUsedStep: number | null): number | null {
  const digits = code.replace(/[\s-]/g, '');
  if (!/^\d{6}$/.test(digits)) return null;
  const current = totpStep(now);
  let accepted: number | null = null;
  // No early exit: every step is compared so timing does not reveal which one matched.
  for (let step = current - TOTP_WINDOW; step <= current + TOTP_WINDOW; step += 1) {
    if (safeEqual(totpCode(secret, step), digits) && (lastUsedStep === null || step > lastUsedStep)) {
      accepted = step;
    }
  }
  return accepted;
}

/** `otpauth://totp/<issuer>:<account>?secret=…&issuer=…` for authenticator apps. */
export function otpauthUrl(input: { secret: string; issuer: string; account: string }): string {
  const label = `${encodeURIComponent(input.issuer)}:${encodeURIComponent(input.account)}`;
  const query = new URLSearchParams({
    secret: input.secret,
    issuer: input.issuer,
    algorithm: 'SHA1',
    digits: String(TOTP_DIGITS),
    period: String(TOTP_PERIOD_SECONDS),
  });
  return `otpauth://totp/${label}?${query.toString().replaceAll('+', '%20')}`;
}

// -----------------------------------------------------------------------------------------------
// Secret storage
// -----------------------------------------------------------------------------------------------

function deriveKey(appSecret: string, label: string): Buffer {
  return Buffer.from(hkdfSync('sha256', appSecret, 'sotf-mods', label, 32));
}

/** `v1.<iv>.<tag>.<ciphertext>` (base64url), AES-256-GCM under the `totp` key. */
export function encryptSecret(appSecret: string, plaintext: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', deriveKey(appSecret, 'totp-secret:v1'), iv);
  const data = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  return ['v1', iv.toString('base64url'), cipher.getAuthTag().toString('base64url'), data.toString('base64url')].join(
    '.',
  );
}

export function decryptSecret(appSecret: string, stored: string): string {
  const [version, iv, tag, data] = stored.split('.');
  if (version !== 'v1' || !iv || !tag || !data) throw new Error('unsupported secret format');
  const decipher = createDecipheriv(
    'aes-256-gcm',
    deriveKey(appSecret, 'totp-secret:v1'),
    Buffer.from(iv, 'base64url'),
  );
  decipher.setAuthTag(Buffer.from(tag, 'base64url'));
  return Buffer.concat([decipher.update(Buffer.from(data, 'base64url')), decipher.final()]).toString('utf8');
}

// -----------------------------------------------------------------------------------------------
// Recovery codes
// -----------------------------------------------------------------------------------------------

/** No `0 o 1 l i` lookalikes: 31 symbols (≈ 49.5 bits per 10-symbol code). */
const RECOVERY_ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789';

/** One code `xxxxx-xxxxx`. */
export function newRecoveryCode(): string {
  let out = '';
  for (let i = 0; i < 10; i += 1) {
    out += RECOVERY_ALPHABET[randomInt(RECOVERY_ALPHABET.length)];
    if (i === 4) out += '-';
  }
  return out;
}

/** Canonical form for hashing: lower case, no separators or spaces. */
export function normalizeRecoveryCode(input: string): string {
  return input.toLowerCase().replace(/[\s-]/g, '');
}

/** Whether `input` looks like a recovery code (10 alphanumerics with optional dash/spaces). */
export function looksLikeRecoveryCode(input: string): boolean {
  return /^[a-z0-9]{10}$/.test(normalizeRecoveryCode(input));
}

export function hashRecoveryCode(appSecret: string, input: string): string {
  return createHmac('sha256', deriveKey(appSecret, 'recovery-code:v1'))
    .update(normalizeRecoveryCode(input))
    .digest('hex');
}
