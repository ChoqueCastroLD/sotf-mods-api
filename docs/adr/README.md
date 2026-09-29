# Architecture Decision Records

Registro de decisiones de arquitectura de SOTF Mods v2. El formato y el proceso están en
[ADR-0001](0001-record-architecture-decisions.md); la plantilla, en [template.md](template.md).

| ADR | Título | Estado |
|---|---|---|
| [0001](0001-record-architecture-decisions.md) | Registrar las decisiones de arquitectura con ADRs | Aceptada |
| [0002](0002-stack-and-plan.md) | Stack de v2 y relación con el plan maestro | Aceptada |
| [0003](0003-markdown-it-parser.md) | Parsear Markdown con markdown-it y serializar con un serializador de conjunto cerrado | Aceptada |

La fuente única de verdad del proyecto es [`docs/plan/PLAN.md`](../plan/PLAN.md). Un ADR registra
una decisión concreta, su contexto y sus consecuencias; si contradice al plan, el ADR debe decirlo
de forma explícita y enlazar la sección afectada.
