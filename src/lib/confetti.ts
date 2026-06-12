/**
 * Fire a small, on-brand burst of confetti from a screen position.
 * Uses the paper/ink/vermillion palette so it never feels off-theme.
 * canvas-confetti is client-only, so we import it lazily on first use.
 */
export async function burst(x: number, y: number) {
  if (typeof window === "undefined") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  const confetti = (await import("canvas-confetti")).default;
  confetti({
    particleCount: 60,
    spread: 70,
    startVelocity: 32,
    gravity: 0.9,
    scalar: 0.9,
    ticks: 140,
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    colors: ["#db4324", "#b5331a", "#1a1813", "#c2b9a3"],
    disableForReducedMotion: true,
  });
}
