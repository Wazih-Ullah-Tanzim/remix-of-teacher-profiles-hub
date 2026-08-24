import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import feePoster from "@/assets/jais-fee-admission-policy.jpg.asset.json";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees & Payments — John Amos International School" },
      { name: "description", content: "View the John Amos International School admission and tuition fee information." },
      { property: "og:title", content: "Fees & Payments — John Amos International School" },
      { property: "og:description", content: "View admission and tuition fee information for John Amos International School." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Fees & Payments" subtitle="Admission and tuition information for John Amos International School." />
      <section className="bg-secondary py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <figure className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-elegant)] sm:p-3">
            <img src={feePoster.url} alt="John Amos International School admission schedule and fee policy" className="w-full rounded-xl object-contain" />
          </figure>
        </div>
      </section>
    </>
  );
}