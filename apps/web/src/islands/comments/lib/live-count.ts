/**
 * Live counts of the section titles («12 comments», «3 reviews»). The islands announce every
 * change with `emitCount(kind, delta)`; the title carries its own plural templates
 * (`data-live-count`, `data-count`, `data-count-templates`, `data-count-zero`) rendered by the
 * server in the page locale, so no catalogue is needed here.
 */
export type CountKind = 'comments' | 'reviews';

const EVENT = 'social:count';

export function emitCount(kind: CountKind, delta: number, doc: Document = document): void {
  doc.dispatchEvent(new CustomEvent(EVENT, { detail: { kind, delta } }));
}

function render(element: HTMLElement, count: number): void {
  const lang = element.ownerDocument.documentElement.lang || 'en';
  let templates: Record<string, string> = {};
  try {
    templates = JSON.parse(element.dataset.countTemplates ?? '{}') as Record<string, string>;
  } catch {
    return;
  }
  if (count === 0 && element.dataset.countZero) {
    element.textContent = element.dataset.countZero;
    return;
  }
  const category = new Intl.PluralRules(lang).select(count);
  const template = templates[category] ?? templates.other;
  if (!template) return;
  element.textContent = template.replace('{n}', new Intl.NumberFormat(lang).format(count));
}

export function initLiveCounts(root: ParentNode, doc: Document = document): void {
  doc.addEventListener(EVENT, (event) => {
    const { kind, delta } = (event as CustomEvent<{ kind: CountKind; delta: number }>).detail;
    for (const element of root.querySelectorAll<HTMLElement>(`[data-live-count="${kind}"]`)) {
      const current = Number(element.dataset.count);
      if (!Number.isFinite(current)) continue;
      const next = Math.max(0, current + delta);
      element.dataset.count = String(next);
      render(element, next);
    }
  });
}
