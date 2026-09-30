/**
 * Query-key prefixes of the console. Feature routes build their keys under these prefixes so the
 * SSE invalidation (`lib/stream.ts`) reaches them:
 *
 *   ['me']                          the signed-in user (`useMe`)
 *   ['notifications', …]            signals list, unread count, preferences
 *   ['studio', 'mods', modId, …]    the creator's own mods (Basecamp)
 *   ['moderation', lane?, …]        Ranger Station queues and counters
 */
export const queryKeys = {
  me: ['me'] as const,
  notifications: ['notifications'] as const,
  unreadCount: ['notifications', 'unread-count'] as const,
  studioMods: ['studio', 'mods'] as const,
  studioMod: (modId: number) => ['studio', 'mods', modId] as const,
  moderation: ['moderation'] as const,
  moderationLane: (lane: string) => ['moderation', lane] as const,
} as const;
