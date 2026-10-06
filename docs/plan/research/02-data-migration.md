# 02 — Modelo de datos, migración sin pérdida y datos de desarrollo

> **Nota (2026-10-06):** [CLASSIC.md](../CLASSIC.md) prevalece sobre este documento en la identidad «Locator», la landing y la gamificación (logros, insignias, XP, hitos, premios, kits, Patch Radar, mapa de la isla). Donde discrepen, manda CLASSIC.md. Este texto se conserva como histórico y no se reescribe.

> Track de investigación: MODELO DE DATOS, MIGRACIÓN SIN PÉRDIDA DE DATOS y DATOS PARA DESARROLLO.
> Fecha: 2026-09-29. Todo lo medido en producción se obtuvo con peticiones GET de solo lectura (API pública, HEAD/Range a R2 y GET a la API de Coolify). No se llamó a ningún endpoint que modifique estado (ni descargas vía API, ni favoritos, ni approve).
> Snapshot de datos públicos guardado (sin secretos) en `/root/sotf-mods/.research-cache/public-api-2026-09-29/`, así el seed no tiene que volver a pedirle nada a prod.

---

## 0. Resumen ejecutivo

1. **No hay backups de la base de datos.** `GET /api/v1/databases/ukg0ks4/backups` devuelve `[]`. Antes de tocar nada hay que activar backups programados en Coolify (con copia en R2) y probar que se restauran. Es el riesgo número 1, venga o no la v2.
2. **La v2 se queda con el mismo PostgreSQL 16 y el mismo esquema, y solo lo amplía.** Cero renombres, cero borrados y cero cambios de tipo en la salida. El mismo `schema.prisma` legacy sirve de baseline de migraciones (Prisma 7). Un guard en CI demuestra de forma mecánica que el esquema v2 contiene al legacy.
3. **ORM: Prisma 7 (7.10.x), no Drizzle.** El riesgo que manda aquí es perder datos, no la ergonomía del ORM. Con el mismo DSL no hay que traducir 16 tablas. Prisma 7 ya no lleva el motor en Rust (usa driver adapter `pg`), soporta índices parciales (preview desde 7.4) e índices GIN con `ops`, y tiene TypedSQL para analítica. Triggers y funciones van como SQL dentro de las migraciones.
4. **Las contraseñas funcionan sin tocarlas.** Bun guarda `$argon2id$v=19$m=65536,t=2,p=1$…` (PHC). Lo comprobé con Bun 1.4.2 y Node 24.17: `@node-rs/argon2@2.2.1` y `argon2@0.45.1` verifican los hashes de Bun, y Bun verifica los hashes de `@node-rs/argon2`. Cada verificación tarda unos 96 ms. Propuesta: mantener los mismos parámetros y rehashear al hacer login solo si el algoritmo o los parámetros son más débiles.
5. **Volumen (medido):** 3.883 usuarios, 257 filas `Mod` (221 mods/libraries + 36 builds; 28 sin aprobar), 612 versiones visibles (id máx. 716), 126 imágenes de galería, 278 comentarios, 234 favoritos y **1.977.059 filas `ModDownload`**. De esas descargas, 434 no se pueden atribuir a ningún mod. Unas 1.750 descargas nuevas al día. R2 referenciado: unos 2,1 GB. La BD entera debería rondar 0,5–0,8 GB, casi todo `ModDownload` y sus índices (es una estimación).
6. **Hallazgos de calidad de datos que cambian el plan:**
   - `Mod.updatedAt` no vale nada: los crons lo reescriben cada 30 min (las 257 filas marcan `2026-09-29T03`).
   - El texto pierde caracteres **en el cliente** (`sanitizeText` en `sotf-mods-frontend/src/static/scripts/shared.js:139`) y además en el servidor en los comentarios (`sotf-mods-api/src/shared/sanitize.ts`). Se pierden acentos, umlauts, `:`, `*`, `[]`, `<>`, emoji y demás. Casi nada se puede recuperar: solo 3 `shortDescription` salen del `manifest.json` de los zips en R2 (lo verifiqué leyendo 219 manifests con HTTP Range).
   - Hay entidades HTML guardadas (`&lt;3`, `&amp;`).
   - `ip`/`userAgent` valen `"undefined"` cuando la descarga llega directa a la API (RedManager, one-click, clientes externos) y en todos los comentarios.
   - 19 mods tienen `type = NULL` y no salen en el listado por defecto.
   - 15 slugs tienen caracteres raros (`(beta)`, `'`, `+`, `.`, `_`).
   - Una versión (mod 168 `virginia-wardrobe-18+` v0.0.3, 4.459 descargas) apunta todavía a `files.sotf-mods.com` y **el archivo ya no existe** ni allí ni en R2.
7. **Índices que faltan en queries calientes:** `Token.token` (cada request autenticada hace un seq scan), `ModFavorite` (sin ningún índice), `Comment` (sin índices), `KelvinGPTMessages.chatId`, y `count(*)` sobre 2M filas en cada `/api/stats`. Mi propuesta tiene tres partes. Primero, agregados diarios de descargas. Segundo, índices compuestos o parciales creados con `CONCURRENTLY`. Tercero, contadores cacheados.
8. **Datos para desarrollar.** Opción A (la recomendada): el usuario crea un backup en Coolify (UI o API con `backup_now`), lo descarga y lo restauramos en local. Luego un script de anonimización genera un dump "dev-safe". Opción B: un túnel SSH temporal con un rol de solo lectura. Si nada de eso es posible, hay un plan de respaldo: un seed desde la API pública (ya está el snapshot) más datos privados sintéticos, con los mismos volúmenes y con los casos raros inyectados a propósito.
9. **Transición en tres pasos:**
   - Beta en sombra: la v2 lee la BD de prod con un rol Postgres que **solo puede escribir en tablas v2**; el propio GRANT protege las tablas legacy.
   - Cutover corto: se para la API legacy (y con ella sus crons), se hace backup, se aplican los backfills delta y se cambian los dominios.
   - 30 días de marcha atrás posible: la v2 sigue escribiendo en formato compatible con legacy.

   Ojo a dos cosas. Mientras corran los crons legacy, la v2 **tiene que seguir insertando filas `ModDownload`**: si no, `Mod.downloads` retrocede cada 30 min. Y nunca más se ejecuta `prisma db push` desde el repo legacy.

---

## 1. Método y fuentes

| Fuente | Qué se hizo |
|---|---|
| `sotf-mods-api/prisma/schema.prisma` + historial git | Inventario, evolución del esquema (`db push`, sin carpeta de migraciones) y detección de posibles restos (`Ban`, `canApprove`, `image_url`, `preview_url`) |
| `sotf-mods-api/src/**` | Leí todas las rutas de escritura: auth, publish, publish_build, release, update, comment, favoritos (2 endpoints), download (2), approve/unapprove, avatar, kelvinseek, crons y scripts |
| `sotf-mods-frontend/src/**` | Dónde se quitan caracteres (cliente), cómo llegan `ip`/`agent` al proxy de descarga, nombre de la cookie de sesión |
| API pública (GET) | `/api/stats`, `/api/stats/builds`, `/api/categories`, `/api/mods?type=Both&approved=…&nsfw=…&limit=1000`, `/api/mods/:mod_id` (×257), `/api/comments?mod_id=` (×257), `/api/users/:slug` (1), `download-stats` (1 mod pequeño) |
| R2 público (HEAD / Range) | HEAD de las 1.005 URLs referenciadas; lectura de `manifest.json` por HTTP Range en 220 zips (sin descargar el archivo entero) |
| Coolify API (GET) | `/version` (4.1.2), `/databases/ukg0ks4`, `/databases/ukg0ks4/backups`, `/applications/{kgsk8sw,o8woog8}`. Filtré los secretos y **no guardé ninguno** |
| OpenAPI de Coolify (v4.1.2 y rama v4.x) | Endpoints de backup disponibles en 4.1.2 |
| Prueba local | Instalé `bun@1.4.2`, generé hashes con `Bun.password.hash` y los verifiqué en Node 24.17 con `@node-rs/argon2` y `argon2`, y también al revés |
| `prisma@6.19.0 migrate diff --from-empty` | DDL exacto que describe el esquema legacy (tipos, FKs, `ON DELETE`) |

---

## 2. Inventario del esquema legacy

### 2.1 Convenciones reales en PostgreSQL (según el DDL que genera Prisma 6.19)

- Tablas en PascalCase entre comillas (`"User"`, `"Mod"`, `"ModDownload"`…) y columnas en camelCase entre comillas. La excepción es `"mod_id"`.
- Todos los ids son `SERIAL` (int4). `ModDownload.id` tiene margen de sobra: 2.147 M frente a unos 0,64 M nuevos al año.
- Fechas en `TIMESTAMP(3)` **sin zona horaria**. Prisma escribe en UTC. `createdAt` tiene `DEFAULT CURRENT_TIMESTAMP`, pero `updatedAt` **no tiene default en BD** porque lo rellena el cliente. Cualquier INSERT en SQL crudo tiene que darle valor.
- FKs por defecto de Prisma:
  - Relaciones opcionales: `ON DELETE SET NULL`.
  - Relaciones obligatorias: `ON DELETE RESTRICT`.
  - Todas: `ON UPDATE CASCADE`.

  Consecuencia: si se borra un `Mod`, sus `ModVersion` se quedan con `modId = NULL` y las `ModDownload` siguen colgando de esas versiones huérfanas. Eso explica las 434 descargas sin mod.
- El esquema se aplicó siempre con `prisma db push`. **La BD real puede no coincidir con `schema.prisma`**:
  - Puede que siga existiendo la tabla `Ban` (estaba en el esquema de 2023).
  - Columnas renombradas o quitadas (`image_url` → `imageUrl`, `preview_url`, `canApprove`) pudieron borrarse con `--accept-data-loss` o seguir ahí.
  - `_ModToTag` puede tener un índice único (Prisma ≤5) o una PK (Prisma 6).

  **Hay que introspectar el dump real antes de fijar el baseline** (§9.4).

### 2.2 Tablas

Leyenda de uso: **activa**, **semi** (se escribe pero nadie la lee o al revés) o **muerta**.

| Tabla | Columnas (tipo; default) | Constraints / índices | FKs (on delete) | Quién escribe | Uso |
|---|---|---|---|---|---|
| `User` | `id` serial; `email` text; `password` text (PHC argon2id); `name` text; `imageUrl` text `''`; `slug` text; `isTrusted` bool `false`; `createdAt`; `updatedAt` | UNIQUE `email` (**sensible a mayúsculas**), UNIQUE `slug` | — | register, reset-password, avatar | activa |
| `Token` | `id`; `token` text (JWT HS256 en claro); `expiresAt`; `userId` int NULL | **sin índices** (solo PK) | user SET NULL | login (crea y borra **todos** los expirados de todos los usuarios), logout, reset-password | activa (hot) |
| `PasswordResetToken` | `id`; `token` text (hex en claro); `expiresAt`; `userId` | UNIQUE `token` | user RESTRICT | forgot/reset | activa |
| `LoginAttempt` | ip, userAgent, email, success | — | — | nadie | muerta |
| `Mod` | `id`; `name`; `slug`; `mod_id` (id del manifest o GUID del build); `shortDescription` `''`; `description`; `dependencies` CSV `''`; `type` text NULL (`Mod`/`Library`/`Build`); `modSide` NULL; `isNSFW`; `isApproved`; `isFeatured`; `isMultiplayerCompatible` `false`; `requiresAllPlayers` `false`; `lastWeekDownloads` `0`; `downloads` `0`; `latestVersion` `''`; `latestVersionSize` `''`; `averageRating` float `0`; `reviewsCount` `0`; `favoritesCount` `0`; `commentsCount` `0`; `sourceUrl`; `imageUrl` (URL completa de la miniatura); `buildGuid`; `buildShareVersion`; `numberOfElements`; `lastReleasedAt`; `createdAt`; `updatedAt`; `userId` NULL; `categoryId` NULL | UNIQUE `mod_id`; UNIQUE (`slug`,`userId`); índices en `isNSFW`, `isApproved`, `isFeatured`, `lastReleasedAt`, `createdAt`, `userId`, `categoryId` | user SET NULL; category SET NULL | publish, publish_build, release, update, approve/unapprove, download (+1), comment (+1), toggle favorito, crons | activa |
| `ModImage` | `id`; `url` (URL completa); `isPrimary`; `isThumbnail`; `modId` NULL | índices `isPrimary`, `isThumbnail`, `createdAt`, `modId` | mod SET NULL | publish (createMany), update (**deleteMany y luego createMany**: los ids cambian y se pierde el historial) | activa |
| `ModVersion` | `id`; `version` (semver; en builds un UUIDv7); `isLatest`; `changelog`; `downloadUrl` (URL completa); `extension`; `filename` (clave R2); `modId` NULL | índices `isLatest`, `createdAt`, `modId`. **Falta** UNIQUE(`modId`,`version`) | mod SET NULL | publish, publish_build, release (updateMany isLatest=false, luego create) | activa |
| `ModDownload` | `id`; `ip` text; `userAgent` text; `createdAt`; `updatedAt`; `modVersionId` NULL | índices `ip` (sin uso), `createdAt`, `modVersionId` | version SET NULL | download y download_by_slug | activa (≈2M filas) |
| `ModFavorite` | `id`; `userId` NULL; `modId` NULL | **ninguno** (ni unique, ni índices de FK) | user/mod SET NULL | `GET /api/mods/:mod_id/favorite` (toggle), `POST /api/favorites/toggle` | activa (en la UI legacy se llama "following") |
| `ModReview` | `title`; `message`; `rating` int; `isHidden` `true`; `modVersionString`; `userId`; `modId` | UNIQUE (`userId`,`modId`) | SET NULL | nadie (`reviews/create.ts` está roto y no montado) | muerta, pero **reutilizable** |
| `Tag` + `_ModToTag` (`A`=Mod, `B`=Tag) | `name`, `slug`, `description` | UNIQUE `slug`; PK/unique (`A`,`B`), índice `B` | CASCADE | nadie | muerta, pero **reutilizable** |
| `Category` | `name`, `slug`, `description`, `type` (`Mod`/`Build`) | UNIQUE `slug` + índice `slug` duplicado | — | manual | activa (25 filas; el id 5 no existe) |
| `Comment` | `message`; `imageUrl`; `isHidden`; `ip` (**siempre `"undefined"`**); `userId` NULL; `modId`; `replyId` NULL | **ninguno** | user SET NULL; mod **RESTRICT**; reply SET NULL | comment.ts (+ PendingMention) | activa |
| `PendingMention` | `targetUserId`, `fromUserId`, `modId`, `commentMessage`, `type` | índice `createdAt` | todas RESTRICT | comment.ts; el cron de cada 10 min lo consume y borra | cola efímera |
| `KelvinGPTMessages` | `chatId`, `messageId`, `prompt`, `message`, `role`, `who` | **ninguno** | — | `/api/kelvinseek/prompt` (sin auth). **Bug:** conserva los 32 mensajes *más antiguos* y borra los nuevos | semi |

### 2.3 Rutas de escritura y efectos secundarios (lo que la v2 tiene que conservar o reemplazar)

| Endpoint / proceso | Escribe | Notas y bugs relevantes para la migración |
|---|---|---|
| `POST /api/auth/register` | `User` | `Bun.password.hash` (argon2id por defecto). Username `^[a-z0-9]+$`i y slug `slugify(lower)`, así que los slugs de usuario están limpios (192/192 verificados). Email único comprobado sin distinguir mayúsculas, pero el índice sí distingue: pueden existir duplicados por mayúsculas |
| `POST /api/auth/login` | `Token` | Busca por email con ILIKE (seq scan). Borra los tokens expirados **de todo el mundo** y crea un JWT de 2 días. El middleware **nunca mira `expiresAt`**: un token caducado sigue valiendo hasta que alguien, quien sea, vuelve a hacer login |
| `POST /api/auth/logout` | `Token` (delete) | |
| forgot/reset-password | `PasswordResetToken`, `User.password`, `Token` (borra todos los del usuario) | Tokens de reset en claro |
| `POST /api/mods/publish` | `Mod` (isApproved=false), `ModImage`, `ModVersion` | Descarga el zip entero de R2 a memoria. `shortDescription` y `name` llegan ya recortados por el cliente |
| `POST /api/builds/publish` | `Mod` (type=Build, **isApproved=true**), `ModImage`, `ModVersion` (versión = UUIDv7) | `name`/`shortDescription` salen del JSON del build (sin recortar) y `description` viene recortada por el cliente. Bug: `byteLength/1024 > 100MB`, así que el límite real es 100 GB |
| `POST /api/mods/:mod_id/release` | `ModVersion` (updateMany isLatest=false y luego create), `Mod` (latestVersion, lastReleasedAt, dependencies, type) | Exige semver > latest. Por eso el orden cronológico coincide con el semver (verificado en todos los mods) |
| `PATCH /api/mods/:mod_id/details` | `Mod`, `ModImage` (borrar y recrear) | Bug de clave `${slug}_${ext}` sin punto: 15 imágenes en R2 sin extensión, servidas como `application/octet-stream` |
| `GET /api/mods/:mod_id/approve` / `unapprove` | `Mod.isApproved` | Sin log de auditoría (no hay forma de saber quién aprobó qué) |
| `GET /api/mods/:mod_id/download/:version` y `/slug/:u/:s/download/:version` | `ModDownload` (+1 fila), `Mod.downloads` (+1) | `ip: (ip + "") \|\| …`: si no llega `?ip`, se guarda la cadena `"undefined"`. El proxy del frontend manda `x-forwarded-for` y `user-agent` sin url-encode (o `"null"` si falta la cabecera) |
| `POST /api/comments` | `Comment`, `Mod.commentsCount` (+1), `PendingMention` | Doble recorte (cliente y servidor) + sanitize-html (codifica entidades). `ip` = `"undefined"` porque el frontend no manda `?ip` |
| favoritos (2 endpoints) | `ModFavorite`, `Mod.favoritesCount` | find-then-create sin unique, así que puede haber carreras y duplicados. Uno de los endpoints es un **GET que muta** |
| `POST /api/users/avatar` | `User.imageUrl` | Clave `${userId}_avatar.ext` con timestamp |
| `GET /api/kelvinseek/prompt` y `/clear` | `KelvinGPTMessages` | Sin auth; `clear` es un GET que borra |
| Crons (cada 30 min, dentro del proceso de la API) | `Mod.lastWeekDownloads`, `Mod.downloads`, `Mod.favoritesCount`, `Mod.commentsCount` | Recalculan **todo** a partir de filas (`count` de ModDownload, ModFavorite y Comment), mod a mod, con un `update` por mod. Eso **reescribe `Mod.updatedAt`** cada 30 min |
| Cron (cada 10 min) | `PendingMention` (lee, manda email con Resend y borra) | |
| `src/scripts/*` (manuales) | delete-unapproved-mods (borra mods sin aprobar con todo lo que cuelga), delete-all-tokens, migrate-images-to-r2, migrate-canapprove-to-istrusted, configure-r2-cors | Quizá se ejecutaron: id máx. de Mod 320 frente a 257 filas → ≥63 mods borrados; versión máx. 716 frente a 612 → ≥104 versiones borradas o huérfanas |

---

## 3. Volúmenes

### 3.1 Medido (2026-09-29, API pública)

| Entidad | Valor | Fuente / cálculo |
|---|---|---|
| Usuarios | **3.883** (id máx. visto ≥ 3.910) | `/api/stats` |
| Filas `Mod` | **257** = 200 `Mod` + 2 `Library` + 19 `NULL` + 36 `Build` | listado `type=Both` en las 4 combinaciones approved×nsfw |
| Aprobados / sin aprobar | 229 / **28** (los sin aprobar suman **67.701 descargas**; son públicos y descargables) | idem |
| NSFW | 5 (3 aprobados) | idem |
| Autores con algún mod | 59 (46 "developers" = autores con un mod aprobado de tipo `Mod`; 14 `isTrusted`) | |
| `ModVersion` visibles | **612** (576 zip + 36 json) — id máx. 716 | `/api/mods/:mod_id` ×257 |
| `ModImage` | 126 (125 URLs únicas); 198 mods sin galería | idem |
| Miniaturas (`Mod.imageUrl`) | 257, todas en `r2.sotf-mods.com` | idem |
| `Comment` | **278** (251 raíz + 27 respuestas), 149 autores distintos, 6 con imagen, 0 ocultos. Desde 2025-03-04 | `/api/comments` ×257 |
| `ModFavorite` | **234** (coincide con la suma de `favoritesCount`, que cuenta filas duplicadas incluidas) | listado |
| `ModDownload` | **1.977.059** filas | `/api/stats` (`count(*)`) |
| Descargas atribuibles a un mod | 1.976.625 (suma por versión = suma de `Mod.downloads`) → **434 huérfanas** | detalle por versión |
| Descargas de builds | 33.889 | `/api/stats/builds` |
| Ritmo | 12.260 la última semana ≈ **1.750/día ≈ 640 k/año** | suma de `lastWeekDownloads` |
| Categorías | 25 (4 de mods, 21 de builds) | `/api/categories` |
| Dependencias | 12 referencias; **las 12 resuelven** a un `mod_id` existente | listado |
| `ModReview`, `Tag`, `LoginAttempt` | casi seguro 0 (no hay ruta que los escriba) | código |

### 3.2 R2 (HEAD de las 1.005 URLs referenciadas)

- Zips y JSON de versiones: **1,41 GB**. Miniaturas: 0,46 GB. Galería: 0,24 GB. Avatares de autores: 6 MB. **Total ≈ 2,1 GB** (sin contar objetos huérfanos que ya nadie referencia).
- 209 de 393 imágenes pesan más de 1 MB. La mayor es un GIF de 8 MB. Hay PNG de 7 MB usados como miniatura.
- Ningún objeto lleva `Cache-Control` y todos responden `cf-cache-status: DYNAMIC`.
- Content-Type: 48 zips van como `application/x-zip-compressed`, 15 imágenes como `application/octet-stream` (el bug de extensión).
- **1 objeto perdido**: mod 168 `virginia-wardrobe-18+` v0.0.3 → `https://files.sotf-mods.com/download/1722123985521_virginia-wardrobe-18 _0.0.3.zip` (503). En R2 no existe con `%20`, `+` ni `%2B`. Tiene 4.459 descargas contadas; la fila y sus descargas hay que conservarlas.
- 46 URLs de versión tienen espacios, comillas o paréntesis en la clave, así que siempre hay que url-encodearlas.
- R2 acepta `Range`. Se puede leer el `manifest.json` de un zip sin bajarlo entero, lo que sirve para validar en el servidor sin cargar 500 MB en RAM.

### 3.3 Estimación de lo privado (no se puede consultar desde fuera)

| Tabla | Estimación | Razonamiento |
|---|---|---|
| `ModDownload` heap + 4 índices | ≈ 300–450 MB + 150–250 MB | unos 150–220 B por fila (UA ~110 B, ip ~15–40 B; muchas filas `"undefined"`) |
| `Token` | cientos a pocos miles | 1 por login, se purgan los expirados en cada login |
| `KelvinGPTMessages` | desconocido (≤ 33 por chatId) | sin auth |
| `PendingMention` | casi 0 (se vacía cada 10 min) | |
| `PasswordResetToken` | pocos | |
| Dump `pg_dump -Fc` | ≈ 60–150 MB | la compresión de UA/IP repetidas es muy alta |

### 3.4 Lo que la API pública NO deja ver

Emails, hashes de contraseña, `isTrusted` de quien no tiene mods ni comentarios, tokens, reset tokens, **el 95 % de los usuarios** (solo se llega a 192 slugs: autores ∪ comentaristas), favoritos por usuario (solo hay conteos), filas `ModDownload` (sí hay **series diarias por mod** vía `download-stats?period=all`, que es de solo lectura pero pesado para prod), `PendingMention`, `KelvinGPTMessages`, `LoginAttempt`, versiones y mods huérfanos o borrados, y la tabla `Ban` si existe. **Las "vistas" no existen**: la legacy no registra visitas, así que no hay nada que migrar y la v2 empieza a contarlas desde el lanzamiento (Cloudflare/AdSense tienen algo de histórico fuera de la BD).

---

## 4. Calidad de datos (hallazgo → evidencia → tratamiento en v2)

| # | Hallazgo | Evidencia | Tratamiento v2 |
|---|---|---|---|
| Q1 | `Mod.updatedAt` inservible | Las 257 filas marcan `updatedAt` = 2026-09-29T03 (cron) | No usarlo. Nueva columna `editedAt`. Usar `lastReleasedAt` para "actualizado" |
| Q2 | Contadores desnormalizados y reescritos por crons | `downloads`, `lastWeekDownloads`, `favoritesCount`, `commentsCount` = `count` de filas cada 30 min. `averageRating`/`reviewsCount` siempre 0 | Agregados diarios + tabla `ModStats`. Mientras corran los crons legacy, escribir filas compatibles (§8.3) |
| Q3 | 434 descargas no atribuibles | 1.977.059 frente a 1.976.625 | Mantenerlas. El total del sitio = suma de agregados + bucket de huérfanas, **debe seguir dando 1.977.059+** |
| Q4 | `ip`/`userAgent` basura | `"undefined"` (descargas API directas: RedManager, one-click, externos), `"null"` (sin cabecera), `x-forwarded-for` con varias IPs | Clasificar el **canal** (`web` / `client` / `unknown`) de forma heurística en los agregados. En la v2, guardar la IP con hash y sal, nunca en claro |
| Q5 | Caracteres eliminados al guardar | ver §4.1 | Guardar el texto tal cual (UTF-8, NFC) y sanear al renderizar |
| Q6 | Entidades HTML en texto | 5/278 comentarios (`&lt;3`, `&amp;`). También posibles en changelogs y descripciones cortas | Decodificar al leer, o hacer backfill a una columna nueva `bodyMd` con auditoría |
| Q7 | `type = NULL` | 19 mods de 2023 (p. ej. `better-masks`, `redeffect`). Ocultos en el listado por defecto (`type=Mod`) | Backfill a `Mod` (o `Library` si el manifest lo dice), con auditoría |
| Q8 | Slugs no canónicos | 15: `immersivecompanioninjuries(beta)`, `regi's-modding-library`, `virginia-wardrobe-18+`, `gerald-r.-ford-class-aircraft-carriers`, `dynamic_survival_matrix`… | `canonicalSlug` nueva + tabla de redirects 301 (§10) |
| Q9 | Versión con archivo perdido | mod 168 v0.0.3 (§3.2) | `ModVersion.status = 'file_missing'`, esconder el botón de descarga, pedir al autor que la vuelva a subir; conservar el conteo |
| Q10 | Orden de versiones como string | 4 mods salen mal ordenados en la legacy | Ordenar por (`createdAt`,`id`), que coincide con semver en el 100 % de los mods, y guardar semver parseado para compatibilidad |
| Q11 | Builds con "versión" UUIDv7 | 36 | Mostrar "rev N" / fecha; la versión sigue siendo la clave |
| Q12 | Favoritos duplicables | sin UNIQUE; toggle find-then-create y dos endpoints | Deduplicar archivando los duplicados y luego UNIQUE (§11) |
| Q13 | Emails duplicados por mayúsculas | UNIQUE sensible + login insensible | Comprobar con SQL. Columna `emailNormalized` + UNIQUE parcial. Si hay colisiones, resolverlas a mano con el usuario |
| Q14 | Tokens en claro / expirados aceptados | ver §2.3 | Sesiones v2 con hash (§7) |
| Q15 | Imágenes enormes / sin extensión | 209 > 1 MB; 15 `octet-stream` | Pipeline de variantes (AVIF/WebP + LQIP) en la v2; los originales no se tocan |
| Q16 | Autoría de moderación inexistente | approve/unapprove sin log | `ModerationAction` desde la v2. El histórico no se puede reconstruir |
| Q17 | Descripciones con HTML crudo | 24 de 257 tienen `<tag>` (XSS en la legacy); 11 con no-ASCII (las descripciones de mods **no** se recortan) | Render seguro (markdown → allowlist) |
| Q18 | Enlaces internos en descripciones | 20 descripciones enlazan a `sotf-mods.com/mods/:u/:s` (24 enlaces) y `/profile/:slug` | Redirects de slugs viejos (Q8) |
| Q19 | Posibles restos de `db push` | Esquema de 2023 con `Ban`, `image_url`, `preview_url`, `canApprove` | Introspección del dump (§9.4); nada se borra |
| Q20 | KelvinSeek trunca mal | conserva los 32 mensajes más antiguos por chat | Sin impacto en la migración; se arregla en la v2 |
| Q21 | Borrado de mod bloqueado por comentarios | `Comment.modId` RESTRICT | La v2 hace borrado lógico (`deletedAt`), nunca físico |

### 4.1 Dónde se pierden los umlauts (y qué se puede recuperar)

**Dónde está el código:**

1. **Cliente**, `sotf-mods-frontend/src/static/scripts/shared.js:139`, `window.sanitizeText`:
   `DOMPurify.sanitize(text).replace(/[^\p{Script=Han}a-zA-Z0-9,.¡!¿?$%&()#+;/'"\n @_-]/gu, "")`, y después se quitan los `<…>`.
   - Solo deja ASCII alfanumérico, ideogramas Han y `, . ¡ ! ¿ ? $ % & ( ) # + ; / ' "`, espacio, `_ -`, `\n` (desde 2025-01-31) y `@` (desde 2026-02-08).
   - **Quita:** á é í ó ú ñ ä ö ü ß ç ł ś…, cirílico, kana y hangul, emoji, comillas y rayas tipográficas, **`:`**, `* [ ] < > = ~ \` | { } \ ^`, tabuladores y `\r`. Como quita `:`, rompe los enlaces (`https//`) y el markdown.
   - DOMPurify serializa como HTML, así que `&` pasa a `&amp;` y `<` suelto a `&lt;` (de ahí vienen las entidades de Q6).
   - Se aplica a:
     - `Mod.name` y `Mod.shortDescription` al publicar mods (`upload.js:442-443`) y al editar mods y builds (`mod.js:159,163`, `build.js:102,106`).
     - `ModVersion.changelog` al publicar versión (`mod.js:207`, `build.js:145`).
     - `Comment.message` (`mod.js:340`).
     - `Mod.description` **solo de builds** al publicar (`upload-build.js:230`).
   - `Mod.description` de mods **no** se toca.
2. **Servidor**, `sotf-mods-api/src/shared/sanitize.ts`, `sanitizeInput`, con el mismo patrón. Protege `:` con un token, así que el servidor sí lo conserva, pero el cliente ya lo quitó. Después pasa sanitize-html (entidades). Se usa solo en `comment.ts` y KelvinSeek.
   - Historial: `\n` desde 2025-04-29 y `@` desde 2026-02-08.
3. **Validación del servidor** `validateModName`: los nombres de mod solo admiten el mismo juego de caracteres. Los nombres nunca tuvieron acentos, así que ahí hay restricción pero no pérdida.

**Evidencia en los datos:**

- 0 de 612 changelogs y 0 de 278 comentarios contienen `:`.
- 4 comentarios tienen `https//`.
- `mojaosada`: en BD `"Zosta wodzem! N (Buduj), V (Przeno), K (Niewidzialno)."`; en su `manifest.json`: `"Zostań wodzem! … (Przenoś), K (Niewidzialność)."`.
- Comentario `"the mostthe expanse"`: se comió una raya.
- Changelogs anteriores a 2025-01-31: todo en una sola línea.

**Recuperabilidad:**

- **`shortDescription` de mods: recuperable en parte.** El formulario la rellena con `manifest.description` (`upload.js:284`). Leí el `manifest.json` de la primera versión de 219 mods por Range. Solo **3** tenían caracteres afectados y en los 3 se cumple `sanitize(manifest.description) == shortDescription`, es decir, recuperables con total seguridad: `mojaosada`, `stashvehicles` (`->`) y `removemaxobjectcap` (espacio final).
  - Backfill: restaurar solo si se cumple esa igualdad exacta, guardando el valor anterior en `DataFixAudit`.
  - Anomalía: el primer archivo de `kelvin-gpt` no es un zip válido.
- **Changelogs, comentarios y descripciones de builds: no se pueden recuperar.** No existe otra copia; ni los objetos viejos de R2 ni los manifests los guardan. Solo quedaría pedir a los autores que los editen (en la v2 los changelogs se pueden editar).
- **Entidades HTML:** reversibles al 100 % (`&amp;`→`&`, `&lt;`→`<`, `&gt;`→`>`, `&nbsp;`→espacio duro).

---

## 5. Índices: lo que hay, lo que falta y lo que sobra

La tabla `Mod` (257 filas) es tan pequeña que ahí manda el caché y no los índices. Las tablas calientes son `ModDownload`, `Token`, `Comment` y `ModFavorite`.

| Query caliente | Hoy | Propuesta v2 |
|---|---|---|
| Auth: `User` WHERE tokens.some(token=?) en **cada** request autenticada (y además carga `favoriteMods`) | seq scan de `Token` | Sesión v2: `Session.tokenHash` UNIQUE. Durante la transición, `CREATE UNIQUE INDEX CONCURRENTLY` en `"Token"("token")` tras comprobar que no hay duplicados |
| Login `email ILIKE ?` | seq scan (3,9 k) | `emailNormalized` UNIQUE (parcial `WHERE emailNormalized IS NOT NULL`), mantenida por trigger |
| `/api/stats` → `count(*)` de `ModDownload` en cada landing | recorre un índice de 2M filas | `SiteStats` cacheado (contador incremental + agregados) |
| Gráfica de descargas por mod (`modVersionId IN … AND createdAt >= …`) | dos índices sueltos (bitmap) | Agregados `ModVersionDownloadDaily` (PK `versionId, day, channel`). Sobre raw, si hace falta: `(modVersionId, createdAt)` |
| Cron semanal / total de descargas | count por versión | Suma de agregados (de 7 o 30 filas por versión) |
| Comentarios de un mod (raíz, desc) + respuestas | seq scan | `Comment(modId, createdAt DESC) WHERE replyId IS NULL` (parcial) + `Comment(replyId, createdAt)` + `Comment(userId)` |
| Favoritos por usuario y por mod | seq scan | UNIQUE `(userId, modId)` tras deduplicar + `(modId)` |
| `check` de actualización (`isLatest` por `mod_id`) | `ModVersion_isLatest_idx` | UNIQUE parcial `(modId) WHERE isLatest` (una sola latest) + UNIQUE `(modId, version)` |
| Menciones `name ILIKE ANY` | seq scan | índice `lower(name)` (o columna normalizada) |
| KelvinSeek por `chatId` ordenado | seq scan | `(chatId, updatedAt)` |
| Búsqueda `name/description/user.name ILIKE %q%` | seq scan | `searchVector tsvector` (trigger, `unaccent`) + GIN; `pg_trgm` GIN en `name` para errores tipográficos y el ⌘K. Ambas extensiones son "trusted" en PG16 |
| Redirects de slug | — | UNIQUE `(userSlug, slug)` en `ModSlugHistory` |

Sobran, pero **se quitan solo en la fase "contract"** (más de 60 días después del lanzamiento): `ModDownload_ip_idx` (ninguna query lo usa y encarece los 1.750 inserts diarios), `Mod_isFeatured/isNSFW/isApproved_idx` (booleanos poco selectivos), `ModImage_isPrimary/isThumbnail_idx` (siempre false) y `Category_slug_idx` (duplica el unique). Quitar un índice no borra datos, pero igualmente se hace por separado.

Reglas para crearlos en prod:

- `CREATE INDEX CONCURRENTLY` en **un archivo de migración con esa única sentencia**: Prisma manda el archivo como un script, y `CONCURRENTLY` no puede ir dentro de una transacción.
- `SET lock_timeout = '3s'` en toda migración.
- FKs y CHECK como `NOT VALID` primero y `VALIDATE CONSTRAINT` después.

---

## 6. Contraseñas: de Bun a Node 24

**Formato legacy.** `Bun.password.hash(pw)` sin opciones usa argon2id con `m=65536` KiB (64 MiB), `t=2`, `p=1`, 32 bytes de sal y 32 de hash, y lo guarda como cadena PHC:
`$argon2id$v=19$m=65536,t=2,p=1$<salt b64>$<hash b64>`.
Se ha usado `Bun.password.hash` desde el primer commit (2023-09-20) hasta hoy; no hay otro algoritmo en el código. Bun también sabe verificar bcrypt (`$2b$`) y, con passwords de más de 72 bytes, las pre-hashea con SHA-512 (un comportamiento no estándar). Nunca se usó aquí, pero conviene confirmarlo con SQL (§14, Q-P1).

**Prueba hecha (2026-09-29):**

```
bun 1.4.2  → h1 = $argon2id$v=19$m=65536,t=2,p=1$ZpPF…   (pw ASCII)
             h2 = $argon2id$v=19$m=65536,t=2,p=1$DirJ…   (pw "Pässwörd#1ñ€漢")
node 24.17 → @node-rs/argon2@2.2.1 verify(h1)=true, verify(h1, pw+'x')=false, verify(h2)=true
             argon2@0.45.1          verify(h1)=true, verify(h2)=true, needsRehash(h1,{m:65536,t:2,p:1})=false
             hash nuevo con @node-rs/argon2 (m=65536,t=2,p=1) → Bun.password.verify = true
             verify ≈ 96 ms
```

**Librería:** `@node-rs/argon2` 2.2.1 (napi-rs, binarios precompilados para linux-x64 gnu/musl sin node-gyp, compatible con `node:24-alpine`). Alternativa: `argon2` 0.45.1, que trae `needsRehash` de serie.

**Plan de rehash transparente:**

```ts
import { verify, hash } from '@node-rs/argon2';
const TARGET = { algorithm: 2 /* Argon2id */, memoryCost: 65536, timeCost: 2, parallelism: 1 };

async function checkPassword(user, plain) {
  const ok = user.password.startsWith('$argon2')
    ? await verify(user.password, plain)
    : user.password.startsWith('$2') ? await bunBcryptCompat(user.password, plain) : false;
  if (ok && needsRehash(user.password)) {                // parsea PHC: alg/m/t/p < TARGET
    await db.user.update({ where: { id: user.id }, data: { password: await hash(plain, TARGET), passwordUpdatedAt: new Date() } });
  }
  return ok;
}
```

- **Parámetros objetivo iguales a los de Bun** (64 MiB, t=2). Están por encima del mínimo de OWASP (19 MiB, t=2) y así **nadie necesita rehash**.
- Compatibilidad en ambos sentidos: cualquier hash que escriba la v2 lo verifica también la legacy si se vuelve atrás.
- La v2 limita la concurrencia de hashing (cola o semáforo, p. ej. 4 a la vez = 256 MB) y aplica rate-limit al login, porque 64 MiB por intento sin límite abre una puerta a DoS.
- Unicode: normalizar el password a NFC **solo si** falla la verificación sin normalizar. Los hashes legacy se hicieron con el string tal cual llegaba.

---

## 7. Sesiones y tokens legacy

- Tabla nueva `Session` (`id` uuidv7, `userId`, `tokenHash` sha256 UNIQUE, `createdAt`, `expiresAt`, `lastSeenAt`, `ipHash`, `userAgent`, `revokedAt`, `pwdFingerprint`) con cookie `__Host-` httpOnly, Secure y SameSite=Lax.
- **Upgrade sin fricción:** la legacy deja la cookie `token` (legible por JS) en `sotf-mods.com`. Cuando la v2, en el mismo dominio, ve una cookie `token`, la busca en `"Token"` y exige `expiresAt > now()`. Si es válida, crea una `Session` v2 y borra la cookie legacy (`Max-Age=0`). La fila legacy no se toca, por si hay que volver atrás. Como los tokens legacy duran 2 días, esta vía caduca sola.
- `pwdFingerprint` guarda los primeros 16 caracteres de sha256(`User.password`). Si la contraseña cambia por cualquier camino (incluido el reset legacy durante la transición), las sesiones v2 dejan de valer.
- Reset y verificación de email en la v2: tabla `AuthToken` (`kind`, `tokenHash`, `expiresAt`, `usedAt`). `PasswordResetToken` legacy se queda sin uso.

---

## 8. Cómo conseguir datos reales para desarrollar y ensayar la migración

### 8.1 Lo que se ve en Coolify (solo GET)

- Coolify **4.1.2**. BD `sotf-mods-db`: `postgres:16-alpine`, `running:healthy` desde 2025-03-25, sin límites de CPU ni memoria, sin `postgres_conf` propio.
- `GET /databases/ukg0ks4/backups` → **`[]`: no hay ningún backup programado.**
- `is_public: true`, `public_port: 5433`, `enable_ssl: false`. Desde aquí no se pudo conectar (el hostname está detrás de Cloudflare), pero seguramente responde en la IP del servidor sin TLS. **Recomendación de seguridad:** cerrarlo cuando se haya sacado el dump, o limitarlo por firewall y activar SSL.
- Las apps (`kgsk8sw`, `o8woog8`) no tienen `pre/post_deployment_command`: **ningún deploy lanza `prisma db push`**. Los cambios de esquema en prod siempre se hicieron a mano.
- API 4.1.2 (OpenAPI de la tag `v4.1.2`):
  - `POST /databases/{uuid}/backups` crea la configuración (`frequency`, `save_s3`, `s3_storage_uuid`, `backup_now`, retención…).
  - `PATCH …/{backup_uuid}` (`backup_now`).
  - `GET …/{backup_uuid}/executions` devuelve `filename`, `size` y `status`.
  - **La API no tiene endpoint de descarga ni `clone`** (`/databases/{uuid}/clone` aparece en versiones posteriores). La descarga se hace desde la UI (Backups → Executions → Download) o por SSH desde `/data/coolify/backups/databases/…`.
  - El formato es `pg_dump --format=custom --no-acl --no-owner`.

### 8.2 Opciones (todas las acciones las hace el usuario; nosotros no ejecutamos nada en prod)

**A. Backup de Coolify y descarga (recomendada).**

1. En la UI: BD `sotf-mods-db` → Backups → *Add*: diario, retención local 7, **S3 = un bucket nuevo de R2 `sotf-mods-backups`** (privado; no reutilizar `sotf-mods`, que es público), retención S3 30. Pulsar *Backup now*.
2. Descargar el `.dmp` de *Executions* (o `scp` del archivo).
3. Dejarlo **fuera del repo**, cifrado (`age`), en `~/sotf-mods-private/` por ejemplo.
4. Restaurar en local:
   ```bash
   docker compose -p sotfv2-data up -d   # postgres:16-alpine, puerto libre p. ej. 55432
   pg_restore --no-owner --no-acl -d postgres://dev:dev@localhost:55432/sotf_mods_prod_copy prod.dmp
   ```
5. Pasar `scripts/db/anonymize.sql` para generar un `dev.dmp`:
   - emails → `user<id>@example.invalid`;
   - password → hash conocido de `sotf-dev-2026!`;
   - `TRUNCATE "Token","PasswordResetToken","PendingMention"`;
   - `ModDownload.ip` → hash, conservando los literales `undefined`/`null`;
   - `Comment.ip` → `'redacted'`;
   - `KelvinGPTMessages` → vaciar o conservar según el caso.

   El `dev.dmp` sí se puede compartir con el equipo o con CI. La copia real solo se usa en los ensayos de migración.

**B. Túnel SSH temporal y rol de solo lectura.** El usuario crea el rol `CREATE ROLE v2_reader LOGIN PASSWORD … ; GRANT SELECT ON ALL TABLES IN SCHEMA public TO v2_reader;` y abre `ssh -L 55433:<ip-contenedor>:5432 root@servidor`. Con eso: `pg_dump -Fc`. También sirve para **consultas de perfilado** (§14) sin copiar datos, y para medir tamaños reales (`pg_total_relation_size`).

**C. Por el puerto público 5433** (ya existe): igual que B pero sin túnel. Es menos seguro (sin TLS); solo con el rol de solo lectura, desde una IP autorizada y cerrándolo después.

**D. Respaldo sin acceso: seed desde la API pública + datos sintéticos** (`scripts/seed/from-public-api.ts`):

- **Entrada:** el snapshot ya guardado (`/root/sotf-mods/.research-cache/public-api-2026-09-29/`), o un re-fetch con concurrencia ≤ 3 y User-Agent identificable.
- **Orden de carga** (sobre el esquema legacy exacto, `prisma migrate diff --from-empty --to-schema legacy.prisma`):
  1. `Category` (ids reales).
  2. `User`: 59 autores con su id real (`Mod.userId`) y 149 comentaristas (el API no da su id; se les asignan ids ≥ 100000). Sus `createdAt`, `imageUrl` e `isTrusted` salen de `/api/users/:slug`.
  3. `Mod`, `ModImage` y `ModVersion` con los ids reales.
  4. `Comment` con ids reales y `replyId`.
  5. `ModFavorite`: 234 filas repartidas por mod según `favoritesCount`, con usuarios sintéticos.
  6. `ModDownload`: **1,98 M filas por COPY**. Por versión se respeta `_count.downloads`. En el tiempo se reparte con la serie diaria de `download-stats?period=all` (solo lectura pero pesada: una vez, de madrugada, con concurrencia 1 y guardada en caché) o, si no, de forma uniforme entre el `createdAt` de una versión y el de la siguiente.
- **Sintéticos para cuadrar volúmenes y casos límite:**
  - unos 3.690 usuarios más (hasta 3.883), con emails `@example.test` y hashes argon2id reales (`m=65536,t=2,p=1`) de una contraseña de desarrollo;
  - un 30 % de `ModDownload` con `ip='undefined'` y algunas `'null'`;
  - tokens caducados;
  - **casos raros inyectados:** 2 emails que solo difieren en mayúsculas, 3 favoritos duplicados, 434 descargas huérfanas (una versión con `modId NULL` y filas con `modVersionId NULL`), la versión en `files.sotf-mods.com`, `type NULL`, slugs raros, un hash bcrypt `$2b$` y comentarios con `&lt;`.
- **Salida:** `dev-seed.dmp` determinista (semilla fija). No se commitea por tamaño; se genera con `npm run db:seed:public`.

### 8.3 Reglas para datos reales

- Nunca en git (`.gitignore`: `*.dmp`, `*.dump`, `*.sql.gz`, `private/`) ni en CI.
- Cifrado en reposo.
- Borrar las copias al terminar los ensayos.
- Contienen datos personales (emails, IPs, hashes).

---

## 9. Herramienta de esquema y migraciones: Prisma 7 frente a Drizzle

### 9.1 Versiones actuales (npm, 2026-09-29)

- `@prisma/client` 7.10.0 (latest). El CLI `prisma` tiene `latest` = 8.0.0-rc.17, así que conviene **fijar 7.10.x**.
- `@prisma/adapter-pg` 7.10.0.
- `drizzle-orm` 0.45.3 / `drizzle-kit` 0.31.11 estables; 1.0.0-rc.4 en `rc`.
- `pg` 8.23.0, `kysely` 0.29.6.

### 9.2 Comparativa

| Criterio | Prisma 7.10 | Drizzle 0.45 (1.0 en RC) |
|---|---|---|
| Adoptar la BD existente | El `schema.prisma` legacy **ya describe** nombres, defaults y relaciones. Baseline oficial: `migrate diff --from-empty --to-schema` + `migrate resolve --applied 0_init` | `drizzle-kit pull` → schema TS; el baseline se marca a mano en `__drizzle_migrations` |
| Riesgo de traducción | Nulo (mismo DSL). En v2 se pueden dar nombres limpios en TS sin tocar la BD (`manifestId String @map("mod_id")`) | Medio: re-mapear 16 tablas con identificadores entre comillas |
| Garantía "legacy ⊆ v2" automatizable | **Sí**: `prisma migrate diff --from-schema legacy.prisma --to-schema schema.prisma --script` en CI, fallando si aparece `DROP`, `RENAME`, `ALTER COLUMN … TYPE`, `SET NOT NULL` o `DROP DEFAULT` | Posible, pero hay que montarlo a mano |
| Migraciones seguras | `migrate deploy` solo aplica SQL revisado y avisa de pérdida de datos. `migrate diff --exit-code` detecta drift | Bien con `generate`; el `push` interactivo es peligroso |
| SQL avanzado | Índices parciales (preview `partialIndexes`, 7.4+), GIN con `ops` (trgm). Triggers, funciones, índices de expresión y matviews como SQL en `migration.sql` (Prisma no los reporta como drift) | Nativo en el schema: expresión, parciales, vistas, generated columns y CHECK |
| Runtime | Sin Rust desde la 7 (TS + adapter `pg`), query caching desde 7.4, ESM | Mínimo |
| Estabilidad | Estable | 1.0 en RC (cambian migraciones y RQB v2 a mitad de proyecto) |
| Analítica | TypedSQL (`.sql` tipados) o `$queryRaw` | Query builder SQL |

### 9.3 Recomendación: Prisma 7.10.x

1. Con una BD compartida con legacy, lo que más importa es no introducir diferencias: el mismo DSL las elimina de raíz.
2. El guard de CI "legacy ⊆ v2" sale casi gratis.
3. Lo que Drizzle hace mejor (expresiones, triggers, vistas) aquí son pocas piezas y van como SQL en migraciones revisadas.

Convenciones:

- Tablas nuevas con el mismo estilo de Prisma (PascalCase y camelCase) para no mezclar dos convenciones.
- Analítica y queries calientes en TypedSQL.
- `connection_limit` explícito por proceso, porque la legacy ya usa su propio pool durante la transición.

### 9.4 Procedimiento de baseline

1. Restaurar el dump real (§8.2 A) → `prisma db pull` con Prisma 7 → `introspected.prisma`.
2. `prisma migrate diff --from-schema legacy.prisma --to-schema introspected.prisma` → **informe de drift** (tablas o columnas sobrantes como `Ban`, `canApprove`, `image_url`; formato de `_ModToTag`). Todo lo que exista **se declara en el schema v2** (con `@@ignore` si no se usa) para que nada lo intente borrar.
3. `prisma/migrations/0_init/migration.sql` = `migrate diff --from-empty --to-schema schema.prisma --script` (con el schema = la realidad introspectada).
4. En la copia, verificar `migrate diff --from-config-datasource --to-schema schema.prisma --exit-code` → 0.
5. En prod (con el usuario, en la ventana de cambios): `prisma migrate resolve --applied 0_init`. Esto solo crea `_prisma_migrations`, una tabla nueva que la legacy ignora.
6. A partir de ahí, `prisma migrate deploy` con migraciones **solo aditivas**.
7. **Nunca más `prisma db push` desde el repo legacy**: intentaría borrar las tablas y columnas v2. Hay que apuntarlo en el runbook y, a ser posible, que el usuario quite el acceso de ese repo a `DATABASE_URL` de escritura.

---

## 10. Modelo de datos v2 (todo aditivo)

### 10.1 Columnas nuevas en tablas legacy (NULL o con DEFAULT constante: `ADD COLUMN` instantáneo en PG16)

| Tabla | Columnas nuevas | Notas |
|---|---|---|
| `User` | `emailNormalized` (trigger `lower(trim(email))`, UNIQUE parcial), `role` text DEFAULT `'user'` (`user`/`creator`/`moderator`/`admin`; backfill `isTrusted` → `moderator`), `displayName`, `bio`, `links` jsonb, `avatarKey`, `bannerKey`, `locale`, `country`, `emailVerifiedAt`, `passwordUpdatedAt`, `lastLoginAt`, `lastSeenAt`, `bannedAt`, `banReason`, `deletedAt`, `xp` int DEFAULT 0, `settings` jsonb DEFAULT `'{}'` | La v2 escribe `isTrusted` y `role` a la vez mientras la marcha atrás sea posible |
| `Mod` | `canonicalSlug` (UNIQUE parcial `(userId, canonicalSlug)`), `status` text (`pending`/`approved`/`rejected`/`hidden`/`archived`; sincronizado con `isApproved`), `approvedAt`, `approvedById`, `publishedAt`, `editedAt`, `deletedAt`, `descriptionMd` (texto completo v2), `thumbnailKey`, `license`, `searchVector` tsvector (trigger), `gameCompat` jsonb | Se reutilizan `averageRating`/`reviewsCount` (valoraciones), `isFeatured` (destacados) y `sourceUrl` (repositorio) |
| `ModVersion` | `storageKey` (se deriva de `downloadUrl` quitando el host), `fileSize` bigint, `sha256`, `contentType`, `status` (`active`/`yanked`/`file_missing`), `changelogMd`, `semverMajor/Minor/Patch`, `semverPre`, `loaderVersionRange`, `gameBuild`, `publishedById`, `downloadsCount` int DEFAULT 0 | `downloadUrl` se sigue rellenando (la legacy la lee) |
| `ModImage` | `storageKey`, `width`, `height`, `lqip`, `sortOrder`, `alt`, `variants` jsonb | Si la legacy edita, borra y recrea las filas; un job idempotente recalcula las que tengan `width IS NULL` |
| `Comment` | `bodyMd`, `editedAt`, `deletedAt`, `deletedById`, `pinnedAt`, `status`, `reactionsCount` | La v2 guarda `ip` como hash |
| `ModReview` (ya existe y está vacía) | `helpfulCount` DEFAULT 0, `editedAt`, `status`, `modVersionId` | **Valoraciones y reseñas se completan sobre la tabla existente.** Ojo: `isHidden` tiene DEFAULT `true` en BD, así que la v2 lo pone siempre de forma explícita |
| `Category` | `icon`, `sortOrder`, `i18n` jsonb | |
| `Tag` / `_ModToTag` | se reutilizan tal cual | Etiquetas libres y curadas |
| `ModDownload` | (opcional) `channel` text NULL | Sin backfill sobre 2M filas; el canal va en los agregados |

### 10.2 Tablas nuevas (solo v2; la legacy no las conoce)

- **Auth:** `Session`, `AuthToken` (reset, verificación de email, magic link), `OAuthAccount` (Discord y Steam OpenID; la comunidad vive en Discord).
- **URLs:** `ModSlugHistory (modId, userSlug, slug, createdAt)` y `LegacyRedirect (fromPath, toPath, status)` para los 301.
- **Contenido:**
  - `ModDraft` (JSON + claves subidas, autoguardado). Los borradores **no** van a `Mod`, porque la legacy muestra los mods sin aprobar.
  - `ModDependency (modId, dependsOnModId NULL, dependsOnManifestId, versionRange, kind)`. Backfill desde el CSV `dependencies`: 12 de 12 resuelven.
  - `GameBuild` (opcional).
- **Estadísticas:**
  - `ModVersionDownloadDaily (versionId, day date, channel, downloads, uniqueIps)`.
  - `SiteDownloadDaily (day, channel, downloads)` para las descargas con `modVersionId NULL`.
  - `ModStatsDaily (modId, day, views, downloads, favorites, comments, reviews)` para el panel del creador.
  - `ModStats` (caché de totales, 7 y 30 días).
  - `SiteStats`.
- **Social:** `Follow` (usuario → creador), `Collection` + `CollectionItem` (listas o modpacks compartibles, exportables a RedManager), `CommentReaction`, `ReviewVote`, `Notification` + `NotificationPreference`. `PendingMention` se queda como cola legacy y la v2 no la usa.
- **Moderación:** `Report` (objetivo polimórfico), `ModerationAction` (log de auditoría), `UserBan`.
- **Gamificación:** `Badge`, `UserBadge`, `XpEvent`. Backfill retroactivo con datos que ya existen: primer mod, hitos de 1k, 10k y 100k descargas, primer comentario, veteranía desde 2023, y una insignia "Founding Survivor" para las cuentas creadas antes de la v2.
- **Integraciones:** `ApiKey` (para que los creadores publiquen desde CI), `Webhook` (anuncios de release en Discord).
- **Operación:** `DataFixAudit (fixId, table, rowId, column, oldValue, newValue, appliedAt)` y `MigrationRun (name, startedAt, finishedAt, rowsAffected, checksumBefore, checksumAfter)`.

---

## 11. Backfills (idempotentes, por lotes, con auditoría)

Normas comunes:

- Lotes de 1–5 k filas.
- `WHERE <columna_nueva> IS NULL` para que se puedan reanudar.
- Registro en `MigrationRun`.
- **Toda modificación de una columna legacy guarda el valor anterior en `DataFixAudit`**, así que es reversible fila a fila.
- Se ejecutan una vez en el ensayo y otra como delta en el cutover (filas con `id >` marca de agua).

| # | Backfill | SQL / lógica | ¿Toca columnas legacy? |
|---|---|---|---|
| B1 | Agregados diarios de descargas | `INSERT INTO "ModVersionDownloadDaily" SELECT "modVersionId", ("createdAt")::date, CASE WHEN ip='undefined' THEN 'client' WHEN ip IN ('null','') THEN 'unknown' ELSE 'web' END, count(*), count(DISTINCT ip) FROM "ModDownload" WHERE "modVersionId" IS NOT NULL GROUP BY 1,2,3 ON CONFLICT DO UPDATE …`, y lo mismo con `modVersionId IS NULL` hacia `SiteDownloadDaily`. Con 2M filas son segundos | No |
| B2 | `storageKey` | `substring("downloadUrl" from '^https://r2\.sotf-mods\.com/(.*)$')` (decodificado); lo mismo para imágenes y avatares. Las que no casen (1 fila de `files.sotf-mods.com`) → `status='file_missing'` | No |
| B3 | `canonicalSlug` | `slugify` estricto `[a-z0-9-]` (translitera y colapsa `-`); si colisiona dentro del mismo usuario, sufijo `-2`. Cuando `canonicalSlug != slug`, una fila en `ModSlugHistory`. **`Mod.slug` no se cambia** mientras exista la marcha atrás | No |
| B4 | `type NULL` → `'Mod'` (o `'Library'` según el manifest) | 19 filas | **Sí**, con auditoría (además arregla el listado de la legacy) |
| B5 | Deduplicar favoritos | `CREATE TABLE "ModFavoriteArchive" AS …` con las filas duplicadas (conservando la más antigua de cada `(userId, modId)`) → `DELETE` de esas ids → `CREATE UNIQUE INDEX CONCURRENTLY … ("userId","modId")` | **Sí**: filas movidas, no perdidas |
| B6 | `emailNormalized` y trigger | `UPDATE … SET "emailNormalized" = lower(trim(email))`; si hay colisiones, el UNIQUE parcial excluye los casos marcados y se resuelven a mano | No |
| B7 | `role` desde `isTrusted` | | No |
| B8 | `shortDescription` desde el manifest | Solo si `sanitize(manifest.description) == shortDescription` (3 casos) | **Sí**, con auditoría |
| B9 | `bodyMd` / `changelogMd` / `descriptionMd` | Copia decodificando entidades (`&amp;` `&lt;` `&gt;` `&nbsp;`); en descripciones de mods, copia literal | No |
| B10 | `ModDependency` | Del CSV → `mod_id` | No |
| B11 | `ModStats`, `ModVersion.downloadsCount`, `SiteStats` | Desde B1 + favoritos + comentarios + reviews | No |
| B12 | Semver parseado | `^(\d+)\.(\d+)\.(\d+)(?:-(.+))?` (en builds queda NULL) | No |
| B13 | Insignias retroactivas | Desde la historia de mods, descargas y comentarios | No |
| B14 | Metadatos de R2 (`fileSize`, `contentType`, `width`/`height`, `sha256`) | HEAD o descarga en streaming desde R2 fuera de la BD; variantes AVIF/WebP como objetos nuevos (**los originales no se tocan**) | No |

---

## 12. Reglas zero-data-loss y compatibilidad con la legacy

### 12.1 Reglas

1. **Solo expand en el lanzamiento.** Nada de `DROP`, `RENAME` (de tablas, columnas o índices usados), cambios de tipo, `SET NOT NULL` sobre columnas existentes ni borrado físico de filas.
2. Columnas nuevas siempre NULL o con DEFAULT constante. **Nunca un NOT NULL sin default**: rompería los INSERT de la legacy.
3. Los objetos de R2 no se renombran ni se borran. Las claves nuevas siguen un esquema v2 (`mods/<modId>/<versionId>/<nombre-saneado>.zip`) y las viejas se quedan donde están.
4. Toda edición en sitio de datos legacy pasa por `DataFixAudit`.
5. Borrado lógico (`deletedAt`) en todo lo que la v2 permita borrar.
6. El guard de CI "legacy ⊆ v2" (§9.2) y `lock_timeout` en todas las migraciones.
7. La fase contract (quitar índices sobrantes, tablas muertas, IPs en claro) va **aparte**, con aprobación explícita del usuario, un dump archivado antes y como pronto 60 días después del lanzamiento.

### 12.2 ¿Qué rompe la legacy si comparte BD con la v2?

| Cambio v2 | ¿Rompe la legacy? | Por qué / mitigación |
|---|---|---|
| Tablas nuevas | No | Prisma solo toca sus modelos |
| Columnas nuevas NULL o con default | No | Prisma lista las columnas de forma explícita (sin `SELECT *`) |
| Columna nueva NOT NULL sin default | **Sí** (los INSERT de la legacy fallan) | Prohibido |
| Renombrar o quitar columnas o tablas | **Sí** | Prohibido; en TS se usa `@map` |
| Cambiar tipo (p. ej. `type` a enum o `timestamptz`) | **Sí**, o riesgo alto | Prohibido en el lanzamiento |
| UNIQUE nuevos (favoritos, versiones, token) | Solo en carreras (P2002 → 500 puntual) | Aceptable: mejora la integridad |
| Triggers (`emailNormalized`, `searchVector`, sincronizar `status` e `isApproved`) | No, si son rápidos y no lanzan errores | Los triggers nunca hacen `RAISE`; solo rellenan |
| Que la v2 deje de insertar `ModDownload` | **Sí**: el cron legacy recalcula `Mod.downloads = count(ModDownload)` y "borraría" las descargas contadas por la v2 | **La v2 inserta una fila `ModDownload` por descarga** (ip con hash, UA truncado) además del agregado, al menos hasta retirar la legacy de forma definitiva |
| La v2 escribe en `Mod.downloads`, `favoritesCount`… sus propios números | Se sobrescriben cada 30 min | La v2 muestra `ModStats`; las columnas legacy se quedan como caché legacy |
| La v2 inserta en `PendingMention` | Emails duplicados (los manda el cron legacy) | La v2 usa `Notification` |
| La v2 guarda texto rico (con `<`, `>`) en `Comment.message`, `changelog` o `description` | **XSS en la legacy**, que pinta con innerHTML y `\|safe` | Doble representación: el texto completo en `bodyMd`/`changelogMd`/`descriptionMd`, y en la columna legacy una versión escapada. Se mantiene mientras la marcha atrás sea posible |
| Borradores o mods ocultos | La legacy muestra los mods sin aprobar | Borradores en `ModDraft`. Al ocultar o borrar un mod: `isApproved=false` además de `status`/`deletedAt` |
| `_prisma_migrations` | No | Tabla nueva |
| La legacy edita galerías (borrar y recrear) | Pierde los metadatos v2 de `ModImage` | Job de recálculo idempotente |
| Reset de contraseña en la legacy | Las sesiones v2 seguirían vivas | `pwdFingerprint` (§7) |

---

## 13. Transición: ensayo, cutover y marcha atrás

### 13.1 Ensayo en seco (en local, sobre la copia real)

1. Restaurar `prod.dmp` y tomar el snapshot de verificación "antes" (§14).
2. Baseline (§9.4) → `prisma migrate deploy` (expand) → backfills B1–B13.
3. Snapshot "después" y diff.
   - Los checksums de columnas legacy tienen que ser **idénticos**, salvo en los fixes auditados (B4, B5, B8).
   - Invariantes (§14.3) en verde.
4. Arrancar la **API legacy (Bun) contra la copia migrada** y hacer smoke tests con los mismos endpoints: login, listado, detalle, `check`, descarga, comentario, favorito, crons. Así se comprueba que la legacy sobrevive a las migraciones.
5. Arrancar la API v2 contra la misma copia: login con cuentas de prueba (hashes de Bun), redirects de slugs viejos, descargas que incrementan los dos sistemas.
6. Medir cuánto tardan las migraciones (el objetivo es menos de 1 min de bloqueo total) y repetir hasta que salga sin incidencias dos veces seguidas.

### 13.2 Cutover en producción

- **T−7 días (usuario):**
  - activar los backups de Coolify (diarios y a R2);
  - lanzar uno y **probar que se restaura**;
  - crear roles Postgres: `sotf_v2_beta` (SELECT en las tablas legacy, escritura solo en las v2) y `sotf_v2_app` (escritura completa);
  - aplicar las migraciones expand (aditivas) en prod y vigilar la legacy 24–48 h.
- **Beta en sombra:**
  - la v2 va en `beta.sotf-mods.com` con `sotf_v2_beta`, que por GRANT no puede modificar tablas legacy;
  - login real (crea `Session`, una tabla v2), lectura de todo y pruebas de rendimiento;
  - el backfill B1 se refresca a diario.
- **T0 (ventana de 10–15 min, anunciada en Discord):**
  1. Parar el contenedor `sotf-mods-api` legacy. Así se paran los crons y las escrituras. El frontend legacy puede mostrar un error o se pone detrás de una página de mantenimiento de Cloudflare.
  2. *Backup now* y guardar las **marcas de agua** (`max(id)` por tabla).
  3. Backfills delta y script de verificación.
  4. Arrancar la API v2 con `sotf_v2_app`. Debe implementar **los endpoints legacy que usan clientes externos**: `/api/mods/:mod_id/check`, `/api/mods/:mod_id/download/:version` (cuenta y hace 302 a R2), `/api/mods/slug/:u/:s/download/:version`, `/api/mods?modIds=…`, `/api/kelvinseek/prompt|clear`, `/api/stats`.
  5. Cambiar dominios en Coolify o en el proxy: `sotf-mods.com` → web v2 y `api.sotf-mods.com` → API v2.
  6. Smoke tests y anuncio.
- **T+0 a T+30 días:** los contenedores legacy se quedan parados, no eliminados. La v2 escribe en formato compatible (§12.2).
- **T+60 días o más:** decidir con el usuario la fase contract.

### 13.3 Marcha atrás (de menor a mayor)

1. **Volver a la app legacy:** revertir el cambio de dominios y arrancar el contenedor legacy. La BD vale tal cual: las migraciones son aditivas y la v2 escribió en formato legacy. Se pierde la visibilidad de las funciones solo-v2 (reseñas, notificaciones…), no los datos.
2. **Un backfill salió mal:** revertir fila a fila desde `DataFixAudit`.
3. **Un trigger molesta:** `scripts/db/kill-switch.sql` los quita (`DROP TRIGGER …`) sin tocar datos.
4. **Desastre:** restaurar el dump pre-cutover **en una base nueva**, nunca encima, y reinyectar el delta posterior con las marcas de agua (`id > watermark`). Durante la semana del cutover conviene backup **cada hora** a R2. PITR (WAL con wal-g o pgBackRest hacia R2) queda como mejora opcional.

---

## 14. Verificación

### 14.1 Perfilado inicial (sobre el dump; son las preguntas que la API pública no responde)

```sql
-- Q-P0 zona horaria (debe ser UTC) y extensiones disponibles
SHOW timezone; SELECT name FROM pg_available_extensions WHERE name IN ('pg_trgm','unaccent');
-- Q-P1 formatos de hash
SELECT split_part(password,'$',2) alg, substring(password from 'm=(\d+)') m, substring(password from 't=(\d+)') t, count(*)
FROM "User" GROUP BY 1,2,3;
-- Q-P2 emails duplicados por mayúsculas
SELECT lower(trim(email)), array_agg(id) FROM "User" GROUP BY 1 HAVING count(*)>1;
-- Q-P3 favoritos duplicados / nulos
SELECT "userId","modId",count(*) FROM "ModFavorite" GROUP BY 1,2 HAVING count(*)>1;
SELECT count(*) FILTER (WHERE "userId" IS NULL) u_null, count(*) FILTER (WHERE "modId" IS NULL) m_null FROM "ModFavorite";
-- Q-P4 descargas huérfanas (esperado ≈ 434)
SELECT count(*) FILTER (WHERE d."modVersionId" IS NULL) sin_version,
       count(*) FILTER (WHERE v.id IS NOT NULL AND v."modId" IS NULL) version_sin_mod
FROM "ModDownload" d LEFT JOIN "ModVersion" v ON v.id=d."modVersionId";
-- Q-P5 canales (ip basura)
SELECT CASE WHEN ip='undefined' THEN 'client' WHEN ip IN ('null','') THEN 'unknown' WHEN ip LIKE '%,%' THEN 'multi' ELSE 'web' END, count(*)
FROM "ModDownload" GROUP BY 1;
-- Q-P6 versiones: duplicadas, varias latest, sin mod
SELECT "modId",version,count(*) FROM "ModVersion" GROUP BY 1,2 HAVING count(*)>1;
SELECT "modId",count(*) FROM "ModVersion" WHERE "isLatest" GROUP BY 1 HAVING count(*)>1;
SELECT count(*) FROM "ModVersion" WHERE "modId" IS NULL;
-- Q-P7 tokens
SELECT count(*), count(*) FILTER (WHERE "expiresAt"<now()) expirados, count(*) FILTER (WHERE "userId" IS NULL) sin_user,
       count(DISTINCT token) distintos FROM "Token";
-- Q-P8 tamaños
SELECT relname, pg_size_pretty(pg_total_relation_size(relid)) FROM pg_catalog.pg_statio_user_tables ORDER BY pg_total_relation_size(relid) DESC;
-- Q-P9 drift: tablas y columnas reales
SELECT table_name, column_name, data_type, is_nullable, column_default FROM information_schema.columns
WHERE table_schema='public' ORDER BY table_name, ordinal_position;
-- Q-P10 KelvinSeek, reviews, tags, loginattempts, ban
SELECT (SELECT count(*) FROM "KelvinGPTMessages") kgpt, (SELECT count(DISTINCT "chatId") FROM "KelvinGPTMessages") chats,
       (SELECT count(*) FROM "ModReview") reviews, (SELECT count(*) FROM "Tag") tags, (SELECT count(*) FROM "LoginAttempt") la;
```

### 14.2 Snapshot antes y después (`scripts/db/verify-snapshot.sql`, salida JSON)

- `count(*)` por tabla legacy.
- Suma de `Mod.downloads`, `favoritesCount`, `commentsCount` y `lastWeekDownloads`.
- Checksum por tabla **solo sobre las columnas legacy** (la lista se congela en el baseline):
  `SELECT md5(string_agg(md5(ROW(id,email,password,name,"imageUrl",slug,"isTrusted","createdAt")::text), ',' ORDER BY id)) FROM "User";`
- En `ModDownload`, checksums por bloques de 100 k ids (`GROUP BY id/100000`), para localizar diferencias sin volcar 2M filas.
- Diff automático: toda diferencia tiene que estar en la lista de fixes esperados (B4, B5, B8), con el número exacto de filas.

### 14.3 Invariantes posteriores a la migración

- `sum(ModVersionDownloadDaily.downloads) + sum(SiteDownloadDaily.downloads) = count(ModDownload)`, en total y por versión.
- Por mod: la suma de agregados de sus versiones = `count(ModDownload)` de sus versiones = `Mod.downloads` justo después del último cron.
- `count(ModFavorite) + count(ModFavoriteArchive) = count(ModFavorite)_antes`.
- Todo `Mod` tiene `canonicalSlug` único por usuario, y todo par `(userSlug, slug)` viejo resuelve a un mod (incluidos los 24 enlaces internos de las descripciones).
- Cada `ModVersion` tiene `storageKey` o `status='file_missing'` (esperado: 1 fila).
- 0 usuarios sin un hash que se pueda verificar (`$argon2…` o `$2…`).
- El total del sitio en la v2 es **≥ 1.977.059** en el lanzamiento.

---

## 15. Decisiones pendientes para el usuario

1. **Activar ya los backups de Coolify** hacia un bucket R2 privado, aunque no se haga la v2.
2. Elegir el método de acceso a datos reales: A (backup y descarga), B (túnel) o C (puerto público temporal).
3. Cerrar o proteger el puerto público 5433 (hoy sin SSL).
4. Política de IPs en `ModDownload`: seudonimizar (hash) las filas antiguas después de agregarlas. No cambia ningún conteo, pero técnicamente es modificar un dato; necesita aprobación explícita y va en la fase contract.
5. Qué hacer con la versión perdida del mod 168 (sin aprobar, NSFW): marcarla `file_missing` y avisar al autor.
6. Emails duplicados por mayúsculas (si Q-P2 encuentra alguno): hay que decidir con qué cuenta se queda cada persona.
7. Duración de la ventana de marcha atrás (propuesta: 30 días) y de la beta en sombra.
