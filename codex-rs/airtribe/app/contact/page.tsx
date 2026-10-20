import Link from "next/link";
import { contactCopy } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro, Section, SectionHeading } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("contact");
export default function ContactPage() {
  return <><PageIntro eyebrow="THE LEARNING FIELDBOOK / CONTACT" title={contactCopy.title} lead={contactCopy.lead} />
    <Section tone="white" compact><div className={`${styles.panel} ${styles.reading}`}><span className={styles.status}>CONTACT INFORMATION PENDING</span><h2>{contactCopy.statusTitle}</h2><p>{contactCopy.statusCopy}</p><p>{contactCopy.note}</p></div></Section>
    <Section tone="muted"><SectionHeading title={contactCopy.alternativesTitle} /><ul className={styles.alternativeList}>{contactCopy.alternatives.map(link => <li key={link.href}><Link href={link.href}>{link.title} <span aria-hidden="true">↗</span></Link><p>{link.copy}</p></li>)}</ul></Section>
  </>;
}
