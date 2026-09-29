import { readFileSync, renameSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { changedPaths, detectWpId } from '../check-ownership.ts';
import {
  findWaveOverlaps,
  generate,
  OVERRIDES_PATH,
  type Overrides,
  OWNERSHIP_PATH,
  PLAN_PATH,
  parsePlan,
  serialize,
} from '../gen-ownership.ts';
import { checkPath, type OwnershipFile, ownersOf } from '../lib/ownership.ts';
import { repoPath } from '../lib/repo.ts';
import { gitIn, initRepo, tempDir, writeFiles } from './helpers.ts';

const plan = readFileSync(repoPath(PLAN_PATH), 'utf8');
const overrides = (() => {
  const raw = JSON.parse(readFileSync(repoPath(OVERRIDES_PATH), 'utf8')) as Overrides & { $comment?: unknown };
  delete raw.$comment;
  return raw as Overrides;
})();
const ownership = JSON.parse(readFileSync(repoPath(OWNERSHIP_PATH), 'utf8')) as OwnershipFile;

const allowed = (wp: string, path: string) => checkPath(ownership, wp, path).allowed;

describe('ownership.json', () => {
  it('is in sync with PLAN §12.3 and the overrides', () => {
    expect(serialize(generate(plan, overrides))).toBe(readFileSync(repoPath(OWNERSHIP_PATH), 'utf8'));
  });

  it('lists every work package of the plan with its wave', () => {
    const parsed = parsePlan(plan);
    expect(parsed.length).toBeGreaterThanOrEqual(50);
    expect(Object.keys(ownership.wps)).toEqual(parsed.map((wp) => wp.id));
    expect(ownership.wps['WP-00']?.wave).toBe('W0');
    expect(ownership.wps['WP-31']?.wave).toBe('W3');
    expect(ownership.wps['WP-A4']?.wave).toBe('W10');
    for (const [id, wp] of Object.entries(ownership.wps)) {
      expect(wp.include.length, `${id} has no routes`).toBeGreaterThan(0);
    }
  });

  it('keeps paths disjoint within each wave (PLAN §12.1)', () => {
    expect(findWaveOverlaps(ownership)).toEqual([]);
  });
});

describe('checkPath', () => {
  it('lets WP-00 touch its scaffold and nothing else', () => {
    expect(allowed('WP-00', 'package.json')).toBe(true);
    expect(allowed('WP-00', 'apps/api/src/index.ts')).toBe(true);
    expect(allowed('WP-00', 'packages/markdown/tsconfig.json')).toBe(true);
    expect(allowed('WP-00', 'tooling/scripts/check-forbidden.ts')).toBe(true);
    expect(allowed('WP-00', 'docs/adr/0001-record-architecture-decisions.md')).toBe(true);
    expect(allowed('WP-00', 'apps/api/src/app.ts')).toBe(false);
    expect(allowed('WP-00', 'packages/brand/package.json')).toBe(false);
    expect(allowed('WP-00', 'docs/plan/PLAN.md')).toBe(false);
  });

  it('separates the API platform (WP-20) from domain modules', () => {
    expect(allowed('WP-20', 'apps/api/src/app.ts')).toBe(true);
    expect(allowed('WP-20', 'apps/api/src/modules/health/index.ts')).toBe(true);
    expect(allowed('WP-20', 'apps/api/src/modules/auth/routes.ts')).toBe(false);
    expect(allowed('WP-20', 'apps/api/src/legacy/mods.ts')).toBe(false);
    expect(allowed('WP-30', 'apps/api/src/modules/auth/routes.ts')).toBe(true);
    expect(ownersOf(ownership, 'apps/api/src/modules/auth/routes.ts')).toEqual(['WP-30']);
  });

  it('honours "salvo" exclusions', () => {
    expect(allowed('WP-32', 'apps/api/src/legacy/mods.ts')).toBe(true);
    expect(allowed('WP-32', 'apps/api/src/legacy/downloads/route.ts')).toBe(false);
    expect(allowed('WP-31', 'apps/api/src/legacy/downloads/route.ts')).toBe(true);
    expect(allowed('WP-12', 'packages/ui/src/primitives/button.tsx')).toBe(true);
    expect(allowed('WP-12', 'packages/ui/src/domain/mod-card.tsx')).toBe(false);
    expect(allowed('WP-80', 'apps/web/src/console/routes/basecamp/index.tsx')).toBe(true);
    expect(allowed('WP-80', 'apps/web/src/console/routes/basecamp/mods/$modId/new-version.tsx')).toBe(false);
    expect(allowed('WP-81', 'apps/web/src/console/routes/me/kits/index.tsx')).toBe(false);
  });

  it('transfers WP-22 stubs to the WP that implements them', () => {
    expect(allowed('WP-22', 'apps/web/src/console/routes/__root.tsx')).toBe(true);
    expect(allowed('WP-34', 'apps/web/src/console/routes/__root.tsx')).toBe(true);
    expect(allowed('WP-34', 'apps/web/src/console/routes/ranger/index.tsx')).toBe(false);
    expect(allowed('WP-44', 'apps/web/src/components/account/HeaderAccount.astro')).toBe(true);
  });

  it('hands the WP-00 skeleton files over to the WPs that implement each package', () => {
    expect(allowed('WP-22', 'apps/web/src/index.ts')).toBe(true);
    expect(allowed('WP-20', 'apps/api/src/index.ts')).toBe(true);
    expect(allowed('WP-20', 'packages/core/tsconfig.json')).toBe(true);
    expect(allowed('WP-20', 'packages/emails/src/index.ts')).toBe(true);
    expect(allowed('WP-11', 'packages/contracts/src/index.ts')).toBe(true);
    expect(allowed('WP-10', 'packages/db/tsconfig.json')).toBe(true);
  });

  it('always allows shared generated files, the lockfile and the own backlog', () => {
    expect(checkPath(ownership, 'WP-13', 'pnpm-lock.yaml')).toEqual({ allowed: true, reason: 'shared' });
    expect(allowed('WP-13', 'apps/web/src/console/routeTree.gen.ts')).toBe(true);
    expect(allowed('WP-13', 'packages/i18n/.generated/en.json')).toBe(true);
    expect(allowed('WP-13', 'docs/backlog/WP-13.md')).toBe(true);
    expect(allowed('WP-13', 'docs/backlog/WP-12.md')).toBe(false);
  });

  it('allows dependency edits in the manifest of a package the WP owns files in', () => {
    expect(checkPath(ownership, 'WP-30', 'apps/api/package.json')).toEqual({ allowed: true, reason: 'manifest' });
    expect(checkPath(ownership, 'WP-30', 'packages/core/package.json')).toEqual({ allowed: true, reason: 'manifest' });
    expect(allowed('WP-30', 'apps/web/package.json')).toBe(false);
    expect(allowed('WP-30', 'package.json')).toBe(false);
  });

  it('rejects unknown work packages', () => {
    expect(() => checkPath(ownership, 'WP-99', 'x')).toThrow(/unknown work package/);
  });
});

describe('check:ownership helpers', () => {
  let cleanup: (() => void) | undefined;
  afterEach(() => cleanup?.());

  it('detects the WP id from arguments, env and branch names', () => {
    expect(detectWpId('WP-31', null)).toBe('WP-31');
    expect(detectWpId(undefined, 'wp/WP-A2')).toBe('WP-A2');
    expect(detectWpId(undefined, 'main')).toBeNull();
    expect(detectWpId('nonsense', null)).toBeNull();
  });

  it('collects committed, modified, untracked and renamed paths since the merge-base', () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    const dir = tmp.dir;
    initRepo(dir, {
      'a.txt': 'a\n',
      'old-name.txt': 'same content that survives the rename\n',
      '.gitignore': 'ignored.txt\n',
    });
    gitIn(dir, 'checkout', '--quiet', '-b', 'wp/WP-00');
    writeFiles(dir, { 'committed.txt': 'c\n' });
    gitIn(dir, 'add', '-A');
    gitIn(dir, 'commit', '--quiet', '-m', 'work');
    writeFiles(dir, { 'a.txt': 'changed\n', 'untracked.txt': 'u\n', 'ignored.txt': 'i\n' });
    renameSync(join(dir, 'old-name.txt'), join(dir, 'new-name.txt'));
    gitIn(dir, 'add', 'old-name.txt', 'new-name.txt');
    expect(changedPaths('main', dir)).toEqual([
      'a.txt',
      'committed.txt',
      'new-name.txt',
      'old-name.txt',
      'untracked.txt',
    ]);
  });
});
