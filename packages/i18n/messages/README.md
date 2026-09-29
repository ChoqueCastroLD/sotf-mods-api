# Messages

One directory per **namespace**, one file per **locale** (all 13, English is the source):

```
messages/<namespace>/<locale>.json      en es de fr it nl pl pt ru sv tr zh ja
```

Each work package writes only its own namespaces (PLAN §12.1). `common`, `errors` and `meta`
belong to WP-13 and cover the site chrome (header, footer, consent, language and theme pickers,
pagination, 404/500, API problem codes and generic SEO metadata): reuse them before adding keys.
`ui` belongs to WP-12 (labels of the `@sotf/ui` primitives); `packages/ui/messages/en.json` is its
bundled English copy and a `@sotf/ui` unit test keeps both equal, so edit the two together.

## Rules (enforced by `pnpm i18n:check`)

- **Flat JSON**, strings only: `{ "mod_download_button": "Download v{version}" }`.
- **Keys**: `snake_case`, prefixed with the namespace (`emails-auth` → `emails_auth_…`), ≤ 80 chars.
  Name keys by meaning, not by English wording (`mod_compat_broken`, not `mod_reported_broken_on`).
- **Complete**: every locale has exactly the English keys. No English fallback is ever shown.
- **Same arguments** in every locale, used the same way (`{n, number}` stays a number).
- **No HTML** and no leading/trailing spaces. Use `…`, typographic quotes and the punctuation
  rules of each language (French: non-breaking space before `: ; ? !` and inside `« »`).

## ICU syntax

| Need | Write |
|---|---|
| Argument | `Hello {name}` |
| Number / compact / percent | `{n, number}` · `{n, number, compact}` · `{r, number, percent}` |
| Date / time (UTC) | `{d, date, long}` · `{d, time, short}` |
| Plural | `{count, plural, =0 {No mods} one {# mod} other {# mods}}` |
| Ordinal | `{place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}` |
| Select | `{kind, select, mod {…} build {…} other {…}}` |
| Literal braces / apostrophe | `'{'` `'}'` · `''` (a lone `'` in text is fine: `don't`) |

Plurals must list the categories each language needs for integers 0–1000 — and only those:

| Locales | Categories |
|---|---|
| en de nl sv tr es fr it pt | `one` `other` (es/fr/it/pt may add `many`) |
| pl ru | `one` `few` `many` `other` |
| zh ja | `other` |

`#` is the locale-formatted number. For relative times, sizes and compact counts computed in code,
pass a preformatted string argument (see `formatRelativeTime`, `formatBytes` in `@sotf/i18n`).
When a noun follows such a preformatted number, also pass the raw number and select the noun with
a plural on it, so ru/pl agree (`622 мода`, `625 модов`): see `common_downloads_compact`
(`{count}` + `{display}`) and `meta_home_description` (`{modCount}` + `{mods}`).

## Workflow

```bash
pnpm --filter @sotf/i18n i18n:glossary download   # how the community already says it (legacy + v2)
pnpm i18n:check                                   # validate everything
pnpm gen                                          # regenerate .generated/ (commit the result)
pnpm i18n:pseudo                                  # pseudo-locale for hard-coded text / overflow; pnpm gen restores
```
