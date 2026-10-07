# Social islands (WP-70)

React islands of the mod pages (PLAN §7.6 comments, §7.7 reviews, §7.10 field reports;
research/03 §5.8). Three directories, one entry:

| Directory | Mount point (rendered by WP-62) | Who gets it |
|---|---|---|
| `comments/` | `[data-island="comments"]` (overview) | everyone, when the section nears the viewport or for `#comment-{id}` / `#comments` |
| `reviews/` | `[data-island="reviews"]` (overview), `#write-review[data-island="reviews-write"]` (`/reviews`) | signed-in visitors |

```ts
import { initSocialIslands } from '../../islands/comments/social.ts';
initSocialIslands(root, whenSession()); // never throws; SSR content stays if anything fails
```

Each `boot.ts` is tiny (part of the page script); React, the island and the page locale's
catalogue (`lib/messages.ts`: `packages/i18n/messages/{social,errors}/<locale>.json`, one lazy chunk
each, formatted with the ICU formatter of `@sotf/ui`) load only when needed. Paraglide is not used
in the islands: its messages carry all 13 locales, which the island budget (comments ≤ 35 KB br
without React) cannot afford. Keys shared with other namespaces are copied into `social_*`.

## Behaviour

- **Comments** (`CommentsIsland.tsx`): takes over the server-rendered first page (same endpoint,
  sort and size, edge cached) and removes the SSR copy once its data is in. Sort Top/New, «Load
  more», «View N more replies», permalinks outside the first page, editor (toolbar, shortcuts,
  write/preview through `POST /api/v2/markdown/preview`, `@mention` autocomplete, counter, draft in
  `sessionStorage`), bug report + version, 2 images (`lib/upload.ts`), Turnstile on
  `TURNSTILE_REQUIRED`, reactions (optimistic, rollback), edit, delete (optimistic with undo), report,
  and the mod author's pin (max 3), solution and «fixed in vX».
- **Reviews** (`reviews/ReviewsIsland.tsx`): write/edit (stars as a native radio group, title,
  body, version), your review found through `GET /users/:handle/reviews`, delete with undo,
  «Helpful?» votes (optimistic), the author's single public reply (write/edit/delete), report.

Shared pieces live in `comments/lib/` (API client with problem+json, native `<dialog>` modal, menu
button, report dialog, toasts through the shared bus (`lib/client/toast.ts`, with Undo and Retry), local viewer state).

Viewer state that edge-cached lists cannot carry (my reactions, my votes) is
remembered per account in `localStorage` from the write responses; editing rebuilds the Markdown
source from the stored lite HTML (`lib/markdown.ts`). Both have backlog items for session lookups
(`docs/backlog/WP-70.md`).
