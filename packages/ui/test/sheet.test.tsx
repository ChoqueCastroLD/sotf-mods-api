// @vitest-environment jsdom
/**
 * BottomSheet and ActionSheet (mobile native feel): keyboard operation, focus handling and the
 * action contract (a chosen row runs its handler and closes the sheet).
 */
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { Button } from '../src/button.tsx';
import { ActionSheet, BottomSheet } from '../src/sheet.tsx';
import { installDomShims } from './helpers/dom.ts';

beforeAll(() => {
  installDomShims();
});

describe('BottomSheet', () => {
  it('opens from the keyboard, names itself, closes on Escape and returns focus', async () => {
    const user = userEvent.setup();
    render(
      <BottomSheet title="Filters" description="Narrow the list." trigger={<Button>Filters</Button>}>
        <input aria-label="Name" />
      </BottomSheet>,
    );
    const trigger = screen.getByRole('button', { name: 'Filters' });
    await user.tab();
    expect(document.activeElement).toBe(trigger);
    await user.keyboard('{Enter}');

    const sheet = await screen.findByRole('dialog', { name: 'Filters' });
    await waitFor(() => expect(sheet.contains(document.activeElement)).toBe(true));
    expect(screen.getByRole('button', { name: 'Close' })).toBeTruthy();

    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });

  it('accepts snap points without breaking the open/close cycle', async () => {
    const user = userEvent.setup();
    render(
      <BottomSheet title="Layers" snapPoints={[0.5, 1]} trigger={<Button>Layers</Button>}>
        <p>Content</p>
      </BottomSheet>,
    );
    await user.click(screen.getByRole('button', { name: 'Layers' }));
    expect(await screen.findByRole('dialog', { name: 'Layers' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it('hides the heading visually but keeps it as the accessible name', async () => {
    render(
      <BottomSheet title="Hidden heading" hideTitle defaultOpen>
        <p>Body</p>
      </BottomSheet>,
    );
    const sheet = await screen.findByRole('dialog', { name: 'Hidden heading' });
    expect(sheet.querySelector('.sr-only')?.textContent).toBe('Hidden heading');
  });
});

describe('ActionSheet', () => {
  it('runs the chosen action and closes; Cancel just closes', async () => {
    const user = userEvent.setup();
    const onShare = vi.fn();
    const onDelete = vi.fn();
    render(
      <ActionSheet
        title="Mod actions"
        trigger={<Button>Actions</Button>}
        items={[[{ label: 'Share', onSelect: onShare }], [{ label: 'Delete mod', danger: true, onSelect: onDelete }]]}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await screen.findByRole('dialog', { name: 'Mod actions' });
    await user.click(screen.getByRole('button', { name: 'Share' }));
    expect(onShare).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());

    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await screen.findByRole('dialog', { name: 'Mod actions' });
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    expect(onDelete).not.toHaveBeenCalled();
  });

  it('renders link rows as anchors and ignores disabled rows', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <ActionSheet
        title="Share"
        defaultOpen
        items={[
          { label: 'Open in browser', href: '/mods/axel' },
          { label: 'Unavailable', disabled: true, onSelect },
        ]}
      />,
    );
    const link = await screen.findByRole('link', { name: 'Open in browser' });
    expect(link.getAttribute('href')).toBe('/mods/axel');
    await user.click(screen.getByRole('button', { name: 'Unavailable' }));
    expect(onSelect).not.toHaveBeenCalled();
  });
});
