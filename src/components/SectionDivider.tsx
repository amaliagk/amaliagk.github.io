export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative -my-8 h-16 overflow-hidden sm:h-20">
      <svg
        className="absolute inset-x-0 top-0 h-28 w-full opacity-70 blur-2xl sm:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="divider-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="50%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
          fill="url(#divider-gradient)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
