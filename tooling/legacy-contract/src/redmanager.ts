/**
 * The contract RedManager 1.1.10 relies on, transcribed from `ToniMacaroni/RedManager`
 * `src/lib/mods.ts` (types `Mod`, `ModCategory`, `ModAuthor`, `RequestMeta`, `EndpointResponse`)
 * and research/01 §1.3. The TypeScript types are kept verbatim (minus the client-side fields
 * `isInstalled`, `installedMod` and `hasUpdate`); the Zod mirrors check the JSON at runtime,
 * tolerating what RedManager tolerates (extra fields, `category: null`).
 */
import { z } from 'zod';

/** `type ModCategory = { name: String; slug: String }`. */
export type ModCategory = { name: string; slug: string };
/** `type ModAuthor = { name: String; slug: String }`. */
export type ModAuthor = { name: string; slug: string };

/** `type Mod` of mods.ts (server fields). */
export type Mod = {
  name: string;
  slug: string;
  mod_id: string;
  shortDescription: string;
  isApproved: boolean;
  category: ModCategory;
  user: ModAuthor;
  imageUrl: string;
  latestVersion: string;
  lastReleasedAt: string;
  type: string;
  /** An array in the list; the detail sends the raw string (RedManager iterates its characters). */
  dependencies: string[];
};

/** `type RequestMeta`. */
export type RequestMeta = {
  limit: number;
  next_page: number;
  page: number;
  pages: number;
  prev_page: number;
  total: number;
};

/** `type EndpointResponse = { meta: RequestMeta; data: Mod[] }`. */
export type EndpointResponse = { meta: RequestMeta; data: Mod[] };

/** `const ENDPOINT = "https://api.sotf-mods.com/api/"`. */
export const REDMANAGER_ENDPOINT_PATH = '/api/';

/** Sorting enum of mods.ts (only `newest`). */
export const REDMANAGER_SORTING = 'newest';

/**
 * URL of `ModDatabase.fetchMods` (note the `?&` and the unencoded search term appended as is;
 * `fetch` percent-encodes it through the WHATWG URL parser).
 */
export function fetchModsRoute(page: number, approved = true, nsfw = false, searchTerm: string | null = null): string {
  let route = `${REDMANAGER_ENDPOINT_PATH}mods?&approved=${approved}&orderby=${REDMANAGER_SORTING}&page=${page}&nsfw=${nsfw}`;
  const term = searchTerm?.trim();
  if (term) route += `&search=${term}`;
  return route;
}

/** URL of `ModDatabase.fetchMod(id)` (`"…/api/mods/" + id`, not encoded). */
export function fetchModRoute(id: string): string {
  return `${REDMANAGER_ENDPOINT_PATH}mods/${id}`;
}

const nameSlug = z.looseObject({ name: z.string(), slug: z.string() });

/** Runtime mirror of `Mod` for the list endpoint. */
export const RedManagerListMod = z.looseObject({
  name: z.string(),
  slug: z.string(),
  mod_id: z.string(),
  shortDescription: z.string(),
  isApproved: z.boolean(),
  category: nameSlug.nullable(),
  user: nameSlug,
  imageUrl: z.string().nullable(),
  latestVersion: z.string(),
  lastReleasedAt: z.string(),
  type: z.string().nullable(),
  dependencies: z.array(z.string()),
});

/** Runtime mirror of `EndpointResponse`. */
export const RedManagerEndpointResponse = z.looseObject({
  meta: z.looseObject({
    limit: z.number(),
    next_page: z.number(),
    page: z.number(),
    pages: z.number(),
    prev_page: z.number(),
    total: z.number(),
  }),
  data: z.array(RedManagerListMod),
});

/**
 * `fetchMod` returns `resultData.data` unless `status === false`. The detail keeps the legacy
 * quirk: `dependencies` is the raw string.
 */
export const RedManagerDetailResponse = z.union([
  z.looseObject({ status: z.literal(false) }),
  z.looseObject({
    status: z.literal(true),
    data: RedManagerListMod.extend({ dependencies: z.string() }),
  }),
]);
