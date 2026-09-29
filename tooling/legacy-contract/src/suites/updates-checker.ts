/**
 * Suite `updateschecker`: the two requests of UpdatesChecker (research/01 §1.1 C3) —
 * `GET /api/mods?limit={n}&modIds={csv}` and `GET /api/mods?&page={n}` — must be 2xx
 * (`EnsureSuccessStatusCode`) and deserialisable by the typed Newtonsoft DTO of §1.2: value
 * fields never null. Bodies are captured for the .NET checker (`dotnet.ts`).
 */
import type { LegacyModListItem } from '@sotf/contracts/legacy';
import { LegacyModListResponse } from '@sotf/contracts/legacy';
import { metaDiffs, schemaDiffs, updatesCheckerDiffs } from '../compare.ts';
import { discoverMods, type HarnessContext, jsonBody } from '../context.ts';
import { SuiteRecorder } from '../report.ts';

export async function runUpdatesCheckerSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('updateschecker');
  let known: LegacyModListItem[] = [];
  await rec.check('discover mods (type=Both, both NSFW values)', async () => {
    known = await discoverMods(ctx);
    return {
      failures: known.length === 0 ? ['no mods visible through /api/mods'] : [],
      note: `${known.length} mod(s)`,
    };
  });

  // Installed mods of a player: approved mods, plus a Library/Build when one exists (the
  // `modids-all-types` deviation makes them visible without `type`).
  const approved = known.filter((m) => m.isApproved && m.type === 'Mod').slice(0, 3);
  const otherType = known.find((m) => m.type !== 'Mod' && m.type !== null);
  const wanted = [...approved, ...(otherType ? [otherType] : [])];
  const csv = [...wanted.map((m) => m.mod_id), 'DoesNotExist123'].join(',');
  const limit = wanted.length + 1;

  await rec.check(`GET /api/mods?limit=${limit}&modIds=${csv}`, async () => {
    if (wanted.length === 0) return { failures: ['no approved mod discovered'] };
    const route = `/api/mods?limit=${limit}&modIds=${csv}`;
    const response = await ctx.client.get(ctx.api(route));
    const failures: string[] = [];
    if (response.status < 200 || response.status >= 300)
      failures.push(`status ${response.status} (EnsureSuccessStatusCode throws)`);
    ctx.captures.push({ name: 'updateschecker-modids', body: response.body });
    const body = jsonBody(response);
    const diffs = [
      ...schemaDiffs(LegacyModListResponse, body),
      ...updatesCheckerDiffs(body),
      ...metaDiffs(body, { page: 1, limit }),
    ];
    const data = (body as { data?: LegacyModListItem[] }).data ?? [];
    const returned = new Set(data.map((m) => m.mod_id));
    for (const m of data) if (!csv.split(',').includes(m.mod_id)) failures.push(`${m.mod_id} was not requested`);
    for (const m of wanted)
      if (!returned.has(m.mod_id)) failures.push(`${m.mod_id} (${m.type}) requested but not returned`);
    return { diffs, failures, deviations: otherType ? ['modids-all-types'] : [] };
  });

  let pages = 1;
  for (let page = 1; page <= Math.min(pages, ctx.options.maxPages); page++) {
    const route = `/api/mods?&page=${page}`;
    await rec.check(`GET ${route}`, async () => {
      const response = await ctx.client.get(ctx.api(route));
      const failures: string[] = [];
      if (response.status < 200 || response.status >= 300)
        failures.push(`status ${response.status} (EnsureSuccessStatusCode throws)`);
      ctx.captures.push({ name: `updateschecker-page-${page}`, body: response.body });
      const body = jsonBody(response);
      if (page === 1) pages = (body as { meta?: { pages?: number } }).meta?.pages ?? 1;
      return {
        failures,
        diffs: [
          ...schemaDiffs(LegacyModListResponse, body),
          ...updatesCheckerDiffs(body),
          ...metaDiffs(body, { page, limit: 10 }),
        ],
      };
    });
  }
  return rec;
}
