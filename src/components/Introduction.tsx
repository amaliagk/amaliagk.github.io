import Reveal from "@/components/Reveal";
import { introduction } from "@/lib/content";

export default function Introduction() {
  return (
    <section id="about" className="bg-bg-elevated px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="max-w-2xl text-xl leading-relaxed text-text sm:text-2xl">
            {introduction.paragraph}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
