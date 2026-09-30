/**
 * Citable FAQ of the landing (research/03 §6.1 «answer-first, GEO», PLAN §4.5 `FAQPage`) in the
 * 13 locales. Answers lead with the answer in 40–60 words; the `catalog` answer carries live
 * figures (`{mods}`, `{builds}`, `{creators}`, `{downloads}`, `{date}`, preformatted in the page
 * language) and is left out when the site statistics are unavailable, so the page never shows
 * an undated or empty figure.
 *
 * Every locale file has exactly the English ids (checked by `faqFor`'s types at build time and
 * by the landing e2e); question order is `FAQ_ORDER`.
 */
import type { Locale } from '@sotf/i18n';
import de from './de.json' with { type: 'json' };
import en from './en.json' with { type: 'json' };
import es from './es.json' with { type: 'json' };
import fr from './fr.json' with { type: 'json' };
import it from './it.json' with { type: 'json' };
import ja from './ja.json' with { type: 'json' };
import nl from './nl.json' with { type: 'json' };
import pl from './pl.json' with { type: 'json' };
import pt from './pt.json' with { type: 'json' };
import ru from './ru.json' with { type: 'json' };
import sv from './sv.json' with { type: 'json' };
import tr from './tr.json' with { type: 'json' };
import zh from './zh.json' with { type: 'json' };

export type FaqId = keyof typeof en;

interface FaqEntry {
  question: string;
  answer: string;
}

type FaqCatalog = Readonly<Record<FaqId, FaqEntry>>;

const CATALOGS: Readonly<Record<Locale, FaqCatalog>> = { en, es, de, fr, it, nl, pl, pt, ru, sv, tr, zh, ja };

export const FAQ_ORDER: readonly FaqId[] = [
  'install',
  'free',
  'multiplayer',
  'patch',
  'bepinex',
  'safe',
  'kits',
  'catalog',
];

/** Where each answer continues (locale-less paths). */
export const FAQ_LINKS: Readonly<Record<FaqId, string>> = {
  install: '/install',
  free: '/about',
  multiplayer: '/best/multiplayer-mods',
  patch: '/patch-radar',
  bepinex: '/install',
  safe: '/content-policy',
  kits: '/kits',
  catalog: '/mods',
};

/** Live figures of the `catalog` answer, already formatted for the page language. */
export interface FaqFigures {
  mods: string;
  builds: string;
  creators: string;
  downloads: string;
  date: string;
}

export interface FaqItem {
  id: FaqId;
  question: string;
  answer: string;
  path: string;
}

function fill(template: string, figures: FaqFigures): string {
  return template.replace(/\{(mods|builds|creators|downloads|date)\}/g, (_, name: keyof FaqFigures) => figures[name]);
}

/** The FAQ of a locale, in display order; `catalog` only with figures. */
export function faqFor(locale: Locale, figures: FaqFigures | null): FaqItem[] {
  const catalog = CATALOGS[locale];
  const items: FaqItem[] = [];
  for (const id of FAQ_ORDER) {
    const entry = catalog[id];
    if (id === 'catalog') {
      if (!figures) continue;
      items.push({ id, question: entry.question, answer: fill(entry.answer, figures), path: FAQ_LINKS[id] });
      continue;
    }
    items.push({ id, question: entry.question, answer: entry.answer, path: FAQ_LINKS[id] });
  }
  return items;
}
