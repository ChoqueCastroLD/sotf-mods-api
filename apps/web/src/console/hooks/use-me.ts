/**
 * The signed-in user (`GET /api/v2/me`: user, permissions, settings, privacy, unread count).
 *
 * The root route's guard loads it before any console screen renders, so inside the console
 * `useMe()` always has data (it suspends only if the cache was cleared).
 */
import type { Permission } from '@sotf/contracts/me';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { type Me, shellApi } from '../lib/http.ts';
import { queryKeys } from '../lib/query-keys.ts';

export type { Me };

export const meQuery = queryOptions({
  queryKey: queryKeys.me,
  queryFn: ({ signal }) => shellApi.me(signal),
  staleTime: 60_000,
});

export function useMe(): Me {
  return useSuspenseQuery(meQuery).data;
}

/** Permission check for UI affordances (the server always re-checks). */
export function hasPermission(me: Pick<Me, 'permissions'>, permission: Permission): boolean {
  return me.permissions.includes(permission);
}

export function usePermission(permission: Permission): boolean {
  return hasPermission(useMe(), permission);
}

/** Moderators and admins (Ranger Station). */
export function isRanger(me: Pick<Me, 'user'>): boolean {
  return me.user.role === 'moderator' || me.user.role === 'admin';
}
