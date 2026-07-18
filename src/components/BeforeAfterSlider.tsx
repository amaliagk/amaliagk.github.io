"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseStudyImage } from "@/lib/case-studies";

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: CaseStudyImage;
  after: CaseStudyImage;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="mt-6">
      <div
        className="relative select-none overflow-hidden rounded-2xl border border-border bg-bg-elevated"
        style={{ aspectRatio: `${after.width} / ${after.height}` }}
      >
        {/* Base layer: after */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-contain"
        />
        {/* Top layer: before, clipped to the left of the handle */}
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-contain"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -ml-[1px] w-0.5 bg-gradient-to-b from-primary via-secondary to-cyan" />
          <div className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-elevated text-xs text-text-muted shadow-md">
            ⇄
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-bg-elevated/85 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-text-muted backdrop-blur">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-bg-elevated/85 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-primary-strong backdrop-blur">
          After
        </span>

        {/* Full-surface range input: drag with pointer, arrow keys for a11y */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare the logo before and after"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </figure>
  );
}
