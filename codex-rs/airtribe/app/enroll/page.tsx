import { enrollmentCopy } from "@/content/programs";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { PageIntro, Section, SectionHeading, StatusNotice, ProgramFacts, RuledList } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("enroll");
export default function EnrollPage() {
  return <><PageIntro eyebrow="THE LEARNING FIELDBOOK / ENROLLMENT PREVIEW" title={enrollmentCopy.title} lead=""><StatusNotice title={enrollmentCopy.status}><p>{enrollmentCopy.intro}</p></StatusNotice></PageIntro>
    <Section tone="white"><div className={styles.editorialGrid}><SectionHeading eyebrow="01 / CURRENT STATUS" title={enrollmentCopy.reviewTitle} /><ProgramFacts facts={enrollmentCopy.facts} /></div></Section>
    <Section tone="muted"><div className={styles.editorialGrid}><SectionHeading eyebrow="02 / WEBSITE READINESS" title={enrollmentCopy.readinessTitle} intro={enrollmentCopy.readinessNote} /><RuledList rows={enrollmentCopy.readiness} numbered /></div></Section>
    <Section><div className={styles.reading}><SectionHeading title={enrollmentCopy.actionsTitle} intro={enrollmentCopy.actionsCopy} /><div className={styles.actions}><ActionLink href="/programs">Back to programs</ActionLink><ActionLink variant="secondary" href="/faq">Read FAQs</ActionLink></div><div className={styles.marginTop}><button className={styles.disabled} type="button" disabled aria-describedby="enrollment-unavailable">Enrollment unavailable</button><p id="enrollment-unavailable" className={`${styles.small} ${styles.marginTop}`}>{enrollmentCopy.disabledNote}</p></div></div></Section>
  </>;
}
