import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BookMarked, Coffee, Trees, Gamepad2 } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({ meta: [{ title: "Facilities — John Amos International School" }, { name: "description", content: "Learning Resource Center, Cafeteria, Playground and Indoor Games at John Amos." }] }),
  component: Page,
});

const items = [
  { icon: BookMarked, name: "Learning Resource Center", desc: "A bright library and resource hub stocked with Cambridge readers, reference texts and project corners — open every school day." },
  { icon: Coffee, name: "Cafeteria", desc: "A hygienic in-house cafeteria serving balanced, freshly prepared meals and snacks under the supervision of school staff." },
  { icon: Trees, name: "Playground", desc: "Safe outdoor play zones for free play, structured PE and inter-house sports, designed for every age group." },
  { icon: Gamepad2, name: "Indoor Games", desc: "Chess, carrom, table tennis and creative game rooms — a calm place for children to learn focus, strategy and sportsmanship." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="JAIS Life" title="Facilities" subtitle="Spaces designed to nurture focus, friendship and joy — every day at school." />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {items.map((f, i) => (
            <div key={f.name} className="tilt-card animate-fade-up rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-accent)] text-accent-foreground"><f.icon className="h-7 w-7" /></div>
              <h3 className="mt-5 text-2xl font-extrabold text-primary">{f.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
