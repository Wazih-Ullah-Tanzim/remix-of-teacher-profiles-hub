import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import headteacherImg from "@/assets/headteacher-arif.jpg.asset.json";

export const Route = createFileRoute("/head-teacher-message")({
  head: () => ({ meta: [{ title: "Head Teacher's Message — John Amos International School" }, { name: "description", content: "A message from the Head Teacher of John Amos International School." }] }),
  component: Page,
});
function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="Head Teacher's Message" subtitle="A warm welcome to every learner, guardian and teacher in the John Amos family." />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <img src={headteacherImg.url} alt="Muhammad Arif Mujtaba Kamal, Head Teacher" className="glow-image aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]" />
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-primary">Muhammad Arif Mujtaba Kamal</p>
              <p className="text-sm text-foreground/70">Head Teacher, John Amos International School</p>
            </div>
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Head Teacher" title="Shaping responsible, compassionate and confident learners" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>As Headteacher, I firmly believe that education is not merely about academic achievement but about shaping responsible, compassionate, and confident individuals who are prepared to contribute meaningfully to society.</p>
              <p>Every child possesses unique potential, and it is our collective responsibility to nurture that potential through dedication, discipline, and encouragement.</p>
              <blockquote className="border-l-4 border-secondary bg-secondary/10 py-4 pl-6 pr-4 italic text-foreground">
                "The best way to ensure the future is to create it."
                <span className="mt-2 block text-sm not-italic text-foreground/70">— John Amos</span>
              </blockquote>
              <p>This powerful reminder inspires our school community to embrace lifelong learning, uphold integrity, and strive for excellence in every endeavor.</p>
              <p>Together, with the unwavering support of parents, teachers, and students, we continue to build a learning environment where curiosity is encouraged, character is strengthened, and every learner is empowered to achieve their highest aspirations.</p>
              <p className="font-bold text-primary">Welcome to JAIS — a school where every day is a step forward.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
