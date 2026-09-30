# Publishing wizard (`features/upload`, WP-74)

The console screens that publish content (PLAN §7.5, research/03 §6.8):

| Route | Screen |
|---|---|
| `/basecamp/new` | `NewChooser` — mod, build, or a new version of one of my mods; open drafts first |
| `/basecamp/new/mod?draft=` | «New mod»: file → details → compatibility → media → release → review |
| `/basecamp/new/build?draft=` | «New build»: BuildShare JSON → details → media → review |
| `/basecamp/mods/:modId/new-version?draft=` | «New version»: file → release (+ notify followers) → review |
| `/basecamp/drafts` | `DraftsList` — resume or delete drafts |
| `/basecamp/drafts/:draftId` | redirects to the wizard of the draft's kind |

## How it works

- **Drafts** (`lib/use-autosave.ts`): the wizard state is a `DraftData` (contracts). A new wizard
  creates its draft on the first meaningful change, then `PATCH`es it 3 s after the last change and
  on every step change; the id goes into `?draft=`. The saved copy is checked against the contract
  first (`lib/sanitize.ts`, lazy) so a half-typed URL never fails the autosave. Leaving the page
  sends a `keepalive` PATCH. Every save returns the preflight rows and the quality score.
- **File** (`lib/use-file-upload.ts`, `lib/inspect.ts`): fflate reads the zip in the browser
  (only `manifest.json` is decompressed) and applies the worker's rules (zip slip, bombs, entry
  count, extensions, RedLoader schema); a new version is refused *before uploading* when the
  manifest id differs or the semver is not greater (`lib/semver.ts`). Build JSON is validated with
  the BuildShare schema and its thumbnail is shown. Then `lib/uploader.ts` uploads straight to R2
  with XHR (real progress, retries with backoff, multipart above 100 MB, resume) and polls the
  server inspection.
- **Media** (`components/CoverCropper.tsx`, `components/GalleryEditor.tsx`): 16:9 crop on a canvas
  (pointer or keyboard), gallery of 10 with drag/keyboard ordering, alt text and delete. Local
  previews are kept in IndexedDB (`lib/preview-cache.ts`) so resumed drafts show their images.
- **Markdown** (`components/MarkdownField.tsx`): CodeMirror 6 and `@sotf/markdown` load on demand;
  a textarea edits the value until then. The preview uses the same pipeline as the API.
- **Review** (`steps/ReviewStep.tsx`): preflight rows from the API with «Fix» links to the field,
  the listing quality meter and the submission (`POST /drafts/:id/submit`).

## Messages

`packages/i18n/messages/upload/<locale>.json` (13 locales). The screens read the active locale's
catalogue through `i18n.ts` (`ut('upload_…')`) instead of Paraglide's per-message functions: ~470
messages × 13 locales would otherwise triple the route budget. Route loaders call
`loadUploadMessages()`; screens call `useUploadMessages()` so a locale switch suspends until the
new catalogue arrives.

## Budgets

The route chunk (`WizardScreen`) carries the file step only; the other steps are lazy chunks
prefetched when the browser is idle. The editor chunk (CodeMirror) and the Markdown pipeline chunk
load only when a Markdown field is shown.
