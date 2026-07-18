import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

function meta(study: CaseStudy) {
  return [...study.tags.slice(0, 3), study.year].filter(Boolean).join(" · ");
}

/** Announced project without assets yet: index row, styled but not a link. */
function TeaserRow({ study }: { study: CaseStudy }) {
  return (
    <div className="border-t border-border py-7">
      <div className="flex items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-3xl font-normal italic leading-tight text-text-muted sm:text-4xl">
            {study.title}
          </h3>
          <p className="mt-2 text-sm text-text-muted">{meta(study)}</p>
        </div>
        <span className="flex-none rounded-full border border-border bg-bg-elevated/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-text-muted backdrop-blur">
          In progress
        </span>
      </div>
    </div>
  );
}

function IndexRow({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative block border-t border-border py-7"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="transition-soft min-w-0 group-hover:translate-x-2">
          <h3 className="gradient-text font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {study.title}
          </h3>
          <p className="mt-2 text-sm text-text-muted">{meta(study)}</p>
        </div>
        <div className="flex flex-none items-center gap-5">
          {/* Persistent thumbnail on touch/small screens (no hover there) */}
          {study.cover && (
            <div className="relative aspect-[4/3] w-20 flex-none overflow-hidden rounded-lg sm:w-28 lg:hidden">
              <Image
                src={study.cover.src}
                alt={study.cover.alt}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          )}
          <span
            aria-hidden="true"
            className="transition-soft text-2xl text-text-muted group-hover:translate-x-1 group-hover:text-primary-strong"
          >
            →
          </span>
        </div>
      </div>

      {/* Desktop: cover reveals on hover, editorial-index style */}
      {study.cover && (
        <div className="transition-soft pointer-events-none absolute right-9 top-1/2 hidden aspect-[4/3] w-52 -translate-y-1/2 translate-x-6 overflow-hidden rounded-xl opacity-0 shadow-2xl ring-1 ring-border duration-500 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
          <Image
            src={study.cover.src}
            alt={study.cover.alt}
            fill
            sizes="208px"
            className="object-cover"
          />
        </div>
      )}
    </Link>
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

        <div className="mt-10 border-b border-border">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 70}>
              {study.comingSoon ? (
                <TeaserRow study={study} />
              ) : (
                <IndexRow study={study} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
