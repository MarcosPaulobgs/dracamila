import { waLink } from "@/lib/config";

export default function WhatsAppFlutuante() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp"
       className="fixed bottom-5 right-4 sm:right-5 z-40 flex items-center gap-3 rounded-full bg-grafite p-4 text-white shadow-lg transition-colors hover:bg-[#2b262c] md:px-6 md:py-3.5">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      </svg>
      <span className="hidden md:inline">Agendar pelo WhatsApp</span>
    </a>
  );
}
