import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/academic-calendar")({
  head: () => ({ meta: [{ title: "Academic Calendar — John Amos International School" }, { name: "description", content: "Term dates, holidays and key events for the academic year." }] }),
  component: Page,
});

const terms = [
  { term: "Term 1", dates: "12 Jan – 28 Mar", events: ["First Day Welcome Assembly", "Parent Orientation", "Cultural Day"] },
  { term: "Term 2", dates: "13 Apr – 27 Jun", events: ["Pohela Boishakh", "Sports Week", "Mid-Year Reports"] },
  { term: "Term 3", dates: "20 Jul – 26 Sep", events: ["Independence Day Programme", "Science Fair", "Art Exhibition"] },
  { term: "Term 4", dates: "12 Oct – 18 Dec", events: ["Pitha Utsob", "Annual Concert", "Year-End Reports"] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Calendar" title="Academic Calendar 2026" subtitle="A clear view of terms, key events and holidays for the year." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Terms" title="At a glance" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {terms.map((t, i) => (
              <div key={t.term} className="animate-fade-up tilt-card rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><CalendarDays className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{t.term}</div>
                    <div className="text-lg font-extrabold text-primary">{t.dates}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {t.events.map((e) => (
                    <li key={e} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />{e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}