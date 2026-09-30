/**
 * `astro check` type-checks `.tsx` with `jsx: preserve` (forced by @astrojs/language-server),
 * which resolves JSX through the *global* `JSX` namespace; React 19 only ships `React.JSX`. This
 * aliases the global namespace to React's so islands and console routes type-check the same in
 * `astro check` and in `tsc` (which uses `jsxImportSource: react`).
 */
import type { JSX as ReactJSX } from 'react';

declare global {
  // biome-ignore lint/style/noNamespace: the global JSX namespace is what `jsx: preserve` resolves.
  namespace JSX {
    type ElementType = ReactJSX.ElementType;
    interface Element extends ReactJSX.Element {}
    interface ElementClass extends ReactJSX.ElementClass {}
    interface ElementAttributesProperty extends ReactJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends ReactJSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = ReactJSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends ReactJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends ReactJSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}
  }
}
