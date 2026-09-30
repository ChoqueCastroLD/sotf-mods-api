# ADR-0017: Unificar favorito y seguir en un solo concepto (Follow = Backpack) sobre `ModFavorite`

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (13), §0.2 «Favoritos y seguir», §6.3, §6.9 (B5), §7.1

## Contexto

La legacy tiene favoritos (`ModFavorite`) y la UI ya los llamaba *follow*. research/03 proponía
un ♥ y un «seguir» separados; research/05, migrar `ModFavorite` a follows.

## Opciones consideradas

1. **Dos acciones (♥ y seguir)**: más granularidad, más confusión y dos contadores.
2. **Una acción: Follow (♥)** = el mod entra en tu Backpack y recibes avisos de versión, sobre
   `ModFavorite` + columna nueva `notify`.

## Decisión

Opción 2. Los follows existentes se conservan; los duplicados legacy se archivan de forma auditada
(B5) antes del índice único.

## Consecuencias

- Los contadores legacy (`favoritesCount`) siguen cuadrando y la legacy ve los follows de la v2.
- Silenciar avisos no deja de seguir (`notify = false`).
