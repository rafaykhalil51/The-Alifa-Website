import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PageBanner } from "@/components/PageBanner";
import { processSteps } from "@/data/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "How The Alifa Educational Consultants helps students and families in Pakistan explore overseas study with clear, qualified information.",
  path: "/about",
});

const expectations = [
  "A conversation based on your current qualification and the countries you want to compare.",
  "Plain explanations of the difference between course research, an application, and a visa or student-pass step.",
  "Directions to official university and government pages when a rule can change.",
  "Room for a parent or guardian to take part, if you want them there.",
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        title="Guidance for students comparing an overseas education"
        description="The Alifa Educational Consultants advises prospective students and their families on international study options. The purpose is clarity: what kinds of programmes exist, what an application usually involves, and which decisions remain with universities and authorities."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Our approach</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-muted">
            <p>
              Students looking at Malaysia, the UK, Australia, Canada, the United States, or Germany are often comparing systems that do not line up neatly. A diploma, a foundation year, and a bachelor&apos;s degree can mean different things in each country.
            </p>
            <p>
              The consultancy&apos;s role is to slow that comparison down. We look at published entry routes, the documents a form tends to ask for, and the official page that currently states a visa or student-pass rule. We do not replace those sources, and we do not describe an inquiry as an admission.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <ImageWithFallback
            src="/images/library.jpg"
            alt="Library shelves filled with books, with a row of lights above the aisle."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">What students can expect</h2>
            <ul className="mt-6 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="rounded-2xl border border-line bg-canvas px-5 py-4 text-sm leading-7 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">The student journey</h2>
            <ol className="mt-6 space-y-4">
              {processSteps.map((step) => (
                <li key={step.step} className="rounded-2xl border border-line p-5">
                  <p className="text-sm font-semibold text-blue">{step.step}</p>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <ConsultationCTA title="Talk through your study plans" text="Request a consultation or call the office. If you prefer WhatsApp, the button opens a prefilled message for you to send." />
    </>
  );
}
