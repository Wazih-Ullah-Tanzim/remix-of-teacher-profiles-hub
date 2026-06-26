import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BookOpen, HeartPulse, Brain, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/counseling")({
  head: () => ({ meta: [{ title: "Counseling — John Amos" }, { name: "description", content: "Academic, Health and Psychiatrist counseling at John Amos International School." }] }),
  component: Layout,
});

const services = [
  { slug: "academic", icon: BookOpen, label: "Academic Counseling", text: "Subject choices, study skills, exam strategy and university planning — guided one-on-one." },
  { slug: "health", icon: HeartPulse, label: "Health Counseling", text: "On-campus first-aid, nutrition guidance and routine wellness checks for every learner." },
  { slug: "psychiatrist", icon: Brain, label: "Psychiatrist Counseling", text: "Confidential mental wellbeing support with our visiting child psychiatrist." },
];

function Layout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/counseling/$type");
  if (isChild) return <Outlet />;
  return (
    <>
      <PageHero eyebrow="Academics" title="Counseling at John Amos" subtitle="Three pillars of care — academic, health and emotional — for every child, every year." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Services" title="How we support our learners" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.slug} to="/counseling/$type" params={{ type: s.slug }} className="group tilt-card animate-fade-up rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 90}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><s.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-extrabold text-primary">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent story-link">Know More <ArrowRight className="h-4 w-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
