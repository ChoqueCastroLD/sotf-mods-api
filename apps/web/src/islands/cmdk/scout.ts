/**
 * Scout mode of the palette (T1-07): plain `fetch` of `GET /api/v2/scout/status` (is the mode
 * offered?) and `POST /api/v2/scout` (ask). Paths are those of `API_ROUTES.discovery`
 * (`@sotf/contracts`). The POST carries `Content-Type: application/json` (the API's CSRF rule).
 * The mode is shown only while the status says `available`; any failure of the status call hides it.
 */
import type { CompatStatus, ModKind } from '@sotf/contracts/common';
import type { Locale } from '@sotf/i18n';
import type { EntryItem } from './types.ts';

export const SCOUT_STATUS_URL = '/api/v2/scout/status';
export const SCOUT_URL = '/api/v2/scout';
export const SCOUT_MAX_LENGTH = 300;
export const SCOUT_MIN_LENGTH = 3;

interface ScoutCitationWire {
  reason: string;
  mod: {
    id: number;
    kind: ModKind;
    manifestId: string;
    name: string;
    canonicalPath: string;
    userHandle: string;
    category: { slug: string } | null;
    thumbnail: { url: string } | null;
    downloads: number;
    compatStatus: CompatStatus;
  };
}

interface ScoutAnswerWire {
  answer: string;
  citations: ScoutCitationWire[];
  cached: boolean;
}

export type ScoutResult =
  | { ok: true; answer: string; items: EntryItem[]; cached: boolean }
  | { ok: false; reason: 'rate' | 'unavailable' | 'error' };

let status: Promise<boolean> | null = null;

/** Whether Scout is offered. Cached for the page (a failure is retried on the next open). */
export function loadScoutAvailable(): Promise<boolean> {
  if (!status) {
    status = fetch(SCOUT_STATUS_URL, { headers: { accept: 'application/json' }, credentials: 'omit' })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status));
        const body = (await response.json()) as { available?: unknown };
        return body.available === true;
      })
      .catch(() => {
        status = null;
        return false;
      });
  }
  return status;
}

function toItem(citation: ScoutCitationWire): EntryItem {
  const { mod } = citation;
  const type = mod.kind === 'build' ? 'build' : 'mod';
  return {
    key: `${type}:${mod.id}`,
    type,
    id: mod.id,
    title: mod.name,
    subtitle: `@${mod.userHandle}`,
    note: citation.reason,
    path: mod.canonicalPath,
    thumb: mod.thumbnail?.url ?? null,
    kind: mod.kind,
    compat: mod.compatStatus,
    downloads: mod.downloads,
    categorySlug: mod.category?.slug ?? null,
    manifestId: mod.manifestId,
  };
}

/** Asks Scout. Never throws: failures come back as `{ ok: false }`. */
export async function askScout(question: string, locale: Locale, signal: AbortSignal): Promise<ScoutResult> {
  try {
    const response = await fetch(SCOUT_URL, {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      credentials: 'omit',
      body: JSON.stringify({ question, locale }),
      signal,
    });
    if (response.status === 429) return { ok: false, reason: 'rate' };
    if (response.status === 503) {
      status = null;
      return { ok: false, reason: 'unavailable' };
    }
    if (!response.ok) return { ok: false, reason: 'error' };
    const body = (await response.json()) as ScoutAnswerWire;
    if (typeof body.answer !== 'string' || !Array.isArray(body.citations)) return { ok: false, reason: 'error' };
    return { ok: true, answer: body.answer, items: body.citations.map(toItem), cached: body.cached === true };
  } catch {
    return { ok: false, reason: 'error' };
  }
}
