export type UniversityExample = {
  name: string;
  country: string;
  city: string;
  url: string;
  note: string;
};

/**
 * Independent research examples checked against each institution's own website
 * on 26 October 2026. This is not a partner list and not an endorsement.
 */
export const universityExamples: UniversityExample[] = [
  {
    name: "Universiti Malaya",
    country: "Malaysia",
    city: "Kuala Lumpur",
    url: "https://www.um.edu.my/",
    note: "Public university. Read current programmes and international entry rules on the university website.",
  },
  {
    name: "Taylor's University",
    country: "Malaysia",
    city: "Subang Jaya, Selangor",
    url: "https://university.taylors.edu.my/en.html",
    note: "Private university. Confirm the language, campus, and intake for the specific programme.",
  },
  {
    name: "The University of Manchester",
    country: "United Kingdom",
    city: "Manchester",
    url: "https://www.manchester.ac.uk/",
    note: "Public research university. Undergraduate applications are often made through UCAS; check the course page.",
  },
  {
    name: "University of Leeds",
    country: "United Kingdom",
    city: "Leeds",
    url: "https://www.leeds.ac.uk/",
    note: "Public university. Use the course page for entry requirements rather than a general UK summary.",
  },
  {
    name: "The University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    url: "https://www.unimelb.edu.au/",
    note: "Public university. Confirm that the course and intake are open to international applicants.",
  },
  {
    name: "Monash University",
    country: "Australia",
    city: "Melbourne",
    url: "https://www.monash.edu/",
    note: "Public university with more than one campus. This link is the university's main site. Confirm which campus teaches your course.",
  },
  {
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    url: "https://www.utoronto.ca/",
    note: "Public university with three campuses. Admission requirements differ by faculty and campus.",
  },
  {
    name: "The University of British Columbia",
    country: "Canada",
    city: "Vancouver and Kelowna",
    url: "https://www.ubc.ca/",
    note: "Public university. Check whether you are looking at the Vancouver or Okanagan campus.",
  },
  {
    name: "Purdue University",
    country: "United States",
    city: "West Lafayette, Indiana",
    url: "https://www.purdue.edu/",
    note: "Public university. Use the international admissions pages for freshman or graduate entry, which are not identical.",
  },
  {
    name: "University of Michigan",
    country: "United States",
    city: "Ann Arbor, Michigan",
    url: "https://umich.edu/",
    note: "Public university. Verify accreditation context and programme availability on the official site before you apply.",
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    url: "https://www.tum.de/en/",
    note: "Public technical university. Check whether your programme is taught in German, English, or both.",
  },
  {
    name: "LMU Munich",
    country: "Germany",
    city: "Munich",
    url: "https://www.lmu.de/en/",
    note: "Public university. Its study pages describe German and English-taught options. Confirm the language of the exact degree.",
  },
];
