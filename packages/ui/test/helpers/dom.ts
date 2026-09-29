/** jsdom lacks a few browser APIs that Base UI and the primitives use. */
export function installDomShims(): void {
  if (!window.matchMedia) {
    window.matchMedia = (query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }) as MediaQueryList;
  }
  if (!('ResizeObserver' in window)) {
    class ResizeObserverShim {
      observe(): void {}
      unobserve(): void {}
      disconnect(): void {}
    }
    Object.assign(window, { ResizeObserver: ResizeObserverShim });
  }
  if (!('IntersectionObserver' in window)) {
    class IntersectionObserverShim {
      observe(): void {}
      unobserve(): void {}
      disconnect(): void {}
      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    }
    Object.assign(window, { IntersectionObserver: IntersectionObserverShim });
  }
  if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};
  if (!Element.prototype.getAnimations) Element.prototype.getAnimations = () => [];
}

/** Text referenced by `aria-describedby`. */
export function accessibleDescription(element: Element): string {
  const ids = (element.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean);
  return ids
    .map((id) => element.ownerDocument.getElementById(id)?.textContent ?? '')
    .join(' ')
    .trim();
}

/** Runs an inline `<script>` source text in the global scope (jsdom does not execute them). */
export function runScript(source: string): void {
  new Function(source)();
}
