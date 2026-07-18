import Reveal from "@/components/Reveal";
import { profile, introduction } from "@/lib/content";
import HeroBlobs from "@/components/HeroBlobs";
import RotatingWord from "@/components/RotatingWord";

const TAG_STYLES = [
  "border-primary/40 bg-primary/10 text-text",
  "border-secondary/50 bg-secondary/15 text-text",
  "border-cyan/40 bg-cyan/10 text-text",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-24 pt-32 sm:px-10"
    >
      <HeroBlobs />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/70 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.title}
          </p>

          <h1 className="gradient-text font-display text-6xl font-normal leading-[1.1] tracking-tight sm:text-7xl md:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-8 text-2xl font-semibold text-text sm:text-3xl">
            Specialized in <RotatingWord words={introduction.whatIDo} />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text sm:text-xl">
            {profile.heroLine}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="btn-glass btn-glass-primary transition-soft rounded-full px-7 py-3 text-sm font-semibold text-text hover:-translate-y-0.5"
            >
              <span className="relative z-10">View Selected Work</span>
            </a>
            <a
              href="/cv.pdf"
              className="btn-glass btn-glass-secondary transition-soft rounded-full px-7 py-3 text-sm font-semibold text-text hover:-translate-y-0.5"
            >
              <span className="relative z-10">Download CV</span>
            </a>
          </div>
        </div>

        <Reveal delay={150}>
          <div className="lg:pl-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-text-muted">
              What I Do
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {introduction.whatIDo.map((item, i) => (
                <li
                  key={item}
                  className={`transition-soft rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur hover:-translate-y-0.5 ${
                    TAG_STYLES[i % TAG_STYLES.length]
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
