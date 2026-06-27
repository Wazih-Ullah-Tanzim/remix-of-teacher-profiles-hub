import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { faculty, type Teacher } from "@/lib/faculty";
import { Mail, GraduationCap, BriefcaseBusiness, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/faculty/$id")({
  head: ({ params }) => {
    const t = faculty.find((f) => f.id === params.id);
    return {
      meta: [
        { title: t ? `${t.name} — Faculty | John Amos` : "Faculty" },
        { name: "description", content: t?.bio ?? "Faculty profile at John Amos International School." },
        ...(t ? [{ property: "og:image", content: t.photo }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold text-primary">Teacher not found</h1>
      <Link to="/faculty" className="mt-6 inline-block text-accent">← Back to faculty</Link>
    </div>
  ),
  errorComponent: () => <div className="p-20 text-center">Something went wrong.</div>,
  loader: ({ params }): Teacher => {
    const t = faculty.find((f) => f.id === params.id);
    if (!t) throw notFound();
    return t;
  },
  component: Page,
});

function Page() {
  const t: Teacher = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={t.title} title={t.name} subtitle={t.subject} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
          <div className="animate-fade-up">
            <div className="img-zoom overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
              <img src={t.photo} alt={t.name} className="aspect-[3/4] w-full object-cover" />
            </div>
            <a href={`mailto:${t.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent story-link">
              <Mail className="h-4 w-4" /> {t.email}
            </a>
          </div>
          <div className="animate-fade-up delay-200">
            <Link to="/faculty" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Back to faculty
            </Link>
            <h2 className="mt-4 text-3xl font-extrabold text-primary">About {t.name.split(" ").slice(-1)[0]}</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">{t.bio}</p>

            <div className="mt-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                <GraduationCap className="h-4 w-4" /> Educational Qualifications
              </div>
              <ul className="mt-4 space-y-3">
                {t.qualifications.map((q) => (
                  <li key={q} className="rounded-xl border border-border bg-card p-4 text-sm text-foreground/85 shadow-[var(--shadow-card)]">{q}</li>
                ))}
              </ul>
            </div>

            <div
              className="relative mt-10 overflow-hidden rounded-xl p-6 pl-8"
              style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #f97316" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 left-3 select-none font-serif leading-none"
                style={{ fontSize: "6rem", color: "#f97316", opacity: 0.35 }}
              >
                “
              </span>
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#c2410c" }}>
                  In Their Own Words
                </div>
                <p className="mt-3 text-base italic leading-relaxed text-foreground/85">
                  {t.personalMessage}
                </p>
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-10 right-4 select-none font-serif leading-none"
                style={{ fontSize: "6rem", color: "#f97316", opacity: 0.35 }}
              >
                ”
              </span>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-xl bg-secondary p-5">
              <BriefcaseBusiness className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-accent">Experience</div>
                <div className="text-base font-bold text-primary">{t.experience}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}