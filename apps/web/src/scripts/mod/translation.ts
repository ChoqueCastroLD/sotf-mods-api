/**
 * «Show original / Show translation» toggle (T1-25). The page renders the visitor's translation
 * and the original stacked in one grid cell (see `TranslatedText.astro`), so swapping them never
 * moves the layout. The visible one is readable; the other one is `invisible`, `inert` and
 * `aria-hidden`. Labels come from `data-*` attributes rendered in the page locale.
 */
export function initTranslation(root: HTMLElement): void {
  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLElement>('[data-translation-toggle]');
    const block = button?.closest<HTMLElement>('[data-translation]');
    if (!button || !block) return;
    const showOriginal = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(showOriginal));
    for (const text of block.querySelectorAll<HTMLElement>('[data-translation-text]')) {
      const visible = (text.dataset.translationText === 'original') === showOriginal;
      text.classList.toggle('invisible', !visible);
      text.inert = !visible;
      if (visible) text.removeAttribute('aria-hidden');
      else text.setAttribute('aria-hidden', 'true');
    }
    const note = block.querySelector<HTMLElement>('[data-translation-note]');
    if (note) note.textContent = (showOriginal ? note.dataset.noteOriginal : note.dataset.noteTranslated) ?? '';
    button.textContent = (showOriginal ? button.dataset.labelTranslated : button.dataset.labelOriginal) ?? '';
  });
}
