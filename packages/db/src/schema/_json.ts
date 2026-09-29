/**
 * TypeScript shapes of the jsonb columns (PLAN §6.3, §6.4). The authoritative validation lives in
 * the Zod contracts (@sotf/contracts); these types only document the stored structure. Every key
 * is optional because rows written before a key existed must still type-check.
 */

/** `{ "<locale>": { name, description? } }` of "Category"."i18n" and "Tag"."i18n". */
export type LocalizedNames = Partial<Record<string, { name: string; description?: string }>>;

export interface UserLink {
  label?: string;
  url: string;
}

export interface UserSettings {
  locale?: string;
  theme?: string;
  density?: string;
  reducedMotion?: boolean;
  nsfwOptIn?: boolean;
  nsfwConfirmedAt?: string;
  downloadHistory?: boolean;
  numberFormat?: string;
}

export interface UserPrivacy {
  hideActivity?: boolean;
  hideRank?: boolean;
  hideFromLeaderboards?: boolean;
  hideKits?: boolean;
}

export interface SupportLink {
  kind?: string;
  url: string;
}

export interface BuildMeta {
  guid?: string;
  buildshareVersion?: string;
  elements?: number;
  structures?: number;
  blueprintAuthor?: string;
  sizeClass?: string;
}

export interface MediaVariant {
  w: number;
  format: 'avif' | 'webp' | 'png' | 'jpeg';
  key: string;
  bytes: number;
}

export interface ZipEntry {
  path: string;
  size: number;
  compressed: number;
  crc32: number;
}

export type JsonObject = { [key: string]: unknown };
