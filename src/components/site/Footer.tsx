import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
const logo = "/logo.png";
import { VisitCounter } from "./VisitCounter";
import { ObfuscatedEmail } from "./ObfuscatedEmail";

export function Footer() {
  return (
    <footer className="bg-[image:var(--gradient-navy)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3"><img src={logo} alt="" width={44} height={44} className="h-11 w-11 rounded bg-white/10 p-1" /><div className="font-extrabold leading-tight"><span className="text-white">John Amos</span> <span className="text-accent">International</span> <span className="text-white">School</span></div></div>
          <p className="text-sm leading-relaxed text-primary-foreground/75">The first absolute English Medium School in Mymensingh, following the Cambridge curriculum.</p>
          <div className="text-xs text-primary-foreground/70"><VisitCounter /></div>
          <div className="flex gap-3 pt-2"><a href="https://www.facebook.com/Johnamoscentre/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-accent"><Facebook className="h-4 w-4" /></a><a href="https://www.youtube.com/@JAISTV2025/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-accent"><Youtube className="h-4 w-4" /></a></div>
        </div>
        <div><h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Explore</h4><ul className="space-y-2 text-sm"><li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">About Us</Link></li><li><Link to="/academics" className="text-primary-foreground/80 hover:text-accent">Academics</Link></li><li><Link to="/campus" className="text-primary-foreground/80 hover:text-accent">Campus</Link></li><li><Link to="/admissions" className="text-primary-foreground/80 hover:text-accent">Admissions</Link></li><li><Link to="/blog" className="text-primary-foreground/80 hover:text-accent">Blog</Link></li></ul></div>
        <div><h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Reach Us</h4><ul className="space-y-3 text-sm"><li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-accent" /> 19/D Shaheb Ali Road, Mymensingh 2200</li><li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-accent" /> <a href="tel:+88002997710831" className="hover:text-accent">02997710831</a></li><li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-accent" /> <ObfuscatedEmail encoded="aW5mb0Bqb2huYW1vc2JkLmNvbQ==" className="hover:text-accent" /></li></ul></div>
        <div><h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">School Hours</h4><ul className="space-y-2 text-sm text-primary-foreground/80"><li>Sunday – Thursday</li><li>8:00 AM – 2:30 PM</li><li className="pt-2 text-primary-foreground/60">Friday: Closed</li><li>Saturday: ECA Activities</li></ul></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6 lg:px-8">© {new Date().getFullYear()} John Amos International School. All rights reserved.</div></div>
    </footer>
  );
}
