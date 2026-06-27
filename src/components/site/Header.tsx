import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/jais-emblem.png";
import { Button } from "@/components/ui/button";

type NavItem = { to: string; label: string; children?: NavItem[] };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about", label: "About",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/about#mission-vision", label: "Mission & Vision" },
      { to: "/about#history", label: "History of JAIS" },
      { to: "/head-teacher-message", label: "Message from Head Teacher" },
      { to: "/chairmans-message", label: "Chairman's Message" },
      { to: "/founder-message", label: "Founder's Message" },
      { to: "/board-of-directors", label: "Board of Directors" },
      { to: "/advisors", label: "Advisors" },
    ],
  },
  {
    to: "/academics", label: "Academics",
    children: [
      { to: "/academics", label: "Curriculum Overview" },
      { to: "/counseling", label: "Counseling", children: [
        { to: "/counseling/academic", label: "Academic" },
        { to: "/counseling/health", label: "Health" },
        { to: "/counseling/psychiatrist", label: "Psychiatrist" },
      ]},
      { to: "/bulletin", label: "Bulletin" },
      { to: "/academic-calendar", label: "Academic Calendar" },
      { to: "/faculty", label: "Our Faculty" },
      { to: "/projects", label: "Projects" },
    ],
  },
  {
    to: "/admissions", label: "Admissions",
    children: [
      { to: "/admissions", label: "Admissions" },
      { to: "/fees", label: "Fees & Payments" },
      { to: "/career", label: "Careers" },
      { to: "/instructor-registration", label: "Instructor Registration" },
    ],
  },
  { to: "/campus", label: "Campus" },
  {
    to: "/academics", label: "JAIS Life",
    children: [
      { to: "/academics", label: "Academics" },
      { to: "/facilities", label: "Facilities" },
      { to: "/eca-clubs", label: "ECA Clubs Activities" },
      { to: "/yearbook", label: "JAIS Yearbook" },
      { to: "/blog", label: "Blog" },
      { to: "/alumni", label: "Alumni Association" },
      { to: "/academic-calendar", label: "Academic Calendar" },
    ],
  },
  {
    to: "/gallery", label: "Gallery",
    children: [
      { to: "/gallery", label: "All Galleries" },
      { to: "/gallery/tour", label: "Tour", children: [
        { to: "/gallery/tour-domestic", label: "Domestic Trip", children: [{ to: "/gallery/excursion", label: "Excursion" }] },
        { to: "/gallery/tour-international", label: "International Trip", children: [{ to: "/gallery/international-excursion", label: "Excursion" }] },
      ]},
      { to: "/gallery/occasion", label: "Occasion", children: [
        { to: "/gallery/pohela-boishakh", label: "Pohela Boishakh" },
        { to: "/gallery/pitha-utsob", label: "Pitha Utsob" },
        { to: "/gallery/sirat-un-nabi", label: "Sirat-Un-Nabi" },
        { to: "/gallery/food-party", label: "Food Party" },
        { to: "/gallery/music-and-art", label: "Music & Art" },
      ]},
    ],
  },
  { to: "/news-notice", label: "News" },
];

function SmartLink({ item, className, onClick }: { item: NavItem; className?: string; onClick?: () => void }) {
  if (item.to.includes("#")) return <a href={item.to} onClick={onClick} className={className}>{item.label}</a>;
  return <Link to={item.to} onClick={onClick} className={className} activeProps={{ className: "bg-secondary text-primary font-semibold" }}>{item.label}</Link>;
}

function DesktopChildren({ items, level = 0, flip = false }: { items: NavItem[]; level?: number; flip?: boolean }) {
  const nestedPos = flip ? "absolute right-full top-0 mr-2" : "absolute left-full top-0 ml-2";
  const rootPos = flip ? "absolute right-0 top-full" : "absolute left-0 top-full";
  return <div className={`${level ? nestedPos : rootPos} invisible z-50 min-w-[250px] -translate-y-2 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-200 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100`}>
    {items.map((c) => <div key={c.to + c.label} className="group/menu relative">
      <SmartLink item={c} className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary" />
      {c.children && <><ChevronRight className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" /><DesktopChildren items={c.children} level={level + 1} flip={flip} /></>}
    </div>)}
  </div>;
}

function MobileItems({ items, onClick }: { items: NavItem[]; onClick: () => void }) {
  return <div className="ml-3 flex flex-col border-l-2 border-accent/50 pl-3">
    {items.map((c) => <div key={c.to + c.label}>
      <SmartLink item={c} onClick={c.children ? undefined : onClick} className="block rounded-md px-3 py-2 text-sm text-foreground/75 hover:text-primary" />
      {c.children && <MobileItems items={c.children} onClick={onClick} />}
    </div>)}
  </div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="John Amos International School logo" width={52} height={52} className="h-13 w-13 object-contain" />
          <div className="leading-[0.95]">
            <div className="text-lg font-black tracking-tight text-black">John Amos</div>
            <div className="text-[15px] font-black uppercase tracking-[0.08em] text-orange-500">International</div>
            <div className="text-lg font-black tracking-tight text-black">School</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) => n.children ? <div key={n.label} className="group/menu relative"><button className="flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary">{n.label}<ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/menu:rotate-180" /></button><DesktopChildren items={n.children} flip={n.label === "Gallery" || n.label === "JAIS Life"} /></div> : <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>{n.label}</Link>)}
          <Link to="/admissions" className="ml-2"><Button variant="hero" size="sm">Apply Now</Button></Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {open && <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background lg:hidden"><div className="flex flex-col px-4 py-3">{nav.map((n) => n.children ? <div key={n.label} className="border-b border-border/50 py-1"><button onClick={() => setMobileOpen((v) => v === n.label ? null : n.label)} className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-primary">{n.label}<ChevronDown className={`h-4 w-4 transition-transform ${mobileOpen === n.label ? "rotate-180" : ""}`} /></button>{mobileOpen === n.label && <MobileItems items={n.children} onClick={() => setOpen(false)} />}</div> : <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: n.to === "/" }}>{n.label}</Link>)}<Link to="/admissions" onClick={() => setOpen(false)} className="mt-2"><Button variant="hero" className="w-full">Apply Now</Button></Link></div></div>}
    </header>
  );
}
