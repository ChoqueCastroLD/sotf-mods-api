/**
 * One explicit item of the editor: drag handle (pointer, touch and keyboard), thumbnail, name,
 * compatibility, the version it resolves to («always the latest» or pinned) and an options panel
 * with the note and the pin picker (the versions load when the panel opens). Remove is undoable.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { CompatBadge } from '@sotf/ui/domain';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, GripVertical, Pin, Quote, Trash2 } from 'lucide-react';
import { type KeyboardEvent, type PointerEvent, type Ref, useId, useState } from 'react';
import { versionsQuery } from './api.ts';
import type { DraftItem } from './draft.ts';
import { KIT_LIMITS } from './limits.ts';

const LATEST = 'latest';

export interface ItemRowProps {
  item: DraftItem;
  index: number;
  total: number;
  grabbed: boolean;
  dragging: boolean;
  rowRef: Ref<HTMLLIElement>;
  instructionsId: string;
  onHandlePointerDown: (event: PointerEvent<HTMLButtonElement>) => void;
  onHandleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onHandleBlur: () => void;
  onChange: (patch: Partial<Pick<DraftItem, 'note' | 'pinned'>>) => void;
  onRemove: () => void;
}

function VersionPicker({ item, onChange }: Pick<ItemRowProps, 'item' | 'onChange'>) {
  const versions = useQuery(versionsQuery(item.modId));
  const options = [
    { value: LATEST, label: m.kits_pin_latest() },
    ...(versions.data ?? []).map((version) => ({ value: String(version.id), label: `v${version.version}` })),
  ];
  // Keep a pinned version selectable even while the list loads (or if it was yanked since).
  if (item.pinned && !options.some((option) => option.value === String(item.pinned?.id))) {
    options.push({ value: String(item.pinned.id), label: `v${item.pinned.version}` });
  }
  return (
    <Select
      label={m.kits_pin_label()}
      description={
        versions.isError ? m.kits_pin_error() : versions.isPending ? m.kits_pin_loading() : m.kits_pin_hint()
      }
      options={options}
      value={item.pinned ? String(item.pinned.id) : LATEST}
      onValueChange={(value) => {
        if (!value || value === LATEST) {
          onChange({ pinned: null });
          return;
        }
        const version = versions.data?.find((entry) => String(entry.id) === value);
        if (version) onChange({ pinned: { id: version.id, version: version.version } });
      }}
    />
  );
}

export function ItemRow({
  item,
  index,
  total,
  grabbed,
  dragging,
  rowRef,
  instructionsId,
  onHandlePointerDown,
  onHandleKeyDown,
  onHandleBlur,
  onChange,
  onRemove,
}: ItemRowProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const version = item.pinned?.version ?? item.latestVersion;
  return (
    <li
      ref={rowRef}
      data-kit-row={item.modId}
      className={cn(
        'grid gap-3 rounded-lg border bg-surface p-2 transition-[border-color,box-shadow] duration-(--dur-fast) motion-reduce:transition-none',
        grabbed || dragging ? 'border-blueprint shadow-lg ring-2 ring-blueprint/40' : 'border-border',
      )}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex size-11 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-fg-muted hover:bg-fg/6 hover:text-fg focus-visible:outline-2 focus-visible:outline-focus active:cursor-grabbing md:size-9"
          aria-label={m.kits_drag_handle({ name: item.name, position: index + 1, total })}
          aria-describedby={instructionsId}
          aria-pressed={grabbed}
          onPointerDown={onHandlePointerDown}
          onKeyDown={onHandleKeyDown}
          onBlur={onHandleBlur}
        >
          <Icon icon={GripVertical} size={18} />
        </button>
        <span className="w-6 shrink-0 text-end font-mono text-xs text-fg-subtle tabular-nums" aria-hidden="true">
          {index + 1}
        </span>
        <span className="size-10 shrink-0 overflow-hidden rounded-md bg-raised">
          {item.thumbnailUrl ? (
            <img src={item.thumbnailUrl} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
          ) : null}
        </span>
        <div className="grid min-w-0 flex-1 gap-0.5">
          <span className="truncate font-medium text-fg">{item.name}</span>
          <span className="flex flex-wrap items-center gap-x-2 text-xs text-fg-muted">
            {item.subtitle ? <span className="truncate">{item.subtitle}</span> : null}
            {version ? (
              <span className="inline-flex items-center gap-1 font-mono">
                {item.pinned ? <Icon icon={Pin} size={12} /> : null}v{version}
                <span className="sr-only">{item.pinned ? m.kits_item_pinned() : m.kits_item_latest()}</span>
              </span>
            ) : !item.pinned ? (
              <span>{m.kits_item_latest()}</span>
            ) : null}
          </span>
        </div>
        {item.compatStatus ? (
          <CompatBadge status={item.compatStatus} short size="sm" className="hidden sm:inline-flex" />
        ) : null}
        <Button
          variant="ghost"
          size="sm"
          aria-expanded={open}
          aria-controls={panelId}
          iconEnd={<Icon icon={ChevronDown} size={16} className={cn('transition-transform', open && 'rotate-180')} />}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="max-sm:sr-only">{m.kits_item_options()}</span>
          <span className="sr-only">{item.name}</span>
        </Button>
        <Button variant="icon" size="sm" aria-label={m.kits_item_remove({ name: item.name })} onClick={onRemove}>
          <Icon icon={Trash2} size={16} />
        </Button>
      </div>
      {!open && item.note.trim() ? (
        <p className="flex items-start gap-1.5 ps-12 text-sm text-fg-muted md:ps-10">
          <Icon icon={Quote} size={14} className="mt-0.5 shrink-0" />
          <span className="min-w-0 break-words">{item.note}</span>
        </p>
      ) : null}
      {open ? (
        <div id={panelId} className="grid gap-3 border-t border-border px-1 pt-3 md:grid-cols-2">
          <Field
            label={m.kits_note_label()}
            optional
            description={m.kits_note_hint({ count: item.note.length, max: KIT_LIMITS.noteMax })}
          >
            <Textarea
              value={item.note}
              maxLength={KIT_LIMITS.noteMax}
              minRows={2}
              maxRows={5}
              placeholder={m.kits_note_placeholder()}
              onChange={(event) => onChange({ note: event.currentTarget.value })}
            />
          </Field>
          <VersionPicker item={item} onChange={onChange} />
        </div>
      ) : null}
    </li>
  );
}
