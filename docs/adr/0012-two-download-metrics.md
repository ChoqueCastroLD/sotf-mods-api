# ADR-0012: Contar dos métricas de descarga: `downloads` (compatible con el histórico) y `uniqueDownloads`

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (7), §0.2 «Conteo de descargas», §2.8 «Descarga», §6.9 (B1)

## Contexto

La legacy cuenta cada GET a la ruta de descarga (1,98 M en total) e inserta una fila en
`ModDownload`. research/01 proponía mantener ese conteo; research/04 y 05, contar una vez por día
y usuario. Los creadores comparan con su histórico y RedManager y .NET no envían User-Agent.

## Opciones consideradas

1. **Solo el conteo legacy**: comparable, pero inflado por reintentos y *prefetch*.
2. **Solo únicos por día**: honesto, pero el total histórico «bajaría» de ritmo y dejaría de ser
   comparable.
3. **Dos métricas**.

## Decisión

Opción 3:

- `downloads`: GET válidos (no HEAD, sin `Range` o `Range: bytes=0-`, sin bots declarados; el UA
  vacío **sí** cuenta; sin `Sec-Purpose` de prefetch). Por encima de 60/min por IP se redirige
  igual pero no cuenta. Se escribe en `ModDownload` (fila compatible, `ip` = ipHash) y en los
  agregados.
- `uniqueDownloads`: versión + ipHash + día (`DownloadUnique`, `ON CONFLICT DO NOTHING`).

Los eventos se acumulan en memoria y se vuelcan cada 2 s o al apagar; nunca se bloquea una
descarga.

## Consecuencias

- El total histórico nunca baja y hay una métrica honesta para la North Star (§1.1).
- El buffer puede perder como mucho ~2 s de conteos si el proceso muere sin SIGTERM (aceptado).
