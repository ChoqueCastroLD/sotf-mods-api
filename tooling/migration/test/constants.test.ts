import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { verify as argon2Verify } from '@node-rs/argon2';
import { verifySync as bcryptVerify } from '@node-rs/bcrypt';
import { describe, expect, it } from 'vitest';
import { DEV_PASSWORD, DEV_PASSWORD_ARGON2ID, DEV_PASSWORD_BCRYPT, SQL_DIR } from '../src/constants.ts';

describe('development password hashes', () => {
  it('argon2id (Bun defaults m=65536,t=2,p=1) verifies the dev password', async () => {
    expect(DEV_PASSWORD_ARGON2ID).toMatch(/^\$argon2id\$v=19\$m=65536,t=2,p=1\$/);
    expect(await argon2Verify(DEV_PASSWORD_ARGON2ID, DEV_PASSWORD)).toBe(true);
    expect(await argon2Verify(DEV_PASSWORD_ARGON2ID, 'wrong')).toBe(false);
  });

  it('the bcrypt $2b$ rare case verifies the dev password', () => {
    expect(DEV_PASSWORD_BCRYPT.startsWith('$2b$10$')).toBe(true);
    expect(bcryptVerify(DEV_PASSWORD, DEV_PASSWORD_BCRYPT)).toBe(true);
  });

  it('anonymize.sql writes the same hash', () => {
    expect(readFileSync(join(SQL_DIR, 'anonymize.sql'), 'utf8')).toContain(DEV_PASSWORD_ARGON2ID);
  });
});
