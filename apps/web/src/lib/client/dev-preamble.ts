/**
 * Dev only. Public pages without a React island do not get Vite's React refresh preamble, yet
 * plain scripts (the notifications bell, jam voting) import `.tsx` modules lazily; those modules
 * then throw "@vitejs/plugin-react can't detect preamble". This stub satisfies the check (no hot
 * refresh for them). Production bundles contain none of it.
 */
if (import.meta.env.DEV) {
  const scope = window as unknown as Record<string, unknown>;
  scope.$RefreshReg$ ??= () => {};
  scope.$RefreshSig$ ??= () => (type: unknown) => type;
  scope.__vite_plugin_react_preamble_installed__ ??= true;
}
