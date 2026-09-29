// @vitest-environment jsdom
/**
 * Keyboard interaction (PLAN §1.2, WCAG 2.1.1) of the interactive primitives: Dialog, Menu,
 * Tabs and Combobox, driven only with the keyboard through Testing Library's user-event.
 */
import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useState } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { Button } from '../src/button.tsx';
import { Combobox } from '../src/combobox.tsx';
import { ConfirmDialog, Dialog } from '../src/dialog.tsx';
import { Menu } from '../src/menu.tsx';
import { Tabs } from '../src/tabs.tsx';
import { BELOW_MD_QUERY } from '../src/use-media-query.ts';
import { accessibleDescription, installDomShims } from './helpers/dom.ts';

beforeAll(() => {
  installDomShims();
});

describe('Dialog', () => {
  it('opens from the keyboard, traps focus, closes on Escape and restores focus', async () => {
    const user = userEvent.setup();
    render(
      <Dialog
        title="Report broken"
        description="Tell the creator what happened."
        trigger={<Button>Report</Button>}
        footer={<Button>Send</Button>}
      >
        <input aria-label="Details" />
      </Dialog>,
    );
    const trigger = screen.getByRole('button', { name: 'Report' });
    await user.tab();
    expect(document.activeElement).toBe(trigger);
    await user.keyboard('{Enter}');

    const dialog = await screen.findByRole('dialog', { name: 'Report broken' });
    expect(accessibleDescription(dialog)).toBe('Tell the creator what happened.');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));

    // Tab cycles inside the dialog (focus trap). Base UI's focus guards bounce focus back into
    // the popup when it reaches either end, so wait for the bounce after each step.
    const visited = new Set<Element>();
    for (let i = 0; i < 8; i++) {
      await user.tab();
      await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
      expect(document.activeElement).not.toBe(trigger);
      if (document.activeElement) visited.add(document.activeElement);
    }
    // Every tabbable control of the dialog was reached: the input, «Send» and «Close».
    expect(visited.size).toBe(3);
    await user.tab({ shift: true });
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));

    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });

  it('becomes a bottom sheet below md that still traps focus and closes on Escape', async () => {
    const original = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      ...original(query),
      matches: query === BELOW_MD_QUERY,
    })) as typeof window.matchMedia;
    try {
      const user = userEvent.setup();
      render(<Dialog title="Filters" trigger={<Button>Filters</Button>} footer={<Button>Apply</Button>} />);
      const trigger = screen.getByRole('button', { name: 'Filters' });
      await user.click(trigger);
      const sheet = await screen.findByRole('dialog', { name: 'Filters' });
      // The drawer popup carries Base UI's swipe direction attribute.
      expect(sheet.closest('[data-swipe-direction]') ?? sheet.querySelector('[data-swipe-direction]')).not.toBeNull();
      await waitFor(() => expect(sheet.contains(document.activeElement)).toBe(true));
      await user.keyboard('{Escape}');
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
      await waitFor(() => expect(document.activeElement).toBe(trigger));
    } finally {
      window.matchMedia = original;
    }
  });

  it('has a labelled close button', async () => {
    const user = userEvent.setup();
    render(<Dialog title="Settings" trigger={<Button>Open</Button>} />);
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const close = await screen.findByRole('button', { name: 'Close' });
    await user.click(close);
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it('ConfirmDialog requires the exact text before confirming', async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn();
    render(
      <ConfirmDialog
        title="Delete mod"
        confirmLabel="Delete forever"
        tone="danger"
        requireText="Axel's Mod Menu"
        onConfirm={onConfirm}
        trigger={<Button variant="danger">Delete</Button>}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Delete' }));
    const confirm = await screen.findByRole('button', { name: 'Delete forever' });
    expect((confirm as HTMLButtonElement).disabled).toBe(true);
    const input = screen.getByRole('textbox');
    await user.type(input, "Axel's Mod");
    expect((confirm as HTMLButtonElement).disabled).toBe(true);
    await user.type(input, ' Menu');
    expect((confirm as HTMLButtonElement).disabled).toBe(false);
    await user.click(confirm);
    expect(onConfirm).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });
});

describe('Menu', () => {
  it('opens with the keyboard, moves with arrows, activates with Enter and returns focus', async () => {
    const user = userEvent.setup();
    const copy = vi.fn();
    const share = vi.fn();
    render(
      <Menu
        trigger={<Button>Actions</Button>}
        items={[
          { label: 'Copy link', onSelect: copy },
          { type: 'separator' },
          { label: 'Share', onSelect: share },
          { label: 'Report', onSelect: vi.fn(), disabled: true },
        ]}
      />,
    );
    const trigger = screen.getByRole('button', { name: 'Actions' });
    await user.tab();
    expect(document.activeElement).toBe(trigger);
    await user.keyboard('{ArrowDown}');

    const menu = await screen.findByRole('menu');
    const items = screen.getAllByRole('menuitem');
    expect(items.map((item) => item.textContent)).toEqual(['Copy link', 'Share', 'Report']);
    await waitFor(() => expect(document.activeElement).toBe(items[0]));

    await user.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(items[1]);
    await user.keyboard('{Enter}');
    expect(share).toHaveBeenCalledTimes(1);
    expect(copy).not.toHaveBeenCalled();
    await waitFor(() => expect(document.body.contains(menu)).toBe(false));
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });

  it('closes on Escape without activating anything', async () => {
    const user = userEvent.setup();
    const copy = vi.fn();
    render(<Menu trigger={<Button>More</Button>} items={[{ label: 'Copy', onSelect: copy }]} />);
    await user.tab();
    await user.keyboard('{Enter}');
    await screen.findByRole('menu');
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('menu')).toBeNull());
    expect(copy).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'More' }));
  });
});

describe('Tabs', () => {
  function Controlled() {
    const [value, setValue] = useState('overview');
    return (
      <>
        <Tabs
          label="Mod sections"
          value={value}
          onValueChange={setValue}
          tabs={[
            { value: 'overview', label: 'Overview', content: <p>Overview panel</p> },
            { value: 'versions', label: 'Versions', content: <p>Versions panel</p> },
            { value: 'reviews', label: 'Reviews', content: <p>Reviews panel</p> },
          ]}
        />
        <output data-testid="value">{value}</output>
      </>
    );
  }

  it('moves and activates with arrow keys, Home and End', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    expect(document.body.contains(screen.getByRole('tablist', { name: 'Mod sections' }))).toBe(true);
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true');

    await user.tab();
    expect(document.activeElement).toBe(tabs[0]);
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(tabs[1]);
    await waitFor(() => expect(tabs[1]?.getAttribute('aria-selected')).toBe('true'));
    expect(screen.getByTestId('value').textContent).toContain('versions');
    // The previous panel unmounts after its exit transition.
    await waitFor(() => expect(screen.getByRole('tabpanel').textContent).toContain('Versions panel'));

    await user.keyboard('{End}');
    expect(document.activeElement).toBe(tabs[2]);
    await waitFor(() => expect(screen.getByTestId('value').textContent).toContain('reviews'));

    await user.keyboard('{Home}');
    expect(document.activeElement).toBe(tabs[0]);
    await waitFor(() => expect(screen.getByTestId('value').textContent).toContain('overview'));

    await user.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(tabs[2]);
  });
});

describe('Combobox', () => {
  const options = [
    { value: 'redloader', label: 'RedLoader' },
    { value: 'sotfedit', label: 'SOTFEdit' },
    { value: 'kelvinseek', label: 'KelvinSeek', hint: 'ShokoCC' },
    { value: 'buildshare', label: 'BuildShare' },
  ];

  it('filters by typing, moves with arrows and selects with Enter', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Combobox label="Dependency" options={options} onValueChange={onValueChange} />);
    const input = screen.getByRole('combobox', { name: 'Dependency' });

    await user.tab();
    expect(document.activeElement).toBe(input);
    await user.keyboard('s');
    const listbox = await screen.findByRole('listbox');
    await waitFor(() =>
      expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
        'SOTFEdit',
        'KelvinSeekShokoCC',
        'BuildShare',
      ]),
    );
    await user.keyboard('ee');
    await waitFor(() => expect(screen.getAllByRole('option')).toHaveLength(1));

    await user.keyboard('{ArrowDown}');
    await waitFor(() =>
      expect(screen.getByRole('option', { name: /KelvinSeek/ })?.hasAttribute('data-highlighted')).toBe(true),
    );
    await user.keyboard('{Enter}');

    expect(onValueChange).toHaveBeenLastCalledWith('kelvinseek');
    await waitFor(() => expect(document.body.contains(listbox)).toBe(false));
    expect((input as HTMLInputElement).value).toBe('KelvinSeek');
    expect(document.activeElement).toBe(input);
  });

  it('shows the empty message and closes on Escape', async () => {
    const user = userEvent.setup();
    render(<Combobox label="Dependency" options={options} />);
    await user.tab();
    await user.keyboard('zzz');
    expect(document.body.contains(await screen.findByText('No matches. Try fewer words.'))).toBe(true);
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
    await act(async () => {});
  });
});
