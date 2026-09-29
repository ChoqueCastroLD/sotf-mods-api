/**
 * `pnpm --filter @sotf/legacy-contract mock [--port 18124]`: runs the simulated legacy server in
 * the foreground (manual exploration, or a stand-in target while the v2 legacy layer is built).
 */
import { parseArgs } from 'node:util';
import { startMockServer } from './server.ts';

const { values } = parseArgs({
  options: { port: { type: 'string', default: '0' }, host: { type: 'string', default: '127.0.0.1' } },
});
const port = Number(values.port);
if (!Number.isInteger(port) || port < 0 || port > 65_535) {
  process.stderr.write('--port must be 0–65535\n');
  process.exit(2);
}
const server = await startMockServer({ port, host: values.host });
process.stdout.write(`simulated legacy API on ${server.url} (storage ${server.r2Base}); Ctrl+C to stop\n`);
const stop = () => {
  server.close().then(
    () => process.exit(0),
    () => process.exit(1),
  );
};
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
