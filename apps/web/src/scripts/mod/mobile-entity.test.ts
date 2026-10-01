// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import { carouselIndex } from './carousel.ts';
import { initFolds } from './fold.ts';
import { initSectionNav } from './section-nav.ts';
import { initSheetSections } from './sheets.ts';

function phone(matches: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: (query: string) => ({
      matches: query.includes('max-width') ? matches : false,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
  });
}

beforeEach(() => {
  Element.prototype.scrollIntoView = () => {};
  Element.prototype.scrollTo = () => {};
  document.body.innerHTML = '';
  window.history.replaceState(null, '', '/');
});

describe('collapsible sections (phones)', () => {
  const markup = `
    <main>
      <section id="faq" data-fold="closed"><h2 id="t">Questions</h2><p id="a">Answer</p></section>
      <section id="graph" data-fold><h2>Graph</h2><p>Body</p></section>
    </main>`;

  it('turns the heading into a disclosure button and hides closed sections', () => {
    phone(true);
    document.body.innerHTML = markup;
    initFolds(document.body);
    const button = document.querySelector<HTMLButtonElement>('#faq h2 button');
    expect(button?.getAttribute('aria-expanded')).toBe('false');
    const panel = document.getElementById(button?.getAttribute('aria-controls') ?? '');
    expect(panel?.hidden).toBe(true);
    expect(panel?.contains(document.getElementById('a'))).toBe(true);
    // Sections without `closed` start open.
    expect(document.querySelector('#graph h2 button')?.getAttribute('aria-expanded')).toBe('true');
    button?.click();
    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(panel?.hidden).toBe(false);
  });

  it('leaves desktops alone', () => {
    phone(false);
    document.body.innerHTML = markup;
    initFolds(document.body);
    expect(document.querySelector('button')).toBeNull();
  });

  it('opens a closed section when the hash points inside it', () => {
    phone(true);
    window.history.replaceState(null, '', '/#a');
    document.body.innerHTML = markup;
    initFolds(document.body);
    expect(document.querySelector('#faq h2 button')?.getAttribute('aria-expanded')).toBe('true');
  });
});

describe('comments and reviews sheets (phones)', () => {
  const markup = `
    <section id="comments" data-sheet-section="comments-sheet">
      <h2>Comments</h2>
      <div data-sheet-preview hidden><ol data-sheet-preview-list></ol></div>
      <div data-sheet-body>
        <ol data-comment-list>
          <li id="comment-1">one<button>reply</button></li>
          <li id="comment-2">two</li>
          <li id="comment-3">three</li>
        </ol>
        <div data-island="comments"></div>
      </div>
    </section>
    <dialog id="comments-sheet"><section data-sheet-slot="comments-sheet"></section></dialog>`;

  it('moves the body into the sheet and keeps a two-item preview without ids or controls', () => {
    phone(true);
    document.body.innerHTML = markup;
    initSheetSections(document.body);
    const slot = document.querySelector('[data-sheet-slot]');
    expect(slot?.querySelectorAll('[data-comment-list] > li')).toHaveLength(3);
    expect(slot?.querySelector<HTMLElement>('[data-island="comments"]')?.dataset.layout).toBe('sheet');
    const preview = document.querySelector<HTMLElement>('[data-sheet-preview]');
    expect(preview?.hidden).toBe(false);
    const clones = preview?.querySelectorAll('[data-sheet-preview-list] > li') ?? [];
    expect(clones).toHaveLength(2);
    expect(preview?.querySelector('[id], button')).toBeNull();
    expect(document.querySelector('#comments > [data-sheet-body]')).toBeNull();
  });

  it('does nothing on larger screens', () => {
    phone(false);
    document.body.innerHTML = markup;
    initSheetSections(document.body);
    expect(document.querySelector('[data-sheet-slot] *')).toBeNull();
    expect(document.querySelector<HTMLElement>('[data-sheet-preview]')?.hidden).toBe(true);
  });
});

describe('section navigation', () => {
  it('marks the section the reader is in as current', () => {
    phone(true);
    window.scrollTo = () => {};
    document.body.innerHTML = `
      <nav data-section-nav><ul><li><a href="#a" data-section-link="a">A</a></li><li><a href="#b" data-section-link="b">B</a></li></ul></nav>
      <section id="a"></section><section id="b"></section>`;
    const tops: Record<string, number> = { a: -200, b: 600 };
    for (const section of document.querySelectorAll('section')) {
      section.getBoundingClientRect = () => ({ top: tops[section.id] ?? 0 }) as DOMRect;
    }
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 5000 });
    initSectionNav(document, window);
    expect(document.querySelector('[data-section-link="a"]')?.getAttribute('aria-current')).toBe('true');
    expect(document.querySelector('[data-section-link="b"]')?.hasAttribute('aria-current')).toBe(false);
  });
});

describe('carousel', () => {
  it('derives the slide from the scroll position', () => {
    document.body.innerHTML =
      '<ul id="t"><li data-carousel-slide></li><li data-carousel-slide></li><li data-carousel-slide></li></ul>';
    const track = document.getElementById('t') as HTMLElement;
    Object.defineProperty(track, 'clientWidth', { value: 300 });
    track.scrollLeft = 610;
    expect(carouselIndex(track)).toBe(2);
    track.scrollLeft = 0;
    expect(carouselIndex(track)).toBe(0);
    track.scrollLeft = 5000;
    expect(carouselIndex(track)).toBe(2);
  });
});
