# You (`/me/following`, `/me/downloads`, WP-81)

- `BackpackScreen` — followed mods (`GET /me/follows`) with update state; filters all / updates;
  download, update notifications on/off (`PUT /mods/:id/follow`) and unfollow with «Undo».
- `DownloadsScreen` — download history (`GET /me/downloads`): last downloaded vs current version,
  «Update available»; download, follow / unfollow (`GET /me/follows/lookup`), remove a row
  (`DELETE /me/downloads/:modId`), clear everything (`DELETE /me/downloads`) and turn the history off.
- `/me` redirects to `/me/following`.
- Text: namespace `me` (13 locales) through `m.…()`. Query keys live under `['me', …]`.
