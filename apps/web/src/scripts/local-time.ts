/**
 * Dates in the visitor's time zone. Pages are rendered once for everyone (and edge-cached), so the
 * server writes dates in UTC: an upload on a US evening would read as «tomorrow». Every date that
 * marks itself with `<time datetime="<ISO>" data-local="date|date-long|datetime">` is re-formatted
 * here with the browser's time zone and the page language.
 *
 * - Only the text changes, and only when it differs (a UTC visitor sees no change).
 * - Dates added later (comments, reviews, islands) are picked up by a MutationObserver; our own
 *   writes are recognised through `data-local-text`, so they never loop.
 * - Explicit UTC deadlines (jams) do not opt in.
 */

type Kind = 'date' | 'date-long' | 'datetime';

const OPTIONS: Record<Kind, Intl.DateTimeFormatOptions> = {
  date: { dateStyle: 'medium' },
  'date-long': { dateStyle: 'long' },
  datetime: { dateStyle: 'medium', timeStyle: 'short' },
};

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatter(lang: string, kind: Kind): Intl.DateTimeFormat {
  const key = `${lang}|${kind}`;
  let format = formatters.get(key);
  if (!format) {
    format = new Intl.DateTimeFormat(lang, OPTIONS[kind]);
    formatters.set(key, format);
  }
  return format;
}

function isKind(value: string | undefined): value is Kind {
  return value === 'date' || value === 'date-long' || value === 'datetime';
}

/** Re-formats one marked `<time>` in the browser's time zone (no-op when already done). */
export function localizeTime(element: HTMLTimeElement, lang: string): void {
  const kind = element.dataset.local;
  if (!isKind(kind)) return;
  const iso = element.dateTime || element.getAttribute('datetime') || '';
  const date = new Date(iso);
  if (!iso || Number.isNaN(date.getTime())) return;
  const text = formatter(lang, kind).format(date);
  if (element.dataset.localText === text && element.textContent === text) return;
  element.dataset.localText = text;
  if (element.textContent !== text) element.textContent = text;
  // The hover tooltip (full date and time) follows the same zone.
  if (element.title) element.title = formatter(lang, 'datetime').format(date);
}

export function localizeTimes(root: ParentNode, lang: string): void {
  for (const element of root.querySelectorAll<HTMLTimeElement>('time[data-local]')) localizeTime(element, lang);
}

export function initLocalTime(doc: Document = document): void {
  const lang = doc.documentElement.lang || 'en';
  localizeTimes(doc, lang);
  if (typeof MutationObserver !== 'function') return;
  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      localizeTimes(doc, lang);
    });
  });
  observer.observe(doc.body, { childList: true, subtree: true, characterData: true });
}
