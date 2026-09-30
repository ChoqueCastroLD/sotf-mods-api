# ADR-0019: Página de mod con secciones y anclas, más `/versions` y `/reviews` como subpáginas indexables

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.2 «Pestañas de la página de mod», §4.2, §4.5

## Contexto

research/03 proponía una URL por pestaña; research/04, subpáginas `/changelog` y `/alternatives`.
Muchas pestañas generan páginas con poco contenido propio («contenido fino»).

## Opciones consideradas

1. **Una URL por pestaña**: enlazable, pero multiplica páginas finas.
2. **Todo en una sola página**: la página crece sin límite con muchas versiones o reseñas.
3. **Página principal con secciones y anclas + `/versions` y `/reviews`** como subpáginas.

## Decisión

Opción 3: `/mods/:user/:slug` con secciones (descripción, instalación, compatibilidad, galería,
comentarios…) y anclas; `/mods/:user/:slug/versions` y `/mods/:user/:slug/reviews` indexables con
su canonical y JSON-LD.

## Consecuencias

- Menos páginas finas y URLs útiles para las listas largas.
- La URL legacy de la página de mod no cambia.
