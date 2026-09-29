import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { PACKAGE_DIR } from '../src/fixtures.ts';

const cli = join(PACKAGE_DIR, 'src', 'cli.ts');
const node = (args: string[]) =>
  spawnSync(process.execPath, [cli, ...args], {
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1', LEGACY_CONTRACT_BASE_URL: '' },
  });

describe('pnpm contract:legacy', () => {
  it('self-tests against the simulated server when no base URL is given', () => {
    const out = node(['--suites', 'fixtures,kelvinseek', '--dotnet', 'off', '--json']);
    expect(out.status, out.stderr).toBe(0);
    const report = JSON.parse(out.stdout) as { target: { mock: boolean }; summary: { fail: number; pass: number } };
    expect(report.target.mock).toBe(true);
    expect(report.summary).toMatchObject({ fail: 0 });
    expect(report.summary.pass).toBe(38 + 6);
  }, 30_000);

  it('rejects bad options with exit code 2', () => {
    expect(node(['--suites', 'nope']).status).toBe(2);
    expect(node(['--mode', 'loose']).status).toBe(2);
    expect(node(['--base-url', 'ftp://x']).status).toBe(2);
    expect(
      node(['--base-url', 'https://api.sotf-mods.com', '--compare-with', 'https://api.sotf-mods.com']).status,
    ).toBe(2);
  });

  it('prints its usage', () => {
    const out = node(['--help']);
    expect(out.status).toBe(0);
    expect(out.stdout).toContain('--compare-with');
  });
});
