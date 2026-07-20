import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/board-of-directors")({
  head: () => ({ meta: [{ title: "Board of Directors — John Amos International School" }, { name: "description", content: "Meet the Board of Directors of John Amos International School." }] }),
  component: Page,
});

type Director = { sl: number; name: string; role: string; photo?: string };

import pChairman from "@/assets/board-chairman.jpg.asset.json";
import pProgramme from "@/assets/board-programme.jpg.asset.json";
import pTreasurer from "@/assets/board-treasurer.jpg.asset.json";
import pImtiaz from "@/assets/board-imtiaz.jpg.asset.json";

const directorsList: Director[] = [
  { sl: 1, name: "Mr. Khondokar Ehosan Habib", role: "Founder" },
  { sl: 2, name: "Dr. Abul Khaer Mohammad Helal Uddin", role: "Chairman", photo: pChairman.url },
  { sl: 3, name: "Mr. Mohammad Abdul Queaum", role: "Programme Director", photo: pProgramme.url },
  { sl: 4, name: "Engr. A K M Jahirul Hasan", role: "Treasurer", photo: pTreasurer.url },
  { sl: 5, name: "Mr. Anisur Rahman Anis", role: "Director" },
  { sl: 6, name: "Mr. Anwar Hossain Kamal", role: "Director" },
  { sl: 7, name: "Mr. Diderul Islam Dider", role: "Director" },
  { sl: 8, name: "Dr. Ahmed Shakil Hashmi", role: "Director" },
  { sl: 9, name: "Dr. Bilkis Parvin", role: "Director" },
  { sl: 10, name: "Mr. Shah Muhammad Mustofa Noor", role: "Founding Director" },
  { sl: 11, name: "Md. Mazharul Islam Bhuiya", role: "Founding Director" },
  { sl: 12, name: "Mr. Khandaker Imtiyaz Habib", role: "Founding Director", photo: pImtiaz.url },
  { sl: 13, name: "Mr. Matiur Rahman", role: "Founding Director" },
  { sl: 14, name: "Mr. Hasan Jamil", role: "Founding Director" },
  { sl: 15, name: "Mr. Razuan Ahmed Shuvro", role: "Founding Director" },
  { sl: 16, name: "Ms. Tanjila Akter", role: "Director" },
  { sl: 17, name: "Mr. Abdul Jabbar Selim", role: "Director" },
  { sl: 18, name: "Mr. Shahidul Islam Shahid", role: "Director" },
  { sl: 19, name: "Ms. Jannatun Nusra", role: "Director" },
  { sl: 20, name: "Mr. Habibur Rahman Milon", role: "Director" },
  { sl: 21, name: "Md. Sahadat Hossan Somel", role: "Director" },
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
