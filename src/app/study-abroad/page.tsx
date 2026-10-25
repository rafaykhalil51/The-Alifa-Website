import { ConsultationCTA } from "@/components/ConsultationCTA";
import { DestinationCard } from "@/components/DestinationCard";
import { PageBanner } from "@/components/PageBanner";
import { destinations } from "@/data/destinations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Study Destinations",
  description:
    "Compare study options in Malaysia, the United Kingdom, Australia, Canada, the United States, and Germany.",
  path: "/study-abroad",
});

export default function StudyAbroadPage() {
  return (
    <>
      <PageBanner
        eyebrow="Study abroad"
        title="Choose a country, then check the detail"
        description="These six destinations are the ones covered by The Alifa Educational Consultants. Open a country for pathways, admissions points, a document starting list, and links to official sources."
        crumbs={[{ label: "Home", href: "/" }, { label: "Study Abroad" }]}
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}
