export type Faq = { question: string; answer: string };
export type Resource = { label: string; href: string; note: string };

export type Destination = {
  slug: string;
  name: string;
  cardDescription: string;
  heroTitle: string;
  summary: string;
  image: string;
  imageAlt: string;
  overview: string[];
  pathways: { title: string; text: string }[];
  admissions: string[];
  documents: string[];
  questions: string[];
  resources: Resource[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
};

export const destinations: Destination[] = [
  {
    slug: "malaysia",
    name: "Malaysia",
    cardDescription:
      "Compare public universities, private institutions, and branch campuses, then check how a student pass is organised after an offer.",
    heroTitle: "Study in Malaysia",
    summary:
      "Malaysia is often considered by students who want an English-medium classroom within a shorter flight from Pakistan. The right choice still depends on the institution, the language of the programme, and the student-pass process published by the authorities.",
    image: "/images/malaysia.jpg",
    imageAlt: "The Petronas Twin Towers and the Kuala Lumpur skyline at dusk.",
    overview: [
      "Higher education in Malaysia includes public universities, private universities and colleges, and foreign university branch campuses. Each type publishes its own programmes, intakes, and entry requirements.",
      "English is widely used on many private and international programmes. Some public programmes are taught in Bahasa Malaysia or expect Malay language study. Read the programme page rather than assuming the language of instruction.",
      "International students who need permission to study usually start with an offer letter and then follow the student-pass process set out by Education Malaysia Global Services (EMGS) and Malaysian immigration. Institutions sometimes submit parts of that process themselves.",
    ],
    pathways: [
      { title: "Foundation and pathway", text: "Some institutions offer a foundation or pre-university year before a bachelor's degree. Entry rules depend on the student's secondary qualification and the faculty." },
      { title: "Diploma", text: "Diplomas are available at colleges and some universities. Ask whether the award can be used as credit toward a degree, and at which institution." },
      { title: "Bachelor's degree", text: "Undergraduate degrees are offered by public and private universities. Duration and professional accreditation, where relevant, are published by the institution." },
      { title: "Postgraduate study", text: "Master's and research degrees are available. Some require a proposal, a supervisor, or a minimum grade in a previous degree." },
    ],
    admissions: [
      "Confirm that the institution is authorised to offer the qualification and that the intake you want is actually open.",
      "Compare the published academic requirement with your current or expected results. A pathway year is sometimes suggested when direct entry is not available.",
      "Check whether the application is made to the university, through an online portal, or with EMGS involvement after the offer.",
      "Ask what a conditional offer depends on, such as final results or an English test, and when those conditions must be met.",
    ],
    documents: [
      "Passport identity page, valid for the period the institution and EMGS specify.",
      "Academic certificates and transcripts.",
      "English-language evidence if the programme asks for it.",
      "Passport-style photographs that match the published specification.",
      "Any offer letter, application form, or medical document named in the current EMGS checklist.",
    ],
    questions: [
      "Is this programme taught in English, Bahasa Malaysia, or both?",
      "Which intake months are published for my course?",
      "Does the institution or the student submit the EMGS application?",
      "Which documents must be certified or translated?",
      "Where is the current fee schedule, and what does it include?",
    ],
    resources: [
      { label: "Education Malaysia Global Services", href: "https://educationmalaysia.gov.my/", note: "Official study-in-Malaysia information from EMGS." },
      { label: "EMGS visa portal", href: "https://visa.educationmalaysia.gov.my/", note: "Official student-pass application and document guidance. Fees and timing are published there and can change." },
    ],
    faqs: [
      { question: "Can you arrange a Malaysian student pass for me?", answer: "We can help you understand the usual order of steps and organise the documents an institution or EMGS checklist names. The student pass itself is decided by the relevant Malaysian authorities, not by this consultancy." },
      { question: "Are all Malaysian degrees taught in English?", answer: "No. Many private and international programmes use English, but you should confirm the language on the specific course page before you apply." },
      { question: "Should I choose a public or private university?", answer: "That depends on the subject, entry requirements, location, fees, and how the institution describes student support. We can help you compare those points from official pages. We do not rank institutions for you as partners." },
      { question: "When should I start?", answer: "Start early enough to sit any required language test, gather transcripts, and meet the intake deadline published by the institution. Deadlines differ by course." },
    ],
    seoTitle: "Study in Malaysia",
    seoDescription: "Explore Malaysian universities, pathways, admissions points, and where to check current student-pass guidance with The Alifa Educational Consultants.",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    cardDescription:
      "Look at foundation, undergraduate, and postgraduate routes, including how many bachelor's applications are made through UCAS.",
    heroTitle: "Study in the United Kingdom",
    summary:
      "The UK remains a common destination for students who want a taught degree with a clearly published course structure. Applications, English-language evidence, and the Student visa are separate steps, and each one has its own official rules.",
    image: "/images/uk.jpg",
    imageAlt: "Tower Bridge crossing the River Thames, with the London skyline beyond.",
    overview: [
      "Universities across England, Scotland, Wales, and Northern Ireland publish their own degrees. Course length, professional accreditation, and teaching style are not identical from one nation or university to another.",
      "Many undergraduate applications are submitted through UCAS. A large share of postgraduate applications are made directly to the university. Always follow the route named on the course page.",
      "A Student visa, where required, is a UK government decision. Financial evidence, Confirmation of Acceptance for Studies, and other conditions are set out on GOV.UK and change over time.",
    ],
    pathways: [
      { title: "Foundation and pathway", text: "International foundation or pathway programmes can prepare a student for a bachelor's degree when direct entry is not the published route. Check which degrees the pathway leads to." },
      { title: "Undergraduate", text: "Bachelor's degrees are the main undergraduate route. Some courses include a placement year or an integrated master's. The course page states the length." },
      { title: "Postgraduate taught", text: "Master's degrees are often one year of full-time study, but that is not universal. Research the assessment style and start date." },
      { title: "Research degrees", text: "MPhil and PhD applications usually need a proposal and a potential supervisor. They are organised differently from taught master's courses." },
    ],
    admissions: [
      "Read the academic and English-language requirements on the course page, not on a general country summary.",
      "For UCAS undergraduate applications, note the deadline that applies to your course. Some subjects close earlier than others.",
      "A personal statement or supporting statement is commonly requested. It should describe your preparation for that course.",
      "An offer can be conditional on final grades or an English test. Keep the deadline for meeting those conditions.",
    ],
    documents: [
      "Passport and academic transcripts or predicted results.",
      "English-language test results if the university asks for a named test.",
      "A personal statement and a reference when the application system requires them.",
      "A portfolio or work sample for courses that request one.",
      "Later, the financial and identity documents named in the current Student visa guidance.",
    ],
    questions: [
      "Is the application through UCAS or direct to the university?",
      "Which English test and score does this course list?",
      "What is the published deadline for my intake?",
      "Does the offer depend on final results?",
      "Where do I read the current Student visa conditions on GOV.UK?",
    ],
    resources: [
      { label: "Study UK", href: "https://study-uk.britishcouncil.org/", note: "British Council guidance on planning study in the UK." },
      { label: "Student visas on GOV.UK", href: "https://www.gov.uk/browse/visas-immigration/student-visas", note: "Official UK government pages for student visa routes. Check the current rules there." },
      { label: "UCAS", href: "https://www.ucas.com/", note: "The undergraduate application service used by many UK universities." },
    ],
    faqs: [
      { question: "Do you submit my UCAS application?", answer: "We can help you understand the form, the course choices, and the documents you need to prepare. You remain responsible for the information you submit, and the university decides the offer." },
      { question: "Is a foundation year required for Pakistani qualifications?", answer: "Not as a blanket rule. Some students enter a bachelor's degree directly and others are offered a pathway. The course page and the university's international entry information are the place to check." },
      { question: "Can you promise a UK visa?", answer: "No. We do not promise visas. UK Visas and Immigration decides Student visa applications under the rules published on GOV.UK." },
      { question: "Are living costs the same in every city?", answer: "No. London and smaller cities publish very different rent levels. Use the university's own cost guidance and the official Study UK pages rather than a single national figure." },
    ],
    seoTitle: "Study in the United Kingdom",
    seoDescription: "Plan UK foundation, undergraduate, and postgraduate options, with pointers to UCAS and official Student visa guidance.",
  },
  {
    slug: "australia",
    name: "Australia",
    cardDescription:
      "Review universities, pathway programmes, and vocational study, and read the official student-visa guidance before you commit.",
    heroTitle: "Study in Australia",
    summary:
      "Australia offers university degrees, pathway programmes, and vocational qualifications. A student visa is a separate government decision, and course availability for international students should be checked on official sources.",
    image: "/images/australia.jpg",
    imageAlt: "Sydney Opera House and ferries on Sydney Harbour, with the city skyline behind.",
    overview: [
      "Australian universities publish bachelor's, master's, and research degrees. Vocational and diploma study sits alongside higher education and can be a destination in its own right or a route into further study.",
      "Many institutions also offer foundation, diploma, or pathway packages. The package should name the degree it can lead to and the grades required to progress.",
      "Students who need a visa should read the Department of Home Affairs guidance for the Student visa (subclass 500) and the preparation steps on Study Australia. Those pages, not a consultancy summary, state the current conditions.",
    ],
    pathways: [
      { title: "Foundation and pathway", text: "Pathway colleges linked to universities may offer a foundation or diploma before the first year of a degree. Progression is conditional." },
      { title: "Diploma and vocational study", text: "Diploma and vocational programmes focus on practical training. Confirm the qualification level and whether it is registered for international students." },
      { title: "Bachelor's degree", text: "Undergraduate degrees commonly run for three years, with longer courses in some professional fields. Check the specific course." },
      { title: "Postgraduate study", text: "Coursework master's and research degrees have different entry rules. Some coursework programmes expect a related bachelor's degree." },
    ],
    admissions: [
      "Use Study Australia's course search, then open the provider's own page to confirm intake, campus, and fees.",
      "Compare your qualification with the international entry information. Pathway entry and direct entry are both common.",
      "Note English-language evidence accepted by that provider. Tests and scores are course-specific.",
      "An offer is not a visa. Read the visa step only after you understand what the offer asks you to accept.",
    ],
    documents: [
      "Academic certificates, transcripts, and translations if the provider requests them.",
      "Passport identity page.",
      "English-language results where required.",
      "A statement of purpose if the application form includes one.",
      "The financial, health, and character documents named in the current Home Affairs checklist.",
    ],
    questions: [
      "Is this course available to international students for my intake?",
      "Is there a pathway, and what grade is required to progress?",
      "Which campus will I study at?",
      "What does the published tuition include?",
      "Which Home Affairs page lists the current Student visa conditions?",
    ],
    resources: [
      { label: "Study Australia", href: "https://www.studyaustralia.gov.au/", note: "Official Australian government guidance for international students, including course search." },
      { label: "Student visa (subclass 500)", href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500", note: "Department of Home Affairs page for the Student visa. Requirements change, so read the live page." },
    ],
    faqs: [
      { question: "Do you guarantee an Australian student visa?", answer: "No. Home Affairs decides visa applications. We can help you organise information and understand the questions on the official guidance." },
      { question: "Is every Australian course open to international students?", answer: "No. Confirm on Study Australia and on the provider's website that the course, campus, and intake accept international applicants." },
      { question: "Can a diploma lead to a degree?", answer: "Sometimes. The provider must say so, including the credit or progression rule. Do not assume that every diploma feeds into every degree." },
      { question: "How do I compare cities?", answer: "Look at the campus location, published living-cost guidance, and the student services described by the institution. Climate and distance from home are personal factors we can talk through." },
    ],
    seoTitle: "Study in Australia",
    seoDescription: "Compare Australian universities, pathways, and vocational study, and find the official Student visa guidance.",
  },
  {
    slug: "canada",
    name: "Canada",
    cardDescription:
      "Understand college diplomas, university degrees, and the study-permit process set by Immigration, Refugees and Citizenship Canada.",
    heroTitle: "Study in Canada",
    summary:
      "Canada's colleges and universities offer diplomas, bachelor's degrees, and postgraduate study. A study permit is issued by Immigration, Refugees and Citizenship Canada (IRCC), and provincial rules can add extra steps.",
    image: "/images/canada.jpg",
    imageAlt: "Downtown Toronto beside Lake Ontario, with the CN Tower above the skyline.",
    overview: [
      "Universities tend to emphasise bachelor's and graduate degrees. Colleges are known for diplomas, certificates, and applied programmes. Some students move between the two, but credit transfer is never automatic.",
      "Most longer programmes require a letter of acceptance from a designated learning institution before a study-permit application. IRCC publishes the current list and the permit instructions.",
      "Quebec and some other provinces have additional steps. Read both the IRCC page and the province's own instructions for the place you want to study.",
    ],
    pathways: [
      { title: "Diploma and college programmes", text: "College diplomas can be a complete qualification or, in some cases, a route into a degree. Ask the college what transfer arrangements it actually publishes." },
      { title: "Bachelor's degree", text: "Undergraduate degrees are offered by universities across the provinces. Entry averages and prerequisite subjects vary." },
      { title: "Postgraduate credentials", text: "Master's degrees, graduate diplomas, and postgraduate certificates are different awards. Check the length and whether a supervisor is required." },
      { title: "Pathway or language study", text: "Some institutions offer English or academic pathway programmes before the main course. Confirm whether that study itself needs a permit." },
    ],
    admissions: [
      "Search institutions through EduCanada, then verify the programme on the institution's website.",
      "Check that the institution is a designated learning institution if you will need a study permit.",
      "Compare grade requirements and any prerequisite subjects with your transcript.",
      "Note application deadlines, which are often many months before the start date.",
    ],
    documents: [
      "Letter of acceptance once it is issued, plus the academic documents used to obtain it.",
      "Passport and photographs matching the published specification.",
      "Language-test results if the institution or IRCC asks for them.",
      "Proof of funds and other items named in the current IRCC checklist. Amounts change, so use the official page.",
      "Any provincial form, such as a Quebec requirement, that applies to your institution.",
    ],
    questions: [
      "Is this college or university a designated learning institution?",
      "Is the award a diploma, a degree, or a graduate certificate?",
      "Which province's rules apply, and is there an extra certificate or form?",
      "What language score does the programme publish?",
      "Where does IRCC list the current study-permit documents?",
    ],
    resources: [
      { label: "EduCanada", href: "https://www.educanada.ca/study-plan-etudes/index.aspx?lang=eng", note: "Official Government of Canada site for planning study in Canada." },
      { label: "Study in Canada — IRCC", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html", note: "Immigration, Refugees and Citizenship Canada guidance on study permits and student life. Follow the live instructions." },
    ],
    faqs: [
      { question: "Is a study permit the same as an offer letter?", answer: "No. The institution may issue an offer or letter of acceptance. IRCC decides the study permit. You generally need the acceptance document before you apply for the permit." },
      { question: "Do you provide Canadian immigration services?", answer: "No. This consultancy provides education guidance. Study-permit decisions and immigration advice belong to IRCC and, where required, an authorised representative. We will point you to the official instructions." },
      { question: "Are college and university entry requirements the same?", answer: "No. Colleges and universities publish different academic requirements, even in the same city. Compare the programme pages." },
      { question: "Does every province use the same application process?", answer: "The institution's process and some provincial steps differ. Quebec in particular has additional requirements for many applicants. Read the provincial and IRCC pages together." },
    ],
    seoTitle: "Study in Canada",
    seoDescription: "Explore Canadian colleges and universities, and see where IRCC and EduCanada publish current study-permit guidance.",
  },
  {
    slug: "usa",
    name: "United States",
    cardDescription:
      "Compare community colleges, undergraduate degrees, and graduate programmes, and use EducationUSA for official advising information.",
    heroTitle: "Study in the United States",
    summary:
      "The United States has a wide range of colleges and universities, from community colleges to research universities. Admission, the Form I-20, and the student visa are separate stages.",
    image: "/images/usa.jpg",
    imageAlt: "A busy New York City avenue at sunset, with pedestrians crossing between tall buildings.",
    overview: [
      "Undergraduate study usually leads to a bachelor's degree. Community colleges offer associate degrees and transfer routes, which only work when the receiving university publishes a transfer arrangement.",
      "Graduate study includes master's degrees and doctoral programmes. Each department sets its own prerequisites, tests, and deadlines.",
      "EducationUSA, a US Department of State network, publishes official information about accredited study. The Student and Exchange Visitor Program explains the Form I-20 and related student steps on Study in the States. Visa decisions are made by the US government.",
    ],
    pathways: [
      { title: "Community college and transfer", text: "A two-year college can be a lower-cost start for some students. Transfer credit depends on agreements and course matches, so confirm both institutions." },
      { title: "Bachelor's degree", text: "Four-year undergraduate degrees are typical, with general-education courses plus a major. Entry is assessed by each college." },
      { title: "Master's degree", text: "Graduate coursework programmes look for a relevant bachelor's degree and, in some fields, a test or portfolio." },
      { title: "Doctoral study", text: "PhD applications are research-led and often need a proposal, recommendations, and a faculty match." },
    ],
    admissions: [
      "Start with EducationUSA materials, then build a list from official college websites rather than unofficial rankings alone.",
      "Check whether the institution is accredited and whether your programme is offered on the campus you expect.",
      "Note testing, essay, and recommendation requirements. They are not the same at every college.",
      "After admission, the institution explains the Form I-20. The visa application comes after that step and follows US government instructions.",
    ],
    documents: [
      "Transcripts, certificates, and any evaluation the college requests.",
      "Passport identity page.",
      "Essays, a résumé, or recommendations if the application asks for them.",
      "English-language evidence when required.",
      "The I-20 and the financial documents the college and the visa instructions name. Do not rely on an old fee figure.",
    ],
    questions: [
      "Is this college accredited, and is my major offered at this campus?",
      "Which tests or English scores does this application require?",
      "Is a community-college transfer agreement published in writing?",
      "When will the Form I-20 be issued, and what financial evidence does the college ask for?",
      "Where does Study in the States explain the current student steps?",
    ],
    resources: [
      { label: "EducationUSA", href: "https://educationusa.state.gov/", note: "US Department of State network with official information on accredited US higher education." },
      { label: "Study in the States", href: "https://studyinthestates.dhs.gov/", note: "Official US government information for international students, including the Form I-20 process." },
    ],
    faqs: [
      { question: "Can you guarantee a US student visa or an I-20?", answer: "No. The college decides admission and issues a Form I-20 only if it accepts you and its own conditions are met. A US consular officer decides the visa." },
      { question: "Do I have to apply to a large number of universities?", answer: "There is no fixed number. A short, realistic list based on your qualifications, budget, and subject is more useful than a long list of famous names." },
      { question: "Are SAT or GRE scores always required?", answer: "No. Policies differ by college and change. Use the current freshman or graduate admissions page for each institution." },
      { question: "Is a community college a lesser option?", answer: "It is a different route. For some students it is a practical start, provided any later transfer is confirmed in the universities' published rules." },
    ],
    seoTitle: "Study in the United States",
    seoDescription: "Compare US colleges and universities and find EducationUSA and Study in the States for current admission and student-visa steps.",
  },
  {
    slug: "germany",
    name: "Germany",
    cardDescription:
      "Research German and English-taught programmes, academic recognition, and the difference between direct applications and uni-assist.",
    heroTitle: "Study in Germany",
    summary:
      "Germany has universities and universities of applied sciences, with programmes taught in German, English, or a mix. Recognition of a school or degree certificate is a separate question from the language of the course.",
    image: "/images/germany.jpg",
    imageAlt: "The Brandenburg Gate in Berlin, with visitors crossing the square in front of the monument.",
    overview: [
      "Public universities (Universitäten) and universities of applied sciences (Hochschulen für angewandte Wissenschaften) both award recognised degrees, but their teaching styles and admission routes differ. The programme page is the reliable description.",
      "Many bachelor's programmes are taught in German and ask for a recognised German-language certificate. English-taught programmes are more often found at master's level, though they also exist in some bachelor's courses. Do not assume a programme is in English because the university has an English website.",
      "Whether a foreign school certificate allows direct entry, or whether a preparatory route such as Studienkolleg is required, depends on the certificate and the programme. The anabin database and the DAAD admission database explain the official assessment method. The university makes the admission decision.",
    ],
    pathways: [
      { title: "Preparatory study", text: "Some applicants whose school-leaving certificate is not assessed as a direct higher-education entrance qualification are asked to complete a Studienkolleg or another preparatory route. This is not automatic for every nationality or certificate." },
      { title: "Bachelor's degree", text: "Undergraduate programmes should be checked for language, restricted admission (Numerus Clausus), and whether the application goes to the university or to a central service." },
      { title: "Master's degree", text: "Consecutive master's programmes usually expect a related bachelor's degree. Confirm the language, credit requirements, and deadline." },
      { title: "Doctoral research", text: "Doctoral places are often arranged with a supervisor or a graduate school. They are not applied for in the same way as a taught master's." },
    ],
    admissions: [
      "Use the DAAD Study in Germany pages and Hochschulkompass to find programmes, then open the university's own page.",
      "Check the language of instruction and the exact certificate accepted as proof.",
      "See whether that university uses uni-assist. Many do, but not all. uni-assist is an application service, not the body that grants admission.",
      "Run a non-binding check in the DAAD admission database or anabin for undergraduate eligibility. The result is guidance. The university decides.",
    ],
    documents: [
      "School or degree certificates and transcripts. Certified copies or translations may be required.",
      "Proof of German or English, matching the programme.",
      "Passport identity page.",
      "A CV, motivation letter, or module descriptions if the university asks for them.",
      "Later, the visa documents named by the German mission responsible for your place of residence. Requirements are published officially and change.",
    ],
    questions: [
      "Is this exact programme taught in German, English, or both?",
      "Does my certificate give direct entry, or might a preparatory course be required?",
      "Does this university use uni-assist for my country and my subject?",
      "Is admission restricted, and what is the deadline?",
      "Which German mission publishes the current student-visa document list for applicants in Pakistan?",
    ],
    resources: [
      { label: "Study in Germany", href: "https://www.study-in-germany.de/en/", note: "DAAD campaign site with planning, application, and visa overviews." },
      { label: "DAAD study section", href: "https://www.daad.de/en/studying-in-germany/", note: "German Academic Exchange Service guidance, including programme search context." },
      { label: "DAAD admission database", href: "https://www.daad.de/en/studying-in-germany/requirements/admission-database/", note: "Non-binding undergraduate eligibility check. The university makes the final decision." },
      { label: "uni-assist", href: "https://www.uni-assist.de/en/", note: "Application processing service used by many, not all, German universities." },
      { label: "anabin", href: "https://anabin.kmk.org/", note: "Official KMK database on how foreign qualifications are assessed in Germany." },
      { label: "Hochschulkompass", href: "https://www.hochschulkompass.de/", note: "Course database of the German Rectors' Conference for searching institutions and programmes." },
    ],
    faqs: [
      { question: "Can I study in Germany without German?", answer: "Only if the programme you choose is taught in English or another language you can evidence. A German-taught bachelor's degree normally expects recognised German-language proof. Check the programme, not the country in general." },
      { question: "Does every Pakistani school certificate lead to the same outcome?", answer: "No. Recognition depends on the certificate, the subjects, and the programme. Use anabin and the DAAD admission database, then follow the university's decision. We will not guess a recognition result." },
      { question: "Is uni-assist the same as an offer?", answer: "No. uni-assist checks applications for participating universities. The university still decides whether to admit you." },
      { question: "Is tuition free?", answer: "Do not plan on that assumption. Some public programmes charge a semester contribution rather than full tuition, while others charge international fees. The fee page for your programme and federal state is the source." },
    ],
    seoTitle: "Study in Germany",
    seoDescription: "Research German and English-taught degrees, academic recognition, uni-assist, and official DAAD guidance before you apply.",
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
