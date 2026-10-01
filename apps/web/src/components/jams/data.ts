/**
 * Server-side data of the public Mod Jams pages (`/jams`, `/jams/:slug`).
 *
 * Everything is read without cookies: the HTML is shared and edge-cached with `list:jams` (purged
 * by every phase change and entry change). Signed-in extras (follow, submit, vote) come from the
 * island. The listing failing gives a 503 error state; a missing or draft jam is a 404.
 */
import { isApiError } from '@sotf/contracts/client';
import type { JamDTO, JamEntryDTO, JamResultsDTO, JamSummaryDTO } from '@sotf/contracts/jams';
import { serverApi } from '../../lib/api.ts';

export type { JamDTO, JamEntryDTO, JamResultsDTO, JamSummaryDTO };

const CALL_TIMEOUT_MS = 4000;

export interface JamGroups {
  /** Announced, open for entries, closed or voting: the jams that are happening. */
  running: JamSummaryDTO[];
  /** Results published and not archived yet. */
  results: JamSummaryDTO[];
  archive: JamSummaryDTO[];
}

export function groupJams(items: readonly JamSummaryDTO[]): JamGroups {
  const groups: JamGroups = { running: [], results: [], archive: [] };
  for (const jam of items) {
    if (jam.phase === 'archived') groups.archive.push(jam);
    else if (jam.phase === 'results') groups.results.push(jam);
    else groups.running.push(jam);
  }
  return groups;
}

export async function loadJamList(): Promise<JamSummaryDTO[] | null> {
  const list = await serverApi()
    .jams.list({}, { signal: AbortSignal.timeout(CALL_TIMEOUT_MS) })
    .catch(() => null);
  return list ? list.items : null;
}

export type JamPageData =
  | { kind: 'ok'; jam: JamDTO; entries: JamEntryDTO[]; results: JamResultsDTO | null }
  | { kind: 'not-found' }
  | { kind: 'error' };

/** Entries are shown in a stable order for the crawler; members get their own shuffle in the island. */
export async function loadJamPage(slug: string): Promise<JamPageData> {
  const api = serverApi();
  const signal = AbortSignal.timeout(CALL_TIMEOUT_MS);
  try {
    const jam = await api.jams.get({ params: { slug } }, { signal });
    const showResults = jam.phase === 'results' || jam.phase === 'archived';
    const [entries, results] = await Promise.all([
      api.jams.entries({ params: { slug }, query: {} }, { signal }).catch(() => null),
      showResults ? api.jams.results({ params: { slug } }, { signal }).catch(() => null) : Promise.resolve(null),
    ]);
    return { kind: 'ok', jam, entries: entries?.items ?? [], results };
  } catch (error) {
    return isApiError(error) && (error.status === 404 || error.status === 410)
      ? { kind: 'not-found' }
      : { kind: 'error' };
  }
}

/** Locale-less path of a jam. */
export function jamPath(slug: string): string {
  return `/jams/${slug}`;
}

/** Published results of the finished jams of a list (newest first, at most `limit`); failures are skipped. */
export async function loadFinishedResults(
  items: readonly JamSummaryDTO[],
  limit = 8,
): Promise<Map<string, JamResultsDTO>> {
  const api = serverApi();
  const finished = items.filter((jam) => jam.phase === 'results' || jam.phase === 'archived').slice(0, limit);
  const found = await Promise.all(
    finished.map(async (jam) => {
      const results = await api.jams
        .results({ params: { slug: jam.slug } }, { signal: AbortSignal.timeout(CALL_TIMEOUT_MS) })
        .catch(() => null);
      return [jam.slug, results] as const;
    }),
  );
  return new Map(found.flatMap(([slug, results]) => (results ? [[slug, results] as const] : [])));
}

/** The overall winner (rank 1), or null when the first place is not public (entry hidden, mod removed). */
export function winnerOf(results: JamResultsDTO | null | undefined): JamResultsDTO['overall'][number] | null {
  return results?.overall.find((placement) => placement.rank === 1) ?? null;
}
