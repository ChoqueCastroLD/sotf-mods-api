/**
 * The items of a kit (PLAN §7.8, research/03 §6.5 «Edición»): add mods and builds, order them by
 * dragging (pointer, touch or keyboard), write a note, pin a version or keep «always the latest»,
 * remove with undo. Every change is saved on its own (`PUT /kits/:id/items`, debounced), so the
 * automatic dependencies and the conflict warning follow the list in real time; each saved change
 * is a revision on the public page («rev 7: +Cook Alert»).
 *
 * Saving: one request at a time; edits made while a save is in flight are kept and saved next.
 * The server's answer replaces the list only when nothing changed meanwhile. Unsaved or failing
 * changes are shown in the status line (with «Try again») and guard navigation away.
 */
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { CompatBadge } from '@sotf/ui/domain';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { useQueryClient } from '@tanstack/react-query';
import { CircleCheck, CloudOff, Layers, Link2 } from 'lucide-react';
import { type KeyboardEvent, type PointerEvent, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type KitDTO, kitsApi, type SearchHitDTO, storeKit } from './api.ts';
import { type DraftItem, draftFromHit, draftOf, inputsOf, move, signatureOf } from './draft.ts';
import { ItemRow } from './ItemRow.tsx';
import { KIT_LIMITS } from './limits.ts';
import { ModPicker } from './ModPicker.tsx';
import { failureDetail } from './shared.tsx';

const SAVE_DELAY_MS = 1200;

export type SaveState = 'idle' | 'pending' | 'saving' | 'saved' | 'error';

interface DragState {
  modId: number;
  pointerId: number;
}

export interface ItemsEditorProps {
  kit: KitDTO;
  onSaveStateChange: (state: SaveState) => void;
}

export function ItemsEditor({ kit, onSaveStateChange }: ItemsEditorProps) {
  const queryClient = useQueryClient();
  const instructionsId = useId();
  const [draft, setDraftState] = useState<DraftItem[]>(() => draftOf(kit));
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const [grabbed, setGrabbed] = useState<{ modId: number; from: number } | null>(null);
  const [drag, setDrag] = useState<DragState | null>(null);

  const draftRef = useRef(draft);
  const editSeq = useRef(0);
  const savedSignature = useRef(signatureOf(draftOf(kit)));
  const timer = useRef<number | undefined>(undefined);
  const inFlight = useRef(false);
  const rowRefs = useRef(new Map<number, HTMLLIElement>());

  const autos = useMemo(() => kit.items.filter((item) => item.isAutoDependency), [kit.items]);
  const inKit = useMemo(
    () => new Set([...draft.map((item) => item.modId), ...autos.map((a) => a.mod.id)]),
    [draft, autos],
  );

  useEffect(() => onSaveStateChange(saveState), [saveState, onSaveStateChange]);

  const setDraft = useCallback((next: DraftItem[]) => {
    draftRef.current = next;
    setDraftState(next);
  }, []);

  const save = useCallback(async () => {
    window.clearTimeout(timer.current);
    timer.current = undefined;
    if (inFlight.current) return;
    const snapshot = draftRef.current;
    const signature = signatureOf(snapshot);
    if (signature === savedSignature.current) {
      setSaveState((state) => (state === 'pending' ? 'saved' : state));
      return;
    }
    const startedAt = editSeq.current;
    inFlight.current = true;
    setSaveState('saving');
    setSaveError(null);
    try {
      const next = await kitsApi.putItems(kit.id, inputsOf(snapshot));
      storeKit(queryClient, next);
      const serverDraft = draftOf(next);
      savedSignature.current = signatureOf(serverDraft);
      inFlight.current = false;
      if (editSeq.current === startedAt) {
        setDraft(serverDraft);
        setSaveState('saved');
      } else {
        // Edited while saving: save the newer list next.
        setSaveState('pending');
        timer.current = window.setTimeout(() => void save(), SAVE_DELAY_MS);
      }
    } catch (failure) {
      inFlight.current = false;
      setSaveState('error');
      setSaveError(failureDetail(failure));
    }
  }, [kit.id, queryClient, setDraft]);

  const change = useCallback(
    (next: DraftItem[], options: { immediate?: boolean } = {}) => {
      editSeq.current += 1;
      setDraft(next);
      setSaveState('pending');
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => void save(), options.immediate ? 0 : SAVE_DELAY_MS);
    },
    [save, setDraft],
  );

  // A newer server state that did not come from this editor (another tab, «Add to a kit»).
  useEffect(() => {
    const serverSignature = signatureOf(draftOf(kit));
    if (serverSignature === savedSignature.current) return;
    if (timer.current !== undefined || inFlight.current) return;
    savedSignature.current = serverSignature;
    setDraft(draftOf(kit));
  }, [kit, setDraft]);

  // Save what is pending when leaving the screen; warn before closing the tab with unsaved edits.
  useEffect(() => {
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      if (timer.current !== undefined || inFlight.current) {
        void save();
        event.preventDefault();
      }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      if (timer.current !== undefined) void save();
    };
  }, [save]);

  /** A live reorder (dragging, keyboard grab): no save until the drop, but newer than any save. */
  const reorderLive = (next: DraftItem[]) => {
    editSeq.current += 1;
    setDraft(next);
  };

  const total = draft.length + autos.length;

  const add = (hit: SearchHitDTO) => {
    if (inKit.has(Number(hit.id))) return;
    if (total + 1 > KIT_LIMITS.maxItems) {
      notify.error(m.kits_items_limit({ max: KIT_LIMITS.maxItems }));
      return;
    }
    change([...draftRef.current, draftFromHit(hit)], { immediate: true });
    setAnnouncement(m.kits_announce_added({ name: hit.title, position: draftRef.current.length }));
  };

  const remove = (modId: number) => {
    const current = draftRef.current;
    const index = current.findIndex((item) => item.modId === modId);
    const item = current[index];
    if (!item) return;
    change(current.filter((entry) => entry.modId !== modId));
    setAnnouncement(m.kits_announce_removed({ name: item.name }));
    notify.info(m.kits_removed({ name: item.name }), {
      action: {
        label: m.common_action_undo(),
        onClick: () => {
          const now = draftRef.current;
          if (now.some((entry) => entry.modId === modId)) return;
          const restored = [...now];
          restored.splice(Math.min(index, restored.length), 0, item);
          change(restored);
          setAnnouncement(m.kits_announce_restored({ name: item.name }));
        },
      },
    });
  };

  const update = (modId: number, patch: Partial<Pick<DraftItem, 'note' | 'pinned'>>) => {
    change(draftRef.current.map((item) => (item.modId === modId ? { ...item, ...patch } : item)));
  };

  // ---------------------------------------------------------------------------------------------
  // Reordering: keyboard (grab with Space/Enter, arrows, drop with Space/Enter, Escape cancels)
  // ---------------------------------------------------------------------------------------------

  const focusHandle = (modId: number) => {
    window.requestAnimationFrame(() => {
      rowRefs.current.get(modId)?.querySelector<HTMLButtonElement>('button')?.focus();
    });
  };

  const onHandleKeyDown = (item: DraftItem, index: number) => (event: KeyboardEvent<HTMLButtonElement>) => {
    const current = draftRef.current;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (grabbed?.modId === item.modId) {
        setGrabbed(null);
        setAnnouncement(m.kits_announce_dropped({ name: item.name, position: index + 1, total: current.length }));
        if (grabbed.from !== index) change(current);
      } else {
        setGrabbed({ modId: item.modId, from: index });
        setAnnouncement(m.kits_announce_grabbed({ name: item.name, position: index + 1, total: current.length }));
      }
      return;
    }
    if (grabbed?.modId !== item.modId) return;
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const target =
        event.key === 'ArrowUp'
          ? Math.max(0, index - 1)
          : event.key === 'ArrowDown'
            ? Math.min(current.length - 1, index + 1)
            : event.key === 'Home'
              ? 0
              : current.length - 1;
      if (target === index) return;
      reorderLive(move(current, index, target));
      setAnnouncement(m.kits_announce_moved({ name: item.name, position: target + 1, total: current.length }));
      focusHandle(item.modId);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      reorderLive(move(current, index, grabbed.from));
      setGrabbed(null);
      setAnnouncement(m.kits_announce_cancelled({ name: item.name, position: grabbed.from + 1 }));
      focusHandle(item.modId);
    }
  };

  const onHandleBlur = (item: DraftItem) => () => {
    // Leaving the handle drops the item where it is.
    if (grabbed?.modId !== item.modId) return;
    const current = draftRef.current;
    const index = current.findIndex((entry) => entry.modId === item.modId);
    setGrabbed(null);
    if (index !== grabbed.from) change(current);
  };

  // ---------------------------------------------------------------------------------------------
  // Reordering: pointer (mouse, pen, touch) on the handle
  // ---------------------------------------------------------------------------------------------

  const onHandlePointerDown = (item: DraftItem) => (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const from = draftRef.current.findIndex((entry) => entry.modId === item.modId);
    setDrag({ modId: item.modId, pointerId: event.pointerId });
    const handle = event.currentTarget;
    const onMove = (moveEvent: globalThis.PointerEvent) => {
      if (moveEvent.pointerId !== event.pointerId) return;
      const current = draftRef.current;
      const index = current.findIndex((entry) => entry.modId === item.modId);
      let target = index;
      for (const [position, entry] of current.entries()) {
        const row = rowRefs.current.get(entry.modId);
        if (!row) continue;
        const rect = row.getBoundingClientRect();
        if (moveEvent.clientY >= rect.top && moveEvent.clientY <= rect.bottom) {
          target = position;
          break;
        }
      }
      if (target !== index) reorderLive(move(current, index, target));
    };
    const finish = (endEvent: globalThis.PointerEvent) => {
      if (endEvent.pointerId !== event.pointerId) return;
      handle.removeEventListener('pointermove', onMove);
      handle.removeEventListener('pointerup', finish);
      handle.removeEventListener('pointercancel', finish);
      setDrag(null);
      const current = draftRef.current;
      const index = current.findIndex((entry) => entry.modId === item.modId);
      if (index !== from) {
        change(current);
        setAnnouncement(m.kits_announce_dropped({ name: item.name, position: index + 1, total: current.length }));
      }
    };
    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', finish);
    handle.addEventListener('pointercancel', finish);
  };

  const conflicts = kit.compat.conflicts;
  const broken = kit.compat.broken;

  return (
    <section aria-labelledby="kit-items-title" className="grid gap-4">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="kit-items-title" className="text-lg font-semibold text-fg">
          {m.kits_items_title()}
        </h2>
        <p className="font-mono text-xs text-fg-muted tabular-nums">
          {m.kits_items_total({ count: total, max: KIT_LIMITS.maxItems })}
        </p>
      </div>

      <ModPicker inKit={inKit} onPick={add} disabled={total >= KIT_LIMITS.maxItems} />

      {conflicts > 0 ? (
        <Banner tone="danger" title={m.kits_conflicts_title({ count: conflicts })}>
          {m.kits_conflicts_text()}
        </Banner>
      ) : null}
      {broken > 0 ? (
        <Banner tone="warning" title={m.kits_broken_title({ count: broken })}>
          {m.kits_broken_text()}
        </Banner>
      ) : null}

      <p id={instructionsId} className="sr-only">
        {m.kits_drag_instructions()}
      </p>
      <p className="sr-only" aria-live="assertive" aria-atomic="true">
        {announcement}
      </p>

      {draft.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Layers} size={32} />}
          title={m.kits_editor_empty_title()}
          description={m.kits_editor_empty_text()}
          headingLevel={3}
        />
      ) : (
        <ol className="grid gap-2" aria-label={m.kits_items_title()}>
          {draft.map((item, index) => (
            <ItemRow
              key={item.modId}
              item={item}
              index={index}
              total={draft.length}
              grabbed={grabbed?.modId === item.modId}
              dragging={drag?.modId === item.modId}
              rowRef={(node) => {
                if (node) rowRefs.current.set(item.modId, node);
                else rowRefs.current.delete(item.modId);
              }}
              instructionsId={instructionsId}
              onHandlePointerDown={onHandlePointerDown(item)}
              onHandleKeyDown={onHandleKeyDown(item, index)}
              onHandleBlur={onHandleBlur(item)}
              onChange={(patch) => update(item.modId, patch)}
              onRemove={() => remove(item.modId)}
            />
          ))}
        </ol>
      )}

      {autos.length > 0 ? (
        <section aria-labelledby="kit-autos-title" className="grid gap-2">
          <h3 id="kit-autos-title" className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Icon icon={Link2} size={16} />
            {m.kits_autos_title({ count: autos.length })}
          </h3>
          <p className="text-xs text-fg-muted">{m.kits_autos_hint()}</p>
          <ul className="grid gap-2">
            {autos.map((item) => (
              <li
                key={item.mod.id}
                className="flex items-center gap-3 rounded-lg border border-dashed border-border-strong px-3 py-2"
              >
                <span className="size-8 shrink-0 overflow-hidden rounded-sm bg-raised">
                  {item.mod.thumbnail ? (
                    <img src={item.mod.thumbnail.url} alt="" loading="lazy" className="size-full object-cover" />
                  ) : null}
                </span>
                <span className="grid min-w-0 flex-1">
                  <span className="truncate text-sm font-medium text-fg">{item.mod.name}</span>
                  <span className="text-xs text-fg-muted">{m.kits_item_auto_dependency()}</span>
                </span>
                <CompatBadge status={item.mod.compatStatus} short size="sm" />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <SaveStatus
        state={saveState}
        error={saveError}
        revision={kit.revision}
        onRetry={() => {
          window.clearTimeout(timer.current);
          timer.current = undefined;
          void save();
        }}
      />
    </section>
  );
}

function SaveStatus({
  state,
  error,
  revision,
  onRetry,
}: {
  state: SaveState;
  error: string | null;
  revision: number;
  onRetry: () => void;
}) {
  return (
    <div className="flex min-h-11 flex-wrap items-center gap-2 text-sm" role="status" aria-live="polite">
      {state === 'saving' || state === 'pending' ? (
        <>
          <RadarSpinner size={16} className="text-signal" />
          <span className="text-fg-muted">{state === 'saving' ? m.kits_saving() : m.kits_unsaved()}</span>
        </>
      ) : state === 'error' ? (
        <>
          <Icon icon={CloudOff} size={16} className="text-danger" />
          <span className="text-danger">{m.kits_save_failed()}</span>
          {error ? <span className="text-fg-muted">{error}</span> : null}
          <Button variant="secondary" size="sm" onClick={onRetry}>
            {m.common_action_retry()}
          </Button>
        </>
      ) : state === 'saved' ? (
        <>
          <Icon icon={CircleCheck} size={16} className="text-success" />
          <span className="text-fg-muted">{m.kits_saved({ revision })}</span>
        </>
      ) : (
        <>
          <Icon icon={CircleCheck} size={16} className="text-fg-subtle" />
          <span className="text-fg-muted">{m.kits_autosave_hint({ revision })}</span>
        </>
      )}
    </div>
  );
}
