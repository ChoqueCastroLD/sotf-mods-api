/**
 * Up to 5 curated tags (PLAN §7.5 step 2): toggle chips grouped by theme, with a filter. Chips are
 * `aria-pressed` buttons; when the limit is reached the unselected ones are disabled and the
 * counter says why.
 */
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Check, Search } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { ut } from '../i18n.ts';
import { number } from '../lib/format.ts';

export interface TagOption {
  slug: string;
  name: string;
  group: string | null;
}

export interface TagPickerProps {
  id: string;
  tags: readonly TagOption[];
  value: readonly string[];
  onChange: (value: string[]) => void;
  max: number;
  error?: string | null;
}

export function TagPicker({ id, tags, value, onChange, max, error }: TagPickerProps) {
  const [filter, setFilter] = useState('');
  const labelId = useId();
  const counterId = useId();
  const selected = new Set(value);
  const full = value.length >= max;

  const groups = useMemo(() => {
    const q = filter.trim().toLowerCase();
    const map = new Map<string, TagOption[]>();
    for (const tag of tags) {
      if (q && !tag.name.toLowerCase().includes(q) && !tag.slug.includes(q)) continue;
      const key = tag.group ?? '';
      const list = map.get(key) ?? [];
      list.push(tag);
      map.set(key, list);
    }
    return [...map.entries()];
  }, [tags, filter]);

  const toggle = (slug: string) => {
    if (selected.has(slug)) onChange(value.filter((v) => v !== slug));
    else if (!full) onChange([...value, slug]);
  };

  return (
    <fieldset
      id={id}
      tabIndex={-1}
      aria-labelledby={labelId}
      aria-describedby={counterId}
      className="m-0 flex min-w-0 flex-col gap-2 border-0 p-0 outline-none"
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <span id={labelId} className="text-sm font-medium text-fg">
          {ut('upload_tags_label')}
        </span>
        <span id={counterId} aria-live="polite" className="readout text-fg-muted">
          {ut('upload_tags_counter', { count: number(value.length), max: number(max) })}
        </span>
      </div>
      <Input
        size="sm"
        type="search"
        value={filter}
        onChange={(event) => setFilter(event.currentTarget.value)}
        placeholder={ut('upload_tags_filter')}
        aria-label={ut('upload_tags_filter')}
        icon={<Icon icon={Search} size={14} />}
        className="sm:max-w-xs"
      />
      <div className="flex max-h-64 flex-col gap-3 overflow-auto rounded-md border border-border bg-sunken p-3">
        {groups.length === 0 ? <p className="text-sm text-fg-muted">{ut('upload_tags_none')}</p> : null}
        {groups.map(([group, list]) => (
          <div key={group || 'other'} className="flex flex-wrap gap-1.5">
            {list.map((tag) => {
              const on = selected.has(tag.slug);
              return (
                <button
                  key={tag.slug}
                  type="button"
                  aria-pressed={on}
                  disabled={!on && full}
                  onClick={() => toggle(tag.slug)}
                  className={cn(
                    'inline-flex h-8 items-center gap-1 rounded-full border px-3 text-xs font-medium',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                    'disabled:cursor-not-allowed disabled:opacity-45',
                    on
                      ? 'border-primary bg-primary-soft text-fg'
                      : 'border-border-strong bg-raised text-fg-muted hover:text-fg',
                  )}
                >
                  {on ? <Icon icon={Check} size={12} /> : null}
                  {tag.name}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {full ? <p className="text-xs text-fg-muted">{ut('upload_tags_full', { max: number(max) })}</p> : null}
      {error ? (
        <p role="alert" className="text-xs font-medium text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
