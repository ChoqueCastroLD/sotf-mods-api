# ADR-0014: Dar nombre a los ficheros descargados reescribiendo los metadatos de los objetos R2

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (7), §0.2 «Nombre del filtro de descarga en R2», §2.8, §6.13 (B6), §11.5

## Contexto

Las descargas pasan a ser un 302 directo a `r2.sotf-mods.com/<clave>` (ningún servidor toca los
bytes). Las claves legacy son `<timestamp>_<nombre>`, así que el navegador guardaría ficheros con
el prefijo numérico. research/01 proponía un Snippet o Worker de Cloudflare que leyera `?dl=`;
research/04, reescribir los metadatos con `CopyObject`.

## Opciones consideradas

1. **Snippet/Worker en el borde**: código y coste por petición, y una pieza más que puede fallar.
2. **`CopyObject` in situ con `MetadataDirective: REPLACE`** para fijar `Content-Disposition`,
   `Content-Type` y `Cache-Control` una sola vez, y metadatos correctos en cada subida nueva.

## Decisión

Opción 2: la pasada B17 reescribe los metadatos de las 612 versiones legacy (ensayo por defecto,
`--apply` con aprobación del dueño) y la finalización de subidas nuevas los escribe al copiar
desde `incoming/`. Las claves legacy nunca se renombran ni se borran.

## Consecuencias

- Sin código en el borde; la regla `r2-immutable` (1 año) de Cloudflare solo se activa después de
  B17 (D5), para no cachear metadatos viejos.
- Reversible: el runbook `ops/runbooks/migration/r2-pass.md` guarda los metadatos previos.
