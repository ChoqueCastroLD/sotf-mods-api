/**
 * Scroll-spy of `SectionNav.astro`: marks the link of the section the reader is in
 * (`aria-current="true"`), keeps it centred in the pill strip (the strip only, never the page) and
 * scrolls smoothly (instantly with reduced motion) when a pill is tapped.
 */

const PHONE = '(max-width: 47.99rem)';
/** Header (4 rem) + the strip itself (~3.5 rem). */
const OFFSET_PX = 128;

export function initSectionNav(root: ParentNode = document, win: Window = window): void {
  const nav = root.querySelector<HTMLElement>('[data-section-nav]');
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[data-section-link]'));
  const sections = links
    .map((link) => win.document.getElementById(link.dataset.sectionLink ?? ''))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length === 0) return;
  const strip = nav.querySelector<HTMLElement>('ul');

  let current = '';
  const mark = (id: string) => {
    if (id === current) return;
    current = id;
    for (const link of links) {
      if (link.dataset.sectionLink === id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    const active = links.find((link) => link.dataset.sectionLink === id);
    if (active && strip && win.matchMedia(PHONE).matches) {
      const left = active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2;
      strip.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  };

  let frame = 0;
  const update = () => {
    frame = 0;
    // The last section whose top passed the sticky bars; the first one before any did.
    let id = sections[0]?.id ?? '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top - OFFSET_PX <= 8) id = section.id;
    }
    // At the very bottom the last section wins even when it is short.
    if (win.innerHeight + win.scrollY >= win.document.documentElement.scrollHeight - 4) id = sections.at(-1)?.id ?? id;
    mark(id);
  };
  win.addEventListener(
    'scroll',
    () => {
      if (!frame) frame = win.requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();

  nav.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-section-link]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    const target = win.document.getElementById(link.dataset.sectionLink ?? '');
    if (!target) return;
    event.preventDefault();
    target.dispatchEvent(new Event('fold:open'));
    const reduce = win.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = target.getBoundingClientRect().top + win.scrollY - OFFSET_PX + 4;
    win.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${target.id}`);
  });
}
