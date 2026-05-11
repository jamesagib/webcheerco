/**
 * Tiny haptic-tap helper.
 *
 * Web haptic support is uneven:
 *  - Android Chrome: navigator.vibrate() works.
 *  - iOS Safari (regular tab): no-op. Apple does not expose Vibration API in browsers.
 *  - iOS PWA installed to home screen: limited, sometimes works.
 *
 * We feature-detect, fall back silently, and respect prefers-reduced-motion so
 * accessibility users aren't surprised.
 */

type Strength = "light" | "medium" | "heavy";

let prefersReduced = false;
let coalesceUntil = 0;

if (typeof window !== "undefined" && window.matchMedia) {
  const m = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReduced = m.matches;
  m.addEventListener?.("change", (e) => {
    prefersReduced = e.matches;
  });
}

export function tap(strength: Strength = "light"): void {
  if (typeof navigator === "undefined") return;
  if (prefersReduced) return;
  if (typeof navigator.vibrate !== "function") return;
  // Coalesce so rapid scroll doesn't buzz endlessly.
  const now = performance.now();
  if (now < coalesceUntil) return;
  coalesceUntil = now + 80;
  const ms = strength === "light" ? 8 : strength === "medium" ? 14 : 22;
  try {
    navigator.vibrate(ms);
  } catch {
    /* swallow */
  }
}
