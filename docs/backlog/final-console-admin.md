# Backlog final-console-admin (Ranger, Admin, Me, Settings, Signals)

Audit of `apps/web/src/console/features/{ranger,admin,me,settings,signals}` against the plan: no stubs, TODOs or dead
endpoints remain (assign/escalate, templates, scan override, metrics, featured badges, server-side downloads removal and
creator defaults, `notesMd`/`noteMd`, `currentTags` are all wired to the shipped contracts). Open items outside the area:

- **Top-bar Signals panel (optional)** · `apps/web/src/console/layout/TopBar.tsx` (console-creator) · panel with the 8 latest signals on >= md reusing `islands/signals/SignalRow.tsx`; today the bell links to the complete `/signals`.
- **Taxonomy names in console cards** · `apps/web/src/console/components/DomainI18nBridge.tsx` (console-creator) · add a `taxonomy` resolver fed by a localized taxonomy source.
- **`data-motion="full"`** · `packages/ui/src/tokens.css` · cannot lift the OS reduction because the §1 rule is `!important`; low priority.
