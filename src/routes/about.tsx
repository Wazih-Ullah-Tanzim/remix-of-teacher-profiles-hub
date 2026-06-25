import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Target, Heart, Compass, Award } from "lucide-react";
import studentsImg from "@/assets/students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — John Amos International School" },
      { name: "description", content: "Learn the story, mission and values of John Amos International School — Mymensingh's first absolute English Medium Cambridge school." },
      { property: "og:title", content: "About John Amos International School" },
      { property: "og:description", content: "Mymensingh's first absolute English Medium Cambridge curriculum school." },
      { property: "og:image", content: studentsImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Target, title: "Our Mission", text: "To deliver a world-class Cambridge education that empowers every learner to think critically, act ethically and thrive globally." },
    { icon: Compass, title: "Our Vision", text: "To be the leading English Medium school in northern Bangladesh, recognised for academic excellence and character formation." },
    { icon: Heart, title: "Our Values", text: "Curiosity, kindness, integrity and excellence guide every classroom, conversation and community we build." },
    { icon: Award, title: "Our Promise", text: "A safe, modern, and inspiring environment where every child is known, nurtured and challenged to grow." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A school built around the curious mind."
        subtitle="Named for John Amos Comenius — the father of modern education — our school is dedicated to learning that is joyful, rigorous and lifelong."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <img src={studentsImg} alt="Students at John Amos" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
          <div>
            <SectionHeader
              align="left"
              eyebrow="Who We Are"
              title="First absolute English Medium school in Mymensingh"
              subtitle="Established in late 2023, we are the first school in Mymensingh to follow the Cambridge curriculum exclusively, in an elegant multi-storey building thoughtfully refurbished for modern learning."
            />
            <p className="mt-6 text-muted-foreground">
              Our calm, friendly atmosphere allows children to learn at their best — supported by experienced educators, small class sizes and a genuine commitment to every child's progress.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Stand For" title="Mission, vision and values" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><v.icon className="h-6 w-6" /></div>
                <h3 className="text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Visit Us" title="See John Amos in person" subtitle="Take a campus tour and meet our team to experience the John Amos difference." />
          <Link to="/contact" className="mt-8 inline-flex"><Button variant="hero" size="xl">Book a Campus Tour</Button></Link>
        </div>
      </section>
    </>
  );
}
