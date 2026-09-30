/**
 * Draft autosave (PLAN §7.5: «autoguardado en `ModDraft` cada 3 s y al cambiar de paso»).
 *
 * - A fresh wizard creates its draft (`POST /drafts`) the first time it has content; later saves
 *   `PATCH` the whole `data`. One request at a time; changes made meanwhile are saved right after.
 * - `flush()` saves immediately (step change, «Save draft», before submitting).
 * - Failures retry after 10 s (or when the browser is back online); the status says so.
 * - Leaving the page with unsaved changes sends a `keepalive` PATCH, and the browser asks for
 *   confirmation while a save is pending.
 */
import { isApiError } from '@sotf/contracts/client';
import type { DraftData, DraftDTO, DraftKind } from '@sotf/contracts/studio';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { api } from '../../../lib/api.ts';
import { uploadKeys } from './queries.ts';
import { hasContent } from './wizard.ts';

export const AUTOSAVE_DELAY_MS = 3_000;
const RETRY_DELAY_MS = 10_000;

export type AutosaveState = 'idle' | 'pending' | 'saving' | 'saved' | 'error' | 'offline';

export interface AutosaveStatus {
  state: AutosaveState;
  savedAt: number | null;
  /** Problem code of the last failure (`CONFLICT` = draft limit reached…). */
  errorCode: string | null;
  errorReference: string | null;
}

export interface AutosaveOptions {
  kind: DraftKind;
  modId?: number | undefined;
  /** The draft being resumed (null for a new wizard). */
  initial: DraftDTO | null;
  data: DraftData;
  /** Called once when the draft is created. */
  onCreated?: (draft: DraftDTO) => void;
}

export interface Autosave {
  draftId: string | null;
  /** Latest draft returned by the API (preflight, quality score, flags). */
  draft: DraftDTO | null;
  status: AutosaveStatus;
  dirty: boolean;
  /** Saves now; resolves with the saved draft (null when there is nothing to save yet). */
  flush: () => Promise<DraftDTO | null>;
  /** Replaces the known server state (after a refetch of the draft). */
  setDraft: (draft: DraftDTO) => void;
}

/** Stable JSON (sorted keys, `undefined` dropped) so key order never counts as a change. */
function serialize(data: DraftData): string {
  return JSON.stringify(data, (_key, value: unknown) => {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) return value;
    const record = value as Record<string, unknown>;
    return Object.fromEntries(
      Object.keys(record)
        .sort()
        .filter((key) => record[key] !== undefined)
        .map((key) => [key, record[key]]),
    );
  });
}

export function useAutosave({ kind, modId, initial, data, onCreated }: AutosaveOptions): Autosave {
  const queryClient = useQueryClient();
  const [draft, setDraftState] = useState<DraftDTO | null>(initial);
  const [status, setStatus] = useState<AutosaveStatus>({
    state: initial ? 'saved' : 'idle',
    savedAt: initial ? Date.parse(initial.updatedAt) : null,
    errorCode: null,
    errorReference: null,
  });

  const idRef = useRef<string | null>(initial?.id ?? null);
  const savedRef = useRef<string>(initial ? serialize(initial.data) : '');
  const dataRef = useRef(data);
  dataRef.current = data;
  const inFlight = useRef<Promise<DraftDTO | null> | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCreatedRef = useRef(onCreated);
  onCreatedRef.current = onCreated;
  const mounted = useRef(true);
  /** Data that failed with a final (4xx) error: not retried until it changes. */
  const refused = useRef<string | null>(null);
  const sanitizer = useRef<((data: DraftData) => DraftData) | null>(null);

  // The contract check of the saved copy (lazy: keeps Zod out of the route chunk).
  const loadSanitizer = useCallback(async () => {
    if (!sanitizer.current) sanitizer.current = (await import('./sanitize.ts')).sanitizeDraftData;
    return sanitizer.current;
  }, []);
  useEffect(() => {
    loadSanitizer().catch(() => {});
  }, [loadSanitizer]);

  const current = serialize(data);
  const dirty = current !== savedRef.current && (idRef.current !== null || hasContent(data));

  const store = useCallback(
    (saved: DraftDTO) => {
      queryClient.setQueryData(uploadKeys.draft(saved.id), saved);
      void queryClient.invalidateQueries({ queryKey: uploadKeys.drafts, exact: true });
      if (mounted.current) setDraftState(saved);
    },
    [queryClient],
  );

  const saveOnce = useCallback(async (): Promise<DraftDTO | null> => {
    const snapshot = dataRef.current;
    const text = serialize(snapshot);
    if (text === savedRef.current) return null;
    if (idRef.current === null && !hasContent(snapshot)) return null;
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      if (mounted.current) setStatus((s) => ({ ...s, state: 'offline' }));
      return null;
    }
    if (mounted.current) setStatus((s) => ({ ...s, state: 'saving' }));
    try {
      const payload = (await loadSanitizer())(snapshot);
      let saved: DraftDTO;
      if (idRef.current === null) {
        saved = await api.studio.createDraft({
          body: { kind, ...(modId !== undefined ? { modId } : {}), data: payload },
        });
        idRef.current = saved.id;
        onCreatedRef.current?.(saved);
      } else {
        saved = await api.studio.updateDraft({ params: { id: idRef.current }, body: { data: payload } });
      }
      savedRef.current = text;
      store(saved);
      if (mounted.current) {
        setStatus({ state: 'saved', savedAt: Date.now(), errorCode: null, errorReference: null });
      }
      return saved;
    } catch (error) {
      const final = isApiError(error) && error.status >= 400 && error.status < 500 && error.status !== 429;
      refused.current = final ? text : null;
      if (mounted.current) {
        setStatus((s) => ({
          ...s,
          state: 'error',
          errorCode: isApiError(error) ? error.code : 'UNAVAILABLE',
          errorReference: isApiError(error) ? error.problem.requestId || null : null,
        }));
      }
      throw error;
    }
  }, [kind, modId, store, loadSanitizer]);

  const save = useCallback(async (): Promise<DraftDTO | null> => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    // One request at a time; whatever changed meanwhile is saved right after.
    while (inFlight.current) {
      try {
        await inFlight.current;
      } catch {
        // The next attempt reports its own failure.
      }
    }
    const run = saveOnce();
    inFlight.current = run;
    try {
      const result = await run;
      return (
        result ?? (idRef.current ? (queryClient.getQueryData<DraftDTO>(uploadKeys.draft(idRef.current)) ?? null) : null)
      );
    } finally {
      inFlight.current = null;
    }
  }, [queryClient, saveOnce]);

  // Debounced save 3 s after the last change.
  useEffect(() => {
    if (!dirty || refused.current === current) return;
    setStatus((s) => (s.state === 'saving' ? s : { ...s, state: s.state === 'error' ? 'error' : 'pending' }));
    const delay = status.state === 'error' ? RETRY_DELAY_MS : AUTOSAVE_DELAY_MS;
    timer.current = setTimeout(() => {
      timer.current = null;
      save().catch(() => {});
    }, delay);
    return () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
    };
    // `current` stands for `data`; the status only matters for the retry delay.
  }, [current, dirty, save, status.state]);

  // Back online: save what is pending.
  useEffect(() => {
    const online = () => {
      if (serialize(dataRef.current) !== savedRef.current) save().catch(() => {});
    };
    window.addEventListener('online', online);
    return () => window.removeEventListener('online', online);
  }, [save]);

  // Leaving the page: keepalive PATCH + the browser's confirmation while something is unsaved.
  useEffect(() => {
    const unsaved = () =>
      serialize(dataRef.current) !== savedRef.current && (idRef.current !== null || hasContent(dataRef.current));
    const beforeUnload = (event: BeforeUnloadEvent) => {
      if (!unsaved() && !inFlight.current) return;
      event.preventDefault();
    };
    const pageHide = () => {
      const id = idRef.current;
      const sanitize = sanitizer.current;
      if (!id || !unsaved() || !sanitize) return;
      try {
        void fetch(`/api/v2/drafts/${encodeURIComponent(id)}`, {
          method: 'PATCH',
          credentials: 'same-origin',
          keepalive: true,
          headers: { 'content-type': 'application/json', accept: 'application/json' },
          body: JSON.stringify({ data: sanitize(dataRef.current) }),
        });
      } catch {
        // Too large for keepalive (> 64 KB): the last autosave stands.
      }
    };
    window.addEventListener('beforeunload', beforeUnload);
    window.addEventListener('pagehide', pageHide);
    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
      window.removeEventListener('pagehide', pageHide);
    };
  }, []);

  // Navigating away inside the console: save what is pending (fire and forget).
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      const id = idRef.current;
      const sanitize = sanitizer.current;
      if (id && sanitize && serialize(dataRef.current) !== savedRef.current) {
        api.studio
          .updateDraft({ params: { id }, body: { data: sanitize(dataRef.current) } })
          .then((saved) => queryClient.setQueryData(uploadKeys.draft(saved.id), saved))
          .catch(() => {});
      }
    };
  }, [queryClient]);

  const setDraft = useCallback((next: DraftDTO) => {
    setDraftState(next);
  }, []);

  return { draftId: idRef.current, draft, status, dirty, flush: save, setDraft };
}
