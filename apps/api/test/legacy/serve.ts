/**
 * Serves the API **with the legacy layer** for the contract harness until the integrator adds the
 * legacy module to the generated registry (docs/backlog/WP-32.md):
 *
 *   DATABASE_URL=postgres://… node apps/api/test/legacy/serve.ts [--port 47301]
 *   pnpm contract:legacy --base-url http://127.0.0.1:47301 --dotnet on
 *
 * Uses the normal environment of the API (`.env` in development); PORT/HOST default to
 * 127.0.0.1:47301. Local databases only (the seed of `pnpm db:seed:dev`).
 */
import { parseArgs } from 'node:util';
import closeWithGrace from 'close-with-grace';
import { buildApp } from '../../src/app.ts';
import { loadApiEnv } from '../../src/env.ts';
import legacyModule from '../../src/legacy/index.ts';
import { modules } from '../../src/modules/_registry.gen.ts';

const { values } = parseArgs({ options: { port: { type: 'string' }, host: { type: 'string' } } });
const env = loadApiEnv();
const host = new URL(env.DATABASE_URL).hostname;
if (!['127.0.0.1', 'localhost', '::1'].includes(host)) {
  process.stderr.write(`serve.ts: refusing a non-local database (${host})\n`);
  process.exit(2);
}
const withLegacy = modules.some((m) => m.name === 'legacy') ? [...modules] : [...modules, legacyModule];
const app = await buildApp({ env, modules: withLegacy });
closeWithGrace({ delay: 10_000 }, async () => {
  await app.close();
});
const address = await app.listen({ port: Number(values.port ?? 47301), host: values.host ?? '127.0.0.1' });
process.stdout.write(`legacy API listening on ${address}\n`);
