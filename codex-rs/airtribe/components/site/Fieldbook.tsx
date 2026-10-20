import Link from "next/link";
import type { FAQ } from "@/content/faqs";
import { pendingLabel, programsCopy } from "@/content/programs";
import { ActionLink } from "./ActionLink";
import { Container } from "./Container";
import styles from "./site.module.css";
export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <div className={styles.sectionHeading}>{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}<h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}
export function PageIntro({ eyebrow, title, lead, children, illustration }: { eyebrow: string; title: string; lead: string; children?: React.ReactNode; illustration?: React.ReactNode }) {
  return <section className={styles.intro}><Container><div className={illustration ? styles.heroGrid : styles.reading}>
    <div><p className={styles.eyebrow}>{eyebrow}</p><h1>{title}</h1>{lead && <p className={styles.lead}>{lead}</p>}{children}</div>{illustration}
  </div></Container></section>;
}
export function Section({ children, tone = "paper", compact = false, id }: { children: React.ReactNode; tone?: "paper" | "white" | "muted" | "dark"; compact?: boolean; id?: string }) {
  return <section id={id} className={`${styles.section} ${styles[tone]} ${compact ? styles.compact : ""}`}><Container>{children}</Container></section>;
}
export function RuledList({ rows, numbered = false }: { rows: readonly { title: string; copy: string }[]; numbered?: boolean }) {
  const List = numbered ? "ol" : "ul";
  return <List className={styles.ruledList}>{rows.map((row, index) => <li key={row.title} className={numbered ? styles.numberedRow : ""}>{numbered && <span className={styles.rowNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}<div><h3>{row.title}</h3><p>{row.copy}</p></div></li>)}</List>;
}
export function FAQAccordion({ items, openFirst = false }: { items: readonly FAQ[]; openFirst?: boolean }) {
  return <div className={styles.accordion}>{items.map((item, i) => <details key={item.id} open={openFirst && i === 0}><summary>{item.question}<span className={styles.faqIndicator} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>;
}
export function StatusNotice({ title, children }: { title: string; children?: React.ReactNode }) {
  return <div className={styles.notice}><span className={styles.statusMark} aria-hidden="true">i</span><div><p className={styles.noticeTitle}>{title}</p>{children}</div></div>;
}
export function ProgramFacts({ facts }: { facts: readonly { title: string; value: string | null }[] }) {
  return <dl className={styles.facts}>{facts.map(fact => <div key={fact.title}><dt>{fact.title}</dt><dd>{fact.value ?? pendingLabel}</dd></div>)}</dl>;
}
export function ProgramPendingPanel({ catalog = false }: { catalog?: boolean }) {
  const Heading = catalog ? "h2" : "h3";
  return <div className={styles.pendingPanel}>
    <div className={styles.pendingLabel}><span className={styles.status}>{catalog ? "CONTENT PENDING" : programsCopy.previewStatus}</span><span className={styles.small}>PROGRAM INFORMATION</span></div>
    <div><Heading className={styles.pendingTitle}>{catalog ? programsCopy.catalogTitle : programsCopy.previewTitle}</Heading><p>{catalog ? programsCopy.catalogCopy : programsCopy.previewCopy}</p>
      <div className={styles.actions}>{!catalog && <ActionLink href="/programs">View programs</ActionLink>}{catalog ? <ActionLink variant="secondary" href="/programs/program-details">Preview program-detail layout</ActionLink> : <Link className={styles.textLink} href="/programs/program-details">Preview the program-detail layout <span aria-hidden="true">↗</span></Link>}</div>
      {catalog && <p className={styles.small}>{programsCopy.templateNote}</p>}
    </div>
  </div>;
}
