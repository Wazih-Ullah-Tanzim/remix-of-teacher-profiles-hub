import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Mic2, Users, Pen, Globe2 } from "lucide-react";

export const Route = createFileRoute("/language-club")({
  head: () => ({ meta: [{ title: "Language Club — John Amos" }, { name: "description", content: "Debate, public speaking, creative writing and more at the John Amos Language Club." }] }),
  component: Page,
});

const items = [
  { icon: Mic2, title: "Public Speaking", desc: "Weekly speech practice with structured feedback." },
  { icon: Users, title: "Debate Society", desc: "Inter-class debates on age-appropriate topics." },
  { icon: Pen, title: "Creative Writing", desc: "Short stories, poems and journal challenges." },
  { icon: Globe2, title: "Conversation Cafés", desc: "Casual English conversations with rotating themes." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Co-Curricular" title="Language Club" subtitle="Where students find their voice — literally." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Activities" title="What we do every week" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((x, i) => (
              <div key={x.title} className="tilt-card animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><x.icon className="h-6 w-6" /></div>
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