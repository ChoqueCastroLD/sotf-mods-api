/**
 * Plumbing of the voting booth: what the page tells the island about each entry, the open event
 * (any button of the page can open the booth at an entry) and the fair order each voter sees.
 */
import type { JamState } from './store.ts';

/** An entry as the page embeds it (`data-entries` of the vote dock). */
export interface BoothEntry {
  id: number;
  name: string;
  path: string;
  thumb: string | null;
  blurb: string;
  authors: string[];
}

export const BOOTH_EVENT = 'sotf:jam-booth';

/** Opens the booth at an entry (or at the first one still to rate when omitted). */
export function openBooth(entryId?: number): void {
  document.dispatchEvent(new CustomEvent(BOOTH_EVENT, { detail: { entryId } }));
}

export function parseBoothEntries(raw: string | undefined): BoothEntry[] {
  try {
    const parsed: unknown = JSON.parse(raw ?? '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      const e = item as Partial<BoothEntry>;
      if (typeof e.id !== 'number' || typeof e.name !== 'string' || typeof e.path !== 'string') return [];
      return [
        {
          id: e.id,
          name: e.name,
          path: e.path,
          thumb: typeof e.thumb === 'string' ? e.thumb : null,
          blurb: typeof e.blurb === 'string' ? e.blurb : '',
          authors: Array.isArray(e.authors) ? e.authors.filter((a): a is string => typeof a === 'string') : [],
        },
      ];
    });
  } catch {
    return [];
  }
}

/** Small deterministic PRNG (mulberry32): the same voter always gets the same order. */
function prng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffles per voter so the first entries of the list do not collect every rating. */
export function shuffleFor<T>(items: readonly T[], seed: number): T[] {
  const random = prng(seed * 2654435761);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j] as T, out[i] as T];
  }
  return out;
}

/** Scores of an entry by category id. */
export function scoresOf(state: JamState, entryId: number): Map<number, number> {
  return new Map(state.votes.filter((vote) => vote.entryId === entryId).map((vote) => [vote.categoryId, vote.score]));
}

export type EntryProgress = 'todo' | 'partial' | 'done';

export function progressOf(state: JamState, entryId: number, categories: number): EntryProgress {
  const count = state.votes.filter((vote) => vote.entryId === entryId).length;
  return count === 0 ? 'todo' : count >= categories ? 'done' : 'partial';
}

/** Mean of the member's own stars for an entry (null when none). */
export function averageOf(state: JamState, entryId: number): number | null {
  const own = state.votes.filter((vote) => vote.entryId === entryId);
  return own.length === 0 ? null : own.reduce((sum, vote) => sum + vote.score, 0) / own.length;
}
