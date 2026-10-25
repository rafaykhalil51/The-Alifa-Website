import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageBanner } from "@/components/PageBanner";
import { siteConfig } from "@/config/site";
import { getService, services } from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-[24rem] bg-navy" aria-hidden="true" />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.navLabel, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <PageBanner
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        crumbs={crumbs.map((crumb, index) => ({ label: crumb.name, href: index === crumbs.length - 1 ? undefined : crumb.path }))}
      />
      <article className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl space-y-4">
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-line bg-white p-6">
            <h2 className="text-2xl font-semibold text-navy">What you may need to prepare</h2>
            <ul className="mt-5 space-y-3">
              {service.prepare.map((item) => (
                <li key={item} className="text-sm leading-7 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">The general process</h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, index) => (
                <li key={step.title} className="rounded-3xl bg-navy p-5 text-white">
                  <p className="text-sm font-semibold text-cyan">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy">Questions about this service</h2>
          <div className="mt-6">
            <FAQAccordion items={service.faqs} />
          </div>
        </section>
        <p className="mt-10 max-w-3xl text-sm leading-7 text-muted">{siteConfig.disclaimer}</p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/services" className="text-blue">
            All services
          </Link>
          <Link href="/apply" className="text-blue">
            Request a consultation
          </Link>
        </div>
      </article>
      <ConsultationCTA title="Ask about this part of the process" />
    </>
  );
}
