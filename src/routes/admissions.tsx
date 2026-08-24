import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Upload, CreditCard, Building2 } from "lucide-react";
import { AdmissionApplicationForm } from "@/components/admissions/AdmissionApplicationForm";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026-2027 — John Amos International School" },
      { name: "description", content: "Apply online for John Amos International School admission session 2026-2027. Online admission includes an extra 10% discount." },
    ],
  }),
  component: AdmissionsPage,
});

const REQUIREMENTS = [
  "Birth certificate",
  "Previous school report card",
  "2 passport-size photos",
  "Parent/Guardian NID copy",
];

const OFFLINE_STEPS = ["Visit campus", "Collect form", "Submit documents", "Pay admission fee"];
const ONLINE_STEPS = ["Fill online form", "Upload documents", "Pay online"];

const FAQS: { q: string; a: string }[] = [
  { q: "What is the minimum age for Play Group?", a: "Children must be at least 2.5 years old by the start of the academic session." },
  { q: "When does admission start?", a: "Admission for the 2026-2027 session opens from July to October 2026 and continues until seats are filled." },
  { q: "What curriculum do you follow?", a: "We follow the Cambridge curriculum aligned with British Council standards." },
  { q: "Is there a waiting list?", a: "Yes. If a class is full, applicants are placed on a waiting list and contacted when a seat opens." },
  { q: "Can I apply mid-year?", a: "Mid-year admissions are considered subject to seat availability and an assessment." },
  { q: "What documents are needed?", a: "Birth certificate, previous report card, 2 passport-size photos, and a parent/guardian NID copy." },
  { q: "Are there scholarships available?", a: "Yes, merit and need-based scholarships are awarded after an evaluation. Contact admissions for details." },
];

function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Admission Session 2026-2027"
        subtitle="Apply online or offline. Online applications receive an extra 10% discount."
      />

      {/* SECTION 1 — Requirements */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Admission Requirement" title="What you need to apply" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {REQUIREMENTS.map((r) => (
              <div key={r} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-primary">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — Procedure */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Admission Procedure" title="Offline & Online" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-primary">Offline</h3>
              </div>
              <ol className="space-y-3">
                {OFFLINE_STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-primary">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Upload className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-primary">Online</h3>
              </div>
              <ol className="space-y-3">
                {ONLINE_STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-primary">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span>
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-card)]">
                <CreditCard className="h-4 w-4" /> 10% discount on admission fee for online applications
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Recent questions from parents" />
          <Accordion type="single" collapsible className="mt-10 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left font-bold text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 4 — Form */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Admission Form" title="Apply for Session 2026-2027" />
          <AdmissionApplicationForm />
        </div>
      </section>
    </>
  );
}
