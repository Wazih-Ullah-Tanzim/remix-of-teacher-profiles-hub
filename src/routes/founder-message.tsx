import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/founder-message")({
  head: () => ({ meta: [{ title: "Founder's Message — John Amos International School" }, { name: "description", content: "Founder's message and the story behind John Amos International School." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="From the Founder" title="Why we built John Amos." />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 md:grid-cols-[2fr_1fr] lg:px-8">
          <div className="animate-fade-up">
            <Quote className="h-12 w-12 text-accent" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              I grew up in Mymensingh and watched too many bright young minds leave the city for the kind of education they deserved. John Amos exists so that no child has to.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Named for John Amos Comenius — the 17th-century educator who believed teaching should be universal, joyful and rooted in observation — our school holds those same convictions in 2026.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We chose the Cambridge curriculum because it is rigorous, internationally portable and demands real understanding rather than rote learning. We chose Mymensingh because this city, and these families, deserve nothing less.
            </p>
            <div className="mt-8 border-l-4 border-accent pl-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">— Founder, John Amos International School</div>
          </div>
          <div className="img-zoom animate-fade-up delay-200 overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80" alt="Founder" className="aspect-[3/4] w-full object-cover" />
            <div className="bg-primary p-5 text-primary-foreground">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Founder</div>
              <div className="mt-1 text-lg font-extrabold">John Amos International School</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}