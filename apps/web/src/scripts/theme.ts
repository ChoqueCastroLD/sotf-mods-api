/**
 * Theme and server-rendered primitives (PLAN §3.3, §2.5). The stored theme is already applied
 * before the first paint by the inline `THEME_INIT_SCRIPT`; this wires the footer `ThemeToggle`
 * (native radios), the language `<details>` menus (Escape / outside click), dismissible banners
 * and live dots — all without hydrating React.
 */
import { enhance } from '@sotf/ui/enhance';

export function initTheme(root: Document | HTMLElement = document): () => void {
  return enhance(root);
}
