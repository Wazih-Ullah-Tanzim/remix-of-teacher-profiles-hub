import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { advisors } from "@/lib/faculty";

export const Route = createFileRoute("/advisors")({
  head: () => ({ meta: [{ title: "Advisors — John Amos International School" }, { name: "description", content: "Our academic and wellbeing advisors." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Advisors" title="Voices that shape our practice." subtitle="A panel of experienced educators and specialists supporting the school's growth." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Panel" title="Meet our advisors" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {advisors.map((a, i) => (
              <div key={a.name} className="animate-scale-in tilt-card rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="img-zoom mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-accent/30">
                  <img src={a.photo} alt={a.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-accent">{a.role}</div>
                <h3 className="mt-1 text-lg font-extrabold text-primary">{a.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}