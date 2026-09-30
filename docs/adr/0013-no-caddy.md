# ADR-0013: No poner Caddy (ni otro proxy propio) en el camino de la petición

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.2 «Caddy», §2.1, §2.7, §11.3, §11.5

## Contexto

La referencia inicial del dueño incluía Caddy delante de las apps (research/01 y 03 también lo
mencionaban). En producción ya hay Cloudflare en el borde y Traefik (Coolify) terminando TLS.

## Opciones consideradas

1. **Caddy delante de web y api**: página de error propia y compresión; un salto y un contenedor
   más que operar.
2. **Cloudflare + Traefik de Coolify, sin proxy adicional**.

## Decisión

Opción 2. Cloudflare aporta HTTP/2-3, brotli/zstd, caché en el borde con `stale-while-revalidate`
y `stale-if-error` (que cubre la «página de error»); Traefik enruta los dominios y el `/api` del
mismo origen. Si Coolify fallara con dominios con path, se usa una etiqueta Traefik con
`PathPrefix(/api)` y, como último recurso, el proxy de Astro (§11.3).

## Consecuencias

- Menos latencia y menos piezas; la resiliencia ante caídas del origen depende de `stale-if-error`.
- La validación del `/api` en el mismo origen es un paso obligatorio de staging
  (`ops/runbooks/deploy/02-same-origin-api.md`).
