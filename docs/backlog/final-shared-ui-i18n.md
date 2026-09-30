# final-shared-ui-i18n backlog (changes outside the area)

- apps/web `pages/sitemaps/_lib/*` (web owner): machine outputs (llms.txt, RSS, FAQ JSON-LD) stay English on purpose; no localized feeds are planned.
- `packages/core/src/search/pages.ts`, `seo/faq.ts` (core owner): moving search titles and FAQ templates to i18n namespaces needs the consumers first, otherwise the messages would be dead copy.
- Scout copy in `cmdk` is deferred to T1 (Scout does not exist at T0).
