/**
 * Suite `redmanager`: the flow of RedManager 1.1.10 (research/01 §1.3, §7.2) with the types of
 * `mods.ts`:
 *
 * 1. the three tabs (approved, unapproved, NSFW) walk every page with
 *    `?&approved=…&orderby=newest&page=N&nsfw=…`, plus a search;
 * 2. installed mods are refreshed with `GET /api/mods/:id` (the detail keeps `dependencies` as a
 *    string, so RedManager also requests one-character ids: those must answer JSON);
 * 3. installs download `https://<web>/mods/{user.slug}/{slug}/download/{latestVersion}` with a
 *    reqwest-like client: no User-Agent, status never checked, redirects followed (≤ 10), the
 *    body written as is — so the first hop must be a 302 and the final body must be the file;
 * 4. CORS for the WebView origins (`https://tauri.localhost`, `tauri://localhost`).
 */
import type { LegacyModListItem } from '@sotf/contracts/legacy';
import { type HarnessContext, jsonBody } from '../context.ts';
import { webDownloadPath } from '../downloads.ts';
import { parseJson } from '../http.ts';
import { isPlainObject } from '../normalize.ts';
import { fetchModRoute, fetchModsRoute, RedManagerDetailResponse, RedManagerEndpointResponse } from '../redmanager.ts';
import { SuiteRecorder } from '../report.ts';

const TAURI_ORIGINS = ['https://tauri.localhost', 'tauri://localhost'] as const;

interface Tab {
  name: string;
  approved: boolean;
  nsfw: boolean;
}

const TABS: Tab[] = [
  { name: 'approved', approved: true, nsfw: false },
  { name: 'unapproved', approved: false, nsfw: false },
  { name: 'nsfw', approved: true, nsfw: true },
];

function zodFailures(label: string, error: { issues: Array<{ path: PropertyKey[]; message: string }> }): string[] {
  return error.issues.slice(0, 5).map((i) => `${label}: ${i.path.map(String).join('.') || '$'} ${i.message}`);
}

/** Checks one downloaded body the way an installer would see it. */
export function downloadedFileFailures(
  body: Buffer,
  extension: string | null,
  contentLength: string | undefined,
): string[] {
  const failures: string[] = [];
  if (body.length === 0) failures.push('empty body');
  if (contentLength !== undefined && Number(contentLength) !== body.length) {
    failures.push(`Content-Length ${contentLength} != body ${body.length} bytes (progress bar)`);
  }
  if (extension === 'json') {
    const parsed = parseJson(body);
    if (!parsed.ok) failures.push('build file is not JSON');
    else if (isPlainObject(parsed.value) && parsed.value.status === false)
      failures.push('the body is a legacy error, not the file');
  } else if (!(body[0] === 0x50 && body[1] === 0x4b)) {
    failures.push(
      `not a zip (starts with ${JSON.stringify(body.subarray(0, 16).toString('utf8'))}): an installer would write a corrupt file`,
    );
  }
  return failures;
}

export async function runRedManagerSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('redmanager');
  const approvedMods: LegacyModListItem[] = [];

  for (const tab of TABS) {
    await rec.check(
      `tab ${tab.name}: every page of ?&approved=${tab.approved}&orderby=newest&page=N&nsfw=${tab.nsfw}`,
      async () => {
        const failures: string[] = [];
        const ids = new Set<number>();
        let total = -1;
        let pages = 1;
        let walked = 0;
        for (let page = 1; page <= pages && page <= ctx.options.maxPages; page++) {
          const response = await ctx.client.get(ctx.api(fetchModsRoute(page, tab.approved, tab.nsfw)));
          walked = page;
          if (response.status !== 200) failures.push(`page ${page}: status ${response.status}`);
          const body = jsonBody(response);
          const parsed = RedManagerEndpointResponse.safeParse(body);
          if (!parsed.success) {
            failures.push(...zodFailures(`page ${page}`, parsed.error));
            break;
          }
          const { meta, data } = parsed.data;
          if (page === 1) {
            total = meta.total;
            pages = meta.pages;
          } else if (meta.total !== total || meta.pages !== pages) {
            failures.push(
              `page ${page}: meta changed while paging (total ${total}→${meta.total}, pages ${pages}→${meta.pages})`,
            );
          }
          if (meta.page !== page) failures.push(`page ${page}: meta.page = ${meta.page}`);
          for (const [i, mod] of data.entries()) {
            const raw = (body as { data: LegacyModListItem[] }).data[i];
            if (!raw) continue;
            if (ids.has(raw.id)) failures.push(`page ${page}: duplicate mod id ${raw.id} (unstable pagination)`);
            ids.add(raw.id);
            if (mod.isApproved !== tab.approved)
              failures.push(`page ${page}: ${mod.mod_id} isApproved=${mod.isApproved}`);
            if (raw.isNSFW !== tab.nsfw) failures.push(`page ${page}: ${mod.mod_id} isNSFW=${raw.isNSFW}`);
            if (tab.name === 'approved') approvedMods.push(raw);
          }
        }
        const complete = walked >= pages;
        if (complete && ids.size !== total)
          failures.push(`walked ${walked} page(s): ${ids.size} distinct mods, meta.total ${total}`);
        return {
          failures,
          note: complete
            ? `${ids.size} mods in ${pages} page(s)`
            : `stopped at --max-pages ${ctx.options.maxPages} of ${pages}`,
        };
      },
    );
  }

  await rec.check('search: ?&approved=true&orderby=newest&page=1&nsfw=false&search=kelvin', async () => {
    const response = await ctx.client.get(ctx.api(fetchModsRoute(1, true, false, 'kelvin')));
    const body = jsonBody(response);
    const parsed = RedManagerEndpointResponse.safeParse(body);
    if (!parsed.success) return { failures: zodFailures('search', parsed.error) };
    const raw = (body as { data: LegacyModListItem[] }).data;
    const failures = raw
      .filter((m) => !`${m.name}\n${m.description}\n${m.user.name}`.toLowerCase().includes('kelvin'))
      .map((m) => `${m.mod_id} does not match "kelvin" in name, description or user name`);
    return { failures, note: `${raw.length} result(s)` };
  });

  const sample = approvedMods.filter((m) => m.latestVersion).slice(0, 25);
  const withDeps = sample.find((m) => m.dependencies.length > 0);
  const installs = [...new Set([...(withDeps ? [withDeps] : []), ...sample])].slice(
    0,
    Math.max(1, ctx.options.installs),
  );

  await rec.check('installed mods: GET /api/mods/:id keeps the detail shape (dependencies as a string)', async () => {
    const failures: string[] = [];
    if (installs.length === 0) return { failures: ['no approved mod to refresh (empty approved tab)'] };
    const chars = new Set<string>();
    for (const mod of installs) {
      const response = await ctx.client.get(ctx.api(fetchModRoute(mod.mod_id)));
      const parsed = RedManagerDetailResponse.safeParse(jsonBody(response));
      if (!parsed.success) {
        failures.push(...zodFailures(mod.mod_id, parsed.error));
        continue;
      }
      if (parsed.data.status !== true) {
        failures.push(`${mod.mod_id}: listed but the detail answers status=false (${response.status})`);
        continue;
      }
      for (const c of (parsed.data.data as { dependencies: string }).dependencies) chars.add(c);
    }
    // `for (const dependency of mod.dependencies)` on the detail string requests each character.
    for (const c of [...chars].filter((c) => /[A-Za-z0-9]/.test(c)).slice(0, 3)) {
      const response = await ctx.client.get(ctx.api(fetchModRoute(c)));
      const parsed = RedManagerDetailResponse.safeParse(jsonBody(response));
      if (!parsed.success) failures.push(...zodFailures(`/api/mods/${c}`, parsed.error));
    }
    return { failures };
  });

  const production = ctx.isProduction(ctx.web('/'));
  for (const mod of installs) {
    const route = webDownloadPath(mod.user.slug, mod.slug, mod.latestVersion ?? '');
    if (production) {
      rec.skip(`install ${mod.mod_id}: GET ${route}`, 'download routes are never requested in production');
      continue;
    }
    await rec.check(`install ${mod.mod_id}: GET ${route} (no User-Agent, follows redirects)`, async () => {
      const failures: string[] = [];
      const detail = await ctx.client.get(ctx.api(fetchModRoute(mod.mod_id)));
      const detailBody = jsonBody(detail) as {
        data?: { versions?: Array<{ version: string; extension: string | null }> };
      };
      const extension = detailBody.data?.versions?.find((v) => v.version === mod.latestVersion)?.extension ?? 'zip';
      const hops = ctx.options.followDownloads
        ? await ctx.client.followRedirects('GET', ctx.web(route))
        : [await ctx.client.get(ctx.web(route))];
      const first = hops[0];
      if (!first) return { failures: ['no response'] };
      if (first.status !== 302)
        failures.push(`first hop answered ${first.status}, expected 302 (a 301 would be cached and skip the counter)`);
      if (!first.headers.location) failures.push('302 without Location');
      if (!/no-store/.test(first.headers['cache-control'] ?? ''))
        failures.push(
          `download redirect must be Cache-Control: no-store (got ${first.headers['cache-control'] ?? 'none'})`,
        );
      if (ctx.options.followDownloads) {
        const last = hops[hops.length - 1];
        if (last && last.status !== 200)
          failures.push(
            `final hop ${last.url.href} answered ${last.status}; RedManager would write that body as the file`,
          );
        if (last) failures.push(...downloadedFileFailures(last.body, extension, last.headers['content-length']));
      }
      for (const dep of mod.dependencies) {
        const response = await ctx.client.get(ctx.api(fetchModRoute(dep)));
        const parsed = RedManagerDetailResponse.safeParse(jsonBody(response));
        if (!parsed.success) failures.push(...zodFailures(`dependency ${dep}`, parsed.error));
      }
      return { failures, note: `${hops.length} hop(s)` };
    });
  }

  for (const origin of TAURI_ORIGINS) {
    await rec.check(`CORS for ${origin}`, async () => {
      const failures: string[] = [];
      const url = ctx.api(fetchModsRoute(1));
      const response = await ctx.client.get(url, { headers: { origin } });
      const allow = response.headers['access-control-allow-origin'];
      if (allow !== '*' && allow !== origin) failures.push(`GET: Access-Control-Allow-Origin = ${allow ?? 'missing'}`);
      if (!ctx.isProduction(url)) {
        const preflight = await ctx.client.request('OPTIONS', url, {
          headers: { origin, 'access-control-request-method': 'GET' },
        });
        if (preflight.status < 200 || preflight.status >= 300) failures.push(`preflight answered ${preflight.status}`);
        const pAllow = preflight.headers['access-control-allow-origin'];
        if (pAllow !== '*' && pAllow !== origin)
          failures.push(`preflight: Access-Control-Allow-Origin = ${pAllow ?? 'missing'}`);
        const methods = preflight.headers['access-control-allow-methods'] ?? '';
        if (!/\bGET\b/.test(methods))
          failures.push(`preflight: Access-Control-Allow-Methods = ${methods || 'missing'}`);
      }
      return { failures };
    });
  }
  return rec;
}
