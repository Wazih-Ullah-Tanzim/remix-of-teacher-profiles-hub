import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestIP } from "@tanstack/react-start/server";

type AdmissionInput = {
  studentName: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  previousSchool?: string;
  session: "2026-2027";
  phone: string;
  guardianEmail?: string;
  fullAddress: string;
  city: string;
  country: string;
  message?: string;
  website?: string;
  startedAt: number;
};

type InfoFormInput = {
  formType: "Career Application" | "Instructor Registration";
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  details: Record<string, string | undefined>;
  website?: string;
  startedAt: number;
};

const clean = (value: unknown, max = 500) =>
  String(value ?? "")
    .replace(/[<>]/g, "")
    .replace(/[\r\n]{3,}/g, "\n\n")
    .trim()
    .slice(0, max);

const requireField = (value: string, label: string, max = 160) => {
  const text = clean(value, max);
  if (!text) throw new Error(`${label} is required.`);
  return text;
};

async function sendEmail({ to, subject, text }: { to: string; subject: string; text: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: "RESEND_API_KEY is not configured" };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "John Amos Website <no-reply@johnamosbd.com>",
      to,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.error("[Email] Delivery failed", response.status, body);
    return { sent: false, reason: "Email provider rejected the message" };
  }

  return { sent: true };
}

function guardAgainstBots(startedAt: number, honeypot?: string) {
  if (clean(honeypot, 80)) throw new Error("Submission blocked.");
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) {
    throw new Error("Please review the form and submit again.");
  }
}

export const submitAdmissionApplication = createServerFn({ method: "POST" })
  .inputValidator((data: AdmissionInput) => data)
  .handler(async ({ data }) => {
    guardAgainstBots(data.startedAt, data.website);

    const studentName = requireField(data.studentName, "Student name");
    const fatherName = requireField(data.fatherName, "Father's name");
    const motherName = requireField(data.motherName, "Mother's name");
    const birthDate = requireField(data.birthDate, "Birth date", 20);
    const phone = requireField(data.phone, "Phone number", 40);
    const fullAddress = requireField(data.fullAddress, "Full address", 700);
    const city = requireField(data.city, "City", 80);
    const country = requireField(data.country, "Country", 80);
    const guardianEmail = clean(data.guardianEmail, 160) || null;
    const previousSchool = clean(data.previousSchool, 180) || null;
    const message = clean(data.message, 1200) || null;

    if (data.session !== "2026-2027") throw new Error("Invalid admission session.");
    if (!/^\+?[0-9\s().-]{7,24}$/.test(phone)) throw new Error("Please enter a valid phone number.");
    if (guardianEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guardianEmail)) throw new Error("Please enter a valid email address.");

    const request = getRequest();
    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const userAgent = request.headers.get("user-agent") ?? null;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("admission_applications").insert({
      student_name: studentName,
      father_name: fatherName,
      mother_name: motherName,
      birth_date: birthDate,
      previous_school: previousSchool,
      session: "2026-2027",
      phone,
      guardian_email: guardianEmail,
      full_address: fullAddress,
      city,
      country,
      message,
      website: null,
      user_agent: userAgent,
    });

    if (error) {
      console.error("[Admission] Insert failed", error.message);
      throw new Error("Could not submit your application right now. Please try again.");
    }

    await sendEmail({
      to: "admission@johnamosbd.com",
      subject: `New admission application: ${studentName} (${data.session})`,
      text: [
        "New admission application received from johnamosbd.com",
        `Student: ${studentName}`,
        `Father: ${fatherName}`,
        `Mother: ${motherName}`,
        `Birth date: ${birthDate}`,
        `Previous school: ${previousSchool ?? "N/A"}`,
        `Session: ${data.session}`,
        `Phone: ${phone}`,
        `Guardian email: ${guardianEmail ?? "N/A"}`,
        `Address: ${fullAddress}`,
        `City/Country: ${city}, ${country}`,
        `Message: ${message ?? "N/A"}`,
        `IP: ${ip}`,
        `User agent: ${userAgent ?? "N/A"}`,
      ].join("\n"),
    });

    return { ok: true };
  });

export const submitInfoForm = createServerFn({ method: "POST" })
  .inputValidator((data: InfoFormInput) => data)
  .handler(async ({ data }) => {
    guardAgainstBots(data.startedAt, data.website);
    const name = requireField(data.name, "Name");
    const email = requireField(data.email, "Email", 160);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please enter a valid email address.");

    const request = getRequest();
    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const details = Object.entries(data.details)
      .map(([key, value]) => `${key}: ${clean(value, 500) || "N/A"}`)
      .join("\n");

    await sendEmail({
      to: "info@johnamosbd.com",
      subject: `${data.formType}: ${clean(data.subject || name, 160)}`,
      text: [
        `${data.formType} submitted from johnamosbd.com`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${clean(data.phone, 60) || "N/A"}`,
        details,
        `IP: ${ip}`,
        `User agent: ${request.headers.get("user-agent") ?? "N/A"}`,
      ].join("\n"),
    });

    return { ok: true };
  });

export const incrementVisitCounter = createServerFn({ method: "POST" }).handler(async () => {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin.rpc("increment_site_visit");
    if (error) throw error;
    return { total: Number(data ?? 0) };
  } catch (error) {
    console.error("[Visits] Counter failed", error);
    return { total: null };
  }
});
