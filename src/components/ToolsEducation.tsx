import Reveal from "@/components/Reveal";
import { certifications, education, tools } from "@/lib/content";

export default function ToolsEducation() {
  return (
    <section className="bg-bg-elevated px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal>
          <h2 className="gradient-text font-display text-3xl font-normal tracking-tight sm:text-4xl">
            Tools
          </h2>
          <div className="mt-8 space-y-6">
            {tools.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-medium text-text">{group.group}</h3>
                <p className="mt-2 text-text-muted">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="gradient-text font-display text-3xl font-normal tracking-tight sm:text-4xl">
            Education & Certifications
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-text">Education</h3>
              <ul className="mt-2 space-y-1 text-text-muted">
                {education.map((e) => (
                  <li key={e.program}>
                    {e.program} — {e.school}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text">Certifications</h3>
              <ul className="mt-2 space-y-1.5 text-text-muted">
                {certifications.map((c) => (
                  <li key={c.name}>
                    {c.name}
                    {c.tag && (
                      <span className="ml-2 inline-block rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-wider text-primary-strong">
                        {c.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
