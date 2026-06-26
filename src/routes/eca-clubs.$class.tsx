import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowLeft, ChefHat, Swords, Music, Languages, Palette } from "lucide-react";
import { ecaClasses } from "./eca-clubs";

const clubs = [
  { name: "Chef Club", icon: ChefHat, desc: "Hands-on cooking, food science and table etiquette — age-appropriate kitchen fun." },
  { name: "Martial Art", icon: Swords, desc: "Discipline, focus and self-defence through trained instructors." },
  { name: "Musician Club", icon: Music, desc: "Voice, rhythm and instruments — performance opportunities throughout the year." },
  { name: "Language Club", icon: Languages, desc: "Public speaking, storytelling and creative writing across Bangla and English." },
  { name: "Artistic Mind", icon: Palette, desc: "Drawing, painting, craft and visual storytelling — every child an artist." },
];

export const Route = createFileRoute("/eca-clubs/$class")({
  head: ({ params }) => {
    const c = ecaClasses.find((x) => x.slug === params.class);
    return { meta: [{ title: c ? `${c.label} ECA Clubs — John Amos` : "ECA Clubs" }, { name: "description", content: `Club activities for ${c?.label ?? "this class"} at John Amos.` }] };
  },
  loader: ({ params }) => {
    const c = ecaClasses.find((x) => x.slug === params.class);
    if (!c) throw notFound();
    return c;
  },
  component: Page,
});

function Page() {
  const c = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`ECA · ${c.label}`} title={`${c.label} Clubs`} subtitle="Five clubs to choose from — every learner finds their spark." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link to="/eca-clubs" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to all classes
          </Link>
          <div className="mt-6"><SectionHeader eyebrow={c.label} title="Club activities" /></div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, i) => (
              <div key={club.name} className="tilt-card animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><club.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-extrabold text-primary">{club.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
