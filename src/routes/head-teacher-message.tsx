import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import studentsImg from "@/assets/students.jpg";

export const Route = createFileRoute("/head-teacher-message")({
  head: () => ({ meta: [{ title: "Head Teacher's Message — John Amos International School" }, { name: "description", content: "A message from the Head Teacher of John Amos International School." }] }),
  component: Page,
});
function Page() {
  return <><PageHero eyebrow="About" title="Head Teacher's Message" subtitle="A warm welcome to every learner, guardian and teacher in the John Amos family." /><section className="py-20"><div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8"><img src={studentsImg} alt="John Amos students" className="glow-image aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]" /><div><SectionHeader align="left" eyebrow="Head Teacher" title="Learning with care, discipline and imagination" /><div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80"><p>At John Amos International School, our first responsibility is to know every child well. We believe that strong academic habits, confident communication and good character grow together.</p><p>Our teachers guide students through the Cambridge curriculum while nurturing curiosity, kindness and responsibility. We invite parents to work closely with us so each learner can flourish.</p><p className="font-bold text-primary">Welcome to JAIS — a school where every day is a step forward.</p></div></div></div></section></>;
}
