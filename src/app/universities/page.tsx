import { ConsultationCTA } from "@/components/ConsultationCTA";
import { PageBanner } from "@/components/PageBanner";
import { universityExamples } from "@/data/universities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How to Evaluate Universities",
  description:
    "Criteria for comparing universities, plus an editorial directory of independently checked examples. These are not partner institutions.",
  path: "/universities",
});

const criteria = [
  { title: "Accreditation and authority to award", text: "Confirm that the institution can award the qualification and, where a profession requires it, that the programme meets the relevant regulator's rules. Use the institution and the country's official study portal." },
  { title: "Programme availability", text: "Check the exact degree, the campus, the intake, and the language of instruction. A university website in English does not mean every course is taught in English." },
  { title: "Location", text: "City, campus, and climate affect living costs and daily life. Compare the institution's own description of where teaching happens." },
  { title: "Tuition and other costs", text: "Read the current fee page and what it includes. Do not rely on a figure copied into a third-party article. Living costs and visa charges are separate." },
  { title: "Student support", text: "Look for published international-student information: orientation, advising, and how to contact the admissions office. Support described on a page is not a personal promise." },
];

export default function UniversitiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Universities"
        title="How to judge an institution before you apply"
        description="The Alifa Educational Consultants does not publish a partner network. Use the criteria below to read a university's own website, then look at the labelled examples only as a way to practise that reading."
        crumbs={[{ label: "Home", href: "/" }, { label: "Universities" }]}
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {criteria.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-line bg-white p-6">
              <p className="text-sm font-semibold text-blue">0{index + 1}</p>
              <h2 className="mt-3 text-xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-navy">Independent research examples</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Each institution below was checked against its own public website. Listing it here does not mean The Alifa Educational Consultants has a partnership, an agency agreement, or any influence over admission. Always reopen the official site before you apply, because programmes and requirements change.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {universityExamples.map((university) => (
              <article key={university.url} className="rounded-3xl border border-line bg-canvas p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">{university.country}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{university.name}</h3>
                <p className="mt-1 text-sm text-muted">{university.city}</p>
                <p className="mt-3 text-sm leading-7 text-ink">{university.note}</p>
                <a href={university.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-blue">
                  Official website
                </a>
              </article>
            ))}
          </div>
        </section>
      </section>
      <ConsultationCTA title="Want help reading a course page?" text="Bring the university link you are considering. We can look at the published requirements with you. That review is not an application and not an endorsement." />
    </>
  );
}
