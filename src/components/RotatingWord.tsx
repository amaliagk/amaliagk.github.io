"use client";

import { useEffect, useState } from "react";

export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduceMotion(prefersReduced);
    if (prefersReduced) return;

    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2600);

    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span
      className={`gradient-text font-display inline-block font-normal transition-all duration-500 ease-out ${
        reduceMotion || visible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0"
      }`}
    >
      {words[index]}
    </span>
  );
}
