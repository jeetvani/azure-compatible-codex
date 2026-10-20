import Link from "next/link";
import { siteIdentity } from "@/content/site";
import { Container } from "./Container";
import { WovenDivider } from "./WovenDivider";
import styles from "./site.module.css";

export function SiteFooter() {
  return <footer className={styles.footer}><WovenDivider /><Container><div className={styles.footerInner}>
    <div><p className={styles.footerWordmark}>{siteIdentity.displayName}</p><p className={styles.footerRegion}>ایل اے کے علاقے کے لیے</p></div>
    <nav className={styles.footerLinks} aria-label="فُٹر نیویگیشن"><Link href="/">ہوم</Link><Link href="/appointment-request">اپائنٹمنٹ کی درخواست</Link><Link href="/#contact">رابطہ</Link></nav>
    <p className={styles.draftNote}>مسودہ: کاروباری نام اور شہر کے نام کی تصدیق باقی ہے۔</p>
  </div></Container></footer>;
}
