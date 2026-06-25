import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SiteSlider } from "@/components/site/SiteSlider";
import { galleries, galleryMenu } from "@/lib/galleries";
type Gallery = (typeof galleries)[string];
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/gallery/$slug")({
  head: ({ params }) => {
    const g = galleries[params.slug];
    return {
      meta: [
        { title: g ? `${g.title} — Gallery | John Amos` : "Gallery" },
        { name: "description", content: g?.description ?? "Gallery" },
        ...(g ? [{ property: "og:image", content: g.images[0].src }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold text-primary">Gallery not found</h1>
      <Link to="/gallery" className="mt-6 inline-block text-accent">← All galleries</Link>
    </div>
  ),
  errorComponent: () => <div className="p-20 text-center">Something went wrong.</div>,
  loader: ({ params }) => {
    const g = galleries[params.slug];
    if (!g) throw notFound();
    return g as (typeof galleries)[string];
  },
  component: Page,
});

function Page() {
  const g: Gallery = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={g.eyebrow} title={g.title} subtitle={g.description} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link to="/gallery" className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All galleries
          </Link>
          <div className="animate-fade-up">
            <SiteSlider images={g.images} height="h-[460px]" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.images.map((im, i) => (
              <div key={i} className="img-zoom animate-scale-in overflow-hidden rounded-2xl shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}>
                <img src={im.src} alt={im.caption} className="aspect-[4/3] w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-16">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Continue browsing</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {galleryMenu.filter((m) => m.slug !== g.title.toLowerCase().replace(/\s/g, "-")).map((m) => (
                <Link key={m.slug} to="/gallery/$slug" params={{ slug: m.slug }}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground transition-colors">
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}