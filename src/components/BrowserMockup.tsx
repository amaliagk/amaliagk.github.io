import Image from "next/image";
import type { CaseStudyWebsiteMockup } from "@/lib/case-studies";

/** A padlock glyph for the address bar — signals a real, secure site. */
function LockGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="11"
      height="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-none text-text-muted"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/** Presents a live website as a paired desktop browser window + phone. The
 *  screenshots carry the visual weight; the chrome is deliberately quiet —
 *  monochrome dots and an on-identity address field rather than a stock RGB
 *  mockup. The two frames sit side by side so neither occludes the other, which
 *  also reads as the responsive design it is. Stacks on narrow screens. */
export default function BrowserMockup({ data }: { data: CaseStudyWebsiteMockup }) {
  const { url, href, desktop, mobile } = data;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
        {/* Desktop browser window */}
        <figure className="card-glass overflow-hidden rounded-2xl shadow-[0_26px_70px_-34px_rgba(24,24,27,0.5)]">
          <div className="flex items-center gap-3 border-b border-border bg-bg-elevated/70 px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-border bg-surface/70 px-3 py-1">
              <LockGlyph />
              <span className="truncate text-xs text-text-muted">{url}</span>
            </div>
          </div>
          <div
            className="relative"
            style={{ aspectRatio: `${desktop.width} / ${desktop.height}` }}
          >
            <Image
              src={desktop.src}
              alt={desktop.alt}
              fill
              sizes="(max-width: 640px) 100vw, 60vw"
              className="object-cover object-top"
            />
          </div>
        </figure>

        {/* Phone */}
        <figure className="justify-self-center sm:justify-self-end">
          <div className="card-glass relative rounded-[2.1rem] p-2.5 shadow-[0_24px_60px_-26px_rgba(24,24,27,0.55)]">
            <span
              className="absolute left-1/2 top-[1.05rem] z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/35"
              aria-hidden="true"
            />
            <div
              className="relative w-[180px] overflow-hidden rounded-[1.6rem] sm:w-[200px]"
              style={{ aspectRatio: `${mobile.width} / ${mobile.height}` }}
            >
              <Image
                src={mobile.src}
                alt={mobile.alt}
                fill
                sizes="200px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </figure>
      </div>

      {href && (
        <p className="mt-5 text-sm">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-soft inline-flex items-center gap-1.5 font-medium text-primary-strong hover:text-secondary-strong"
          >
            Visit the live site
            <ArrowUpRight />
          </a>
        </p>
      )}
    </div>
  );
}
