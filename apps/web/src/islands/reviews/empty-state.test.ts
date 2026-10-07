// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { syncServerEmptyState } from './empty-state.ts';

function mountPage(): HTMLElement {
  document.body.innerHTML = `
    <section>
      <div data-sheet-body>
        <p data-review-empty>No reviews yet.</p>
        <div data-review-list-island id="target"></div>
        <div data-island="reviews"></div>
      </div>
    </section>`;
  return document.getElementById('target') as HTMLElement;
}

describe('syncServerEmptyState', () => {
  it('hides the server «No reviews yet» line while the island shows reviews and restores it when empty', () => {
    const target = mountPage();
    const empty = document.querySelector<HTMLElement>('[data-review-empty]') as HTMLElement;
    syncServerEmptyState(target, true);
    expect(empty.hidden).toBe(true);
    syncServerEmptyState(target, false);
    expect(empty.hidden).toBe(false);
  });

  it('does nothing without a server empty state or a target', () => {
    document.body.innerHTML = '<section><div id="target"></div></section>';
    expect(() => syncServerEmptyState(document.getElementById('target'), true)).not.toThrow();
    expect(() => syncServerEmptyState(null, true)).not.toThrow();
  });
});
