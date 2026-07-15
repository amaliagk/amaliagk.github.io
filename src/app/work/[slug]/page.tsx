import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  caseStudies,
  getCaseStudy,
  type CaseStudyImage,
} from "@/lib/case-studies";

function GalleryFigure({ img }: { img: CaseStudyImage }) {
  if (img.contain) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-border bg-bg-elevated">
        <div className="flex aspect-[3/2] items-center justify-center p-10">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 640px) 90vw, 40vw"
            className="max-h-full w-auto max-w-full object-contain"
          />
        </div>
        {img.caption && (
          <figcaption className="border-t border-border p-4 text-sm text-text-muted">
            {img.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <figure className="card-glass overflow-hidden rounded-2xl">
      <div
        className="relative"
        style={{ aspectRatio: `${img.width} / ${img.height}` }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {img.caption && (
        <figcaption className="p-4 text-sm text-text-muted">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.subtitle,
    openGraph: study.cover ? { images: [study.cover.src] } : undefined,
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <article className="px-6 pb-24 pt-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#work"
              className="transition-soft text-sm font-medium text-text-muted hover:text-primary-strong"
            >
              ← All work
            </Link>

            <h1 className="gradient-text font-display mt-6 text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
              {study.subtitle}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {study.cover ? (
              <div className="card-glass mt-12 overflow-hidden rounded-2xl">
                <div className="relative" style={{ aspectRatio: `${study.cover.width} / ${study.cover.height}` }}>
                  <Image
                    src={study.cover.src}
                    alt={study.cover.alt}
                    fill
                    preload
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="card-glass mt-12 overflow-hidden rounded-2xl">
                <div className="section-holo grain flex aspect-[16/9] items-center justify-center">
                  <span className="relative text-xs uppercase tracking-[0.25em] text-text-muted">
                    Case study coming soon
                  </span>
                </div>
              </div>
            )}

            {study.sections.map((section, i) => (
              <Reveal key={i} className="mt-16">
                <section>
                  {section.heading && (
                    <h2 className="font-display text-2xl font-normal tracking-tight text-text sm:text-3xl">
                      {section.heading}
                    </h2>
                  )}
                  <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
                    {section.body}
                  </p>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {section.images.map((img) => (
                        <GalleryFigure key={img.src} img={img} />
                      ))}
                    </div>
                  )}
                </section>
              </Reveal>
            ))}

            {study.videos && study.videos.length > 0 && (
              <Reveal className="mt-16">
                <section>
                  <h2 className="font-display text-2xl font-normal tracking-tight text-text sm:text-3xl">
                    Motion &amp; video
                  </h2>
                  <div className="mt-8 gap-6 [column-fill:_balance] sm:columns-2">
                    {study.videos.map((video) => (
                      <figure
                        key={video.src}
                        className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-black/5"
                      >
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          poster={video.poster}
                          className="w-full"
                          style={{ aspectRatio: `${video.width} / ${video.height}` }}
                        >
                          <source src={video.src} type="video/mp4" />
                        </video>
                        <figcaption className="p-4 text-sm text-text-muted">
                          {video.title}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {study.gallery.length > 0 && (
              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {study.gallery.map((img) => (
                  <GalleryFigure key={img.src} img={img} />
                ))}
              </div>
            )}

            <nav className="mt-20 flex items-center justify-between border-t border-border pt-8 text-sm">
              <Link
                href={`/work/${prev.slug}`}
                className="transition-soft max-w-[45%] text-text-muted hover:text-primary-strong"
              >
                ← {prev.title}
              </Link>
              <Link
                href={`/work/${next.slug}`}
                className="transition-soft max-w-[45%] text-right text-text-muted hover:text-primary-strong"
              >
                {next.title} →
              </Link>
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
