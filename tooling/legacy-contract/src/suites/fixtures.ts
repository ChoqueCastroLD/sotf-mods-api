/**
 * Suite `fixtures`: every golden fixture route is requested from the target and compared with
 * the fixture (status, `Content-Type`, strict schema + key order, values after normalisation,
 * `meta` arithmetic, UpdatesChecker value fields), accepting only the deviations of PLAN §5.5.
 */
import { compareResponse, type Diff } from '../compare.ts';
import type { HarnessContext } from '../context.ts';
import { type FixturePolicy, policyOf } from '../expectations.ts';
import { type Fixture, loadFixtures } from '../fixtures.ts';
import type { HttpResponse } from '../http.ts';
import { SuiteRecorder } from '../report.ts';

/** In `shape` mode values are not compared (only schema, order, statuses and invariants). */
export function effectivePolicy(policy: FixturePolicy, mode: 'full' | 'shape'): FixturePolicy {
  if (mode === 'shape' && (policy.compare === 'strict' || policy.compare === 'byId'))
    return { ...policy, compare: 'shape' };
  return policy;
}

/** Header conventions of PLAN §5.5 that are optional but must be well formed when present. */
export function headerDiffs(fixture: Fixture, response: HttpResponse): Diff[] {
  const diffs: Diff[] = [];
  const deprecation = response.headers.deprecation;
  if (deprecation !== undefined && deprecation !== 'true' && !/^@\d+$/.test(deprecation)) {
    diffs.push({
      path: 'header deprecation',
      kind: 'value',
      message: 'Deprecation must be `true` (or an RFC 9745 date)',
      actual: deprecation,
    });
  }
  const sunset = response.headers.sunset;
  if (sunset !== undefined && Number.isNaN(Date.parse(sunset))) {
    diffs.push({ path: 'header sunset', kind: 'value', message: 'Sunset must be an HTTP date', actual: sunset });
  }
  if (deprecation !== undefined && policyOf(fixture.name).tier === 1) {
    diffs.push({
      path: 'header deprecation',
      kind: 'value',
      message: 'Tier 1 routes are not deprecated',
      actual: deprecation,
    });
  }
  return diffs;
}

export async function runFixturesSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('fixtures');
  for (const fixture of loadFixtures()) {
    const policy = effectivePolicy(policyOf(fixture.name), ctx.options.mode);
    await rec.check(`${fixture.name} · GET ${fixture.route}`, async () => {
      const response = await ctx.client.get(ctx.api(fixture.route));
      if (policy.updatesChecker && response.status >= 200 && response.status < 300) {
        ctx.captures.push({ name: `fixture-${fixture.name}`, body: response.body });
      }
      const result = compareResponse(
        fixture.route,
        fixture.schema,
        policy,
        { status: fixture.status, body: fixture.body },
        {
          status: response.status,
          contentType: response.headers['content-type'],
          body: response.body,
        },
      );
      return { diffs: [...result.diffs, ...headerDiffs(fixture, response)], deviations: result.deviations };
    });
  }
  return rec;
}
