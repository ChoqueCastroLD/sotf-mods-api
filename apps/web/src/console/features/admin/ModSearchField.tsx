/**
 * Mod or build picker of the admin forms: an ARIA 1.2 combobox over the server search
 * (`GET /search`). Arrow keys move through the results, Enter picks, Escape closes or clears.
 * The picked entry replaces the text field with a chip and a «Change» button.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { RadarSpinner } from '@sotf/ui/spinner';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { type KeyboardEvent, useEffect, useId, useState } from 'react';
import { pickerSearchQuery } from './api.ts';

const DEBOUNCE_MS = 250;

export interface PickedMod {
  id: number;
  name: string;
  subtitle: string | null;
  thumbnailUrl: string | null;
}

export interface ModSearchFieldProps {
  label: string;
  types: 'mod' | 'build';
  value: PickedMod | null;
  onChange: (value: PickedMod | null) => void;
  error?: string | undefined;
  disabled?: boolean;
}

export function ModSearchField({ label, types, value, onChange, error, disabled }: ModSearchFieldProps) {
  const id = useId();
  const listId = `${id}-list`;
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(text.trim()), DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [text]);
  useEffect(() => setActive(0), [query]);

  const search = useQuery({ ...pickerSearchQuery(types, query), enabled: query.length >= 2 && value === null });
  const hits = query.length >= 2 ? (search.data ?? []) : [];
  const expanded = open && query.length >= 2;

  const pick = (index: number) => {
    const hit = hits[index];
    if (!hit || typeof hit.id !== 'number') return;
    onChange({ id: hit.id, name: hit.title, subtitle: hit.subtitle, thumbnailUrl: hit.thumbnailUrl });
    setText('');
    setQuery('');
    setOpen(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActive((index) => (hits.length === 0 ? 0 : (index + 1) % hits.length));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index) => (hits.length === 0 ? 0 : (index - 1 + hits.length) % hits.length));
    } else if (event.key === 'Enter') {
      if (expanded && hits[active]) {
        event.preventDefault();
        pick(active);
      }
    } else if (event.key === 'Escape') {
      if (expanded) {
        event.preventDefault();
        setOpen(false);
      } else if (text) {
        event.preventDefault();
        setText('');
      }
    }
  };

  const status =
    query.length < 2
      ? ''
      : search.isFetching
        ? m.admin_picker_searching()
        : search.isError
          ? m.admin_picker_error()
          : m.admin_results({ count: hits.length });
  const activeHit = expanded ? hits[active] : undefined;

  if (value) {
    return (
      <div className="grid gap-1.5">
        <span className="text-sm font-medium text-fg">{label}</span>
        <div className="flex items-center gap-3 rounded-md border border-border bg-raised p-2">
          <span className="size-10 shrink-0 overflow-hidden rounded-sm bg-sunken">
            {value.thumbnailUrl ? <img src={value.thumbnailUrl} alt="" className="size-full object-cover" /> : null}
          </span>
          <span className="grid min-w-0 flex-1">
            <span className="truncate font-medium text-fg">{value.name}</span>
            {value.subtitle ? <span className="truncate text-xs text-fg-muted">{value.subtitle}</span> : null}
          </span>
          <Button variant="ghost" size="sm" disabled={disabled} onClick={() => onChange(null)}>
            {m.admin_picker_change()}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid gap-1.5">
      <label htmlFor={`${id}-input`} className="text-sm font-medium text-fg">
        {label}
      </label>
      <Input
        id={`${id}-input`}
        role="combobox"
        aria-expanded={expanded}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={activeHit ? `${id}-hit-${activeHit.id}` : undefined}
        aria-describedby={`${id}-status${error ? ` ${id}-error` : ''}`}
        aria-invalid={error ? true : undefined}
        value={text}
        disabled={disabled}
        placeholder={types === 'build' ? m.admin_picker_placeholder_build() : m.admin_picker_placeholder_mod()}
        autoComplete="off"
        spellCheck={false}
        icon={<Icon icon={Search} size={16} />}
        end={search.isFetching ? <RadarSpinner size={16} /> : undefined}
        onChange={(event) => {
          setText(event.currentTarget.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        onKeyDown={onKeyDown}
      />
      <p id={`${id}-status`} className="sr-only" aria-live="polite">
        {status}
      </p>
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-danger">
          {error}
        </p>
      ) : null}
      {expanded ? (
        <div
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute inset-x-0 top-full z-(--z-dropdown) mt-1 max-h-80 overflow-y-auto overscroll-contain rounded-lg border border-border bg-overlay p-1 shadow-lg"
        >
          {hits.length === 0 ? (
            <p className="px-3 py-2 text-sm text-fg-muted">
              {search.isFetching
                ? m.admin_picker_searching()
                : search.isError
                  ? m.admin_picker_error()
                  : m.admin_no_matches()}
            </p>
          ) : (
            hits.map((hit, index) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: combobox option; the keyboard stays on the input (arrows + Enter)
              <div
                key={hit.id}
                id={`${id}-hit-${hit.id}`}
                role="option"
                aria-selected={index === active}
                tabIndex={-1}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActive(index)}
                onClick={() => pick(index)}
                className={cn(
                  'flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm',
                  index === active && 'bg-fg/8',
                )}
              >
                <span className="size-9 shrink-0 overflow-hidden rounded-sm bg-raised">
                  {hit.thumbnailUrl ? (
                    <img src={hit.thumbnailUrl} alt="" loading="lazy" className="size-full object-cover" />
                  ) : null}
                </span>
                <span className="grid min-w-0 flex-1">
                  <span className="truncate font-medium text-fg">{hit.title}</span>
                  {hit.subtitle ? <span className="truncate text-xs text-fg-muted">{hit.subtitle}</span> : null}
                </span>
              </div>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
