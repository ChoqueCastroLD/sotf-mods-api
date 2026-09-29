/**
 * Acceptance of WP-24: the .NET checker (UpdatesChecker DTO + Newtonsoft.Json on
 * `mcr.microsoft.com/dotnet/sdk:10.0`) accepts the fixtures and **fails** on a mutated fixture
 * (`downloads: null`). Needs Docker, like every integration suite of the repository.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
  buildDotnetChecker,
  DOTNET_IMAGE,
  dockerAvailable,
  runDotnetChecker,
  runDotnetCheckerOnDir,
} from '../src/dotnet.ts';
import { fixtureBody, loadFixtures } from '../src/fixtures.ts';
import { runHarness } from '../src/index.ts';
import { type MockServer, startMockServer } from '../src/mock/server.ts';

const listFixtures = loadFixtures().filter((f) => f.schemaName === 'LegacyModListResponse');

beforeAll(() => {
  if (!dockerAvailable()) throw new Error('Docker is required by the .NET checker integration test');
  buildDotnetChecker();
}, 600_000);

describe('.NET UpdatesChecker checker', () => {
  it('uses the .NET 10 SDK image and Newtonsoft.Json', () => {
    const out = spawnSync('docker', ['run', '--rm', '--entrypoint', 'dotnet', DOTNET_IMAGE, '--version'], {
      encoding: 'utf8',
    });
    expect(out.stdout.trim()).toMatch(/^10\./);
    const deps = spawnSync('docker', ['run', '--rm', '--entrypoint', 'ls', DOTNET_IMAGE, '/app'], { encoding: 'utf8' });
    expect(deps.stdout).toContain('Newtonsoft.Json.dll');
  });

  it('accepts every list fixture except the legacy limit=0 bug (meta.pages null)', () => {
    const results = runDotnetChecker(listFixtures.map((f) => ({ name: f.name, body: f.raw })));
    expect(results).toHaveLength(listFixtures.length);
    for (const r of results) {
      if (r.file.endsWith('mods-limit0.json')) {
        expect(r.ok, r.file).toBe(false);
        expect(r.error).toMatch(/Error converting value \{null\} to type 'System\.Int32'\. Path 'meta\.pages'/);
      } else {
        expect(r, r.file).toMatchObject({ ok: true });
      }
    }
  }, 120_000);

  it('fails on a mutated fixture (downloads: null) and on other value-type breaks', () => {
    const mutate = (fn: (body: { data: Array<Record<string, unknown>>; meta: Record<string, unknown> }) => void) => {
      const body = fixtureBody<{ data: Array<Record<string, unknown>>; meta: Record<string, unknown> }>(
        'mods-updateschecker-modids',
      );
      fn(body);
      return Buffer.from(JSON.stringify(body));
    };
    const results = runDotnetChecker([
      {
        name: 'downloads-null',
        body: mutate((b) => {
          if (b.data[0]) b.data[0].downloads = null;
        }),
      },
      {
        name: 'rating-text',
        body: mutate((b) => {
          if (b.data[0]) b.data[0].averageRating = 'n/a';
        }),
      },
      {
        name: 'approved-null',
        body: mutate((b) => {
          if (b.data[1]) b.data[1].isApproved = null;
        }),
      },
      {
        name: 'date-garbage',
        body: mutate((b) => {
          if (b.data[0]) b.data[0].lastReleasedAt = 'yesterday';
        }),
      },
      {
        name: 'meta-total-null',
        body: mutate((b) => {
          b.meta.total = null;
        }),
      },
      { name: 'untouched', body: mutate(() => {}) },
    ]);
    const byName = Object.fromEntries(results.map((r) => [r.file.replace(/^\d+-/, '').replace(/\.json$/, ''), r]));
    expect(byName['downloads-null']).toMatchObject({ ok: false });
    expect(byName['downloads-null']?.error).toMatch(/Path 'data\[0\]\.downloads'/);
    for (const name of ['rating-text', 'approved-null', 'date-garbage', 'meta-total-null'])
      expect(byName[name], name).toMatchObject({ ok: false });
    expect(byName.untouched).toMatchObject({ ok: true, mods: 3 });
  }, 120_000);

  it('exits non-zero when a file fails (CI gate)', () => {
    const dir = mkdtempSync(join(tmpdir(), 'sotfv2-dotnet-'));
    try {
      writeFileSync(join(dir, 'ok.json'), listFixtures[0]?.raw ?? '');
      expect(runDotnetCheckerOnDir(dir).every((r) => r.ok)).toBe(true);
      writeFileSync(
        join(dir, 'bad.json'),
        JSON.stringify({ ...(fixtureBody('mods-default') as object), status: null }),
      );
      const out = spawnSync('docker', [
        'run',
        '--rm',
        '--network',
        'none',
        '-v',
        `${dir}:/data:ro`,
        DOTNET_IMAGE,
        '/data',
      ]);
      expect(out.status).toBe(1);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }, 120_000);
});

describe('harness with the .NET suite', () => {
  let server: MockServer;
  beforeAll(async () => {
    server = await startMockServer();
  });
  afterAll(async () => {
    await server.close();
  });

  it('runs the captured UpdatesChecker bodies through the DTO', async () => {
    const report = await runHarness({
      baseUrl: server.url,
      suites: ['fixtures', 'updateschecker', 'dotnet'],
      dotnet: 'on',
    });
    const dotnet = report.results.filter((r) => r.suite === 'dotnet');
    expect(dotnet.length).toBeGreaterThan(20);
    expect(dotnet.every((r) => r.status === 'pass')).toBe(true);
    expect(report.summary.fail).toBe(0);
  }, 180_000);
});
