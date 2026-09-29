/**
 * A realistic mod description of exactly 20 KB (UTF-8) for the performance budget
 * (PLAN §12.3 WP-15: 20 KB in < 15 ms). Mixes every construct authors use: headings, emphasis,
 * links, inline code, lists, task lists, a table, quotes, an alert, fenced code, images, a
 * YouTube link, spoilers, mentions and non-ASCII text.
 */

function section(n: number): string {
  return `## Feature ${n}: Smarter Kelvin and ${n % 2 ? 'Virginia' : 'the Cannibals'}

This module changes how **Kelvin** reacts when you *build* near the lake. It is fully
compatible with [RedLoader](https://github.com/ToniMacaroni/RedLoader) and with the
\`SonsGameManager\` API. Tested on patch \`1.0.${n}\` — große Änderungen für Überlebende, ¡sin errores!

- Hold **LeftAlt** to ignore placement restrictions (configurable in \`config.json\`)
- Press _CapsLock_ to toggle **manual placement** mode
- Scroll the mouse wheel to adjust the distance; see [the wiki](https://sotf-mods.com/install)
  - Nested option ${n}.1 with \`inline code\`
  - Nested option ${n}.2 with a ~~deprecated~~ flag
- [x] Works in multiplayer (host only)
- [ ] Dedicated server support (planned)

> [!${['NOTE', 'TIP', 'WARNING', 'CAUTION'][n % 4]}]
> Back up your save before installing version ${n}. Thanks @shokocc for the help!

| Setting | Default | Description |
|:--------|:-------:|------------:|
| \`radius\` | ${n * 2} | Pickup radius in metres |
| \`enabled\` | true | Master switch |

\`\`\`csharp
public class Feature${n} : SonsMod {
    protected override void OnInitializeMod() {
        Config.Init(); // ${n}
    }
}
\`\`\`

![Screenshot ${n}](https://r2.sotf-mods.com/media/screenshot-${n}.png "In-game view")

Spoiler: ||the ending changes in chapter ${n}||. Emoji are welcome 🌲🔥🪓 and so is 日本語.
`;
}

function build(targetBytes: number): string {
  const encoder = new TextEncoder();
  let doc = '# Smarter Survivors\n\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ\n\n';
  let n = 1;
  while (encoder.encode(doc + section(n)).length <= targetBytes) {
    doc += section(n);
    n += 1;
  }
  // Pad with a plain paragraph to hit the exact size.
  const missing = targetBytes - encoder.encode(doc).length;
  return `${doc}${'x'.repeat(Math.max(0, missing - 1))}\n`;
}

export const BENCH_DOCUMENT = build(20 * 1024);
