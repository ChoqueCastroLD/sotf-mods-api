# ADR-0018: Gamificar con XP de ayuda, tiers de creador por descargas, insignias e hitos, sin rachas diarias

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (14), §0.2 «Gamificación» y «Rangos con nombre de rol», §7.2

## Contexto

research/03 proponía XP, tiers por descargas y rachas; research/05, una fórmula de reputación sin
rachas. Además, research/03 llamaba «Ranger» y «Scout» a dos rangos, nombres que el plan usa para
la moderación (Ranger Station) y para el asistente de T1 (Scout).

## Opciones consideradas

1. **XP + rachas diarias**: engancha, pero premia el volumen y castiga las ausencias.
2. **Fórmula de reputación opaca**: difícil de explicar y de auditar.
3. **XP de ayuda auditable (`XpEvent`) → Survivor rank; Creator tier por descargas de por vida;
   insignias retroactivas; hitos por mod; Mod of the Week**, sin rachas.

## Decisión

Opción 3, con reglas públicas en `/achievements`, topes diarios, sin XP por acciones sobre
contenido propio y con *opt-out* de visibilidad. Rangos: Castaway, Scavenger, Forager, Trapper,
Builder, Pathfinder, Veteran y Legend of the Island (ninguno se llama Ranger ni Scout). Tiers:
Campfire → Landmark. Insignias retroactivas («Original Survivor 2023…») para los usuarios legacy.

## Consecuencias

- Simple, retroactivo, reversible (XP por eventos) y difícil de manipular.
- Sin nombres que choquen con Ranger Station ni con Scout.
