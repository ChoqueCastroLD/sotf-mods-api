/**
 * Suite `check`: semantics of `GET /api/mods/:mod_id/check` (Tier 1, research/01 §2.5) on live
 * data: the three exact answers (node-semver `gt`, `v` prefix accepted), 404 for an unknown mod
 * and a non-2xx legacy envelope for a non-semver version or a build (UUIDv7 versions).
 */
import {
  LEGACY_CHECK_MESSAGES,
  LEGACY_NOT_FOUND_MESSAGE,
  LegacyCheckResponse,
  LegacyErrorResponse,
  type LegacyModListItem,
} from '@sotf/contracts/legacy';
import { schemaDiffs } from '../compare.ts';
import { discoverMods, getDetail, type HarnessContext, jsonBody } from '../context.ts';
import { normaliseContentType } from '../http.ts';
import { SuiteRecorder } from '../report.ts';

const SEMVER = /^v?(\d+)\.(\d+)\.(\d+)$/;

export async function runCheckSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('check');
  let mods: LegacyModListItem[] = [];
  await rec.check('discover mods', async () => {
    mods = await discoverMods(ctx);
    return { failures: mods.length === 0 ? ['no mods visible through /api/mods'] : [] };
  });
  const mod = mods.find(
    (m) => m.type !== 'Build' && m.latestVersion && SEMVER.test(m.latestVersion) && m.latestVersion !== '0.0.0',
  );
  const build = mods.find((m) => m.type === 'Build' && m.latestVersion && !SEMVER.test(m.latestVersion));

  const ask = async (modId: string, version: string | null) => {
    const route = `/api/mods/${encodeURIComponent(modId)}/check${version === null ? '' : `?version=${encodeURIComponent(version)}`}`;
    const response = await ctx.client.get(ctx.api(route));
    return { route, response, body: jsonBody(response) };
  };

  if (!mod) {
    rec.skip('answers of a semver mod', 'no mod with a semver latestVersion was found');
  } else {
    const latest = mod.latestVersion ?? '';
    const detail = await getDetail(ctx, mod.mod_id);
    const changelog = detail.data?.versions.find((v) => v.isLatest)?.changelog;
    const cases: Array<{ version: string | null; newer: boolean; message: string }> = [
      { version: '0.0.0', newer: true, message: LEGACY_CHECK_MESSAGES.newVersion },
      { version: latest, newer: false, message: LEGACY_CHECK_MESSAGES.noNewVersion },
      { version: `v${latest}`, newer: false, message: LEGACY_CHECK_MESSAGES.noNewVersion },
      { version: '999.0.0', newer: false, message: LEGACY_CHECK_MESSAGES.noNewVersion },
      { version: null, newer: false, message: LEGACY_CHECK_MESSAGES.latest },
    ];
    for (const c of cases) {
      await rec.check(`${mod.mod_id} ?version=${c.version ?? '(none)'} → "${c.message}"`, async () => {
        const { response, body } = await ask(mod.mod_id, c.version);
        const failures: string[] = [];
        if (response.status !== 200) failures.push(`status ${response.status}`);
        if (normaliseContentType(response.headers['content-type']) !== 'application/json')
          failures.push(`content-type ${response.headers['content-type']}`);
        const expected = { status: true, newVersionAvailable: c.newer, message: c.message, version: latest, changelog };
        const b = body as Record<string, unknown>;
        for (const [k, v] of Object.entries(expected)) {
          if (v !== undefined && b[k] !== v)
            failures.push(`${k}: expected ${JSON.stringify(v)}, got ${JSON.stringify(b[k])}`);
        }
        return { failures, diffs: schemaDiffs(LegacyCheckResponse, body) };
      });
    }
    await rec.check(`${mod.mod_id} ?version=notsemver → non-2xx legacy envelope`, async () => {
      const { response, body } = await ask(mod.mod_id, 'notsemver');
      const failures: string[] = [];
      if (response.status < 400) failures.push(`status ${response.status}`);
      const dev = response.status === 422 ? ['validation-422'] : [];
      return { failures, diffs: schemaDiffs(LegacyErrorResponse, body), deviations: dev };
    });
  }

  if (!build) rec.skip('build with ?version', 'no build with a non-semver version was found');
  else {
    await rec.check(`${build.mod_id} (build) ?version=1.0.0 → non-2xx legacy envelope`, async () => {
      const { response, body } = await ask(build.mod_id, '1.0.0');
      return {
        failures: response.status < 400 ? [`status ${response.status}`] : [],
        diffs: schemaDiffs(LegacyErrorResponse, body),
        deviations: response.status === 422 ? ['validation-422'] : [],
      };
    });
  }

  await rec.check('unknown mod → 404 NOT_FOUND', async () => {
    const { response, body } = await ask('DoesNotExist123', '1.0.0');
    const b = body as Record<string, unknown>;
    const failures: string[] = [];
    if (response.status !== 404) failures.push(`status ${response.status}`);
    if (b.error !== 'NOT_FOUND' || b.message !== LEGACY_NOT_FOUND_MESSAGE)
      failures.push(`body ${JSON.stringify(body)}`);
    return { failures, diffs: schemaDiffs(LegacyErrorResponse, body) };
  });
  return rec;
}
