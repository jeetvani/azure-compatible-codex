// Approved facts are separated from editorial copy and unresolved owner inputs.
export const businessFacts = {
  name: "Airtribe",
  ownership: "Privately held",
  industry: "EdTech and e-learning",
  format: "Live, cohort-based",
  audience: "Working tech professionals",
  market: "Online, global",
} as const;
export const pendingBusiness = { contact: null, productionOrigin: null, brandAssets: null, policies: null };
export const draftSettings = { language: "en", primaryAction: "Enroll now", design: "The live learning fieldbook", status: "First-draft editorial content" } as const;
export const navigation = [
  { label: "Programs", href: "/programs" },
  { label: "How it works", href: "/how-live-cohorts-work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;
export const footerNavigation = [{ label: "Home", href: "/" }, ...navigation, { label: "Enroll now", href: "/enroll" }, { label: "Contact", href: "/contact" }];
export const metadataCopy = {
  home: { title: "Airtribe | Live Cohort-Based Tech Upskilling", description: "Explore Airtribe’s live, cohort-based upskilling format for working tech professionals. Program and enrollment details are being prepared." },
  programs: { title: "Programs | Airtribe", description: "Review Airtribe’s program information area for live, cohort-based tech upskilling. Confirmed program details are awaiting publication." },
  details: { title: "Program Details — Draft Template | Airtribe", description: "A clearly marked draft template for future program curriculum, cohort dates, and enrollment details. Not an available program." },
  how: { title: "How Live Cohorts Work | Airtribe", description: "Understand Airtribe’s live, cohort-based learning format and the program details to review before enrolling." },
  enroll: { title: "Enrollment Preview | Airtribe", description: "Review enrollment readiness for Airtribe. This draft is not connected and cannot accept enrollment requests or payments." },
  faq: { title: "Frequently Asked Questions | Airtribe", description: "Find answers about Airtribe’s audience, live cohort format, and the program and enrollment details still awaiting confirmation." },
  about: { title: "About Airtribe | Live Tech Upskilling", description: "Learn about Airtribe, an EdTech and e-learning company offering live, cohort-based upskilling for working tech professionals." },
  contact: { title: "Contact Information | Airtribe", description: "Check the status of Airtribe’s public contact information and find links to program information and frequently asked questions." },
} as const;
// All following prose is draft editorial content, based only on supplied facts.
export const homeCopy = {
  eyebrow: "LIVE, COHORT-BASED LEARNING",
  title: "Build your next chapter in tech, together.",
  lead: "Airtribe offers live, cohort-based upskilling programs for working tech professionals.",
  note: "Program and enrollment details are being prepared.",
  positioningTitle: "Live learning. A shared cohort.",
  programsTitle: "Find the program for your next step.",
  programsIntro: "Explore the details that matter before enrolling: curriculum, cohort dates, format, and fees.",
  cohortTitle: "What does a live cohort mean?",
  cohortNote: "Session schedules and participation details will be listed with each confirmed program.",
  faqTitle: "A few things to know",
  readinessTitle: "Your next step starts with the details.",
  readinessCopy: "Review the program information before making an enrollment decision.",
};
export const positioningRows = [
  { title: "Live format", copy: "Learn through live sessions." },
  { title: "Cohort-based", copy: "Take part in a program alongside a cohort." },
  { title: "For tech professionals", copy: "Explore upskilling built around a professional tech audience." },
];
export const cohortRows = [
  { title: "Live sessions", copy: "Teaching takes place live rather than being presented here as a self-paced offering." },
  { title: "A shared cohort", copy: "Participants take part as a group within a program." },
];
export const howCopy = {
  title: "Learn live, as part of a cohort.", lead: "Airtribe provides live, cohort-based upskilling programs for tech professionals.",
  formatTitle: "The format, explained",
  formatRows: [{ title: "Live learning", copy: "The program format includes live sessions." }, { title: "Cohort-based participation", copy: "A cohort brings participants into the same program group." }],
  note: "Exact schedules, tools, and participation requirements depend on the confirmed program details, which have not yet been supplied.",
  checklistTitle: "Check the details for your program",
  checklist: ["Curriculum", "Duration", "Session times and time zone", "Instructor information", "Enrollment terms"],
  ctaTitle: "Start with the program information", ctaCopy: "Review the available details and note what is still awaiting confirmation.",
};
export const aboutCopy = {
  title: "About Airtribe", lead: "Live, cohort-based upskilling for tech professionals.",
  intro: "Airtribe is a privately held EdTech and e-learning company serving an online, global audience.",
  audienceTitle: "Built around working professionals", audience: "Airtribe’s audience is working professionals in tech who are exploring further learning.",
  label: "WORKING TECH PROFESSIONALS", offeringTitle: "The offering", ctaTitle: "Explore the learning format",
};
export const contactCopy = {
  title: "Contact Airtribe", lead: "Looking for program or enrollment information?",
  statusTitle: "Contact details are not yet published", statusCopy: "A public email address, phone number, or contact channel has not been confirmed for this draft.",
  note: "This page cannot send messages.", alternativesTitle: "Find information on the site",
  alternatives: [
    { title: "Frequently asked questions", copy: "Read about the audience, format, and information still pending.", href: "/faq" },
    { title: "Program information", copy: "See the catalog status and preview the program-detail layout.", href: "/programs" },
    { title: "How live cohorts work", copy: "Understand the live, cohort-based format.", href: "/how-live-cohorts-work" },
  ],
};
export const sharedCopy = {
  footer: "Live, cohort-based upskilling for tech professionals.",
  unavailable: "Enrollment is not connected in this draft.",
  illustrationCaption: "Illustrative cohort format",
};
