import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { notices } from "@/lib/news";
import { CalendarDays, FileText } from "lucide-react";
import { tagClass } from "@/lib/news-tags";

export const Route = createFileRoute("/academics/news")({ head: () => ({ meta: [{ title: "News & Notices | John Amos International School" }, { name: "description", content: "Latest admissions, programme and school announcements from John Amos International School." }, { property: "og:title", content: "News & Notices | John Amos International School" }, { property: "og:description", content: "Latest admissions, programme and school announcements from John Amos International School." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }), component: Page });
function Page() {
  return (
    <>
      <PageHero eyebrow="Newsroom" title="News & Notices" subtitle="Stay updated with everything happening at John Amos." />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest" title="Recent updates" />
          <div className="mt-12 space-y-4">
            {notices.map((n, i) => (
              <article key={n.slug} className="animate-fade-up flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground sm:flex"><FileText className="h-6 w-6" /></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                    <span className={`rounded-full border px-2.5 py-0.5 ${tagClass(n.tag)}`}>{n.tag}</span>
                    <span className="flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-3 w-3" />{n.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-extrabold text-primary">{n.title}</h3>
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
