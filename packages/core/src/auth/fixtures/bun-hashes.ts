/**
 * Password hashes produced by Bun (`Bun.password.hash`, the legacy API runtime) for the tests of
 * the verifier and the login flow (PLAN §6.10). Regenerate with
 * `npx bun@1.4 run packages/core/src/auth/fixtures/generate-bun-hashes.mjs`. Test data only.
 */
import data from './bun-hashes.json' with { type: 'json' };

export interface BunHashFixture {
  name: 'argon2id-ascii' | 'argon2id-unicode-nfc' | 'bcrypt-ascii' | 'bcrypt-long';
  algorithm: 'argon2id' | 'bcrypt';
  password: string;
  hash: string;
}

export const BUN_GENERATOR: string = data.generator;
export const BUN_HASHES = data.cases as BunHashFixture[];

export function bunHash(name: BunHashFixture['name']): BunHashFixture {
  const found = BUN_HASHES.find((c) => c.name === name);
  if (!found) throw new Error(`missing Bun fixture ${name}`);
  return found;
}
