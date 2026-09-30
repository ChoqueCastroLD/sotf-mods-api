/**
 * The JSON island of the kit page (`KitPageData.astro` → `scripts/index.ts`): ids, URLs and the
 * localised strings the vanilla script needs (no message catalogue in the bundle).
 */

export const KIT_PAGE_DATA_ID = 'kit-page-data';

export interface KitPageMessages {
  copied: string;
  copyFailed: string;
  shareTitle: string;
  /** «Downloaded {done}/{total}» with literal `{done}` and `{total}` placeholders. */
  progress: string;
  allDone: string;
  forking: string;
  forkFailed: string;
  forkEmail: string;
  forkRate: string;
  offline: string;
}

/** Strings of the follow button and the comment thread (`kitsocial` namespace). */
export interface KitSocialMessages {
  follow: string;
  following: string;
  followed: string;
  unfollowed: string;
  undo: string;
  signInRequired: string;
  followFailed: string;
  rateLimited: string;
  /** `{n}` templates per plural category. */
  commentsCount: Record<string, string>;
  followers: Record<string, string>;
  commentsEmpty: string;
  commentsLoading: string;
  commentsLoadFailed: string;
  retry: string;
  loadMore: string;
  formLabel: string;
  formPlaceholder: string;
  formHint: string;
  formSubmit: string;
  formPosting: string;
  reply: string;
  replyLabel: string;
  replySubmit: string;
  cancel: string;
  edit: string;
  save: string;
  delete: string;
  deleteConfirm: string;
  deletedNote: string;
  curator: string;
  edited: string;
  signInToComment: string;
  signInLink: string;
  verifyEmail: string;
  posted: string;
  saved: string;
  removed: string;
  postFailed: string;
  tooLong: string;
  forbidden: string;
  deletedAuthor: string;
}

export interface KitPageData {
  kitId: number;
  name: string;
  code: string;
  revision: number;
  ownerId: number;
  /** Absolute canonical URL. */
  url: string;
  shortUrl: string;
  /** `/login?next=…` back to this page (localised). */
  loginHref: string;
  /** Console editor of this kit (owners). */
  editHref: string;
  messages: KitPageMessages;
  social: KitSocialMessages;
  /** Profile URL of a handle with the literal `{handle}` placeholder (localised). */
  profileHref: string;
  /** Comment body limit. */
  commentMax: number;
  /** Active locale (plural rules, dates). */
  locale: string;
}

export function readKitPageData(doc: Document = document): KitPageData | null {
  const node = doc.getElementById(KIT_PAGE_DATA_ID);
  if (!node?.textContent) return null;
  try {
    return JSON.parse(node.textContent) as KitPageData;
  } catch {
    return null;
  }
}

/** Replaces `{name}` placeholders. */
export function fill(template: string, values: Readonly<Record<string, string | number>>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
