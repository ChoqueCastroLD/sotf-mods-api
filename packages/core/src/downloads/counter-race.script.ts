/**
 * Child process of `counter.test.ts`: two overlapping `flush()` calls (the periodic timer and a
 * shutdown, or the timer and a slow flush) while the follow-up of the first one does real
 * asynchronous work. Prints `ok` when both finish. Before the fix the second call spun on resolved
 * promises, so the follow-up's timer never fired: the process hung at 100 % CPU (hence a separate
 * process the test can kill).
 */
import type { Database } from '@sotf/db';
import type { Logger } from '../kernel/logger.ts';
import { DownloadCounter } from './counter.ts';

const log = { info() {}, warn() {}, error() {}, debug() {}, child: () => log } as unknown as Logger;
// `#write` only needs `transaction()` to hand back its result: the SQL itself is not under test.
const db = {
  transaction: async () => ({ inserted: 1, unique: 1, report: { mods: new Map(), userIds: [] } }),
} as unknown as Database;

let followUps = 0;
const counter = new DownloadCounter(db, {
  log,
  onFlushed: async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
    followUps += 1;
  },
});
counter.record({
  modVersionId: 1,
  modId: 1,
  at: new Date(),
  ipHash: 'h',
  userAgent: '',
  country: null,
  source: 'client',
  userId: null,
});
await Promise.all([counter.flush(), counter.flush()]);
process.stdout.write(followUps === 1 ? 'ok\n' : `unexpected follow-ups: ${followUps}\n`);
