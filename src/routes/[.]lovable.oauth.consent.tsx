import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type AuthorizationDetails = {
  client?: { name?: string };
  redirect_url?: string;
  redirect_to?: string;
};

type OAuthAuth = {
  getAuthorizationDetails: (authorizationId: string) => Promise<{ data: AuthorizationDetails | null; error: Error | null }>;
  approveAuthorization: (authorizationId: string) => Promise<{ data: AuthorizationDetails | null; error: Error | null }>;
  denyAuthorization: (authorizationId: string) => Promise<{ data: AuthorizationDetails | null; error: Error | null }>;
};

const oauth = supabase.auth.oauth as unknown as OAuthAuth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({
    authorization_id: typeof search.authorization_id === "string" ? search.authorization_id : "",
  }),
  beforeLoad: async ({ search }) => {
    if (!search.authorization_id) throw new Error("Missing authorization request.");
    const { data } = await supabase.auth.getSession();
    if (!data.session) throw redirect({ to: "/" });
  },
  loader: async ({ search }) => {
    const { data, error } = await oauth.getAuthorizationDetails(search.authorization_id);
    if (error) throw error;
    const destination = data?.redirect_url ?? data?.redirect_to;
    if (destination && !data?.client) throw redirect({ href: destination });
    return data;
  },
  component: ConsentPage,
  errorComponent: () => (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-16">
      <p className="rounded-xl border border-border bg-card p-6 text-muted-foreground">
        This connection request could not be loaded. Please return to the app that started the connection and try again.
      </p>
    </main>
  ),
});

function ConsentPage() {
  const details = Route.useLoaderData();
  const { authorization_id: authorizationId } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientName = details?.client?.name ?? "this app";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const result = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (result.error) {
      setError("We could not complete that request. Please try again.");
      setBusy(false);
      return;
    }
    const destination = result.data?.redirect_url ?? result.data?.redirect_to;
    if (!destination) {
      setError("No return address was provided for this connection request.");
      setBusy(false);
      return;
    }
    window.location.assign(destination);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <section className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Account connection</p>
        <h1 className="mt-3 text-3xl font-extrabold text-primary">Connect {clientName}?</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          This gives {clientName} permission to use the school’s read-only information tools while you are signed in.
        </p>
        {error && <p role="alert" className="mt-5 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" disabled={busy} onClick={() => decide(true)} className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground disabled:opacity-60">
            {busy ? "Working…" : "Approve"}
          </button>
          <button type="button" disabled={busy} onClick={() => decide(false)} className="rounded-lg border border-border px-5 py-3 font-semibold text-foreground disabled:opacity-60">
            Deny
          </button>
        </div>
      </section>
    </main>
  );
}