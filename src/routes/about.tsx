import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Target, Eye } from "lucide-react";
import awardCeremonyImg from "@/assets/jais-award-ceremony.jpg.asset.json";
import missionVisionImg from "@/assets/jais-mission-vision.jpg.asset.json";
import aimValuesImg from "@/assets/jais-aim-values.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, Mission & Vision — John Amos International School" },
      { name: "description", content: "Mission, vision and the journey of John Amos International School in Mymensingh." },
      { property: "og:image", content: awardCeremonyImg.url },
    ],
  }),
  component: AboutPage,
});

const TIMELINE: { year: string; milestones: { title: string; text: string }[] }[] = [
  {
    year: "2023",
    milestones: [
      {
        title: "Foundation & Academic Launch",
        text: "The school was officially established, opening admissions from Play Group to Standard V.",
      },
      {
        title: "Infrastructure Setup",
        text: "Classrooms were fully fitted with Air Conditioning (AC) to ensure a comfortable learning environment.",
      },
    ],
  },
  {
    year: "2024",
    milestones: [
      {
        title: "Technological Integration",
        text: "Projectors were installed across classrooms to facilitate visual and multimedia learning.",
      },
      {
        title: "Digital Literacy",
        text: "A modern Computer Lab was launched to equip students with essential technical skills.",
      },
    ],
  },
  {
    year: "2025",
    milestones: [
      {
        title: "Interactive Education",
        text: "Smart boards were introduced to foster dynamic, engaging, and interactive classroom sessions.",
      },
      {
        title: "Recreation & Wellbeing",
        text: "A dedicated, safe Play Zone was established for the physical development of early learners.",
      },
    ],
  },
  {
    year: "2026",
    milestones: [
      {
        title: "Holistic Development",
        text: "Swimming class integration was introduced as part of the physical education curriculum.",
      },
      {
        title: "Extracurricular Enhancement",
        text: "Creative programs expanded with specialized Art, Music, and Dance classes.",
      },
      {
        title: "Advanced Software Integration",
        text: "Advanced software integration is underway to further strengthen learning, communication, and school operations.",
      },
    ],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A school built around the curious mind."
        subtitle="Mission, vision and the journey of John Amos International School."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:px-8">
          <img
            src={awardCeremonyImg.url}
            alt="John Amos International School students celebrating achievements at the award ceremony"
            loading="lazy"
            className="glow-image aspect-[16/11] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <SectionHeader
              align="left"
              eyebrow="Who We Are"
              title="First absolute English Medium school in Mymensingh"
              subtitle="Following the Cambridge curriculum in an elegant multi-storey building thoughtfully refurbished for modern learning."
            />
            <p className="mt-6 text-muted-foreground">
              Our calm, friendly atmosphere allows children to learn at their best — supported by experienced
              educators, small class sizes and a genuine commitment to every child's progress.
            </p>
          </div>
        </div>
      </section>

      {/* PART A — Mission & Vision */}
      <section id="mission-vision" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Mission & Vision" title="What we stand for" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="animate-fade-up rounded-3xl bg-primary p-10 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Target className="h-7 w-7 text-white" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Mission</div>
              <h3 className="mt-2 text-2xl font-extrabold">Empower every learner</h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                To deliver a world-class Cambridge education that empowers every learner to think critically,
                act ethically and thrive globally — grounded in the values of our community.
              </p>
            </article>
            <article className="animate-fade-up rounded-3xl bg-accent p-10 text-accent-foreground shadow-[var(--shadow-elegant)]" style={{ animationDelay: "120ms" }}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">Our Vision</div>
              <h3 className="mt-2 text-2xl font-extrabold text-white">Leaders of tomorrow</h3>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                To be the leading English Medium school in northern Bangladesh — recognised for academic
                excellence, character formation and a learning culture that prepares students for the world.
              </p>
            </article>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <figure className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={missionVisionImg.url}
                alt="John Amos International School mission statement and vision"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </figure>
            <figure className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: "120ms" }}>
              <img
                src={aimValuesImg.url}
                alt="John Amos International School aims and values"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* PART B — History Timeline */}
      <section id="history" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="History of John Amos International School" title="Our Journey" />

          <div className="relative mt-16">
            {/* Connecting navy vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

            <ol className="space-y-12">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <li key={item.year} className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* Year badge */}
                    <span className="absolute left-6 top-3 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-accent-foreground shadow-[0_0_18px_rgba(255,143,46,.55)] ring-4 ring-background md:left-1/2">
                      {item.year.slice(-2)}
                    </span>

                    {/* Card */}
                    <div
                      className={`animate-fade-up ml-16 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:ml-0 ${
                        isLeft ? "md:col-start-1 md:mr-8 md:text-right" : "md:col-start-2 md:ml-8"
                      }`}
                      style={{ animationDelay: `${i * 90}ms` }}
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{item.year}</div>
                       <div className="mt-3 space-y-5">
                         {item.milestones.map((milestone) => (
                           <div key={milestone.title}>
                             <h3 className="text-xl font-extrabold text-primary">{milestone.title}</h3>
                             <p className="mt-2 text-sm text-muted-foreground">{milestone.text}</p>
                           </div>
                         ))}
                       </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-center">
        <SectionHeader
          eyebrow="Visit Us"
          title="See John Amos in person"
          subtitle="Take a campus tour and meet our team to experience the John Amos difference."
        />
        <Link to="/admissions" className="mt-8 inline-flex">
          <Button variant="hero" size="xl">Apply / Book a Tour</Button>
        </Link>
      </section>
    </>
  );
}
