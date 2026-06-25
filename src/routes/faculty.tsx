import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { faculty } from "@/lib/faculty";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({ meta: [{ title: "Our Faculty — John Amos International School" }, { name: "description", content: "Meet the teachers and academic leadership of John Amos International School." }] }),
  component: FacultyLayout,
});

function FacultyLayout() {
  const matches = useMatches();
  const isTeacherProfile = matches.some((m) => m.routeId === "/faculty/$id");

  if (isTeacherProfile) return <Outlet />;

  return (
    <>
      <PageHero eyebrow="Faculty" title="Our pool of teachers." subtitle="Cambridge-trained educators who believe deeply in every child's potential." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Meet the team" title="Nine educators, one mission" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((t, i) => (
              <div key={t.id} className="group tilt-card animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                  <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{t.title}</div>
                    <div className="mt-1 text-xl font-extrabold">{t.name}</div>
                    <div className="text-sm text-primary-foreground/80">{t.subject}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <span className="text-xs font-semibold text-muted-foreground">{t.experience}</span>
                  <Link to="/faculty/$id" params={{ id: t.id }} className="inline-flex items-center gap-1 text-sm font-bold text-accent story-link">
                    Know More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}