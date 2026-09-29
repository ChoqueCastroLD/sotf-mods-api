import { describe, expect, it } from 'vitest';
import { assertProductionSafe, ProductionGuardError, productionViolation } from '../src/guard.ts';
import { HttpClient, type HttpRequest, type HttpResponse, joinUrl, normaliseContentType } from '../src/http.ts';

function stubTransport(answer: (req: HttpRequest) => Partial<HttpResponse> = () => ({})) {
  const seen: HttpRequest[] = [];
  const transport = async (req: HttpRequest): Promise<HttpResponse> => {
    seen.push(req);
    return { status: 200, headers: {}, body: Buffer.alloc(0), url: req.url, method: req.method, ...answer(req) };
  };
  return { seen, transport };
}

describe('production guard', () => {
  const prod = (path: string) => new URL(`https://api.sotf-mods.com${path}`);

  it('allows GET/HEAD reads', () => {
    expect(productionViolation('GET', prod('/api/mods?&approved=true'))).toBeNull();
    expect(productionViolation('HEAD', prod('/api/mods/AxelModMenu'))).toBeNull();
    expect(productionViolation('GET', prod('/api/mods/AxelModMenu/download-stats?period=week'))).toBeNull();
  });

  it.each([
    ['POST', '/api/mods'],
    ['OPTIONS', '/api/mods'],
    ['GET', '/api/mods/AxelModMenu/download/1.3.8'],
    ['HEAD', '/mods/imaxel/axel%27s-mod-menu/download/1.3.8'],
    ['GET', '/api/mods/slug/imaxel/x/download/latest'],
    ['GET', '/api/mods/AxelModMenu/favorite'],
    ['GET', '/api/favorites'],
    ['GET', '/api/mods/AxelModMenu/approve'],
    ['GET', '/api/mods/AxelModMenu/unapprove'],
    ['GET', '/api/kelvinseek/prompt?chat_id=a&text=b&context=c'],
    ['GET', '/api/kelvinseek/clear?chat_id=a'],
    ['GET', '/api/%6Belvinseek/clear'],
    ['GET', '/api/kelvin-gpt/prompt'],
  ])('refuses %s %s', (method, path) => {
    expect(() => assertProductionSafe(method, prod(path))).toThrow(ProductionGuardError);
  });

  it('covers every production host and nothing else', () => {
    for (const host of [
      'sotf-mods.com',
      'www.sotf-mods.com',
      'api.sotf-mods.com',
      'r2.sotf-mods.com',
      'API.SOTF-MODS.COM',
    ]) {
      expect(() => assertProductionSafe('POST', new URL(`https://${host}/x`))).toThrow(ProductionGuardError);
    }
    expect(() =>
      assertProductionSafe('POST', new URL('https://beta.sotf-mods.com/api/kelvinseek/prompt')),
    ).not.toThrow();
    expect(() => assertProductionSafe('GET', new URL('http://127.0.0.1:3001/api/mods/x/download/1'))).not.toThrow();
  });

  it('refuses before any request is sent', async () => {
    const { seen, transport } = stubTransport();
    const client = new HttpClient({ transport });
    await expect(client.get(new URL('https://sotf-mods.com/mods/a/b/download/1.0.0'))).rejects.toThrow(
      ProductionGuardError,
    );
    await expect(client.followRedirects('GET', new URL('https://beta.sotf-mods.com/x'))).resolves.toHaveLength(1);
    expect(seen.map((r) => r.url.host)).toEqual(['beta.sotf-mods.com']);
  });

  it('checks every redirect hop', async () => {
    const { seen, transport } = stubTransport((req) =>
      req.url.host === 'staging.example'
        ? { status: 302, headers: { location: 'https://r2.sotf-mods.com/mods/a/download/x.zip' } }
        : {},
    );
    const client = new HttpClient({ transport });
    await expect(client.followRedirects('GET', new URL('https://staging.example/mods/a/b/download/1'))).rejects.toThrow(
      ProductionGuardError,
    );
    expect(seen).toHaveLength(1);
  });
});

describe('HttpClient', () => {
  it('sends no User-Agent unless asked', async () => {
    const { seen, transport } = stubTransport();
    const client = new HttpClient({ transport });
    await client.get(new URL('http://127.0.0.1/a'));
    await client.get(new URL('http://127.0.0.1/b'), { userAgent: 'Googlebot' });
    expect(seen[0]?.headers['user-agent']).toBeUndefined();
    expect(seen[1]?.headers['user-agent']).toBe('Googlebot');
  });

  it('spaces production requests ≥ 500 ms apart (≤ 2 rps) and leaves other hosts alone', async () => {
    let clock = 1_000;
    const starts: Array<[string, number]> = [];
    const { transport } = stubTransport((req) => {
      starts.push([req.url.host, clock]);
      return {};
    });
    const client = new HttpClient({
      transport,
      now: () => clock,
      sleep: async (ms) => {
        clock += ms;
      },
    });
    for (let i = 0; i < 5; i++) await client.get(new URL(`https://api.sotf-mods.com/api/mods?page=${i}`));
    for (let i = 0; i < 3; i++) await client.get(new URL(`http://127.0.0.1:3000/api/mods?page=${i}`));
    const prod = starts.filter(([h]) => h === 'api.sotf-mods.com').map(([, t]) => t);
    for (let i = 1; i < prod.length; i++) expect((prod[i] ?? 0) - (prod[i - 1] ?? 0)).toBeGreaterThanOrEqual(500);
    const local = starts.filter(([h]) => h !== 'api.sotf-mods.com').map(([, t]) => t);
    expect(new Set(local).size).toBe(1);
  });

  it('follows redirects like reqwest (≤ 10, 302 → GET)', async () => {
    const { seen, transport } = stubTransport((req) => {
      const n = Number(req.url.pathname.slice(1));
      return n < 3 ? { status: 302, headers: { location: `/${n + 1}` } } : { status: 200, body: Buffer.from('PK') };
    });
    const hops = await new HttpClient({ transport }).followRedirects('GET', new URL('http://h/0'));
    expect(hops.map((h) => h.status)).toEqual([302, 302, 302, 200]);
    expect(seen.map((r) => r.url.pathname)).toEqual(['/0', '/1', '/2', '/3']);
    const loop = stubTransport(() => ({ status: 302, headers: { location: '/again' } }));
    await expect(
      new HttpClient({ transport: loop.transport }).followRedirects('GET', new URL('http://h/x')),
    ).rejects.toThrow(/too many redirects/);
    expect(loop.seen).toHaveLength(11);
  });

  it('joins bases with a path prefix and normalises content types', () => {
    expect(joinUrl('https://beta.example/proxy/', '/api/mods?&page=1').href).toBe(
      'https://beta.example/proxy/api/mods?&page=1',
    );
    expect(joinUrl('http://127.0.0.1:3001', "/api/mods/find?userSlug=imaxel&mod_slug=axel's-mod-menu").search).toBe(
      '?userSlug=imaxel&mod_slug=axel%27s-mod-menu',
    );
    expect(normaliseContentType('text/plain; charset=UTF-8')).toBe('text/plain;charset=utf-8');
    expect(normaliseContentType('application/json')).toBe('application/json');
  });
});
