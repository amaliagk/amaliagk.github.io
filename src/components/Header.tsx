import Link from "next/link";
import { profile } from "@/lib/content";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-display text-base font-normal tracking-tight text-text"
        >
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-text-muted sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-soft hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-soft rounded-full border border-border px-4 py-2 text-sm text-text hover:border-secondary hover:text-secondary-strong"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
