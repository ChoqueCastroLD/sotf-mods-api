# @sotf/markdown

The single Markdown → safe HTML pipeline of SOTF Mods v2 (PLAN §9.1, §7.6, research/04 §4.13).
The API renders on write (`descriptionHtml`, `bodyHtml`, `changelogHtml`…), the worker re-renders
and backfills (B9), and the editor preview calls the same function, so stored XSS cannot come back.
It is runtime-agnostic (no Node or DOM APIs) and deterministic.

## Usage

```ts
import { renderMarkdown, RENDER_VERSION, extractMentions, localizeHtml } from '@sotf/markdown';

// Descriptions, changelogs, kits, bios.
const { html, text, headings, links, images, mentions, renderVersion } = renderMarkdown(md, {
  profile: 'full',
  resolveMention: (handle) => usersByHandle.get(handle) ?? null, // → { href: '/profile/ana' }
  resolveImage: (src) => replicas.get(src) ?? null, // → { src, width, height } (R2 copy, no CLS)
  idPrefix: 'md-', // heading ids; use e.g. `cl-${versionId}-` when several documents share a page
});

// Comments, reviews, author replies: load the mentioned users in one query first.
const handles = extractMentions(body); // ['ana', 'shokocc']
const comment = renderMarkdown(body, { profile: 'lite', resolveMention });

// At request time, translate the few labels baked into the stored HTML (alert titles).
const localized = localizeHtml(storedHtml, { 'alert-warning': m.markdown_alert_warning() });
```

Store `renderVersion` next to the HTML (`"renderVersion"` column, PLAN §6.3). When the pipeline
changes, `RENDER_VERSION` is bumped and a job re-renders rows `WHERE "renderVersion" < RENDER_VERSION`.

| Export | What |
|---|---|
| `renderMarkdown(md, options)` | `{ html, text, headings, links, images, mentions, renderVersion }` |
| `extractMentions(md, profile?)` | distinct lower-cased `@handles` (not in code or links) |
| `hasRawHtml(md)` | whether the text contains raw HTML (only `legacyHtml` interprets it) |
| `localizeHtml(html, labels)` · `DEFAULT_LABELS` · `LABEL_KEYS` | per-locale alert titles |
| `decodeEntities(text)` | one level of `&amp; &lt; &gt; &quot; &apos; &nbsp; &#…;` (B9: legacy comments/changelogs → `*Md`) |
| `escapeForLegacy(text)` | `& < > " '` escaped, for legacy columns the old site injects with `innerHTML` (PLAN §6.8) |
| `RENDER_VERSION`, `PROFILES`, `MAX_MARKDOWN_LENGTH` | constants |
| `safeUrl`, `slugify`, `youtubeFromUrl`, `MENTION_PATTERN`, `EXTERNAL_REL` | building blocks shared with the UI |
| `MarkdownInputError` (`code`: `markdown_not_string` · `markdown_too_long` · `markdown_invalid_option`), `MarkdownSafetyError` | errors |

`MAX_MARKDOWN_LENGTH` (50 000 characters) is only a hard ceiling; the product limits (20 000 for
descriptions, 2 000 for comments and reviews) belong to `@sotf/contracts`.

## Profiles

| | `full` | `lite` | `legacyHtml` |
|---|---|---|---|
| Used for | descriptions, changelogs, kits, bios | comments, reviews, replies | content written for the legacy site |
| Emphasis, strikethrough, code, links, lists, quotes | ✓ | ✓ | ✓ |
| Headings (shifted +1, ids and `#` anchor) | ✓ | bold paragraph | ✓ |
| Images (lazy, `no-referrer`) | ✓ | link | ✓ |
| Task lists | ✓ | text | ✓ |
| Tables | ✓ | text | mostly text, as on the legacy site (showdown ran with tables off) |
| GitHub alerts `> [!NOTE]` | ✓ | quote | ✓ |
| YouTube facade | ✓ | link | ✓ |
| Spoilers `\|\|x\|\|`, mentions, autolinks | ✓ | ✓ | ✓ |
| Raw HTML | literal text | literal text | allowlist (`b i strong em br p ul ol li h1–h6 details summary code pre a hr dl dt dd blockquote table…`) |

Every newline is a line break (as on the legacy site, Discord and GitHub comments). Footnotes
(`[^1]`) are shown as typed; the legacy site never supported them.

`legacyHtml` reproduces how the legacy site rendered descriptions (showdown after joining blank
lines into `<br>`, Markdown parsed inside HTML, `###Title`, `</FONT COLOR>`), then sanitises and
repairs the markup (`<li>` without a list, `<dl>` used as a list, `<br>` spacers, empty
paragraphs and headings, YouTube `<iframe>` → facade; `font`, `big`, `center`, `span`… unwrapped).
The profile is a property of the content: callers should keep rendering a legacy text with
`legacyHtml` until its author rewrites it (see `docs/backlog/WP-15.md`).

## Output contract

Only these elements and attributes can appear (enforced three times: by `rehype-sanitize` with a
from-scratch allowlist, by `verifyTree` right before serialising and by the serialiser itself; a
violation throws `MarkdownSafetyError` instead of shipping HTML):

- author content: the tags of the table above; `href`/`title` on links (`http`, `https`, `mailto`
  or relative), `src`/`alt`/`title` on images (`http`, `https` or relative); no `style`, `on*`,
  ids, classes, `data-*`, `iframe`, `svg`, `math`, `form`, comments;
- added by the pipeline (class hooks for `@sotf/ui` prose styles):
  - `h2#md-slug > a.md-anchor[aria-hidden][tabindex=-1]` heading anchors;
  - `div.md-alert.md-alert-{note|tip|important|warning|caution}[role=note] > p.md-alert-title > span[data-md-label]`;
  - `figure.md-youtube > a.md-youtube-link[data-youtube-id][data-youtube-start] > img.md-youtube-thumb`
    (a plain link to the video until a client script swaps in the `youtube-nocookie.com` iframe);
  - `span.md-spoiler[tabindex=0]` (revealed by CSS on hover/focus or by a script);
  - `a.md-mention` (resolved mentions);
  - `rel="ugc nofollow noopener"` on links that leave `sotf-mods.com` (configurable `internalHosts`);
  - `img[loading=lazy][decoding=async][referrerpolicy=no-referrer]`, plus `width`/`height` from
    `resolveImage`;
  - `ul.contains-task-list > li.task-list-item > input[type=checkbox][disabled]`, `code.language-*`.

`text` is the plain-text projection (search, meta descriptions, `llms-full.txt`, notification
previews): blocks separated by blank lines, no spoilers, images or UI labels.

## Safety and robustness

- `rehype-sanitize` allowlists are written from scratch per profile (`src/schema.ts`), URLs are
  normalised the way browsers read them before the scheme check (`src/url.ts`), and the enhancers
  that add classes and attributes run after sanitising on validated values only.
- Tests parse every output with a real HTML parser (jsdom) and check the allowlist, URL schemes,
  that no script runs, that re-parsing is stable (mXSS) and that the browser builds exactly the
  tree the pipeline verified: 252 XSS/mXSS vectors × 3 profiles, 0 escapes.
- Parsing is linear: markdown-it has a nesting cap, a guard escapes over-nested lines
  (`src/guard.ts`), raw HTML is interpreted only up to 1 000 tags, and too-deep trees fall back to
  escaped plain text.

## Why markdown-it (and a closed-set serialiser)

PLAN §2.2 lists `remark-parse` + `remark-gfm` + `remark-rehype` for parsing and
`rehype-stringify` for output. Measured on this package's 20 KB benchmark document, remark alone
took 48–69 ms (the budget is 15 ms), and micromark's emphasis and container resolution is
super-linear on hostile input (20 KB of `*_*_…` ≈ 18 s, `> > > …` overflows the stack), which
would block the API event loop. The parser stage is therefore **markdown-it 14** (CommonMark, GFM
tables and strikethrough; linear; ≈ 2 ms for the same document), converted to hast by
`src/parse.ts`. GFM autolinks, task lists, alerts, spoilers, mentions and facades are implemented
on the hast tree. unified, `rehype-raw` and `rehype-sanitize` are used as planned.

`hast-util-to-html` (rehype-stringify) then took a third of the remaining time, so verified trees
are serialised by `src/serialize.ts`, which only knows the closed set of elements and properties
that `verifyTree` allows (and throws on anything else). `test/serialize.test.ts` checks that a
browser parses its output and rehype-stringify's into the same DOM for every fixture and XSS
vector in every profile. The integrator should record both choices as an ADR
(`docs/backlog/WP-15.md`).

## Tests

```bash
pnpm --filter @sotf/markdown test        # all suites (files run one at a time)
SOTF_BENCH_REPORT=1 pnpm --filter @sotf/markdown test   # print benchmark numbers
pnpm --filter @sotf/markdown typecheck
pnpm --filter @sotf/markdown fixtures:legacy   # regenerate the legacy fixtures from the snapshot
```

| Suite | Checks |
|---|---|
| `xss.test.ts` | XSS/mXSS corpus (`test/fixtures/xss-vectors.ts`), hostile resolvers, checker self-test |
| `legacy.test.ts` | the 25 legacy descriptions with raw HTML: safe, every structural element and every word the legacy renderer (showdown oracle, `test/helpers/legacy-renderer.ts`) showed, reviewed snapshots in `test/__snapshots__/legacy/` |
| `render.test.ts` | every feature per profile, options, errors, pathological inputs |
| `unicode.test.ts` | 13-locale scripts, emoji sequences, NFC |
| `entities.test.ts` | `decodeEntities` / `escapeForLegacy` round trip |
| `serialize.test.ts` | the serialiser builds the same DOM as rehype-stringify (≈ 850 trees), escaping, closed set |
| `units.test.ts` | URL policy, YouTube parsing, autolinks, slugs, labels, `verifyTree`, guard |
| `bench.test.ts` | 20 KB rendered in < 15 ms per profile (best of 15 batches of 5 renders; ≈ 7–11 ms for `full` on the shared dev host) |
