// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest';
import { PULL_THRESHOLD_PX, pullDistance, pullState } from '../../scripts/pull-to-refresh.ts';
import { offlinePageFor } from '../../scripts/service-worker.ts';
import { isBackNavigation } from '../../scripts/view-transitions.ts';
import { IOS_SPLASH_SCREENS, PULL_TO_REFRESH_TEMPLATES, SPLASH_SIZES, splashFile } from '../pwa.ts';
import { HIDE_AFTER_PX, nextScrollDir, SCROLL_THRESHOLD_PX } from './chrome.ts';
import { rubberBand } from './gesture.ts';
import { haptic } from './haptics.ts';
import { isIosDevice } from './install.ts';
import { DISMISS_VELOCITY, resolveRelease } from './sheet.ts';

describe('scroll-aware chrome', () => {
  const base = { viewport: 800, height: 4000 };
  it('hides after scrolling down past the threshold and returns on the first flick up', () => {
    expect(nextScrollDir({ ...base, y: 300, last: 200 })).toBe('down');
    expect(nextScrollDir({ ...base, y: 280, last: 300 })).toBe('up');
  });
  it('ignores jitter, the top of the page and iOS rubber-banding', () => {
    expect(nextScrollDir({ ...base, y: 205, last: 200 })).toBeNull();
    expect(SCROLL_THRESHOLD_PX).toBeGreaterThan(5);
    expect(nextScrollDir({ ...base, y: HIDE_AFTER_PX - 10, last: 0 })).toBe('up');
    expect(nextScrollDir({ ...base, y: -30, last: 0 })).toBeNull();
  });
  it('keeps the chrome reachable at the very bottom', () => {
    expect(nextScrollDir({ ...base, y: 3200, last: 3100 })).toBe('up');
  });
});

describe('sheet release', () => {
  const height = 600;
  it('rests at the nearest snap point after a gentle drag', () => {
    const offsets = [0, 300];
    expect(resolveRelease({ y: 20, velocity: 0, offsets, height })).toEqual({ kind: 'snap', index: 0, offset: 0 });
    expect(resolveRelease({ y: 240, velocity: 0, offsets, height })).toEqual({ kind: 'snap', index: 1, offset: 300 });
  });
  it('dismisses on a long drag from the lowest snap or a fast fling down', () => {
    expect(resolveRelease({ y: 560, velocity: 0, offsets: [0], height })).toEqual({ kind: 'dismiss' });
    expect(resolveRelease({ y: 40, velocity: DISMISS_VELOCITY + 0.2, offsets: [0], height })).toEqual({
      kind: 'dismiss',
    });
    expect(resolveRelease({ y: 100, velocity: 0.1, offsets: [0], height })).toEqual({
      kind: 'snap',
      index: 0,
      offset: 0,
    });
  });
  it('a fling up from the lowest snap goes to the next one instead of dismissing', () => {
    const result = resolveRelease({ y: 280, velocity: -1.2, offsets: [0, 300], height });
    expect(result).toEqual({ kind: 'snap', index: 0, offset: 0 });
  });
});

describe('gestures', () => {
  it('rubber-bands: zero at rest, monotonic, asymptotic to the limit', () => {
    expect(rubberBand(0)).toBe(0);
    expect(rubberBand(-5)).toBe(0);
    expect(rubberBand(60)).toBeLessThan(rubberBand(120));
    expect(rubberBand(10_000, 100)).toBeLessThan(100);
  });
  it('pull-to-refresh arms past the threshold only', () => {
    expect(pullState(0)).toBe('idle');
    expect(pullState(PULL_THRESHOLD_PX - 1)).toBe('pulling');
    expect(pullState(PULL_THRESHOLD_PX)).toBe('ready');
    expect(pullDistance(1000)).toBeLessThanOrEqual(110);
    expect(pullDistance(-4)).toBe(0);
  });
  it('detects a back traversal from the Navigation API activation', () => {
    expect(isBackNavigation({ navigationType: 'traverse', from: { index: 3 }, entry: { index: 2 } })).toBe(true);
    expect(isBackNavigation({ navigationType: 'traverse', from: { index: 2 }, entry: { index: 3 } })).toBe(false);
    expect(isBackNavigation({ navigationType: 'push', from: { index: 3 }, entry: { index: 2 } })).toBe(false);
    expect(isBackNavigation(null)).toBe(false);
  });
});

describe('haptics', () => {
  const win = (reduced: boolean) => ({ matchMedia: () => ({ matches: reduced }) }) as unknown as Window;
  it('vibrates only after a tap and never under reduced motion', () => {
    const vibrate = vi.fn(() => true);
    const nav = { vibrate, userActivation: { hasBeenActive: true } } as unknown as Navigator;
    expect(haptic('tick', nav, win(false))).toBe(true);
    expect(vibrate).toHaveBeenCalledWith(6);
    expect(haptic('tick', nav, win(true))).toBe(false);
    const idle = { vibrate, userActivation: { hasBeenActive: false } } as unknown as Navigator;
    expect(haptic('tick', idle, win(false))).toBe(false);
    expect(haptic('tick', {} as Navigator, win(false))).toBe(false);
  });
});

describe('app shell helpers', () => {
  it('points the worker at the offline page of the visitor language', () => {
    expect(offlinePageFor('/es/mods')).toBe('/es/offline');
    expect(offlinePageFor('/mods')).toBe('/offline');
    expect(offlinePageFor('/zh')).toBe('/zh/offline');
    expect(offlinePageFor('/')).toBe('/offline');
  });
  it('recognises iOS, including iPadOS posing as a Mac', () => {
    expect(
      isIosDevice({
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)',
        platform: 'iPhone',
        maxTouchPoints: 5,
      } as Navigator),
    ).toBe(true);
    expect(
      isIosDevice({ userAgent: 'Mozilla/5.0 (Macintosh)', platform: 'MacIntel', maxTouchPoints: 5 } as Navigator),
    ).toBe(true);
    expect(
      isIosDevice({
        userAgent: 'Mozilla/5.0 (Linux; Android 14)',
        platform: 'Linux armv8l',
        maxTouchPoints: 5,
      } as Navigator),
    ).toBe(false);
  });
  it('declares one splash screen per device class, with matching media queries', () => {
    expect(IOS_SPLASH_SCREENS).toHaveLength(SPLASH_SIZES.length);
    const first = SPLASH_SIZES[0];
    expect(first && splashFile(first)).toBe('splash-1320x2868.jpg');
    expect(IOS_SPLASH_SCREENS[0]?.media).toContain('(device-width: 440px)');
    expect(PULL_TO_REFRESH_TEMPLATES.has('explore')).toBe(true);
    expect(PULL_TO_REFRESH_TEMPLATES.has('mod')).toBe(false);
  });
});
