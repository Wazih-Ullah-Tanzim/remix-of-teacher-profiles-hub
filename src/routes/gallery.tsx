import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { galleries, galleryMenu } from "@/lib/galleries";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — John Amos" }, { name: "description", content: "School events, festivals and moments captured at John Amos." }] }),
  component: GalleryLayout,
});

function GalleryLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/gallery/$slug");
  if (isChild) return <Outlet />;
  return (
    <>
      <PageHero eyebrow="Gallery" title="School life, in pictures." subtitle="Browse our collections by event — celebrations, learning and everything in between." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Browse" title="Pick a gallery" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryMenu.map((g, i) => {
              const data = galleries[g.slug];
              return (
                <Link to="/gallery/$slug" params={{ slug: g.slug }} key={g.slug}
                  className="group tilt-card animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
                  style={{ animationDelay: `${i * 70}ms` }}>
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <img src={data.images[0].src} alt={data.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{data.eyebrow}</div>
                      <div className="mt-1 text-xl font-extrabold">{data.title}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}