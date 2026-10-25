import type { Faq } from "@/data/destinations";

export const guidancePoints = [
  {
    title: "Clear next steps",
    text: "The intended outcome of a consultation is a short list of actions: what to read, what to gather, and what can wait.",
  },
  {
    title: "Planning around your profile",
    text: "The conversation starts from your qualification, preferred destination, and study level, rather than a generic country brochure.",
  },
  {
    title: "Transparent information",
    text: "Where a rule belongs to a university or a government, we say so and send you to the official page. We do not replace that source.",
  },
  {
    title: "A more orderly application",
    text: "If you decide to apply, the aim is a complete file with deadlines and documents in one place, ready for you to review.",
  },
];

export const processSteps = [
  { step: "01", title: "Share your goals", text: "Tell us what you have studied, which countries interest you, and what you want from the next qualification." },
  { step: "02", title: "Discuss your options", text: "We look at study levels and destinations that fit the information you have, and we mark what still needs checking." },
  { step: "03", title: "Prepare your applications", text: "If you choose to apply, we help you organise forms, academic documents, and the answers the institution asks for." },
  { step: "04", title: "Plan your next steps", text: "You leave with a practical order of tasks. An application can still be refused, and a visa is never assumed." },
];

export const homeFaqs: Faq[] = [
  {
    question: "Which countries can I ask about?",
    answer: "The consultations covered on this website are for study in Malaysia, the United Kingdom, Australia, Canada, the United States, and Germany. If you are unsure, say so on the form and we can narrow the list with you.",
  },
  {
    question: "Do you guarantee admission or a visa?",
    answer: "No. Universities make admission decisions. Immigration authorities make visa and student-pass decisions. Our role is to help you understand options and prepare information. A consultation is not an approval.",
  },
  {
    question: "What documents are usually needed?",
    answer: "Institutions commonly ask for a passport, academic transcripts, and language-test results where a test is required. Visa checklists are published separately and change. Bring what you already have to the consultation, and do not email passport or bank scans through the first inquiry form.",
  },
  {
    question: "Do I need a language test?",
    answer: "Only if the programme or the visa route asks for one. Accepted tests and scores differ. We will look at the course page with you rather than assuming a particular score.",
  },
  {
    question: "How should I think about costs?",
    answer: "Tuition, living costs, and visa charges are published by universities and governments and they change. Use those pages for figures. A consultation can help you list the costs you need to check. It is not a quote or a scholarship offer.",
  },
  {
    question: "What happens in a consultation?",
    answer: "You share your background and questions. We discuss destinations, study levels, and the documents or official pages you should review next. You can include a parent. Nothing is submitted to a university unless you later decide to apply and provide the information yourself.",
  },
];
