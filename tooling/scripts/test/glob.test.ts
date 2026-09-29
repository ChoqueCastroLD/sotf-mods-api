import { describe, expect, it } from 'vitest';
import { expandBraces, matchAny, matchGlob, normalizePath, staticPrefix } from '../lib/glob.ts';

describe('expandBraces', () => {
  it('expands simple, nested and spaced groups', () => {
    expect(expandBraces('a/{b,c}/d')).toEqual(['a/b/d', 'a/c/d']);
    expect(expandBraces('{a,b}/{c,d}')).toEqual(['a/c', 'a/d', 'b/c', 'b/d']);
    expect(expandBraces('x/{y,{z,w}}')).toEqual(['x/y', 'x/z', 'x/w']);
    expect(expandBraces('p/{a.ts, b/**}')).toEqual(['p/a.ts', 'p/b/**']);
    expect(expandBraces('no-braces')).toEqual(['no-braces']);
  });
});

describe('matchGlob', () => {
  it.each([
    ['packages/ui/src/button.tsx', 'packages/ui/**', true],
    ['packages/ui', 'packages/ui/**', true],
    ['packages/uix/a.ts', 'packages/ui/**', false],
    ['apps/api/src/modules/auth/index.ts', 'apps/api/src/modules/*/**', true],
    ['apps/api/src/modules/_registry.gen.ts', 'apps/api/src/modules/*/**', true], // like minimatch: `**` may match zero segments
    ['a/b/c/x.gen.ts', '**/*.gen.ts', true],
    ['x.gen.ts', '**/*.gen.ts', true],
    ['a/b.ts', '*.ts', false],
    ['apps/web/src/pages/mods/[user]/[slug].md.ts', 'apps/web/src/pages/mods/[user]/[slug].{md,json}.ts', true],
    ['apps/web/src/pages/mods/u/s.md.ts', 'apps/web/src/pages/mods/[user]/[slug].{md,json}.ts', false],
    [
      'apps/web/src/console/routes/basecamp/mods/$modId/new-version.tsx',
      'apps/web/src/console/routes/basecamp/mods/$modId/new-version.tsx',
      true,
    ],
    ['tooling/load/downloads.ts', 'tooling/load/downloads.*', true],
    ['tooling/load/downloads/x.ts', 'tooling/load/downloads.*', false],
    ['ops/sql/a.sql', 'ops/sql/', true],
    ['/README.md', 'README.md', true],
    ['.env.local', '**/.env{,.*}', true],
    ['apps/web/.env', '**/.env{,.*}', true],
    ['.env.example', '**/.env{,.*}', true],
    ['.envrc', '**/.env{,.*}', false],
    ['e2e/a?.ts', 'e2e/a?.ts', true],
  ])('%s vs %s -> %s', (path, pattern, expected) => {
    expect(matchGlob(path, pattern)).toBe(expected);
  });

  it('matchAny returns true when one pattern matches', () => {
    expect(matchAny('a/b.ts', ['x/**', 'a/*.ts'])).toBe(true);
    expect(matchAny('a/b.ts', [])).toBe(false);
  });
});

describe('normalizePath / staticPrefix', () => {
  it('normalises separators and leading markers', () => {
    expect(normalizePath('./a/b')).toBe('a/b');
    expect(normalizePath('/a\\b')).toBe('a/b');
  });

  it('returns the literal directory prefix', () => {
    expect(staticPrefix('packages/ui/**')).toBe('packages/ui/');
    expect(staticPrefix('apps/web/src/{a,b}/**')).toBe('apps/web/src/');
    expect(staticPrefix('apps/api/src/modules/*/')).toBe('apps/api/src/modules/');
    expect(staticPrefix('README.md')).toBe('');
    expect(staticPrefix('**/*.gen.ts')).toBe('');
  });
});
