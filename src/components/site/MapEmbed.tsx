import { MapPin } from "lucide-react";

export function MapEmbed() {
  return (
    <section className="border-t border-border bg-secondary/70 py-14" aria-label="John Amos International School location map">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Find Us</div>
            <h2 className="text-2xl font-extrabold text-primary">John Amos International School, Mymensingh</h2>
          </div>
        </div>
        <div className="glow-image overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
          <iframe
            title="John Amos International School map"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5491.613374679975!2d90.399598784385!3d24.757309791058535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x37564f1c27ae2be5%3A0x3b4b8303eb1c4d80!2sJohn%20Amos%20International%20School%2C%2019%2FD%20Shaheb%20Ali%20Rd%2C%20Mymensingh%202200!3m2!1d24.7592793!2d90.4017607!5e0!3m2!1sen!2sbd!4v1782488573098!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-[380px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
