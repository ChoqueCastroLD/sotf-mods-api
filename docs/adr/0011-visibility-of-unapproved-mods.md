# ADR-0011: Mostrar los mods pendientes solo por URL directa y en la API legacy, nunca en los listados v2

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro y del dueño)
- **Plan**: §0.1 (11), §0.2 «Visibilidad de los no aprobados», §7.4, §14.1

## Contexto

La legacy tiene 28 mods sin aprobar. Su página es visible y la API legacy los sirve con
`approved=false`: la pestaña «unapproved» de RedManager y UpdatesChecker dependen de ello.
research/01 los dejaba visibles; research/03 y 04 respondían 404; research/05 los mostraba por URL
si pasaban los checks automáticos. El dueño decidió (§14.1) que **no se borran, ocultan ni
archivan**: siguen `pending` en la cola de moderación.

## Opciones consideradas

1. **Visibles como hoy**: se sigue promocionando contenido sin revisar.
2. **404 hasta aprobarlos**: rompe RedManager y UpdatesChecker y los enlaces existentes.
3. **Modelo de research/05**: estado `pending`; accesible por URL directa (`noindex` + banner) si
   pasó los checks automáticos; presente en la API legacy con `approved=false`; nunca en listados,
   búsqueda, sitemaps ni feeds v2.

## Decisión

Opción 3, con §14.1: los 28 existentes quedan `pending` (ningún script ni backfill los rechaza,
archiva ni borra) y entran en la cola de Ranger Station. Los estados explícitos de la v2
(`pending`, `published`, `unlisted`, `rejected`, `archived`, `removed`) se sincronizan con el
`isApproved` legacy mediante triggers.

## Consecuencias

- Los clientes legacy no notan el cambio y los listados v2 solo muestran contenido revisado.
- Riesgo aceptado en una marcha atrás: los mods `rejected` o `removed` reaparecen en la lista
  «unapproved» de la legacy (ADR-0016).
- Se verifica con la suite de contrato legacy (`pnpm contract:legacy`) y los tests de catálogo.
