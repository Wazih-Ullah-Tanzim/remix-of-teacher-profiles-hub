import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, Shield, Music, Globe, Palette, Clock } from "lucide-react";
import swimmingPoolsideAsset from "@/assets/swimming-session-poolside.jpg.asset.json";
import swimmingPoolOverviewAsset from "@/assets/swimming-session-pool-overview.jpg.asset.json";
import swimmingWaterPlayAsset from "@/assets/swimming-session-water-play.jpg.asset.json";
import swimmingGreetingAsset from "@/assets/swimming-session-greeting.jpg.asset.json";
import swimmingInaugurationAsset from "@/assets/swimming-session-inauguration.jpg.asset.json";
import musicClassPerformanceAsset from "@/assets/eca-music-class-performance.jpg.asset.json";
import artLotusPrizeAsset from "@/assets/eca-art-lotus-prize.jpg.asset.json";
import artLotusDrawingAsset from "@/assets/eca-art-lotus-drawing.jpg.asset.json";
import artClassroomAsset from "@/assets/eca-art-classroom.jpg.asset.json";
import musicCircleAsset from "@/assets/eca-music-circle.jpg.asset.json";

export const Route = createFileRoute("/eca-clubs")({
  head: () => ({
    meta: [
      { title: "ECA Clubs & Activities — John Amos International School" },
      { name: "description", content: "After-class clubs for every age group — Chef, Martial Art, Musician, Language and Artistic Mind." },
      { property: "og:title", content: "ECA Clubs & Activities — John Amos International School" },
      { property: "og:description", content: "Explore JAIS extracurricular clubs and swimming activities for students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const classes = [
  { slug: "play", label: "Play Group", tone: "early" },
  { slug: "nursery", label: "Nursery", tone: "early" },
  { slug: "kg", label: "KG", tone: "early" },
  { slug: "std-1", label: "Std I", tone: "junior" },
  { slug: "std-2", label: "Std II", tone: "junior" },
  { slug: "std-3", label: "Std III", tone: "senior" },
  { slug: "std-4", label: "Std IV", tone: "senior" },
  { slug: "std-5", label: "Std V", tone: "senior" },
] as const;

type Tone = (typeof classes)[number]["tone"];

const clubs = [
  { name: "Chef Club", icon: ChefHat, theme: "Cooking & Nutrition",
    desc: { early: "Tiny chefs explore colours, smells and tastes through safe, no-cook recipes and fruit art.",
            junior: "Young chefs learn kitchen safety, simple measuring and prepare healthy snacks for the class.",
            senior: "Students plan balanced menus, follow recipes independently and learn the science of cooking." } },
  { name: "Martial Art", icon: Shield, theme: "Discipline & Self-Defense",
    desc: { early: "Playful movement, balance games and the very first bowing rituals of respect.",
            junior: "Foundational stances, basic blocks and the values of focus, courtesy and self-control.",
            senior: "Structured forms, partner drills and age-appropriate self-defense techniques with a coach." } },
  { name: "Musician Club", icon: Music, theme: "Instruments & Vocals",
    desc: { early: "Rhythm games, nursery rhymes and shakers — exploring sound through play.",
            junior: "Group singing, keyboard basics and an introduction to reading simple notation.",
            senior: "Instrument streams (keyboard, guitar, percussion), choir and small ensemble performances." } },
  { name: "Language Club", icon: Globe, theme: "Speaking & Debate",
    desc: { early: "Story time, picture talk and confidence-building circle conversations.",
            junior: "Show-and-tell, guided storytelling and friendly speech contests in English and Bangla.",
            senior: "Structured debate, public speaking practice and weekly current-affairs discussions." } },
  { name: "Artistic Mind", icon: Palette, theme: "Drawing & Painting",
    desc: { early: "Finger paint, collage and free expression with bright primary colours.",
            junior: "Sketching basics, colour theory and themed projects from nature and festivals.",
            senior: "Drawing from observation, watercolour, mixed media and a year-end exhibition." } },
] as const;

const swimmingMoments = [
  { src: swimmingInaugurationAsset.url, caption: "Swimming Session inaugural ceremony" },
  { src: swimmingGreetingAsset.url, caption: "A warm welcome for young swimmers" },
  { src: swimmingPoolsideAsset.url, caption: "Poolside learning and water confidence" },
  { src: swimmingPoolOverviewAsset.url, caption: "Students enjoying their swimming session" },
  { src: swimmingWaterPlayAsset.url, caption: "Guided water activities at the pool" },
];

const artMusicMoments = [
  { src: musicClassPerformanceAsset.url, caption: "Music class performance and listening session" },
  { src: musicCircleAsset.url, caption: "Learning rhythm and melody together" },
  { src: artLotusPrizeAsset.url, caption: "First prize artwork — water lilies" },
  { src: artLotusDrawingAsset.url, caption: "Young artists at work" },
  { src: artClassroomAsset.url, caption: "Creative drawing session in the art classroom" },
];

function ClubGrid({ tone }: { tone: Tone }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {clubs.map((c, i) => {
        const Icon = c.icon;
        return (
          <article
            key={c.name}
            className="group animate-fade-in rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-primary">{c.name}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.theme}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{c.desc[tone]}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-bold text-primary">
              <Clock className="h-3.5 w-3.5" /> Every Saturday
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="JAIS Life"
        title="ECA Clubs & Activities"
        subtitle="Beyond books — clubs that build character, creativity and confidence."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Pick a Class" title="Clubs for every age group" />
          <Tabs defaultValue="play" className="mt-10">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-muted/40 p-2">
              {classes.map((c) => (
                <TabsTrigger
                  key={c.slug}
                  value={c.slug}
                  className="rounded-xl px-4 py-2 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {classes.map((c) => (
              <TabsContent key={c.slug} value={c.slug} className="mt-8 animate-fade-in">
                <ClubGrid tone={c.tone} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <section id="swimming-club" className="scroll-mt-28 bg-secondary/35 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ECA Clubs" title="Swimming Club" subtitle="Building water confidence, movement skills and joyful memories together." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {swimmingMoments.map((moment, index) => (
              <figure key={moment.caption} className={`overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] ${index === 0 ? "lg:col-span-2" : ""}`}>
                <img src={moment.src} alt={moment.caption} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition duration-300 hover:scale-[1.03]" />
                <figcaption className="px-4 py-3 text-sm font-semibold text-foreground">{moment.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section id="art-music-club" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ECA Clubs" title="Art & Music Club" subtitle="A creative space for students to draw, listen, learn and express themselves." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artMusicMoments.map((moment, index) => (
              <figure key={moment.caption} className={`overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] ${index === 0 ? "lg:col-span-2" : ""}`}>
                <img src={moment.src} alt={moment.caption} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition duration-300 hover:scale-[1.03]" />
                <figcaption className="px-4 py-3 text-sm font-semibold text-foreground">{moment.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
