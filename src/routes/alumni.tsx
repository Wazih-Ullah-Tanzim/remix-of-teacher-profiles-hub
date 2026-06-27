import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GraduationCap, Briefcase, MapPin, Users, Globe2, Quote, CalendarDays, Clock, MapPinned } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HONEYPOT_NAME, isHoneypotFilled, getRemainingCooldown, markSubmitted, formatWait } from "@/lib/form-security";

const u = (id: string, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni Association — John Amos International School" },
      { name: "description", content: "John Amos alumni network — 150+ graduates across 5+ countries and 20+ professions. Register, reconnect, attend reunions." },
      { property: "og:title", content: "JAIS Alumni Association" },
      { property: "og:description", content: "A growing global family of John Amos graduates." },
    ],
  }),
  component: AlumniPage,
});

const ALUMNI = [
  { name: "Aisha Karim", year: 2018, profession: "Undergrad, University of Cambridge", quote: "JAIS taught me to ask the better question, not just answer faster.", photo: u("photo-1494790108377-be9c29b29330") },
  { name: "Rakib Hossain", year: 2017, profession: "Software Engineer, Google", quote: "The Cambridge rigor at JAIS still shapes how I solve problems daily.", photo: u("photo-1507003211169-0a1dd7228f2d") },
  { name: "Tasnia Rahman", year: 2019, profession: "Medical Student, NUS Singapore", quote: "Our teachers genuinely cared — that shaped the kind of doctor I want to be.", photo: u("photo-1580489944761-15a19d654956") },
  { name: "Mahir Chowdhury", year: 2016, profession: "Architect, Zaha Hadid Associates", quote: "Art class at JAIS was where I first saw design as a language.", photo: u("photo-1560250097-0b93528c311a") },
  { name: "Sumaiya Ahmed", year: 2020, profession: "BBA, North South University", quote: "Public-speaking days at school made every uni presentation feel easy.", photo: u("photo-1573496359142-b8d87734a5a2") },
  { name: "Ifaz Khan", year: 2015, profession: "Founder, Edtech Startup", quote: "Mymensingh, Cambridge curriculum, global ambition — JAIS proved it works.", photo: u("photo-1599566150163-29194dcaad36") },
];

const STATS = [
  { icon: Users, n: "150+", label: "Alumni Worldwide" },
  { icon: Globe2, n: "5+", label: "Countries" },
  { icon: Briefcase, n: "20+", label: "Professions" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  year: z.string().trim().regex(/^(19|20)\d{2}$/, "Enter a valid graduation year"),
  profession: z.string().trim().min(2).max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6).max(30),
  location: z.string().trim().min(2).max(120),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function AlumniPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (isHoneypotFilled(form)) return; // silent bot block

    const remaining = getRemainingCooldown("alumni");
    if (remaining > 0) {
      toast.error(`Please wait ${formatWait(remaining)} before submitting again.`);
      return;
    }

    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const d = parsed.data;
    const subject = encodeURIComponent(`Alumni Registration — ${d.name} (Class of ${d.year})`);
    const body = encodeURIComponent(
      `Name: ${d.name}\nGraduation Year: ${d.year}\nProfession: ${d.profession}\nEmail: ${d.email}\nPhone: ${d.phone}\nCity/Country: ${d.location}\n\nMessage:\n${d.message || "—"}`
    );
    window.location.href = `mailto:info@johnamosbd.com?subject=${subject}&body=${body}`;
    markSubmitted("alumni");
    toast.success("Opening your email app to send the registration…");
    form.reset();
    setSubmitting(false);
  }

  return (
    <main>
      {/* HERO with class-photo background */}
      <section className="relative overflow-hidden">
        <img
          src={u("photo-1523580494863-6f3031224c94", 1800)}
          alt="JAIS class photo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-navy)] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center text-primary-foreground sm:px-6 lg:px-8 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur">
            <GraduationCap className="h-3.5 w-3.5" /> JAIS Life
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Alumni <span className="text-accent">Association</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">
            A growing global family of John Amos graduates — connected for life across classrooms, careers, and continents.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="-mt-12 relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-8 w-8 text-accent" />
                <div className="mt-3 text-4xl font-extrabold text-primary">{s.n}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ALUMNI */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Featured Alumni" title="Where they are now" subtitle="Voices from across the world — in their own words." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ALUMNI.map((a) => (
              <article key={a.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] card-hover">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={a.photo} alt={a.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Class of {a.year}</div>
                  <h3 className="mt-1 text-xl font-extrabold text-primary">{a.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-foreground/80"><Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{a.profession}</p>
                  <blockquote className="mt-4 flex gap-2 rounded-xl bg-secondary/60 p-3 text-sm italic text-foreground/85">
                    <Quote className="h-4 w-4 shrink-0 text-accent" />
                    <span>"{a.quote}"</span>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM + UPCOMING REUNION */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          {/* FORM */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Alumni Registration</div>
            <h2 className="mt-2 text-3xl font-extrabold text-primary">Join the JAIS alumni network</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill in the form below and we'll add you to the alumni directory and reunion invites.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2" noValidate>
              {/* Honeypot */}
              <input type="text" name={HONEYPOT_NAME} tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }} aria-hidden="true" />

              <div className="sm:col-span-2">
                <Label htmlFor="al-name">Full Name *</Label>
                <Input id="al-name" name="name" required maxLength={100} />
              </div>
              <div>
                <Label htmlFor="al-year">Graduation Year *</Label>
                <Input id="al-year" name="year" required inputMode="numeric" placeholder="e.g. 2019" maxLength={4} />
              </div>
              <div>
                <Label htmlFor="al-profession">Profession *</Label>
                <Input id="al-profession" name="profession" required maxLength={120} />
              </div>
              <div>
                <Label htmlFor="al-email">Email *</Label>
                <Input id="al-email" name="email" type="email" required maxLength={255} />
              </div>
              <div>
                <Label htmlFor="al-phone">Phone *</Label>
                <Input id="al-phone" name="phone" required maxLength={30} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="al-location">City / Country *</Label>
                <Input id="al-location" name="location" required maxLength={120} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="al-message">Message (optional)</Label>
                <Textarea id="al-message" name="message" rows={4} maxLength={1000} placeholder="Tell us what you're up to…" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full">
                  {submitting ? "Sending…" : "Submit Registration"}
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">By submitting, your details will be sent to the JAIS alumni office at info@johnamosbd.com.</p>
              </div>
            </form>
          </div>

          {/* UPCOMING REUNION */}
          <aside className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
              <img src={u("photo-1511795409834-ef04bbd61622", 900)} alt="Alumni reunion" className="h-48 w-full object-cover" />
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Upcoming Reunion</div>
                <h3 className="mt-2 text-2xl font-extrabold">JAIS Homecoming 2026</h3>
                <ul className="mt-5 space-y-3 text-sm text-primary-foreground/90">
                  <li className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-accent" /> Saturday, 19 December 2026</li>
                  <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-accent" /> 4:00 PM — 9:00 PM</li>
                  <li className="flex items-center gap-3"><MapPinned className="h-4 w-4 text-accent" /> JAIS Campus, 19/D Shaheb Ali Road, Mymensingh</li>
                </ul>
                <p className="mt-5 text-sm text-primary-foreground/80">
                  An evening of memories, music and a campus tour for every batch from 2015 onwards. Register above to confirm your seat.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
              <GraduationCap className="mx-auto h-9 w-9 text-accent" />
              <p className="mt-3 text-sm text-foreground/80">
                Questions? Reach the alumni desk at <span className="font-bold text-primary">info@johnamosbd.com</span>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
