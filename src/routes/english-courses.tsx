import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe2, Mic2 } from "lucide-react";

export const Route = createFileRoute("/english-courses")({
  head: () => ({ meta: [{ title: "IELTS & Spoken English — John Amos" }, { name: "description", content: "Special English courses — IELTS preparation and Spoken English at John Amos." }] }),
  component: Page,
});

const courses = [
  {
    icon: Globe2, title: "IELTS Preparation",
    badge: "8-week intensive",
    points: ["All four skills covered weekly", "Mock tests with examiner feedback", "Speaking partner practice", "Study materials included"],
    price: "৳ 8,500",
  },
  {
    icon: Mic2, title: "Spoken English",
    badge: "12-week course",
    points: ["Conversation-first approach", "Pronunciation labs", "Confidence in public speaking", "Small batches of 10–12"],
    price: "৳ 6,000",
  },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Special Courses" title="IELTS & Spoken English" subtitle="Targeted English programmes for students and adults — taught by Cambridge-trained instructors." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Programmes" title="Choose your pathway" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {courses.map((c, i) => (
              <div key={c.title} className="tilt-card animate-fade-up rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-accent)] text-accent-foreground animate-glow"><c.icon className="h-7 w-7" /></div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">{c.badge}</span>
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-primary">{c.title}</h3>
                <div className="mt-2 text-3xl font-extrabold text-accent">{c.price}</div>
                <ul className="mt-6 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-foreground/85"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{p}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex w-full"><Button variant="hero" className="w-full">Enrol Now</Button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}