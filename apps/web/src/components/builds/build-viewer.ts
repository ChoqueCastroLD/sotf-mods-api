/**
 * Lazy 3D viewer of the build page (T1-06). This entry is tiny and ships with the page; three.js
 * and the scene (`build-viewer-scene.ts`) are imported only when «Explore in 3D» is pressed. The
 * top-down SVG stays as the fallback when WebGL, the network or the geometry fail.
 */
import {
  viewer_back,
  viewer_controls,
  viewer_explore,
  viewer_failed,
  viewer_loading,
  viewer_no_webgl,
  viewer_sampled,
} from '@sotf/i18n/messages';

interface Handle {
  dispose(): void;
}

function mount(root: HTMLElement): void {
  const open = root.querySelector<HTMLButtonElement>('[data-viewer-open]');
  const frame = root.querySelector<HTMLElement>('[data-viewer-frame]');
  const svg = root.querySelector<HTMLElement>('[data-viewer-svg]');
  const status = root.querySelector<HTMLElement>('[data-viewer-status]');
  if (!open || !frame || !svg || !status) return;
  const id = Number(root.dataset.modId);
  const name = root.dataset.name ?? '';
  const number = new Intl.NumberFormat(document.documentElement.lang || 'en');
  const label = open.lastChild;
  let handle: Handle | null = null;
  let busy = false;

  const say = (text: string) => {
    status.textContent = text;
  };
  const setLabel = (text: string) => {
    if (label) label.textContent = text;
  };

  function close() {
    handle?.dispose();
    handle = null;
    if (svg) svg.hidden = false;
    setLabel(viewer_explore());
    say('');
    open?.setAttribute('aria-pressed', 'false');
    open?.focus();
  }

  open.addEventListener('click', async () => {
    if (busy) return;
    if (handle) {
      close();
      return;
    }
    busy = true;
    open.disabled = true;
    say(viewer_loading());
    try {
      const scene = await import('./build-viewer-scene.ts');
      const result = await scene.mountScene({
        host: frame,
        modId: id,
        name,
        reduceMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
      });
      if (!result) {
        say(viewer_no_webgl());
        return;
      }
      handle = result.handle;
      svg.hidden = true;
      setLabel(viewer_back());
      open.setAttribute('aria-pressed', 'true');
      const parts = [viewer_controls()];
      if (result.shown < result.total) {
        parts.push(viewer_sampled({ shown: number.format(result.shown), total: number.format(result.total) }));
      }
      say(parts.join(' '));
    } catch {
      say(viewer_failed());
    } finally {
      busy = false;
      open.disabled = false;
    }
  });
}

export function initBuildViewer(): void {
  for (const root of document.querySelectorAll<HTMLElement>('[data-build-viewer]')) mount(root);
}
