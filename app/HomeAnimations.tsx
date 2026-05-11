"use client";

import { useEffect } from "react";
import { tap } from "./haptic";

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function HomeAnimations() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const cut = document.getElementById("cut-scene");

    const cinematic = document.getElementById("hero-cinematic");

    let lastFixCount = 0;
    let prevCutP = 0;
    let cutSnipped = false;

    const onScroll = () => {
      if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 4);

      if (cut) {
        const rect = cut.getBoundingClientRect();
        const total = cut.offsetHeight - window.innerHeight;
        const p = total > 0 ? clamp01(-rect.top / total) : 0;
        cut.style.setProperty("--p", String(p));
        cut.style.setProperty("--p-cut", String(clamp01(p * 2)));
        cut.style.setProperty("--p-fall", String(clamp01((p - 0.5) * 2.2)));
        cut.style.setProperty("--p-reveal", String(clamp01((p - 0.62) * 3)));

        // Tap when the strike crosses ~halfway through (the "snip" moment).
        if (!cutSnipped && prevCutP < 0.45 && p >= 0.45) {
          tap("medium");
          cutSnipped = true;
        } else if (p < 0.4) {
          cutSnipped = false;
        }
        prevCutP = p;
      }

      if (cinematic) {
        const rect = cinematic.getBoundingClientRect();
        const total = cinematic.offsetHeight - window.innerHeight;
        const p = total > 0 ? clamp01(-rect.top / total) : 0;

        cinematic.style.setProperty("--hero-p", String(p));

        // Nav matches the dark stage while the rebuild section is overlapping it.
        const NAV_H = 80;
        const overNav = rect.top <= NAV_H && rect.bottom > NAV_H;
        document.documentElement.classList.toggle("nav-on-dark", overNav);

        // Cumulative stage classes — intro phase 0–0.26, demo fade-in 0.30–0.40, fixes 0.42+
        const fixes: Array<[string, number]> = [
          ["fix-typography", 0.42],
          ["fix-contrast", 0.52],
          ["fix-imagery", 0.62],
          ["fix-touch", 0.72],
          ["fix-score", 0.82],
        ];
        for (const [cls, threshold] of fixes) {
          cinematic.classList.toggle(cls, p >= threshold);
        }

        // Lighthouse score 32 → 100 between demo-settled (0.36) and fix-score (0.82).
        const scoreEl = cinematic.querySelector<HTMLElement>("[data-rebuild-score]");
        if (scoreEl) {
          const t = clamp01((p - 0.36) / 0.46);
          const score = Math.round(32 + t * 68);
          scoreEl.textContent = String(score);
        }

        // Active stage row in the side panel (1–5; 0 = idle).
        let activeStage = 0;
        if (p >= 0.82) activeStage = 5;
        else if (p >= 0.72) activeStage = 4;
        else if (p >= 0.62) activeStage = 3;
        else if (p >= 0.52) activeStage = 2;
        else if (p >= 0.42) activeStage = 1;
        cinematic.dataset.activeStage = String(activeStage);

        // Haptic tap each time a new fix lands (forward direction only).
        if (activeStage > lastFixCount) {
          tap(activeStage === 5 ? "medium" : "light");
        }
        lastFixCount = activeStage;
      }
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateCount = (el: HTMLElement, target: number, useComma: boolean, delay: number) => {
      const fmt = useComma
        ? new Intl.NumberFormat("en-US").format
        : (n: number) => String(n);
      const duration = Math.min(1500, 700 + Math.log10(Math.max(target, 1)) * 260);
      const startAt = performance.now() + delay;
      el.textContent = fmt(0);
      const tick = (now: number) => {
        const t = (now - startAt) / duration;
        if (t < 0) return requestAnimationFrame(tick);
        if (t >= 1) {
          el.textContent = fmt(target);
          return;
        }
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(Math.round(target * eased));
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("is-visible");
          if (el.classList.contains("service-card")) {
            el.classList.add("is-playing");
          }
          if (!reduced) {
            el.querySelectorAll<HTMLElement>("[data-count-up]").forEach((n) => {
              const original = (n.textContent ?? "").trim();
              const target = parseInt(original.replace(/,/g, ""), 10);
              if (Number.isNaN(target)) return;
              const useComma = original.includes(",");
              const delay = parseInt(n.dataset.countDelay ?? "0", 10);
              animateCount(n, target, useComma, delay);
            });
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      document.removeEventListener("scroll", onScroll);
      io.disconnect();
      document.documentElement.classList.remove("nav-on-dark");
    };
  }, []);

  return null;
}
