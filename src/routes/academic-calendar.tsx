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
        </div>
      </section>
    </>
  );
}
