import Reveal from "@/components/Reveal";
import { workCategories } from "@/lib/content";

const GRADIENTS = [
  "from-primary/25 via-transparent to-secondary/20",
  "from-secondary/25 via-transparent to-cyan/20",
  "from-cyan/20 via-transparent to-primary/20",
  "from-primary/20 via-transparent to-cyan/25",
];

export default function SelectedWork() {
  return (
    <section id="work" className="section-holo grain px-6 py-24 sm:px-10">
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-normal tracking-tight text-text sm:text-4xl">
            Selected Work
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {workCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 80}>
              <article className="card-glass overflow-hidden rounded-2xl">
                <div className="glass-sheen relative aspect-[4/3]">
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                      GRADIENTS[i % GRADIENTS.length]
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
                      Case studies coming soon
                    </span>
                  </div>
                </div>
                <div className="relative p-6">
                  <h3 className="text-lg font-semibold text-text">
                    {category.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
