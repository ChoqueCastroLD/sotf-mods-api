// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { localizeTimes } from './local-time.ts';

// A US evening upload: 03:30 UTC on Nov 19 is still Nov 18 in New York.
const ISO = '2026-11-19T03:30:00.000Z';

function page(html: string): HTMLElement {
  const root = document.createElement('div');
  root.innerHTML = html;
  return root;
}

function inZone<T>(zone: string, run: () => T): T {
  const original = Intl.DateTimeFormat;
  // Pin the "browser" zone: every formatter without an explicit zone uses `zone`.
  // A real constructor (called with `new`) that pins the zone unless one is given.
  class Pinned extends original {
    constructor(locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
      super(locales, { timeZone: zone, ...options });
    }
  }
  globalThis.Intl.DateTimeFormat = Pinned as unknown as typeof Intl.DateTimeFormat;
  try {
    return run();
  } finally {
    globalThis.Intl.DateTimeFormat = original;
  }
}

describe('dates in the visitor time zone', () => {
  it('shows the local day instead of the UTC one', () => {
    const root = page(`<p>Updated <time datetime="${ISO}" data-local="date">Nov 19, 2026</time></p>`);
    inZone('America/New_York', () => localizeTimes(root, 'en'));
    expect(root.textContent).toBe('Updated Nov 18, 2026');
  });

  it('leaves unmarked dates, explicit UTC deadlines, alone', () => {
    const root = page(`<time datetime="${ISO}">Nov 19, 2026, 3:30 AM UTC</time>`);
    inZone('America/New_York', () => localizeTimes(root, 'en'));
    expect(root.textContent).toBe('Nov 19, 2026, 3:30 AM UTC');
  });

  it('formats date and time in the page language and updates the tooltip', () => {
    const root = page(`<time datetime="${ISO}" data-local="datetime" title="x">x</time>`);
    inZone('Europe/Madrid', () => localizeTimes(root, 'es'));
    const time = root.querySelector('time') as HTMLTimeElement;
    expect(time.textContent).toContain('19 nov 2026');
    expect(time.textContent).toContain('4:30');
    expect(time.title).toContain('4:30');
  });
});
