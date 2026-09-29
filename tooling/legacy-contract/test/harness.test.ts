/**
 * Acceptance of WP-24: against the simulated server that reproduces the fixtures the harness is
 * 100 % green (no failure, no skip) — and every regression injected into that server is caught.
 */
import { afterEach, describe, expect, it } from 'vitest';
import { loadFixtures } from '../src/fixtures.ts';
import { HttpClient, type HttpRequest, type HttpResponse } from '../src/http.ts';
import { type Report, runHarness, type SuiteName } from '../src/index.ts';
import { type MockHooks, type MockServer, startMockServer } from '../src/mock/server.ts';

const servers: MockServer[] = [];
afterEach(async () => {
  await Promise.all(servers.splice(0).map((s) => s.close()));
});

async function mock(hooks?: MockHooks): Promise<MockServer> {
  const server = await startMockServer({ hooks });
  servers.push(server);
  return server;
}

async function run(
  server: MockServer,
  suites: SuiteName[],
  extra: Partial<Parameters<typeof runHarness>[0]> = {},
): Promise<Report> {
  return runHarness({ baseUrl: server.url, suites, dotnet: 'off', countTimeoutMs: 2_000, countPollMs: 50, ...extra });
}

const failed = (report: Report) => report.results.filter((r) => r.status === 'fail');
const failedNames = (report: Report) => failed(report).map((r) => r.name);

type Json = Record<string, unknown>;
const isList = (body: unknown): body is { data: Json[] } =>
  !!body && typeof body === 'object' && Array.isArray((body as Json).data);

describe('against the simulated server', () => {
  it('is 100 % green: every suite, no failure, no skip', async () => {
    const server = await mock();
    const report = await run(server, ['fixtures', 'check', 'redmanager', 'updateschecker', 'kelvinseek', 'downloads']);
    expect(failed(report)).toEqual([]);
    expect(report.summary.skip).toBe(0);
    expect(report.summary.pass).toBeGreaterThan(90);
    const fixtureChecks = report.results.filter((r) => r.suite === 'fixtures');
    expect(fixtureChecks).toHaveLength(loadFixtures().length);
    // RedManager-like traffic never sends a User-Agent.
    expect(
      server.requests
        .filter((r) => r.path.includes('/download/') && !r.path.includes('/api/'))
        .some((r) => r.userAgent === undefined),
    ).toBe(true);
  }, 60_000);

  it('never sends anything but GET/HEAD/OPTIONS', async () => {
    const server = await mock();
    await run(server, ['fixtures', 'redmanager', 'downloads', 'kelvinseek']);
    expect(new Set(server.requests.map((r) => r.method))).toEqual(new Set(['GET', 'HEAD', 'OPTIONS']));
  }, 60_000);
});

describe('catches regressions', () => {
  it('downloads: null in a list item (UpdatesChecker would crash)', async () => {
    const server = await mock({
      transformJson: (ctx, body) => {
        if (ctx.pathname === '/api/mods' && isList(body) && body.data[0]) body.data[0].downloads = null;
        return body;
      },
    });
    const report = await run(server, ['fixtures', 'updateschecker']);
    const names = failedNames(report);
    expect(names.some((n) => n.startsWith('mods-default'))).toBe(true);
    expect(names.some((n) => n.startsWith('mods-redmanager-p1'))).toBe(true);
    expect(names.some((n) => n.startsWith('GET /api/mods?&page='))).toBe(true);
    const diff = failed(report).flatMap((r) => r.diffs ?? []);
    expect(diff.some((d) => d.kind === 'value-field' && d.path === '$.data[0].downloads')).toBe(true);
  }, 60_000);

  it('a key order change in the detail', async () => {
    const server = await mock({
      transformJson: (ctx, body) => {
        if (ctx.fixture === 'mod-by-id') {
          const data = (body as { data: Json }).data;
          const { name, ...rest } = data;
          return { status: true, data: { ...rest, name } };
        }
        return body;
      },
    });
    const report = await run(server, ['fixtures']);
    expect(failedNames(report)).toEqual([expect.stringMatching(/^mod-by-id ·/)]);
    expect(failed(report)[0]?.diffs?.some((d) => d.kind === 'order')).toBe(true);
  });

  it('dependencies sent as an array in the detail (RedManager relies on the string)', async () => {
    const server = await mock({
      transformJson: (ctx, body) => {
        if (
          /^\/api\/mods\/[^/]+$/.test(ctx.pathname) &&
          body &&
          typeof body === 'object' &&
          (body as Json).status === true
        ) {
          const data = (body as { data: Json }).data;
          data.dependencies = String(data.dependencies).split(',').filter(Boolean);
        }
        return body;
      },
    });
    const report = await run(server, ['fixtures', 'redmanager']);
    expect(failedNames(report).some((n) => n.startsWith('mod-by-id ·'))).toBe(true);
    expect(failedNames(report).some((n) => n.startsWith('installed mods'))).toBe(true);
  });

  it('a charset on legacy JSON', async () => {
    const server = await mock({ jsonContentType: 'application/json; charset=utf-8' });
    const report = await run(server, ['fixtures']);
    expect(failed(report)).toHaveLength(loadFixtures().length);
  });

  it('a 301 instead of a 302, form-encoded keys and 200 for a missing file', async () => {
    const moved = await run(await mock({ downloadStatus: 301 }), ['redmanager', 'downloads']);
    expect(failedNames(moved).some((n) => n.startsWith('install '))).toBe(true);
    expect(failedNames(moved).some((n) => n.startsWith('key with'))).toBe(true);

    const form = await run(await mock({ encodeKey: (key) => encodeURIComponent(key).replace(/%20/g, '+') }), [
      'downloads',
    ]);
    // `+` for spaces (form encoding) is a 404 on R2; `+` itself is still %2B here.
    expect(failedNames(form)).toEqual([expect.stringMatching(/^key with space/)]);
    expect(failed(form)[0]?.message).toMatch(/storage answered 404/);

    const ok200 = await run(await mock({ missingDownloadOk: true }), ['downloads']);
    expect(failedNames(ok200).filter((n) => n.includes('→ 404'))).toHaveLength(2);
  }, 60_000);

  it('HEAD, partial Range or bots counted as downloads', async () => {
    const report = await run(await mock({ countEverything: true }), ['downloads']);
    expect(failedNames(report)).toEqual([expect.stringMatching(/^counting:/)]);
    expect(failed(report)[0]?.message).toMatch(/expected exactly \+1/);
  }, 30_000);

  it('KelvinSeek replies with an unknown command, two separators or the wrong content type', async () => {
    const unknown = await run(await mock({ kelvinReply: (r) => r.replace(/^[^|]*/, 'dance') }), ['kelvinseek']);
    expect(failedNames(unknown).filter((n) => n.startsWith('prompt "please'))).toHaveLength(1);
    const two = await run(await mock({ kelvinReply: (r) => `${r}|extra` }), ['kelvinseek']);
    expect(failedNames(two).filter((n) => n.startsWith('prompt "'))).toHaveLength(2);
    const type = await run(await mock({ kelvinContentType: 'application/json' }), ['kelvinseek']);
    expect(failedNames(type)).toHaveLength(3);
  });

  it('a wrong /check answer', async () => {
    const server = await mock({
      transformJson: (ctx, body) => {
        if (ctx.pathname.endsWith('/check') && (body as Json).status === true)
          (body as Json).newVersionAvailable = true;
        return body;
      },
    });
    const report = await run(server, ['fixtures', 'check']);
    expect(failedNames(report).filter((n) => n.startsWith('check-'))).toEqual([
      expect.stringMatching(/^check-current/),
      expect.stringMatching(/^check-noversion/),
    ]);
    expect(failed(report).filter((r) => r.suite === 'check').length).toBeGreaterThanOrEqual(3);
  });

  it('unstable pagination (duplicates across pages)', async () => {
    const server = await mock({
      transformJson: (ctx, body) => {
        if (ctx.pathname === '/api/mods' && ctx.search.includes('page=2') && isList(body)) {
          const p1 = loadFixtures().find((f) => f.name === 'mods-redmanager-p1');
          const first = (p1?.body as { data: Json[] } | undefined)?.data[0];
          if (first) body.data[0] = first;
        }
        return body;
      },
    });
    const report = await run(server, ['redmanager']);
    expect(failed(report).find((r) => r.name.startsWith('tab approved'))?.message).toMatch(/duplicate mod id/);
  });
});

describe('shadow mode', () => {
  it('is green when the target behaves like the reference', async () => {
    const reference = await mock();
    const target = await mock();
    const report = await run(target, ['shadow'], { compareWith: reference.url });
    expect(failed(report)).toEqual([]);
    expect(report.results).toHaveLength(Object.values(loadFixtures()).length - 2);
    expect(reference.requests.every((r) => r.method === 'GET')).toBe(true);
  });

  it('reports differences with the reference', async () => {
    const reference = await mock();
    const target = await mock({
      transformJson: (ctx, body) => {
        if (ctx.fixture === 'user') ((body as { data: Json }).data as Json).name = 'Renamed';
        return body;
      },
    });
    const report = await run(target, ['shadow'], { compareWith: reference.url });
    expect(failedNames(report)).toEqual([expect.stringMatching(/^user ·/)]);
  });

  it('sends only GETs of Tier 1/2 reads to production, at most 2 per second', async () => {
    const target = await mock();
    const fixtures = loadFixtures();
    let clock = 0;
    const productionCalls: Array<{ method: string; pathname: string; at: number }> = [];
    const local = new HttpClient();
    const transport = async (req: HttpRequest): Promise<HttpResponse> => {
      if (req.url.hostname === 'api.sotf-mods.com') {
        productionCalls.push({ method: req.method, pathname: req.url.pathname, at: clock });
        const route = decodeURIComponent(`${req.url.pathname}${req.url.search}`);
        const fixture = fixtures.find((f) => f.route === route);
        if (!fixture) throw new Error(`unexpected production request ${route}`);
        return {
          status: fixture.status,
          headers: { 'content-type': fixture.contentType },
          body: fixture.raw,
          url: req.url,
          method: req.method,
        };
      }
      return local.request(req.method, req.url, { headers: req.headers });
    };
    const report = await runHarness({
      baseUrl: target.url,
      compareWith: 'https://api.sotf-mods.com',
      suites: ['shadow'],
      dotnet: 'off',
      http: {
        transport,
        now: () => clock,
        sleep: async (ms) => {
          clock += ms;
        },
      },
    });
    expect(failed(report)).toEqual([]);
    expect(productionCalls).toHaveLength(fixtures.length - 2);
    expect(productionCalls.every((c) => c.method === 'GET')).toBe(true);
    expect(
      productionCalls.some((c) => /\/download\/|kelvinseek|favorite|approve|^\/api\/auth\//.test(c.pathname)),
    ).toBe(false);
    for (let i = 1; i < productionCalls.length; i++) {
      expect((productionCalls[i]?.at ?? 0) - (productionCalls[i - 1]?.at ?? 0)).toBeGreaterThanOrEqual(500);
    }
  });

  it('refuses to run download or KelvinSeek suites against production', async () => {
    const calls: string[] = [];
    const report = await runHarness({
      baseUrl: 'https://api.sotf-mods.com',
      webUrl: 'https://sotf-mods.com',
      suites: ['kelvinseek', 'downloads'],
      dotnet: 'off',
      http: {
        transport: async (req) => {
          calls.push(req.url.href);
          throw new Error('no network in this test');
        },
      },
    });
    expect(calls).toEqual([]);
    expect(report.results.map((r) => r.status)).toEqual(['skip', 'skip']);
  });
});
