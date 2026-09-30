/**
 * Viewer state that public (edge-cached) lists cannot carry: which reactions I added and how I
 * voted on reviews. The write responses are the source of truth (`ReactionStateDTO.mine`); this
 * remembers them per account in `localStorage` so the controls show the right pressed state on
 * the next visit. Bounded (oldest entries dropped) and namespaced by user id. A session lookup
 * endpoint would replace it (docs/backlog/WP-70.md).
 */

const MAX_ENTRIES = 400;

type Store<V> = Record<string, V>;

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

function read<V>(key: string): Store<V> {
  try {
    const raw = storage()?.getItem(key);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as Store<V>) : {};
  } catch {
    return {};
  }
}

function write<V>(key: string, value: Store<V>): void {
  const keys = Object.keys(value);
  if (keys.length > MAX_ENTRIES) for (const drop of keys.slice(0, keys.length - MAX_ENTRIES)) delete value[drop];
  try {
    storage()?.setItem(key, JSON.stringify(value));
  } catch {
    // Quota or private mode: the state simply is not remembered.
  }
}

function keyOf(userId: number, kind: 'reactions' | 'votes' | 'field-reports'): string {
  return `sotf:social:v1:${userId}:${kind}`;
}

export function myReactions(userId: number, commentId: number): string[] {
  const value = read<string[]>(keyOf(userId, 'reactions'))[String(commentId)];
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [];
}

export function rememberReactions(userId: number, commentId: number, kinds: readonly string[]): void {
  const key = keyOf(userId, 'reactions');
  const store = read<string[]>(key);
  delete store[String(commentId)];
  if (kinds.length > 0) store[String(commentId)] = [...kinds];
  write(key, store);
}

export function myVote(userId: number, reviewId: number): 1 | -1 | 0 {
  const value = read<number>(keyOf(userId, 'votes'))[String(reviewId)];
  return value === 1 || value === -1 ? value : 0;
}

export function rememberVote(userId: number, reviewId: number, value: 1 | -1 | 0): void {
  const key = keyOf(userId, 'votes');
  const store = read<number>(key);
  delete store[String(reviewId)];
  if (value !== 0) store[String(reviewId)] = value;
  write(key, store);
}

export interface RememberedFieldReport {
  id: number;
  modVersionId: number;
  gameBuildId: number;
  mode: string;
  result: string;
  at: string;
  /** Labels at the time of the report (shown without another request). */
  version?: string;
  build?: string;
}

/** My last field report per mod (the island shows «You reported …» and edits it). */
export function myFieldReport(userId: number, modId: number): RememberedFieldReport | null {
  const value = read<RememberedFieldReport>(keyOf(userId, 'field-reports'))[String(modId)];
  return value && typeof value === 'object' && typeof value.id === 'number' ? value : null;
}

export function rememberFieldReport(userId: number, modId: number, report: RememberedFieldReport | null): void {
  const key = keyOf(userId, 'field-reports');
  const store = read<RememberedFieldReport>(key);
  delete store[String(modId)];
  if (report) store[String(modId)] = report;
  write(key, store);
}
