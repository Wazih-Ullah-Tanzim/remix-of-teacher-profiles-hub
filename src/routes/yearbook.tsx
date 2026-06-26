import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { PageHero } from "@/components/site/PageHero";
import { ChevronLeft, ChevronRight } from "lucide-react";

const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const pages = [
  { type: "cover", title: "JAIS Yearbook", subtitle: "Academic Year 2025 – 2026" },
  { type: "image", img: u("photo-1503676260728-1c00da094a0b"), caption: "First Day at School" },
  { type: "text", title: "A Word From The Principal", body: "This year has been a story of growth — academic, personal, and collective. Every page that follows is a snapshot of that journey." },
  { type: "image", img: u("photo-1509062522246-3755977927d7"), caption: "Early Years Adventures" },
  { type: "text", title: "Cambridge Primary Highlights", body: "From science fairs to spelling bees, our primary students explored ideas with curiosity and care." },
  { type: "image", img: u("photo-1577896851231-70ef18881754"), caption: "Classroom Moments" },
  { type: "image", img: u("photo-1535905557558-afc4877a26fc"), caption: "Pohela Boishakh" },
  { type: "text", title: "Sports & Wellness", body: "Athletics, indoor games and inter-house tournaments built friendships and fitness in equal measure." },
  { type: "image", img: u("photo-1485470733090-0aae1788d5af"), caption: "Excursions & Tours" },
  { type: "image", img: u("photo-1513475382585-d06e58bcb0e0"), caption: "Art & Expression" },
  { type: "text", title: "Thank You", body: "To our teachers, parents and students — thank you for making this year possible. See you in 2026 – 2027." },
  { type: "cover", title: "See you next year", subtitle: "John Amos International School" },
];

const Page = ({ data }: { data: any }) => (
  <div className="h-full w-full overflow-hidden bg-card">
    {data.type === "cover" && (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[image:var(--gradient-navy)] p-10 text-primary-foreground">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">John Amos</div>
        <h2 className="mt-6 text-center text-4xl font-extrabold leading-tight">{data.title}</h2>
        <p className="mt-3 text-sm text-primary-foreground/80">{data.subtitle}</p>
      </div>
    )}
    {data.type === "image" && (
      <div className="relative h-full w-full">
        <img src={data.img} alt={data.caption} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          <div className="text-sm font-bold uppercase tracking-wider">{data.caption}</div>
        </div>
      </div>
    )}
    {data.type === "text" && (
      <div className="flex h-full w-full flex-col justify-center p-10">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Yearbook</div>
        <h3 className="mt-3 text-2xl font-extrabold text-primary">{data.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-foreground/80">{data.body}</p>
      </div>
    )}
  </div>
);

export const Route = createFileRoute("/yearbook")({
  head: () => ({ meta: [{ title: "JAIS Yearbook — John Amos" }, { name: "description", content: "Flip through our annual yearbook — moments, milestones, memories." }] }),
  component: PageView,
});

function PageView() {
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 400, h: 560 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const w = Math.min(440, window.innerWidth - 48);
      setSize({ w, h: Math.round(w * 1.4) });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <>
      <PageHero eyebrow="JAIS Life" title="JAIS Yearbook" subtitle="A flipbook of our year — drag a corner or use the arrows." />
      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
          {mounted && (
            <div className="rounded-2xl p-2 shadow-[var(--shadow-elegant)] [filter:drop-shadow(0_0_24px_rgba(255,143,46,0.15))]">
              {/* @ts-expect-error react-pageflip types */}
              <HTMLFlipBook ref={bookRef} width={size.w} height={size.h} size="stretch" maxShadowOpacity={0.4} showCover={true} mobileScrollSupport={true} className="" style={{}} startPage={0} drawShadow={true} flippingTime={700} usePortrait={true} startZIndex={0} autoSize={true} clickEventForward={true} useMouseEvents={true} swipeDistance={30} showPageCorners={true} disableFlipByClick={false}>
                {pages.map((p, i) => (
                  <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
                    <Page data={p} />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          )}
          <div className="mt-8 flex gap-4">
            <button onClick={() => bookRef.current?.pageFlip()?.flipPrev()} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-bold text-primary hover:bg-secondary">
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button onClick={() => bookRef.current?.pageFlip()?.flipNext()} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
