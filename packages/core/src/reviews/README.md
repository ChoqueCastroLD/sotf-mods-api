# Reviews (`@sotf/core/reviews/index`, WP-41)

Reviews on the legacy `"ModReview"` table (PLAN §7.7, §6.8 "Reseñas").

| Endpoint | Function | Rules |
|---|---|---|
| `GET /mods/:id/reviews?sort=helpful\|new\|critical` | `listReviews` | visible only; helpful = Wilson lower bound of the votes (integer key ×1e9 for the keyset) |
| `GET /mods/:id/reviews/summary` | `reviewsSummary` | histogram 5→1, mean, Bayesian mean `(5·m + Σ)/(5 + n)` (m = site mean, 4.0 by default), `showStars` from 3 reviews |
| `POST /mods/:id/reviews` | `createReview` | verified email, account ≥ 24 h, not your own mod, one per user and mod (a deleted one is revived), version defaults to the last one you downloaded, `isVerifiedDownload` when you downloaded it signed in |
| `PATCH` · `DELETE /reviews/:id` | `updateReview` · `deleteReview` | author; history in `ReviewEdit`; soft delete |
| `PUT` · `DELETE /reviews/:id/vote` | `voteReview` | never on your own review |
| `PUT` · `DELETE /reviews/:id/reply` | `replyToReview` | mod author, one public reply (the reviewer is signalled once) |
| Ranger (WP-51) | `setReviewVisibility` | hide / unhide |

Every rating change recomputes in the same transaction `Mod.averageRating` (real mean, 0 without
reviews), `Mod.reviewsCount`, `Mod.ratingBayes` and `ModStats.reviewsVisible`/`ratingAvg`, never
touching `Mod.updatedAt`. Legacy `title`/`message` are written HTML-escaped and `isHidden`
explicitly.
