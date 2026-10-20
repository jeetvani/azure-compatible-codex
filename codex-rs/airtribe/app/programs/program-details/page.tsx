import Link from "next/link";
import { detailsCopy, programFacts, cohortFacts, learningFacts, detailSections } from "@/content/programs";
import { programFaqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { Container } from "@/components/site/Container";
import { Section, SectionHeading, ProgramFacts, RuledList, FAQAccordion } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("details");
export default function ProgramDetailsPage() {
  return <>
    <section className={styles.templateIntro}><Container><div className={styles.reading}>
      <span className={styles.status}>{detailsCopy.badge}</span>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/programs">Programs</Link><span aria-hidden="true">/</span><span aria-current="page">Program details</span></nav>
      <h1>{detailsCopy.title}</h1><p className={styles.lead}>{detailsCopy.lead}</p>
    </div></Container></section>
    <Container><nav className={styles.detailNav} aria-label="Program sections">{detailSections.map(section => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</nav></Container>
    <Section id="overview" compact><div className={styles.detailsGrid}><div><SectionHeading eyebrow="01 / OVERVIEW" title="Program facts" /><ProgramFacts facts={programFacts} /></div><aside className={styles.summary} aria-labelledby="enrollment-status"><h2 id="enrollment-status">{detailsCopy.summaryTitle}</h2><p>{detailsCopy.summary}</p><ActionLink href="/enroll" variant="secondary">View enrollment preview</ActionLink></aside></div></Section>
    <Section tone="white" id="curriculum"><div className={styles.reading}><SectionHeading eyebrow="02 / CURRICULUM" title="Curriculum" /><span className={styles.status}>{detailsCopy.curriculumStatus}</span><p className={styles.marginTop}>{detailsCopy.curriculum}</p></div></Section>
    <Section id="cohort-dates"><div className={styles.reading}><SectionHeading eyebrow="03 / COHORT DATES" title="Cohort dates" intro={detailsCopy.dates} /><ProgramFacts facts={cohortFacts} /></div></Section>
    <Section tone="muted"><div className={styles.editorialGrid}><SectionHeading eyebrow="04 / LEARNING DETAILS" title={detailsCopy.learningTitle} /><RuledList rows={learningFacts} /></div></Section>
    <Section id="questions"><div className={styles.reading}><SectionHeading eyebrow="05 / QUESTIONS" title="Program questions" /><FAQAccordion items={programFaqs} openFirst /><div className={styles.actions}><ActionLink href="/programs" variant="secondary">Back to programs</ActionLink></div></div></Section>
  </>;
}
