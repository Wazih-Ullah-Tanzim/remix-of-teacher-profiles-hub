import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { galleryCategories } from "@/lib/galleries";

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about", label: "About",
    children: [
      { to: "/about", label: "About Us" },
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
      { to: "/academic-calendar", label: "Academic Calendar" },
      { to: "/faculty", label: "Our Faculty" },
      { to: "/counseling", label: "Counseling" },
      { to: "/bulletin", label: "Bulletin" },
      { to: "/projects", label: "Projects" },
      { to: "/language-club", label: "Language Club" },
      { to: "/english-courses", label: "IELTS & Spoken English" },
      { to: "/international-affairs", label: "International Affairs" },
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
    to: "/blog", label: "JAIS Life",
    children: [
      { to: "/facilities", label: "Facilities" },
      { to: "/eca-clubs", label: "ECA Clubs & Activities" },
      { to: "/yearbook", label: "JAIS Yearbook" },
      { to: "/blog", label: "Blog" },
      { to: "/alumni", label: "Alumni Association" },
    ],
  },
  {
    to: "/gallery", label: "Gallery",
    children: [
      { to: "/gallery", label: "All Galleries" },
      ...galleryCategories.flatMap((c) => c.items.map((i) => ({ to: `/gallery/${i.slug}`, label: `${c.label} · ${i.label}` }))),
    ],
  },
  { to: "/news-notice", label: "News" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="John Amos International School logo" width={44} height={44} className="h-11 w-11" />
          <div className="leading-tight">
            <div className="text-base font-extrabold tracking-tight text-primary">John Amos</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">International School</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) =>
            n.children ? (
              <div key={n.label} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary">
                  {n.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] -translate-y-2 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-[var(--shadow-elegant)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {n.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      activeProps={{ className: "bg-secondary text-primary font-semibold" }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {n.label}
              </Link>
            ),
          )}
          <Link to="/admissions" className="ml-2">
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
            {nav.map((n) =>
              n.children ? (
                <div key={n.label} className="border-b border-border/50 py-1">
                  <button
                    onClick={() => setMobileOpen((v) => (v === n.label ? null : n.label))}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-primary"
                  >
                    {n.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpen === n.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileOpen === n.label && (
                    <div className="ml-3 flex flex-col border-l-2 border-accent/50 pl-3">
                      {n.children.map((c) => (
                        <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-foreground/75 hover:text-primary">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "text-primary font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ),
            )}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2">
              <Button variant="hero" className="w-full">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
