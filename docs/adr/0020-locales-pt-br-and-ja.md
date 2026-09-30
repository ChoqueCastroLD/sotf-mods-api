# ADR-0020: Usar pt-BR en lugar de `pt` y añadir japonés como 13.º idioma

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (15), §0.2 «Portugués» y «13.º idioma», §7.11

## Contexto

La legacy tiene 12 idiomas con dos códigos incorrectos (`ch` para chino y `se` para sueco) y un
`pt` cuyo texto es portugués de Brasil («você», «baixar», «arquivo»). research/04 proponía ja o uk
como 13.º idioma; research/05, ja.

## Decisión

- Locales: en, es, de, fr, it, nl, pl, **pt-BR**, ru, sv, tr, **zh-Hans** y **ja**. `ch` → zh-Hans y
  `se` → sv se corrigen (con redirección de las URLs y preferencias legacy).
- **ja** como 13.º: base de jugadores de PC grande y sin alfabeto nuevo que cargar (pila CJK del
  sistema, sin fuentes web adicionales).

## Consecuencias

- Los catálogos viven en `packages/i18n/messages/<ns>/<locale>.json` (EN como fuente) y
  `pnpm i18n:check` exige los 13.
- Los plurales, fechas y números usan ICU/`Intl` en todos.
