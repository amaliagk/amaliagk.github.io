"use client";

import { useEffect, useRef } from "react";

const STRENGTHS = [18, -22, 14];

export default function HeroBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let targetX = 0;
    let targetY = 0;
    const currentX = [0, 0, 0, 0];
    const currentY = [0, 0, 0, 0];
    let rafId = 0;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const animate = () => {
      wrapperRefs.current.forEach((wrapper, i) => {
        if (!wrapper) return;
        const strength = STRENGTHS[i % STRENGTHS.length];
        currentX[i] += (targetX * strength - currentX[i]) * 0.06;
        currentY[i] += (targetY * strength - currentY[i]) * 0.06;
        wrapper.style.transform = `translate3d(${currentX[i]}px, ${currentY[i]}px, 0)`;
      });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Pearlescent aurora base — vivid iridescent wash unique to the hero.
          NOTE: keep `grain` OFF any element that is also `absolute` — its
          `position: relative` overrides the utility and collapses it to 0×0. */}
      <div className="hero-aurora absolute inset-0" />

      <div
        ref={(el) => {
          wrapperRefs.current[0] = el;
        }}
        className="absolute -left-24 top-4 h-[26rem] w-[26rem] will-change-transform"
      >
        <div className="holo-drift h-full w-full rounded-full bg-primary/50 blur-3xl" />
      </div>
      <div
        ref={(el) => {
          wrapperRefs.current[1] = el;
        }}
        className="absolute right-[-6rem] top-16 h-[30rem] w-[30rem] will-change-transform"
      >
        <div
          className="holo-drift h-full w-full rounded-full bg-secondary/55 blur-3xl"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
      <div
        ref={(el) => {
          wrapperRefs.current[2] = el;
        }}
        className="absolute bottom-[-4rem] left-1/3 h-80 w-80 will-change-transform"
      >
        <div
          className="holo-drift h-full w-full rounded-full bg-cyan/40 blur-3xl"
          style={{ animationDelay: "2.4s" }}
        />
      </div>
      <div
        ref={(el) => {
          wrapperRefs.current[3] = el;
        }}
        className="absolute left-1/2 top-1/3 h-56 w-56 will-change-transform"
      >
        <div
          className="holo-drift h-full w-full rounded-full bg-gradient-to-br from-primary/45 to-secondary/45 blur-3xl"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      {/* Soft light scrim behind the text so the headline and body copy stay
          legible over the vivid aurora (spec: gradient text large & readable).
          Wide + centre-left so it covers the desktop text column and the
          full-width mobile column alike. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 62% at 38% 50%, color-mix(in srgb, var(--bg) 64%, transparent), transparent 74%)",
        }}
      />
    </div>
  );
}
