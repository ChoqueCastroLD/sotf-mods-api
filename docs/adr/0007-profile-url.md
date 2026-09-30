# ADR-0007: Usar `/profile/:handle` como URL canónica del perfil

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (9), §0.2 «Ruta del perfil», §4.2, §4.6

## Contexto

La legacy publica perfiles en `/profile/:user`, enlazados desde Google, SOTFEdit y tutoriales.
research/04 proponía `/creators/:slug` y research/05, `/u/:user`.

## Opciones consideradas

1. **`/creators/:slug` o `/u/:user`**: más cortas o más «de marca»; todos los enlaces existentes
   pasarían por un 301.
2. **Conservar `/profile/:handle`**, con `/@:handle` como atajo (301) y `/creators` como directorio.

## Decisión

Opción 2. `/profile/:handle` es canónica; `/@:handle` → 301; `/creators` es el directorio de
creadores. El resolver tolera mayúsculas y slugs históricos (`UserSlugHistory`).

## Consecuencias

- Cero redirecciones para los enlaces existentes y ninguna pérdida de señal SEO.
- `/creators` queda libre para un listado indexable.
