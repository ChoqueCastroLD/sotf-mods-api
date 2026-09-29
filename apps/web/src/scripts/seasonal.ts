/**
 * Seasons and December snow (PLAN §3.7). `data-season` on `<html>` only retints `--color-topo`
 * and small details (the primary colour never changes). Snow is the legacy tradition: a canvas
 * started when the browser is idle, paused while the tab is hidden, off with reduced motion and
 * switchable from the footer (the choice is remembered).
 */

export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

export const SNOW_STORAGE_KEY = 'sotf-snow';

/** Meteorological season of the northern hemisphere (the island's climate). */
export function seasonOf(date: Date): Season {
  const month = date.getMonth();
  if (month === 11 || month <= 1) return 'winter';
  if (month <= 4) return 'spring';
  if (month <= 7) return 'summer';
  return 'autumn';
}

export function isSnowSeason(date: Date): boolean {
  return date.getMonth() === 11;
}

function snowPreference(): boolean {
  try {
    return localStorage.getItem(SNOW_STORAGE_KEY) !== 'off';
  } catch {
    return true;
  }
}

function saveSnowPreference(on: boolean): void {
  try {
    if (on) localStorage.removeItem(SNOW_STORAGE_KEY);
    else localStorage.setItem(SNOW_STORAGE_KEY, 'off');
  } catch {
    // Storage unavailable: the toggle still works for this view.
  }
}

interface Flake {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
}

/** Starts the snow canvas; returns a stop function. */
export function startSnow(doc: Document = document): () => void {
  const win = doc.defaultView;
  if (!win) return () => {};
  const canvas = doc.createElement('canvas');
  canvas.dataset.snowCanvas = '';
  canvas.setAttribute('aria-hidden', 'true');
  doc.body.append(canvas);
  const context = canvas.getContext('2d');
  if (!context) {
    canvas.remove();
    return () => {};
  }
  let width = 0;
  let height = 0;
  const flakes: Flake[] = [];
  const resize = () => {
    const ratio = Math.min(win.devicePixelRatio || 1, 2);
    width = win.innerWidth;
    height = win.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const target = Math.min(120, Math.round((width * height) / 14_000));
    while (flakes.length < target) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 2.2,
        speed: 0.3 + Math.random() * 0.9,
        drift: 0.2 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      });
    }
    flakes.length = target;
  };
  resize();

  let frame = 0;
  let running = true;
  const tick = (time: number) => {
    if (!running) return;
    context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgba(245, 244, 236, 0.8)';
    context.beginPath();
    for (const flake of flakes) {
      flake.y += flake.speed;
      flake.x += Math.sin(time / 1600 + flake.phase) * flake.drift * 0.4;
      if (flake.y > height + 4) {
        flake.y = -4;
        flake.x = Math.random() * width;
      }
      context.moveTo(flake.x + flake.r, flake.y);
      context.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
    }
    context.fill();
    frame = win.requestAnimationFrame(tick);
  };
  const onVisibility = () => {
    if (doc.hidden) {
      running = false;
      win.cancelAnimationFrame(frame);
    } else if (!running) {
      running = true;
      frame = win.requestAnimationFrame(tick);
    }
  };
  win.addEventListener('resize', resize, { passive: true });
  doc.addEventListener('visibilitychange', onVisibility);
  frame = win.requestAnimationFrame(tick);
  return () => {
    running = false;
    win.cancelAnimationFrame(frame);
    win.removeEventListener('resize', resize);
    doc.removeEventListener('visibilitychange', onVisibility);
    canvas.remove();
  };
}

export function initSeasonal(doc: Document = document, now: Date = new Date()): void {
  doc.documentElement.dataset.season = seasonOf(now);
  if (!isSnowSeason(now)) return;
  const reduced = doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? true;
  const toggle = doc.querySelector<HTMLButtonElement>('[data-snow-toggle]');
  if (reduced) return;
  let stop: (() => void) | null = null;
  const set = (on: boolean) => {
    if (on && !stop) stop = startSnow(doc);
    if (!on && stop) {
      stop();
      stop = null;
    }
    toggle?.setAttribute('aria-pressed', String(on));
  };
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const on = toggle.getAttribute('aria-pressed') !== 'true';
      saveSnowPreference(on);
      set(on);
    });
  }
  set(snowPreference());
}
