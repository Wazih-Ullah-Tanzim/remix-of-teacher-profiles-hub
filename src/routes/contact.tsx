import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { guardSubmit, markSubmitted, honeypotInputProps } from "@/lib/form-security";
import { ObfuscatedEmail } from "@/components/site/ObfuscatedEmail";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — John Amos International School" },
      { name: "description", content: "Get in touch with John Amos International School in Mymensingh — visit, call or send us a message." },
      { property: "og:title", content: "Contact — John Amos International School" },
      { property: "og:description", content: "Reach our admissions team in Mymensingh." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!guardSubmit(form, "contact", (m) => toast.error(m))) return;
    setSubmitting(true);
    setTimeout(() => {
      markSubmitted("contact");
      toast.success("Thanks! We'll be in touch shortly.");
      form.reset();
      setSubmitting(false);
    }, 600);
  };
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation." subtitle="Visit our campus, call our admissions office, or send us a message — we usually respond within one working day." />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-2">
            <SectionHeader align="left" eyebrow="Reach Us" title="Get in touch" />
            <div className="mt-8 space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "Mymensingh City, Bangladesh", encoded: false as const },
                { icon: Phone, label: "Phone", value: "+880 1700 000 000", encoded: false as const },
                { icon: Mail, label: "Email", value: "aW5mb0Bqb2huYW1vc2JkLmNvbQ==", encoded: true as const },
                { icon: Clock, label: "Hours", value: "Sun – Thu · 8:00 AM – 2:30 PM", encoded: false as const },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><c.icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-accent">{c.label}</div>
                    <div className="mt-0.5 font-semibold text-primary">
                      {c.encoded ? <ObfuscatedEmail encoded={c.value} className="hover:text-accent" /> : c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:col-span-3">
            <input {...honeypotInputProps} />
            <h3 className="text-2xl font-extrabold text-primary">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">Fill in the form and our team will respond shortly.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Child's age" name="age" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full" disabled={submitting}>
              {submitting ? "Sending…" : "Send Message"}
            </Button>
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
