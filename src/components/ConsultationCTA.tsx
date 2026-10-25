import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function ConsultationCTA({
  title = "Ready to Explore Your Study Abroad Options?",
  text = "Request a consultation, call the Karachi office, or continue the conversation on WhatsApp. A WhatsApp link opens a prefilled message. It is not sent until you confirm it.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-gold/20 bg-navy px-6 py-12 text-white shadow-[0_0_60px_rgba(224,176,0,0.08)] sm:px-10 lg:px-14">
        <div className="gold-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CTAButton href="/apply" className="w-full sm:w-auto">
            Request Consultation
          </CTAButton>
          <CTAButton href={siteConfig.phoneTel} variant="outlineLight" className="w-full sm:w-auto">
            Call Us
          </CTAButton>
          {siteConfig.whatsapp.enabled ? (
            <CTAButton href={whatsappUrl(message ?? siteConfig.whatsapp.defaultMessage)} variant="whatsapp" className="w-full sm:w-auto">
              WhatsApp
            </CTAButton>
          ) : null}
        </div>
        </div>
      </div>
    </section>
  );
}
