// Read-only, throttled, caching proxy between a LOCAL web build and the production public API.
//
//   node tooling/route-audit/api-proxy.mjs [port=47398] [upstream=https://api.sotf-mods.com]
//   INTERNAL_API_URL=http://127.0.0.1:47398 node apps/web/dist/server/entry.mjs
//
// Why: the public API rate limits anonymous reads to 300 req/min per IP and one page render makes
// several calls, so sweeping thousands of pages would trip 429s. The proxy only forwards GET and
// HEAD (everything else answers 403), spaces upstream calls (<= 3/s), retries 429 with the
// `Retry-After` hint and caches answers for 10 minutes (shared calls such as categories are free).
import http from 'node:http';

const PORT = Number(process.argv[2] ?? 47398);
const UPSTREAM = (process.argv[3] ?? 'https://api.sotf-mods.com').replace(/\/+$/, '');
const MIN_GAP_MS = 340;
const TTL_MS = 10 * 60_000;
const cache = new Map();
let chain = Promise.resolve();
let last = 0;
let upstreamCalls = 0;
let retries = 0;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function schedule(task) {
  const run = chain.then(async () => {
    const wait = last + MIN_GAP_MS - Date.now();
    if (wait > 0) await sleep(wait);
    last = Date.now();
    return task();
  });
  chain = run.catch(() => undefined);
  return run;
}

async function fetchUpstream(url, headers) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    upstreamCalls += 1;
    const res = await fetch(UPSTREAM + url, { headers, signal: AbortSignal.timeout(30_000) });
    const body = Buffer.from(await res.arrayBuffer());
    if (res.status === 429 || res.status === 503) {
      retries += 1;
      const hint = Number(res.headers.get('retry-after') ?? '10');
      await sleep(Math.min(60, Math.max(2, hint)) * 1000 + 500);
      continue;
    }
    const out = {};
    for (const [k, v] of res.headers) {
      if (!['content-encoding', 'content-length', 'transfer-encoding', 'connection'].includes(k)) out[k] = v;
    }
    return { status: res.status, headers: out, body };
  }
  return {
    status: 503,
    headers: { 'content-type': 'text/plain' },
    body: Buffer.from('proxy: upstream kept rate limiting'),
  };
}

http
  .createServer(async (req, res) => {
    if (req.url === '/__stats') {
      res.end(JSON.stringify({ upstreamCalls, retries, cached: cache.size }));
      return;
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(403, { 'content-type': 'text/plain' });
      res.end('read-only proxy');
      return;
    }
    const headers = {
      accept: req.headers.accept ?? 'application/json',
      'accept-language': req.headers['accept-language'] ?? 'en',
      'accept-encoding': 'identity',
      'user-agent': 'sotf-route-audit/1 (read-only)',
    };
    const key = `${req.url}|${headers.accept}|${headers['accept-language']}`;
    let hit = cache.get(key);
    if (!hit || hit.at + TTL_MS < Date.now()) {
      const promise = schedule(() => fetchUpstream(req.url, headers));
      hit = { at: Date.now(), promise };
      cache.set(key, hit);
    }
    try {
      const out = await hit.promise;
      if (out.status >= 500) cache.delete(key);
      res.writeHead(out.status, out.headers);
      res.end(req.method === 'HEAD' ? undefined : out.body);
    } catch (error) {
      cache.delete(key);
      res.writeHead(502, { 'content-type': 'text/plain' });
      res.end(`proxy error: ${error}`);
    }
  })
  .listen(PORT, '127.0.0.1', () => process.stdout.write(`api-proxy ${PORT} -> ${UPSTREAM}\n`));
