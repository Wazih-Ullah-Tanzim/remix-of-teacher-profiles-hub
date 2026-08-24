import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Quote } from "lucide-react";
import chairmanPortrait from "@/assets/chairman-dr-helal-uddin.jpeg.asset.json";

export const Route = createFileRoute("/chairmans-message")({
  head: () => ({
    meta: [
      { title: "Chairman's Message — John Amos International School" },
      { name: "description", content: "A welcome message from Dr. Abul Khaer Mohammad Helal Uddin, Chairman of John Amos International School." },
      { property: "og:title", content: "Chairman's Message — John Amos International School" },
      { property: "og:description", content: "A welcome message from the Chairman of John Amos International School." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="From the Chairman" title="A message of welcome and purpose." />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
          <div className="img-zoom animate-fade-up overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <img src={chairmanPortrait.url} alt="Dr. Abul Khaer Mohammad Helal Uddin, Chairman" className="aspect-[3/4] w-full object-cover" />
            <div className="bg-primary p-5 text-primary-foreground">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Chairman</div>
              <div className="mt-1 text-lg font-extrabold">Dr. Abul Khaer Mohammad Helal Uddin</div>
            </div>
          </div>
          <div className="animate-fade-up delay-200">
            <Quote className="h-12 w-12 text-accent" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              Welcome to John Amos International School, where we blend a world-class Cambridge education with holistic personal development. Our dynamic and inclusive learning environment empowers students to flourish academically, culturally, and socially.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              By offering globally recognized qualifications, we ensure our graduates are exceptionally well-prepared for prestigious universities worldwide. We are steadfastly dedicated to cultivating thoughtful, compassionate, and globally-minded individuals.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We warmly invite you to join our vibrant community to build a brighter future together.
            </p>
            <div className="mt-8 border-l-4 border-accent pl-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Warm regards, Dr. Abul Khaer Mohammad Helal Uddin, Chairman</div>
          </div>
        </div>
      </section>
    </>
  );
}