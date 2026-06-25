import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CalendarDays, FileText } from "lucide-react";

export const Route = createFileRoute("/news-notice")({
  head: () => ({ meta: [{ title: "News & Notice — John Amos" }, { name: "description", content: "Latest school news, notices and announcements." }] }),
  component: Page,
});

const notices = [
  { date: "20 Jun 2026", tag: "Admissions", title: "Admissions open for Standard I–V (2026-27)", body: "Limited seats. Online and on-campus applications accepted." },
  { date: "14 Jun 2026", tag: "Event", title: "Pitha Utsob photo gallery now live", body: "View the highlights from this year's winter festival." },
  { date: "02 Jun 2026", tag: "Academics", title: "Cambridge Checkpoint dates announced", body: "Year 6 examination schedule has been shared with parents." },
  { date: "21 May 2026", tag: "Notice", title: "Summer holiday schedule", body: "The school will be closed from 5 Jul to 13 Jul. Classes resume 14 Jul." },
  { date: "10 May 2026", tag: "Programme", title: "New IELTS batch starting June", body: "Spoken English batches also open for registration." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Newsroom" title="News & Notices" subtitle="Stay updated with everything happening at John Amos." />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest" title="Recent updates" />
          <div className="mt-12 space-y-4">
            {notices.map((n, i) => (
              <article key={n.title} className="tilt-card animate-fade-up flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground sm:flex">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
                    <span className="text-accent">{n.tag}</span>
                    <span className="flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-3 w-3" />{n.date}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-extrabold text-primary">{n.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}