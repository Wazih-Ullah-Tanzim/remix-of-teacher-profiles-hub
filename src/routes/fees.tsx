import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { BadgePercent, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({ meta: [{ title: "Fees & Payments — John Amos" }, { name: "description", content: "Tuition fee structure for each class plus current admission offers." }] }),
  component: Page,
});

const tiers = [
  { class: "Play Group", admission: 12000, monthly: 4500, color: "from-accent to-accent" },
  { class: "Nursery", admission: 13000, monthly: 4800 },
  { class: "Standard I", admission: 14000, monthly: 5200 },
  { class: "Standard II", admission: 14500, monthly: 5500 },
  { class: "Standard III", admission: 15000, monthly: 5800 },
  { class: "Standard IV", admission: 15500, monthly: 6200 },
  { class: "Standard V", admission: 16000, monthly: 6500 },
];

const offers = [
  "10% sibling discount on monthly tuition",
  "Early-bird admission: 15% off admission fee before March",
  "Merit-based scholarship for top performers",
  "Easy installment options for annual fees",
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Fees" title="Transparent fee structure." subtitle="Clear, predictable pricing for every class — with offers to make access easier." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Tuition" title="Fees by class" subtitle="All amounts in BDT. One-time admission fee is paid at enrolment." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tiers.map((t, i) => (
              <div key={t.class} className="tilt-card animate-scale-in rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Class</div>
                <div className="mt-1 text-xl font-extrabold text-primary">{t.class}</div>
                <div className="my-5 h-px bg-border" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Admission</span><span className="font-bold text-primary">৳ {t.admission.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Monthly</span><span className="font-bold text-primary">৳ {t.monthly.toLocaleString()}</span></div>
                </div>
                <Link to="/contact" className="mt-6 inline-flex w-full"><Button variant="navy" className="w-full">Pay Now</Button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Offers" title="Current admission offers" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {offers.map((o) => (
              <li key={o} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] animate-fade-up">
                <BadgePercent className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-primary">{o}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-accent/30 bg-card p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Accepted payment methods</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-primary">
              {["bKash", "Nagad", "Rocket", "Bank Transfer", "Card"].map((m) => (
                <span key={m} className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" />{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}