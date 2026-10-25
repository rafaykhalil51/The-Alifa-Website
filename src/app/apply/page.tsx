import { ConsultationForm } from "@/components/ConsultationForm";
import { PageBanner } from "@/components/PageBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a Consultation",
  description:
    "Prepare a study inquiry for The Alifa Educational Consultants and send it by email or WhatsApp. The form does not submit itself.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Consultation"
        title="Request a study consultation"
        description="Tell us where you are in your education and which destination you want to discuss. You will then choose to email the inquiry or continue on WhatsApp. Neither option sends the message until you confirm it in your own app."
        crumbs={[{ label: "Home", href: "/" }, { label: "Request a consultation" }]}
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ConsultationForm />
      </section>
    </>
  );
}
