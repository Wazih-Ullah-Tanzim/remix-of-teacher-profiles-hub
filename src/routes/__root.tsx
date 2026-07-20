import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { MapEmbed } from "../components/site/MapEmbed";
import { NewsTicker } from "../components/site/NewsTicker";
import { Toaster } from "../components/ui/sonner";
import { FloatingWhatsApp } from "../components/site/FloatingWhatsApp";

function NotFoundComponent() { return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-foreground">404</h1><h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2><p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link></div></div></div>; }
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { console.error(error); const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]); return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1><p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Try again</button><a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Go home</a></div></div></div>; }

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "John Amos International School — Cambridge English Medium, Mymensingh" },
      { name: "description", content: "John Amos International School is a Cambridge curriculum English Medium school in Mymensingh with admissions, academics, campus life, gallery, blog and alumni resources." },
      { name: "keywords", content: "John Amos International School, JAIS, Cambridge curriculum, English Medium School Mymensingh, admissions 2026-2027, British Council IELTS" },
      { name: "author", content: "John Amos International School" }, { name: "robots", content: "index, follow, max-image-preview:large" }, { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "BD-B" }, { name: "geo.placename", content: "Mymensingh" },
      { httpEquiv: "Content-Security-Policy", content: "default-src 'self'; img-src * data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.resend.com; frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com;" },
      { httpEquiv: "X-Frame-Options", content: "SAMEORIGIN" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { property: "og:site_name", content: "John Amos International School" },
      { property: "og:title", content: "John Amos International School" }, { property: "og:description", content: "Cambridge curriculum English Medium school in Mymensingh, Bangladesh." }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://johnamosbd.com/" }, { name: "twitter:card", content: "summary_large_image" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "School", name: "John Amos International School", alternateName: "JAIS", url: "https://johnamosbd.com", email: "info@johnamosbd.com", address: { "@type": "PostalAddress", streetAddress: "19/D Shaheb Ali Road", addressLocality: "Mymensingh", postalCode: "2200", addressCountry: "BD" }, hasOfferCatalog: { "@type": "OfferCatalog", name: "Site links", itemListElement: ["Admissions", "Academics", "Campus", "Gallery", "Blog", "Alumni", "Academic Calendar"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } } },
    ],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", type: "image/png", href: "/logo.png" }, { rel: "apple-touch-icon", href: "/logo.png" }, { rel: "canonical", href: "https://johnamosbd.com/" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap" }],
  }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><div className="flex min-h-screen flex-col" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}><NewsTicker /><Header /><main className="flex-1"><Outlet /></main><MapEmbed /><Footer /><FloatingWhatsApp /><Toaster richColors position="top-right" /></div></QueryClientProvider>; }
