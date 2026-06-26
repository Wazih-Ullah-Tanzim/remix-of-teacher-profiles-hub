import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { galleryTree, getNodePreview } from "@/lib/galleries";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — John Amos" }, { name: "description", content: "Tour and occasion galleries from John Amos International School." }] }),
  component: GalleryLayout,
});

function GalleryLayout() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/gallery/$slug")) return <Outlet />;
  return <><PageHero eyebrow="Gallery" title="School life, in pictures." subtitle="Choose Tour or Occasion, then explore domestic trips, international trips and festival galleries." /><section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Browse" title="Pick a gallery section" /><div className="mt-14 grid gap-8 md:grid-cols-2">{galleryTree.map((g, i) => <Link to="/gallery/$slug" params={{ slug: g.slug }} key={g.slug} className="group tilt-card animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 90}ms` }}><div className="img-zoom glow-image relative aspect-[16/9] overflow-hidden"><img src={getNodePreview(g)} alt={g.label} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" /><div className="absolute bottom-6 left-6 right-6 text-primary-foreground"><div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Gallery</div><div className="mt-1 text-3xl font-extrabold">{g.label}</div><p className="mt-2 text-sm text-white/80">{g.description}</p></div></div></Link>)}</div></div></section></>;
}
