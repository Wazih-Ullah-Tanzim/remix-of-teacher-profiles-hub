// Spam + bot protection utilities for all public forms.
// - Honeypot field (`_gotcha`) — silently block when filled.
// - Rate limit per form via localStorage (default 10 minutes).
// - Email obfuscation (base64) so plain emails don't appear in HTML source.

export const HONEYPOT_NAME = "_gotcha";

const RL_PREFIX = "jais_rl_";
export const DEFAULT_COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes

export function isHoneypotFilled(form: HTMLFormElement): boolean {
  const fd = new FormData(form);
  return String(fd.get(HONEYPOT_NAME) || "").trim() !== "";
}

export function getRemainingCooldown(formKey: string, cooldownMs = DEFAULT_COOLDOWN_MS): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(RL_PREFIX + formKey);
    if (!raw) return 0;
    const last = parseInt(raw, 10);
    if (!Number.isFinite(last)) return 0;
    const remaining = cooldownMs - (Date.now() - last);
    return remaining > 0 ? remaining : 0;
  } catch {
    return 0;
  }
}

export function markSubmitted(formKey: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(RL_PREFIX + formKey, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function formatWait(ms: number): string {
  const seconds = Math.ceil(ms / 1000);
  if (seconds < 60) return `Please wait ${seconds} second${seconds === 1 ? "" : "s"} before submitting again.`;
  const minutes = Math.ceil(seconds / 60);
  return `Please wait ${minutes} minute${minutes === 1 ? "" : "s"} before submitting again.`;
}

/**
 * Guard a form submission. Returns true when the submission should proceed.
 * Shows a toast and blocks when honeypot tripped or cooldown active.
 */
export function guardSubmit(
  form: HTMLFormElement,
  formKey: string,
  toastFn: (msg: string) => void,
  cooldownMs = DEFAULT_COOLDOWN_MS,
): boolean {
  if (isHoneypotFilled(form)) return false; // silently block bots
  const remaining = getRemainingCooldown(formKey, cooldownMs);
  if (remaining > 0) {
    toastFn(formatWait(remaining));
    return false;
  }
  return true;
}

// Hidden honeypot input props (spread onto an <input />).
export const honeypotInputProps = {
  type: "text" as const,
  name: HONEYPOT_NAME,
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  style: { position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 } as const,
};

// --- Email obfuscation ----------------------------------------------------
// Encode at build time with encodeEmail("info@example.com") and render via <ObfuscatedEmail encoded="..." />.
export function encodeEmail(email: string): string {
  if (typeof window === "undefined") {
    return Buffer.from(email, "utf-8").toString("base64");
  }
  return window.btoa(email);
}

export function decodeEmail(encoded: string): string {
  try {
    if (typeof window === "undefined") return Buffer.from(encoded, "base64").toString("utf-8");
    return window.atob(encoded);
  } catch {
    return "";
  }
}
