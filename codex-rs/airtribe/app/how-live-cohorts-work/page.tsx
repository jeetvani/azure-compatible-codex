import { howCopy } from "@/content/site";
import { pendingLabel } from "@/content/programs";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { CohortIllustration } from "@/components/site/CohortIllustration";
import { PageIntro, Section, SectionHeading, RuledList } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("how");
export default function HowPage() {
  return <><PageIntro eyebrow="THE LEARNING FIELDBOOK / THE FORMAT" title={howCopy.title} lead={howCopy.lead} illustration={<CohortIllustration compact />} />
    <Section tone="white"><div className={styles.editorialGrid}><SectionHeading eyebrow="01 / LEARN TOGETHER" title={howCopy.formatTitle} /><div><RuledList rows={howCopy.formatRows} numbered /><p className={styles.marginTop}>{howCopy.note}</p></div></div></Section>
    <Section tone="muted"><div className={styles.editorialGrid}><SectionHeading eyebrow="02 / PROGRAM INFORMATION" title={howCopy.checklistTitle} /><RuledList rows={howCopy.checklist.map(title => ({ title, copy: pendingLabel }))} /></div></Section>
    <Section compact><SectionHeading title={howCopy.ctaTitle} intro={howCopy.ctaCopy} /><ActionLink href="/programs">Explore programs</ActionLink></Section>
  </>;
}
