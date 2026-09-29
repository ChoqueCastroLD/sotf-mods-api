import { afterEach, describe, expect, it } from 'vitest';
import { resolveTask, TASKS } from '../delegate.ts';
import { devBuckets } from '../infra.ts';
import { runScript, tempDir, writeFiles } from './helpers.ts';

let cleanup: (() => void) | undefined;
afterEach(() => cleanup?.());

describe('resolveTask', () => {
  it('covers every delegated root script of PLAN §12.1', () => {
    for (const task of [
      'db:migrate',
      'db:guard',
      'db:baseline',
      'db:seed:dev',
      'db:reset:dev',
      'db:backfill',
      'db:invariants',
      'db:verify-snapshot',
      'db:revert-fix',
      'admin:grant',
      'i18n:check',
      'e2e',
      'contract:legacy',
      'lhci',
      'load',
    ]) {
      expect(TASKS[task], task).toBeDefined();
    }
  });

  it('explains which WP delivers a missing package or script', () => {
    const tmp = tempDir();
    cleanup = tmp.cleanup;
    expect(resolveTask('db:migrate', tmp.dir)).toEqual({
      ok: false,
      reason: 'packages/db/package.json does not exist yet (delivered by WP-10)',
    });
    writeFiles(tmp.dir, { 'packages/db/package.json': JSON.stringify({ scripts: { other: 'x' } }) });
    expect(resolveTask('db:migrate', tmp.dir)).toEqual({
      ok: false,
      reason: 'packages/db/package.json has no "db:migrate" script yet (delivered by WP-10)',
    });
    writeFiles(tmp.dir, { 'packages/db/package.json': JSON.stringify({ scripts: { 'db:migrate': 'x' } }) });
    expect(resolveTask('db:migrate', tmp.dir)).toEqual({ ok: true, dir: 'packages/db' });
    expect(resolveTask('nope', tmp.dir)).toEqual({ ok: false, reason: 'unknown task "nope"' });
  });
});

describe('delegate.ts CLI', () => {
  it('skips optional tasks that are not implemented yet', () => {
    const result = runScript('delegate.ts', ['--optional', 'lhci'], { env: { SOTF_OPTIONAL_TASKS: '' } });
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('skip lhci');
  });

  it('fails required tasks that are not implemented yet', () => {
    const result = runScript('delegate.ts', ['lhci'], { env: { SOTF_OPTIONAL_TASKS: '' } });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('delivered by WP-92');
  });

  it('treats every task as optional when SOTF_OPTIONAL_TASKS=1', () => {
    expect(runScript('delegate.ts', ['lhci'], { env: { SOTF_OPTIONAL_TASKS: '1' } }).status).toBe(0);
  });
});

describe('devBuckets', () => {
  it('mirrors the production bucket names unless overridden', () => {
    expect(devBuckets({})).toEqual(['sotf-mods', 'sotf-mods-private']);
    expect(devBuckets({ R2_BUCKET: 'sotf-mods-staging' })).toEqual(['sotf-mods-staging', 'sotf-mods-private']);
  });
});
