# Architecture Decision Records

Registro de decisiones de arquitectura de SOTF Mods v2. El formato y el proceso están en
[ADR-0001](0001-record-architecture-decisions.md); la plantilla, en [template.md](template.md).

| ADR | Título | Estado |
|---|---|---|
| [0001](0001-record-architecture-decisions.md) | Registrar las decisiones de arquitectura con ADRs | Aceptada |
| [0002](0002-stack-and-plan.md) | Stack de v2 y relación con el plan maestro | Aceptada |
| [0003](0003-markdown-it-parser.md) | Parsear Markdown con markdown-it y serializar con un serializador de conjunto cerrado | Aceptada |
| [0004](0004-drizzle-and-hand-written-sql-migrations.md) | Usar Drizzle como query builder y migraciones SQL escritas a mano con guarda de superconjunto | Aceptada |
| [0005](0005-argon2id-parameters.md) | Mantener argon2id con los parámetros de Bun y un semáforo de 2 | Aceptada |
| [0006](0006-forced-relogin-at-cutover.md) | Forzar un nuevo inicio de sesión en el corte | Aceptada |
| [0007](0007-profile-url.md) | Usar `/profile/:handle` como URL canónica del perfil | Aceptada |
| [0008](0008-install-guide-url.md) | Usar `/install` como URL canónica de la guía de instalación | Aceptada |
| [0009](0009-english-url-segments-with-locale-prefix.md) | Segmentos de URL en inglés con prefijo `/{locale}` | Aceptada |
| [0010](0010-console-spa-routes.md) | Consola SPA en `/basecamp`, `/ranger`, `/settings`, `/signals` y `/me` | Aceptada |
| [0011](0011-visibility-of-unapproved-mods.md) | Mods pendientes solo por URL directa y en la API legacy | Aceptada |
| [0012](0012-two-download-metrics.md) | Dos métricas de descarga: `downloads` y `uniqueDownloads` | Aceptada |
| [0013](0013-no-caddy.md) | Sin Caddy ni proxy propio en el camino de la petición | Aceptada |
| [0014](0014-r2-content-disposition-by-metadata-rewrite.md) | Nombre de descarga por reescritura de metadatos en R2 | Aceptada |
| [0015](0015-staging-with-seed-and-preflight.md) | Staging con el seed y preflight en `next.` | Aceptada |
| [0016](0016-zero-downtime-cutover.md) | Corte sin caída por cambio de dominios | Aceptada |
| [0017](0017-follow-equals-backpack.md) | Follow = Backpack sobre `ModFavorite` | Aceptada |
| [0018](0018-gamification-without-streaks.md) | Gamificación sin rachas diarias | Aceptada |
| [0019](0019-mod-page-sections-and-subpages.md) | Página de mod con secciones y subpáginas `/versions` y `/reviews` | Aceptada |
| [0020](0020-locales-pt-br-and-ja.md) | pt-BR en lugar de `pt` y japonés como 13.º idioma | Aceptada |
| [0021](0021-no-backups-additive-only.md) | Operar sin backups: solo aditivo y marcha atrás por dominios | Aceptada |

La fuente única de verdad del proyecto es [`docs/plan/PLAN.md`](../plan/PLAN.md). Un ADR registra
una decisión concreta, su contexto y sus consecuencias; si contradice al plan, el ADR debe decirlo
de forma explícita y enlazar la sección afectada.

Los ADR 0004–0020 registran las contradicciones entre los documentos de
investigación que resuelve PLAN §0.2 (una por fila; el 0020 agrupa las dos de idiomas); el 0021 registra la decisión del dueño de operar sin backups
(§14.5), que prevalece sobre las partes del plan que dependían de restaurar un backup.

## Cómo añadir un ADR

1. Copia [template.md](template.md) como `NNNN-titulo-en-kebab-case.md` con el siguiente número.
2. Rellena contexto, opciones, decisión y consecuencias; enlaza las secciones del plan afectadas.
3. Añade la fila a la tabla de arriba en el mismo commit (`docs(adr): …`).
4. Un ADR aceptado no se reescribe: si la decisión cambia, se crea uno nuevo y el antiguo pasa a
   «Sustituida por ADR-NNNN».
