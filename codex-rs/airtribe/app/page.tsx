import Link from "next/link";
import { homeCopy, positioningRows, cohortRows, sharedCopy } from "@/content/site";
import { homeFaqs } from "@/content/faqs";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { Container } from "@/components/site/Container";
import { CohortIllustration } from "@/components/site/CohortIllustration";
import { Section, SectionHeading, RuledList, FAQAccordion, ProgramPendingPanel } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("home");
export default function HomePage() {
  return <>
    <section className={styles.hero}><Container><div className={styles.heroGrid}>
      <div className={styles.heroCopy}><p className={styles.eyebrow}>{homeCopy.eyebrow}</p><h1>{homeCopy.title}</h1><p className={styles.lead}>{homeCopy.lead}</p>
        <div className={styles.actions}><ActionLink href="/programs">Explore programs</ActionLink><ActionLink variant="secondary" href="/how-live-cohorts-work">How live cohorts work</ActionLink></div><p className={styles.small}>{homeCopy.note}</p>
      </div><CohortIllustration />
    </div></Container></section>
    <Section tone="white"><div className={styles.editorialGrid}><SectionHeading eyebrow="01 / THE APPROACH" title={homeCopy.positioningTitle} /><RuledList rows={positioningRows} /></div></Section>
    <Section><SectionHeading eyebrow="02 / PROGRAMS" title={homeCopy.programsTitle} intro={homeCopy.programsIntro} /><ProgramPendingPanel /></Section>
    <Section tone="muted"><div className={styles.editorialGrid}><SectionHeading eyebrow="03 / THE FORMAT" title={homeCopy.cohortTitle} /><div><RuledList rows={cohortRows} numbered /><p className={styles.marginTop}>{homeCopy.cohortNote}</p><ActionLink href="/how-live-cohorts-work" variant="secondary">Understand the format</ActionLink></div></div></Section>
    <Section><div className={styles.editorialGrid}><SectionHeading eyebrow="04 / QUESTIONS" title={homeCopy.faqTitle} /><div><FAQAccordion items={homeFaqs} openFirst /><Link className={`${styles.textLink} ${styles.marginTop}`} href="/faq">Read all FAQs <span aria-hidden="true">↗</span></Link></div></div></Section>
    <Section tone="dark" compact><div className={styles.readinessGrid}><div><p className={styles.eyebrow}>YOUR NEXT CHAPTER</p><h2>{homeCopy.readinessTitle}</h2><p>{homeCopy.readinessCopy}</p></div><div><div className={styles.actions}><ActionLink href="/enroll" variant="light">Enroll now</ActionLink></div><p className={`${styles.small} ${styles.marginTop}`}>{sharedCopy.unavailable}</p></div></div></Section>
  </>;
}
