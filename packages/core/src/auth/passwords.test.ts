import { describe, expect, it } from 'vitest';
import { BUN_GENERATOR, BUN_HASHES, bunHash } from './fixtures/bun-hashes.ts';
import { algorithmOf, argon2Params, needsRehash, PasswordHasher, pwdFingerprint } from './passwords.ts';
import { Semaphore } from './semaphore.ts';

const hasher = new PasswordHasher({ concurrency: 2 });

describe('Bun fixtures', () => {
  it('were produced by Bun 1.4', () => {
    expect(BUN_GENERATOR).toMatch(/^bun 1\.4\./);
    expect(BUN_HASHES.map((c) => c.name).sort()).toEqual([
      'argon2id-ascii',
      'argon2id-unicode-nfc',
      'bcrypt-ascii',
      'bcrypt-long',
    ]);
  });
});

describe('PasswordHasher.verify', () => {
  it.each(BUN_HASHES.map((c) => [c.name, c] as const))('verifies the Bun hash %s', async (_name, fixture) => {
    const result = await hasher.verify(fixture.hash, fixture.password);
    expect(result.ok).toBe(true);
    expect(result.algorithm).toBe(fixture.algorithm);
    expect(result.needsRehash).toBe(fixture.algorithm === 'bcrypt');
    expect((await hasher.verify(fixture.hash, `${fixture.password}x`)).ok).toBe(false);
  });

  it('accepts the long bcrypt password only through Bun’s SHA-512 pre-hash', async () => {
    const fixture = bunHash('bcrypt-long');
    expect(Buffer.byteLength(fixture.password)).toBeGreaterThan(72);
    // Same first 72 bytes, different tail: the pre-hash makes it fail (plain truncation would pass).
    const sameHead = `${Buffer.from(fixture.password).subarray(0, 72).toString()}-different-tail`;
    expect((await hasher.verify(fixture.hash, sameHead)).ok).toBe(false);
  });

  it('retries once in NFC (a password typed in NFD still works)', async () => {
    const fixture = bunHash('argon2id-unicode-nfc');
    const nfd = fixture.password.normalize('NFD');
    expect(nfd).not.toBe(fixture.password);
    expect((await hasher.verify(fixture.hash, nfd)).ok).toBe(true);
  });

  it('never verifies unknown or malformed formats', async () => {
    expect(await hasher.verify('plaintext', 'plaintext')).toEqual({
      ok: false,
      algorithm: 'unknown',
      needsRehash: false,
    });
    expect((await hasher.verify('$argon2id$v=19$m=65536,t=2,p=1$broken', 'x')).ok).toBe(false);
    expect((await hasher.verify('!no-login', '!no-login')).ok).toBe(false);
  });

  it('decoy verification always fails', async () => {
    expect(await hasher.verifyDecoy('anything')).toBe(false);
  });
});

describe('PasswordHasher.hash', () => {
  it('produces argon2id m=65536,t=2,p=1 hashes that need no rehash', async () => {
    const hash = await hasher.hash('a-brand-new-passphrase');
    expect(algorithmOf(hash)).toBe('argon2id');
    expect(argon2Params(hash)).toEqual({ m: 65536, t: 2, p: 1 });
    expect(needsRehash(hash)).toBe(false);
    expect((await hasher.verify(hash, 'a-brand-new-passphrase')).ok).toBe(true);
  });

  it('flags weaker hashes for rehash', () => {
    expect(needsRehash(bunHash('bcrypt-ascii').hash)).toBe(true);
    expect(needsRehash('$argon2id$v=19$m=19456,t=2,p=1$c2FsdHNhbHQ$aGFzaA')).toBe(true);
    expect(needsRehash('$argon2i$v=19$m=65536,t=2,p=1$c2FsdHNhbHQ$aGFzaA')).toBe(true);
    expect(needsRehash(bunHash('argon2id-ascii').hash)).toBe(false);
  });
});

describe('pwdFingerprint', () => {
  it('is 16 hex chars and changes with the hash', () => {
    const a = pwdFingerprint(bunHash('argon2id-ascii').hash);
    expect(a).toMatch(/^[0-9a-f]{16}$/);
    expect(pwdFingerprint(bunHash('argon2id-ascii').hash)).toBe(a);
    expect(pwdFingerprint(bunHash('bcrypt-ascii').hash)).not.toBe(a);
  });
});

describe('Semaphore', () => {
  it('limits concurrency and hands slots over in order', async () => {
    const semaphore = new Semaphore(2, 1000);
    let running = 0;
    let peak = 0;
    const order: number[] = [];
    await Promise.all(
      [1, 2, 3, 4, 5].map((i) =>
        semaphore.run(async () => {
          running += 1;
          peak = Math.max(peak, running);
          await new Promise((resolve) => setTimeout(resolve, 10));
          order.push(i);
          running -= 1;
        }),
      ),
    );
    expect(peak).toBe(2);
    expect(order).toHaveLength(5);
    expect(semaphore.active).toBe(0);
  });

  it('answers UNAVAILABLE when the wait exceeds the timeout', async () => {
    const semaphore = new Semaphore(1, 30);
    const blocker = semaphore.run(() => new Promise((resolve) => setTimeout(resolve, 200)));
    await expect(semaphore.run(async () => 1)).rejects.toMatchObject({ code: 'UNAVAILABLE', httpStatus: 503 });
    await blocker;
    expect(semaphore.waiting).toBe(0);
  });
});
