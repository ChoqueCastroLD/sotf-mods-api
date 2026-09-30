/**
 * «Add a mod or build»: an ARIA 1.2 combobox over the server search (`GET /search`, mods and builds;
 * exact `manifestId`/name first, typo tolerant). Arrow keys move through the results, Enter adds,
 * Escape clears. Mods already in the kit are shown as added and cannot be picked twice.
 */
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { RadarSpinner } from '@sotf/ui/spinner';
import { useQuery } from '@tanstack/react-query';
import { Check, Plus, Search } from 'lucide-react';
import { type KeyboardEvent, useEffect, useId, useState } from 'react';
import { modSearchQuery, type SearchHitDTO } from './api.ts';

const DEBOUNCE_MS = 250;

export interface ModPickerProps {
  /** Mods already in the kit (explicit or automatic). */
  inKit: ReadonlySet<number>;
  onPick: (hit: SearchHitDTO) => void;
  disabled?: boolean;
}

export function ModPicker({ inKit, onPick, disabled }: ModPickerProps) {
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

  const search = useQuery({ ...modSearchQuery(query), enabled: query.length >= 2 });
  const hits = query.length >= 2 ? (search.data ?? []) : [];
  const expanded = open && query.length >= 2;

  useEffect(() => setActive(0), [query]);

  const pick = (hit: SearchHitDTO | undefined) => {
    if (!hit || inKit.has(Number(hit.id))) return;
    onPick(hit);
    setText('');
    setQuery('');
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
        pick(hits[active]);
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

  const activeHit = expanded ? hits[active] : undefined;
  const status =
    query.length < 2
      ? ''
      : search.isFetching
        ? m.kits_picker_searching()
        : search.isError
          ? m.kits_picker_error()
          : m.kits_picker_results({ count: hits.length });

  return (
    <div className="relative grid gap-1.5">
      <label htmlFor={`${id}-input`} className="text-sm font-medium text-fg">
        {m.kits_picker_label()}
      </label>
      <Input
        id={`${id}-input`}
        role="combobox"
        aria-expanded={expanded}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={activeHit ? `${id}-hit-${activeHit.id}` : undefined}
        aria-describedby={`${id}-status`}
        value={text}
        disabled={disabled}
        placeholder={m.kits_picker_placeholder()}
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
      {expanded ? (
        <div
          id={listId}
          role="listbox"
          aria-label={m.kits_picker_results_label()}
          className="absolute inset-x-0 top-full z-(--z-dropdown) mt-1 max-h-80 overflow-y-auto overscroll-contain rounded-lg border border-border bg-overlay p-1 shadow-lg"
        >
          {hits.length === 0 ? (
            <p className="px-3 py-2 text-sm text-fg-muted">
              {search.isFetching
                ? m.kits_picker_searching()
                : search.isError
                  ? m.kits_picker_error()
                  : m.kits_picker_none()}
            </p>
          ) : (
            hits.map((hit, index) => {
              const taken = inKit.has(Number(hit.id));
              return (
                // biome-ignore lint/a11y/useKeyWithClickEvents: combobox option; the keyboard stays on the input (arrows + Enter)
                <div
                  key={hit.id}
                  id={`${id}-hit-${hit.id}`}
                  role="option"
                  aria-selected={index === active}
                  aria-disabled={taken || undefined}
                  tabIndex={-1}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => pick(hit)}
                  className={cn(
                    'flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm',
                    index === active && 'bg-fg/8',
                    taken && 'cursor-not-allowed opacity-60',
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
                  {taken ? (
                    <span className="inline-flex items-center gap-1 text-xs text-fg-muted">
                      <Icon icon={Check} size={14} />
                      {m.kits_picker_in_kit()}
                    </span>
                  ) : (
                    <Icon icon={Plus} size={16} className="text-fg-muted" />
                  )}
                </div>
              );
            })
          )}
        </div>
      ) : null}
    </div>
  );
}
