import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Calendar, ClipboardCheck, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — John Amos International School" },
      { name: "description", content: "Apply to John Amos International School. Learn about our admissions process, requirements and fees." },
      { property: "og:title", content: "Admissions — John Amos International School" },
      { property: "og:description", content: "Apply to Mymensingh's first absolute English Medium Cambridge school." },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const steps = [
    { icon: FileText, title: "1. Enquire", text: "Submit an enquiry form or call our admissions office to learn more." },
    { icon: Calendar, title: "2. Visit & Tour", text: "Book a campus tour to meet our team and see classrooms in action." },
    { icon: ClipboardCheck, title: "3. Assessment", text: "An age-appropriate assessment and a brief parent interview." },
    { icon: GraduationCap, title: "4. Enrol", text: "Receive an offer letter, complete enrolment forms and begin." },
  ];
  const docs = [
    "Completed application form",
    "Child's birth certificate copy",
    "Two recent passport-size photographs",
    "Previous school records (if applicable)",
    "Parent/Guardian National ID copies",
    "Medical / immunisation records",
  ];
  return (
    <>
      <PageHero eyebrow="Admissions" title="Join the John Amos family." subtitle="A simple, supportive process designed to help your child take the next step in their learning journey." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Process" title="Four steps to enrolment" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><s.icon className="h-6 w-6" /></div>
                <h3 className="text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader align="left" eyebrow="Required Documents" title="What you'll need to apply" />
            <ul className="mt-8 space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl bg-background p-4 shadow-[var(--shadow-card)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-primary">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Key Dates & Fees" title="Plan your enrolment" />
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">Admissions Window</div>
                <div className="mt-1 text-lg font-bold text-primary">Open year-round</div>
                <p className="mt-1 text-sm text-muted-foreground">Limited seats per class — early application recommended.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">Fees</div>
                <div className="mt-1 text-lg font-bold text-primary">On request</div>
                <p className="mt-1 text-sm text-muted-foreground">Detailed fee structures are shared during the campus visit.</p>
              </div>
              <Link to="/contact"><Button variant="hero" size="xl" className="w-full">Start your Application</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
