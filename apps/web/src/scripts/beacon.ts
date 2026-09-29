/**
 * Product analytics beacon and RUM (PLAN §7.1, §8.8, §9.3).
 *
 * - Cookieless: the API derives a daily-rotating visitor hash; nothing is stored in the browser.
 * - `Sec-GPC` / Global Privacy Control and Do Not Track disable it completely.
 * - Events are batched (≤ 20) and sent with `navigator.sendBeacon` as `text/plain` JSON to
 *   `POST /api/v2/e` (the only CSRF exception) when the page is hidden or left (`pagehide`,
 *   `visibilitychange`), or as soon as a batch is full: no timers, no requests during load.
 * - `page_view` once per real view (after prerender activation, again on bfcache restore).
 * - RUM: `web-vitals` (attribution build) is imported when the browser is idle and reports
 *   LCP, INP, CLS, FCP and TTFB to `/api/v2/e/vitals` with the page template.
 *
 * Other scripts record events with `track('download_click', { entityType: 'mod', entityId: 20 })`.
 */
import type { AnalyticsEventKind } from '@sotf/contracts/events';
import { matchLocale } from '@sotf/i18n';

export const BEACON_URL = '/api/v2/e';
export const VITALS_URL = '/api/v2/e/vitals';
export const MAX_BATCH = 20;

type EntityType = 'mod' | 'build' | 'kit' | 'user' | 'category' | 'tag';

export interface BeaconEventInput {
  entityType?: EntityType;
  entityId?: number;
  props?: Record<string, string | number | boolean>;
}

interface BeaconEvent extends BeaconEventInput {
  kind: AnalyticsEventKind;
  path: string;
  locale?: string;
  referrer?: string;
}

interface VitalMetric {
  name: 'LCP' | 'INP' | 'CLS' | 'FCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  id: string;
  navigationType?: string;
  attribution?: Record<string, string | number>;
}

const queue: BeaconEvent[] = [];
const vitals = new Map<string, VitalMetric>();
let listening = false;

/** Tracking is off with Global Privacy Control or Do Not Track (PLAN §9.3). */
export function trackingAllowed(nav: Navigator = navigator): boolean {
  const withGpc = nav as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
  if (withGpc.globalPrivacyControl === true) return false;
  const dnt = nav.doNotTrack ?? withGpc.msDoNotTrack ?? (globalThis as { doNotTrack?: string }).doNotTrack;
  return dnt !== '1' && dnt !== 'yes';
}

function clip(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

export function currentPath(loc: Location = location): string {
  return clip(`${loc.pathname}${loc.search}`, 512);
}

function send(url: string, payload: unknown): void {
  const body = new Blob([JSON.stringify(payload)], { type: 'text/plain' });
  if (typeof navigator.sendBeacon === 'function' && navigator.sendBeacon(url, body)) return;
  void fetch(url, { method: 'POST', body, keepalive: true, credentials: 'same-origin' }).catch(() => {});
}

/** Sends the queued events now (called on hide and when the batch is full). */
export function flush(): void {
  while (queue.length > 0) send(BEACON_URL, { events: queue.splice(0, MAX_BATCH) });
  if (vitals.size > 0) {
    const template = document.documentElement.dataset.template ?? 'page';
    send(VITALS_URL, { template: clip(template, 40), path: currentPath(), metrics: [...vitals.values()].slice(0, 10) });
    vitals.clear();
  }
}

function listenForHide(): void {
  if (listening) return;
  listening = true;
  addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush();
  });
}

function enqueue(event: Omit<BeaconEvent, 'path' | 'locale'>): void {
  if (!trackingAllowed()) return;
  const locale = matchLocale(document.documentElement.lang) ?? undefined;
  const full: BeaconEvent = { ...event, path: currentPath() };
  if (locale) full.locale = locale;
  queue.push(full);
  listenForHide();
  if (queue.length >= MAX_BATCH) flush();
}

/** Records a product event (no-op when tracking is not allowed). */
export function track(kind: AnalyticsEventKind, input: BeaconEventInput = {}): void {
  enqueue({ kind, ...input });
}

/** Entity of the page, from `<html data-entity-type data-entity-id>` (set by the page layout). */
export function pageEntity(root: HTMLElement = document.documentElement): BeaconEventInput {
  const { entityType, entityId } = root.dataset;
  const id = Number(entityId);
  const types: readonly string[] = ['mod', 'build', 'kit', 'user', 'category', 'tag'];
  return entityType && types.includes(entityType) && Number.isInteger(id) && id > 0
    ? { entityType: entityType as EntityType, entityId: id }
    : {};
}

function pageView(): void {
  const referrer = document.referrer ? { referrer: clip(document.referrer, 512) } : {};
  enqueue({ kind: 'page_view', ...pageEntity(), ...referrer });
}

function compactAttribution(attribution: unknown): Record<string, string | number> | undefined {
  if (!attribution || typeof attribution !== 'object') return undefined;
  const out: Record<string, string | number> = {};
  for (const [key, value] of Object.entries(attribution)) {
    if (Object.keys(out).length >= 8) break;
    if (typeof value === 'number' && Number.isFinite(value)) out[clip(key, 40)] = Math.round(value * 100) / 100;
    else if (typeof value === 'string' && value.length > 0) out[clip(key, 40)] = clip(value, 300);
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

async function startVitals(): Promise<void> {
  const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals/attribution');
  const record = (metric: {
    name: string;
    value: number;
    rating: string;
    id: string;
    navigationType?: string;
    attribution?: unknown;
  }) => {
    const entry: VitalMetric = {
      name: metric.name as VitalMetric['name'],
      value: Math.max(0, metric.value),
      rating: metric.rating as VitalMetric['rating'],
      id: clip(metric.id, 80),
    };
    if (metric.navigationType) entry.navigationType = clip(metric.navigationType, 40);
    const attribution = compactAttribution(metric.attribution);
    if (attribution) entry.attribution = attribution;
    vitals.set(entry.name, entry);
    listenForHide();
  };
  onLCP(record);
  onINP(record);
  onCLS(record);
  onFCP(record);
  onTTFB(record);
}

function whenActivated(run: () => void): void {
  const doc = document as Document & { prerendering?: boolean };
  if (doc.prerendering) doc.addEventListener('prerenderingchange', run, { once: true });
  else run();
}

export function initBeacon(): void {
  if (!trackingAllowed()) return;
  whenActivated(() => {
    pageView();
    addEventListener('pageshow', (event) => {
      if (event.persisted) pageView();
    });
  });
  const idle = (fn: () => void) =>
    'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 5000 }) : setTimeout(fn, 3000);
  idle(() => {
    void startVitals().catch(() => {});
  });
}
