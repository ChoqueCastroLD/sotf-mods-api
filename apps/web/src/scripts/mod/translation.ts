/**
 * «Show original / Show translation» toggle of the short description (T1-25). The page renders the
 * visitor's translation and the original side by side (the original hidden); the toggle swaps them
 * and the note under the text. Labels come from `data-*` attributes rendered in the page locale.
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
      text.hidden = (text.dataset.translationText === 'original') !== showOriginal;
    }
    const note = block.querySelector<HTMLElement>('[data-translation-note]');
    if (note) note.textContent = (showOriginal ? note.dataset.noteOriginal : note.dataset.noteTranslated) ?? '';
    button.textContent = (showOriginal ? button.dataset.labelTranslated : button.dataset.labelOriginal) ?? '';
  });
}
