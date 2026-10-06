# Admin — console screens (WP-83)

Ranger Station → Admin (PLAN §7.4 «Admin», §7.10, §7.2). Admins only: `routes/ranger/admin/route.tsx`
checks the role; the API re-checks every call and also demands a session younger than 12 h —
`REAUTH_REQUIRED` shows «Confirm it's you» (`ReauthPanel`, or a toast with «Sign in again» on writes),
which signs out and returns to the same screen after the new sign-in.

| Route (`routes/ranger/admin/`) | Screen | API |
|---|---|---|
| `/ranger/admin` | redirects to game builds | — |
| `game-builds` | `GameBuildsScreen`: register/edit/delete, make current, breaking warning | `admin.*GameBuild*` |
| `ecosystem` | `EcosystemScreen`: loader releases × builds matrix (optimistic cells, notes), add release | `compat.ecosystem`, `admin.putEcosystem`, `admin.*LoaderRelease*` |
| `taxonomy` | `TaxonomyScreen`: categories (create, edit, retire → 409 points at recategorize) and tags | `admin.*Categor*`, `admin.*Tag*` |
| `recategorize?from=<slug>` | `RecategorizeScreen`: suggestions table, filters, per-row and batch edit, CSV import/export, apply in batches of 500 | `admin.recategorize` |
| `announcements` | `AnnouncementsScreen`: global banner, 13 locales, window, preview | `admin.*Announcement*` |
| `settings` | `SettingsScreen`: feature flags, rate-limit overrides, ads, moderation templates | `admin.get/putSetting` |
| `integrations` | `IntegrationsScreen`: Discord webhooks (masked URLs, events, beta opt-out) | `admin.get/putSetting('discordWebhooks')` |
| `performance?range=7d\|28d` | `PerformanceScreen`: RUM p75 per template × country, CWV ratings, sortable | `admin.rum` |
| `operations` | `OperationsScreen`: pg-boss queue depth, failures and oldest wait (health per queue), dead letters, downloads per hour/day, CDN purge state; refreshes every minute. 404/410/5xx rates stay in the logs | `admin.operations` |

- `constants.ts` mirrors the contract enums (type-checked) so the chunks ship no Zod.
- `setting-draft.tsx`: one `SiteSetting` as a typed draft (dirty tracking, save, discard, «leave?» guard).
- Messages: `packages/i18n/messages/admin/<locale>.json` (`m.admin_*`, 13 locales).

## Recategorisation CSV (WP-84 `suggest-categories.ts`)

Header row required; delimiter `,` `;` or tab; UTF-8 (BOM ok); RFC 4180 quoting. Header names are
matched loosely (case and `_`/`-` ignored):

| Column | Aliases | |
|---|---|---|
| `modId` | `id`, `mod`, `mod_id` | numeric mod id (a non-numeric value is read as a manifest id) |
| `manifestId` | `manifest` | used when there is no numeric id; only resolves mods listed by the rules |
| `categorySlug` | `category`, `suggestedCategory`, `to` | **required**; must be an active mod category |
| `tagSlugs` | `tags`, `suggestedTags` | separated by `\|`, `;`, `,` or spaces; unknown tags are dropped; ≤ 5 |
| `confidence` | `score` | 0–1 or 0–100 (`%` ok) |
| `reason` | `llmReason`, `why`, `rationale`, `source` | free text |
| `name`, `currentCategory` | `modName`, `title` · `current`, `from` | display only |

A line for a listed mod replaces its rule suggestion; other lines add rows. Nothing is written
until the admin selects rows and confirms «Apply». Tags are **added** to each mod's current public
tags (the API replaces the whole set), never removed; «Export CSV» writes the same columns.

The merged WP-84 output (`modId,categorySlug,tagSlugs,slug,name,currentCategory,source,confidence,…,llmReason`,
`tagSlugs` separated by `;`) is read as is: `llmReason` fills the reason, else `source`.
