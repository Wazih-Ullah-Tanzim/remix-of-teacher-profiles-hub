import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CalendarDays, Upload, Loader2, Image as ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/academic-calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar — John Amos International School" },
      { name: "description", content: "Term dates, holidays and key events for the academic year." },
    ],
  }),
  component: Page,
});

const terms = [
  { term: "Term 1", dates: "12 Jan – 28 Mar", events: ["First Day Welcome Assembly", "Parent Orientation", "Cultural Day"] },
  { term: "Term 2", dates: "13 Apr – 27 Jun", events: ["Pohela Boishakh", "Sports Week", "Mid-Year Reports"] },
  { term: "Term 3", dates: "20 Jul – 26 Sep", events: ["Independence Day Programme", "Science Fair", "Art Exhibition"] },
  { term: "Term 4", dates: "12 Oct – 18 Dec", events: ["Pitha Utsob", "Annual Concert", "Year-End Reports"] },
];

const BUCKET = "academic-calendar";

function Page() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function loadLatest() {
    setLoading(true);
    const { data, error } = await supabase.storage.from(BUCKET).list("", {
      limit: 100,
      sortBy: { column: "created_at", order: "desc" },
    });
    if (error) { setLoading(false); return; }
    const latest = data?.find((f) => f.name && !f.name.startsWith("."));
    if (latest) {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(latest.name, 60 * 60 * 24 * 7);
      setImageUrl(signed?.signedUrl ?? null);
    } else {
      setImageUrl(null);
    }
    setLoading(false);
  }

  useEffect(() => { loadLatest(); }, []);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file (PNG, JPG, WebP).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be under 10 MB.");
      return;
    }
    setUploading(true);
    const ext = file.name.split(".").pop() ?? "png";
    const path = `calendar-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });
    setUploading(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Academic calendar updated.");
    if (inputRef.current) inputRef.current.value = "";
    loadLatest();
  }

  return (
    <>
      <PageHero eyebrow="Calendar" title="Academic Calendar 2026" subtitle="A clear view of terms, key events and holidays for the year." />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Official Calendar" title="Full Academic Calendar" />
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            {loading ? (
              <div className="flex h-80 items-center justify-center text-muted-foreground">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Loading…
              </div>
            ) : imageUrl ? (
              <img src={imageUrl} alt="Academic Calendar" className="w-full object-contain" />
            ) : (
              <div className="flex h-80 flex-col items-center justify-center gap-3 text-muted-foreground">
                <ImageIcon className="h-10 w-10" />
                <p className="text-sm">No calendar uploaded yet. Use the form below to upload one.</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-extrabold text-primary">Upload calendar image</h3>
              <p className="text-sm text-muted-foreground">PNG, JPG or WebP — max 10 MB. The latest upload is shown above.</p>
            </div>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition hover:opacity-90">
              {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
              {uploading ? "Uploading…" : "Choose image"}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFile}
                disabled={uploading}
              />
            </label>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Terms" title="At a glance" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {terms.map((t, i) => (
              <div key={t.term} className="animate-fade-up tilt-card rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground"><CalendarDays className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{t.term}</div>
                    <div className="text-lg font-extrabold text-primary">{t.dates}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {t.events.map((e) => (
                    <li key={e} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />{e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
