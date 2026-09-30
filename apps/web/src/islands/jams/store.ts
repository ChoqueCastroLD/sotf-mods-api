/**
 * Tiny store shared by the jam islands of one page (the hero actions and every vote slot): the
 * member's own state (`GET /me/jams/:slug`) and its updates. `useSyncExternalStore` friendly.
 */
import type { MyJamStateDTO } from '@sotf/contracts/jams';
import { useSyncExternalStore } from 'react';

export type JamState = MyJamStateDTO;

export interface JamCategoryInfo {
  id: number;
  label: string;
}

export interface JamStore {
  slug: string;
  phase: string;
  categories: readonly JamCategoryInfo[];
  get(): JamState;
  set(next: JamState): void;
  subscribe(listener: () => void): () => void;
}

export function createJamStore(
  slug: string,
  phase: string,
  categories: readonly JamCategoryInfo[],
  initial: JamState,
): JamStore {
  let state = initial;
  const listeners = new Set<() => void>();
  return {
    slug,
    phase,
    categories,
    get: () => state,
    set(next) {
      state = next;
      for (const listener of listeners) listener();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function useJamState(store: JamStore): JamState {
  return useSyncExternalStore(store.subscribe, store.get, store.get);
}
