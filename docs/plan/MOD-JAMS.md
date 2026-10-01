# Plan · Mod Jams de sotf-mods.com

Estado: **plan de producto y técnico**. Nota (2026-10-01): `main` ya incorpora una primera
implementación (rama `feat/modjams`, migración `2210_mod_jams`: tablas `Jam`, `JamCategory`,
`JamEntry`, `JamEntryAuthor`, `JamVote`, `JamResult`, `JamFollow`) cuyos nombres de tablas difieren de
los propuestos en §13; este documento sigue siendo la referencia de producto (ciclo, reglas,
antiabuso, premios) y de las fases pendientes. Cuando se escribió no había nada implementado. Este documento define el producto, el modelo de datos
aditivo, la API, las páginas y el despliegue por fases de las "Mod Jams": concursos temporales en
los que la comunidad crea mods y builds de Sons of the Forest alrededor de un tema revelado al
empezar, y vota por los mejores.

Principios: todo es **aditivo** (tablas nuevas, sin tocar `Mod`/`ModVersion`), reutiliza lo que ya
existe (mods y builds v2, insignias y XP de gamificación, premios `Award`, notificaciones, consola de
administración, cola de moderación, caché por etiquetas `pg_notify`) y respeta las 13 locales.

## 1. Ciclo de vida

Una jam es una máquina de estados lineal, con fechas en UTC y cuenta atrás visible:

| Estado        | Qué pasa                                                                            | Transición                    |
| ------------- | ----------------------------------------------------------------------------------- | ----------------------------- |
| `draft`       | La prepara un admin; invisible al público.                                          | Publicar → `announced`        |
| `announced`   | Hub y detalle visibles, tema oculto, inscripciones abiertas (equipos).              | `startsAt` → `running`        |
| `running`     | Se revela el tema. Se crean/actualizan envíos.                                      | `submissionsCloseAt` → `judging` |
| `judging`     | Envíos congelados. Votación de la comunidad y, si hay, jurado.                      | `votingClosesAt` → `tallying` |
| `tallying`    | Recuento automático, detección de abuso, revisión de un admin.                      | Admin confirma → `finished`   |
| `finished`    | Podio, premios e insignias concedidos. Galería permanente.                          | Final                         |
| `cancelled`   | Cancelada por un admin (con motivo). Se conserva la galería si hubo envíos.         | Final                         |

Las transiciones las ejecuta un job del worker (cola `jams.tick`, cada minuto) de forma idempotente;
un admin puede adelantar o retrasar fechas mientras la jam no esté en `finished` (queda en
`AuditLog`). Cada transición emite un evento de dominio (`jam.started`, `jam.submissions_closed`,
`jam.finished`, ...) que alimenta notificaciones, caché y feeds.

## 2. Reglas

- Participa cualquier cuenta verificada con al menos una contribución válida o más de 7 días de
  antigüedad (configurable) para evitar cuentas desechables.
- Un envío es un **mod o build v2 publicado** (o una versión concreta de uno), de la cuenta del
  equipo. El contenido debe crearse o actualizarse de forma sustancial durante la jam: se guarda la
  versión enviada y su fecha; una versión anterior a `startsAt` solo vale si la jam lo permite
  (`allowExisting`, por defecto `false`).
- Un máximo de `maxSubmissionsPerTeam` envíos (por defecto 1; 3 en jams largas).
- Aplican la política de contenido y las comprobaciones de versiones de siempre: un envío cuya
  versión no está `active` no puede ser votado.
- Reglas propias de cada jam (texto localizable en markdown) y obligatorias: aceptar las reglas al
  inscribirse (`rulesAcceptedAt`).
- Descalificación por un admin (plagio, contenido prohibido, votos manipulados) con motivo
  registrado y aviso al equipo.

## 3. Revelación del tema

- Basta con **no exponer** el tema hasta `startsAt`: la columna `theme` se sirve solo cuando el
  estado pasa a `running`; antes, la API devuelve `theme: null` y la caché del detalle se invalida al
  revelar.
- El paso a `running` publica el tema (título, descripción, imagen, "restricciones opcionales"
  como bonus de creatividad), envía la notificación a inscritos y seguidores y abre el feed.
- Página de detalle en `announced`: teaser, cuenta atrás, reglas, premios y lista de equipos.
  Al llegar a cero, el cliente refresca y pasa a mostrar el tema (con SSE/`stream` existente o
  sondeo cada 15 s como respaldo).
- Premio menor "sin spoilers": los textos OG de una jam no revelada no mencionan el tema.

## 4. Equipos y solitarios

- Modo solitario = equipo de un miembro creado automáticamente al inscribirse.
- Equipo: nombre, lema, miembros (2 a `maxTeamSize`, por defecto 5), capitán. Invitación por enlace
  firmado o por usuario; aceptación explícita. Un usuario solo está en un equipo por jam.
- Cambios de miembros permitidos hasta `submissionsCloseAt`; después, congelados.
- Los premios y la insignia se conceden a **todos los miembros** del equipo en el momento del cierre.
- Para votar, los miembros de un equipo no pueden votar envíos de su propio equipo.

## 5. Envíos de mods y builds v2

- El formulario de envío (consola, `/basecamp/jams/:slug/submit`) lista los mods/builds del
  equipo (los del capitán y los de los miembros con permiso de edición) y una versión `active`.
- El envío guarda `modId`, `modVersionId` (la versión "de la jam"), texto de presentación,
  capturas extra y categoría declarada (fun, polish, creativity, lore; ver §7).
- Se muestra en la ficha del mod una cinta "Mod Jam: nombre" con enlace a la jam; se añade el envío
  a `Mod.tags` mediante una etiqueta derivada (`jam-<slug>`), sin tocar el esquema.
- Retirar un mod o su versión durante la jam marca el envío como `withdrawn` (y avisa al equipo).
- Una actualización posterior del mod no cambia la versión votada; se ofrece "actualizar envío"
  hasta `submissionsCloseAt`.

## 6. Votación y antiabuso

- Quién vota: cuentas verificadas con más de N días (por defecto 3) y sin sanciones activas. Un
  voto por envío y usuario, un máximo de votos totales por usuario si el modelo es de "presupuesto".
- Modelo de puntuación: puntuación de 1 a 5 por categoría (§7), con valor por defecto "no
  puntuado". Se exige puntuar al menos la categoría global o 2 de 4 para contar. El resultado de un
  envío es la **media bayesiana** (se acerca a la media global con pocos votos) ponderada por la
  confianza del votante.
- Anti-abuso:
  - nunca votar el propio equipo ni mods de miembros del equipo; 
  - límite de ritmo (bucket `jam.vote`) y huella de sesión; votos de la misma IP/ASN, dispositivos o
    cuentas recién creadas se ponderan a la baja, no se bloquean en silencio;
  - detección de anomalías en `tallying`: picos de votos en una ventana corta, votos casi todos
    5/1, correlación de cuentas (mismo dominio de email temporal, mismas fechas de alta);
  - los votos sospechosos se marcan `flagged` (no se cuentan) y se muestran a un admin con su motivo;
  - los puntos individuales no se exponen hasta `finished`; durante la votación solo el votante ve
    su propia puntuación (evita el "efecto rebaño");
  - orden de la galería aleatorio estable por usuario para no favorecer a los primeros.
- Los votos son editables hasta `votingClosesAt`; se guarda historial mínimo para auditoría.

## 7. Jurado opcional

- Una jam puede tener `judges` (lista de usuarios con rol `jam_judge` solo en esa jam).
- Los jueces puntúan las mismas categorías con una rúbrica y comentario opcional; su peso es un
  porcentaje de la nota final (`judgeWeight`, por defecto 0 = sin jurado; típico 40 %).
- Los jueces no pueden participar en equipos de esa jam. Sus puntuaciones se ocultan hasta
  `finished` y se publican con su comentario.

## 8. Categorías

Cuatro categorías de puntuación, con textos localizados y una descripción de la rúbrica:

| Clave        | Qué se valora                                                     |
| ------------ | ----------------------------------------------------------------- |
| `fun`        | Diversión y ganas de volver a jugarlo.                            |
| `polish`     | Acabado, estabilidad, compatibilidad, documentación y capturas.   |
| `creativity` | Originalidad y uso inventivo del tema.                            |
| `lore`       | Encaje con el universo del juego, narrativa y ambientación.       |

El ganador global usa la media ponderada (pesos por jam, por defecto 1 cada una). Cada categoría
tiene además su ganador propio.

## 9. Premios, insignias y trofeos

- Premios honoríficos y de XP, sin dinero obligatorio: podio (1.º/2.º/3.º), ganador por categoría y
  "Elección de la comunidad" (más votos) y "Mención del jurado".
- Insignias nuevas en `Badge` (datos, no código): `jam-participant`, `jam-finalist`, `jam-winner`,
  `jam-category-<clave>`, cada una con variante por jam (`jam-<slug>-winner`) para el trofeo.
- Trofeo: una pieza de arte por jam (imagen en R2) mostrada en el perfil y en la sala de trofeos
  existente; se concede con `UserBadge` (referencia a la jam) y `XpEvent` (`jam.award`).
- Reutiliza `Award` para destacar el mod ganador en el hub ("Mod Jam winner") y, opcionalmente,
  la página de inicio.
- Premios externos (si los hay) se describen en la jam como texto; el reparto fuera de la web lo
  hace un admin con ayuda de la consola (exportación de ganadores).

## 10. Páginas

Todas localizadas (`/jams`, `/es/jams`, ...), con SEO y `hreflang`:

- **Hub `/jams`**: jam activa destacada con cuenta atrás, próximas y pasadas; filtro por estado.
- **Detalle `/jams/:slug`**: cabecera con cuenta atrás (o "terminada"), tema (tras revelarse),
  reglas, premios, calendario, equipos inscritos, botón inscribirse/enviar; pestañas Resumen,
  Envíos, Reglas, Resultados. `noindex` mientras esté en `draft`.
- **Galería `/jams/:slug/entries`**: tarjetas de envíos con filtros por categoría declarada y por
  tipo (mod/build), votación en línea en `judging`, orden aleatorio estable.
- **Envío `/jams/:slug/entries/:id`**: ficha con capturas, versión, equipo y formulario de voto.
- **Podio `/jams/:slug/results`**: solo en `finished`; podio, ganadores por categoría, comentarios
  del jurado, estadísticas (envíos, votos, participantes) y compartir.
- **Consola**: `/basecamp/jams` (mis equipos e inscripciones), formulario de envío.

## 11. Notificaciones

Canales existentes (centro de notificaciones, email, Discord): jam anunciada (a seguidores),
recordatorio 24 h antes de empezar, tema revelado, invitación a equipo, recordatorio 24 h antes del
cierre de envíos, inicio de la votación, recordatorio de votar, resultados y premios concedidos,
descalificación. Preferencias por tipo dentro de las ya existentes. Todas llevan textos en las
13 locales y se deduplican por (usuario, jam, tipo).

## 12. Herramientas de administración (consola)

- Crear/editar jams (fechas, tema, reglas por locale, categorías y pesos, premios, jurado),
  duplicar una jam anterior como plantilla, vista previa del público.
- Gestión de envíos: aprobar/retirar/descalificar con motivo, mover fechas, prorrogar un equipo.
- Panel de votación: participación en tiempo real, distribución de notas, **cola de votos
  sospechosos** (marcar, anular, restaurar), recálculo del recuento (idempotente).
- Cierre: revisar el podio provisional, confirmar, conceder premios/insignias (con vista previa y
  reversión mediante `AuditLog`).
- Exportaciones CSV (envíos, resultados), y un informe por jam.
- Todo con los permisos de administración existentes (`jams.manage`, `jams.moderate`).

## 13. Modelo de datos aditivo

Solo tablas nuevas; ninguna columna existente cambia (nombre en PascalCase como el resto):

- `Jam` (`id`, `slug` único, `status`, `startsAt`, `submissionsCloseAt`, `votingClosesAt`,
  `maxTeamSize`, `maxSubmissionsPerTeam`, `allowExisting`, `judgeWeight`, `categoryWeights` jsonb,
  `theme` jsonb por locale, `rules` jsonb por locale, `title`/`summary` jsonb, `coverImage`,
  `trophyImage`, `createdById`, `createdAt`, `updatedAt`).
- `JamTeam` (`id`, `jamId`, `name`, `tagline`, `captainId`, `disqualifiedAt`, `createdAt`),
  único (`jamId`, `name`).
- `JamTeamMember` (`teamId`, `userId`, `jamId`, `role`, `joinedAt`), único (`jamId`, `userId`).
- `JamSubmission` (`id`, `jamId`, `teamId`, `modId`, `modVersionId`, `pitch`, `declaredCategories`,
  `status` withdrawn|active|disqualified, `submittedAt`), único (`jamId`, `modId`).
- `JamVote` (`id`, `submissionId`, `voterId`, `jamId`, `scores` jsonb, `weight`, `flagged`,
  `flagReason`, `createdAt`, `updatedAt`), único (`submissionId`, `voterId`).
- `JamJudge` (`jamId`, `userId`) y `JamJudgeScore` (como `JamVote`, con comentario).
- `JamResult` (`jamId`, `submissionId`, `rank`, `score`, `categoryScores` jsonb, `computedAt`),
  instantánea inmutable tras el cierre.
- `JamAward` (`jamId`, `kind`, `submissionId`, `badgeId`) para enlazar con `Badge`/`Award`.

Índices por (`jamId`, `status`), (`jamId`, `submissionId`) y (`voterId`, `jamId`). Migraciones con el
flujo normal (`node dist/migrate.js up`), con un único paso expand (no hay fase contract).

## 14. API

Versión `/api/v2`, contratos Zod en `@sotf/contracts` (`jams.ts`):

- Público: `GET /jams`, `GET /jams/:slug` (tema solo si revelado), `GET /jams/:slug/entries`,
  `GET /jams/:slug/entries/:id`, `GET /jams/:slug/results`.
- Usuario: `POST /jams/:slug/teams`, `POST /jams/:slug/teams/:id/invite`, `POST
  /jams/:slug/teams/:id/join`, `POST /jams/:slug/submissions`, `PATCH`/`DELETE
  /jams/:slug/submissions/:id`, `PUT /jams/:slug/entries/:id/vote`, `GET /me/jams`.
- Administración: `POST/PATCH /admin/jams`, `POST /admin/jams/:id/transition`, `GET
  /admin/jams/:id/votes?flagged=1`, `POST /admin/jams/:id/recount`, `POST /admin/jams/:id/finalize`,
  `POST /admin/jams/:id/disqualify`.
- Errores con el catálogo RFC 9457 existente (`JAM_CLOSED`, `JAM_NOT_OPEN`, `TEAM_FULL`,
  `SELF_VOTE`, ...). Cubo de ritmo `jam.vote`. Caché por etiquetas `jam:ID`, `list:jams`.

## 15. SEO

- URLs canónicas `/jams`, `/jams/:slug`, con `hreflang` a las 13 locales y `sitemaps/jams.xml`.
- JSON-LD `Event` (fechas, estado, organizador) en el detalle, `ItemList` en la galería y
  resultados; OG/Twitter con cuenta atrás renderizada en la imagen solo tras revelarse el tema.
- `noindex` en `draft`, galería en pestaña de votación y cualquier vista con parámetros; redirecciones
  301 si cambia el slug (se guarda el historial, como en los mods). Versión `.md` y entrada en
  `llms.txt` para jams terminadas.

## 16. i18n

- Nuevo namespace `jams` en las 13 locales (`pnpm i18n:check` sin huecos). Textos de la interfaz en
  Paraglide; contenido editorial de cada jam (título, tema, reglas) en jsonb por locale con
  respaldo al inglés y marca visible "traducción pendiente".
- Fechas, cuentas atrás y plurales con `Intl` según la locale. Nombres de categorías y de
  insignias traducidos como claves de datos (`Badge.name` por locale).

## 17. Despliegue por fases

| Fase | Contenido                                                                                        | Criterio de salida                             |
| ---- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 0    | Decisiones cerradas (este documento), diseño gráfico del hub y del trofeo, textos EN/ES.         | Plan aprobado por el dueño.                    |
| 1    | Esquema, contratos, API de lectura, hub y detalle con cuenta atrás, consola de admin básica.      | Jam de prueba en staging, sin votos.           |
| 2    | Equipos, envíos, reglas, revelación del tema, notificaciones, galería.                            | Jam cerrada de prueba con 10 personas.         |
| 3    | Votación, antiabuso, recuento, cola de sospechosos, podio.                                        | Recuento reproducible e idempotente en pruebas.|
| 4    | Premios, insignias, trofeos, jurado opcional, SEO, las 13 locales completas.                      | `i18n:check` y auditoría de rutas verdes.      |
| 5    | Primera jam pública (corta, 1 semana, solitarios y equipos), retrospectiva y ajustes.             | Sin incidentes de abuso graves; NPS de la jam. |

Cada fase se entrega tras una bandera (`jams.enabled`) desactivada por defecto; el rollback es
desactivar la bandera (las tablas nuevas no afectan a nada existente). Riesgos principales: abuso de
votos (mitigado en §6), carga en el cierre (recuento en el worker, no en la petición), y spoilers del
tema (la API no lo devuelve antes de tiempo y la caché se invalida al revelar).
