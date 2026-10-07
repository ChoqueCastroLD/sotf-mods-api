// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MAX_VISIBLE, pageToast, resetToasts, toast } from './toast.ts';

const shown = () => [...document.querySelectorAll<HTMLElement>('[data-toast]')];

beforeEach(() => {
  vi.useFakeTimers();
  document.body.innerHTML = `<div data-toast-region data-label-close="Cerrar" data-label-undo="Deshacer"><div data-toast-polite role="status" aria-live="polite"></div><div data-toast-assertive role="alert" aria-live="assertive"></div></div>`;
});

afterEach(() => {
  resetToasts();
  vi.useRealTimers();
});

describe('toast bus', () => {
  it('puts polite messages and errors in different live regions', () => {
    toast.success('Saved');
    toast.error('Failed');
    expect(document.querySelector('[data-toast-polite]')?.textContent).toContain('Saved');
    expect(document.querySelector('[data-toast-assertive]')?.textContent).toContain('Failed');
  });

  it('merges identical messages into one toast with a counter', () => {
    toast.success('Link copied');
    toast.success('Link copied');
    toast.success('Link copied');
    expect(shown()).toHaveLength(1);
    expect(shown()[0]?.textContent).toContain('3');
  });

  it('goes away by itself, except errors and progress', () => {
    toast.info('Hello');
    toast.error('Broken');
    toast.loading('Working');
    vi.advanceTimersByTime(6000);
    vi.advanceTimersByTime(500);
    const texts = shown().map((el) => el.textContent);
    expect(texts.some((text) => text?.includes('Hello'))).toBe(false);
    expect(texts.some((text) => text?.includes('Broken'))).toBe(true);
    expect(texts.some((text) => text?.includes('Working'))).toBe(true);
  });

  it('shows at most three and queues the rest', () => {
    for (let index = 0; index < MAX_VISIBLE + 2; index++) toast.error(`Problem ${index}`);
    expect(shown()).toHaveLength(MAX_VISIBLE);
    ((shown()[0] as HTMLElement).querySelector('button[aria-label="Cerrar"]') as HTMLButtonElement).click();
    vi.advanceTimersByTime(400);
    expect(shown()).toHaveLength(MAX_VISIBLE);
    expect(
      shown()
        .map((el) => el.textContent)
        .join(' '),
    ).toContain('Problem 3');
  });

  it('pauses while hovered or focused', () => {
    toast.info('Reading this');
    const card = shown()[0] as HTMLElement;
    card.dispatchEvent(new Event('focusin'));
    vi.advanceTimersByTime(20_000);
    expect(shown()).toHaveLength(1);
    card.dispatchEvent(new Event('focusout'));
    vi.advanceTimersByTime(6000);
    vi.advanceTimersByTime(500);
    expect(shown()).toHaveLength(0);
  });

  it('runs the action once, closes, and reports the close', () => {
    const undo = vi.fn();
    const closed = vi.fn();
    toast.info('Removed', { action: { label: 'Undo', onClick: undo }, onClose: closed });
    (document.querySelector('[data-toast] button:not([aria-label])') as HTMLButtonElement).click();
    expect(undo).toHaveBeenCalledTimes(1);
    expect(closed).toHaveBeenCalledTimes(1);
  });

  it('renders link actions', () => {
    toast.success('Published', { action: { label: 'View', href: '/mods/1' } });
    expect(document.querySelector('[data-toast] a')?.getAttribute('href')).toBe('/mods/1');
  });

  it('turns a progress toast into the result of the promise, in place', async () => {
    vi.useRealTimers();
    let done: (value: number) => void = () => {};
    const work = new Promise<number>((resolve) => {
      done = resolve;
    });
    toast.progress(work, { loading: 'Uploading', success: (n) => `Uploaded ${n}`, error: 'Failed' });
    expect(shown()[0]?.textContent).toContain('Uploading');
    done(3);
    await work;
    await Promise.resolve();
    expect(shown()).toHaveLength(1);
    expect(shown()[0]?.textContent).toContain('Uploaded 3');
  });

  it('offers the localised Undo label to page scripts', () => {
    pageToast().show('Followed', () => {});
    expect(shown()[0]?.textContent).toContain('Deshacer');
  });
});
