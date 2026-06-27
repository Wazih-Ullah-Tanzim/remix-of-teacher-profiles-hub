import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Globe2, Sparkles, ShieldCheck, BookOpen, Trophy, Quote } from "lucide-react";
import heroImg from "@/assets/school-hero.jpg";
import classroomImg from "@/assets/classroom.jpg";
import studentsImg from "@/assets/students.jpg";
import playgroundImg from "@/assets/playground.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Counter } from "@/components/site/Counter";
import { MapEmbed } from "@/components/site/MapEmbed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "John Amos International School — Cambridge English Medium School in Mymensingh" },
      { name: "description", content: "First absolute English Medium Cambridge curriculum school in Mymensingh, Bangladesh. Modern campus, expert faculty, holistic learning." },
      { property: "og:title", content: "John Amos International School" },
      { property: "og:description", content: "Cambridge curriculum English medium school in Mymensingh, Bangladesh." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.3), transparent 40%), radial-gradient(circle at 85% 75%, oklch(0.72 0.18 50 / 0.5), transparent 45%)",
        }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" /> First in Mymensingh
            </div>
            <h1 className="animate-fade-up delay-100 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              An Absolute <span className="text-accent">English Medium</span> School.
            </h1>
            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              John Amos International School follows the Cambridge curriculum exclusively — built for curious young minds in a modern, elegant Mymensingh campus.
            </p>
            <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
              <Link to="/admissions"><Button variant="hero" size="xl">Apply for Admission <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link to="/contact"><Button variant="outlineLight" size="xl">Get in Touch</Button></Link>
            </div>
            <div className="animate-fade-up delay-500 mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6 text-sm">
              <div><div className="text-2xl font-extrabold text-accent">100%</div><div className="text-primary-foreground/70">Cambridge</div></div>
              <div><div className="text-2xl font-extrabold text-accent">2023</div><div className="text-primary-foreground/70">Established</div></div>
              <div><div className="text-2xl font-extrabold text-accent">1:12</div><div className="text-primary-foreground/70">Class ratio</div></div>
            </div>
          </div>
          <div className="relative animate-scale-in delay-200">
            <div className="absolute -inset-6 rounded-3xl bg-accent/30 blur-3xl animate-float" />
            <div className="img-zoom relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] ring-1 ring-white/10">
              <img src={heroImg} alt="John Amos International School campus" width={1536} height={1024} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: 9, suffix: "+", label: "Expert Teachers" },
                { n: 280, suffix: "+", label: "Students Enrolled" },
                { n: 3, suffix: "+", label: "Years of Excellence" },
                { n: 95, suffix: "%", label: "Cambridge Pass Rate" },
              ].map((c) => (
                <div key={c.label} className="text-center">
                  <div className="text-5xl font-extrabold text-primary">
                    <Counter to={c.n} suffix={c.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={classroomImg} alt="Smart classroom at John Amos" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            <div>
              <SectionHeader
                eyebrow="Welcome"
                align="left"
                title="First Time Ever in Mymensingh City"
                subtitle="John Amos International School is the first absolute English Medium School in Mymensingh, following only the Cambridge curriculum. Established in late 2023 and housed in an elegant multi-storey building in the heart of the city."
              />
              <p className="mt-6 text-muted-foreground">
                The charming building and interiors have been recently modernised and refurbished — the perfect location for learners to study in a relaxed, friendly and informal atmosphere.
              </p>
              <Link to="/about" className="mt-8 inline-flex"><Button variant="navy" size="lg">More About Us <ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="mx-auto h-10 w-10 text-accent" />
          <blockquote className="mt-6 text-2xl font-medium italic leading-relaxed text-primary sm:text-3xl">
            “If, in each hour, a man could learn a single fragment of some branch of knowledge, a single rule of some mechanical art… what a vast stock of learning he might lay by.”
          </blockquote>
          <div className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-accent">— John Amos Comenius</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why John Amos"
            title="A Complete Learning Environment for Future Leaders"
            subtitle="A safe, inspiring and modern learning environment designed to nurture creativity, confidence, and academic excellence."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: GraduationCap, title: "Prime Campus & Modern Infrastructure", points: [
                "World-class infrastructure with spacious, comfortable, air-conditioned classrooms.",
                "Well-equipped computer lab, smart audio-visual classrooms, indoor facilities.",
                "Library, WiFi, cafeteria, and teacher resource center."
              ]},
              { n: "02", icon: ShieldCheck, title: "Peaceful Learning Environment", points: [
                "Located in a quiet residential area, ideal for focused study.",
                "Town centre and amenities only 5 minutes away.",
                "Close to the Brahmaputra riverside park and marketplace."
              ]},
              { n: "03", icon: Sparkles, title: "Student-Centered Facilities & Care", points: [
                "Creative campus with playgrounds, resting areas and a sick room.",
                "Planned study materials and engaging spaces for young learners.",
                "Safe surroundings that inspire curiosity, creativity and confidence."
              ]},
            ].map((f) => (
              <div key={f.n} className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-accent)]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground shadow-[var(--shadow-accent)]">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-primary/15 group-hover:text-accent/40">{f.n}</span>
                </div>
                <h3 className="text-xl font-bold text-primary">{f.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {f.points.map((p, i) => (
                    <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="The Experience"
                align="left"
                title="Our Campus, Facilities & Learning Experience"
                subtitle="From smart classrooms to creative play, every corner is designed to help children thrive."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: BookOpen, label: "Cambridge Curriculum" },
                  { icon: Globe2, label: "Global Standards" },
                  { icon: Trophy, label: "Holistic Growth" },
                  { icon: ShieldCheck, label: "Safe & Caring" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 rounded-xl bg-background p-4 shadow-[var(--shadow-card)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{b.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/campus" className="mt-8 inline-flex"><Button variant="navy" size="lg">Explore Campus <ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={studentsImg} alt="Students at John Amos" loading="lazy" width={1200} height={800} className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
              <img src={playgroundImg} alt="School playground" loading="lazy" width={1200} height={800} className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[image:var(--gradient-navy)] py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Give your child the Cambridge advantage.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">Admissions are now open. Visit our campus or apply online to begin your child's journey with John Amos International School.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/admissions"><Button variant="hero" size="xl">Start Application</Button></Link>
            <Link to="/contact"><Button variant="outlineLight" size="xl">Book a Visit</Button></Link>
          </div>
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Watch" title="Life at John Amos" subtitle="A glimpse into our campus, classrooms and community." />
          <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-border shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/icBcFiVScHU"
              title="John Amos International School"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>
      <MapEmbed />
    </>
  );
}
