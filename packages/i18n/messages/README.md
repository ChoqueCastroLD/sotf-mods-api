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
`ui-domain` (`ui_domain_*`) is the same for the domain components of `@sotf/ui/domain`: its English
file equals `packages/ui/src/domain/messages/en.json` (without `$schema`); edit both together.

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

## Glossary and house style (13 locales)

The brand vocabulary of PLAN §3.8, fixed per locale. The source of truth is the `common_term_*`
keys of `common/<locale>.json`; this table mirrors them. Use the same word (inflected as the
grammar needs) in every namespace: navigation, readouts, SEO titles, emails and signals. When a
term changes, change `common_term_*`, then every message that uses it, then this table.

| Term | en | es | de | fr | it | nl | pl | pt | ru | sv | tr | zh | ja |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `mods` | Mods | Mods | Mods | Mods | Mod | Mods | Mody | Mods | Моды | Moddar | Modlar | 模组 | MOD |
| `libraries` | Libraries | Librerías | Bibliotheken | Bibliothèques | Librerie | Bibliotheken | Biblioteki | Bibliotecas | Библиотеки | Bibliotek | Kütüphaneler | 前置库 | ライブラリ |
| `builds` | Builds | Builds | Builds | Builds | Build | Builds | Buildy | Builds | Постройки | Byggen | Yapılar | 建筑 | 建築 |
| `blueprints` | Blueprints | Planos | Baupläne | Plans | Progetti | Bouwtekeningen | Plany | Plantas | Чертежи | Ritningar | Planlar | 蓝图 | 設計図 |
| `kits` | Kits | Kits | Kits | Kits | Kit | Kits | Zestawy | Kits | Наборы | Kit | Kitler | 套装 | キット |
| `basecamp` | Basecamp | Campamento | Basislager | Camp de base | Campo base | Basiskamp | Obóz | Acampamento | Лагерь | Basläger | Ana Kamp | 营地 | ベースキャンプ |
| `ranger_station` | Ranger Station | Puesto de guardabosques | Rangerstation | Poste des rangers | Stazione dei ranger | Rangerpost | Posterunek strażników | Posto dos guardas | Пост рейнджеров | Rangerstation | Korucu İstasyonu | 护林站 | レンジャーステーション |
| `signals` | Signals | Señales | Signale | Signaux | Segnali | Signalen | Sygnały | Sinais | Сигналы | Signaler | Sinyaller | 信号 | シグナル |
| `notifications` | Notifications | Notificaciones | Benachrichtigungen | Notifications | Notifiche | Meldingen | Powiadomienia | Notificações | Уведомления | Aviseringar | Bildirimler | 通知 | 通知 |
| `backpack` | Backpack | Mochila | Rucksack | Sac à dos | Zaino | Rugzak | Plecak | Mochila | Рюкзак | Ryggsäck | Sırt Çantası | 背包 | バックパック |
| `field_notes` | Field notes | Notas de campo | Feldnotizen | Notes de terrain | Note sul campo | Veldnotities | Notatki terenowe | Notas de campo | Полевые заметки | Fältanteckningar | Saha Notları | 野外笔记 | フィールドノート |
| `field_reports` | Field reports | Reportes de campo | Feldberichte | Rapports de terrain | Rapporti sul campo | Veldrapporten | Raporty terenowe | Relatórios de campo | Полевые отчёты | Fältrapporter | Saha Raporları | 实地报告 | フィールドレポート |
| `patch_radar` | Patch Radar | Radar de parches | Patch-Radar | Radar des patchs | Radar delle patch | Patchradar | Radar patchy | Radar de patches | Радар патчей | Patchradar | Yama Radarı | 补丁雷达 | パッチレーダー |
| ranger (person) | ranger | guardabosques | Ranger | ranger | ranger | ranger | strażnik | guarda | рейнджер | ranger | korucu | 护林员 | レンジャー |

Notes:

- **Game build** (the Sons of the Forest patch, `{build}`) is a different concept from a player
  **build** (BuildShare blueprint). Keep the game sense as «build del juego», «Spiel-Build»,
  «build du jeu», «build gry», «сборка игры», «ゲームビルド»…
- **Kits** keep the English word where the community uses it (es, de, fr, it, nl, pt, sv, tr);
  pl «zestaw», ru «набор», zh «套装», ja «キット». SEO copy may add «mod collections».
- **Mods**: ja writes «MOD» (upper case, never «Mod»); zh «模组». The game folder is always
  `Mods` (literal).
- Brand names are never translated: SOTF Mods, RedLoader, RedManager, BuildShare, Sons of the
  Forest, Kelvin/KelvinSeek, Discord, Steam.
- Readouts (mono, upper-cased by CSS) are written in sentence case and translated like any other
  text: «Admin · Ranger Station» → «Admin · Puesto de guardabosques».

### Tone per locale (PLAN §3.8: calm veteran ranger, verb first, short sentences)

| Locale | Address | Notes |
|---|---|---|
| en | second person | Imperatives: «Download», «Try again» |
| es | tú (Spain) | Plural «vosotros» only when addressing the reader plus others |
| de | du | Capitalised nouns; «Mods», «Builds» stay |
| fr | vous | Never «tu» (including the creator console) |
| it | tu | «la mod» (feminine), as the Italian community says |
| nl | je/jij | Never «u» |
| pl | ty | Neutral forms where gender is unknown («Pobrał(a)») |
| pt | você (pt-BR) | Brazilian spelling and vocabulary («arquivo», «tela») |
| ru | вы (lower case) | Genitive after «до/не больше» avoids number agreement |
| sv | du | |
| tr | sen (UI), siz only in legal/formal text | Suffixes with an apostrophe after names: «Discord’da» |
| zh | 你 | Simplified Chinese; full-width punctuation |
| ja | です・ます | Full-width punctuation 「」：、。 |

### Typography

- Apostrophes and quotes: typographic (`’`, `“ ”` en; `« »` es/fr/it/pt/ru/tr; `„ “` de/pl;
  `” ”` sv; `‘ ’`/`“ ”` nl; `「 」` ja; `“ ”` zh). Ellipsis is `…`.
- **French**: a non-breaking space (U+00A0) before `: ; ? !` and inside `« »`.
- Numbers never carry grammar in ru/pl: a count followed by a noun uses an ICU plural with
  `one/few/many/other`, or the noun goes before a colon («Pobrania: {downloads}»).
- Expansion: write for +35 % (de, ru, fr). Prefer the shorter synonym in buttons, readouts
  and table headers.

### Checking

`pnpm i18n:check` warns about French typography (plain spaces before `: ; ? !` or inside `« »`).
`--glossary` adds hints for translations of messages whose English uses a brand term of the table
above without the locale's term (matched by stem, so inflected forms pass; «builds» is skipped
because it also means game builds, and «SOTF Mods» is the brand). Hints never fail the check
unless `--strict` is given.

```bash
pnpm i18n:check                                 # completeness, ICU, plurals, arguments
pnpm --filter @sotf/i18n i18n:check --glossary  # + glossary hints for reviewers
pnpm --filter @sotf/i18n i18n:glossary backpack # one term in every locale (legacy + v2)
pnpm i18n:pseudo                                # pseudo-locale: hard-coded text and overflow; pnpm gen restores
```
