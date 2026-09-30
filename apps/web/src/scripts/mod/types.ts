/**
 * Data the server hands to the mod page scripts (WP-62): one `<script type="application/json"
 * id="mod-page-data">` per page, rendered by `components/mod/PageData.astro`. The strings are
 * already localised on the server, so the scripts ship no message catalogue.
 */

export interface ModPageDependency {
  name: string;
  manifestId: string;
  /** Mod page of the dependency (null when it is not on the site). */
  href: string | null;
  /** Download route of its latest version (null when not downloadable here). */
  downloadHref: string | null;
}

export interface ModPageMessages {
  follow: string;
  following: string;
  followed: string;
  unfollowed: string;
  creatorFollow: string;
  creatorFollowing: string;
  creatorFollowed: string;
  creatorUnfollowed: string;
  /** `{n}` templates per CLDR plural category («{n} followers»). */
  followers: Record<string, string>;
  videoEmbedTitle: string;
  undo: string;
  error: string;
  offline: string;
  rateLimited: string;
  signInRequired: string;
  verifyEmail: string;
  copied: string;
  copyFailed: string;
  downloadDone: string;
  downloadDoneHint: string;
  downloadAllProgress: string;
  whatsNewTitle: string;
  whatsNewBadge: string;
  whatsNewUpToDate: string;
  compatPrompt: string;
  compatPromptAction: string;
  galleryCounter: string;
  videoTitle: string;
  close: string;
  shareTitle: string;
}

export interface ModPageData {
  modId: number;
  name: string;
  /** Localised absolute canonical URL (share links, QR code). */
  url: string;
  shortDescription: string;
  /** Latest version string (the «Did it work?» prompt). */
  latestVersion: string | null;
  /** `/login?next=…` of the current page. */
  loginHref: string;
  /** Required dependencies available on the site (the «You also need» sheet). */
  requiredDependencies: ModPageDependency[];
  /** Required dependencies that are not downloadable here (shown as «Not available on the site»). */
  unavailableDependencies: number;
  messages: ModPageMessages;
}

export const MOD_PAGE_DATA_ID = 'mod-page-data';
