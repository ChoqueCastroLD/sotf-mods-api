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
- **Mirrors**: a few `common_*` texts are copied into `cmdk` (the palette loads only its own
  namespace). The copies must stay identical in every locale (`tools/mirrors.ts`): change the
  `common` key and its mirror together.

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

Plurals must list the categories each language needs for integers 0–1000, and only those:

| Locales | Categories |
|---|---|
| en de nl sv tr es fr it pt | `one` `other` (es/fr/it/pt may add `many`) |
| pl ru | `one` `few` `many` `other` |
| zh ja | `other` |

`#` is the locale-formatted number. For relative times, sizes and compact counts computed in code,
pass a preformatted string argument (see `formatRelativeTime`, `formatBytes` in `@sotf/i18n`).
When a noun follows such a preformatted number, also pass the raw number and select the noun with
a plural on it, so ru/pl agree (`622 мода`, `625 модов`): see `common_downloads_compact`
(`{count}` + `{display}`).

## Workflow

```bash
pnpm --filter @sotf/i18n i18n:glossary download   # how the community already says it (legacy + v2)
pnpm i18n:check                                   # validate everything
pnpm gen                                          # regenerate .generated/ (commit the result)
pnpm i18n:pseudo                                  # pseudo-locale for hard-coded text / overflow; pnpm gen restores
```

## Glossary and house style (13 locales)

The plain vocabulary of the classic sotf-mods.com (`docs/plan/CLASSIC.md`), fixed per locale. The
source of truth is the `common_term_*` keys of `common/<locale>.json`; this table mirrors them. Use
the same word (inflected as the grammar needs) in every namespace: navigation, SEO titles, emails
and notifications. When a term changes, change `common_term_*`, then every message that uses it,
then this table. Where the community already had a word, reuse it: `pnpm --filter @sotf/i18n
i18n:glossary "<term>"` prints how every locale says it (legacy site and v2).

| Term | en | es | de | fr | it | nl | pl | pt | ru | sv | tr | zh | ja |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `mods` | Mods | Mods | Mods | Mods | Mod | Mods | Mody | Mods | Моды | Moddar | Modlar | 模组 | MOD |
| `libraries` | Libraries | Librerías | Bibliotheken | Bibliothèques | Librerie | Bibliotheken | Biblioteki | Bibliotecas | Библиотеки | Bibliotek | Kütüphaneler | 前置库 | ライブラリ |
| `builds` (also `blueprints`) | Builds | Builds | Builds | Builds | Build | Builds | Buildy | Builds | Постройки | Byggen | Yapılar | 建筑 | 建築 |
| `basecamp` | Dashboard | Panel | Dashboard | Tableau de bord | Dashboard | Dashboard | Panel | Painel | Панель | Översikt | Panel | 控制台 | ダッシュボード |
| `ranger_station` | Moderation | Moderación | Moderation | Modération | Moderazione | Moderatie | Moderacja | Moderação | Модерация | Moderering | Moderasyon | 审核 | モデレーション |
| moderator (person) | moderator | moderador | Moderator | modérateur | moderatore | moderator | moderator | moderador | модератор | moderator | moderatör | 审核员 | モデレーター |
| `signals`, `notifications` | Notifications | Notificaciones | Benachrichtigungen | Notifications | Notifiche | Meldingen | Powiadomienia | Notificações | Уведомления | Aviseringar | Bildirimler | 通知 | 通知 |
| `backpack` | Following | Siguiendo | Gefolgt | Suivis | Seguiti | Gevolgd | Obserwowane | Seguindo | Подписки | Följer | Takip edilenler | 关注 | フォロー中 |
| `field_notes` | Recent updates | Actualizaciones recientes | Aktuelle Updates | Mises à jour récentes | Aggiornamenti recenti | Recente updates | Ostatnie aktualizacje | Atualizações recentes | Недавние обновления | Senaste uppdateringar | Son güncellemeler | 近期更新 | 最近のアップデート |
| users | Users | Usuarios | Nutzer | Utilisateurs | Utenti | Gebruikers | Użytkownicy | Usuários | Пользователи | Användare | Kullanıcılar | 用户 | ユーザー |
| Trusted (creator badge) | Trusted | De confianza | Vertrauenswürdig | De confiance | Affidabile | Vertrouwd | Zaufany | Confiável | Проверенный | Betrodd | Güvenilir | 受信任 | 信頼済み |
| Most downloaded | Most downloaded | Más descargados | Meiste Downloads | Les plus téléchargés | Più scaricati | Meest gedownload | Najczęściej pobierane | Mais baixados | По загрузкам | Mest nedladdade | En çok indirilen | 下载最多 | ダウンロード数順 |
| Mods of the week | Mods of the week | Mods de la semana | Mods der Woche | Mods de la semaine | Mod della settimana | Mods van de week | Mody tygodnia | Mods da semana | Моды недели | Veckans mods | Haftanın Modları | 本周模组 | 今週の MOD |
| Log in | Log in | Iniciar sesión | Anmelden | Se connecter | Accedi | Inloggen | Zaloguj się | Entrar | Войти | Logga in | Giriş yap | 登录 | ログイン |
| Log out | Log out | Cerrar sesión | Abmelden | Se déconnecter | Esci | Uitloggen | Wyloguj się | Sair | Выйти | Logga ut | Çıkış yap | 退出登录 | ログアウト |
| Register | Register | Registrarse | Registrieren | S’inscrire | Registrati | Registreren | Zarejestruj się | Registrar | Регистрация | Registrera dig | Kayıt ol | 注册 | 新規登録 |

Notes:

- **Old key names, plain values.** The `common_term_*` keys keep their historical names (`basecamp`,
  `ranger_station`, `signals`, `backpack`, `field_notes`, `blueprints`) but their values are the
  plain terms above. Do not write the old names in any text: never «Basecamp», «Ranger Station»,
  «Signals», «Backpack», «Field notes», «Blueprints», «Survivors», «Scout», «Legends».
- **Removed features.** Kits, Patch Radar, compatibility and field reports, achievements, badges,
  XP, milestones and awards no longer exist in the UI. Their keys stay until the orphan cleanup
  deletes them; do not write new text for them.
- **Game build** (the Sons of the Forest patch, `{build}`) is a different concept from a player
  **build** (BuildShare). Keep the game sense as «build del juego», «Spiel-Build», «build du jeu»,
  «build gry», «сборка игры», «ゲームビルド»…
- **Mods**: ja writes «MOD» (upper case, never «Mod»); zh «模组». The game folder is always
  `Mods` (literal).
- **Brand names** are never translated: SOTF Mods, RedLoader, Red Manager, BuildShare, Sons of the
  Forest, Discord, Steam. Product UI never says «Locator».

### Writing rules (all locales)

- Plain, short, serious, human. Say what the thing is or does. Verb first on buttons.
- No em dashes (—) and no «--» anywhere. Use a period, a comma, a colon or parentheses. An en dash
  only in number ranges.
- No game or island metaphors (island, camp, trail, waypoint, map, survivor, ranger, field-tested,
  crafted), no puns, no marketing fluff, no cute or childish tone, no emojis.
- Exclamation marks only for genuine success confirmations.
- Old site wording: «Log in» (not «Sign in»), «Register» (not «Sign up»), «Log out».
- A person who moderates is a moderator; the area is Moderation.

### Tone per locale (plain and serious)

| Locale | Address | Notes |
|---|---|---|
| en | second person | Imperatives: «Download», «Try again» |
| es | tú (Spain) | Plural «vosotros» only when addressing the reader plus others |
| de | du | Capitalised nouns; «Mods», «Builds» stay |
| fr | vous | Never «tu» (including the creator console) |
| it | tu | «la mod» (feminine), as the Italian community says |
| nl | je/jij | Never «u» |
| pl | ty | Neutral forms where gender is unknown («Pobrał(a)») |
| pt | você (pt-BR) | Brazilian spelling and vocabulary («arquivo», «tela», «baixar», «login») |
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
- Expansion: write for +35 % (de, ru, fr). Prefer the shorter synonym in buttons and table
  headers.

### Checking

`pnpm i18n:check` warns about French typography (plain spaces before `: ; ? !` or inside `« »`).
`--glossary` adds hints for translations of messages whose English uses a term of the table above
without the locale's term (matched by stem, so inflected forms pass; «builds» is skipped because
it also means game builds, and «SOTF Mods» is the brand). Hints never fail the check unless
`--strict` is given.

```bash
pnpm i18n:check                                 # completeness, ICU, plurals, arguments
pnpm --filter @sotf/i18n i18n:check --glossary  # + glossary hints for reviewers
pnpm --filter @sotf/i18n i18n:glossary Moderation  # one term in every locale (legacy + v2)
pnpm i18n:pseudo                                # pseudo-locale: hard-coded text and overflow; pnpm gen restores
```
