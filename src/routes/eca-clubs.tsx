import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowRight } from "lucide-react";

export const ecaClasses = [
  { slug: "play", label: "Play Group", color: "from-pink-500/20 to-violet-500/20" },
  { slug: "nursery", label: "Nursery", color: "from-violet-500/20 to-indigo-500/20" },
  { slug: "kg", label: "KG", color: "from-cyan-400/20 to-emerald-400/20" },
  { slug: "std-1", label: "Std I", color: "from-emerald-400/20 to-yellow-300/20" },
  { slug: "std-2", label: "Std II", color: "from-yellow-300/20 to-orange-400/20" },
  { slug: "std-3", label: "Std III", color: "from-orange-400/20 to-rose-400/20" },
  { slug: "std-4", label: "Std IV", color: "from-rose-400/20 to-violet-400/20" },
  { slug: "std-5", label: "Std V", color: "from-indigo-400/20 to-cyan-400/20" },
];

export const Route = createFileRoute("/eca-clubs")({
  head: () => ({ meta: [{ title: "ECA Clubs & Activities — John Amos" }, { name: "description", content: "After-class clubs for every age group — Chef, Martial Art, Musician, Language and Artistic Mind." }] }),
  component: Layout,
});

function Layout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/eca-clubs/$class");
  if (isChild) return <Outlet />;
  return (
    <>
      <PageHero eyebrow="JAIS Life" title="ECA Clubs & Activities" subtitle="Beyond books — clubs that build character, creativity and confidence." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Pick a Class" title="Clubs for every age group" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ecaClasses.map((c, i) => (
              <Link key={c.slug} to="/eca-clubs/$class" params={{ class: c.slug }}
                className={`group tilt-card animate-fade-up relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${c.color} p-6 shadow-[var(--shadow-card)]`}
                style={{ animationDelay: `${i * 60}ms` }}>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Class</div>
                <div className="mt-2 text-2xl font-extrabold text-primary">{c.label}</div>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary story-link">Explore <ArrowRight className="h-4 w-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
