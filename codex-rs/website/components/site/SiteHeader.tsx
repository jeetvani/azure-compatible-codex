import Link from "next/link";
import { siteIdentity } from "@/content/site";
import { ActionLink } from "./ActionLink";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import styles from "./site.module.css";

export function SiteHeader({ route }: { route: "home" | "appointment" }) {
  return <header className={styles.header}>
    <Container><div className={styles.headerInner}>
      <Link href="/" className={styles.wordmark}>{siteIdentity.displayName}</Link>
      <nav className={styles.desktopNav} aria-label="بنیادی نیویگیشن">
        <Link className={styles.navLink} href="/" aria-current={route === "home" ? "page" : undefined}>ہوم</Link>
        <Link className={styles.navLink} href="/#attire">ملبوسات</Link>
        <Link className={styles.navLink} href="/#contact">رابطہ</Link>
        <ActionLink href="/appointment-request">اپائنٹمنٹ کی درخواست</ActionLink>
      </nav>
      <MobileNav />
    </div></Container>
  </header>;
}
