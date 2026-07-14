import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-text-muted sm:flex-row">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}
        </span>
        <span>Designed &amp; built by {profile.name}</span>
      </div>
    </footer>
  );
}
