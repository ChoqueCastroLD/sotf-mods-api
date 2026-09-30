import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { fillSecrets, initEnv, randomSecret } from '../env-init.ts';
import { tempDir, writeFiles } from './helpers.ts';

let cleanup: (() => void) | undefined;
afterEach(() => cleanup?.());

const counter = () => {
  let n = 0;
  return () => `secret-${++n}`;
};

describe('fillSecrets', () => {
  it('fills the empty required secrets and keeps everything else', () => {
    const text = '# comment\nAPP_SECRET=\nOTHER=\nINTERNAL_SECRET=""\nKEEP=1\n';
    expect(fillSecrets(text, counter())).toEqual({
      text: '# comment\nAPP_SECRET=secret-1\nOTHER=\nINTERNAL_SECRET=secret-2\nKEEP=1\n',
      filled: ['APP_SECRET', 'INTERNAL_SECRET'],
    });
  });

  it('never replaces a secret that already has a value, nor commented lines', () => {
    const text = 'APP_SECRET=mine\n# INTERNAL_SECRET=\n';
    expect(fillSecrets(text, counter())).toEqual({ text, filled: [] });
  });

  it('keeps CRLF line endings', () => {
    expect(fillSecrets('APP_SECRET=\r\nX=1\r\n', counter()).text).toBe('APP_SECRET=secret-1\r\nX=1\r\n');
  });

  it('generates url-safe secrets long enough for the apps (≥ 32 chars)', () => {
    const secret = randomSecret();
    expect(secret).toMatch(/^[A-Za-z0-9_-]{64}$/);
    expect(randomSecret()).not.toBe(secret);
  });
});

describe('initEnv', () => {
  const example = 'APP_SECRET=\nINTERNAL_SECRET=\nDATABASE_URL=postgres://local\n';

  it('creates .env from .env.example with private permissions', () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    writeFiles(tmp.dir, { '.env.example': example });
    expect(initEnv(tmp.dir, { generate: counter() })).toEqual({
      action: 'created',
      filled: ['APP_SECRET', 'INTERNAL_SECRET'],
    });
    const envPath = join(tmp.dir, '.env');
    expect(readFileSync(envPath, 'utf8')).toBe(
      'APP_SECRET=secret-1\nINTERNAL_SECRET=secret-2\nDATABASE_URL=postgres://local\n',
    );
    expect(statSync(envPath).mode & 0o777).toBe(0o600);
  });

  it('only completes an existing .env and leaves a complete one untouched', () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    writeFiles(tmp.dir, { '.env.example': example, '.env': 'APP_SECRET=mine\nINTERNAL_SECRET=\nCUSTOM=1\n' });
    expect(initEnv(tmp.dir, { generate: counter() })).toEqual({ action: 'filled', filled: ['INTERNAL_SECRET'] });
    expect(readFileSync(join(tmp.dir, '.env'), 'utf8')).toBe('APP_SECRET=mine\nINTERNAL_SECRET=secret-1\nCUSTOM=1\n');
    expect(initEnv(tmp.dir, { generate: counter() })).toEqual({ action: 'unchanged', filled: [] });
  });

  it('rewrites .env from the example with --force', () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    writeFiles(tmp.dir, { '.env.example': example, '.env': 'APP_SECRET=mine\n' });
    expect(initEnv(tmp.dir, { force: true, generate: counter() }).action).toBe('rewritten');
    expect(readFileSync(join(tmp.dir, '.env'), 'utf8')).toContain('DATABASE_URL=postgres://local');
  });

  it('fails without .env.example', () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    expect(() => initEnv(tmp.dir)).toThrow(/\.env\.example does not exist/);
  });

  it('works on the real .env.example: both secrets are present and empty', () => {
    const real = readFileSync(new URL('../../../.env.example', import.meta.url), 'utf8');
    expect(fillSecrets(real, counter()).filled.sort()).toEqual(['APP_SECRET', 'INTERNAL_SECRET']);
  });
});
