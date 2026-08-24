import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import healthCheckupA from "@/assets/health-checkup-a.jpg.asset.json";
import healthCheckupB from "@/assets/health-checkup-b.jpg.asset.json";
import healthCheckupC from "@/assets/health-checkup-c.jpg.asset.json";

const detail: Record<string, { title: string; eyebrow: string; intro: string; points: string[] }> = {
  academic: {
    title: "Academic Counseling", eyebrow: "Counseling",
    intro: "One-on-one support to help every learner thrive academically — from study habits to subject planning and university preparation.",
    points: ["Personalised study plans", "Subject selection guidance", "IGCSE & A-Level planning", "University & career pathway sessions", "Parent-teacher consultation"],
  },
  health: {
    title: "Health Counseling", eyebrow: "Counseling",
    intro: "Daily health support, nutrition awareness and a culture of wellness across the school day.",
    points: ["On-campus first-aid room", "Routine wellness checks", "Nutrition & hygiene awareness", "Vision & dental drives", "Immunisation record support"],
  },
  psychiatrist: {
    title: "Psychiatrist Counseling", eyebrow: "Counseling",
    intro: "Confidential, child-friendly emotional wellbeing support from a visiting child psychiatrist.",
    points: ["Confidential 1:1 sessions", "Anxiety & stress management", "Peer relationship support", "Parent guidance sessions", "Referral coordination when needed"],
  },
};

export const Route = createFileRoute("/counseling/$type")({
  head: ({ params }) => {
    const d = detail[params.type];
    return {
      meta: [
        { title: d ? `${d.title} — John Amos International School` : "Counseling — John Amos International School" },
        { name: "description", content: d?.intro ?? "Counseling at John Amos International School." },
        { property: "og:title", content: d ? `${d.title} — John Amos International School` : "Counseling — John Amos International School" },
        { property: "og:description", content: d?.intro ?? "Counseling at John Amos International School." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    const d = detail[params.type];
    if (!d) throw notFound();
    return d;
  },
  component: Page,
});

function Page() {
  const d = Route.useLoaderData() as NonNullable<(typeof detail)[string]>;
  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.title} subtitle={d.intro} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/counseling" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Counseling
          </Link>
          <ul className="mt-8 space-y-3">
            {d.points.map((p: string) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-primary">{p}</span>
              </li>
            ))}
          </ul>
          {d.eyebrow === "Counseling" && d.title === "Health Counseling" ? (
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-primary">Student Health Check-ups</h2>
              <p className="mt-2 text-sm text-muted-foreground">Routine health check-ups help us support every child’s wellbeing throughout the school year.</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { src: healthCheckupA.url, alt: "Students receiving a health check-up at the school health corner" },
                  { src: healthCheckupB.url, alt: "A student receiving a health examination from the school doctor" },
                  { src: healthCheckupC.url, alt: "School health consultation for a student and parent" },
                ].map((image) => (
                  <img key={image.src} src={image.src} alt={image.alt} loading="lazy" width={900} height={1200} className="aspect-[3/4] w-full rounded-xl object-cover shadow-[var(--shadow-card)]" />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
