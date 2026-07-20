import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import mohitPhoto from "@/assets/prof-mohit-ul-alam.jpg.asset.json";
import shahidPhoto from "@/assets/dr-shahiduzzaman.jpg.asset.json";

export const Route = createFileRoute("/advisors")({
  head: () => ({
    meta: [
      { title: "Advisors — John Amos International School" },
      { name: "description", content: "Meet the distinguished advisors guiding John Amos International School." },
    ],
  }),
  component: Page,
});

type Advisor = {
  name: string;
  role: string;
  photo: string;
  paragraphs: string[];
};

const advisorList: Advisor[] = [
  {
    name: "Prof. Mohit Ul Alam",
    role: "Academic Advisor",
    photo: mohitPhoto.url,
    paragraphs: [
      "Born 13 December 1952 in Chittagong, is the former vice chancellor of Jatiya Kabi Kazi Nazrul Islam University at Trishal, Mymensingh. He is a Shakespearean scholar.",
      "He passed his master's and Honours from Chittagong University in English, and then secured another master's degree in English from Lakehead University, Thunder Bay, Canada, and then he earned his PhD degree from Dhaka University.",
      "Dr. Mohit Ul Alam is a former professor of Chittagong University. He was Dean at School of Arts and Humanities, ULAB and also the founder and chairman of Department of English Literature and Language in Premier University, Chittagong.",
      "He has more than thirty books to his credit – fiction, poetry, and nonfiction, including books on teaching English. In addition, he has written columns published in Bangla and English dailies addressing current issues. He was a syndicated sports-columnist for Prothom Alo during the World Cup Soccer (2010) and ICC Cricket World Cup in 2011, respectively. He has been the editor of the academic journal Crossings: ULAB Journal of English Studies.",
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Advisors"
        title="Voices that shape our practice."
        subtitle="A panel of experienced educators and specialists supporting the school's growth."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader eyebrow="Panel" title="Meet our advisors" />
          {advisorList.map((a, i) => (
            <article
              key={a.name}
              className="animate-scale-in grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:grid-cols-[280px_1fr] md:p-10"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="mx-auto w-full max-w-[280px]">
                <div className="img-zoom overflow-hidden rounded-2xl ring-4 ring-accent/30 glow-photo">
                  <img
                    src={a.photo}
                    alt={a.name}
                    className="h-full w-full object-cover aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{a.role}</div>
                  <h3 className="mt-1 text-xl font-extrabold text-primary">{a.name}</h3>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-primary md:text-3xl">About {a.name}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  {a.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
