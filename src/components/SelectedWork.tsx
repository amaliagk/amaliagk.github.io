import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/case-studies";

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
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 80}>
              <Link href={`/work/${study.slug}`} className="group block">
                <article className="card-glass transition-soft overflow-hidden rounded-2xl group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-18px_rgba(178,75,243,0.35)]">
                  <div className="glass-sheen relative aspect-[4/3]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        GRADIENTS[i % GRADIENTS.length]
                      }`}
                    />
                    {study.cover ? (
                      <Image
                        src={study.cover.src}
                        alt={study.cover.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 448px"
                        className="transition-soft object-cover group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
                          Case studies coming soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative flex items-center justify-between p-6">
                    <h3 className="text-lg font-semibold text-text">
                      {study.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="transition-soft text-text-muted group-hover:translate-x-1 group-hover:text-primary-strong"
                    >
                      →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
