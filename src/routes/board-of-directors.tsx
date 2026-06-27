import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/board-of-directors")({
  head: () => ({ meta: [{ title: "Board of Directors — John Amos International School" }, { name: "description", content: "Meet the Board of Directors of John Amos International School." }] }),
  component: Page,
});

type Director = { sl: number; name: string; role: string; photo: string };

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`;

const portraits = [
  "photo-1556157382-97eda2d62296", "photo-1573497019940-1c28c88b4f3e", "photo-1519085360753-af0119f7cbe7",
  "photo-1472099645785-5658abf4ff4e", "photo-1500648767791-00dcc994a43e", "photo-1507003211169-0a1dd7228f2d",
  "photo-1560250097-0b93528c311a", "photo-1568602471122-7832951cc4c5", "photo-1531427186611-ecfd6d936c79",
  "photo-1494790108377-be9c29b29330", "photo-1438761681033-6461ffad8d80", "photo-1551836022-d5d88e9218df",
  "photo-1573496359142-b8d87734a5a2", "photo-1580489944761-15a19d654956", "photo-1521119989659-a83eee488004",
  "photo-1463453091185-61582044d556", "photo-1547425260-76bcadfb4f2c", "photo-1542178243-bc20204b769f",
  "photo-1506794778202-cad84cf45f1d", "photo-1492562080023-ab3db95bfbce", "photo-1488161628813-04466f872be2",
];

const directorsList: Director[] = [
  { sl: 1, name: "Mr. Khondokar Ehosan Habib", role: "Founder" },
  { sl: 2, name: "Dr. Abul Khaer Mohammad Helal Uddin", role: "Chairman" },
  { sl: 3, name: "Eng. A K M Jahirul Hasan", role: "Treasurer" },
  { sl: 4, name: "Mr. Shah Muhammad Mustofa Noor", role: "Founding Director" },
  { sl: 5, name: "Md. Mazharul Islam Bhuiya", role: "Founding Director" },
  { sl: 6, name: "Mr. Khandaker Imtiyaz Habib", role: "Founding Director" },
  { sl: 7, name: "Mr. Matiur Rahman", role: "Founding Director" },
  { sl: 8, name: "Mr. Hasan Jamil", role: "Founding Director" },
  { sl: 9, name: "Mr. Razuan Ahmed Shuvro", role: "Founding Director" },
  { sl: 10, name: "Ms. Tanjila Akter", role: "Director" },
  { sl: 11, name: "Mr. Abdul Jabbar Selim", role: "Director" },
  { sl: 12, name: "Mr. Shahidul Islam Shahid", role: "Director" },
  { sl: 13, name: "Mr. Anisur Rahman Anis", role: "Director" },
  { sl: 14, name: "Ms. Jannatun Nusra", role: "Director" },
  { sl: 15, name: "Mr. Mohammad Abdul Queaum", role: "Director" },
  { sl: 16, name: "Dr. Ahmad Shakil Hashmi", role: "Director" },
  { sl: 17, name: "Mr. Habibur Rahman Milon", role: "Director" },
  { sl: 18, name: "Mr. Diderul Islam Dider", role: "Director" },
  { sl: 19, name: "Mr. Anwar Hossain Kamal", role: "Director" },
  { sl: 20, name: "Dr. Bilkis Parvin", role: "Director" },
  { sl: 21, name: "Md. Sahadat Hossan Somel", role: "Director" },
].map((d, i) => ({ ...d, photo: u(portraits[i % portraits.length]) }));

function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <>
      <PageHero eyebrow="Governance" title="Our Board of Directors" subtitle="Stewards of the school's mission, governance and long-term direction." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Leadership" title="Meet the board" />

          <div className="relative mt-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {directorsList.map((d) => (
                  <div key={d.sl} className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_33.3333%]">
                    <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                      <div className="img-zoom aspect-square w-full max-w-[160px] overflow-hidden rounded-full ring-2 ring-primary/10">
                        <img src={d.photo} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                      <div className="mt-4">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-accent">{d.role}</div>
                        <h3 className="mt-1 text-sm font-bold leading-tight text-primary">{d.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition hover:scale-110 md:-left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition hover:scale-110 md:-right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === selectedIndex ? "w-6 bg-primary" : "w-2 bg-primary/30"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
