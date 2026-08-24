import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SiteSlider } from "@/components/site/SiteSlider";
import julyAugustCalendar from "@/assets/academic-calendar-july-august-2026.jpg.asset.json";
import septemberOctoberCalendar from "@/assets/academic-calendar-september-october-2026.jpg.asset.json";
import novemberDecemberCalendar from "@/assets/academic-calendar-november-december-2026.jpg.asset.json";
import januaryFebruaryCalendar from "@/assets/academic-calendar-january-february-2027.jpg.asset.json";
import marchAprilCalendar from "@/assets/academic-calendar-march-april-2027.jpg.asset.json";
import mayJuneCalendar from "@/assets/academic-calendar-may-june-2027.jpg.asset.json";

export const Route = createFileRoute("/academic-calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar 2026–2027 | John Amos International School" },
      { name: "description", content: "Explore the John Amos International School academic calendar for 2026–2027, including term dates, holidays, examinations and key events." },
      { property: "og:title", content: "Academic Calendar 2026–2027 | John Amos International School" },
      { property: "og:description", content: "Term dates, holidays, examinations and key events for the 2026–2027 academic year." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const calendarPages = [
  { src: julyAugustCalendar.url, caption: "July – August 2026" },
  { src: septemberOctoberCalendar.url, caption: "September – October 2026" },
  { src: novemberDecemberCalendar.url, caption: "November – December 2026" },
  { src: januaryFebruaryCalendar.url, caption: "January – February 2027" },
  { src: marchAprilCalendar.url, caption: "March – April 2027" },
  { src: mayJuneCalendar.url, caption: "May – June 2027" },
];

const importantDates = [
  { month: "July 2026", dates: ["July 19, Sunday — Parents' Orientation & Book Festival (Important Day)"] },
  { month: "August 2026", dates: ["August 5, Wednesday — Mass Uprising Day", "August 12, Wednesday — Akheri Chahar Somba", "August 26, Wednesday — Siratunnabi (SAW) Celebration (Important Day)"] },
  { month: "September 2026", dates: ["September 4, Friday — Shuvo Janmasthami", "September 24, Thursday — Fateha-E-Yazdahm"] },
  { month: "October 2026", dates: ["October 17–22, Saturday–Thursday — Sri Sri Durga Puja", "October 25, Sunday — Sri Sri Laxmi Puja, Probarona Purnima"] },
  { month: "November 2026", dates: ["November 8, Sunday — Sri Sri Shyamapuja"] },
  { month: "December 2026", dates: ["December 16, Wednesday — Victory Day", "December 17–25, Thursday–Friday — Winter Vacation", "December 27, Sunday — Christmas Celebration"] },
  { month: "January 2027", dates: ["January 6, Wednesday — Shab-E-Miraj", "January 24, Sunday — Shab-E-Barat", "January 29, Friday — Excursion"] },
  { month: "February 2027", dates: ["February 11, Thursday — Sharaswati Puja", "February 14, Sunday — Happy Shib Ratri", "February 20, Saturday — Maghi Purnima", "February 21, Sunday — Martyr's Day"] },
  { month: "March 2027", dates: ["March 5, Friday — Jumu'atul-Wida", "March 6, Saturday — Shab-E-Qadr", "March 7–11, Sunday–Thursday — Eid-Ul-Fitr", "March 25, Thursday — Independence Day Celebration & Award Ceremony", "March 26, Friday — Independence Day"] },
  { month: "April 2027", dates: ["April 14, Wednesday — Bangla New Year / Pohela Boishakh", "April 15, Thursday — School off for all"] },
  { month: "May 2027", dates: ["May 1, Saturday — May Day", "May 14–19, Friday–Wednesday — Eid-Ul-Azha", "May 20, Thursday — Buddha Purnima"] },
  { month: "June 2027", dates: ["June 15, Tuesday — Holy Ashura", "June 25, Friday — 2nd Award Ceremony & Annual Function", "June 26, Saturday — School off for all"] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Calendar" title="Academic Calendar 2026 – 2027" subtitle="A clear view of terms, holidays, examinations and key events for the school year." />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Official Calendar" title="Full Academic Calendar" />
          <div className="mt-10">
            <SiteSlider images={calendarPages} height="h-[440px] sm:h-[620px] lg:h-[720px]" fit="contain" />
          </div>

          <div className="mt-20">
            <SectionHeader eyebrow="Key Dates" title="Important Dates & Events" />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {importantDates.map((group) => (
                <article key={group.month} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <h2 className="border-b border-border pb-3 text-lg font-extrabold text-primary">{group.month}</h2>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {group.dates.map((date) => (
                      <li key={date} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{date}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
