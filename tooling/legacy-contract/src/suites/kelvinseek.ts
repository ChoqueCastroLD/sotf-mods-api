/**
 * Suite `kelvinseek` (research/01 §2.7, PLAN §5.5): `GET /api/kelvinseek/prompt` answers 200
 * `text/plain;charset=utf-8` `"{command}|{answer}"` with a known (or empty) command, never cached;
 * a missing parameter is a 422 legacy JSON envelope; `GET /api/kelvinseek/clear` answers
 * `Chat cleared`. Never run against production (it writes the database and spends OpenAI budget).
 */
import { KELVINSEEK_CLEAR_REPLY, LEGACY_TEXT_CONTENT_TYPE, LegacyErrorResponse } from '@sotf/contracts/legacy';
import { schemaDiffs } from '../compare.ts';
import { type HarnessContext, jsonBody } from '../context.ts';
import { type HttpResponse, normaliseContentType } from '../http.ts';
import { parseKelvinSeekReply } from '../kelvinseek.ts';
import { SuiteRecorder } from '../report.ts';

/** A chat id with the shape the mod sends (`steamId_…_steamName_…_kelvinId_…`), clearly synthetic. */
export const CONTRACT_CHAT_ID = 'steamId_76500000000000000_steamName_sotfv2-contract_kelvinId_0';

function textFailures(response: HttpResponse): string[] {
  const failures: string[] = [];
  if (response.status !== 200) failures.push(`status ${response.status}`);
  const type = normaliseContentType(response.headers['content-type']);
  if (type !== LEGACY_TEXT_CONTENT_TYPE)
    failures.push(
      `content-type ${response.headers['content-type'] ?? 'missing'} (expected ${LEGACY_TEXT_CONTENT_TYPE})`,
    );
  if (!/no-store/.test(response.headers['cache-control'] ?? ''))
    failures.push(`cache-control ${response.headers['cache-control'] ?? 'missing'} (expected no-store)`);
  return failures;
}

export async function runKelvinSeekSuite(ctx: HarnessContext): Promise<SuiteRecorder> {
  const rec = new SuiteRecorder('kelvinseek');
  if (ctx.isProduction(ctx.api('/api/kelvinseek/prompt'))) {
    rec.skip('kelvinseek', 'KelvinSeek routes are never requested in production');
    return rec;
  }
  const prompt = (params: Record<string, string>) => {
    const qs = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&');
    return ctx.client.get(ctx.api(`/api/kelvinseek/prompt?${qs}`));
  };
  const base = {
    chat_id: CONTRACT_CHAT_ID,
    text: 'please get logs and follow me',
    context: 'Kelvin is near the player, day 3',
  };

  for (const text of [base.text, 'how are you today?']) {
    await rec.check(`prompt "${text}" → text/plain "{command}|{answer}"`, async () => {
      const response = await prompt({ ...base, text });
      const failures = textFailures(response);
      const parsed = parseKelvinSeekReply(response.body.toString('utf8'));
      if (!parsed.ok)
        failures.push(`${parsed.reason}: ${JSON.stringify(response.body.toString('utf8').slice(0, 200))}`);
      return { failures, note: parsed.ok ? `command "${parsed.command}"` : undefined };
    });
  }

  for (const missing of ['chat_id', 'text', 'context'] as const) {
    await rec.check(`prompt without ${missing} → 422 legacy JSON`, async () => {
      const params: Record<string, string> = { ...base };
      delete params[missing];
      const response = await prompt(params);
      const failures: string[] = [];
      if (response.status !== 422) failures.push(`status ${response.status}`);
      if (normaliseContentType(response.headers['content-type']) !== 'application/json')
        failures.push(`content-type ${response.headers['content-type']}`);
      const body = jsonBody(response) as Record<string, unknown>;
      if (body.error !== 'VALIDATION') failures.push(`error ${JSON.stringify(body.error)}`);
      return { failures, diffs: schemaDiffs(LegacyErrorResponse, body) };
    });
  }

  await rec.check('clear → text/plain "Chat cleared"', async () => {
    const response = await ctx.client.get(
      ctx.api(`/api/kelvinseek/clear?chat_id=${encodeURIComponent(CONTRACT_CHAT_ID)}`),
    );
    const failures = textFailures(response);
    const text = response.body.toString('utf8');
    if (text !== KELVINSEEK_CLEAR_REPLY) failures.push(`body ${JSON.stringify(text.slice(0, 100))}`);
    return { failures };
  });
  return rec;
}
