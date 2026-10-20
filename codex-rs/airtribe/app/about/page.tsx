import { aboutCopy, positioningRows } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { PageIntro, Section, SectionHeading, RuledList } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("about");
export default function AboutPage() {
  return <><PageIntro eyebrow="THE LEARNING FIELDBOOK / ABOUT" title={aboutCopy.title} lead={aboutCopy.lead}><p className={styles.aboutIntro}>{aboutCopy.intro}</p></PageIntro>
    <Section tone="white"><div className={styles.editorialGrid}><div><SectionHeading title={aboutCopy.audienceTitle} /><p>{aboutCopy.audience}</p></div><div className={styles.audienceLabel}>{aboutCopy.label}</div></div></Section>
    <Section tone="muted"><div className={styles.editorialGrid}><SectionHeading eyebrow="THE FORMAT" title={aboutCopy.offeringTitle} /><RuledList rows={[{ title: "Live", copy: positioningRows[0].copy }, { title: "Cohort-based", copy: positioningRows[1].copy }]} /></div></Section>
    <Section compact><SectionHeading title={aboutCopy.ctaTitle} /><div className={styles.actions}><ActionLink href="/programs">Explore programs</ActionLink><ActionLink href="/how-live-cohorts-work" variant="secondary">How live cohorts work</ActionLink></div></Section>
  </>;
}
