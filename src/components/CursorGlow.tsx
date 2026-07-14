"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    if (!isFinePointer || !dot || !ring || !trail) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.classList.add("custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;
    let lastParticleAt = 0;

    const spawnParticle = (x: number, y: number) => {
      const particle = document.createElement("span");
      particle.className = "cursor-particle";
      particle.style.setProperty("--px", `${x}px`);
      particle.style.setProperty("--py", `${y}px`);
      trail.appendChild(particle);
      particle.addEventListener(
        "animationend",
        () => particle.remove(),
        { once: true }
      );
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      if (reduceMotion) {
        ring.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        return;
      }

      const now = performance.now();
      if (now - lastParticleAt > 45) {
        lastParticleAt = now;
        spawnParticle(mouseX, mouseY);
      }
    };

    const handleOver = (e: Event) => {
      if ((e.target as HTMLElement).closest("a, button")) {
        ring.classList.add("is-active");
      }
    };
    const handleOut = (e: Event) => {
      if ((e.target as HTMLElement).closest("a, button")) {
        ring.classList.remove("is-active");
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    if (!reduceMotion) {
      rafId = requestAnimationFrame(animateRing);
    }

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
