/**
 * Suite `downloads` (research/01 §6, §7.2; PLAN §4.6): `GET|HEAD /mods/:u/:s/download/:v` and
 * its two `/api` aliases answer **302** (never 301, never 200 with an error) to the storage URL
 * of the key encoded segment by segment; keys with a space, an apostrophe, a `+` and parentheses
 * survive; `/mods/undefined/<slug>/download/undefined` resolves; unknown mods/versions are 404;
 * HEAD, `Range: bytes=100-` and declared bots do not count, a plain GET without User-Agent does.
 * Never run against production.
 */
import type { LegacyModDetail, LegacyModListItem } from '@sotf/contracts/legacy';
import { discoverMods, getDetail, type HarnessContext } from '../context.ts';
import {
  encodeStorageKey,
  KEY_CHARACTER_CLASSES,
  type KeyCharacterClass,
  keyClasses,
  keyFromDownloadUrl,
  webDownloadPath,
} from '../downloads.ts';
import type { HttpResponse } from '../http.ts';
import { SuiteRecorder } from '../report.ts';
import { downloadedFileFailures } from './redmanager.ts';

interface Case {
  mod: LegacyModListItem;
  version: LegacyModDetail['versions'][number];
  key: string;
}

const BOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

function redirectFailures(response: HttpResponse, key: string): string[] {
  const failures: string[] = [];
  if (response.status !== 302) failures.push(`status ${response.status}, expected 302`);
  const location = response.headers.location;
  if (!location) return [...failures, 'no Location header'];
  const path = location.split('?')[0] ?? '';
  const encoded = encodeStorageKey(key);
  if (!path.endsWith(`/${encoded}`))
    failures.push(`Location ${location} does not end with the segment-encoded key /${encoded}`);
  if (!/no-store/.test(response.headers['cache-control'] ?? ''))
    failures.push(`Cache-Control ${response.headers['cache-control'] ?? 'missing'} (expected no-store)`);
  if (!/noindex/.test(response.headers['x-robots-tag'] ?? ''))
    failures.push(`X-Robots-Tag ${response.headers['x-robots-tag'] ?? 'missing'} (expected noindex)`);
  return failures;
}

function countOf(detail: LegacyModDetail | null, versionId: number): number | null {
  return detail?.versions.find((v) => v.id === versionId)?._count.downloads ?? null;
}

export async function runDownloadsSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('downloads');
  if (
    ctx.isProduction(ctx.web('/mods/x/y/download/1.0.0')) ||
    ctx.isProduction(ctx.api('/api/mods/x/download/1.0.0'))
  ) {
    rec.skip('downloads', 'download routes are never requested in production');
    return rec;
  }

  const cases = new Map<KeyCharacterClass | 'plain', Case>();
  await rec.check('discover download keys (space, apostrophe, plus, parentheses, plain)', async () => {
    const mods = await discoverMods(ctx);
    // Keys are `<timestamp>_<slug>_<version>.<ext>`: slugs with special characters first, then
    // the rest by id descending (deterministic).
    const special = /['()+ ]/;
    const byIdDesc = [...mods].sort((a, b) => b.id - a.id);
    const ordered = [...byIdDesc.filter((m) => special.test(m.slug)), ...byIdDesc.filter((m) => !special.test(m.slug))];
    let scanned = 0;
    for (const mod of ordered) {
      if (scanned >= ctx.options.downloadScan) break;
      if (cases.size === Object.keys(KEY_CHARACTER_CLASSES).length + 1) break;
      scanned++;
      const { data } = await getDetail(ctx, mod.mod_id);
      for (const version of data?.versions ?? []) {
        const key = keyFromDownloadUrl(version.downloadUrl);
        if (!key) continue;
        const classes = keyClasses(key);
        for (const c of classes) if (!cases.has(c)) cases.set(c, { mod, version, key });
        if (classes.length === 0 && version.isLatest && !cases.has('plain')) cases.set('plain', { mod, version, key });
      }
    }
    const missing = [...Object.keys(KEY_CHARACTER_CLASSES), 'plain'].filter((c) => !cases.has(c as KeyCharacterClass));
    return { note: `${scanned} detail(s) scanned${missing.length > 0 ? `; no key with: ${missing.join(', ')}` : ''}` };
  });

  for (const cls of [...Object.keys(KEY_CHARACTER_CLASSES), 'plain'] as Array<KeyCharacterClass | 'plain'>) {
    const c = cases.get(cls);
    if (!c) {
      rec.skip(
        `key with ${cls}`,
        `no version with such a key in the first ${ctx.options.downloadScan} details of the target`,
      );
      continue;
    }
    const route = webDownloadPath(c.mod.user.slug, c.mod.slug, c.version.version);
    await rec.check(`key with ${cls}: GET ${route} → 302 ${encodeStorageKey(c.key)}`, async () => {
      const response = await ctx.client.get(ctx.web(route));
      const failures = redirectFailures(response, c.key);
      if (ctx.options.followDownloads && response.headers.location) {
        const file = await ctx.client.get(new URL(response.headers.location, ctx.web(route)));
        if (file.status !== 200) failures.push(`storage answered ${file.status} for ${response.headers.location}`);
        else failures.push(...downloadedFileFailures(file.body, c.version.extension, file.headers['content-length']));
      }
      return { failures };
    });
  }

  const first = cases.get('plain') ?? [...cases.values()][0];
  if (!first) {
    rec.skip('aliases, resolver, 404 and counting', 'no downloadable version found on the target');
    return rec;
  }
  const latest = (await getDetail(ctx, first.mod.mod_id)).data?.versions.find((v) => v.isLatest);
  const latestKey = latest ? keyFromDownloadUrl(latest.downloadUrl) : null;

  const aliasRoutes = [
    `/api/mods/${encodeURIComponent(first.mod.mod_id)}/download/${encodeURIComponent(first.version.version)}`,
    `/api/mods/slug/${first.mod.user.slug}/${first.mod.slug}/download/${first.version.version}`,
  ];
  for (const route of aliasRoutes) {
    await rec.check(`alias GET ${route} → 302`, async () => ({
      failures: redirectFailures(await ctx.client.get(ctx.api(route)), first.key),
    }));
  }
  await rec.check('alias ignores ?ip=&agent= (legacy query)', async () => {
    const route = `${aliasRoutes[0]}?ip=1.2.3.4&agent=RedManager`;
    return { failures: redirectFailures(await ctx.client.get(ctx.api(route)), first.key) };
  });

  if (latestKey) {
    for (const route of [
      webDownloadPath('undefined', first.mod.slug, 'undefined'),
      webDownloadPath('someone-else', first.mod.slug, 'latest'),
    ]) {
      await rec.check(`resolver GET ${route} → 302 latest`, async () => ({
        failures: redirectFailures(await ctx.client.get(ctx.web(route)), latestKey),
      }));
    }
  }

  for (const route of [
    webDownloadPath(first.mod.user.slug, 'does-not-exist-sotfv2-contract', '1.0.0'),
    webDownloadPath(first.mod.user.slug, first.mod.slug, '0.0.0-does-not-exist'),
  ]) {
    await rec.check(`GET ${route} → 404 (never 200 with an error body)`, async () => {
      const response = await ctx.client.get(ctx.web(route));
      return { failures: response.status === 404 ? [] : [`status ${response.status}`] };
    });
  }

  await rec.check('HEAD → 302 without body', async () => {
    const response = await ctx.client.request(
      'HEAD',
      ctx.web(webDownloadPath(first.mod.user.slug, first.mod.slug, first.version.version)),
    );
    const failures = redirectFailures(response, first.key);
    if (response.body.length > 0) failures.push('HEAD answered with a body');
    return { failures };
  });

  if (!ctx.options.checkCounting) {
    rec.skip('counting', 'disabled with --no-counting');
    return rec;
  }
  await rec.check(
    'counting: HEAD, Range bytes=100- and bots do not count; a GET without User-Agent counts once',
    async () => {
      const route = ctx.web(webDownloadPath(first.mod.user.slug, first.mod.slug, first.version.version));
      const before = countOf((await getDetail(ctx, first.mod.mod_id, true)).data, first.version.id);
      if (before === null) return { failures: [`version ${first.version.id} not in the detail`] };
      await ctx.client.request('HEAD', route);
      await ctx.client.get(route, { headers: { range: 'bytes=100-' } });
      await ctx.client.get(route, { userAgent: BOT_UA });
      await ctx.client.get(route);
      const deadline = Date.now() + ctx.options.countTimeoutMs;
      let now = before;
      while (Date.now() < deadline) {
        now = countOf((await getDetail(ctx, first.mod.mod_id, true)).data, first.version.id) ?? now;
        if (now > before) break;
        await ctx.sleep(ctx.options.countPollMs);
      }
      if (now === before)
        return {
          failures: [`count stayed at ${before} after a counted GET (waited ${ctx.options.countTimeoutMs} ms)`],
        };
      // Let late (asynchronous) increments land before the final read.
      await ctx.sleep(ctx.options.countPollMs * 2);
      const after = countOf((await getDetail(ctx, first.mod.mod_id, true)).data, first.version.id) ?? now;
      return {
        failures:
          after === before + 1
            ? []
            : [`count went ${before} → ${after}; expected exactly +1 (HEAD/Range/bot must not count)`],
      };
    },
  );
  return rec;
}
