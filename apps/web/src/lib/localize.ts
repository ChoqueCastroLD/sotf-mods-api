/**
 * Translated titles for the cards of a page. The catalogue endpoints return the original text; the
 * pages of a visitor whose language differs from the listing's ask `translations.forMods` once for
 * every card they hold and hang the answer on the card as `localized` (see `ModCardDTO`). The
 * card components then show the translated title large and the original below it.
 *
 * Fail-soft by design: a slow or unavailable API leaves the original text, never an error page.
 */

import type { Locale } from '@sotf/contracts/common';
import { TRANSLATION_BATCH_MAX } from '@sotf/contracts/translations';
import { optional, serverApi } from './api.ts';

interface CardLike {
  id: number;
  name: string;
  canonicalPath: string;
  shortDescription: string;
  localized?: { locale: string; name: string | null; shortDescription: string | null } | undefined;
}

const MAX_DEPTH = 7;
/** Budget of the lookup; the page renders with the originals when it is slower. */
const LOOKUP_TIMEOUT_MS = 900;

function isCard(value: object): value is CardLike {
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'number' &&
    typeof v.name === 'string' &&
    typeof v.canonicalPath === 'string' &&
    typeof v.shortDescription === 'string'
  );
}

/** Every card-shaped object inside `data` (arrays and plain objects, bounded depth, no cycles). */
export function collectCards(data: unknown): CardLike[] {
  const found = new Map<number, CardLike[]>();
  const seen = new WeakSet<object>();
  const visit = (value: unknown, depth: number): void => {
    if (value === null || typeof value !== 'object' || depth > MAX_DEPTH || seen.has(value)) return;
    seen.add(value);
    if (Array.isArray(value)) {
      for (const item of value) visit(item, depth + 1);
      return;
    }
    if (isCard(value)) {
      const list = found.get(value.id) ?? [];
      list.push(value);
      found.set(value.id, list);
    }
    for (const item of Object.values(value)) visit(item, depth + 1);
  };
  visit(data, 0);
  return [...found.values()].flat();
}

/**
 * Attaches `localized` to every card inside `data` that has a translation in `locale`. Mutates the
 * cards in place (they are per-request objects) and returns `data` for chaining.
 */
export async function localizeCards<T>(data: T, locale: Locale): Promise<T> {
  const cards = collectCards(data);
  for (const card of cards) delete card.localized;
  if (cards.length === 0 || locale === 'en') return data;
  const ids = [...new Set(cards.map((c) => c.id))];
  const api = serverApi();
  const answers = await Promise.all(
    chunk(ids, TRANSLATION_BATCH_MAX).map((part) =>
      optional(
        (signal) => api.translations.forMods({ query: { ids: part.join(','), locale } }, { signal }),
        LOOKUP_TIMEOUT_MS,
      ),
    ),
  );
  const byId = new Map(answers.flatMap((a) => a?.items ?? []).map((t) => [t.id, t]));
  for (const card of cards) {
    const t = byId.get(card.id);
    if (t && (t.name || t.shortDescription)) {
      card.localized = { locale, name: t.name, shortDescription: t.shortDescription };
    } else {
      delete card.localized;
    }
  }
  return data;
}

function chunk<T>(list: readonly T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}
