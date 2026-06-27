import { Megaphone } from "lucide-react";

const items = [
  "📢 Admissions Open for 2026 — Play Group to Standard V",
  "🎉 Annual Pitha Utsob celebrated with parents on campus",
  "🏅 Cambridge Primary Checkpoint preparation begins",
  "📚 New IELTS & Spoken English batch starts next month",
  "🎁 Apply online and get a 10% discount on admission fees",
  "🌍 International Affairs Club launches student exchange",
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