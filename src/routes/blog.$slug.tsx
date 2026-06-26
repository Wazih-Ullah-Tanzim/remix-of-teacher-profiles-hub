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
    </>
  );
}
