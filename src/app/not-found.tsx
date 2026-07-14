import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 py-32 sm:px-10">
        <div className="text-center">
          <p className="gradient-text font-display text-7xl font-normal sm:text-8xl">
            404
          </p>
          <h1 className="mt-6 text-xl font-semibold text-text">
            This page doesn&rsquo;t exist
          </h1>
          <p className="mt-2 text-text-muted">
            The page you&rsquo;re looking for was moved or never existed.
          </p>
          <Link
            href="/"
            className="btn-glass btn-glass-primary transition-soft mt-8 inline-block rounded-full px-7 py-3 text-sm font-semibold text-text hover:-translate-y-0.5"
          >
            <span className="relative z-10">Back to home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
