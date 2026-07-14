import Reveal from "@/components/Reveal";
import { experience } from "@/lib/content";

const DOT_STYLES = [
  "bg-primary shadow-[0_0_10px_2px_rgba(47,138,245,0.5)]",
  "bg-secondary shadow-[0_0_10px_2px_rgba(178,75,243,0.5)]",
  "bg-cyan shadow-[0_0_10px_2px_rgba(34,224,255,0.5)]",
];

export default function Experience() {
  return (
    <section id="experience" className="bg-surface px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-normal tracking-tight text-text sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-10 border-l border-border pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <li className="relative">
                <span
                  className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                    DOT_STYLES[i % DOT_STYLES.length]
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold text-text">
                    {job.company}
                  </h3>
                  <span className="text-sm text-text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-text-muted">
                  {job.role}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
