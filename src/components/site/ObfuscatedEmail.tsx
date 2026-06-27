import { useEffect, useState } from "react";
import { decodeEmail } from "@/lib/form-security";

// Renders an email decoded from base64 on the client so the plain address
// doesn't appear in the HTML source. SSR output shows a placeholder.
export function ObfuscatedEmail({
  encoded,
  className,
  subject,
}: {
  encoded: string;
  className?: string;
  subject?: string;
}) {
  const [email, setEmail] = useState<string>("");
  useEffect(() => setEmail(decodeEmail(encoded)), [encoded]);
  if (!email) return <span className={className} aria-label="email address">contact us</span>;
  const href = subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
  return (
    <a href={href} className={className}>
      {email}
    </a>
  );
}
