interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,165,0,0.3), transparent 45%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {eyebrow && (
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</div>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">{subtitle}</p>}
      </div>
    </section>
  );
}
