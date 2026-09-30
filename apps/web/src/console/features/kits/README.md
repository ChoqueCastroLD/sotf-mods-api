# Kits — console screens (WP-71)

| Route (`routes/me/kits/`) | Screen |
|---|---|
| `/me/kits` | `KitsScreen`: my kits (edit, view, copy code, delete), «New kit» (`?new=1`), «Add to a kit» (`?add=<modId>`, the «+ Kit» button of a mod page) |
| `/me/kits/$kitId` | `KitEditorScreen` (Blueprint surface): items, details, sharing, duplicate/delete; `?forked=1` greets a fresh fork |

- **Items** (`ItemsEditor`, `ItemRow`, `ModPicker`, `draft.ts`): search mods/builds (`GET /search`),
  reorder by pointer/touch drag or keyboard (Space to grab, arrows, Space/Escape; announced in an
  `aria-live` region), note, pin a version («always the latest» by default), remove with undo.
  Every change is autosaved (`PUT /kits/:id/items`, debounced, one request at a time), so the
  automatic dependencies and the conflict/broken warnings follow the list in real time.
- **Details** (`DetailsForm`, `upload.ts`): name, slug, Markdown description, visibility, cover
  (automatic knolling or an uploaded image: presigned PUT → complete → poll → `coverUploadId`).
- **Owner read** (`api.ts`): `GET /me/kits/:id`, falling back to an empty `PATCH /kits/:id` until
  that endpoint exists (docs/backlog/WP-71.md).
- `limits.ts` mirrors `KIT_LIMITS`/`KIT_VISIBILITIES` of the contracts (type-checked) so the chunk
  ships no Zod.
