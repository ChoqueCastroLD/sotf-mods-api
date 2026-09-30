# ADR-0009: Usar segmentos de URL en inglés con prefijo `/{locale}` para los idiomas ≠ `en`

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (9, 15), §0.2 «Idioma de las URLs», §4.1, §7.11

## Contexto

El sitio sirve 13 idiomas. research/05 proponía slugs traducidos (`/es/mods/...` con segmentos en
español); research/04, segmentos en inglés con prefijo de idioma.

## Opciones consideradas

1. **Segmentos traducidos**: URLs «nativas», pero 13 árboles de rutas, traducción de slugs,
   *cache tags* distintos por idioma y más redirecciones.
2. **Segmentos en inglés + prefijo** (`/mods/...` en inglés, `/es/mods/...` en español).

## Decisión

Opción 2. Un solo árbol de rutas; el servidor de la web (`lib/server/fetch.ts`) quita el prefijo
antes del enrutado y pasa el idioma en una cabecera interna. `/en/...` → 301 a la ruta sin
prefijo. Cada página emite canonical propio por idioma y 13 `hreflang` + `x-default`.

## Consecuencias

- Mismos *cache tags* para todas las variantes de idioma y purgas sencillas.
- Las páginas localizadas son SSR (una ruta prerenderizada no pasa por la reescritura).
