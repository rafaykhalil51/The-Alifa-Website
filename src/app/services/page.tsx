import { Compass, FileText, GraduationCap, Plane } from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { PageBanner } from "@/components/PageBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Student Guidance Services",
  description:
    "Counselling, course selection, documentation guidance, and pre-departure preparation for international study.",
  path: "/services",
});

const icons = [Compass, GraduationCap, FileText, Plane] as const;

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Support at each stage of the research"
        description="The services below help you organise a study plan and an application file. They do not transfer the admission or visa decision from the university or the authority."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            href={`/services/${service.slug}`}
            title={service.title}
            text={service.summary}
            icon={icons[index] ?? Compass}
            index={`0${index + 1}`}
          />
        ))}
      </section>
      <ConsultationCTA />
    </>
  );
}
