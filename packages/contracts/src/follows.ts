/**
 * Follow = Backpack (PLAN §7.3, §6.8 "Favoritos → Backpack", T0-16). Implemented by WP-42.
 *
 * Following a mod reuses the legacy `ModFavorite` table (+ `notify`); `Mod.favoritesCount` is kept
 * in the same transaction. Following a creator uses `UserFollow`.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO } from './catalog.ts';
import { Count, EntityId, Handle, IdParam, IsoDateTime, VersionString } from './common.ts';
import { CompatSummaryDTO } from './compat.ts';
import { dto, exampleOf, wireList } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const FollowBody = dto('FollowBody', z.strictObject({ notify: z.boolean().default(true) }), {
  description: 'Follow with or without update notifications.',
  examples: [{ notify: true }],
});
export type FollowBody = z.infer<typeof FollowBody>;

export const FollowStateDTO = dto(
  'FollowStateDTO',
  z.object({ following: z.boolean(), notify: z.boolean(), followers: Count }),
  {
    description: 'Follow state after the change, with the new follower count.',
    examples: [{ following: true, notify: true, followers: 25 }],
  },
);
export type FollowStateDTO = z.infer<typeof FollowStateDTO>;

export const BackpackItemDTO = dto(
  'BackpackItemDTO',
  z.object({
    mod: ModCardDTO,
    notify: z.boolean(),
    followedAt: IsoDateTime,
    lastDownloadedVersion: VersionString.nullable(),
    hasUpdate: z.boolean(),
    compat: CompatSummaryDTO,
  }),
  {
    description: 'A followed mod in the backpack.',
    examples: [
      {
        mod: exampleOf(ModCardDTO),
        notify: true,
        followedAt: '2026-05-01T10:00:00.000Z',
        lastDownloadedVersion: '1.3.7',
        hasUpdate: true,
        compat: exampleOf(CompatSummaryDTO),
      },
    ],
  },
);
export type BackpackItemDTO = z.infer<typeof BackpackItemDTO>;

export const BackpackDTO = dto('BackpackDTO', z.object({ items: z.array(BackpackItemDTO), updatesAvailable: Count }), {
  description: 'Mods followed by the signed-in user.',
  examples: [{ items: [exampleOf(BackpackItemDTO)], updatesAvailable: 1 }],
});
export type BackpackDTO = z.infer<typeof BackpackDTO>;

export const FollowLookupDTO = dto('FollowLookupDTO', z.object({ mods: z.array(EntityId), users: z.array(EntityId) }), {
  description: 'Which of the requested mods/users the viewer follows.',
  examples: [{ mods: [20], users: [] }],
});
export type FollowLookupDTO = z.infer<typeof FollowLookupDTO>;

export const FollowLookupQuery = z.object({
  mod: wireList(z.string().regex(/^\d{1,12}$/), { max: 100, description: 'Mod ids' }),
  user: wireList(z.string().regex(/^\d{1,12}$/), { max: 100, description: 'User ids' }),
});

export const followsEndpoints = {
  followMod: defineEndpoint({
    id: 'follows.followMod',
    owner: 'WP-42',
    method: 'PUT',
    path: `${API_V2_PREFIX}/mods/:id/follow`,
    summary: 'Follow a mod (add to the backpack)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    body: FollowBody,
    response: FollowStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unfollowMod: defineEndpoint({
    id: 'follows.unfollowMod',
    owner: 'WP-42',
    method: 'DELETE',
    path: `${API_V2_PREFIX}/mods/:id/follow`,
    summary: 'Unfollow a mod',
    auth: 'session',
    params: z.object({ id: IdParam }),
    response: FollowStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  followUser: defineEndpoint({
    id: 'follows.followUser',
    owner: 'WP-42',
    method: 'PUT',
    path: `${API_V2_PREFIX}/users/:handle/follow`,
    summary: 'Follow a creator',
    auth: 'session',
    requires: ['not_own_content'],
    params: z.object({ handle: Handle }),
    body: FollowBody,
    response: FollowStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unfollowUser: defineEndpoint({
    id: 'follows.unfollowUser',
    owner: 'WP-42',
    method: 'DELETE',
    path: `${API_V2_PREFIX}/users/:handle/follow`,
    summary: 'Unfollow a creator',
    auth: 'session',
    params: z.object({ handle: Handle }),
    response: FollowStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  backpack: defineEndpoint({
    id: 'follows.backpack',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/follows`,
    summary: 'My backpack (followed mods with update and compatibility state)',
    auth: 'session',
    response: BackpackDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  lookup: defineEndpoint({
    id: 'follows.lookup',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/follows/lookup`,
    summary: 'Follow state of several mods/users (for the ♥ buttons of cached pages)',
    auth: 'session',
    query: FollowLookupQuery,
    response: FollowLookupDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
} as const;
