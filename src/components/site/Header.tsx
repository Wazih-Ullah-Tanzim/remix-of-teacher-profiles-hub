import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
const logo = "/logo.png";
import { Button } from "@/components/ui/button";

type NavItem = { to: string; label: string; children?: NavItem[] };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about", label: "About",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/about#mission-vision", label: "Mission, Vision & History of JAIS" },
      { to: "/founder-message", label: "Founder's Message" },
      { to: "/chairmans-message", label: "Chairman's Message" },
      { to: "/head-teacher-message", label: "Head Teacher's Message" },
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
      { to: "/academics/news", label: "News" },
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
    ],
  },
  { to: "/blog", label: "Blog" },
  {
    to: "/academics", label: "JAIS Life",
    children: [
      { to: "/facilities", label: "Facilities" },
      { to: "/gallery", label: "Gallery", children: [
        { to: "/gallery/first-award-ceremony", label: "First Award Ceremony" },
        { to: "/gallery/islamic-olympiad-season-3", label: "Islamic Olympiad Season 3" },
        { to: "/gallery/victory-day", label: "Victory Day" },
        { to: "/gallery/nobo-borsho-celebration", label: "Nobo Borsho Celebration" },
        { to: "/gallery/art-exhibition", label: "Art Exhebetion" },
        { to: "/gallery/food-party", label: "Food Party" },
        { to: "/gallery/class-party", label: "Class Party" },
        { to: "/gallery/sirat-un-nabi", label: "Sirat-Un-Nabi" },
        { to: "/gallery/parents-meeting", label: "Parents Meeting" },
        { to: "/gallery/excursion", label: "Excursion Program" },
      ]},
      { to: "/eca-clubs", label: "ECA Clubs", children: [
        { to: "/eca-clubs#swimming-club", label: "Swimming Club" },
        { to: "/eca-clubs#art-music-club", label: "Art & Music Club" },
      ]},
    ],
  },
];


function SmartLink({ item, className, onClick }: { item: NavItem; className?: string; onClick?: () => void }) {
  if (item.to.includes("#"))
    return <a href={item.to} onClick={onClick} className={className}>{item.label}</a>;
  return <Link to={item.to} onClick={onClick} className={className} activeProps={{ className: "bg-secondary text-primary font-semibold" }}>{item.label}</Link>;
}

function SubMenu({ items, flip, close }: { items: NavItem[]; flip: boolean; close: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <ul className={`min-w-[240px] rounded-xl border border-border bg-popover p-2 shadow-[var(--shadow-elegant)]`}>
      {items.map((c, i) => (
        <li key={c.to + c.label} className="relative" onMouseEnter={() => setOpenIdx(i)} onMouseLeave={() => setOpenIdx(null)}>
          <div className="flex items-center justify-between rounded-md hover:bg-secondary">
            <SmartLink item={c} onClick={c.children ? undefined : close} className="flex-1 px-3 py-2 text-sm text-foreground/80 hover:text-primary" />
            {c.children && <ChevronRight className="mr-2 h-4 w-4 text-muted-foreground" />}
          </div>
          {c.children && openIdx === i && (
            <div className={`absolute top-0 ${flip ? "right-full mr-1" : "left-full ml-1"} z-50`}>
              <SubMenu items={c.children} flip={flip} close={close} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileItems({ items, onClick }: { items: NavItem[]; onClick: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="ml-3 flex flex-col border-l-2 border-accent/50 pl-3">
      {items.map((c) => (
        <div key={c.to + c.label}>
          {c.children ? (
            <>
              <button onClick={() => setOpen((v) => v === c.label ? null : c.label)} className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground/80">
                {c.label}<ChevronDown className={`h-4 w-4 transition-transform ${open === c.label ? "rotate-180" : ""}`} />
              </button>
              {open === c.label && <MobileItems items={c.children} onClick={onClick} />}
            </>
          ) : (
            <SmartLink item={c} onClick={onClick} className="block rounded-md px-3 py-2 text-sm text-foreground/75 hover:text-primary" />
          )}
        </div>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(null);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

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

        <nav className="hidden items-center gap-0 lg:flex" onMouseLeave={scheduleClose}>
          {nav.map((n) => {
            if (!n.children) {
              return (
                <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} onMouseEnter={() => openMenu("__none__")} className="nav-underline rounded-md px-2 py-2 text-[12px] font-medium text-foreground/80 transition-colors hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
                  {n.label}
                </Link>
              );
            }
            const flip = n.label === "Gallery" || n.label === "JAIS Life" || n.label === "News";
            const isOpen = activeMenu === n.label;
            return (
              <div key={n.label} className="relative" onMouseEnter={() => openMenu(n.label)}>
                <button onClick={() => setActiveMenu(isOpen ? null : n.label)} className={`nav-underline flex items-center gap-1 rounded-md px-2 py-2 text-[12px] font-medium transition-colors hover:text-primary ${isOpen ? "text-primary" : "text-foreground/80"}`}>
                  {n.label}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className={`absolute top-full ${flip ? "right-0" : "left-0"} z-50 pt-2`}>
                    <div className="min-w-[260px] max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-popover p-2 shadow-[var(--shadow-elegant)]">
                      <MobileItems items={n.children} onClick={closeNow} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link to="/admissions" className="ml-2" onMouseEnter={() => openMenu("__none__")}>
            <Button variant="hero" size="sm">Apply Now</Button>
          </Link>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-4 py-3">
            {nav.map((n) => n.children ? (
              <div key={n.label} className="border-b border-border/50 py-1">
                <button onClick={() => setMobileOpen((v) => v === n.label ? null : n.label)} className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-primary">
                  {n.label}<ChevronDown className={`h-4 w-4 transition-transform ${mobileOpen === n.label ? "rotate-180" : ""}`} />
                </button>
                {mobileOpen === n.label && <MobileItems items={n.children} onClick={() => setOpen(false)} />}
              </div>
            ) : (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2">
              <Button variant="hero" className="w-full">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
