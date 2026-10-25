import { Compass, FileText, GraduationCap, Plane } from "lucide-react";
import Link from "next/link";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { DestinationCard } from "@/components/DestinationCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { courseLevels } from "@/data/courses";
import { destinations } from "@/data/destinations";
import { guidancePoints, homeFaqs, processSteps } from "@/data/home";
import { services } from "@/data/services";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Study Abroad Guidance for Students in Pakistan | The Alifa Educational Consultants",
  description:
    "Compare study options in Malaysia, the UK, Australia, Canada, the USA and Germany with guidance from The Alifa Educational Consultants in Karachi.",
  path: "/",
  absolute: true,
});

const serviceIcons = [Compass, GraduationCap, FileText, Plane] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />

      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            eyebrow="Introduction"
            title="Helping You Navigate Your Study Abroad Journey"
            description="The Alifa Educational Consultants works with prospective students and families who are comparing international study options. The work is practical: understand the kinds of programmes available, see what an application usually asks for, and decide on a sensible next step."
          />
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Guidance is an aid to an informed decision. It is not an offer of admission and it is not a visa approval. Where a rule belongs to a university or a government, the official page remains the source.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <ImageWithFallback
              src="/images/students.jpg"
              alt="Students sitting together at a library table, looking at laptops and talking through their work."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Destinations"
              title="Six countries to research carefully"
              description="Each destination has its own institutions, languages of instruction, and student-visa or student-pass process. Start with the overview, then open the country that fits your plans."
            />
            <Link href="/study-abroad" className="text-sm font-semibold text-blue">
              View all destinations
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Our Services"
          description="Four areas of support. Each one stops at the point where a university or an authority has to make its own decision."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              title={service.cardTitle}
              text={service.summary}
              icon={serviceIcons[index] ?? Compass}
              index={`0${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-gold/20 bg-navy px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="gold-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative">
          <SectionHeading
            eyebrow="Approach"
            title="Why Choose Guidance"
            description="These are the working principles of the service, not claims about past results."
            light
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {guidancePoints.map((point) => (
              <article key={point.title} className="rounded-3xl border border-gold/20 bg-white/10 p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{point.text}</p>
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title="How It Works"
          description="Four steps, from the first conversation to a plan you can act on. None of them is an approval."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="rounded-3xl border border-line bg-white p-6">
              <p className="text-sm font-semibold tracking-[0.16em] text-gold-deep">{step.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pathways"
            title="Courses and Study Pathways"
            description="Availability and eligibility depend on the country and the institution. A pathway in one system is not the same as a degree in another."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {courseLevels.map((level) => (
              <article key={level.id} id={level.id} className="rounded-3xl border border-line p-6">
                <h3 className="text-xl font-semibold text-navy">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{level.text}</p>
              </article>
            ))}
          </div>
          <Link href="/courses" className="mt-8 inline-flex text-sm font-semibold text-blue">
            Read about study levels
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Questions"
            title="Before you enquire"
            description="Short answers, with the official source left in charge of anything that can change."
          />
        </div>
        <div className="lg:col-span-8">
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
