# @sotf/i18n

Internationalisation for SOTF Mods v2 (PLAN §4.1, §7.11): **13 locales**, typed and
tree-shakeable messages (Paraglide JS 2), locale-aware URLs and hreflang, and `Intl` formatters.

| Locale (URL code) | en | es | de | fr | it | nl | pl | pt | ru | sv | tr | zh | ja |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BCP-47 (`hreflang`, `lang`, `Intl`) | en | es | de | fr | it | nl | pl | **pt-BR** | ru | sv | tr | **zh-Hans** | ja |

English has no URL prefix and is `x-default`; the others live under `/{locale}/…`.

## Entry points

| Import | Contents | Where |
|---|---|---|
| `@sotf/i18n` | `LOCALES`, `LOCALE_INFO`, `isLocale`, `toHreflang`, `toOgLocale`, `matchLocale`, `negotiateLocale`, `parseAcceptLanguage`, `fromLegacyLangCookie` · `localizePath`, `stripLocale`, `isLocalizedPath`, `hreflangAlternates` · `formatNumber`, `formatCompactNumber`, `formatBytes`, `formatPercent`, `formatUnit`, `formatDate`, `formatTime`, `formatDateTime`, `formatRelativeTime`, `formatList`, `compareStrings`, `toIsoDate` | anywhere (no messages, no Node/DOM) |
| `@sotf/i18n/messages` | `m` (all messages) and each message as a named export | anywhere; bundlers keep only the messages you call |
| `@sotf/i18n/runtime` | `getLocale`, `setLocale`, `localeFromDocument`, `overwriteGetLocale`… | anywhere |
| `@sotf/i18n/server` | `withLocale(locale, fn)`, `requestLocale()` | Node only (web SSR, api, worker, emails) |
| `@sotf/i18n/errors` | `describeProblem(code, { retryAfterSeconds })`, `PROBLEM_CODES` | anywhere |

```ts
import { m } from '@sotf/i18n/messages';
import { formatCompactNumber, formatRelativeTime } from '@sotf/i18n';

m.common_mods_count({ count: 3 });                               // "3 mods" · "3 мода"…
m.common_updated_ago({ when: formatRelativeTime(locale, date) }); // "Updated 2 hr. ago"
m.errors_not_found_title({}, { locale: 'es' });                  // explicit locale
```

## Runtime: which locale does a message use?

1. **Explicit**: `m.key(inputs, { locale })` always wins.
2. **Server**: the request locale set with `withLocale()` (AsyncLocalStorage). Import
   `@sotf/i18n/server` once in every server process: it also makes `getLocale()` fall back to
   English outside a request and makes `setLocale()` throw (a process-wide locale would leak
   between concurrent requests).

   ```ts
   // apps/web middleware (WP-22): the URL decides the locale; never cookies or Accept-Language.
   const { locale, path } = stripLocale(url.pathname + url.search);
   return withLocale(locale, () => next(path));
   ```
3. **Browser**: the last `setLocale(locale, { reload: false })` (console SPA; it also updates
   `<html lang>`), otherwise the page language from `<html lang>` (islands follow the SSR page
   automatically), otherwise English.

## Formatting rules

- Pass the locale explicitly; formatters never read global state.
- Dates default to **UTC** because public HTML is shared by everyone and cached at the edge. Pass
  `{ timeZone }` only in per-user client UI.
- Sizes use binary multiples with Windows labels (1 KB = 1024 B), matching what players see.
- Compact numbers keep 3 significant digits: `1.98M`, `1,98 M`, `198万`.

## Messages and generated code

- Sources: `messages/<namespace>/<locale>.json` (flat JSON, ICU MessageFormat). Rules, syntax and
  the per-locale plural categories are in [`messages/README.md`](messages/README.md).
- `pnpm gen` validates the catalog, merges every namespace into `.generated/<locale>.json`
  (inlang message format) and compiles it with Paraglide into `.generated/paraglide/` (one module
  per message + `.d.ts`). Output is deterministic and **committed**; never edit it by hand; on a
  merge conflict, take either side and run `pnpm gen`.
- The inlang project (`project.inlang/settings.json`) is loaded in memory with the message-format
  plugin from `node_modules`: no CDN plugin downloads, nothing written into `project.inlang/`.

## Commands

| Command | What it does |
|---|---|
| `pnpm i18n:check` (root) | Every key in the 13 locales, ICU syntax, argument parity, CLDR plural categories, hygiene, `.generated/` fresh. `--verbose` lists translations identical to English; `--strict` fails on warnings |
| `pnpm gen` (root) | Regenerates `.generated/` (with the other registries) |
| `pnpm i18n:pseudo` (root) | Pseudo-localizes English (`⟦Šéàŕçĥ ṁöðš ·····⟧`, +35 %) to spot hard-coded text and overflow. `--locale <lc>`, `--expansion 0.5`. Temporary: `pnpm gen` restores, and `i18n:check`/CI fail while it is active |
| `pnpm --filter @sotf/i18n i18n:glossary <term>` | Shows a term in every locale from the legacy site and the v2 catalog |
| `pnpm --filter @sotf/i18n i18n:import-legacy --from <sotf-mods-frontend>` | Re-imports the legacy translations into `legacy/` (`--check` compares) |
| `pnpm --filter @sotf/i18n test` | Unit tests, including tree-shaking size and per-request locale isolation |

## Legacy glossary

`legacy/<locale>.json` are the 12 translation files of the legacy site
(`sotf-mods-frontend/src/translations/*.translations.ts`), renamed to v2 codes (`ch` → `zh`,
`se` → `sv`; there is no Japanese file). They are **reference only** — never loaded at runtime —
so translators reuse the words the community already knows.
