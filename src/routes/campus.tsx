import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Wifi, Wind, Cpu, BookMarked, Coffee, Heart, Bus, ShieldCheck } from "lucide-react";
import labImg from "@/assets/computer-lab.jpg";
import libImg from "@/assets/library.jpg";
import playImg from "@/assets/playground.jpg";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus & Facilities — John Amos International School" },
      { name: "description", content: "Discover our modern campus: air-conditioned smart classrooms, computer lab, library, playgrounds, cafeteria and more." },
      { property: "og:title", content: "Campus & Facilities" },
      { property: "og:description", content: "A modern campus designed for focused, joyful learning." },
      { property: "og:image", content: labImg },
    ],
  }),
  component: CampusPage,
});

function CampusPage() {
  const facilities = [
    { icon: Wind, name: "Air-Conditioned Classrooms" },
    { icon: Cpu, name: "Smart Audio-Visual Labs" },
    { icon: BookMarked, name: "Library & Resource Center" },
    { icon: Wifi, name: "Campus-wide WiFi" },
    { icon: Coffee, name: "Cafeteria" },
    { icon: Heart, name: "Sick Room & First Aid" },
    { icon: Bus, name: "Easy City Access" },
    { icon: ShieldCheck, name: "Secure Environment" },
  ];
  return (
    <>
      <PageHero eyebrow="Our Campus" title="Where modern learning feels at home." subtitle="An elegant multi-storey building in central Mymensingh — refurbished, calm and crafted around young learners." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Facilities" title="Built for focus, designed for joy" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f) => (
              <div key={f.name} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><f.icon className="h-6 w-6" /></div>
                <div className="mt-4 text-sm font-bold text-primary">{f.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {[
            { img: labImg, eyebrow: "01 — Smart Labs", title: "Computer & audio-visual labs", text: "Well-equipped computer lab and smart classrooms for immersive, interactive learning across the curriculum." },
            { img: libImg, eyebrow: "02 — Library", title: "A place to wonder", text: "A welcoming library and teacher resource centre encouraging independent reading and a love of books from an early age.", reverse: true },
            { img: playImg, eyebrow: "03 — Play & Wellbeing", title: "Playgrounds and rest areas", text: "Indoor multi-purpose facilities, playgrounds, hygiene facilities and a sick room — care for every part of school life." },
          ].map((row) => (
            <div key={row.title} className={`grid items-center gap-12 md:grid-cols-2 ${row.reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
              <img src={row.img} alt={row.title} loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
              <SectionHeader align="left" eyebrow={row.eyebrow} title={row.title} subtitle={row.text} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
