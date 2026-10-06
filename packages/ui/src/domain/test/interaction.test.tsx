// @vitest-environment jsdom
/**
 * Callback mode of the interactive domain components (console, islands): filters, sort, view,
 * gallery, disclosure and download callbacks, with the keyboard.
 */
import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useState } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import {
  DisclosureMenu,
  DownloadSplitButton,
  FilterChips,
  type FilterState,
  GalleryStrip,
  SortMenu,
  type ViewMode,
  ViewToggle,
} from '../index.ts';
import { modDetail } from './fixtures.ts';

beforeAll(() => {
  if (!('IntersectionObserver' in window)) {
    Object.assign(window, {
      IntersectionObserver: class {
        observe(): void {}
        disconnect(): void {}
      },
    });
  }
});

function Chips({ onChange }: { onChange: (value: string, next: FilterState) => void }) {
  const [states, setStates] = useState<Record<string, FilterState>>({});
  return (
    <FilterChips
      label="Category"
      options={[
        { value: 'qol', label: 'Quality of Life', state: states.qol },
        { value: 'misc', label: 'Misc', state: states.misc },
      ]}
      onChange={(value, next) => {
        onChange(value, next);
        setStates((current) => ({ ...current, [value]: next }));
      }}
      onClear={() => setStates({})}
    />
  );
}

describe('FilterChips', () => {
  it('includes on click, excludes with Alt or the explicit control, clears', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Chips onChange={onChange} />);
    const qol = screen.getByRole('button', { name: /^Quality of Life/ });
    expect(qol.getAttribute('aria-pressed')).toBe('false');

    await user.click(qol);
    expect(onChange).toHaveBeenLastCalledWith('qol', 'include');
    expect(screen.getByRole('button', { name: /^Quality of Life/ }).getAttribute('aria-pressed')).toBe('true');
    expect(screen.getByRole('button', { name: /^Quality of Life/ }).textContent).toContain('included');

    fireEvent.click(screen.getByRole('button', { name: /^Misc/ }), { altKey: true });
    expect(onChange).toHaveBeenLastCalledWith('misc', 'exclude');

    const exclude = screen.getByRole('button', { name: 'Exclude Quality of Life' });
    await user.click(exclude);
    expect(onChange).toHaveBeenLastCalledWith('qol', 'exclude');
    expect(screen.getByRole('button', { name: 'Stop excluding Quality of Life' }).getAttribute('aria-pressed')).toBe(
      'true',
    );

    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.queryByRole('button', { name: 'Clear filters' })).toBeNull();
  });

  it('is reachable by keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Chips onChange={onChange} />);
    await user.tab();
    expect(document.activeElement?.textContent).toContain('Quality of Life');
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenLastCalledWith('qol', 'include');
    await user.tab();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenLastCalledWith('qol', 'exclude');
  });
});

describe('SortMenu and DisclosureMenu', () => {
  it('selects an option and closes', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    const { container } = render(
      <SortMenu
        value="downloads"
        onValueChange={onValueChange}
        options={[
          { value: 'downloads', label: 'Most downloaded' },
          { value: 'recent', label: 'Recently updated' },
        ]}
      />,
    );
    const details = container.querySelector('details') as HTMLDetailsElement;
    await user.click(screen.getByText('Most downloaded', { selector: 'summary *' }));
    expect(details.open).toBe(true);
    expect(screen.getByRole('button', { name: /Most downloaded/ }).getAttribute('aria-current')).toBe('true');
    await user.click(screen.getByRole('button', { name: /Recently updated/ }));
    expect(onValueChange).toHaveBeenCalledWith('recent');
    expect(details.open).toBe(false);
  });

  it('closes on Escape (focus back to the summary) and on outside click', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <div>
        <DisclosureMenu summary="More">
          <a href="#one">One</a>
        </DisclosureMenu>
        <p>Outside</p>
      </div>,
    );
    const details = container.querySelector('details') as HTMLDetailsElement;
    const summary = container.querySelector('summary') as HTMLElement;
    await user.click(summary);
    expect(details.open).toBe(true);
    screen.getByText('One').focus();
    await user.keyboard('{Escape}');
    expect(details.open).toBe(false);
    expect(document.activeElement).toBe(summary);

    await user.click(summary);
    expect(details.open).toBe(true);
    fireEvent.pointerDown(screen.getByText('Outside'));
    expect(details.open).toBe(false);
  });
});

describe('ViewToggle', () => {
  function Toggle({ onChange }: { onChange: (mode: ViewMode) => void }) {
    const [value, setValue] = useState<ViewMode>('grid');
    return (
      <ViewToggle
        value={value}
        onValueChange={(mode) => {
          onChange(mode);
          setValue(mode);
        }}
      />
    );
  }

  it('switches mode with aria-pressed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Toggle onChange={onChange} />);
    expect(screen.getByRole('group', { name: 'View' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'List' }));
    expect(onChange).toHaveBeenCalledWith('list');
    expect(screen.getByRole('button', { name: 'List' }).getAttribute('aria-pressed')).toBe('true');
    expect(screen.getByRole('button', { name: 'Grid' }).getAttribute('aria-pressed')).toBe('false');
  });
});

describe('GalleryStrip and DownloadSplitButton callbacks', () => {
  it('selects gallery items', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<GalleryStrip images={modDetail.gallery} video={modDetail.video} onSelect={onSelect} selectedIndex={0} />);
    expect(screen.getByRole('list', { name: 'Gallery' })).toBeTruthy();
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]?.getAttribute('aria-pressed')).toBe('true');
    await user.click(buttons[1] as HTMLElement);
    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it('reports the chosen download before navigating', () => {
    const onDownload = vi.fn((_option, event: { preventDefault: () => void }) => event.preventDefault());
    render(
      <DownloadSplitButton
        primary={{ version: '1.3.8', href: '/d/1.3.8', size: 1_254_310 }}
        others={[{ version: '1.3.7', href: '/d/1.3.7' }]}
        onDownload={onDownload}
      />,
    );
    fireEvent.click(screen.getByRole('link', { name: 'Download v1.3.8 · 1.2 MB' }));
    expect(onDownload.mock.calls[0]?.[0]).toMatchObject({ version: '1.3.8' });
    fireEvent.click(screen.getByRole('link', { name: /1\.3\.7/ }));
    expect(onDownload.mock.calls[1]?.[0]).toMatchObject({ version: '1.3.7' });
  });
});
