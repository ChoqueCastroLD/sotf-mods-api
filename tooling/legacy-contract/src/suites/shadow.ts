/**
 * Suite `shadow` (`--compare-with https://api.sotf-mods.com`): the fixture routes that are GET
 * reads of Tier 1 and Tier 2 are requested from the reference and from the target at the same
 * time and compared with the same normaliser and deviations. Requests to production go through
 * the guard (GET/HEAD only, no download/favorite/approve/KelvinSeek) and the ≤ 2 rps limiter.
 */
import { compareResponse } from '../compare.ts';
import type { HarnessContext } from '../context.ts';
import { policyOf } from '../expectations.ts';
import { loadFixtures } from '../fixtures.ts';
import { joinUrl, parseJson } from '../http.ts';
import { SuiteRecorder } from '../report.ts';
import { effectivePolicy } from './fixtures.ts';

export async function runShadowSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('shadow');
  const reference = ctx.options.compareWith;
  if (!reference) {
    rec.skip('shadow', 'no --compare-with reference');
    return rec;
  }
  for (const fixture of loadFixtures()) {
    const base = policyOf(fixture.name);
    if (!base.shadow) continue;
    const policy = effectivePolicy(base, ctx.options.mode);
    await rec.check(`${fixture.name} · GET ${fixture.route}`, async () => {
      const refResponse = await ctx.client.get(joinUrl(reference, fixture.route));
      const refBody = parseJson(refResponse.body);
      if (!refBody.ok) return { failures: [`reference answered ${refResponse.status} with a non-JSON body`] };
      const response = await ctx.client.get(ctx.api(fixture.route));
      const result = compareResponse(
        fixture.route,
        fixture.schema,
        policy,
        { status: refResponse.status, body: refBody.value },
        {
          status: response.status,
          contentType: response.headers['content-type'],
          body: response.body,
        },
      );
      return { diffs: result.diffs, deviations: result.deviations };
    });
  }
  return rec;
}
