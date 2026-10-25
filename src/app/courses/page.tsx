import Link from "next/link";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { PageBanner } from "@/components/PageBanner";
import { courseLevels } from "@/data/courses";
import { destinations } from "@/data/destinations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Study Levels and Pathways",
  description:
    "Foundation, diploma, bachelor's, and postgraduate pathways, and why eligibility depends on the country and institution.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Courses"
        title="Study levels and pathways"
        description="These are categories of study, not a catalogue of courses we place students into. A foundation in one country is not automatically accepted as the first year of a degree in another."
        crumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6">
          {courseLevels.map((level) => (
            <article key={level.id} id={level.id} className="rounded-[2rem] border border-line bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-navy">{level.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{level.text}</p>
            </article>
          ))}
        </div>
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy">Where the same level can look different</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Read the destination page before you assume a course length, a language of instruction, or a central application system. Germany, for example, needs a separate check of academic recognition and teaching language.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <Link href={`/study-abroad/${destination.slug}`} className="flex min-h-14 items-center rounded-2xl border border-line bg-canvas px-4 text-sm font-semibold text-navy hover:border-blue">
                  Pathways in {destination.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-14 rounded-[2rem] bg-navy px-6 py-8 text-white sm:px-8">
          <h2 className="text-2xl font-semibold">Talk through a suitable programme</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
            Bring your current qualification and the subject you are considering. We can help you see which level is worth researching. We will not invent a course list or a scholarship.
          </p>
          <Link href="/apply" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-ink">
            Request a consultation
          </Link>
        </section>
      </section>
      <ConsultationCTA title="Not sure which level fits?" />
    </>
  );
}
