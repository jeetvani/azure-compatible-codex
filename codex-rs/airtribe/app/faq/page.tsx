import { faqs, faqCopy } from "@/content/faqs";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink } from "@/components/site/ActionLink";
import { PageIntro, Section, SectionHeading, FAQAccordion } from "@/components/site/Fieldbook";
import styles from "@/components/site/site.module.css";
export const metadata = pageMetadata("faq");
export default function FAQPage() {
  return <><PageIntro eyebrow="THE LEARNING FIELDBOOK / QUESTIONS" title={faqCopy.title} lead={faqCopy.lead} />
    <Section tone="white"><div className={styles.readingCenter}><SectionHeading title={faqCopy.sectionTitle} /><FAQAccordion items={faqs} openFirst /></div></Section>
    <Section compact><SectionHeading title={faqCopy.ctaTitle} /><div className={styles.actions}><ActionLink href="/programs">View programs</ActionLink><ActionLink href="/contact" variant="secondary">Contact information</ActionLink></div></Section>
  </>;
}
