# real-web-discovery

Implemented in this area (web only, no external credentials):
- `/compare` (T2 mod comparator): GET form, up to four mods, `explore_compare_*` messages in 13 locales, footer link.
- SVG badges (T1-09): `/badges/mods/:user/:slug/{downloads,version,compat,rating}.svg`.
- Offline install guide (T2 PWA): `public/sw.js` + `scripts/offline-guides.ts` (registered only on `/install`).

Needs other areas (target path, what, why):
- `apps/web/src/components/mod/**` (web-entities): "Compare" button on the mod page linking to `/compare?mods=<user>/<slug>`; badge snippets (Markdown/HTML for `/badges/mods/...`) in the share/embed panel.
- `apps/api/src/modules/**` + `packages/core/src/search/**` + `packages/contracts/src/**` (api-content): Scout (T1-07), `POST /api/v2/scout` (search + LLM with citations, spend cap, cache), gated by an LLM key env var. Until it exists the Cmd+K palette has no Scout mode; once the endpoint answers, add the mode in `apps/web/src/islands/cmdk/**` (hidden when the endpoint answers 404/503).
- `apps/api` + `apps/worker` + `packages/core` (api-content/worker): public uptime series for `/patch-radar` (T1-20), needs a probe job storing samples and a `GET /compat/uptime` endpoint; the radar page then renders it.
- `apps/api` + `packages/core` + `packages/data` (api-community/data): mod request board (T2: requests with votes and "adopt"), then `/requests` pages here.
- `packages/ui/src/tokens.css` (shared-ui): `data-motion="full"` override of the reduced-motion rule.
