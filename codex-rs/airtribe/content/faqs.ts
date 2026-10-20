// Shared draft answers constrained to confirmed facts and explicitly pending information.
export type FAQ = { id: string; question: string; answer: string };
export const faqs: readonly FAQ[] = [
  { id: "audience", question: "Who are Airtribe programs for?", answer: "Airtribe serves working tech professionals looking to upskill." },
  { id: "live", question: "Are the programs live?", answer: "Airtribe provides live, cohort-based programs. Specific session schedules have not yet been supplied." },
  { id: "location", question: "Where does Airtribe operate?", answer: "Airtribe serves an online, global audience. No office address is published in this draft." },
  { id: "curriculum", question: "Where can I find curriculum and cohort dates?", answer: "The program-detail layout includes places for both. Confirmed curriculum and dates have not yet been added." },
  { id: "fees", question: "What do programs cost?", answer: "Confirmed fees and currencies have not been supplied." },
  { id: "enrollment", question: "Can I enroll now?", answer: "Not through this draft. Enrollment services are not connected, and no request or payment can be submitted." },
  { id: "contact", question: "How can I contact Airtribe?", answer: "A public contact method has not yet been confirmed. The Contact page shows the current status." },
];
export const homeFaqs = faqs.filter(faq => ["audience", "live", "enrollment"].includes(faq.id));
export const programFaqs: readonly FAQ[] = [
  { id: "program-curriculum", question: "Where is the curriculum?", answer: "The program curriculum has not yet been supplied for this draft." },
  { id: "program-enrollment", question: "Can I enroll in this program?", answer: "This page is a template, not an available program. Enrollment is not connected." },
];
export const faqCopy = { title: "Questions about Airtribe", lead: "Start with the format, audience, and the information available in this draft.", sectionTitle: "Good questions. Clear answers.", ctaTitle: "Keep exploring" };
