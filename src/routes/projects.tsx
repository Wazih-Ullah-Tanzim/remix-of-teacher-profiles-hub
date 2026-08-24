import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Beaker, Palette, Globe, BookOpen } from "lucide-react";
import class1BanglaProject from "@/assets/Class_1_Bangla_Project_B.jpeg.asset.json";
import kgCalendarProject from "@/assets/project-2.jpg.asset.json";
import playAlphabetProject from "@/assets/Alphabet_Fish_-_Play_A.jpeg.asset.json";
import class2EnglishProject from "@/assets/Class-2_English_City_Tour_plan.jpeg.asset.json";
import class1ScienceProject from "@/assets/Grade_1_Science_Project_--_Sorting_Materials_A.jpeg.asset.json";
import class2ComputingProject from "@/assets/Grade_2_Computing_Project_-_Algorithm_B.jpeg.asset.json";
import class2ScienceProject from "@/assets/Grade_2_Science_Project_-_Separation_of_Mixture_A.jpeg.asset.json";
import similarDifferentProject from "@/assets/C19-C_-_i_A.jpeg.asset.json";
import banglaProject from "@/assets/C19-F_-_i.jpeg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Student Projects — John Amos" }, { name: "description", content: "Project-based learning from Play Group to Standard V." }] }),
  component: Page,
});

const classes = ["Play Group", "Nursery", "Standard I", "Standard II", "Standard III", "Standard IV", "Standard V"];

const projectsByClass: Record<string, { icon: typeof Beaker; title: string; desc: string }[]> = {
  "Play Group": [
    { icon: Palette, title: "My Colourful World", desc: "Finger painting and sensory play to discover colours and textures." },
    { icon: BookOpen, title: "Story Corner", desc: "Picture books and acting to build language and imagination." },
  ],
  Nursery: [
    { icon: Palette, title: "All About Me", desc: "Self-portrait collages introducing identity and family." },
    { icon: Beaker, title: "Tiny Scientists", desc: "Mixing colours and floating objects to spark curiosity." },
  ],
  "Standard I": [
    { icon: Globe, title: "My Neighbourhood", desc: "Mapping the streets, shops and people around school." },
    { icon: Beaker, title: "Mini Garden", desc: "Growing beans and tracking plant life cycles." },
  ],
  "Standard II": [
    { icon: BookOpen, title: "Folk Tales", desc: "Retelling Bangladeshi folk tales as illustrated books." },
    { icon: Beaker, title: "Weather Watch", desc: "Daily weather diaries and simple data charts." },
  ],
  "Standard III": [
    { icon: Globe, title: "Rivers of Bangladesh", desc: "Investigating the Brahmaputra and its impact on our city." },
    { icon: Palette, title: "Recycled Art", desc: "Sculpture from upcycled household materials." },
  ],
  "Standard IV": [
    { icon: Beaker, title: "Simple Machines", desc: "Designing and testing levers, pulleys and inclined planes." },
    { icon: Globe, title: "Global Citizens", desc: "Researching a UN sustainability goal and presenting solutions." },
  ],
  "Standard V": [
    { icon: Beaker, title: "Renewable Energy", desc: "Building solar-powered prototypes and measuring output." },
    { icon: BookOpen, title: "Newsroom", desc: "Producing a school newspaper from interviews to layout." },
  ],
};

const projectGallery = [
  { src: class1BanglaProject.url, title: "Class I Bangla Project", caption: "Students and teachers presenting their Bangla learning project." },
  { src: kgCalendarProject.url, title: "KG Chapter-Time Project", caption: "Young learners exploring months, routines, and collaborative work." },
  { src: playAlphabetProject.url, title: "Play Group Alphabet Fish", caption: "A colourful alphabet activity created by Play Group learners." },
  { src: class2EnglishProject.url, title: "Class II English City Tour", caption: "English learners sharing a creative places and vocabulary project." },
  { src: class1ScienceProject.url, title: "Grade I Science: Sorting Materials", caption: "Hands-on science learning with sorting and classification." },
  { src: class2ComputingProject.url, title: "Grade II Computing: Algorithm", caption: "Students working together through a computing project." },
  { src: class2ScienceProject.url, title: "Grade II Science: Separation of Mixtures", caption: "A practical science presentation on separating mixtures." },
  { src: similarDifferentProject.url, title: "Similar & Different", caption: "A student-made visual project comparing similarities and differences." },
  { src: banglaProject.url, title: "Bangla Learning Project", caption: "Students presenting a Bangla-language project with their teacher." },
];

function Page() {
  const [active, setActive] = useState("Standard III");
  const list = projectsByClass[active];
  return (
    <>
      <PageHero eyebrow="Project-Based Learning" title="Big ideas, small hands." subtitle="From Play Group to Standard V — projects that connect curriculum to the real world." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Choose a class" title="See current projects" />
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2">
            {classes.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === c ? "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]" : "bg-secondary text-primary hover:bg-accent hover:text-accent-foreground"
                }`}>
                {c}
              </button>
            ))}
          </div>
          <div className="mt-12 grid animate-fade-up gap-6 md:grid-cols-2">
            {list.map((p) => (
              <div key={p.title} className="tilt-card rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><p.icon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Learning in action" title="Student project gallery" subtitle="A glimpse of the creativity, teamwork, and confident presentation behind each project." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectGallery.map((project) => (
              <figure key={project.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={project.src} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <figcaption className="p-5">
                  <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{project.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}