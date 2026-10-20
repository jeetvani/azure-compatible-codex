import { programs, programsCopy } from "@/content/programs";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { PageIntro, Section, SectionHeading, ProgramPendingPanel, RuledList } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("programs");
export default function ProgramsPage() {
  return <><PageIntro eyebrow="THE LEARNING FIELDBOOK / PROGRAMS" title={programsCopy.title} lead={programsCopy.lead}><p>{programsCopy.intro}</p></PageIntro>
    <Section tone="white" compact>{programs.length === 0 && <ProgramPendingPanel catalog />}</Section>
    <Section tone="muted"><div className={styles.editorialGrid}><SectionHeading eyebrow="BEFORE YOUR NEXT STEP" title={programsCopy.reviewTitle} /><div><RuledList rows={programsCopy.reviewRows} /><div className={styles.actions}><ActionLink href="/how-live-cohorts-work" variant="secondary">How live cohorts work</ActionLink></div></div></div></Section>
    <Section compact><div className={styles.reading}><SectionHeading title={programsCopy.availabilityTitle} intro={programsCopy.availability} /><ActionLink href="/enroll" variant="secondary">View enrollment preview</ActionLink></div></Section></>;
}
