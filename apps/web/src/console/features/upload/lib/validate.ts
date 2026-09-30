/**
 * Inline checks of the wizard's text fields, mirroring the `DraftData` contract so the creator
 * sees a problem where it is typed (the saved copy drops invalid values, see `sanitize.ts`).
 */

export function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    return (url.protocol === 'https:' || url.protocol === 'http:') && url.hostname.length > 0;
  } catch {
    return false;
  }
}

/** Same pattern as the contract's `YouTubeUrl`. */
const YOUTUBE = /^https:\/\/(?:www\.|m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)[\w-]{6,}/;

export function isYouTubeUrl(value: string): boolean {
  return isHttpUrl(value) && YOUTUBE.test(value.trim());
}

/** Semver-like RedLoader version (`0.9.0`, `v0.9`). */
export function isLoaderVersion(value: string): boolean {
  return /^v?\d+(?:\.\d+){0,3}(?:[-+][0-9A-Za-z.-]+)?$/.test(value.trim()) && value.trim().length <= 40;
}
