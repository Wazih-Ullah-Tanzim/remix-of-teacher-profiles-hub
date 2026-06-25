import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/career")({
  head: () => ({ meta: [{ title: "Careers — John Amos" }, { name: "description", content: "Open teaching and staff positions at John Amos International School." }] }),
  component: Page,
});

const openings = [
  { title: "Cambridge Primary Teacher — Mathematics", type: "Full-time", location: "Mymensingh" },
  { title: "Early Years Educator", type: "Full-time", location: "Mymensingh" },
  { title: "IELTS Instructor", type: "Part-time", location: "Mymensingh" },
  { title: "Music & Art Teacher", type: "Part-time", location: "Mymensingh" },
];

function Page() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Application received — we'll review and reply shortly.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <>
      <PageHero eyebrow="Careers" title="Teach where teaching matters." subtitle="Join a school that values educators as much as it values learners." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Open Roles" title="Current vacancies" />
          <div className="mt-12 grid gap-4">
            {openings.map((o, i) => (
              <div key={o.title} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-fade-up tilt-card" style={{ animationDelay: `${i * 80}ms` }}>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    <Briefcase className="h-3.5 w-3.5" /> {o.type}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-primary">{o.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {o.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Apply by 30 Sep</span>
                  </div>
                </div>
                <a href="#apply"><Button variant="navy">Apply</Button></a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="apply" className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Apply" title="Send us your application" />
          <form onSubmit={submit} className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <Field label="Full name" name="name" required />
            <Field label="Email" type="email" name="email" required />
            <Field label="Phone" name="phone" />
            <Field label="Applying for" name="role" required />
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">Cover note</label>
              <textarea name="note" rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-2 w-full">Submit Application</Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">{label}{required && <span className="text-accent"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
    </div>
  );
}