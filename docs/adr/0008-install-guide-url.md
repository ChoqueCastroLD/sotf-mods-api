# ADR-0008: Usar `/install` como URL canónica de la guía de instalación

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.2 «Guía de instalación», §4.2, §4.6

## Contexto

La legacy tiene la guía de RedLoader en `/loader`. research/01 proponía conservarla, research/03
`/install` y research/05 `/instalar` + `/redloader`.

## Opciones consideradas

1. **Mantener `/loader`**: sin redirección; palabra poco buscada.
2. **`/install` canónica y `/loader` → 301**: coincide con la búsqueda principal («install sons of
   the forest mods»); el 301 conserva la señal.
3. **Segmentos traducidos (`/instalar`)**: contradice ADR-0009.

## Decisión

Opción 2: `/install` (con prefijo de idioma en los locales ≠ `en`) y `/loader` → 301.

## Consecuencias

- Mejor SEO para la consulta principal; la redirección vive en la tabla de redirecciones legacy
  de la web (`middleware/redirects.ts`).
