import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/yearbook")({
  head: () => ({
    meta: [
      { title: "JAIS Yearbook 2025–2026 — John Amos International School" },
      { name: "description", content: "Flip through the JAIS Yearbook 2025–2026 — milestones, students, faculty and events." },
      { property: "og:title", content: "JAIS Yearbook 2025–2026" },
      { property: "og:description", content: "A year in the life of John Amos International School." },
    ],
  }),
  component: YearbookPage,
});

const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

type Page =
  | { kind: "cover"; title: string; subtitle: string }
  | { kind: "message"; title: string; body: string }
  | { kind: "directory"; title: string; names: string[] }
  | { kind: "photo"; title: string; img: string; caption: string }
  | { kind: "achievements"; title: string; items: string[] }
  | { kind: "back"; title: string; subtitle: string };

const PAGES: Page[] = [
  { kind: "cover", title: "JAIS Yearbook", subtitle: "Academic Year 2025 – 2026" },
  { kind: "message", title: "Principal's Message", body: "This year has been a story of growth — academic, personal and collective. Every page that follows is a snapshot of that journey. To our students: keep wondering. To our parents: thank you for your trust. To our faculty: thank you for your care." },
  { kind: "directory", title: "Faculty Directory", names: ["Ms. Tahmina Akter — Head Teacher", "Mr. Rakibul Hasan — Mathematics", "Ms. Nusrat Jahan — English", "Mr. Imran Hossain — Science", "Ms. Farhana Rahman — Bangla", "Mr. Sajid Karim — ICT", "Ms. Anika Tabassum — Art & Music", "Mr. Tanvir Ahmed — Physical Ed."] },
  { kind: "photo", title: "Student Life", img: u("photo-1503676260728-1c00da094a0b"), caption: "Curiosity in the classroom" },
  { kind: "photo", title: "Student Life", img: u("photo-1577896851231-70ef18881754"), caption: "Friendships that last a lifetime" },
  { kind: "achievements", title: "Academic Achievements", items: ["95% Cambridge pass rate", "12 students with distinction in English", "National Math Olympiad — 3 finalists", "Inter-school Spelling Bee — Champions", "Science Fair — Best Project award"] },
  { kind: "photo", title: "Sports & ECA", img: u("photo-1521412644187-c49fa049e84d"), caption: "Sports Day 2026 — every house, every cheer" },
  { kind: "photo", title: "Events & Occasions", img: u("photo-1535905557558-afc4877a26fc"), caption: "Pohela Boishakh celebrations" },
  { kind: "photo", title: "First Day at School", img: u("photo-1509062522246-3755977927d7"), caption: "New uniforms. New friends. New beginnings." },
  { kind: "back", title: "See you next year", subtitle: "John Amos International School" },
];

const TOTAL = PAGES.length;

function YearbookPage() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => Math.min(i + 1, TOTAL - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <main>
      <PageHero eyebrow="Memories" title="JAIS Yearbook" subtitle="A 3D flip through our year — 2025–2026." />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Stage */}
          <div className="relative mx-auto" style={{ perspective: "2000px" }}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px] sm:aspect-[4/5]">
              {PAGES.map((p, i) => {
                const flipped = i < index;
                return (
                  <div
                    key={i}
                    className="absolute inset-0 origin-left rounded-r-2xl shadow-[var(--shadow-elegant)] transition-transform duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                      zIndex: flipped ? i : TOTAL - i,
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-r-2xl border border-border bg-card"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <PageFace data={p} pageNum={i + 1} />
                    </div>
                    {/* Back (the next page bleeding through) */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-r-2xl border border-border bg-card"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      {PAGES[i + 1] ? <PageFace data={PAGES[i + 1]} pageNum={i + 2} /> : <PageFace data={PAGES[i]} pageNum={i + 1} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" onClick={prev} disabled={index === 0}>
              <ChevronLeft className="h-4 w-4" /> Prev
            </Button>
            <div className="min-w-[110px] text-center text-sm font-semibold text-primary">
              Page {index + 1} of {TOTAL}
            </div>
            <Button variant="hero" onClick={next} disabled={index === TOTAL - 1}>
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageFace({ data, pageNum }: { data: Page; pageNum: number }) {
  if (data.kind === "cover") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[image:var(--gradient-navy)] p-10 text-center text-primary-foreground">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">John Amos International School</div>
        <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">{data.title}</h2>
        <div className="mt-6 h-px w-24 bg-accent" />
        <p className="mt-6 text-sm text-primary-foreground/85">{data.subtitle}</p>
      </div>
    );
  }
  if (data.kind === "back") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-accent p-10 text-center text-accent-foreground">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{data.title}</h2>
        <div className="mt-4 h-px w-20 bg-primary" />
        <p className="mt-4 text-sm font-semibold">{data.subtitle}</p>
      </div>
    );
  }
  if (data.kind === "photo") {
    return (
      <div className="flex h-full w-full flex-col">
        <PageHeader title={data.title} />
        <div className="relative flex-1 overflow-hidden">
          <img src={data.img} alt={data.caption} className="h-full w-full object-cover" />
        </div>
        <PageFooter pageNum={pageNum} caption={data.caption} />
      </div>
    );
  }
  if (data.kind === "message") {
    return (
      <div className="flex h-full w-full flex-col">
        <PageHeader title={data.title} />
        <div className="flex-1 overflow-y-auto px-6 py-6 text-[15px] leading-relaxed text-foreground/80">
          {data.body}
          <div className="mt-6 text-sm font-semibold text-primary">— Head Teacher, JAIS</div>
        </div>
        <PageFooter pageNum={pageNum} />
      </div>
    );
  }
  if (data.kind === "directory") {
    return (
      <div className="flex h-full w-full flex-col">
        <PageHeader title={data.title} />
        <ul className="flex-1 space-y-2 overflow-y-auto px-6 py-6 text-sm text-foreground/85">
          {data.names.map((n) => (
            <li key={n} className="rounded-md border border-border bg-secondary/40 px-3 py-2">{n}</li>
          ))}
        </ul>
        <PageFooter pageNum={pageNum} />
      </div>
    );
  }
  // achievements
  return (
    <div className="flex h-full w-full flex-col">
      <PageHeader title={data.title} />
      <ul className="flex-1 space-y-3 overflow-y-auto px-6 py-6 text-sm text-foreground/85">
        {data.items.map((it) => (
          <li key={it} className="flex gap-2"><span className="text-accent">★</span>{it}</li>
        ))}
      </ul>
      <PageFooter pageNum={pageNum} />
    </div>
  );
}

function PageHeader({ title }: { title: string }) {
  return (
    <div className="border-b border-border bg-primary px-6 py-3 text-primary-foreground">
      <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">JAIS 2025–2026</div>
      <div className="text-lg font-extrabold">{title}</div>
    </div>
  );
}

function PageFooter({ pageNum, caption }: { pageNum: number; caption?: string }) {
  return (
    <div className="flex items-center justify-between border-t border-border bg-secondary/40 px-4 py-2 text-xs text-muted-foreground">
      <span>{caption ?? ""}</span>
      <span className="font-semibold text-primary">{pageNum}</span>
    </div>
  );
}
