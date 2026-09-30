# You (`/me/backpack`, `/me/downloads`, WP-81)

- `BackpackScreen` — followed mods (`GET /me/follows`) with update and compatibility state; filters
  all / updates / broken on the current build; download, update signals on/off (`PUT /mods/:id/follow`)
  and unfollow with «Undo». Leads with the «Day 1 on the island» checklist.
- `DownloadsScreen` — download history (`GET /me/downloads`): last downloaded vs current version,
  compatibility, «Update available» / «Broken on the current build»; download, «Did it work?»
  (`DidItWorkDialog` → `POST /compat-reports`, highlighted for pending `GET /me/compat-prompts`),
  follow / unfollow (`GET /me/follows/lookup`), remove a row (local to the browser until the API has a
  per-mod delete), clear everything (`DELETE /me/downloads`) and turn the history off.
- `OnboardingChecklist` — the five T0-33 steps (`GET/PATCH /me/onboarding`, with `Sotf-Time-Zone`).
- `/me` redirects to `/me/backpack`; `/me/kits` belongs to the kits feature.
- Text: namespace `me` (13 locales) through `m.…()`. Query keys live under `['me', …]`.
