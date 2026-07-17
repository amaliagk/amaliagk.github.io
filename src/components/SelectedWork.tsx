import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

const GRADIENTS = [
  "from-primary/25 via-transparent to-secondary/20",
  "from-secondary/25 via-transparent to-cyan/20",
  "from-cyan/20 via-transparent to-primary/20",
  "from-primary/20 via-transparent to-cyan/25",
];

/** Announced project without assets yet: designed typographic state, not a link. */
function TeaserCard({ study, gradient }: { study: CaseStudy; gradient: string }) {
  return (
    <article className="card-glass overflow-hidden rounded-2xl">
      <div className="glass-sheen grain relative aspect-[4/3]">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
          <p className="font-display text-2xl font-normal italic leading-snug tracking-tight text-text sm:text-3xl">
            {study.title}
          </p>
          <span className="rounded-full border border-border bg-bg-elevated/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-text-muted backdrop-blur">
            Case study in progress
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-between p-6">
        <h3 className="text-lg font-semibold text-text-muted">{study.title}</h3>
        {study.year && (
          <span className="text-sm text-text-muted">{study.year}</span>
        )}
      </div>
    </article>
  );
}

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
              {study.comingSoon ? (
                <TeaserCard
                  study={study}
                  gradient={GRADIENTS[i % GRADIENTS.length]}
                />
              ) : (
                <Link href={`/work/${study.slug}`} className="group block">
                  <article className="card-glass transition-soft overflow-hidden rounded-2xl group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-18px_rgba(178,75,243,0.35)]">
                    <div className="glass-sheen relative aspect-[4/3]">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          GRADIENTS[i % GRADIENTS.length]
                        }`}
                      />
                      {study.cover && (
                        <Image
                          src={study.cover.src}
                          alt={study.cover.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 448px"
                          className="transition-soft object-cover group-hover:scale-105"
                        />
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
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
