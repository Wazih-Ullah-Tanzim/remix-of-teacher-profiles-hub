import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/chairmans-message")({
  head: () => ({ meta: [{ title: "Chairman's Message — John Amos International School" }, { name: "description", content: "A personal message from the Chairman of John Amos International School." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="From the Chairman" title="A message of welcome and purpose." />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
          <div className="img-zoom animate-fade-up overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80" alt="Chairman" className="aspect-[3/4] w-full object-cover" />
            <div className="bg-primary p-5 text-primary-foreground">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Chairman</div>
              <div className="mt-1 text-lg font-extrabold">Mr. M. A. Hannan</div>
            </div>
          </div>
          <div className="animate-fade-up delay-200">
            <Quote className="h-12 w-12 text-accent" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              Dear parents, students and friends — welcome to John Amos International School. When we founded this school in 2023, our dream was simple: bring a true Cambridge education to Mymensingh and build a place where every child is genuinely known.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Education is the single most powerful gift we can give the next generation. At John Amos, we combine international academic rigour with the values of our community — curiosity, kindness, integrity and the courage to think for oneself.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I invite you to visit our campus, meet our teachers and become part of a family that believes deeply in your child's future.
            </p>
            <div className="mt-8 border-l-4 border-accent pl-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">— Mr. M. A. Hannan, Chairman</div>
          </div>
        </div>
      </section>
    </>
  );
}