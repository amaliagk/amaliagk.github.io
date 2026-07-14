import Reveal from "@/components/Reveal";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10">
      <div className="relative mx-auto max-w-4xl">
        <div
          aria-hidden="true"
          className="grain pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]"
        >
          <div className="holo-drift absolute -left-16 -top-16 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div
            className="holo-drift absolute -right-16 top-10 h-80 w-80 rounded-full bg-secondary/45 blur-3xl"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="holo-drift absolute bottom-[-4rem] left-1/3 h-64 w-64 rounded-full bg-cyan/30 blur-3xl"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="card-glass rounded-[2.5rem] px-8 py-20 text-center sm:px-16">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-text-muted">
              Contact
            </p>
            <h2 className="gradient-text font-display text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl">
              Let&rsquo;s create something meaningful
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-col items-center gap-3 text-lg text-text-muted">
              <a
                href={`mailto:${profile.email}`}
                className="transition-soft hover:text-primary-strong"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-soft hover:text-primary-strong"
              >
                LinkedIn
              </a>
              <span>{profile.location}</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="/cv.pdf"
              className="btn-glass btn-glass-primary transition-soft mt-10 inline-block rounded-full px-8 py-3 text-sm font-semibold text-text hover:-translate-y-0.5"
            >
              <span className="relative z-10">Download CV</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
