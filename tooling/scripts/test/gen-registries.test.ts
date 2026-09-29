import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { generateAll, HEADER, REGISTRIES, render, toIdentifier } from '../gen-registries.ts';
import { tempDir, writeFiles } from './helpers.ts';

let cleanup: (() => void) | undefined;
afterEach(() => cleanup?.());

function fixture(files: Record<string, string>): string {
  const tmp = tempDir();
  cleanup = tmp.cleanup;
  writeFiles(tmp.dir, files);
  return tmp.dir;
}

const api = REGISTRIES.find((r) => r.dir === 'apps/api/src/modules');
const db = REGISTRIES.find((r) => r.dir === 'packages/db/src/schema');

describe('toIdentifier', () => {
  it('camel-cases directory names into valid identifiers', () => {
    expect(toIdentifier('studio-mods')).toBe('studioMods');
    expect(toIdentifier('internal-cdn')).toBe('internalCdn');
    expect(toIdentifier('auth')).toBe('auth');
    expect(toIdentifier('legacy_mentions')).toBe('legacyMentions');
    expect(toIdentifier('3d')).toBe('_3d');
  });
});

describe('render', () => {
  it('skips registries whose directory does not exist', () => {
    const root = fixture({ 'README.md': '' });
    if (!api) throw new Error('api registry missing');
    expect(render(api, root)).toBeNull();
  });

  it('imports the default export of each module directory, sorted', () => {
    const root = fixture({
      'apps/api/src/modules/studio-mods/index.ts': 'export default {};',
      'apps/api/src/modules/auth/index.ts': 'export default {};',
      'apps/api/src/modules/_shared/index.ts': 'export default {};',
      'apps/api/src/modules/no-index/routes.ts': '',
    });
    if (!api) throw new Error('api registry missing');
    expect(render(api, root)).toBe(
      `${HEADER}\nimport authModule from './auth/index.ts';\nimport studioModsModule from './studio-mods/index.ts';\n\nexport const modules = [\n  authModule,\n  studioModsModule,\n] as const;\n`,
    );
  });

  it('renders an empty registry for an empty directory', () => {
    const root = fixture({ 'apps/worker/src/jobs/.keep': '' });
    const worker = REGISTRIES.find((r) => r.dir === 'apps/worker/src/jobs');
    if (!worker) throw new Error('worker registry missing');
    expect(render(worker, root)).toBe(`${HEADER}\nexport const jobGroups = [] as const;\n`);
  });

  it('builds the schema barrel in legacy, v2, ext order', () => {
    const root = fixture({
      'packages/db/src/schema/v2/session.ts': '',
      'packages/db/src/schema/legacy/mod.ts': '',
      'packages/db/src/schema/legacy/user.ts': '',
      'packages/db/src/schema/legacy/user.test.ts': '',
      'packages/db/src/schema/ext/wp-40.ts': '',
      'packages/db/src/schema/legacy/index.ts': '',
    });
    if (!db) throw new Error('db registry missing');
    expect(render(db, root)).toBe(
      `${HEADER}\nexport * from './legacy/mod.ts';\nexport * from './legacy/user.ts';\nexport * from './v2/session.ts';\nexport * from './ext/wp-40.ts';\n`,
    );
  });
});

describe('generateAll', () => {
  it('writes, then reports unchanged, then detects stale output in --check mode', () => {
    const root = fixture({ 'apps/api/src/modules/auth/index.ts': 'export default {};' });
    const first = generateAll({ check: false, root });
    expect(first.find((r) => r.path.startsWith('apps/api'))?.status).toBe('written');
    expect(readFileSync(join(root, 'apps/api/src/modules/_registry.gen.ts'), 'utf8')).toContain('authModule');
    expect(generateAll({ check: true, root }).find((r) => r.path.startsWith('apps/api'))?.status).toBe('unchanged');
    writeFiles(root, { 'apps/api/src/modules/kits/index.ts': 'export default {};' });
    expect(generateAll({ check: true, root }).find((r) => r.path.startsWith('apps/api'))?.status).toBe('stale');
  });

  it('refuses identifier clashes', () => {
    const root = fixture({
      'apps/api/src/modules/a-b/index.ts': '',
      'apps/api/src/modules/a_b/index.ts': '',
    });
    expect(() => generateAll({ check: false, root })).toThrow(/same identifier/);
  });
});
