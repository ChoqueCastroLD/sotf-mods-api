# ADR-0010: Servir la consola en `/basecamp`, `/ranger`, `/settings`, `/signals` y `/me` como una SPA dentro del build de Astro

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (2), §0.2 «Rutas de la consola», §2.5, §4.3

## Contexto

Las áreas autenticadas (panel del creador, moderación, ajustes, notificaciones y colecciones
propias) necesitan interacción rica y no se indexan. research/03 proponía `/basecamp` y `/ranger`;
research/04 `/studio/*`; research/05 `/panel` y `/mod`.

## Opciones consideradas

1. **Una app separada** (otro dominio o build): aislamiento total; duplica despliegue, sesión y
   design system.
2. **Páginas Astro con muchas islas**: sin SPA, pero con navegación completa en cada clic.
3. **Una SPA TanStack Router + Query servida por Astro en esos prefijos**.

## Decisión

Opción 3, con vocabulario de marca: `/basecamp/*` (creador), `/ranger/*` (moderación y admin),
`/settings/*`, `/signals` y `/me/*`. Astro sirve el *shell* (`noindex`, `private, no-store`) en
esos prefijos y la SPA (`apps/web/src/console`) enruta en el cliente.

## Consecuencias

- Un solo bundle y un solo despliegue para lo público y la consola; el JS de la consola no se
  carga nunca en las páginas públicas (presupuesto de 15 KB br, §8.2).
- El árbol de rutas se genera (`routeTree.gen.ts`, `pnpm gen`).
