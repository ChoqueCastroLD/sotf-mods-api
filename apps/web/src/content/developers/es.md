---
title: API de SOTF Mods para desarrolladores
description: Construye sobre el catálogo de SOTF Mods — API pública v2 con OpenAPI, errores, paginación, caché y límites, guía para gestores de mods y calendario de la API legacy.
anchors: [overview, format, errors, pagination, caching, mod-manager, downloads, updates, support]
---

# Visión general

La API de SOTF Mods es pública y de solo lectura para clientes anónimos: todo el catálogo de mods, librerías, builds y Kits de Sons of the Forest, con versiones, dependencias y compatibilidad por build del juego.

- **URL base:** `https://api.sotf-mods.com/api/v2` para clientes de terceros (también se sirve en `https://sotf-mods.com/api/v2`).
- **Referencia:** cada endpoint, parámetro y esquema está en la [referencia interactiva](/api/docs), generada desde los mismos contratos con los que funciona el servidor. La especificación está en [`/api/v2/openapi.json`](/api/v2/openapi.json) (OpenAPI 3.1).
- **No necesitas clave** para las lecturas públicas. Envía un `User-Agent` descriptivo con una URL de contacto, para que podamos avisarte antes de bloquear un cliente que se porte mal.

# Formato

- JSON en UTF-8 con campos en `camelCase`.
- Las fechas son ISO 8601 en UTC con `Z` (`2026-09-30T12:00:00.000Z`); las fechas de calendario son `YYYY-MM-DD`.
- Los ids de mods, versiones y usuarios son enteros y estables. El id del `manifest.json` de un mod se expone como `manifestId`.
- Dentro de v2 los cambios son **solo aditivos**: pueden aparecer campos y endpoints nuevos, pero los existentes no cambian de significado. Ignora los campos que no conozcas. Un cambio incompatible saldría como `/api/v3`.

# Errores

Los errores siguen la RFC 9457 (`application/problem+json`):

```json
{"type":"https://sotf-mods.com/developers/errors#not-found","title":"Not found","status":404,"detail":"No mod with id 99999","code":"NOT_FOUND","requestId":"01J…"}
```

Decide según `code` (estable), no según `title` o `detail` (texto para personas). Códigos habituales: `VALIDATION_FAILED` (422, con una lista `errors`), `NOT_FOUND` (404), `GONE` (410), `RATE_LIMITED` (429, con `Retry-After`) y `UNAVAILABLE` (503). Indica el `requestId` cuando nos reportes un problema.

# Paginación

- **Listados del catálogo** por páginas: `?page=1&pageSize=24` (hasta 100); responden `{ items, page, pageSize, total, totalPages }`.
- **Feeds** (comentarios, reseñas) por cursor: `?limit=20&cursor=…`; responden `{ items, nextCursor }`. Trata el cursor como opaco y para cuando `nextCursor` sea `null`.

# Caché

Las respuestas públicas llevan `Cache-Control` y un `ETag`, y se cachean en nuestro borde. Envía `If-None-Match` con el último `ETag` y recibirás un `304 Not Modified` vacío si nada cambió: apenas cuenta para tus límites y hace tu cliente rápido. No consultes más de una vez cada pocos minutos; los datos del catálogo rara vez cambian más rápido.

El CORS está abierto (`Access-Control-Allow-Origin: *`, sin credenciales) en las lecturas públicas, así que las apps de navegador pueden llamar a la API directamente.

# Integrar un gestor de mods

El flujo típico de un launcher o gestor de mods:

1. **Listar y buscar** con `GET /mods` (`q`, `type`, `category`, `sort`, `page`). Cada elemento es una tarjeta con `latestVersion`, `compatStatus` y `canonicalPath`.
2. **Mostrar el detalle** con `GET /mods/{id}` o `GET /mods/by-slug/{user}/{slug}`; para reconocer un mod ya instalado en disco, usa `GET /mods/by-manifest/{manifestId}` con el id de su `manifest.json`.
3. **Resolver dependencias** con `GET /mods/{id}/dependencies`. Instala primero las `required`, de forma recursiva, y avisa de los `conflicts`. Las librerías son elementos normales con `kind: "library"`.
4. **Elegir versión** con `GET /mods/{id}/versions`. Prefiere la última versión estable; ofrece betas solo si el usuario lo activa.
5. **Comprobar la compatibilidad** con `GET /mods/{id}/compat` y `GET /game-builds` o `GET /ecosystem` para decir al usuario si un mod funciona en su build del juego antes de instalarlo.
6. **Descargar** con la URL de descarga del mod (ver abajo), extraer en la carpeta del juego y guardar la versión instalada.
7. **Buscar actualizaciones** comparando la versión instalada con `latestVersion` (semver), como mucho unas pocas veces al día.

Enlaza a la página del mod (`https://sotf-mods.com` + `canonicalPath`) para que los usuarios puedan leer la descripción, reportar problemas y apoyar al creador.

# Descargas

Descarga una versión con `GET https://sotf-mods.com/mods/{user}/{slug}/download/{version}`. Responde `302` al archivo en nuestro almacenamiento; sigue las redirecciones. Las descargas nunca se limitan con un `429`: por encima del umbral de uso razonable siguen funcionando pero no cuentan en las estadísticas. Descarga una vez por instalación, no en cada arranque.

# Mantente al día

Los cambios de la API se anuncian en [Novedades](/news) y en su [feed RSS](/news/feed.xml). Las rutas deprecadas responden con las cabeceras `Deprecation` y `Sunset` y un `Link` a esta página meses antes de retirarse.

# Soporte

¿Encontraste un error o necesitas un endpoint? Pregunta en el canal de desarrolladores de nuestro [Discord](https://discord.gg/sotf) o abre un issue en [GitHub](https://github.com/ChoqueCastroLD/sotf-mods-api). Reporta los problemas de seguridad de forma privada con los GitHub Security Advisories.
