import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, Languages, Palette, Calculator, Globe2 } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Cambridge Curriculum | John Amos International School" },
      { name: "description", content: "Explore our Cambridge curriculum — from Early Years through Lower Secondary — built for international standards and lifelong learning." },
      { property: "og:title", content: "Academics — John Amos International School" },
      { property: "og:description", content: "Cambridge curriculum from Early Years onwards." },
      { property: "og:image", content: classroomImg },
    ],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  const stages = [
    { name: "Early Years", ages: "Ages 3 – 5", desc: "Play-based learning that develops curiosity, language and social skills." },
    { name: "Cambridge Primary", ages: "Ages 5 – 11", desc: "English, Mathematics and Science with cross-curricular projects." },
    { name: "Lower Secondary", ages: "Ages 11 – 14", desc: "Deeper subject specialisation preparing learners for IGCSE." },
  ];
  const subjects = [
    { icon: Languages, name: "English" },
    { icon: Calculator, name: "Mathematics" },
    { icon: FlaskConical, name: "Science" },
    { icon: Globe2, name: "Global Perspectives" },
    { icon: Palette, name: "Art & Design" },
    { icon: BookOpen, name: "ICT" },
  ];
  return (
    <>
      <PageHero eyebrow="Academics" title="A Cambridge education, end to end." subtitle="Our curriculum is built on the Cambridge Pathway — internationally recognised, rigorous, and shaped for the modern learner." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Stages of Learning" title="From early years to lower secondary" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stages.map((s, i) => (
              <div key={s.name} className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:border-accent">
                <div className="text-5xl font-extrabold text-accent/15">0{i + 1}</div>
                <h3 className="mt-2 text-xl font-bold text-primary">{s.name}</h3>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">{s.ages}</div>
                <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={classroomImg} alt="Cambridge classroom" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            <div>
              <SectionHeader align="left" eyebrow="Subjects" title="A broad and balanced curriculum" subtitle="Core academic subjects are taught alongside the arts, technology and global perspectives." />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {subjects.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 rounded-xl bg-background p-4 shadow-[var(--shadow-card)]">
                    <s.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-semibold text-primary">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Next Steps" title="Ready to enrol your child?" subtitle="Speak with our admissions team to find the right starting stage for your child." />
          <Link to="/admissions" className="mt-8 inline-flex"><Button variant="hero" size="xl">Apply Now</Button></Link>
        </div>
      </section>
    </>
  );
}
