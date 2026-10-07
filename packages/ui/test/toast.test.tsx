// @vitest-environment jsdom
import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { Toaster, toast } from '../src/toast.tsx';
import { installDomShims } from './helpers/dom.ts';

beforeAll(() => {
  installDomShims();
  // jsdom has no pointer capture; sonner uses it for swipe-to-dismiss.
  Element.prototype.setPointerCapture ??= () => {};
  Element.prototype.releasePointerCapture ??= () => {};
});

afterEach(() => {
  act(() => {
    toast.dismiss();
  });
});

describe('toast', () => {
  it('shows one toast for identical messages and counts the repeats', async () => {
    render(<Toaster />);
    act(() => {
      toast.success('Link copied');
      toast.success('Link copied');
      toast.success('Link copied');
    });
    await waitFor(() => expect(screen.getAllByText('Link copied')).toHaveLength(1));
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('announces errors assertively and keeps them until dismissed', async () => {
    const user = userEvent.setup();
    render(<Toaster />);
    act(() => {
      toast.error('Could not save');
      toast.info('Saved draft');
    });
    expect(await screen.findByRole('alert')).toBeTruthy();
    expect(screen.getAllByRole('status').length).toBeGreaterThan(0);
    const alert = screen.getByRole('alert');
    await user.click(alert.querySelector('button[aria-label]') as HTMLElement);
    await waitFor(() => expect(screen.queryByRole('alert')).toBeNull());
  });

  it('runs the action, then closes', async () => {
    const user = userEvent.setup();
    const undo = vi.fn();
    const closed = vi.fn();
    render(<Toaster />);
    act(() => {
      toast.info('Removed', { action: { label: 'Undo', onClick: undo }, onClose: closed });
    });
    await user.click(await screen.findByRole('button', { name: 'Undo' }));
    expect(undo).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(closed).toHaveBeenCalled());
  });

  it('renders a link action', async () => {
    render(<Toaster />);
    act(() => {
      toast.success('Published', { action: { label: 'View', href: '/mods/1' } });
    });
    const link = await screen.findByRole('link', { name: 'View' });
    expect(link.getAttribute('href')).toBe('/mods/1');
  });

  it('turns a progress toast into the result of the promise', async () => {
    render(<Toaster />);
    let resolve: (value: number) => void = () => {};
    const work = new Promise<number>((done) => {
      resolve = done;
    });
    act(() => {
      toast.promise(work, { loading: 'Uploading', success: (n) => `Done ${n}`, error: 'Failed' });
    });
    expect(await screen.findByText('Uploading')).toBeTruthy();
    await act(async () => {
      resolve(2);
      await work;
    });
    expect(await screen.findByText('Done 2')).toBeTruthy();
  });
});
