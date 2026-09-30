/**
 * Scroll-spy of a section rail (install guide, research/03 §6.7 «sticky rail with progress»):
 * marks the link of the section being read with `aria-current="location"` and fills the progress
 * bar with how far the guide has been read. Progressive enhancement only: without it, the rail is
 * a plain list of anchors. Honors `prefers-reduced-motion` when scrolling the mobile stepper.
 */
export function initScrollSpy(root: ParentNode = document): void {
  for (const nav of root.querySelectorAll<HTMLElement>('[data-scroll-spy]')) bind(nav);
}

function bind(nav: HTMLElement): void {
  if (nav.dataset.scrollSpyBound === 'true') return;
  nav.dataset.scrollSpyBound = 'true';
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
  const sections = links
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length === 0) return;
  const bar = nav.querySelector<HTMLElement>('[data-scroll-progress]');
  const article = document.querySelector<HTMLElement>(nav.dataset.scrollSpy || 'main');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current: HTMLAnchorElement | null = null;
  let frame = 0;

  const update = () => {
    frame = 0;
    const offset = window.innerHeight * 0.3;
    let active: HTMLElement | undefined;
    for (const section of sections) {
      if (section.getBoundingClientRect().top - offset <= 0) active = section;
    }
    const link = active ? (links.find((candidate) => candidate.hash === `#${active.id}`) ?? null) : null;
    if (link !== current) {
      current?.removeAttribute('aria-current');
      link?.setAttribute('aria-current', 'location');
      current = link;
      // Keep the active step visible in the horizontal (mobile) stepper.
      const list = link?.closest<HTMLElement>('[data-scroll-rail]');
      if (link && list && list.scrollWidth > list.clientWidth) {
        list.scrollTo({
          left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2,
          behavior: reduced.matches ? 'auto' : 'smooth',
        });
      }
    }
    if (bar && article) {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const read = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
      bar.style.transform = `scaleX(${read.toFixed(3)})`;
      bar.parentElement?.setAttribute('aria-valuenow', String(Math.round(read * 100)));
    }
  };
  const schedule = () => {
    if (frame === 0) frame = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  update();
}
