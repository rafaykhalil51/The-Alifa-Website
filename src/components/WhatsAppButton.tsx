import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  if (!siteConfig.whatsapp.enabled) return null;

  return (
    <a
      href={whatsappUrl(siteConfig.whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${siteConfig.whatsapp.label}. Opens WhatsApp with a prefilled message. The message is not sent until you confirm it in WhatsApp.`}
      className="fixed right-4 bottom-4 z-30 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#128C7E] px-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,43,85,0.25)] hover:bg-[#0e6f64] sm:right-6 sm:bottom-6"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
