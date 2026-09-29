import { afterEach, describe, expect, it } from 'vitest';
import { scan, scanText } from '../check-forbidden.ts';
import { hasRemoteDatabaseCredential, RULES } from '../forbidden-rules.ts';
import { initRepo, runScript, tempDir, writeFiles } from './helpers.ts';

// Forbidden strings are assembled at runtime so this file never looks like a real finding.
const LEGACY_HOST = ['files', 'sotf-mods', 'com'].join('.');
const JWT_VAR = ['JWT', 'SECRET'].join('_');

let cleanups: Array<() => void> = [];
afterEach(() => {
  for (const cleanup of cleanups) cleanup();
  cleanups = [];
});

function repoWith(files: Record<string, string>): string {
  const { dir, cleanup } = tempDir();
  cleanups.push(cleanup);
  initRepo(dir, { 'README.md': '# clean\n', ...files });
  return dir;
}

const rulesHit = (file: string, text: string) => scanText(file, text).map((f) => f.rule);

describe('pnpm check:forbidden (CLI)', () => {
  it('passes on a clean tree', () => {
    const dir = repoWith({ 'src/index.ts': "export const site = 'https://sotf-mods.com';\n" });
    const result = runScript('check-forbidden.ts', ['--root', dir]);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('no forbidden content');
  });

  it('fails when a seeded file contains the legacy file host', () => {
    const dir = repoWith({});
    // Seeded after the commit: untracked-but-not-ignored files are scanned too.
    writeFiles(dir, { 'apps/api/src/seeded.ts': `export const url = 'https://${LEGACY_HOST}/x.zip';\n` });
    const result = runScript('check-forbidden.ts', ['--root', dir]);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('apps/api/src/seeded.ts:1');
    expect(result.stderr).toContain('[legacy-files-host]');
  });

  it('ignores gitignored files', () => {
    const dir = repoWith({ '.gitignore': 'ignored/\n' });
    writeFiles(dir, { 'ignored/x.ts': `const u = '${LEGACY_HOST}';\n` });
    expect(runScript('check-forbidden.ts', ['--root', dir]).status).toBe(0);
  });

  it('scans plain directories that are not git repositories', () => {
    const { dir, cleanup } = tempDir();
    cleanups.push(cleanup);
    writeFiles(dir, { 'a/b.md': `see ${LEGACY_HOST}\n`, 'node_modules/x/y.js': `${LEGACY_HOST}\n` });
    const findings = scan(dir);
    expect(findings.map((f) => f.file)).toEqual(['a/b.md']);
  });

  it('reports committed environment files', () => {
    const dir = repoWith({ '.env.example': 'APP_SECRET=\n' });
    writeFiles(dir, { 'apps/api/.env': 'APP_SECRET=\n' });
    const findings = scan(dir);
    expect(findings).toEqual([expect.objectContaining({ file: 'apps/api/.env', rule: 'forbidden-file' })]);
  });

  it('emits machine-readable output with --json', () => {
    const dir = repoWith({ 'x.ts': `const k = process.env.${JWT_VAR};\n` });
    const result = runScript('check-forbidden.ts', ['--root', dir, '--json']);
    expect(result.status).toBe(1);
    expect(JSON.parse(result.stdout)).toEqual([expect.objectContaining({ rule: 'legacy-env-jwt', line: 1 })]);
  });
});

describe('rules', () => {
  it('flags every legacy variable of PLAN §2.8', () => {
    for (const name of [
      'FILE_UPLOAD_ENDPOINT',
      'FILE_UPLOAD_TOKEN',
      'FILE_PREVIEW_ENDPOINT',
      'FILE_DOWNLOAD_ENDPOINT',
      'KELVINGPT_API',
      'KELVINGPT_API_AUTHORITY',
      JWT_VAR,
    ]) {
      expect(rulesHit('src/env.ts', `const v = env.${name};`).length, name).toBeGreaterThan(0);
    }
  });

  it('flags the legacy "/preview" suffix but not v2 preview routes', () => {
    expect(rulesHit('a.js', "img.src = imageUrl + '/preview';")).toEqual(['legacy-preview-suffix']);
    // biome-ignore lint/suspicious/noTemplateCurlyInString: the literal placeholder is the input under test
    expect(rulesHit('a.ts', 'const u = `${base}/preview`;')).toEqual(['legacy-preview-suffix']);
    expect(rulesHit('a.ts', "app.post('/api/v2/markdown/preview', handler);")).toEqual([]);
    expect(rulesHit('a.ts', "const legacy = '/images/:file/preview';")).toEqual([]);
  });

  it('flags secret-looking values', () => {
    const openai = `sk-proj-${'a'.repeat(24)}`;
    const resend = `re_${'A1b2C3d4'}_${'x'.repeat(24)}`;
    const aws = `AKIA${'ABCDEFGHIJKLMNOP'}`;
    const gh = `ghp_${'a'.repeat(36)}`;
    const coolify = `12|${'a'.repeat(40)}`;
    expect(rulesHit('a.ts', `const k = '${openai}';`)).toContain('secret-openai-key');
    expect(rulesHit('a.ts', `const k = '${resend}';`)).toContain('secret-resend-key');
    expect(rulesHit('a.ts', `const k = '${aws}';`)).toContain('secret-aws-access-key');
    expect(rulesHit('a.ts', `const k = '${gh}';`)).toContain('secret-github-token');
    expect(rulesHit('a.ts', `token: '${coolify}'`)).toContain('secret-api-token');
    expect(rulesHit('k.txt', `-----BEGIN ${'PRIVATE'} KEY-----`)).toContain('secret-private-key');
  });

  it('does not flag ordinary identifiers that share a prefix', () => {
    expect(rulesHit('a.ts', 'const task-runner-something = desk-mode;')).toEqual([]);
    expect(rulesHit('a.ts', 'const re_render_version_number_for_cache = 1;')).toEqual([]);
  });

  it('flags secret assignments only in config files', () => {
    const value = 'Zm9vYmFyYmF6cXV4cXV1eHF1dXhxdXV4';
    expect(rulesHit('.env.example', `APP_SECRET=${value}`)).toEqual(['secret-assignment']);
    expect(rulesHit('ops/compose/x.yml', `  CF_API_TOKEN: ${value}`)).toEqual(['secret-assignment']);
    expect(rulesHit('.env.example', 'APP_SECRET=')).toEqual([]);
    // biome-ignore lint/suspicious/noTemplateCurlyInString: the literal placeholder is the input under test
    expect(rulesHit('.env.example', 'APP_SECRET=${APP_SECRET}')).toEqual([]);
    expect(rulesHit('src/a.ts', `const APP_SECRET = '${value}';`)).toEqual([]);
  });

  it('detects remote database URLs with real credentials only', () => {
    expect(hasRemoteDatabaseCredential('postgres://app:S3cr3tPassw0rd@db.example.com:5433/sotf')).toBe(true);
    expect(hasRemoteDatabaseCredential('postgres://sotf:sotf@127.0.0.1:47432/sotf')).toBe(false);
    // biome-ignore lint/suspicious/noTemplateCurlyInString: the literal placeholder is the input under test
    expect(hasRemoteDatabaseCredential('postgresql://u:${DB_PASSWORD}@prod.example.com/x')).toBe(false);
    expect(hasRemoteDatabaseCredential('postgres://u:<password>@host/x')).toBe(false);
    expect(hasRemoteDatabaseCredential('postgres://postgres:postgres@postgres:5432/x')).toBe(false);
  });

  it('honours the per-line allow pragma (with a mandatory reason)', () => {
    expect(
      rulesHit('a.ts', `const u = '${LEGACY_HOST}'; // check-forbidden-allow: legacy-files-host redirect test`),
    ).toEqual([]);
    expect(
      rulesHit('a.ts', `// check-forbidden-allow: legacy-files-host documented\nconst u = '${LEGACY_HOST}';`),
    ).toEqual([]);
    expect(rulesHit('a.ts', `const u = '${LEGACY_HOST}'; // check-forbidden-allow: legacy-files-host`)).toEqual([
      'legacy-files-host',
    ]);
    expect(rulesHit('a.ts', `const u = '${LEGACY_HOST}'; // check-forbidden-allow: other-rule reason`)).toEqual([
      'legacy-files-host',
    ]);
  });

  it('respects path allowlists', () => {
    expect(rulesHit('tooling/legacy-contract/fixtures/mods.json', `"url": "https://${LEGACY_HOST}/a"`)).toEqual([]);
    expect(rulesHit('ops/runbooks/cutover/README.md', `delete ${JWT_VAR}`)).toEqual([]);
    expect(rulesHit('apps/web/src/x.ts', `"https://${LEGACY_HOST}/a"`)).toEqual(['legacy-files-host']);
  });

  it('has unique rule ids', () => {
    const ids = RULES.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
