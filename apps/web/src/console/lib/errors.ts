/**
 * Error classification shared by the guard, the query client and the error boundaries.
 */
import { isApiError } from '@sotf/contracts/client';

/** Thrown by route guards when the signed-in user lacks the role or permission of an area. */
export class ForbiddenError extends Error {
  readonly requirement: string;

  constructor(requirement: string) {
    super(`forbidden: requires ${requirement}`);
    this.name = 'ForbiddenError';
    this.requirement = requirement;
  }
}

/** 401 from the API: the session is missing or expired. */
export function isUnauthenticated(error: unknown): boolean {
  return isApiError(error) && (error.status === 401 || error.code === 'UNAUTHENTICATED');
}

/** 403 from the API, or a client-side permission check. */
export function isForbidden(error: unknown): boolean {
  return error instanceof ForbiddenError || (isApiError(error) && error.status === 403 && error.code === 'FORBIDDEN');
}

/** 4xx answers are final: retrying them cannot succeed (429 excepted). */
export function isClientError(error: unknown): boolean {
  return isApiError(error) && error.status >= 400 && error.status < 500 && error.status !== 429;
}

/** Request id to show as «Ref: …» next to an error (the API's `x-request-id`). */
export function errorReference(error: unknown): string | undefined {
  return isApiError(error) && error.problem.requestId ? error.problem.requestId : undefined;
}

/** Problem code of an API error (`UNAVAILABLE` for network failures), or null. */
export function problemCode(error: unknown): string | null {
  return isApiError(error) ? error.code : null;
}

const CHUNK_ERROR_PATTERNS = [
  /Failed to fetch dynamically imported module/i,
  /error loading dynamically imported module/i,
  /Importing a module script failed/i,
  /Unable to preload CSS/i,
  /Loading (?:CSS )?chunk [\w-]+ failed/i,
];

/**
 * A lazily-loaded chunk that no longer exists (a deploy replaced the hashed assets while the tab
 * stayed open) or could not be fetched.
 */
export function isChunkLoadError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  if (error.name === 'ChunkLoadError') return true;
  return CHUNK_ERROR_PATTERNS.some((pattern) => pattern.test(error.message));
}
