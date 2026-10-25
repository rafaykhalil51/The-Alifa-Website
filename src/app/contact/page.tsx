import { ConsultationForm } from "@/components/ConsultationForm";
import { ContactDetails } from "@/components/ContactDetails";
import { PageBanner } from "@/components/PageBanner";
import { mapsEmbedUrl, siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Call, email, or visit The Alifa Educational Consultants in Karachi, and open the office address in Google Maps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Speak to the Karachi office"
        description="Call, email, or use the map to find the office. Office hours are not listed because they have not been published for this website. WhatsApp, when you use it, opens a draft message for you to send."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <ContactDetails />
        <div className="overflow-hidden rounded-3xl border border-line bg-white">
          <iframe
            title={`Map of ${siteConfig.name} office in Karachi`}
            src={mapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 sm:h-full sm:min-h-80"
          />
        </div>
      </section>
      <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <ConsultationForm />
      </section>
    </>
  );
}
