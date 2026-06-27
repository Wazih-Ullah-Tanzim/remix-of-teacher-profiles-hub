import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  BookMarked,
  Cpu,
  Trees,
  Coffee,
  Gamepad2,
  FlaskConical,
  HeartHandshake,
  Building2,
} from "lucide-react";
import labImg from "@/assets/computer-lab.jpg";
import libImg from "@/assets/library.jpg";
import playImg from "@/assets/playground.jpg";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus & Facilities — John Amos International School" },
      { name: "description", content: "Explore our library, computer lab, playground, cafeteria, indoor games, science corner, prayer room and admin block." },
      { property: "og:title", content: "Campus & Facilities" },
      { property: "og:description", content: "A modern campus designed for focused, joyful learning." },
      { property: "og:image", content: labImg },
    ],
  }),
  component: CampusPage,
});

type Facility = {
  id: string;
  name: string;
  icon: typeof BookMarked;
  description: string;
  photos: string[];
  year: string;
  capacity: string;
  features: string;
};

const FACILITIES: Facility[] = [
  {
    id: "library",
    name: "Library & Resource Center",
    icon: BookMarked,
    description:
      "A welcoming library and teacher resource centre that nurtures independent reading and a lifelong love of books from an early age.",
    photos: [libImg, libImg, labImg],
    year: "2021",
    capacity: "60 students",
    features: "4,000+ books, quiet study zones, digital catalogue",
  },
  {
    id: "computer-lab",
    name: "Computer Lab",
    icon: Cpu,
    description:
      "A modern computer lab with high-speed internet and smart classroom integration for immersive, interactive learning.",
    photos: [labImg, labImg, libImg],
    year: "2021",
    capacity: "30 workstations",
    features: "Smart board, coding club, broadband internet",
  },
  {
    id: "playground",
    name: "Playground",
    icon: Trees,
    description:
      "A safe, spacious playground designed for sports, free play and physical development in fresh air.",
    photos: [playImg, playImg, libImg],
    year: "2022",
    capacity: "200+ students",
    features: "Outdoor games, soft-fall zones, shaded rest areas",
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    icon: Coffee,
    description:
      "A hygienic cafeteria serving fresh, balanced meals and snacks — designed as a calm space to refuel and connect.",
    photos: [libImg, labImg, playImg],
    year: "2022",
    capacity: "120 seats",
    features: "Balanced menus, allergy-aware, hygienic kitchen",
  },
  {
    id: "indoor-games",
    name: "Indoor Games",
    icon: Gamepad2,
    description:
      "A dedicated indoor games room for table tennis, chess, carrom and other recreational activities throughout the year.",
    photos: [playImg, libImg, labImg],
    year: "2023",
    capacity: "40 students",
    features: "Table tennis, chess, carrom, board games",
  },
  {
    id: "science-corner",
    name: "Science Corner",
    icon: FlaskConical,
    description:
      "An exploration zone with hands-on experiments, models and instruments that bring scientific concepts to life.",
    photos: [labImg, libImg, playImg],
    year: "2023",
    capacity: "25 students",
    features: "Hands-on kits, microscopes, weekly experiments",
  },
  {
    id: "prayer-room",
    name: "Prayer Room",
    icon: HeartHandshake,
    description:
      "A calm, clean prayer space for students and staff — supporting reflection and spiritual wellbeing.",
    photos: [libImg, libImg, labImg],
    year: "2021",
    capacity: "30 worshippers",
    features: "Separate ablution area, quiet zone, daily access",
  },
  {
    id: "admin-block",
    name: "Admin Block",
    icon: Building2,
    description:
      "Central administration block housing reception, principal's office, accounts and counseling — easy to find and friendly.",
    photos: [labImg, libImg, playImg],
    year: "2021",
    capacity: "Full-time staff",
    features: "Reception, principal's office, accounts, counseling",
  },
];

function CampusPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHero
        eyebrow="Our Campus"
        title="Where modern learning feels at home."
        subtitle="Click any facility below to explore its photos, timeline and features."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Facilities" title="Built for focus, designed for joy" />
          <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
            {FACILITIES.map((f) => (
              <button
                key={f.id}
                onClick={() => scrollTo(f.id)}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-primary p-5 text-center text-primary-foreground shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"
              >
                <f.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-xs font-bold leading-tight sm:text-sm">{f.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {FACILITIES.map((f, idx) => (
            <article
              key={f.id}
              id={f.id}
              className="facility-anchor scroll-mt-20 rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] sm:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-accent">
                    {String(idx + 1).padStart(2, "0")} — Facility
                  </div>
                  <h3 className="truncate text-2xl font-black text-primary sm:text-3xl">{f.name}</h3>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {f.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {f.photos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${f.name} photo ${i + 1}`}
                    loading="lazy"
                    width={600}
                    height={450}
                    className="glow-photo aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                ))}
              </div>

              <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-secondary/60 p-5 sm:grid-cols-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-accent">Year Opened</div>
                  <div className="mt-1 text-lg font-extrabold text-primary">{f.year}</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-accent">Capacity</div>
                  <div className="mt-1 text-lg font-extrabold text-primary">{f.capacity}</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-accent">Key Features</div>
                  <div className="mt-1 text-sm font-semibold text-primary">{f.features}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
