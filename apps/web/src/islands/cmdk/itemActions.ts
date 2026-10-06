/**
 * Actions of the highlighted row (the «⋯» menu and its shortcuts): open, new tab, download the
 * latest version, follow / unfollow (signed in), copy link / mod ID, changelog and versions,
 * report. Shortcuts avoid the browser's own (no Ctrl+D, Ctrl+L, Ctrl+C):
 * `Enter`, `⌘/Ctrl+Enter`, `Shift+Enter`, `→` opens the menu and each action has a single-letter
 * mnemonic inside it.
 */
import { apiCall } from '../../scripts/mod/api.ts';
import { t } from './i18n.ts';
import type { Session } from './session.ts';
import type { EntryItem, PaletteItem } from './types.ts';
import { isEntry } from './types.ts';

export type ItemActionId = 'open' | 'new-tab' | 'download' | 'follow' | 'copy-link' | 'copy-id' | 'versions' | 'report';

export interface ItemAction {
  id: ItemActionId;
  label: string;
  /** Latin letter that triggers it inside the menu (language independent). */
  mnemonic: string;
  /** Key combination that triggers it from the list, for the footer and the menu. */
  shortcut: 'enter' | 'mod-enter' | 'shift-enter' | null;
}

export interface ItemActionEnv {
  session: Session;
  /** Whether the viewer follows the item; null while unknown. */
  following: boolean | null;
}

/** `/mods/:user/:slug/download/latest` of a mod, library or build (download routes live under `/mods`). */
export function latestDownloadPath(item: EntryItem): string | null {
  if (item.type !== 'mod' && item.type !== 'build') return null;
  const [, section, user, slug] = item.path.split('/');
  if ((section !== 'mods' && section !== 'builds') || !user || !slug) return null;
  return `/mods/${user}/${slug}/download/latest`;
}

/** Whether the versions page applies (builds have none). */
export function isPlainMod(item: EntryItem): boolean {
  return item.type === 'mod' && item.path.startsWith('/mods/');
}

export function itemActionsFor(item: PaletteItem, env: ItemActionEnv): ItemAction[] {
  if (!isEntry(item)) return [];
  const actions: ItemAction[] = [
    { id: 'open', label: t('cmdk_preview_open'), mnemonic: 'O', shortcut: 'enter' },
    { id: 'new-tab', label: t('cmdk_act_new_tab'), mnemonic: 'N', shortcut: 'mod-enter' },
  ];
  const isMod = item.type === 'mod' || item.type === 'build';
  if (latestDownloadPath(item)) {
    actions.push({ id: 'download', label: t('cmdk_preview_download'), mnemonic: 'D', shortcut: 'shift-enter' });
  }
  const followable =
    (isMod && env.session.signedIn) ||
    (item.type === 'user' && env.session.signedIn && (env.session.id === null || env.session.id !== item.id));
  if (followable) {
    actions.push({
      id: 'follow',
      label: env.following ? t('cmdk_act_unfollow') : t('cmdk_act_follow'),
      mnemonic: 'F',
      shortcut: null,
    });
  }
  if (item.type !== 'page')
    actions.push({ id: 'copy-link', label: t('cmdk_act_copy_link'), mnemonic: 'L', shortcut: null });
  if (isMod && item.manifestId) {
    actions.push({ id: 'copy-id', label: t('cmdk_act_copy_id'), mnemonic: 'I', shortcut: null });
  }
  if (isPlainMod(item)) actions.push({ id: 'versions', label: t('cmdk_act_versions'), mnemonic: 'V', shortcut: null });
  if (isMod) actions.push({ id: 'report', label: t('cmdk_act_report'), mnemonic: 'R', shortcut: null });
  return actions;
}

/** Copies text; true when it worked. Falls back to a hidden textarea where the async API is missing. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    field.remove();
    return ok;
  }
}

// ---------------------------------------------------------------------------------------------
// Follow
// ---------------------------------------------------------------------------------------------

const followState = new Map<string, boolean>();

/** Whether the viewer follows a mod or creator (`GET /me/follows/lookup`, cached for the page). */
export async function lookupFollowing(item: EntryItem): Promise<boolean | null> {
  if (typeof item.id !== 'number' || (item.type !== 'mod' && item.type !== 'build' && item.type !== 'user'))
    return null;
  const known = followState.get(item.key);
  if (known !== undefined) return known;
  const param = item.type === 'user' ? 'user' : 'mod';
  const result = await apiCall<{ mods?: number[]; users?: number[] }>(
    'GET',
    `/api/v2/me/follows/lookup?${param}=${item.id}`,
  );
  if (!result.ok) return null;
  const ids = (item.type === 'user' ? result.data.users : result.data.mods) ?? [];
  const following = ids.includes(item.id);
  followState.set(item.key, following);
  return following;
}

export type FollowOutcome =
  | { ok: true; following: boolean }
  | { ok: false; reason: 'unauthenticated' | 'email' | 'rate' | 'offline' | 'error' };

export async function setFollowing(item: EntryItem, follow: boolean): Promise<FollowOutcome> {
  const path =
    item.type === 'user'
      ? `/api/v2/users/${encodeURIComponent(item.handle ?? '')}/follow`
      : `/api/v2/mods/${item.id}/follow`;
  const result = follow ? await apiCall('PUT', path, { notify: true }) : await apiCall('DELETE', path);
  if (!result.ok) {
    const reason = result.reason;
    return {
      ok: false,
      reason:
        reason === 'unauthenticated' || reason === 'email' || reason === 'rate' || reason === 'offline'
          ? reason
          : 'error',
    };
  }
  followState.set(item.key, follow);
  return { ok: true, following: follow };
}
