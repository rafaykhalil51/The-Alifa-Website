import { siteConfig } from "@/config/site";

export function whatsappDigits(number: string) {
  return number.replace(/\D/g, "");
}

/** Opens WhatsApp with a prefilled message. The message is not sent automatically. */
export function whatsappUrl(message: string) {
  const digits = whatsappDigits(siteConfig.whatsapp.number);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function destinationInquiryMessage(country: string) {
  return `Hello, I would like to discuss study options in ${country} with ${siteConfig.name}.`;
}
