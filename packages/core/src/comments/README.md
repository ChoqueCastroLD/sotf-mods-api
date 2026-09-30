# Comments (`@sotf/core/comments/index`, WP-41)

Comments v2 on the legacy `"Comment"` table (PLAN §7.6, §6.8). Mentions live in
`../mentions` and are shared with reviews.

| Endpoint | Function | Rules |
|---|---|---|
| `GET /mods/:id/comments?sort=top\|new` | `listComments` | top-level comments + first 3 replies; Top = pinned, then Wilson on reactions (keyset on `reactionsCount`); a removed root with visible replies stays as a placeholder |
| `GET /comments/:id` | `getCommentThread` | root + up to 500 replies, `focusId` |
| `POST /mods/:id/comments` | `createComment` | verified email, not muted/banned, Turnstile < 24 h (except the mod owner on their own mod), 5/min + 50/day, ≤ 2000 chars (NFC), ≤ 2 `comment_image` uploads (→ `CommentImage` → `Media`), replies attach to the root (2 levels, legacy `replyId`), bug reports are top-level; external links from trust level 0 or accounts < 24 h are held (`pending`) |
| `PATCH /comments/:id` | `updateComment` | author; previous body → `CommentEdit` (moderation only), only newly mentioned users are signalled |
| `DELETE /comments/:id` | `deleteComment` | soft (`status='deleted'`, body kept), author or moderator |
| `PUT\|DELETE /comments/:id/reactions/:kind` | `setReaction` | one per kind and user |
| `POST\|DELETE /comments/:id/pin` · `/solution` · `POST /resolve` | `setPinned` · `setSolution` · `resolveBug` | mod author; max 3 pins; one solution per thread |
| Ranger (WP-51) | `setCommentVisibility` | hide with reason / unhide / approve a held comment |

Every write locks the mod row and recomputes in its transaction `Mod.commentsCount` (all rows,
legacy meaning), `ModStats.commentsVisible`, `Comment.repliesCount`/`reactionsCount`, and emits
the `comment.*` event (notifications, CDN purge of `mod:{id}`). Legacy columns are explicit:
`message` = HTML-escaped Markdown (the legacy renders it as HTML), `isHidden` = status ≠ visible.
