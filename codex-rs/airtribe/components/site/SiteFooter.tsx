import Link from "next/link";
import { businessFacts, footerNavigation, sharedCopy } from "@/content/site";
import { Container } from "./Container";
import styles from "./site.module.css";
export function SiteFooter() {
  return <footer className={styles.footer}><Container>
    <div className={styles.footerTop}><div><Link href="/" className={styles.wordmark}>Airtribe</Link><p>{sharedCopy.footer}</p><span className={styles.small}>{businessFacts.market}</span></div>
    <nav aria-label="Footer navigation">{footerNavigation.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav></div>
    <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Airtribe</span><span>First-draft website · Details pending</span></div>
  </Container></footer>;
}
