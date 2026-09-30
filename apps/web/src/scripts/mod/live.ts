/**
 * Live counters of mod and build pages. The cached HTML may be up to 15 minutes old, so the page
 * opens `EventSource` on `/api/v2/mods/:id/live/stream` (public, cookieless `mod.live` frames: sent
 * on connect and on every counted download) while the tab is visible. The server closes the stream
 * after a while and the browser reconnects by itself. Without `EventSource`, or when the stream
 * cannot be kept open, the page falls back to polling `GET /api/v2/mods/:id/live` (edge cached
 * 30 s) once a minute, pausing in background tabs and on offline. Only the figures change in place
 * (no layout shift: same elements, `tabular-nums`).
 */

export interface LiveCounters {
  downloads: number;
  downloads24h: number;
  followers: number;
}

const FIRST_DELAY_MS = 4000;
const INTERVAL_MS = 60_000;
/** A page left open for hours stops polling (the visitor is away). */
const MAX_POLLS = 120;

function isCounters(value: unknown): value is LiveCounters {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return typeof v.downloads === 'number' && typeof v.followers === 'number';
}

/** Consecutive stream failures (never opened) before polling takes over. */
const STREAM_FAILURES_BEFORE_POLLING = 2;

export function startLiveCounters(modId: number, apply: (live: LiveCounters) => void): void {
  let timer: number | undefined;
  let source: EventSource | null = null;
  let streamOpen = false;
  let failures = 0;
  let streamGaveUp = typeof EventSource === 'undefined';
  let polls = 0;
  let last = 0;
  let inFlight = false;

  const poll = async (): Promise<void> => {
    if (streamOpen || inFlight || document.visibilityState !== 'visible' || navigator.onLine === false) return;
    inFlight = true;
    polls += 1;
    last = Date.now();
    try {
      const response = await fetch(`/api/v2/mods/${modId}/live`, {
        headers: { accept: 'application/json' },
        credentials: 'omit',
      });
      if (!response.ok) return;
      const body: unknown = await response.json();
      if (isCounters(body)) apply(body);
    } catch {
      // Offline or API slow: the server-rendered figures stay.
    } finally {
      inFlight = false;
    }
  };

  const schedule = (delay: number) => {
    window.clearTimeout(timer);
    if (polls >= MAX_POLLS) return;
    timer = window.setTimeout(async () => {
      await poll();
      schedule(INTERVAL_MS);
    }, delay);
  };

  const closeStream = () => {
    source?.close();
    source = null;
    streamOpen = false;
  };

  const openStream = () => {
    if (source || streamGaveUp || document.visibilityState !== 'visible' || navigator.onLine === false) return;
    let stream: EventSource;
    try {
      stream = new EventSource(`/api/v2/mods/${modId}/live/stream`, { withCredentials: false });
    } catch {
      streamGaveUp = true;
      return;
    }
    source = stream;
    stream.onopen = () => {
      failures = 0;
      streamOpen = true;
      window.clearTimeout(timer);
    };
    stream.addEventListener('mod.live', (message) => {
      try {
        const body: unknown = JSON.parse((message as MessageEvent<string>).data);
        if (isCounters(body)) apply(body);
      } catch {
        // Malformed frame: ignore, the next one replaces it.
      }
    });
    stream.onerror = () => {
      streamOpen = false;
      // CLOSED: the browser gave up (refused, 4xx/5xx); CONNECTING: it retries by itself.
      if (stream.readyState === EventSource.CLOSED) {
        closeStream();
        failures = STREAM_FAILURES_BEFORE_POLLING;
      } else failures += 1;
      if (failures >= STREAM_FAILURES_BEFORE_POLLING) {
        streamGaveUp = true;
        closeStream();
        schedule(0);
      }
    };
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      openStream();
      if (!streamOpen && Date.now() - last > INTERVAL_MS / 2) schedule(0);
    } else closeStream();
  });
  window.addEventListener('online', openStream);
  window.addEventListener('pagehide', closeStream);
  window.addEventListener('pageshow', (event) => {
    if ((event as PageTransitionEvent).persisted) openStream();
  });
  if (streamGaveUp) schedule(FIRST_DELAY_MS);
  else {
    openStream();
    // If the stream has not opened shortly, one poll covers the gap.
    schedule(FIRST_DELAY_MS);
  }
}

export function compactFormat(lang: string): Intl.NumberFormat {
  return new Intl.NumberFormat(lang, { notation: 'compact', maximumFractionDigits: 1 });
}
