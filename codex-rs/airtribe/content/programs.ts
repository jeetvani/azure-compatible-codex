// Zero approved catalog entries. The template is never an offering.
export type Program = {
  slug: string;
  title: string;
  overview: string;
  curriculum: { title: string; description: string }[] | null;
  cohorts: { id: string; startDate: string; sessionSchedule: string; timeZone: string; availability: "open" | "closed" | "pending" }[] | null;
  duration: string | null;
  instructors: { name: string; biography: string }[] | null;
  prerequisites: string | null;
  learningExpectations: string | null;
  fees: { amount: number; currency: string } | null;
  enrollmentAvailability: "open" | "closed" | "pending";
};
export const programs: readonly Program[] = [];
export const pendingLabel = "Awaiting confirmation";
export const programTemplate = {
  kind: "draft-template", title: null, overview: null, curriculum: null, cohorts: null,
  duration: null, instructors: null, prerequisites: null, learningExpectations: null,
  fees: null, enrollmentAvailability: null, format: "Live, cohort-based",
} as const;
// Draft editorial copy, not approved program data.
export const programsCopy = {
  title: "Explore Airtribe programs", lead: "Live, cohort-based upskilling for working tech professionals.",
  intro: "Confirmed program information will appear here when it is supplied.",
  catalogTitle: "Program catalog not yet published", catalogCopy: "Program names, curriculum, schedules, and fees are awaiting owner-approved content.",
  templateNote: "A draft template, not an available program.",
  previewStatus: "Program content pending", previewTitle: "Program details are being prepared",
  previewCopy: "Confirmed program names, curriculum, cohort dates, and fees have not been added to this draft.",
  reviewTitle: "What to review before enrolling",
  reviewRows: [
    { title: "Curriculum", copy: "Check the topics and learning requirements." },
    { title: "Cohort dates", copy: "Check dates, session times, and time zone." },
    { title: "Commitment", copy: "Review duration and expected participation." },
    { title: "Fees and terms", copy: "Review confirmed costs and enrollment conditions." },
  ],
  availabilityTitle: "Enrollment availability", availability: "Enrollment cannot be completed on this draft. Program details and enrollment services must be connected first.",
};
export const detailsCopy = {
  badge: "DRAFT TEMPLATE — NOT AN AVAILABLE PROGRAM", title: "Program details pending",
  lead: "This layout will hold an owner-approved program overview. No program is currently represented by this template.",
  summaryTitle: "Enrollment status", summary: "Program and cohort information has not been supplied. Enrollment is not connected.",
  curriculumStatus: "Awaiting owner-approved curriculum", curriculum: "Topics, modules, and learning requirements have not been provided.",
  dates: "No confirmed cohort dates are available in this draft.",
  learningTitle: "More program information",
};
export const programFacts = [
  { title: "Program name", value: programTemplate.title },
  { title: "Duration", value: programTemplate.duration },
  { title: "Format", value: programTemplate.format },
  { title: "Fees and currency", value: programTemplate.fees },
];
export const cohortFacts = ["Start date", "Session schedule", "Time zone"].map(title => ({ title, value: null }));
export const learningFacts = ["Instructor details", "Prerequisites", "Learning expectations"].map(title => ({ title, copy: pendingLabel }));
export const detailSections = [ { label: "Overview", id: "overview" }, { label: "Curriculum", id: "curriculum" }, { label: "Cohort dates", id: "cohort-dates" }, { label: "Questions", id: "questions" } ];
export const enrollmentCopy = {
  title: "Enroll with Airtribe", status: "Enrollment is not connected yet.",
  intro: "This is a first-draft preview. No enrollment request, payment, or personal information can be submitted here.",
  reviewTitle: "Review your enrollment details",
  facts: [ { title: "Program", value: "No confirmed program available" }, { title: "Cohort", value: "No confirmed cohort available" }, { title: "Fees", value: "Not supplied" }, { title: "Enrollment service", value: "Not connected" } ],
  readinessTitle: "What needs to be ready",
  readinessNote: "This checklist describes website readiness, not an admissions process.",
  readiness: [
    { title: "Owner-approved program and cohort data", copy: "Confirmed information must identify the program and cohort." },
    { title: "Confirmed fees and enrollment terms", copy: "Costs, currency, and conditions must be supplied and approved." },
    { title: "Privacy and consent requirements", copy: "Owner-approved requirements must be in place before personal information is collected." },
    { title: "A connected enrollment service", copy: "Enrollment creation and availability must be handled by a connected service." },
  ],
  actionsTitle: "What you can do now", actionsCopy: "Explore the program layout or read about the live-cohort format.",
  disabledNote: "Enrollment will remain unavailable until confirmed information and the required services are connected.",
};
