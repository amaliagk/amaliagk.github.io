export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--primary) 65%, transparent) 25%, color-mix(in srgb, var(--secondary) 65%, transparent) 50%, color-mix(in srgb, var(--cyan) 65%, transparent) 75%, transparent 100%)",
      }}
    />
  );
}
