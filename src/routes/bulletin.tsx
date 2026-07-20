import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/bulletin-p-1.jpg.asset.json";
import p2 from "@/assets/bulletin-p-2.jpg.asset.json";
import p3 from "@/assets/bulletin-p-3.jpg.asset.json";
import p4 from "@/assets/bulletin-p-4.jpg.asset.json";
import p5 from "@/assets/bulletin-p-5.jpg.asset.json";
import p6 from "@/assets/bulletin-p-6.jpg.asset.json";
import p7 from "@/assets/bulletin-p-7.jpg.asset.json";
import p8 from "@/assets/bulletin-p-8.jpg.asset.json";

export const Route = createFileRoute("/bulletin")({
  head: () => ({
    meta: [
      { title: "JAIS Bulletin — March 2026 | John Amos International School" },
      { name: "description", content: "Flip through the JAIS Bulletin — Year 1, Issue 2, March 2026." },
      { property: "og:title", content: "JAIS Bulletin — March 2026" },
      { property: "og:description", content: "News, events and achievements from John Amos International School." },
    ],
  }),
  component: BulletinPage,
});

const PAGES = [p1.url, p2.url, p3.url, p4.url, p5.url, p6.url, p7.url, p8.url];
const TOTAL = PAGES.length;

function BulletinPage() {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState<null | "next" | "prev">(null);

  const go = (dir: "next" | "prev") => {
    if (flipping) return;
    if (dir === "next" && index >= TOTAL - 1) return;
    if (dir === "prev" && index <= 0) return;
    setFlipping(dir);
    window.setTimeout(() => {
      setIndex((i) => (dir === "next" ? i + 1 : i - 1));
      setFlipping(null);
    }, 650);
  };

  return (
    <main>
      <PageHero
        eyebrow="Bulletin"
        title="JAIS Bulletin"
        subtitle="Year 1 · Issue 2 · March 2026 — flip through our latest bulletin."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto flex w-full max-w-[1120px] items-stretch justify-center rounded-2xl shadow-[var(--shadow-elegant)]"
            style={{ perspective: "2400px" }}
          >
            {/* Left page — blank */}
            <div className="hidden aspect-[1240/1600] w-1/2 rounded-l-2xl border border-r-0 border-border bg-white sm:block" />
            {/* Right page — current bulletin page */}
            <div
              className="relative aspect-[1240/1600] w-full overflow-hidden rounded-2xl border border-border bg-white sm:w-1/2 sm:rounded-l-none sm:rounded-r-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Current page — soft cross-fade */}
              <div
                key={index}
                className="absolute inset-0 animate-[bulletinFadeIn_650ms_ease-out_both]"
              >
                <PageFace src={PAGES[index]} pageNum={index + 1} />
              </div>

              {/* Flip overlay — soft page-turn */}
              {flipping && (
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    transformOrigin: flipping === "next" ? "left center" : "right center",
                    transformStyle: "preserve-3d",
                    animation: `${
                      flipping === "next" ? "bulletinFlipNext" : "bulletinFlipPrev"
                    } 650ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards`,
                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.35)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <PageFace
                    src={PAGES[flipping === "next" ? index : index - 1]}
                    pageNum={(flipping === "next" ? index : index - 1) + 1}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" onClick={() => go("prev")} disabled={index === 0 || !!flipping}>
              <ChevronLeft className="h-4 w-4" /> Prev
            </Button>
            <div className="min-w-[110px] text-center text-sm font-semibold text-primary">
              Page {index + 1} of {TOTAL}
            </div>
            <Button variant="hero" onClick={() => go("next")} disabled={index === TOTAL - 1 || !!flipping}>
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


function PageFace({ src, pageNum }: { src: string; pageNum: number }) {
  return (
    <div className="relative h-full w-full bg-white">
      <img
        src={src}
        alt={`JAIS Bulletin page ${pageNum}`}
        className="h-full w-full object-contain"
        loading={pageNum <= 2 ? "eager" : "lazy"}
      />
      <div className="pointer-events-none absolute bottom-2 right-3 rounded bg-primary/80 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
        p-{pageNum}
      </div>
    </div>
  );
}
