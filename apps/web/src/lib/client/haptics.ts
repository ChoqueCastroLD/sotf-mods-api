/**
 * Haptic-like feedback for touch devices: a very short vibration where the platform has one
 * (Android Chrome; iOS Safari ignores it). Never before the first tap (Chrome blocks and logs a
 * warning), never when the visitor asked for reduced motion.
 */
export type HapticKind = 'tick' | 'select' | 'confirm';

const PATTERNS: Record<HapticKind, number | number[]> = {
  tick: 6,
  select: 10,
  confirm: [8, 40, 12],
};

export function haptic(kind: HapticKind = 'tick', nav: Navigator = navigator, win: Window = window): boolean {
  try {
    if (typeof nav.vibrate !== 'function') return false;
    if (nav.userActivation && !nav.userActivation.hasBeenActive) return false;
    if (win.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return nav.vibrate(PATTERNS[kind]);
  } catch {
    return false;
  }
}
