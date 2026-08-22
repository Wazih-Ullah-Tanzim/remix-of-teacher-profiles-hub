import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { notices } from "@/lib/news";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { tagClass } from "@/lib/news-tags";

export const Route = createFileRoute("/academics/news/$slug")({
  head: ({ params }) => { const n = notices.find((x) => x.slug === params.slug); return { meta: [{ title: n ? `${n.title} — News | John Amos` : "News" }, { name: "description", content: n?.body ?? "School news" }] }; },
  loader: ({ params }) => { const n = notices.find((x) => x.slug === params.slug); if (!n) throw notFound(); return n; },
  component: Page,
});
function Page() {
  const n = Route.useLoaderData();
  if (!n) return null;
  return (
    <>
      <PageHero eyebrow={n.tag} title={n.title} subtitle={n.body} />
      <article className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/academics/news" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to News
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
            <span className={`rounded-full border px-3 py-1 ${tagClass(n.tag)}`}>{n.tag}</span>
            <span className="flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-4 w-4" /> {n.date}</span>
          </div>
          <div className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-8 text-lg leading-relaxed text-foreground/85 shadow-[var(--shadow-card)]">
            {n.details.map((p: string) => <p key={p}>{p}</p>)}
            {n.href && <a href={n.href} className="story-link inline-flex font-bold text-accent">Open related page</a>}
          </div>
        </div>
      </article>
    </>
  );
}
