// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { dropServerCopy } from './mount-point.ts';

describe('dropServerCopy', () => {
  it('removes the server list but keeps the mount when both sit in a wrapper (sheet body)', () => {
    document.body.innerHTML = `
      <section id="comments">
        <h2>9 comments</h2>
        <div data-sheet-preview hidden></div>
        <div data-sheet-body>
          <ol data-comment-list><li id="comment-1">a</li></ol>
          <p data-keep id="hint">Share a log</p>
          <div data-island="comments" id="mount"></div>
        </div>
      </section>`;
    dropServerCopy(document.getElementById('mount') as HTMLElement);
    expect(document.getElementById('mount')?.isConnected).toBe(true);
    expect(document.querySelector('[data-comment-list]')).toBeNull();
    expect(document.getElementById('hint')).not.toBeNull();
    expect(document.querySelector('h2')).not.toBeNull();
  });

  it('keeps a header row with the title (build pages)', () => {
    document.body.innerHTML = `
      <section>
        <div id="head"><h2>Comments</h2><p>3</p></div>
        <ul><li>x</li></ul>
        <p id="more">2 more</p>
        <div data-island="comments" id="mount"></div>
      </section>`;
    dropServerCopy(document.getElementById('mount') as HTMLElement);
    expect(document.getElementById('head')).not.toBeNull();
    expect(document.querySelector('ul')).toBeNull();
    expect(document.getElementById('more')).toBeNull();
    expect(document.getElementById('mount')?.isConnected).toBe(true);
  });
});
