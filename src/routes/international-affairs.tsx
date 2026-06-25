import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Globe2, Users2, GraduationCap, Languages } from "lucide-react";

export const Route = createFileRoute("/international-affairs")({
  head: () => ({ meta: [{ title: "International Affairs — John Amos" }, { name: "description", content: "Global partnerships, student exchange and international perspectives at John Amos." }] }),
  component: Page,
});

const items = [
  { icon: Globe2, title: "Cambridge Network", desc: "Active participation in the global Cambridge schools community." },
  { icon: Users2, title: "Student Exchange", desc: "Connecting our students with peers across Asia and the UK." },
  { icon: GraduationCap, title: "International Pathways", desc: "Guidance for international universities and IGCSE pathways." },
  { icon: Languages, title: "Global Perspectives", desc: "A flagship subject opening eyes to world issues." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Beyond Borders" title="International Affairs" subtitle="A globally connected school in the heart of Mymensingh." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our reach" title="Partnerships & programmes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((x, i) => (
              <div key={x.title} className="tilt-card animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><x.icon className="h-6 w-6" /></div>
                <h3 className="text-lg font-bold text-primary">{x.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}