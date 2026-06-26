import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const u = (id: string, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const alumni = [
  { name: "Aisha Karim", year: "Class of 2018", now: "Undergrad, University of Cambridge", location: "Cambridge, UK", photo: u("photo-1494790108377-be9c29b29330") },
  { name: "Rakib Hossain", year: "Class of 2017", now: "Software Engineer, Google", location: "Singapore", photo: u("photo-1507003211169-0a1dd7228f2d") },
  { name: "Tasnia Rahman", year: "Class of 2019", now: "Medical Student, NUS", location: "Singapore", photo: u("photo-1580489944761-15a19d654956") },
  { name: "Mahir Chowdhury", year: "Class of 2016", now: "Architect, ZHA", location: "London, UK", photo: u("photo-1560250097-0b93528c311a") },
  { name: "Sumaiya Ahmed", year: "Class of 2020", now: "BBA, NSU", location: "Dhaka, BD", photo: u("photo-1573496359142-b8d87734a5a2") },
  { name: "Ifaz Khan", year: "Class of 2015", now: "Founder, Edtech Startup", location: "Mymensingh, BD", photo: u("photo-1599566150163-29194dcaad36") },
];

export const Route = createFileRoute("/alumni")({
  head: () => ({ meta: [{ title: "Alumni Association — John Amos" }, { name: "description", content: "Meet the John Amos alumni — students who carry our values into the world." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="JAIS Life" title="Alumni Association" subtitle="A growing global family of John Amos graduates — connected for life." />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Alumni" title="Where they are now" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {alumni.map((a, i) => (
              <div key={a.name} className="tilt-card animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="img-zoom aspect-[4/5] overflow-hidden">
                  <img src={a.photo} alt={a.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{a.year}</div>
                  <h3 className="mt-1 text-xl font-extrabold text-primary">{a.name}</h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-foreground/80"><Briefcase className="h-4 w-4 text-accent" />{a.now}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-accent" />{a.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-3xl border border-border bg-secondary p-10 text-center">
            <GraduationCap className="mx-auto h-10 w-10 text-accent" />
            <h3 className="mt-4 text-2xl font-extrabold text-primary">Are you a John Amos alum?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Email <a className="font-bold text-accent story-link" href="mailto:alumni@johnamosbd.com">alumni@johnamosbd.com</a> to join the network and stay connected.</p>
          </div>
        </div>
      </section>
    </>
  );
}
