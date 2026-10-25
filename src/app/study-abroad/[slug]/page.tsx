import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { CountryHero } from "@/components/CountryHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { destinations, getDestination } from "@/data/destinations";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { destinationInquiryMessage } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return pageMetadata({
    title: destination.seoTitle,
    description: destination.seoDescription,
    path: `/study-abroad/${destination.slug}`,
  });
}

export default function DestinationPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-[28rem] bg-navy" aria-hidden="true" />}>
      <DestinationContent params={params} />
    </Suspense>
  );
}

async function DestinationContent({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: destination.name, path: `/study-abroad/${destination.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(destination.faqs)} />
      <CountryHero
        destination={destination}
        crumbs={crumbs.map((crumb, index) => ({
          label: crumb.name,
          href: index === crumbs.length - 1 ? undefined : crumb.path,
        }))}
      />
      <article className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="text-3xl font-semibold text-navy">Studying in {destination.name}</h2>
            {destination.overview.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(16,43,85,0.05)] lg:col-span-5">
            <h2 className="text-xl font-semibold text-navy">Official sources</h2>
            <ul className="mt-4 space-y-4">
              {destination.resources.map((resource) => (
                <li key={resource.href}>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue">
                    {resource.label}
                  </a>
                  <p className="mt-1 text-sm leading-6 text-muted">{resource.note}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-navy">Study pathways</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {destination.pathways.map((pathway) => (
              <article key={pathway.title} className="rounded-3xl border border-line bg-white p-6">
                <h3 className="text-lg font-semibold text-navy">{pathway.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{pathway.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-navy">Admissions considerations</h2>
            <ul className="mt-5 space-y-3">
              {destination.admissions.map((item) => (
                <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm leading-7 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-navy">Document starting list</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              This is a preparation list, not the binding visa checklist. Use the official source for the documents that apply to your nationality and course.
            </p>
            <ul className="mt-4 space-y-3">
              {destination.documents.map((item) => (
                <li key={item} className="rounded-2xl border border-line px-4 py-3 text-sm leading-7 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-navy">Questions to ask before applying</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {destination.questions.map((question, index) => (
              <li key={question} className="rounded-3xl bg-navy px-5 py-5 text-white">
                <span className="text-sm font-semibold text-cyan">0{index + 1}</span>
                <p className="mt-2 text-base leading-7">{question}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-navy">Questions about {destination.name}</h2>
          <div className="mt-6">
            <FAQAccordion items={destination.faqs} />
          </div>
        </section>
      </article>
      <ConsultationCTA
        title={`Discuss study options in ${destination.name}`}
        text="Request a consultation or call the office. WhatsApp opens a prefilled note about this destination. It is not sent until you confirm it in WhatsApp."
        message={destinationInquiryMessage(destination.name)}
      />
    </>
  );
}
