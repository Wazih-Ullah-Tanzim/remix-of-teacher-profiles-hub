import { MessageCircle } from "lucide-react";

const PHONE = "8801786412300";
const WA_URL = `https://wa.me/${PHONE}`;

export function FloatingWhatsApp() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(WA_URL, "_blank", "noopener,noreferrer");
  };
  return (
    <a
      href={WA_URL}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with John Amos International School on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -left-28 hidden rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg sm:block">
        WhatsApp
      </span>
    </a>
  );
}
