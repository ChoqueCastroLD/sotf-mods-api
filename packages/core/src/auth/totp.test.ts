import { describe, expect, it } from 'vitest';
import {
  base32Decode,
  base32Encode,
  decryptSecret,
  encryptSecret,
  hashRecoveryCode,
  newRecoveryCode,
  normalizeRecoveryCode,
  totpCode,
  verifyTotp,
} from './totp.ts';

// RFC 6238 appendix B, SHA-1 secret "12345678901234567890", T=59s -> step 1 -> 94287082 (8 digits); last 6 = 287082.
const RFC_SECRET = base32Encode(Buffer.from('12345678901234567890'));

describe('totp', () => {
  it('matches the RFC 6238 vector', () => {
    expect(totpCode(RFC_SECRET, 1)).toBe('287082');
  });

  it('round-trips base32', () => {
    expect(base32Decode(RFC_SECRET).toString()).toBe('12345678901234567890');
  });

  it('accepts the current step once and rejects a replay', () => {
    const now = new Date(59_000);
    const step = verifyTotp(RFC_SECRET, '287082', now, null);
    expect(step).toBe(1);
    expect(verifyTotp(RFC_SECRET, '287082', now, step)).toBeNull();
    expect(verifyTotp(RFC_SECRET, '000000', now, null)).toBeNull();
  });
});

describe('secrets and recovery codes', () => {
  it('encrypts and decrypts with the app secret only', () => {
    const stored = encryptSecret('app-secret-app-secret-app-secret-1', 'JBSWY3DP');
    expect(decryptSecret('app-secret-app-secret-app-secret-1', stored)).toBe('JBSWY3DP');
    expect(() => decryptSecret('other-secret-other-secret-other-1', stored)).toThrow();
  });

  it('normalizes recovery codes before hashing', () => {
    const code = newRecoveryCode();
    expect(code).toMatch(/^[a-z0-9]{5}-[a-z0-9]{5}$/i);
    const key = 'app-secret-app-secret-app-secret-1';
    expect(hashRecoveryCode(key, code.toUpperCase())).toBe(hashRecoveryCode(key, normalizeRecoveryCode(code)));
  });
});
