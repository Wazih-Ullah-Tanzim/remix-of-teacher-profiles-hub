import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/board-of-directors")({
  head: () => ({ meta: [{ title: "Board of Directors — John Amos International School" }, { name: "description", content: "Meet the Board of Directors of John Amos International School." }] }),
  component: Page,
});

type Director = { sl: number; name: string; role: string; photo?: string };

import pFounder from "@/assets/board-founder.jpg.asset.json";
import pChairman from "@/assets/board-chairman.jpg.asset.json";
import pProgramme from "@/assets/board-programme.jpg.asset.json";
import pTreasurer from "@/assets/board-treasurer.jpg.asset.json";
import pAnis from "@/assets/dir-anis.jpg.asset.json";
import pKamal from "@/assets/dir-kamal.jpg.asset.json";
import pDider from "@/assets/dir-dider.jpg.asset.json";
import pHashmi from "@/assets/dir-hashmi.jpg.asset.json";
import pBilkis from "@/assets/dir-bilkis.jpg.asset.json";
import pNusra from "@/assets/dir-nusra.jpg.asset.json";

const directorsList: Director[] = [
  { sl: 1, name: "Mr. Khondokar Ehosan Habib", role: "Founder", photo: pFounder.url },
  { sl: 2, name: "Dr. Abul Khaer Mohammad Helal Uddin", role: "Chairman", photo: pChairman.url },
  { sl: 3, name: "Mr. Mohammad Abdul Queaum", role: "Programme Director", photo: pProgramme.url },
  { sl: 4, name: "Engr. A K M Jahirul Hasan", role: "Treasurer", photo: pTreasurer.url },
  { sl: 5, name: "Mr. Anisur Rahman Anis", role: "Director", photo: pAnis.url },
  { sl: 6, name: "Mr. Anwar Hossain Kamal", role: "Director", photo: pKamal.url },
  { sl: 7, name: "Mr. Diderul Islam Dider", role: "Director", photo: pDider.url },
  { sl: 8, name: "Dr. Ahmed Shakil Hashmi", role: "Director", photo: pHashmi.url },
  { sl: 9, name: "Dr. Bilkis Parvin", role: "Director", photo: pBilkis.url },
  { sl: 10, name: "Ms. Jannatun Nusra", role: "Director", photo: pNusra.url },
];





function initials(name: string) {
  return name.replace(/^(Mr\.|Ms\.|Md\.|Dr\.|Engr\.|Eng\.)\s+/i, "").split(/\s+/).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
}

function Page() {
  return (
    <>
      <PageHero eyebrow="Governance" title="Our Board of Directors" subtitle="Stewards of the school's mission, governance and long-term direction." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Leadership" title="Meet the board" />

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {directorsList.map((d) => (
              <div key={d.sl} className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="img-zoom aspect-[3/4] w-full max-w-[150px] overflow-hidden rounded-xl ring-2 ring-primary/10 shadow-sm bg-muted flex items-center justify-center">
                  {d.photo ? (
                    <img src={d.photo} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-primary/40">{initials(d.name)}</span>
                  )}
                </div>
                <div className="mt-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-accent">{d.role}</div>
                  <h3 className="mt-1 text-xs font-bold leading-tight text-primary">{d.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
