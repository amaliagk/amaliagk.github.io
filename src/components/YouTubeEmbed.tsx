"use client";

import { useState } from "react";

/**
 * Lazy YouTube embed (facade pattern): shows the video thumbnail until the
 * user presses play, then loads the privacy-enhanced iframe. Keeps the heavy
 * YouTube player off the initial page load. Responsive 16:9.
 */
export default function YouTubeEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="mt-6">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-ink">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="transition-soft group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
              }}
            />
            <span className="absolute inset-0 bg-ink/30 transition-soft group-hover:bg-ink/15" />
            <span className="btn-glass btn-glass-primary transition-soft absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 ml-0.5 h-6 w-6 fill-text"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-text-muted">{title}</figcaption>
    </figure>
  );
}
