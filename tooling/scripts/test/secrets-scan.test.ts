import { afterEach, describe, expect, it } from 'vitest';
import {
  allRules,
  entropy,
  historyArgs,
  looksReal,
  redact,
  scanDiff,
  scanLine,
  scanWorkingTree,
} from '../secrets-scan.ts';
import { gitIn, initRepo, tempDir, writeFiles } from './helpers.ts';

let cleanup: (() => void) | undefined;
afterEach(() => cleanup?.());

// Fake credentials are assembled at run time so this file never contains a matching literal
// (the repository scan and `check:forbidden` read it too).
const RANDOMISH = ['Zq8', 'vN2', 'kP7', 'wX4', 'rT9', 'bL3', 'mH6', 'yC1'].join('');
const googleKey = () => ['AI', 'za', 'Sy', 'D8x', 'Q2vN7kP4wX9rT3bL6mH1yC5jF0gE8a'].join('');
const npmToken = () => `${['n', 'pm_'].join('')}${'aB3dE5gH7jK9mN1pQ3sT5vW7yZ9bC1dF3'.slice(0, 36).padEnd(36, 'x')}`;
const assignment = (value: string) => `const apiKey = "${value}";`;

describe('entropy', () => {
  it('is 0 for an empty or constant string and log2(n) for n distinct characters', () => {
    expect(entropy('')).toBe(0);
    expect(entropy('aaaa')).toBe(0);
    expect(entropy('ab')).toBe(1);
    expect(entropy('abcd')).toBe(2);
  });
});

describe('looksReal', () => {
  it('rejects placeholders, repeated characters, phrases, keyboard walks and paths', () => {
    expect(looksReal('your-api-key-goes-here-1234')).toBe(false);
    expect(looksReal('changeme-changeme-changeme')).toBe(false);
    expect(looksReal('xxxxxxxxxxxxxxxxxxxxxxxx')).toBe(false);
    expect(looksReal('kelvin-carries-logs-2026')).toBe(false);
    expect(looksReal('turnstile-not-configured')).toBe(false);
    expect(looksReal('q1w2e3r4t5y6u7i8o9')).toBe(false);
    expect(looksReal('./fixtures/some/file.json')).toBe(false);
    expect(looksReal('assets/brand/logo-horizontal.svg')).toBe(false);
  });

  it('accepts generated-looking values', () => {
    expect(looksReal(RANDOMISH)).toBe(true);
    expect(looksReal(googleKey())).toBe(true);
  });
});

describe('redact', () => {
  it('keeps only the first 4 characters and the length', () => {
    expect(redact('abcdefghij')).toBe('abcd… (10 chars)');
  });
});

describe('scanLine', () => {
  const rules = allRules();

  it('finds provider keys in any file, tests included', () => {
    const line = `const key = '${googleKey()}';`;
    expect(scanLine('apps/api/src/x.ts', line, undefined, rules).map((f) => f.rule)).toContain('secret-google-api-key');
    expect(scanLine('apps/api/src/x.test.ts', line, undefined, rules).map((f) => f.rule)).toContain(
      'secret-google-api-key',
    );
    expect(scanLine('README.md', `NPM_TOKEN=${npmToken()}`, undefined, rules).map((f) => f.rule)).toContain(
      'secret-npm-token',
    );
  });

  it('flags high-entropy assignments to secret-looking names outside tests only', () => {
    const line = assignment(RANDOMISH);
    expect(scanLine('packages/core/src/a.ts', line, undefined, rules)).toEqual([
      expect.objectContaining({ rule: 'secret-high-entropy-assignment', redacted: redact(RANDOMISH) }),
    ]);
    expect(scanLine('packages/core/src/a.test.ts', line, undefined, rules)).toEqual([]);
    expect(scanLine('packages/core/test/helpers.ts', line, undefined, rules)).toEqual([]);
    // Low entropy or placeholders are not secrets.
    expect(scanLine('packages/core/src/a.ts', assignment('placeholder-value-for-docs'), undefined, rules)).toEqual([]);
  });

  it('honours the allow pragma on the same or the previous line, only for the named rule', () => {
    const line = assignment(RANDOMISH);
    const reason = ' documented public value';
    const pragma = `// secrets-scan-allow: secret-high-entropy-assignment${reason}`;
    expect(scanLine('src/a.ts', `${line} ${pragma}`, undefined, rules)).toEqual([]);
    expect(scanLine('src/a.ts', line, pragma, rules)).toEqual([]);
    expect(scanLine('src/a.ts', line, '// secrets-scan-allow: secret-jwt other rule', rules)).toHaveLength(1);
    // The reason is mandatory.
    expect(
      scanLine('src/a.ts', `${line} // secrets-scan-allow: secret-high-entropy-assignment`, undefined, rules),
    ).toHaveLength(1);
  });

  it('never prints the secret itself', () => {
    const [finding] = scanLine('src/a.ts', assignment(RANDOMISH), undefined, rules);
    expect(JSON.stringify(finding)).not.toContain(RANDOMISH);
  });
});

describe('historyArgs', () => {
  it('scans every ref by default and a revision range when given', () => {
    expect(historyArgs(undefined)).toContain('--all');
    const ranged = historyArgs('origin/main..HEAD');
    expect(ranged).toContain('origin/main..HEAD');
    expect(ranged).not.toContain('--all');
    expect(ranged).toContain('--diff-filter=AM');
  });
});

describe('scanWorkingTree and scanDiff', () => {
  it('finds a secret that was committed and later deleted only in the history', async () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    initRepo(tmp.dir, { 'README.md': '# clean\n' });
    writeFiles(tmp.dir, { 'src/config.ts': `export const x = 1;\n${assignment(RANDOMISH)}\n` });
    gitIn(tmp.dir, 'add', '-A');
    gitIn(tmp.dir, 'commit', '--quiet', '-m', 'leak');
    const leak = gitIn(tmp.dir, 'rev-parse', 'HEAD').trim();
    writeFiles(tmp.dir, { 'src/config.ts': 'export const x = 1;\n' });
    gitIn(tmp.dir, 'commit', '--quiet', '-am', 'remove');

    expect(scanWorkingTree(tmp.dir)).toEqual([]);

    const history = await scanDiff(historyArgs(undefined), tmp.dir);
    expect(history).toEqual([
      expect.objectContaining({ commit: leak, file: 'src/config.ts', line: 2, rule: 'secret-high-entropy-assignment' }),
    ]);

    // A range that starts after the leak (e.g. a pull request on top of it) does not see it.
    expect(await scanDiff(historyArgs(`${leak}..HEAD`), tmp.dir)).toEqual([]);
  });

  it('reports committed env files as forbidden files', async () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    initRepo(tmp.dir, { 'README.md': '# clean\n', '.env': 'NODE_ENV=development\n' });
    expect(scanWorkingTree(tmp.dir).map((f) => [f.file, f.rule])).toContainEqual(['.env', 'forbidden-file']);
    const history = await scanDiff(historyArgs(undefined), tmp.dir);
    expect(history.map((f) => [f.file, f.rule])).toContainEqual(['.env', 'forbidden-file']);
  });
});
