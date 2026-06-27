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
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-pulse hover:animate-none transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.29-.14-1.7-.84-1.96-.94-.26-.1-.46-.14-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.31-1.42-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.08 4.89 4.32.68.29 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.01 4C9.39 4 4 9.39 4 16.01c0 2.12.56 4.19 1.62 6.02L4 28l6.16-1.61a11.96 11.96 0 0 0 5.85 1.49h.01C22.63 27.88 28 22.49 28 15.87S22.63 4 16.01 4zm0 21.87h-.01c-1.85 0-3.66-.5-5.25-1.43l-.38-.22-3.66.96.98-3.56-.25-.37a9.94 9.94 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.94-9.94 2.66 0 5.15 1.04 7.03 2.92a9.86 9.86 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94z"/>
      </svg>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
