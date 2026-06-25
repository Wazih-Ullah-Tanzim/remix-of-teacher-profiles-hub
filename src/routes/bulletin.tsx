import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SiteSlider } from "@/components/site/SiteSlider";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

const images = [
  { src: u("photo-1503676260728-1c00da094a0b"), caption: "Welcome Week Bulletin" },
  { src: u("photo-1577896851231-70ef18881754"), caption: "Cambridge Pathway Update" },
  { src: u("photo-1509062522246-3755977927d7"), caption: "Term 2 Highlights" },
  { src: u("photo-1427504494785-3a9ca7044f45"), caption: "Sports Week" },
  { src: u("photo-1588072432836-e10032774350"), caption: "Science Fair 2026" },
  { src: u("photo-1499415479124-43c32433a620"), caption: "Annual Concert" },
  { src: u("photo-1565299624946-b28f40a0ae38"), caption: "Pitha Utsob" },
  { src: u("photo-1485470733090-0aae1788d5af"), caption: "Excursion Diaries" },
];

export const Route = createFileRoute("/bulletin")({
  head: () => ({ meta: [{ title: "Bulletin — John Amos" }, { name: "description", content: "Visual bulletin of recent moments at John Amos International School." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Bulletin" title="In pictures." subtitle="A rolling visual bulletin of our school life." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Slideshow" title="Recent highlights" />
          <div className="mt-12 animate-fade-up">
            <SiteSlider images={images} height="h-[460px]" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.slice(0, 8).map((im, i) => (
              <div key={i} className="img-zoom animate-scale-in overflow-hidden rounded-2xl shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 80}ms` }}>
                <img src={im.src} alt={im.caption} className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}