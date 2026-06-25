import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { directors } from "@/lib/faculty";

export const Route = createFileRoute("/board-of-directors")({
  head: () => ({ meta: [{ title: "Board of Directors — John Amos International School" }, { name: "description", content: "Meet the Board of Directors of John Amos International School." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Governance" title="Our Board of Directors" subtitle="Stewards of the school's mission, governance and long-term direction." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Leadership" title="Meet the board" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {directors.map((d, i) => (
              <div key={d.name} className="tilt-card animate-fade-up rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="img-zoom overflow-hidden rounded-t-3xl">
                  <img src={d.photo} alt={d.name} className="aspect-[4/5] w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{d.role}</div>
                  <h3 className="mt-1 text-xl font-extrabold text-primary">{d.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}