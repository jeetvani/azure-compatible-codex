import Link from "next/link";
import { navigation } from "@/content/site";
import { Navigation } from "./Navigation";
import styles from "./site.module.css";
export function SiteHeader() {
  return <header className={styles.header}><div className={`${styles.container} ${styles.headerInner}`}>
    <Link className={styles.wordmark} href="/" aria-label="Airtribe home">Airtribe</Link><Navigation />
    <noscript><nav aria-label="Navigation without JavaScript" className={styles.noScriptNav}>{[...navigation, { label: "Contact", href: "/contact" }, { label: "Enroll now", href: "/enroll" }].map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav></noscript>
  </div></header>;
}
