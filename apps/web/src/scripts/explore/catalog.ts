/**
 * Catalogue enhancement (`/`, `/mods`, category and tag pages). The page already works without
 * JavaScript (a GET form and plain links); this module only:
 *
 * - submits the toolbar when a select or a toggle changes (the search box submits on Enter);
 * - leaves empty and default values out of the submitted URL (`?q=&category=&type=mod&sort=new`
 *   becomes `/mods`), so the address stays the clean canonical one without a redirect;
 * - wires the arrows of the featured carousel.
 */

const FORM = '[data-catalog-form]';
/** Value of a control that means «nothing chosen» (the server's default). */
function defaultOf(name: string, form: HTMLFormElement): string {
  if (name === 'type') return 'mod';
  if (name === 'sort') {
    const query = form.elements.namedItem('q');
    return query instanceof HTMLInputElement && query.value.trim() !== '' ? 'relevance' : 'new';
  }
  return '';
}

const TRIMMED = ['q', 'category', 'type', 'sort'] as const;

let bound = false;

/** Disables the controls whose value is the default, until the page is shown again (bfcache). */
function trimForm(form: HTMLFormElement): void {
  const disabled: HTMLInputElement[] = [];
  for (const name of TRIMMED) {
    for (const control of Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(`[name="${name}"]`))) {
      if (control.type === 'hidden' || control.disabled) continue;
      if (control.value.trim() === defaultOf(name, form)) {
        control.disabled = true;
        disabled.push(control as HTMLInputElement);
      }
    }
  }
  if (disabled.length > 0) {
    const restore = () => {
      for (const control of disabled) control.disabled = false;
      window.removeEventListener('pageshow', restore);
    };
    window.addEventListener('pageshow', restore);
  }
}

function bindForm(form: HTMLFormElement): void {
  form.addEventListener('submit', () => trimForm(form));
  form.addEventListener('change', (event) => {
    const target = event.target;
    if (target instanceof HTMLSelectElement || (target instanceof HTMLInputElement && target.type === 'checkbox')) {
      // The phone's «Filters» switch only opens the panel.
      if (target.id === 'catalog-filters-toggle') return;
      form.requestSubmit();
    }
  });
}

function bindCarousel(root: ParentNode): void {
  const strip = root.querySelector<HTMLElement>('[data-featured]');
  const track = strip?.querySelector<HTMLElement>('[data-featured-track]');
  if (!strip || !track) return;
  const buttons = strip.querySelectorAll<HTMLButtonElement>('[data-featured-nav]');
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    const position = Math.abs(track.scrollLeft);
    for (const button of buttons) {
      const prev = button.dataset.featuredNav === 'prev';
      button.disabled = prev ? position <= 2 : position >= max;
      button.style.opacity = button.disabled ? '0' : '';
      button.style.pointerEvents = button.disabled ? 'none' : '';
    }
  };
  for (const button of buttons) {
    button.hidden = false;
    button.addEventListener('click', () => {
      const direction = button.dataset.featuredNav === 'prev' ? -1 : 1;
      const rtl = getComputedStyle(track).direction === 'rtl' ? -1 : 1;
      track.scrollBy({ left: direction * rtl * track.clientWidth * 0.9, behavior: 'smooth' });
    });
  }
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

export function initCatalog(win: Window = window): void {
  if (bound) return;
  bound = true;
  const doc = win.document;
  doc.documentElement.dataset.catalogJs = '';
  const form = doc.querySelector<HTMLFormElement>(FORM);
  if (form) bindForm(form);
  bindCarousel(doc);
}
