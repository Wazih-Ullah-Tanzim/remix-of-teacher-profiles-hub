import { Megaphone } from "lucide-react";

const items = [
  "📢 Enrolment is now open for the 2026–2027 academic session!",
  "🇬🇧 Discover the first Cambridge English Medium curriculum in Mymensingh.",
  "📝 Register now at our official IELTS Mock Test Centre.",
  "🗣️ Improve your communication with our ongoing Spoken English courses.",
  "🏊 Enjoy extra-curricular activities and swimming classes every Saturday.",
  "🏫 Study in fully air-conditioned classrooms with smartboards and projectors.",
  "💻 Gain practical skills in our modern, state-of-the-art computer lab.",
  "🧸 Explore our safe and interactive playzone designed for young learners.",
];

export function NewsTicker() {
  const row = items.concat(items);
  return (
    <div className="relative z-40 flex items-stretch overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="flex shrink-0 items-center gap-2 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
        <Megaphone className="h-3.5 w-3.5 animate-pulse" /> Latest News
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap py-2 pl-8 text-sm">
          {row.map((t, i) => (
            <span key={i} className="text-primary-foreground/90">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}