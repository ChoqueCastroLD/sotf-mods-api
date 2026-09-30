/**
 * Live counters of mod and build pages. The cached HTML may be up to 15 minutes old, so the page
 * asks `GET /api/v2/mods/:id/live` (edge cached 30 s, public) shortly after load and then once a
 * minute while the tab is visible, pausing in background tabs and on offline. Only the figures
 * change in place (no layout shift: same elements, `tabular-nums`).
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

export function startLiveCounters(modId: number, apply: (live: LiveCounters) => void): void {
  let timer: number | undefined;
  let polls = 0;
  let last = 0;
  let inFlight = false;

  const poll = async (): Promise<void> => {
    if (inFlight || document.visibilityState !== 'visible' || navigator.onLine === false) return;
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

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && Date.now() - last > INTERVAL_MS / 2) schedule(0);
  });
  schedule(FIRST_DELAY_MS);
}

export function compactFormat(lang: string): Intl.NumberFormat {
  return new Intl.NumberFormat(lang, { notation: 'compact', maximumFractionDigits: 1 });
}
