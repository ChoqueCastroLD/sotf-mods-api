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
