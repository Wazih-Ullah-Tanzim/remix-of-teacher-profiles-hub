import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";
import { ArrowLeft, CalendarDays, User, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = blogPosts.find((b) => b.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — John Amos Journal` : "Article" },
        { name: "description", content: p?.excerpt ?? "Article from John Amos." },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = blogPosts.find((b) => b.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: Page,
});

function Page() {
  const p = Route.useLoaderData();
  const related = blogPosts.filter((b) => b.slug !== p.slug && b.category === p.category).slice(0, 3);
  const fillers = blogPosts.filter((b) => b.slug !== p.slug && !related.includes(b)).slice(0, 3 - related.length);
  const relatedPosts = [...related, ...fillers];
  return (
    <>
      <PageHero eyebrow={p.category} title={p.title} subtitle={p.excerpt} />
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {p.author}</span>
            <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {p.date}</span>
            <span className="flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> {p.readTime}</span>
          </div>
          <div className="mt-8 img-zoom overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img src={p.cover} alt={p.title} className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            {p.content.map((para: string, i: number) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-primary">Related articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-lg">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={r.cover} alt={r.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent">{r.category}</span>
                    <h3 className="mt-2 text-base font-extrabold leading-snug text-primary">{r.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

