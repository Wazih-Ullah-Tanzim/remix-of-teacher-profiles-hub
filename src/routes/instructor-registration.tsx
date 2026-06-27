import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { guardSubmit, markSubmitted, honeypotInputProps } from "@/lib/form-security";

export const Route = createFileRoute("/instructor-registration")({
  head: () => ({ meta: [{ title: "Instructor Registration — John Amos" }, { name: "description", content: "Register your interest in joining our instructor pool." }] }),
  component: Page,
});

function Page() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!guardSubmit(form, "instructor-registration", (m) => toast.error(m))) return;
    markSubmitted("instructor-registration");
    toast.success("Registration submitted — we'll be in touch.");
    form.reset();
  };
  return (
    <>
      <PageHero eyebrow="For Educators" title="Instructor Registration" subtitle="Register your details to be considered for current and future instructor positions." />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] animate-fade-up">
            <input {...honeypotInputProps} />
            <div className="grid gap-4 sm:grid-cols-2">
              <F label="Full name" name="name" required />
              <F label="Email" type="email" name="email" required />
              <F label="Phone" name="phone" required />
              <F label="Highest degree" name="degree" required />
              <F label="Subject specialism" name="subject" required />
              <F label="Years of experience" name="years" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">About you</label>
              <textarea name="about" rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <Button type="submit" variant="hero" size="xl">Register</Button>
          </form>
        </div>
      </section>
    </>
  );
}

function F({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">{label}{required && <span className="text-accent"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
    </div>
  );
}