/**
 * Synthetic `ModDownload` rows (PLAN §6.12): one row per counted download, streamed with `COPY`.
 *
 * - Per version, exactly the legacy `_count.downloads`; spread in time between the version's
 *   release and the next one (front-loaded, like real release traffic), with the mod's
 *   `lastWeekDownloads` placed in the week before the snapshot.
 * - Orphans (research/02 Q3) have `modVersionId = NULL`.
 * - Rows are sorted by time before streaming, so ids grow with `createdAt` as in production (the
 *   watermarks of the delta backfills rely on it).
 * - `ip` reproduces research/02 Q4: 30 % `"undefined"` (RedManager and direct API calls), some
 *   `"null"` and `""` (missing header), some `x-forwarded-for` chains, the rest IPv4 addresses.
 */
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import type pg from 'pg';
import copyStreams from 'pg-copy-streams';
import { SEED } from '../constants.ts';
import { createRng, type Rng } from '../prng.ts';
import type { DownloadSlice } from './dataset.ts';

const BROWSER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 OPR/122.0.0.0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15',
  'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Steam/1.0 Chrome/126.0.0.0 Safari/537.36',
];

export interface IpShape {
  ip: string;
  userAgent: string;
}

/** Draws the `ip` / `userAgent` pair of one download. */
export function drawClient(rng: Rng, addresses: readonly string[]): IpShape {
  const r = rng.next();
  if (r < 0.3) return { ip: 'undefined', userAgent: rng.chance(0.8) ? 'undefined' : 'RedManager' };
  if (r < 0.315) return { ip: 'null', userAgent: 'null' };
  if (r < 0.318) return { ip: '', userAgent: '' };
  const agent = rng.pick(BROWSER_AGENTS);
  if (r < 0.338) return { ip: `${rng.pick(addresses)}, ${rng.pick(addresses)}`, userAgent: agent };
  return { ip: rng.pick(addresses), userAgent: agent };
}

function addressPool(rng: Rng, size: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < size; i += 1) {
    out.push(`${rng.int(2, 223)}.${rng.int(0, 255)}.${rng.int(0, 255)}.${rng.int(1, 254)}`);
  }
  return out;
}

export interface PlannedDownloads {
  /** Epoch milliseconds, sorted ascending. */
  times: Float64Array;
  /** Version id per row (0 = NULL). */
  versions: Int32Array;
}

/** Expands the slices into rows and sorts them by time (ties by version id). */
export function planDownloads(slices: readonly DownloadSlice[]): PlannedDownloads {
  const total = slices.reduce((sum, s) => sum + s.count, 0);
  const times = new Float64Array(total);
  const versions = new Int32Array(total);
  const rng = createRng(SEED).fork('download-times');
  let n = 0;
  for (const s of slices) {
    const recent = Math.min(s.recent, s.count);
    const earlyEnd = s.recentStart > s.start ? s.recentStart : s.end;
    for (let i = 0; i < s.count; i += 1) {
      let t: number;
      if (i < recent) t = s.recentStart + rng.next() * Math.max(1, s.end - s.recentStart);
      // Front-loaded: most downloads happen shortly after a release.
      else t = s.start + rng.next() ** 1.8 * Math.max(1, earlyEnd - s.start);
      times[n] = Math.floor(t);
      versions[n] = s.modVersionId ?? 0;
      n += 1;
    }
  }
  const order = new Uint32Array(total);
  for (let i = 0; i < total; i += 1) order[i] = i;
  order.sort(
    (a, b) => (times[a] as number) - (times[b] as number) || (versions[a] as number) - (versions[b] as number),
  );
  const sortedTimes = new Float64Array(total);
  const sortedVersions = new Int32Array(total);
  for (let i = 0; i < total; i += 1) {
    const j = order[i] as number;
    sortedTimes[i] = times[j] as number;
    sortedVersions[i] = versions[j] as number;
  }
  return { times: sortedTimes, versions: sortedVersions };
}

/** `COPY` text format: backslash, tab, newline and carriage return must be escaped. */
function copyText(value: string): string {
  return value.replace(/[\\\t\n\r]/g, (c) => (c === '\\' ? '\\\\' : c === '\t' ? '\\t' : c === '\n' ? '\\n' : '\\r'));
}

/** Text lines of the COPY stream, produced lazily in chunks. */
export function* copyLines(plan: PlannedDownloads, chunkRows = 20_000): Generator<string> {
  const rng = createRng(SEED).fork('download-clients');
  const addresses = addressPool(rng.fork('addresses'), 250_000);
  const total = plan.times.length;
  for (let offset = 0; offset < total; offset += chunkRows) {
    const end = Math.min(total, offset + chunkRows);
    let chunk = '';
    for (let i = offset; i < end; i += 1) {
      const { ip, userAgent } = drawClient(rng, addresses);
      const when = new Date(plan.times[i] as number).toISOString();
      const version = plan.versions[i] as number;
      chunk += `${copyText(ip)}\t${copyText(userAgent)}\t${when}\t${when}\t${version === 0 ? '\\N' : version}\n`;
    }
    yield chunk;
  }
}

/** Streams the planned rows into "ModDownload" with COPY. Returns the number of rows. */
export async function copyDownloads(client: pg.ClientBase, plan: PlannedDownloads): Promise<number> {
  const sink = client.query(
    copyStreams.from(
      'COPY "ModDownload" ("ip", "userAgent", "createdAt", "updatedAt", "modVersionId") FROM STDIN WITH (FORMAT text)',
    ),
  );
  await pipeline(Readable.from(copyLines(plan)), sink);
  return plan.times.length;
}
