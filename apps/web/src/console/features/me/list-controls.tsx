/**
 * Search, filter and sort bar of the «You» lists (the lists are small and arrive whole, so the
 * controls work on the loaded rows; the state lives in the URL) and the shared pager wiring.
 */
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Search } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import type { MeFilter, MeListState, MeSort } from './search.ts';

function sortLabel(sort: MeSort): string {
  switch (sort) {
    case 'recent':
      return m.me_sort_recent();
    case 'name':
      return m.me_sort_name();
    case 'updates':
      return m.me_sort_updates();
    case 'times':
      return m.me_sort_times();
  }
}

export function MeToolbar({
  state,
  onChange,
  sorts,
  counts,
}: {
  state: MeListState;
  onChange: (next: Partial<MeListState>) => void;
  sorts: readonly MeSort[];
  counts: Record<MeFilter, number>;
}) {
  const searchId = useId();
  const [text, setText] = useState(state.q);
  useEffect(() => setText(state.q), [state.q]);
  useEffect(() => {
    if (text.trim() === state.q.trim()) return;
    const timer = window.setTimeout(() => onChange({ q: text, page: 1 }), 300);
    return () => window.clearTimeout(timer);
  }, [text, state.q, onChange]);

  const filters: Array<{ value: MeFilter; label: string }> = [
    { value: 'all', label: m.me_filter_all() },
    { value: 'updates', label: m.me_filter_updates() },
  ];

  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="grid min-w-56 flex-1 gap-1 md:max-w-xs">
        <label htmlFor={searchId} className="sr-only">
          {m.me_search_label()}
        </label>
        <span className="relative">
          <Icon
            icon={Search}
            size={16}
            className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-fg-subtle"
          />
          <Input
            id={searchId}
            type="search"
            value={text}
            placeholder={m.me_search_placeholder()}
            className="ps-9"
            enterKeyHint="search"
            autoComplete="off"
            onChange={(event) => setText(event.currentTarget.value)}
          />
        </span>
      </div>
      <fieldset className="flex flex-wrap gap-2">
        <legend className="sr-only">{m.me_filter_label()}</legend>
        {filters.map((option) => {
          const active = state.filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange({ filter: option.value, page: 1 })}
              className={cn(
                'inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-(--dur-fast) md:h-9',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                active
                  ? 'border-primary bg-primary-soft text-fg'
                  : 'border-border text-fg-muted hover:border-border-strong hover:text-fg',
              )}
            >
              {option.label}
              <span className="tabular-nums text-fg-subtle">{counts[option.value]}</span>
            </button>
          );
        })}
      </fieldset>
      <Select<MeSort>
        label={m.me_sort_label()}
        options={sorts.map((sort) => ({ value: sort, label: sortLabel(sort) }))}
        value={state.sort}
        onValueChange={(value) => onChange({ sort: value ?? 'recent', page: 1 })}
        size="sm"
        className="min-w-48"
      />
    </div>
  );
}
