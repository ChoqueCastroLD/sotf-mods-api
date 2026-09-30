/**
 * «The living island» (research/03 §5.10, PLAN §2.7): guests never open SSE, so the landing
 * polls `GET /api/v2/live/pulse` (edge-cached 30 s) every 60 s while the tab is visible — the
 * first poll on idle, because the cached HTML may be minutes old — and refreshes the readout
 * figures in place (no layout shift). Failures back off
 * exponentially (up to 5 min) and show «Signal lost» until the next success.
 */
import type { LivePulseDTO } from '@sotf/contracts/stats';
import type { z } from 'zod';
import { relativize } from './relative-time.ts';

type LivePulse = z.output<typeof LivePulseDTO>;

export const PULSE_URL = '/api/v2/live/pulse';
export const POLL_MS = 60_000;
export const MAX_BACKOFF_MS = 5 * 60_000;

function isPulse(value: unknown): value is LivePulse {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<LivePulse>;
  return (
    typeof candidate.downloadsToday === 'number' &&
    typeof candidate.downloadsLastHour === 'number' &&
    Array.isArray(candidate.recent)
  );
}

function renderReadout(doc: Document, pulse: LivePulse): void {
  const lang = doc.documentElement.lang || 'en';
  const numbers = new Intl.NumberFormat(lang, { maximumFractionDigits: 0 });
  const values = { downloadsToday: pulse.downloadsToday, downloadsLastHour: pulse.downloadsLastHour };
  for (const field of doc.querySelectorAll<HTMLElement>('[data-pulse-field]')) {
    const key = field.dataset.pulseField as keyof typeof values | undefined;
    if (key && key in values) field.textContent = numbers.format(values[key]);
  }
  const group = doc.querySelector<HTMLElement>('[data-pulse-group]');
  if (group) group.hidden = false;
}

function setOffline(doc: Document, offline: boolean): void {
  const status = doc.querySelector<HTMLElement>('[data-pulse-offline]');
  if (!status) return;
  const text = offline ? (status.dataset.text ?? '') : '';
  if (status.textContent !== text) status.textContent = text;
}

export function initPulse(doc: Document = document): () => void {
  const win = doc.defaultView;
  if (!win || !doc.querySelector('[data-pulse-readout]')) return () => {};
  let timer: ReturnType<typeof setTimeout> | undefined;
  let failures = 0;
  let lastFetch = 0;
  let inFlight = false;
  let stopped = false;

  const schedule = (delay: number) => {
    if (timer !== undefined) clearTimeout(timer);
    timer = stopped ? undefined : setTimeout(tick, delay);
  };

  const tick = async () => {
    timer = undefined;
    if (stopped || inFlight || doc.visibilityState !== 'visible') return;
    inFlight = true;
    lastFetch = Date.now();
    try {
      const response = await fetch(PULSE_URL, { credentials: 'omit', headers: { accept: 'application/json' } });
      if (!response.ok) throw new Error(`pulse ${response.status}`);
      const body: unknown = await response.json();
      if (!isPulse(body)) throw new Error('pulse: unexpected body');
      failures = 0;
      renderReadout(doc, body);
      setOffline(doc, false);
    } catch {
      failures += 1;
      setOffline(doc, true);
    } finally {
      inFlight = false;
    }
    // Relative times drift even when the figures do not change.
    relativize(doc);
    schedule(failures === 0 ? POLL_MS : Math.min(POLL_MS * 2 ** failures, MAX_BACKOFF_MS));
  };

  const onVisibility = () => {
    if (doc.visibilityState !== 'visible') {
      if (timer !== undefined) clearTimeout(timer);
      timer = undefined;
      return;
    }
    const due = lastFetch + (failures === 0 ? POLL_MS : POLL_MS * 2 ** failures);
    schedule(Math.max(0, due - Date.now()));
  };
  doc.addEventListener('visibilitychange', onVisibility);

  const first = () => schedule(0);
  if ('requestIdleCallback' in win) win.requestIdleCallback(first, { timeout: 4000 });
  else setTimeout(first, 1500);

  return () => {
    stopped = true;
    if (timer !== undefined) clearTimeout(timer);
    doc.removeEventListener('visibilitychange', onVisibility);
  };
}
