# Settings (`/settings/*`, WP-81)

Screens of the account settings (PLAN §4.3, §7.1 T0-13/14/15/30, research/03 §6.11). Routes live in
`routes/settings/`; each section is a screen here, framed by `layout.tsx` (`SettingsPage`: heading
and the «← Settings» link on phones; `SettingsCard`: a card that saves on its own with a toast;
`SettingsIndex`: the section list at `/settings`).

| Section | Screen | API |
|---|---|---|
| Profile | `ProfileScreen` — avatar/banner upload with crop → WebP (`ImageCropDialog`, `upload.ts`), «Reroll terrain» (`bannerSeed`), display name, bio (Markdown, 500), links, pinned mods | `GET /users/:handle`, `GET /users/:handle/mods`, `POST /uploads…`, `PATCH /me/profile` |
| Account | `AccountScreen` — email (verification, resend, change with password), password (≥ 10, revoke other sessions) | `POST /me/email`, `POST /me/password`, `POST /auth/email/resend` |
| Security | `SecurityScreen` — active sessions, sign out one / everywhere else | `GET/DELETE /me/sessions(/:id)` |
| Notifications | `NotificationsScreen` — type × channel matrix (in-app, email instant/daily/weekly/off), restore defaults | `GET/PUT /notification-preferences` |
| Preferences | `PreferencesScreen` — language, number format, theme, density, reduced motion, shortcuts, «Did it work?» prompts, NSFW opt-in with adult confirmation | `PATCH /me/settings` |
| Privacy | `PrivacyScreen` — what the profile shows, download history | `PATCH /me/privacy`, `PATCH /me/settings` |
| Creator | `CreatorScreen` — verified mark and tier, support links, default license and reply templates (this browser: `CREATOR_DEFAULTS_KEY`) | `GET /users/:handle` |
| Your data | `DataScreen` — export (polls until ready; link valid 24 h) and account deletion (14-day grace, mods archived or kept anonymous, cancel) | `POST /me/export`, `GET /me/exports/:id`, `POST /me/delete(/cancel)` |

- `display.ts` applies theme, density and the motion override to `<html>` (`data-density`,
  `data-motion`); the shell should call it after `/me` loads (docs/backlog/WP-81.md).
- `errors.ts` turns API problems into the localized detail + «Ref» of toasts; shared with Signals and Me.
- Text: namespace `settings` (`packages/i18n/messages/settings/<locale>.json`, 13 locales) through `m.…()`.
