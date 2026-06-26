import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteSlider } from "@/components/site/SiteSlider";
import { findGalleryNode, galleries, galleryMenu, getNodePreview, type GalleryNode } from "@/lib/galleries";
import { ArrowLeft } from "lucide-react";

type LoaderData = { gallery?: (typeof galleries)[string]; node?: GalleryNode };

export const Route = createFileRoute("/gallery/$slug")({
  head: ({ params }) => { const gallery = galleries[params.slug]; const node = findGalleryNode(params.slug); return { meta: [{ title: `${gallery?.title ?? node?.label ?? "Gallery"} — Gallery | John Amos` }, { name: "description", content: gallery?.description ?? node?.description ?? "John Amos gallery" }, ...(gallery ? [{ property: "og:image", content: gallery.images[0].src }] : [])] }; },
  loader: ({ params }): LoaderData => { const gallery = galleries[params.slug]; const node = findGalleryNode(params.slug); if (!gallery && !node) throw notFound(); return { gallery, node }; },
  component: Page,
});

function Page() {
  const { gallery: g, node } = Route.useLoaderData();
  if (!g && node?.children) return <><PageHero eyebrow="Gallery" title={node.label} subtitle={node.description ?? "Choose a collection to continue."} /><section className="py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><Link to="/gallery" className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All galleries</Link><div className="grid gap-6 md:grid-cols-2">{node.children.map((child, i) => <Link key={child.slug} to="/gallery/$slug" params={{ slug: child.slug }} className="tilt-card animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}><div className="img-zoom glow-image relative aspect-[4/3]"><img src={getNodePreview(child)} alt={child.label} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" /><div className="absolute bottom-5 left-5 right-5 text-white"><div className="text-2xl font-extrabold">{child.label}</div><p className="text-sm text-white/80">{child.description}</p></div></div></Link>)}</div></div></section></>;
  if (!g) return null;
  return <><PageHero eyebrow={g.eyebrow} title={g.title} subtitle={g.description} /><section className="py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><Link to="/gallery" className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All galleries</Link><div className="animate-fade-up glow-image rounded-3xl"><SiteSlider images={g.images} height="h-[520px]" /></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{g.images.map((im, i) => <div key={i} className="img-zoom glow-image animate-scale-in overflow-hidden rounded-2xl shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}><img src={im.src} alt={im.caption} className="aspect-[4/3] w-full object-cover" /></div>)}</div><div className="mt-16"><div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Continue browsing</div><div className="mt-4 flex flex-wrap gap-2">{galleryMenu.map((m) => <Link key={m.slug} to="/gallery/$slug" params={{ slug: m.slug }} className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent hover:text-accent-foreground">{m.label}</Link>)}</div></div></div></section></>;
}
