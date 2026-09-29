// The plugin ships JavaScript only; it is an inlang plugin like any other.
declare module '@inlang/plugin-message-format' {
  import type { InlangPlugin } from '@inlang/sdk';

  const plugin: InlangPlugin;
  export default plugin;
}
