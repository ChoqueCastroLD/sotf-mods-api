// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { clearAfter, ignoreTransitionRejections } from './view-transitions.ts';

describe('clearAfter', () => {
  it('clears the transition name when the transition finishes', async () => {
    const element = document.createElement('div');
    element.style.viewTransitionName = 'mod-cover-1';
    clearAfter({ finished: Promise.resolve() }, element);
    await Promise.resolve();
    expect(element.style.viewTransitionName).toBe('');
  });

  it('clears it and raises no unhandled rejection when the transition is skipped', async () => {
    const unhandled: unknown[] = [];
    const onUnhandled = (reason: unknown) => unhandled.push(reason);
    process.on('unhandledRejection', onUnhandled);
    try {
      const element = document.createElement('div');
      element.style.viewTransitionName = 'mod-cover-1';
      clearAfter({ finished: Promise.reject(new DOMException('Transition was skipped', 'AbortError')) }, element);
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(element.style.viewTransitionName).toBe('');
      expect(unhandled).toEqual([]);
    } finally {
      process.off('unhandledRejection', onUnhandled);
    }
  });
});

describe('ignoreTransitionRejections', () => {
  it('handles every promise of a skipped transition', async () => {
    const unhandled: unknown[] = [];
    const onUnhandled = (reason: unknown) => unhandled.push(reason);
    process.on('unhandledRejection', onUnhandled);
    try {
      const abort = () =>
        Promise.reject(new DOMException('Transition was aborted because of invalid state', 'InvalidStateError'));
      ignoreTransitionRejections({ ready: abort(), updateCallbackDone: abort(), finished: abort() });
      ignoreTransitionRejections({ finished: Promise.resolve() });
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(unhandled).toEqual([]);
    } finally {
      process.off('unhandledRejection', onUnhandled);
    }
  });
});
