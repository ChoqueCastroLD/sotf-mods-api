/**
 * `useStream()` — the console's realtime connection (PLAN §5.3). Mounted once by the shell;
 * screens read the status with `useStreamStatus()` and simply use TanStack Query: stream events
 * update or invalidate the caches they concern (`lib/stream.ts`).
 *
 * - `pagehide` closes the stream (bfcache-friendly); `pageshow` from the bfcache reopens it and
 *   refetches live data.
 * - `online` retries at once instead of waiting for the backoff.
 * - While the stream is down for good (`polling`), the unread count is polled every 60 s.
 */
import { useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState } from 'react';
import { SHELL_ENDPOINTS, shellApi } from '../lib/http.ts';
import { queryKeys } from '../lib/query-keys.ts';
import {
  applyStreamEvent,
  invalidateLiveQueries,
  StreamClient,
  type StreamClientOptions,
  type StreamStatus,
  setUnreadCount,
} from '../lib/stream.ts';

/** Same value as `SSE_FALLBACK_POLL_SECONDS` of `@sotf/contracts/events` (kept Zod-free here: the shell does not ship Zod). */
export const FALLBACK_POLL_MS = 60_000;

export const STREAM_URL = SHELL_ENDPOINTS.stream.path;

export const StreamStatusContext = createContext<StreamStatus>('idle');

/** Status of the realtime connection (for «Live» indicators). */
export function useStreamStatus(): StreamStatus {
  return useContext(StreamStatusContext);
}

export function useStream(options: Pick<StreamClientOptions, 'createEventSource'> = {}): StreamStatus {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<StreamStatus>('idle');
  const { createEventSource } = options;

  useEffect(() => {
    const client = new StreamClient({
      url: STREAM_URL,
      onEvent: (event) => applyStreamEvent(queryClient, event),
      onStatus: setStatus,
      onReconnect: () => invalidateLiveQueries(queryClient),
      ...(createEventSource ? { createEventSource } : {}),
    });
    client.start();
    const onPageHide = () => client.stop();
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      client.start();
      invalidateLiveQueries(queryClient);
    };
    const onOnline = () => client.retryNow();
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('online', onOnline);
    return () => {
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('online', onOnline);
      client.stop();
    };
  }, [queryClient, createEventSource]);

  useEffect(() => {
    if (status !== 'polling') return;
    let cancelled = false;
    const poll = async () => {
      try {
        const { count } = await shellApi.unreadCount();
        if (!cancelled) setUnreadCount(queryClient, count);
      } catch {
        // No unread-count endpoint or a transient failure: `/me` carries the count too.
        if (!cancelled) void queryClient.invalidateQueries({ queryKey: queryKeys.me });
      }
    };
    void poll();
    const timer = window.setInterval(poll, FALLBACK_POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [status, queryClient]);

  return status;
}
