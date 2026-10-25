import type { Faq } from "@/data/destinations";

export type Service = {
  slug: string;
  navLabel: string;
  title: string;
  cardTitle: string;
  summary: string;
  intro: string[];
  prepare: string[];
  process: { title: string; text: string }[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "study-abroad-counselling",
    navLabel: "Study Abroad Counselling",
    title: "Study Abroad Counselling",
    cardTitle: "Study Abroad Counselling",
    summary: "A structured conversation about your qualifications, preferred countries, and the decisions you still need to make.",
    intro: [
      "Counselling at The Alifa Educational Consultants is a planning conversation. It is for students and families who want to compare international study options without being rushed into an application.",
      "We look at the level of study you have in mind, the countries on this website, and the information you already have. Where a rule is official and changeable, we point you to the government or university page rather than replacing it.",
    ],
    prepare: [
      "Your current or most recent qualification, including the subjects and the expected or final result if you have it.",
      "A short note on the countries and subjects you are considering.",
      "Any deadline you already know about, such as a school finishing date.",
      "Questions from parents or guardians, if they will be part of the decision.",
    ],
    process: [
      { title: "Share your background", text: "Tell us what you have studied, where you are based, and what you want the next qualification to do." },
      { title: "Narrow the options", text: "We discuss which destinations and study levels are worth a closer look, and which questions are still open." },
      { title: "Agree the next step", text: "That may be more research, a language test, or preparing an application. It is a plan, not an offer of admission." },
    ],
    faqs: [
      { question: "Is the first conversation a commitment to apply?", answer: "No. You can use it to decide whether international study is realistic for you right now." },
      { question: "Can a parent attend?", answer: "Yes. Family members are welcome when the student wants them involved." },
      { question: "Will you choose the country for me?", answer: "We can help you compare published options. The decision stays with you and your family." },
    ],
    seoTitle: "Study Abroad Counselling",
    seoDescription: "Book study abroad counselling to compare destinations, study levels, and the information you still need to confirm.",
  },
  {
    slug: "university-admissions",
    navLabel: "University Admissions",
    title: "University and Course Selection",
    cardTitle: "University and Course Selection",
    summary: "Help comparing institutions and courses from their own published entry requirements, without a claimed partnership list.",
    intro: [
      "Choosing a course is more specific than choosing a country. Two universities in the same city can ask for different grades, tests, and documents.",
      "We help you read official course pages: entry requirements, intake, campus, language, and how to apply. We do not present universities as partners, and we do not suggest that an application through us changes an admission decision.",
    ],
    prepare: [
      "Transcripts or a list of subjects and grades.",
      "The subject areas you will consider, and any you want to avoid.",
      "A destination shortlist, even if it is still provisional.",
      "Constraints you already know, such as a preferred start month or a need for an English-taught programme.",
    ],
    process: [
      { title: "Define the course type", text: "We clarify whether you are looking at a pathway, diploma, bachelor's, or postgraduate programme." },
      { title: "Read the published criteria", text: "We look at official pages with you and note gaps, such as a missing prerequisite or an unclear language score." },
      { title: "Prepare the application file", text: "If you decide to apply, we help you organise the documents and answers the form requests." },
    ],
    faqs: [
      { question: "Do you have a partner university list?", answer: "No. This website does not claim institutional partnerships. Examples elsewhere on the site are independent research examples." },
      { question: "Can you guarantee an offer?", answer: "No. The university decides. We can help you present accurate information and understand a conditional offer if you receive one." },
      { question: "How many courses should I shortlist?", answer: "Enough to have a genuine alternative, and few enough that each application is carefully prepared. The right number depends on the country." },
    ],
    seoTitle: "University and Course Selection",
    seoDescription: "Get help comparing universities and courses from official entry requirements, intakes, and application routes.",
  },
  {
    slug: "visa-documentation-guidance",
    navLabel: "Visa Documentation",
    title: "Admissions and Documentation Guidance",
    cardTitle: "Admissions and Documentation Guidance",
    summary: "Support for organising the papers an institution or student-visa checklist asks for. Decisions stay with the authorities.",
    intro: [
      "After a course is chosen, most students have to assemble academic records, identity documents, and sometimes test results or financial evidence. The binding list comes from the institution and, later, the immigration authority.",
      "This service is documentation guidance for study applications. It is not an immigration practice, and it does not cover employment visas. We will not tell you that a file is approved before the authority has said so.",
    ],
    prepare: [
      "The offer or the application checklist, if you already have one.",
      "Original academic documents and any translations you have been asked to obtain.",
      "Your passport details page. Do not send passport scans through the first website form.",
      "The official visa or student-pass page for your destination, so we are working from the current list.",
    ],
    process: [
      { title: "Match the checklist", text: "We compare what you have with the list published for your course or visa route." },
      { title: "Flag gaps", text: "We note missing items, unclear translations, or documents that the official page says must be recent." },
      { title: "Keep the source of truth", text: "You submit what the portal asks for. If a rule is unclear, we direct you back to the official guidance." },
    ],
    faqs: [
      { question: "Will you tell me the exact visa fee and processing time?", answer: "Those figures change and differ by nationality and route. Use the official immigration page for the current fee and timing. We will not quote a number that may already be out of date." },
      { question: "Can you lodge a visa application as my representative?", answer: "No. We explain and help organise student-application documents. We do not act as an immigration representative or promise a visa outcome." },
      { question: "Should I email my passport or bank statements to the website form?", answer: "No. The consultation form is only an inquiry. Sensitive documents should be shared later, and only through a channel the office confirms." },
    ],
    seoTitle: "Admissions and Documentation Guidance",
    seoDescription: "Organise study-application documents against official university and student-visa checklists. No visa is guaranteed.",
  },
  {
    slug: "pre-departure-support",
    navLabel: "Pre-departure Support",
    title: "Pre-departure Preparation",
    cardTitle: "Pre-departure Preparation",
    summary: "A practical checklist for students who already have an offer and want to get ready to travel, without invented arrival promises.",
    intro: [
      "Pre-departure support is for the period after you have an offer and, where required, a visa or student-pass decision. It is about preparation: what to confirm, what to pack in your document folder, and which official arrival instructions to read.",
      "We do not book flights, housing, or insurance unless that service is separately agreed, and this website does not claim that those bookings are included.",
    ],
    prepare: [
      "Your offer letter and any conditions you still need to meet.",
      "The visa or student-pass outcome, if you have received it.",
      "The university's international-student arrival page.",
      "Questions about accommodation, orientation, or what to carry in your hand luggage.",
    ],
    process: [
      { title: "Review the offer conditions", text: "We check whether the university still needs a document, a deposit, or a confirmation before you travel." },
      { title: "Read the arrival instructions", text: "Airports, registration, and orientation differ by country. We use the institution's page and the official student arrival guidance." },
      { title: "Pack the document set", text: "You leave with a clear folder list: passport, visa evidence, offer, transcripts, and any address or insurance papers you have been told to carry." },
    ],
    faqs: [
      { question: "Do you arrange housing?", answer: "Housing offers are published by universities and private providers. We can help you find those official pages. This website does not claim a housing placement service." },
      { question: "Is travel insurance included?", answer: "No. If a visa or university requires insurance, follow their specification and buy it from a provider you have checked." },
      { question: "What if my visa is still pending?", answer: "Do not book non-refundable travel on the assumption of an approval. Wait for the decision and the entry conditions printed on it." },
    ],
    seoTitle: "Pre-departure Preparation",
    seoDescription: "Prepare to travel after an offer with a document checklist and official arrival guidance. Travel is not booked by this page.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
