import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Quote } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg.asset.json";

export const Route = createFileRoute("/founder-message")({
  head: () => ({ meta: [{ title: "Founder's Message — John Amos International School" }, { name: "description", content: "Founder's message and the story behind John Amos International School." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="From the Founder" title="Why we built John Amos." />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 md:grid-cols-[2fr_1fr] lg:px-8">
          <div className="animate-fade-up">
            <Quote className="h-12 w-12 text-accent" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              I grew up in Mymensingh and watched too many bright young minds leave the city for the kind of education they deserved. John Amos exists so that no child has to.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Named for John Amos Comenius — the 17th-century educator who believed teaching should be universal, joyful and rooted in observation — our school holds those same convictions in 2026.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We chose the Cambridge curriculum because it is rigorous, internationally portable and demands real understanding rather than rote learning. We chose Mymensingh because this city, and these families, deserve nothing less.
            </p>
            <div className="mt-8 border-l-4 border-accent pl-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">— Khondokar Ehosan Habib, Founder</div>
          </div>
          <div className="img-zoom animate-fade-up delay-200 w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] md:max-w-[280px] md:justify-self-end">
            <img src={founderPortrait.url} alt="Khondokar Ehosan Habib, Founder of John Amos International School" className="aspect-[4/5] w-full object-cover" />
            <div className="bg-primary p-5 text-primary-foreground">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Founder</div>
              <div className="mt-1 text-lg font-extrabold">Khondokar Ehosan Habib</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About the Founder</div>
            <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">Khondokar Ehosan Habib</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                Khondokar Ehosan Habib (born 21 September 1981) is a Bangladeshi entrepreneur and educationist with active involvement in the education, healthcare, and social development sectors.
              </p>
              <p>
                He has contributed significantly to the advancement of private higher education in Bangladesh, previously serving as Registrar at Cox's Bazar International University and the University of Brahmanbaria.
              </p>
              <p>
                Mr. Habib is the founder of John Amos International School, reflecting his long-term commitment to quality education and institutional development. In addition, he has initiated the establishment of a modern healthcare facility, Well Care Hospital and Diagnostic Centre, equipped with updated medical technologies and services. He currently serves as the Chairman of this institution, where development and operational expansion are ongoing.
              </p>
              <p>
                Beyond his professional roles, he is also recognized as a poet and writer. He is actively engaged in environmental, educational, and cultural initiatives and is regarded as a notable figure in both national and international contexts for his multidisciplinary contributions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
