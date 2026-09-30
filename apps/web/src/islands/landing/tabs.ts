/**
 * Quick-filter tabs of «Find your next mod»: all panels are already in the HTML, so a switch only
 * toggles `hidden` (instant, no request, no layout shift), keeps the CTA on the active sort and
 * follows the WAI-ARIA tabs pattern (roving tabindex, arrows, Home/End).
 */
export function initPicks(doc: Document = document): void {
  const root = doc.querySelector<HTMLElement>('[data-picks]');
  if (!root) return;
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-pick-tab]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-pick-panel]')];
  const cta = root.querySelector<HTMLAnchorElement>('[data-picks-cta]');
  const hint = root.querySelector<HTMLElement>('[data-pick-hint]');
  const base = root.dataset.href ?? '/mods';

  const select = (tab: HTMLButtonElement, focus: boolean): void => {
    const sort = tab.dataset.pickTab ?? 'trending';
    for (const other of tabs) {
      const on = other === tab;
      other.setAttribute('aria-selected', String(on));
      other.tabIndex = on ? 0 : -1;
    }
    for (const panel of panels) panel.hidden = panel.dataset.pickPanel !== sort;
    hint?.classList.toggle('invisible', sort !== 'trending');
    if (cta) cta.href = `${base}?sort=${sort}`;
    if (focus) tab.focus();
  };

  for (const tab of tabs) tab.addEventListener('click', () => select(tab, false));
  root.querySelector('[role="tablist"]')?.addEventListener('keydown', (event) => {
    const key = (event as KeyboardEvent).key;
    const at = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
    const rtl = doc.dir === 'rtl' || getComputedStyle(root).direction === 'rtl';
    let next = -1;
    if (key === 'ArrowRight') next = at + (rtl ? -1 : 1);
    else if (key === 'ArrowLeft') next = at + (rtl ? 1 : -1);
    else if (key === 'Home') next = 0;
    else if (key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    const target = tabs[(next + tabs.length) % tabs.length];
    if (target) select(target, true);
  });
}
