// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import { initProse } from './prose.ts';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="prose">
      <span class="md-spoiler" role="button" tabindex="0" aria-label="Spoiler" aria-expanded="false">secret</span>
      <a class="md-youtube-link" data-youtube-id="dQw4w9WgXcQ" data-youtube-start="42" href="https://youtu.be/dQw4w9WgXcQ"></a>
    </div>`;
});

describe('stored Markdown behaviour on any page (WP-15, WP-62, WP-70)', () => {
  it('reveals spoilers with the keyboard and binds once per document', () => {
    initProse(null);
    initProse(document.body, 'Video player');
    const spoiler = document.querySelector<HTMLElement>('.md-spoiler');
    spoiler?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(spoiler?.getAttribute('aria-expanded')).toBe('true');
    expect(spoiler?.hasAttribute('role')).toBe(false);
    expect(spoiler?.hasAttribute('aria-label')).toBe(false);
    expect(spoiler?.getAttribute('tabindex')).toBe('-1');
  });

  it('swaps the YouTube facade for one nocookie player titled with the localised name', () => {
    initProse(null, 'Reproductor de vídeo');
    document
      .querySelector('a.md-youtube-link')
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    const frames = document.querySelectorAll('iframe');
    expect(frames).toHaveLength(1);
    expect(frames[0]?.src).toBe('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&start=42');
    expect(frames[0]?.title).toBe('Reproductor de vídeo');
    expect(document.querySelector('a.md-youtube-link')).toBeNull();
  });
});
