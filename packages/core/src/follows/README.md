# Follows domain (WP-42)

Follow mods (the backpack) and creators (PLAN §5.2 "Comunidad", §6.8, T0-16). Served by
`apps/api/src/modules/follows`; import from `@sotf/core/follows/index`.

| Function | Endpoint |
|---|---|
| `followMod` · `unfollowMod` | `PUT` / `DELETE /mods/:id/follow` |
| `followUser` · `unfollowUser` | `PUT` / `DELETE /users/:handle/follow` |
| `getBackpack` | `GET /me/follows` |
| `lookupFollows` | `GET /me/follows/lookup` |

Rules:

- **Mods** reuse the legacy `ModFavorite` table (+ `notify`). The unique index
  `ModFavorite_userId_modId_key` is deferred until backfill B5 archives the legacy duplicates, so
  writes never rely on it: each follow/unfollow takes a transaction-scoped advisory lock on
  `(userId, modId)`, then reads before inserting. Two concurrent follows leave one row.
- `Mod.favoritesCount` (and `ModStats.followers` when the row exists) move by exactly the number of
  rows inserted or deleted, in the same transaction, never below 0 and **without touching
  `Mod.updatedAt`** (§6.8). Unfollow removes legacy duplicates too.
- Only mods reachable by URL can be followed (published, unlisted, archived, pending with passed
  checks; not with a deleted/banned author). Anything that exists can be unfollowed.
- **Creators** use `UserFollow` (no self follows: 403); `UserStats.followersCount/followingCount`
  move in the same transaction.
- New follows and unfollows emit `follow.mod_created|mod_deleted|user_created|user_deleted`
  inside the transaction; changing only `notify` emits nothing. Every call is idempotent.
- **Backpack**: followed mods (most recent first) as catalog cards, `notify`, the last version the
  user downloaded with a session, `hasUpdate` (a different latest version released after that
  download, never for removed mods) and the compatibility of the latest version on the current
  game build. Rejected/never-checked/hidden mods are left out; removed ones stay (status `removed`)
  so they can be unfollowed.

`sql.ts` holds the executor helpers shared with the kits domain (`query`, `intArray`, `at`…).
