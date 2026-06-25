import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SiteSlider({ images, height = "h-[420px]" }: { images: { src: string; caption?: string }[]; height?: string }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4500, stopOnInteraction: false })]);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!embla) return;
    const onSel = () => setIdx(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();
  }, [embla]);
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((im, i) => (
            <div key={i} className={`relative flex-[0_0_100%] ${height}`}>
              <img src={im.src} alt={im.caption ?? ""} className="absolute inset-0 h-full w-full animate-ken-burns object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              {im.caption && (
                <div className="absolute bottom-6 left-6 right-6 animate-fade-up text-primary-foreground">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Gallery</div>
                  <div className="mt-1 text-2xl font-extrabold sm:text-3xl">{im.caption}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => embla?.scrollPrev()} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow hover:bg-white">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={() => embla?.scrollNext()} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow hover:bg-white">
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => embla?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}