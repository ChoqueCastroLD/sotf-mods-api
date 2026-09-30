/**
 * The editable list of a kit (explicit items only: dependencies are recomputed by the server on
 * every save and shown apart). Pure helpers, so the editor component stays about interaction.
 */
import type { CompatStatus } from '@sotf/contracts/common';
import type { ItemInput, KitDTO, SearchHitDTO } from './api.ts';

export interface DraftItem {
  modId: number;
  name: string;
  /** «@creator» (or the creator's name). */
  subtitle: string | null;
  thumbnailUrl: string | null;
  /** Locale-less public path of the mod. */
  path: string | null;
  compatStatus: CompatStatus | null;
  latestVersion: string | null;
  note: string;
  pinned: { id: number; version: string } | null;
}

export function draftOf(kit: KitDTO): DraftItem[] {
  return kit.items
    .filter((item) => !item.isAutoDependency)
    .map((item) => ({
      modId: item.mod.id,
      name: item.mod.name,
      subtitle: `@${item.mod.userHandle}`,
      thumbnailUrl: item.mod.thumbnail?.url ?? null,
      path: item.mod.canonicalPath,
      compatStatus: item.mod.compatStatus,
      latestVersion: item.mod.latestVersion,
      note: item.note ?? '',
      pinned: item.pinnedVersion,
    }));
}

export function draftFromHit(hit: SearchHitDTO): DraftItem {
  return {
    modId: Number(hit.id),
    name: hit.title,
    subtitle: hit.subtitle,
    thumbnailUrl: hit.thumbnailUrl,
    path: hit.path,
    compatStatus: hit.compatStatus,
    latestVersion: null,
    note: '',
    pinned: null,
  };
}

/** Body of `PUT /kits/:id/items`. */
export function inputsOf(draft: readonly DraftItem[]): ItemInput[] {
  return draft.map((item) => {
    const note = item.note.trim();
    return {
      modId: item.modId,
      ...(note ? { note } : {}),
      ...(item.pinned ? { pinnedVersionId: item.pinned.id } : {}),
    };
  });
}

/** Stable comparison key of a list (order, notes, pins). */
export function signatureOf(draft: readonly DraftItem[]): string {
  return JSON.stringify(inputsOf(draft));
}

export function move<T>(list: readonly T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) return [...list];
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item as T);
  return next;
}
