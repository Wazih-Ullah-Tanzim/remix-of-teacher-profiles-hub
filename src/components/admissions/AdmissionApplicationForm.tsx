import { useEffect, useState } from "react";
import { FileText, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { guardSubmit, honeypotInputProps, markSubmitted } from "@/lib/form-security";

// Set this to false to immediately pause online admission applications during bot activity.
export const ADMISSION_APPLICATIONS_ENABLED = true;

const VERIFICATION_WAIT_SECONDS = 5;

export function AdmissionApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(VERIFICATION_WAIT_SECONDS);

  useEffect(() => {
    if (secondsLeft === 0) return;
    const timer = window.setTimeout(() => setSecondsLeft((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [secondsLeft]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!ADMISSION_APPLICATIONS_ENABLED) {
      toast.error("Online applications are temporarily unavailable. Please contact the admissions office.");
      return;
    }
    if (secondsLeft > 0) return;
    if (!guardSubmit(form, "admissions", (message) => toast.error(message))) return;

    const formData = new FormData(form);
    const fields: [string, string][] = [
      ["Student Full Name", String(formData.get("studentName") || "")],
      ["Father's Name", String(formData.get("fatherName") || "")],
      ["Mother's Name", String(formData.get("motherName") || "")],
      ["Date of Birth", String(formData.get("birthDate") || "")],
      ["Previous School", String(formData.get("previousSchool") || "")],
      ["Session", String(formData.get("session") || "2026-2027")],
      ["Phone Number", String(formData.get("phone") || "")],
      ["Full Address", String(formData.get("fullAddress") || "")],
      ["City", String(formData.get("city") || "")],
      ["Country", String(formData.get("country") || "Bangladesh")],
    ];
    const applicantName = fields[0]?.[1] || "New Applicant";
    const subject = `Admission Application 2026-2027 — ${applicantName}`;
    const body = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

    setLoading(true);
    markSubmitted("admissions");
    window.location.href = `mailto:admission@johnamosbd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app to send the application…");
    window.setTimeout(() => setLoading(false), 1200);
  };

  if (!ADMISSION_APPLICATIONS_ENABLED) {
    return <p className="mt-10 rounded-xl border border-border bg-card p-5 text-center text-sm font-semibold text-muted-foreground">Online applications are temporarily unavailable. Please contact the admissions office for assistance.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:grid-cols-2">
      <input {...honeypotInputProps} />
      <Field label="Student Full Name" name="studentName" required />
      <Field label="Father's Name" name="fatherName" required />
      <Field label="Mother's Name" name="motherName" required />
      <Field label="Date of Birth" name="birthDate" type="date" required />
      <Field label="Previous School" name="previousSchool" />
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">Session *</label>
        <select name="session" required defaultValue="2026-2027" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30">
          <option value="2026-2027">2026-2027</option>
        </select>
      </div>
      <Field label="Phone Number" name="phone" type="tel" required />
      <Field label="City" name="city" required />
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">Full Address *</label>
        <textarea name="fullAddress" required rows={3} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
      </div>
      <Field label="Country" name="country" required value="Bangladesh" />
      <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-border bg-secondary p-3 text-xs font-semibold text-primary">
        <ShieldCheck className="h-4 w-4 text-accent" /> Protected by a verification timer, honeypot filtering, and submission rate limiting.
      </div>
      <Button disabled={loading || secondsLeft > 0} type="submit" variant="hero" size="xl" className="sm:col-span-2">
        <FileText className="mr-2 h-5 w-5" />
        {loading ? "Opening email…" : secondsLeft > 0 ? `Verification ready in ${secondsLeft}s` : "Submit Application"}
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text", required, value }: { label: string; name: string; type?: string; required?: boolean; value?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-primary">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input name={name} type={type} required={required} defaultValue={value} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
    </div>
  );
}