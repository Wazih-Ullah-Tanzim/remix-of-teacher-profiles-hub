import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileText, Upload, CreditCard, Building2, ShieldCheck } from "lucide-react";
import { guardSubmit, markSubmitted, honeypotInputProps } from "@/lib/form-security";

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
  { q: "When does admission start?", a: "Admission for the 2026-2027 session opens in October 2025 and continues until seats are filled." },
  { q: "What curriculum do you follow?", a: "We follow the Cambridge curriculum aligned with British Council standards." },
  { q: "Is there a waiting list?", a: "Yes. If a class is full, applicants are placed on a waiting list and contacted when a seat opens." },
  { q: "Can I apply mid-year?", a: "Mid-year admissions are considered subject to seat availability and an assessment." },
  { q: "What documents are needed?", a: "Birth certificate, previous report card, 2 passport-size photos, and a parent/guardian NID copy." },
  { q: "Are there scholarships available?", a: "Yes, merit and need-based scholarships are awarded after an evaluation. Contact admissions for details." },
];

function AdmissionsPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!guardSubmit(form, "admissions", (m) => toast.error(m))) return;
    const f = new FormData(form);
    setLoading(true);
    markSubmitted("admissions");
    const fields: [string, string][] = [
      ["Student Full Name", String(f.get("studentName") || "")],
      ["Father's Name", String(f.get("fatherName") || "")],
      ["Mother's Name", String(f.get("motherName") || "")],
      ["Date of Birth", String(f.get("birthDate") || "")],
      ["Previous School", String(f.get("previousSchool") || "")],
      ["Session", "2026-2027"],
      ["Phone Number", String(f.get("phone") || "")],
      ["Full Address", String(f.get("fullAddress") || "")],
      ["City", String(f.get("city") || "")],
      ["Country", String(f.get("country") || "Bangladesh")],
    ];
    const body = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
    const subject = `Admission Application 2026-2027 — ${fields[0][1] || "New Applicant"}`;
    const mailto = `mailto:admission@johnamosbd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Opening your email app to send the application…");
    setTimeout(() => setLoading(false), 1200);
  };

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
          <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:grid-cols-2">
            {/* Honeypot */}
            <input {...honeypotInputProps} />


            <Field label="Student Full Name" name="studentName" required />
            <Field label="Father's Name" name="fatherName" required />
            <Field label="Mother's Name" name="motherName" required />
            <Field label="Date of Birth" name="birthDate" type="date" required />
            <Field label="Previous School" name="previousSchool" />
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">Session *</label>
              <select name="session" required defaultValue="2026-2027" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30">
                <option value="2026-2027">2026-2027</option>
              </select>
            </div>
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="City" name="city" required />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">Full Address *</label>
              <textarea name="fullAddress" required rows={3} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <Field label="Country" name="country" required value="Bangladesh" />

            <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" /> Your information is sent securely to admission@johnamosbd.com
            </div>

            <Button disabled={loading} type="submit" variant="hero" size="xl" className="sm:col-span-2">
              <FileText className="mr-2 h-5 w-5" />
              {loading ? "Opening email…" : "Submit Application"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, value }: { label: string; name: string; type?: string; required?: boolean; value?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={value}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
