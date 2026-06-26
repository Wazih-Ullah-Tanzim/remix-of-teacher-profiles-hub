import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { blogPosts } from "@/lib/blog";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — John Amos International School" }, { name: "description", content: "Stories, tips and reflections from the John Amos community." }] }),
  component: Page,
});

function Page() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/blog/$slug")) return <Outlet />;
  return <><PageHero eyebrow="JAIS Life" title="The John Amos Journal" subtitle="Stories from our classrooms, festivals, alumni and faculty." /><section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Latest" title="Recent articles" /><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.map((p, i) => <article key={p.slug} className="tilt-card animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 60}ms` }}><div className="img-zoom glow-image relative aspect-[16/10] overflow-hidden"><img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover" /><span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">{p.category}</span></div><div className="p-6"><h3 className="text-lg font-extrabold leading-snug text-primary">{p.title}</h3><p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p><div className="mt-4 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"><span className="flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span><span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {p.date}</span></div><Link to="/blog/$slug" params={{ slug: p.slug }} className="story-link mt-5 inline-flex items-center gap-1 text-sm font-bold text-accent">Read More <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></div></section></>;
}
